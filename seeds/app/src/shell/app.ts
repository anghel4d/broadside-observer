import { applyQuery, selectionState } from "../domain/query.ts";
import { parseRoute, printRoute, routeId } from "../domain/route.ts";
import { assertNever } from "../domain/never.ts";
import {
  CardIdSchema,
  LineageSchema,
  PoolSchema,
  SECTION_HEADING,
  SECTION_KEYS,
  SORT_KEYS,
  SeedBatchSchema,
  TopicSchema,
  YearSchema,
  defaultQuery,
  type BatchFilter,
  type CardId,
  type Cite,
  type Lineage,
  type LineageFilter,
  type PoolFilter,
  type Query,
  type Route,
  type SeedCard,
  type SortKey,
  type TopicFilter,
  type Year,
} from "../domain/schema.ts";
import type { Corpus } from "../domain/corpus.ts";
import { debounce } from "./debounce.ts";
import { attr, escapeHtml } from "./html.ts";
import { renderMarkdown } from "./markdown.ts";
import {
  browserStorage,
  parseViewMode,
  readStoredView,
  writeStoredView,
  type ViewMode,
} from "./view.ts";

type Model = {
  readonly corpus: Corpus;
  readonly query: Query;
  readonly route: Route;
  readonly view: ViewMode;
};

type Msg =
  | { readonly _tag: "SetSearch"; readonly value: string }
  | { readonly _tag: "SetTopic"; readonly filter: TopicFilter }
  | { readonly _tag: "SetBatch"; readonly filter: BatchFilter }
  | { readonly _tag: "SetPool"; readonly filter: PoolFilter }
  | { readonly _tag: "SetLineage"; readonly filter: LineageFilter }
  | { readonly _tag: "SetYearMin"; readonly value: Year | null }
  | { readonly _tag: "SetYearMax"; readonly value: Year | null }
  | { readonly _tag: "SetSort"; readonly sort: SortKey }
  | { readonly _tag: "SetView"; readonly view: ViewMode }
  | { readonly _tag: "Reset" }
  | { readonly _tag: "Select"; readonly id: CardId }
  | { readonly _tag: "Move"; readonly delta: -1 | 1 }
  | { readonly _tag: "Hash"; readonly hash: string };

const SORT_LABEL = {
  rank: "Rank",
  year: "Year",
  title: "Title",
  relevance: "Relevance",
} as const satisfies Record<SortKey, string>;

type ViewModel = {
  readonly visible: ReadonlyArray<SeedCard>;
  readonly selected: SeedCard | null;
  readonly offFilter: boolean;
  readonly view: ViewMode;
  readonly corpus: Corpus;
};

type Paint = {
  readonly view: ViewMode;
  readonly ids: string;
  readonly highlight: CardId | null;
  readonly detail: CardId | null;
  readonly offFilter: boolean;
};

function init(corpus: Corpus, hash: string, view: ViewMode): Model {
  return {
    corpus,
    query: defaultQuery,
    route: parseRoute(hash),
    view,
  };
}

function update(model: Model, msg: Msg): Model {
  switch (msg._tag) {
    case "SetSearch":
      return { ...model, query: { ...model.query, search: msg.value } };
    case "SetTopic":
      return { ...model, query: { ...model.query, topic: msg.filter } };
    case "SetBatch":
      return { ...model, query: { ...model.query, batch: msg.filter } };
    case "SetPool":
      return { ...model, query: { ...model.query, pool: msg.filter } };
    case "SetLineage":
      return { ...model, query: { ...model.query, lineage: msg.filter } };
    case "SetYearMin":
      return { ...model, query: { ...model.query, year: { ...model.query.year, min: msg.value } } };
    case "SetYearMax":
      return { ...model, query: { ...model.query, year: { ...model.query.year, max: msg.value } } };
    case "SetSort":
      return { ...model, query: { ...model.query, sort: msg.sort } };
    case "SetView":
      return model.view === msg.view ? model : { ...model, view: msg.view };
    case "Reset":
      return { ...model, query: defaultQuery };
    case "Select":
      return routeId(model.route) === msg.id ? model : { ...model, route: { _tag: "Card", id: msg.id } };
    case "Move": {
      const visible = applyQuery(model.corpus, model.query);
      if (visible.length === 0) return model;
      const currentId = routeId(model.route);
      const index = currentId === null ? -1 : visible.findIndex((card) => card.id === currentId);
      if (index < 0) {
        const pick = msg.delta > 0 ? visible[0] : visible[visible.length - 1];
        return pick === undefined ? model : { ...model, route: { _tag: "Card", id: pick.id } };
      }
      const nextIndex = Math.min(visible.length - 1, Math.max(0, index + msg.delta));
      const next = visible[nextIndex];
      if (next === undefined || next.id === currentId) return model;
      return { ...model, route: { _tag: "Card", id: next.id } };
    }
    case "Hash":
      return { ...model, route: parseRoute(msg.hash) };
    default:
      return assertNever(msg);
  }
}

function project(model: Model): ViewModel {
  const visible = applyQuery(model.corpus, model.query);
  const state = selectionState(model.corpus, visible, routeId(model.route));
  return {
    visible,
    selected: state._tag === "None" ? null : state.card,
    offFilter: state._tag === "OffFilter",
    view: model.view,
    corpus: model.corpus,
  };
}

function option(value: string, label: string, selected: boolean): string {
  return `<option value="${attr(value)}"${selected ? " selected" : ""}>${escapeHtml(label)}</option>`;
}

function yearFromInput(raw: string): Year | null {
  if (!/^\d{4}$/u.test(raw)) return null;
  const parsed = YearSchema.safeParse(Number(raw));
  return parsed.success ? parsed.data : null;
}

function parseSort(value: string): SortKey | null {
  for (const key of SORT_KEYS) {
    if (key === value) return key;
  }
  return null;
}

function parseCardId(value: string): CardId | null {
  const parsed = CardIdSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}

function plainText(value: string): string {
  return value.replace(/\s+/gu, " ").trim();
}

function visibleKey(cards: ReadonlyArray<SeedCard>): string {
  return cards.map((card) => card.id).join("\n");
}

function shellHtml(corpus: Corpus, view: ViewMode): string {
  const yearLo = corpus.yearBounds?.[0];
  const yearHi = corpus.yearBounds?.[1];
  const listOn = view === "list";
  return `
    <header class="topbar">
      <div class="brand">
        <h1>Seed browser</h1>
        <p class="lede">In-memory catalog. <kbd>/</kbd> search · <kbd>j</kbd>/<kbd>k</kbd> move.</p>
      </div>
      <div class="topbar-tools">
        <div class="seg" id="view-toggle" role="radiogroup" aria-label="View mode">
          <button type="button" role="radio" data-view="list" aria-checked="${listOn ? "true" : "false"}">List</button>
          <button type="button" role="radio" data-view="cards" aria-checked="${listOn ? "false" : "true"}">Cards</button>
        </div>
        <p class="status" id="status"></p>
      </div>
    </header>
    <div class="chrome" aria-label="Filters">
      <label class="search-field">
        Search
        <input id="query" type="search" placeholder="Title, authors, topics, takeaway" autocomplete="off" spellcheck="false" />
      </label>
      <label>
        Topic
        <select id="topic">
          ${option("", "All topics", true)}
          ${corpus.topics.map((topic) => option(topic, topic, false)).join("")}
        </select>
      </label>
      <label>
        Batch
        <select id="batch">
          ${option("", "All batches", true)}
          ${corpus.batches.map((batch) => option(batch, batch, false)).join("")}
        </select>
      </label>
      <label>
        Pool
        <select id="pool">
          ${option("", "All pools", true)}
          ${corpus.hasUnpooled ? option("__none__", "No pool", false) : ""}
          ${corpus.pools.map((pool) => option(pool, pool, false)).join("")}
        </select>
      </label>
      <label>
        Lineage
        <select id="lineage">
          ${option("", "All lineages", true)}
          ${corpus.hasUnlineaged ? option("__none__", "No lineage", false) : ""}
          ${corpus.lineages.map((lineage) => option(lineage, lineage, false)).join("")}
        </select>
      </label>
      <div class="year-fields">
        <span class="field-label">Year</span>
        <span class="year-inputs">
          <input id="yearMin" type="number" inputmode="numeric" min="1000" max="3000" placeholder="${yearLo ?? "from"}" aria-label="Year from" />
          <span class="year-dash" aria-hidden="true">–</span>
          <input id="yearMax" type="number" inputmode="numeric" min="1000" max="3000" placeholder="${yearHi ?? "to"}" aria-label="Year to" />
        </span>
      </div>
      <label>
        Sort
        <select id="sort">
          ${SORT_KEYS.map((key) => option(key, SORT_LABEL[key], key === "rank")).join("")}
        </select>
      </label>
      <button type="button" class="reset" id="reset">Reset</button>
    </div>
    <div class="workspace" id="workspace" data-view="${attr(view)}">
      <section class="browse-pane" id="browse" aria-label="Card list"></section>
      <section class="detail-pane" id="detail" aria-live="polite"></section>
    </div>
  `;
}

function chip(label: string, kind: string, value?: string): string {
  if (value !== undefined) {
    return `<button type="button" class="chip chip-${attr(kind)} is-filter" data-filter="${attr(kind)}" data-value="${attr(value)}">${escapeHtml(label)}</button>`;
  }
  return `<span class="chip chip-${attr(kind)}">${escapeHtml(label)}</span>`;
}

const LINEAGE_DOC_BASE = "https://github.com/anghel4d/broadside-observer/blob/main/seeds/lineages/";

function lineageDocHref(slug: Lineage): string {
  return `${LINEAGE_DOC_BASE}${encodeURIComponent(slug)}.md`;
}

function citeExternalHref(cite: Cite): string | null {
  if (cite.url !== null) return cite.url;
  if (cite.doi !== null) return `https://doi.org/${cite.doi}`;
  if (cite.arxiv !== null) return `https://arxiv.org/abs/${cite.arxiv}`;
  return null;
}

function renderCites(card: SeedCard, corpus: Corpus): string {
  if (card.cites.length === 0) return "";
  const items = card.cites
    .map((cite) => {
      const year = cite.year === null ? "" : ` <span class="cite-year">${cite.year}</span>`;
      const href = citeExternalHref(cite);
      const external =
        href === null
          ? ""
          : ` <a class="cite-url" href="${attr(href)}" title="${attr(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(href)}</a>`;
      const local =
        cite.card !== null && corpus.byId.has(cite.card)
          ? ` <a class="cite-card" href="${attr(printRoute({ _tag: "Card", id: cite.card }))}">${escapeHtml(cite.card)}</a>`
          : "";
      const links = external === "" && local === "" ? "" : `<div class="cite-links">${external}${local}</div>`;
      return `<li class="cite">
        <div class="cite-head"><span class="cite-title">${escapeHtml(cite.title)}</span>${year}</div>
        ${links}
      </li>`;
    })
    .join("");
  return `<section>
      <h3>Cites</h3>
      <ul class="cites">${items}</ul>
    </section>`;
}

function renderLineageChip(card: SeedCard, corpus: Corpus): string {
  if (card.lineage === null) return "";
  const notes = corpus.lineageDocs.has(card.lineage)
    ? `<a class="chip chip-lineage-doc" href="${attr(lineageDocHref(card.lineage))}" target="_blank" rel="noopener noreferrer">lineage notes</a>`
    : "";
  return `${chip(card.lineage, "lineage", card.lineage)}${notes}`;
}

function renderList(visible: ReadonlyArray<SeedCard>, selectedId: CardId | null): string {
  if (visible.length === 0) {
    return `<p class="empty">No cards match the current filters.</p>`;
  }
  const items = visible
    .map((card) => {
      const active = card.id === selectedId;
      const authors =
        card.authors.slice(0, 2).join(", ") + (card.authors.length > 2 ? " et al." : "");
      return `<li>
        <button type="button" class="card-row${active ? " is-active" : ""}" data-id="${attr(card.id)}" aria-current="${active ? "true" : "false"}">
          <span class="row-meta">
            <span class="rank">#${card.seed_rank}</span>
            <span class="year">${card.year}</span>
            ${card.pool === null ? "" : `<span class="pool">${escapeHtml(card.pool)}</span>`}
            ${card.lineage === null ? "" : `<span class="lineage">${escapeHtml(card.lineage)}</span>`}
          </span>
          <span class="row-title" title="${attr(card.title)}">${escapeHtml(card.title)}</span>
          <span class="row-sub">${escapeHtml(authors)}</span>
        </button>
      </li>`;
    })
    .join("");
  return `<ul class="card-list">${items}</ul>`;
}

function cardFaceChips(card: SeedCard): string {
  const topicLimit = card.lineage === null ? 3 : 2;
  return [
    ...(card.lineage === null ? [] : [chip(card.lineage, "lineage")]),
    ...card.topics.slice(0, topicLimit).map((topic) => chip(topic, "topic")),
  ].join("");
}

function renderGrid(visible: ReadonlyArray<SeedCard>, selectedId: CardId | null): string {
  if (visible.length === 0) {
    return `<p class="empty">No cards match the current filters.</p>`;
  }
  const items = visible
    .map((card) => {
      const active = card.id === selectedId;
      return `<button type="button" class="seed-card${active ? " is-active" : ""}" data-id="${attr(card.id)}" aria-current="${active ? "true" : "false"}">
        <span class="seed-card-meta">
          <span class="rank">#${card.seed_rank}</span>
          <span class="year">${card.year}</span>
        </span>
        <span class="seed-card-title" title="${attr(card.title)}">${escapeHtml(card.title)}</span>
        <span class="seed-card-chips">${cardFaceChips(card)}</span>
        <span class="seed-card-takeaway">${escapeHtml(plainText(card.sections.takeaway))}</span>
      </button>`;
    })
    .join("");
  return `<div class="card-grid">${items}</div>`;
}

function renderBrowse(view: ViewMode, visible: ReadonlyArray<SeedCard>, selectedId: CardId | null): string {
  return view === "list" ? renderList(visible, selectedId) : renderGrid(visible, selectedId);
}

function renderDetail(
  card: SeedCard | null,
  corpus: Corpus,
  offFilter: boolean,
  emptyVisible: boolean,
): string {
  if (card === null) {
    const message = emptyVisible
      ? "No cards match the current filters."
      : "Select a card from the list.";
    return `<div class="empty-detail"><p>${escapeHtml(message)}</p></div>`;
  }

  const banner = offFilter
    ? `<p class="off-filter" role="status">Not in the current filter. Linked card still shown.</p>`
    : "";

  const chips = [
    chip(`rank ${card.seed_rank}`, "rank"),
    chip(String(card.year), "year"),
    ...card.topics.map((topic) => chip(topic, "topic", topic)),
    chip(card.seed_batch, "batch", card.seed_batch),
    ...(card.pool === null ? [] : [chip(card.pool, "pool", card.pool)]),
    renderLineageChip(card, corpus),
    ...(card.relevance_score === null ? [] : [chip(`relevance ${card.relevance_score}`, "relevance")]),
    ...(card.venue.length > 0 ? [chip(card.venue, "venue")] : []),
  ].join("");

  const identifiers = [
    card.arxiv === null
      ? null
      : `arXiv <a href="https://arxiv.org/abs/${attr(card.arxiv)}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.arxiv)}</a>`,
    card.doi === null
      ? null
      : `DOI <a href="https://doi.org/${attr(card.doi)}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.doi)}</a>`,
    card.source.length > 0
      ? `source <a href="${attr(card.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.source)}</a>`
      : null,
  ]
    .filter((item): item is string => item !== null)
    .join(" · ");

  const sections = SECTION_KEYS.map(
    (key) => `<section>
      <h3>${escapeHtml(SECTION_HEADING[key])}</h3>
      ${renderMarkdown(card.sections[key])}
    </section>`,
  ).join("");

  return `
    <article class="detail">
      ${banner}
      <p class="detail-id">${escapeHtml(card.id)}</p>
      <h2>${escapeHtml(card.title)}</h2>
      <p class="authors">${escapeHtml(card.authors.join(" · "))}</p>
      <p class="ids">${identifiers}</p>
      <div class="chips">${chips}</div>
      ${renderCites(card, corpus)}
      ${sections}
      <p class="reviewed">Reviewed ${escapeHtml(card.reviewed)}</p>
    </article>
  `;
}

function requireElement<T extends HTMLElement>(root: HTMLElement, id: string): T {
  const node = root.querySelector(`#${id}`);
  if (!(node instanceof HTMLElement)) throw new Error(`Missing #${id}`);
  return node as T;
}

function syncHash(route: Route): void {
  const next = printRoute(route);
  if (next === "" && (location.hash === "" || location.hash === "#")) return;
  if (location.hash !== next) {
    history.replaceState(null, "", next === "" ? `${location.pathname}${location.search}` : next);
  }
}

function setActive(root: HTMLElement, id: CardId | null): void {
  for (const node of root.querySelectorAll("[data-id]")) {
    if (!(node instanceof HTMLElement)) continue;
    const on = id !== null && node.dataset.id === id;
    node.classList.toggle("is-active", on);
    node.setAttribute("aria-current", on ? "true" : "false");
  }
}

/** Scroll `child` inside `pane` only — never the document. */
function scrollIntoPane(pane: HTMLElement, child: HTMLElement): void {
  const paneRect = pane.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();
  const pad = 6;
  if (childRect.top < paneRect.top + pad) {
    pane.scrollTop += childRect.top - paneRect.top - pad;
  } else if (childRect.bottom > paneRect.bottom - pad) {
    pane.scrollTop += childRect.bottom - paneRect.bottom + pad;
  }
}

function syncViewToggle(root: HTMLElement, view: ViewMode): void {
  for (const node of root.querySelectorAll("#view-toggle [data-view]")) {
    if (!(node instanceof HTMLElement)) continue;
    node.setAttribute("aria-checked", node.dataset.view === view ? "true" : "false");
  }
}

function isTypingTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLSelectElement ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable)
  );
}

export function startApp(root: HTMLElement, corpus: Corpus): void {
  const storage = browserStorage();
  const initialView = readStoredView(storage);
  root.innerHTML = shellHtml(corpus, initialView);

  const queryInput = requireElement<HTMLInputElement>(root, "query");
  const topicSelect = requireElement<HTMLSelectElement>(root, "topic");
  const batchSelect = requireElement<HTMLSelectElement>(root, "batch");
  const poolSelect = requireElement<HTMLSelectElement>(root, "pool");
  const lineageSelect = requireElement<HTMLSelectElement>(root, "lineage");
  const yearMinInput = requireElement<HTMLInputElement>(root, "yearMin");
  const yearMaxInput = requireElement<HTMLInputElement>(root, "yearMax");
  const sortSelect = requireElement<HTMLSelectElement>(root, "sort");
  const resetButton = requireElement<HTMLButtonElement>(root, "reset");
  const viewToggle = requireElement<HTMLElement>(root, "view-toggle");
  const workspace = requireElement<HTMLElement>(root, "workspace");
  const browse = requireElement<HTMLElement>(root, "browse");
  const detail = requireElement<HTMLElement>(root, "detail");
  const status = requireElement<HTMLParagraphElement>(root, "status");

  let model = init(corpus, location.hash, initialView);
  let painted: Paint | null = null;

  const patch = (next: Model): void => {
    const vm = project(next);
    const highlight = vm.offFilter ? null : (vm.selected?.id ?? null);
    const detailId = vm.selected?.id ?? null;
    const ids = visibleKey(vm.visible);
    status.textContent = `${vm.visible.length} shown · ${vm.corpus.cards.length} packed`;
    workspace.dataset.view = vm.view;
    syncViewToggle(root, vm.view);

    const prev = painted;
    if (prev === null || prev.view !== vm.view || prev.ids !== ids) {
      browse.innerHTML = renderBrowse(vm.view, vm.visible, highlight);
    } else if (prev.highlight !== highlight) {
      setActive(browse, highlight);
    }

    if (prev === null || prev.detail !== detailId || prev.offFilter !== vm.offFilter) {
      detail.innerHTML = renderDetail(vm.selected, vm.corpus, vm.offFilter, vm.visible.length === 0);
    }

    const active = browse.querySelector(".is-active");
    if (active instanceof HTMLElement) scrollIntoPane(browse, active);

    painted = {
      view: vm.view,
      ids,
      highlight,
      detail: detailId,
      offFilter: vm.offFilter,
    };
  };

  const dispatch = (msg: Msg): void => {
    const next = update(model, msg);
    if (next === model) return;
    model = next;
    if (msg._tag !== "Hash") syncHash(model.route);
    if (msg._tag === "SetView") writeStoredView(storage, model.view);
    patch(model);
  };

  const onSearch = debounce(75, (value: string) => {
    dispatch({ _tag: "SetSearch", value });
  });

  queryInput.addEventListener("input", () => {
    onSearch(queryInput.value);
  });
  topicSelect.addEventListener("change", () => {
    if (topicSelect.value === "") {
      dispatch({ _tag: "SetTopic", filter: { _tag: "All" } });
      return;
    }
    const topic = TopicSchema.safeParse(topicSelect.value);
    if (topic.success) dispatch({ _tag: "SetTopic", filter: { _tag: "One", topic: topic.data } });
  });
  batchSelect.addEventListener("change", () => {
    if (batchSelect.value === "") {
      dispatch({ _tag: "SetBatch", filter: { _tag: "All" } });
      return;
    }
    const batch = SeedBatchSchema.safeParse(batchSelect.value);
    if (batch.success) dispatch({ _tag: "SetBatch", filter: { _tag: "One", batch: batch.data } });
  });
  poolSelect.addEventListener("change", () => {
    if (poolSelect.value === "") {
      dispatch({ _tag: "SetPool", filter: { _tag: "All" } });
      return;
    }
    if (poolSelect.value === "__none__") {
      dispatch({ _tag: "SetPool", filter: { _tag: "None" } });
      return;
    }
    const pool = PoolSchema.safeParse(poolSelect.value);
    if (pool.success) dispatch({ _tag: "SetPool", filter: { _tag: "One", pool: pool.data } });
  });
  lineageSelect.addEventListener("change", () => {
    if (lineageSelect.value === "") {
      dispatch({ _tag: "SetLineage", filter: { _tag: "All" } });
      return;
    }
    if (lineageSelect.value === "__none__") {
      dispatch({ _tag: "SetLineage", filter: { _tag: "None" } });
      return;
    }
    const lineage = LineageSchema.safeParse(lineageSelect.value);
    if (lineage.success) dispatch({ _tag: "SetLineage", filter: { _tag: "One", lineage: lineage.data } });
  });
  yearMinInput.addEventListener("input", () => {
    const raw = yearMinInput.value.trim();
    if (raw === "") dispatch({ _tag: "SetYearMin", value: null });
    else {
      const year = yearFromInput(raw);
      if (year !== null) dispatch({ _tag: "SetYearMin", value: year });
    }
  });
  yearMaxInput.addEventListener("input", () => {
    const raw = yearMaxInput.value.trim();
    if (raw === "") dispatch({ _tag: "SetYearMax", value: null });
    else {
      const year = yearFromInput(raw);
      if (year !== null) dispatch({ _tag: "SetYearMax", value: year });
    }
  });
  sortSelect.addEventListener("change", () => {
    const sort = parseSort(sortSelect.value);
    if (sort !== null) dispatch({ _tag: "SetSort", sort });
  });
  viewToggle.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("button[data-view]");
    if (!(button instanceof HTMLButtonElement) || button.dataset.view === undefined) return;
    const view = parseViewMode(button.dataset.view);
    if (view !== null) dispatch({ _tag: "SetView", view });
  });
  resetButton.addEventListener("click", () => {
    queryInput.value = "";
    topicSelect.value = "";
    batchSelect.value = "";
    poolSelect.value = "";
    lineageSelect.value = "";
    yearMinInput.value = "";
    yearMaxInput.value = "";
    sortSelect.value = "rank";
    dispatch({ _tag: "Reset" });
  });
  browse.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("button[data-id]");
    if (!(button instanceof HTMLButtonElement) || button.dataset.id === undefined) return;
    const id = parseCardId(button.dataset.id);
    if (id !== null) dispatch({ _tag: "Select", id });
  });
  detail.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("button[data-filter]");
    if (!(button instanceof HTMLButtonElement)) return;
    const kind = button.dataset.filter;
    const value = button.dataset.value;
    if (kind === undefined || value === undefined) return;
    if (kind === "topic") {
      const topic = TopicSchema.safeParse(value);
      if (!topic.success) return;
      topicSelect.value = value;
      dispatch({ _tag: "SetTopic", filter: { _tag: "One", topic: topic.data } });
    } else if (kind === "batch") {
      const batch = SeedBatchSchema.safeParse(value);
      if (!batch.success) return;
      batchSelect.value = value;
      dispatch({ _tag: "SetBatch", filter: { _tag: "One", batch: batch.data } });
    } else if (kind === "pool") {
      const pool = PoolSchema.safeParse(value);
      if (!pool.success) return;
      poolSelect.value = value;
      dispatch({ _tag: "SetPool", filter: { _tag: "One", pool: pool.data } });
    } else if (kind === "lineage") {
      const lineage = LineageSchema.safeParse(value);
      if (!lineage.success) return;
      lineageSelect.value = value;
      dispatch({ _tag: "SetLineage", filter: { _tag: "One", lineage: lineage.data } });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (isTypingTarget(event.target)) return;
    if (event.key === "/" ) {
      event.preventDefault();
      queryInput.focus();
      queryInput.select();
      return;
    }
    if (event.key === "ArrowDown" || event.key === "j") {
      event.preventDefault();
      dispatch({ _tag: "Move", delta: 1 });
    } else if (event.key === "ArrowUp" || event.key === "k") {
      event.preventDefault();
      dispatch({ _tag: "Move", delta: -1 });
    }
  });

  window.addEventListener("hashchange", () => {
    dispatch({ _tag: "Hash", hash: location.hash });
  });

  patch(model);
}
