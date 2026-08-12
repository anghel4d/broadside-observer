import { applyQuery, selectedCard } from "../domain/query.ts";
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

type Model = {
  readonly corpus: Corpus;
  readonly query: Query;
  readonly route: Route;
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
  readonly query: Query;
  readonly visible: ReadonlyArray<SeedCard>;
  readonly selected: SeedCard | null;
  readonly corpus: Corpus;
};

function init(corpus: Corpus, hash: string): Model {
  return {
    corpus,
    query: defaultQuery,
    route: parseRoute(hash),
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
    case "Reset":
      return { ...model, query: defaultQuery };
    case "Select":
      return { ...model, route: { _tag: "Card", id: msg.id } };
    case "Move": {
      const visible = applyQuery(model.corpus, model.query);
      if (visible.length === 0) return model;
      const currentId = selectedCard(model.corpus, visible, routeId(model.route))?.id;
      const index = currentId === undefined ? 0 : visible.findIndex((card) => card.id === currentId);
      const from = index < 0 ? 0 : index;
      const nextIndex = Math.min(visible.length - 1, Math.max(0, from + msg.delta));
      const next = visible[nextIndex];
      return next === undefined ? model : { ...model, route: { _tag: "Card", id: next.id } };
    }
    case "Hash":
      return { ...model, route: parseRoute(msg.hash) };
    default:
      return assertNever(msg);
  }
}

function project(model: Model): ViewModel {
  const visible = applyQuery(model.corpus, model.query);
  return {
    query: model.query,
    visible,
    selected: selectedCard(model.corpus, visible, routeId(model.route)),
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

function shellHtml(corpus: Corpus): string {
  const yearLo = corpus.yearBounds?.[0];
  const yearHi = corpus.yearBounds?.[1];
  return `
    <header class="topbar">
      <div>
        <h1>Seed browser</h1>
        <p class="lede">Validated local catalog. Search and filter stay in memory.</p>
      </div>
      <p class="status" id="status"></p>
    </header>
    <div class="layout">
      <aside class="filters" aria-label="Filters">
        <label>
          Search
          <input id="query" type="search" placeholder="Title, authors, topics, takeaway" autocomplete="off" />
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
        <div class="year-row">
          <label>
            Year from
            <input id="yearMin" type="number" inputmode="numeric" placeholder="${yearLo ?? ""}" />
          </label>
          <label>
            Year to
            <input id="yearMax" type="number" inputmode="numeric" placeholder="${yearHi ?? ""}" />
          </label>
        </div>
        <label>
          Sort
          <select id="sort">
            ${SORT_KEYS.map((key) => option(key, SORT_LABEL[key], key === "rank")).join("")}
          </select>
        </label>
        <button type="button" class="reset" id="reset">Reset filters</button>
      </aside>
      <section class="list-pane" aria-label="Card list">
        <ul class="card-list" id="list"></ul>
      </section>
      <section class="detail-pane" id="detail" aria-live="polite"></section>
    </div>
  `;
}

function chip(label: string, kind: string, value?: string): string {
  const data =
    value === undefined ? "" : ` data-filter="${attr(kind)}" data-value="${attr(value)}"`;
  const clickable = value === undefined ? "" : " is-filter";
  return `<button type="button" class="chip chip-${attr(kind)}${clickable}"${data}>${escapeHtml(label)}</button>`;
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
          : ` <a class="cite-url" href="${attr(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(href)}</a>`;
      const local =
        cite.card !== null && corpus.byId.has(cite.card)
          ? ` <a class="cite-card" href="${attr(printRoute({ _tag: "Card", id: cite.card }))}">${escapeHtml(cite.card)}</a>`
          : "";
      return `<li class="cite">
        <span class="cite-title">${escapeHtml(cite.title)}</span>${year}${external}${local}
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
    return `<li class="empty">No cards match the current filters.</li>`;
  }
  return visible
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
          <span class="row-title">${escapeHtml(card.title)}</span>
          <span class="row-sub">${escapeHtml(authors)}</span>
        </button>
      </li>`;
    })
    .join("");
}

function renderDetail(card: SeedCard | null, corpus: Corpus): string {
  if (card === null) {
    return `<div class="empty-detail"><p>Select a card from the list.</p></div>`;
  }

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

export function startApp(root: HTMLElement, corpus: Corpus): void {
  root.innerHTML = shellHtml(corpus);

  const queryInput = requireElement<HTMLInputElement>(root, "query");
  const topicSelect = requireElement<HTMLSelectElement>(root, "topic");
  const batchSelect = requireElement<HTMLSelectElement>(root, "batch");
  const poolSelect = requireElement<HTMLSelectElement>(root, "pool");
  const lineageSelect = requireElement<HTMLSelectElement>(root, "lineage");
  const yearMinInput = requireElement<HTMLInputElement>(root, "yearMin");
  const yearMaxInput = requireElement<HTMLInputElement>(root, "yearMax");
  const sortSelect = requireElement<HTMLSelectElement>(root, "sort");
  const resetButton = requireElement<HTMLButtonElement>(root, "reset");
  const list = requireElement<HTMLUListElement>(root, "list");
  const detail = requireElement<HTMLElement>(root, "detail");
  const status = requireElement<HTMLParagraphElement>(root, "status");

  let model = init(corpus, location.hash);

  const patch = (next: Model): void => {
    const vm = project(next);
    status.textContent = `${vm.visible.length} shown · ${vm.corpus.cards.length} packed`;
    list.innerHTML = renderList(vm.visible, vm.selected?.id ?? null);
    detail.innerHTML = renderDetail(vm.selected, vm.corpus);
    const active = list.querySelector(".is-active");
    if (active instanceof HTMLElement) active.scrollIntoView({ block: "nearest" });
  };

  const dispatch = (msg: Msg): void => {
    model = update(model, msg);
    if (msg._tag !== "Hash") syncHash(model.route);
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
  list.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("button.card-row");
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
    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement
    ) {
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
