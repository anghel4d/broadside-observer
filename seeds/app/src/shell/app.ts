import {
  FILTER_KEYS,
  activeFilters,
  applyQuery,
  clearFilter,
  findCardByRank,
  selectionState,
  type FilterKey,
} from "../domain/query.ts";
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
  SeedRankSchema,
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
  type SeedRank,
  type SortKey,
  type TopicFilter,
  type Year,
} from "../domain/schema.ts";
import type { Corpus } from "../domain/corpus.ts";
import { labelForLineage, labelForPool } from "../domain/lineageLabels.ts";
import { createBrowseVirtualizer, type BrowseRender } from "./browse.ts";
import { debounce } from "./debounce.ts";
import { gridDirFromKey, moveGridIndex, type GridDir } from "./gridNav.ts";
import { attr, escapeHtml } from "./html.ts";
import {
  COMPACT_MEDIA,
  isCardsSheetLayout,
  isCardsSheetVisible,
  readStoredDetailFocus,
  writeStoredDetailFocus,
} from "./layout.ts";
import { renderMarkdown } from "./markdown.ts";
import { displayTopics } from "./tags.ts";
import type { Slice } from "./virtualize.ts";
import {
  browserStorage,
  parseViewMode,
  printViewSearch,
  resolveView,
  writeStoredView,
  type ViewMode,
} from "./view.ts";

type Model = {
  readonly corpus: Corpus;
  readonly query: Query;
  readonly route: Route;
  readonly view: ViewMode;
  readonly detailFocus: boolean;
  readonly cardsSheet: boolean;
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
  | { readonly _tag: "SetDetailFocus"; readonly value: boolean }
  | { readonly _tag: "SetCardsSheet"; readonly value: boolean }
  | { readonly _tag: "ClearFilter"; readonly key: FilterKey }
  | { readonly _tag: "Reset" }
  | { readonly _tag: "Select"; readonly id: CardId }
  | { readonly _tag: "SelectFirst" }
  | { readonly _tag: "JumpRank"; readonly rank: SeedRank }
  | { readonly _tag: "Move"; readonly delta: -1 | 1 }
  | { readonly _tag: "MoveGrid"; readonly dir: GridDir; readonly cols: number }
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
  readonly detailFocus: boolean;
  readonly cardsSheet: boolean;
  readonly corpus: Corpus;
  readonly query: Query;
};

type Paint = {
  readonly detail: CardId | null;
  readonly offFilter: boolean;
  readonly hasVisible: boolean;
  readonly filterKey: string;
  readonly detailFocus: boolean;
};

function init(corpus: Corpus, hash: string, view: ViewMode, detailFocus: boolean): Model {
  const route = parseRoute(hash);
  return {
    corpus,
    query: defaultQuery,
    route,
    view,
    detailFocus,
    cardsSheet: view === "cards" && route._tag === "Card",
  };
}

function selectCard(model: Model, id: CardId): Model {
  const sheet = model.view === "cards" ? true : model.cardsSheet;
  if (routeId(model.route) === id && model.cardsSheet === sheet) return model;
  return { ...model, route: { _tag: "Card", id }, cardsSheet: sheet };
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
      return model.view === msg.view ? model : { ...model, view: msg.view, cardsSheet: false };
    case "SetDetailFocus":
      return model.detailFocus === msg.value ? model : { ...model, detailFocus: msg.value };
    case "SetCardsSheet":
      return model.cardsSheet === msg.value ? model : { ...model, cardsSheet: msg.value };
    case "ClearFilter":
      return { ...model, query: clearFilter(model.query, msg.key) };
    case "Reset":
      return { ...model, query: defaultQuery };
    case "Select":
      return selectCard(model, msg.id);
    case "SelectFirst": {
      const visible = applyQuery(model.corpus, model.query);
      const first = visible[0];
      if (first === undefined) return model;
      return selectCard(model, first.id);
    }
    case "JumpRank": {
      const visible = applyQuery(model.corpus, model.query);
      const hit = findCardByRank(visible, model.corpus.cards, msg.rank);
      if (hit === null) return model;
      return selectCard(model, hit.id);
    }
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
    case "MoveGrid": {
      const visible = applyQuery(model.corpus, model.query);
      if (visible.length === 0) return model;
      const currentId = routeId(model.route);
      const index = currentId === null ? -1 : visible.findIndex((card) => card.id === currentId);
      if (index < 0) {
        const forward = msg.dir === "j" || msg.dir === "l";
        const pick = forward ? visible[0] : visible[visible.length - 1];
        return pick === undefined ? model : { ...model, route: { _tag: "Card", id: pick.id } };
      }
      const nextIndex = moveGridIndex(index, msg.cols, visible.length, msg.dir);
      const next = visible[nextIndex];
      if (next === undefined || next.id === currentId) return model;
      return { ...model, route: { _tag: "Card", id: next.id } };
    }
    case "Hash": {
      const route = parseRoute(msg.hash);
      return {
        ...model,
        route,
        cardsSheet: route._tag === "Card" && model.view === "cards" ? true : model.cardsSheet,
      };
    }
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
    detailFocus: model.detailFocus,
    cardsSheet: model.cardsSheet,
    corpus: model.corpus,
    query: model.query,
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

function parseFilterKey(value: string): FilterKey | null {
  for (const key of FILTER_KEYS) {
    if (key === value) return key;
  }
  return null;
}

function parseRank(raw: string): SeedRank | null {
  if (!/^-?\d+$/u.test(raw.trim())) return null;
  const parsed = SeedRankSchema.safeParse(Number(raw.trim()));
  return parsed.success ? parsed.data : null;
}

function plainText(value: string): string {
  return value.replace(/\s+/gu, " ").trim();
}

function filterKey(query: Query): string {
  return activeFilters(query)
    .map((filter) => `${filter.key}:${filter.label}`)
    .join("\n");
}

function topicSelectValue(filter: TopicFilter): string {
  return filter._tag === "All" ? "" : filter.topic;
}

function batchSelectValue(filter: BatchFilter): string {
  return filter._tag === "All" ? "" : filter.batch;
}

function poolSelectValue(filter: PoolFilter): string {
  switch (filter._tag) {
    case "All":
      return "";
    case "None":
      return "__none__";
    case "One":
      return filter.pool;
  }
}

function lineageSelectValue(filter: LineageFilter): string {
  switch (filter._tag) {
    case "All":
      return "";
    case "None":
      return "__none__";
    case "One":
      return filter.lineage;
  }
}

function shellHtml(corpus: Corpus, view: ViewMode, detailFocus: boolean): string {
  const yearLo = corpus.yearBounds?.[0];
  const yearHi = corpus.yearBounds?.[1];
  const listOn = view === "list";
  return `
    <header class="topbar">
      <div class="brand">
        <h1>Seed browser</h1>
        <p class="lede">In-memory catalog. <kbd>/</kbd> search · <kbd>j</kbd>/<kbd>k</kbd> list · <kbd>hjkl</kbd> cards · <kbd>Esc</kbd> clear.</p>
      </div>
      <div class="topbar-tools">
        <div class="seg" id="view-toggle" role="radiogroup" aria-label="View mode">
          <button type="button" role="radio" data-view="list" aria-checked="${listOn ? "true" : "false"}">List</button>
          <button type="button" role="radio" data-view="cards" aria-checked="${listOn ? "false" : "true"}">Cards</button>
        </div>
        <button type="button" class="focus-detail" id="focus-detail" aria-pressed="${detailFocus ? "true" : "false"}" aria-keyshortcuts="]" title="Widen the detail pane (])">
          Focus detail
        </button>
        <p class="status" id="status"></p>
      </div>
    </header>
    <div class="chrome" id="chrome" aria-label="Filters">
      <label class="search-field">
        Search
        <input id="query" type="search" placeholder="Title, authors, topics, takeaway" autocomplete="off" spellcheck="false" />
      </label>
      <button type="button" class="filters-toggle" id="filters-toggle" aria-controls="filter-fields" aria-expanded="false">
        Filters
      </button>
      <div class="filter-fields" id="filter-fields">
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
            ${corpus.pools.map((pool) => option(pool, labelForPool(pool), false)).join("")}
          </select>
        </label>
        <label>
          Lineage
          <select id="lineage">
            ${option("", "All lineages", true)}
            ${corpus.hasUnlineaged ? option("__none__", "No lineage", false) : ""}
            ${corpus.lineages.map((lineage) => option(lineage, labelForLineage(lineage), false)).join("")}
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
        <label class="jump-field">
          Rank
          <input id="jump-rank" type="text" inputmode="numeric" placeholder="#" autocomplete="off" spellcheck="false" aria-label="Jump to rank" />
        </label>
      </div>
      <button type="button" class="reset" id="reset">Reset</button>
    </div>
    <div class="filter-pills" id="filter-pills" role="list" aria-label="Active filters"></div>
    <div class="workspace" id="workspace" data-view="${attr(view)}" data-focus="${detailFocus ? "detail" : "browse"}" data-sheet="closed">
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
  return `${chip(labelForLineage(card.lineage), "lineage", card.lineage)}${notes}`;
}

function renderListRow(
  card: SeedCard,
  selectedId: CardId | null,
  index: number,
  count: number,
): string {
  const active = card.id === selectedId;
  const authors = card.authors.slice(0, 2).join(", ") + (card.authors.length > 2 ? " et al." : "");
  return `<button type="button" class="card-row${active ? " is-active" : ""}" data-id="${attr(card.id)}" tabindex="-1" aria-current="${active ? "true" : "false"}" aria-setsize="${count}" aria-posinset="${index + 1}" title="${attr(card.title)}">
          <span class="row-meta">
            <span class="rank">#${card.seed_rank}</span>
            <span class="year">${card.year}</span>
            ${card.pool === null ? "" : `<span class="pool">${escapeHtml(labelForPool(card.pool))}</span>`}
            ${card.lineage === null ? "" : `<span class="lineage">${escapeHtml(labelForLineage(card.lineage))}</span>`}
          </span>
          <span class="row-title" title="${attr(card.title)}">${escapeHtml(card.title)}</span>
          <span class="row-sub">${escapeHtml(authors)}</span>
        </button>`;
}

function renderList(visible: ReadonlyArray<SeedCard>, selectedId: CardId | null, slice: Slice): string {
  if (visible.length === 0) {
    return `<p class="empty">No cards match the current filters.</p>`;
  }
  const items: string[] = [
    `<div class="virt-plane" style="padding-top:${slice.padTop}px;padding-bottom:${slice.padBottom}px;min-height:${slice.total}px">`,
    `<ul class="card-list">`,
  ];
  for (let i = slice.start; i < slice.end; i++) {
    const card = visible[i];
    if (card === undefined) continue;
    items.push(`<li>${renderListRow(card, selectedId, i, visible.length)}</li>`);
  }
  items.push(`</ul></div>`);
  return items.join("");
}

function cardFaceChips(card: SeedCard): string {
  const topics = displayTopics(card);
  const topicLimit = card.lineage === null ? 3 : 2;
  return [
    ...(card.lineage === null ? [] : [chip(labelForLineage(card.lineage), "lineage")]),
    ...topics.slice(0, topicLimit).map((topic) => chip(topic, "topic")),
  ].join("");
}

function renderGrid(visible: ReadonlyArray<SeedCard>, selectedId: CardId | null, slice: Slice): string {
  if (visible.length === 0) {
    return `<p class="empty">No cards match the current filters.</p>`;
  }
  const items: string[] = [
    `<div class="virt-plane" style="padding-top:${slice.padTop}px;padding-bottom:${slice.padBottom}px;min-height:${slice.total}px">`,
    `<div class="card-grid">`,
  ];
  for (let i = slice.start; i < slice.end; i++) {
    const card = visible[i];
    if (card === undefined) continue;
    const active = card.id === selectedId;
    items.push(`<button type="button" class="seed-card${active ? " is-active" : ""}" data-id="${attr(card.id)}" tabindex="-1" aria-current="${active ? "true" : "false"}" aria-setsize="${visible.length}" aria-posinset="${i + 1}" title="${attr(card.title)}">
        <span class="seed-card-meta">
          <span class="rank">#${card.seed_rank}</span>
          <span class="year">${card.year}</span>
        </span>
        <span class="seed-card-title" title="${attr(card.title)}">${escapeHtml(card.title)}</span>
        <span class="seed-card-chips">${cardFaceChips(card)}</span>
        <span class="seed-card-takeaway">${escapeHtml(plainText(card.sections.takeaway))}</span>
      </button>`);
  }
  items.push(`</div></div>`);
  return items.join("");
}

const renderBrowse: BrowseRender = (view, visible, selectedId, slice) =>
  view === "list" ? renderList(visible, selectedId, slice) : renderGrid(visible, selectedId, slice);

function renderFilterPills(query: Query): string {
  const filters = activeFilters(query);
  if (filters.length === 0) return "";
  return filters
    .map(
      (filter) =>
        `<span class="filter-pill" role="listitem">
          <span class="filter-pill-key">${escapeHtml(filter.key)}</span>
          <span class="filter-pill-value">${escapeHtml(filter.label)}</span>
          <button type="button" class="filter-pill-clear" data-clear="${attr(filter.key)}" aria-label="Clear ${attr(filter.key)} filter">×</button>
        </span>`,
    )
    .join("");
}

function renderDetail(
  card: SeedCard | null,
  corpus: Corpus,
  offFilter: boolean,
  visibleCount: number,
): string {
  if (card === null) {
    const message = visibleCount === 0
      ? "No cards match the current filters."
      : "Select a card from the list.";
    return `<div class="reading-col"><div class="empty-detail"><p>${escapeHtml(message)}</p></div></div>`;
  }

  const firstAction =
    visibleCount > 0
      ? `<button type="button" class="off-filter-btn" data-off="first" title="Shortcut: Enter" aria-keyshortcuts="Enter">Show first match</button>`
      : "";
  const banner = offFilter
    ? `<div class="off-filter" role="status">
        <p class="off-filter-copy">Not in the current filter. Linked card still shown.</p>
        <p class="off-filter-actions">
          <button type="button" class="off-filter-btn" data-off="clear" title="Shortcut: c" aria-keyshortcuts="c">Clear filters</button>
          ${firstAction}
        </p>
      </div>`
    : "";

  const topicChips = [
    ...displayTopics(card).map((topic) => chip(topic, "topic", topic)),
    renderLineageChip(card, corpus),
  ].join("");

  const provenance = [
    `<span class="prov-item">rank ${card.seed_rank}</span>`,
    `<span class="prov-item">${card.year}</span>`,
    `<button type="button" class="prov-filter" data-filter="batch" data-value="${attr(card.seed_batch)}">${escapeHtml(card.seed_batch)}</button>`,
    ...(card.pool === null
      ? []
      : [
          `<button type="button" class="prov-filter" data-filter="pool" data-value="${attr(card.pool)}">${escapeHtml(labelForPool(card.pool))}</button>`,
        ]),
    ...(card.relevance_score === null ? [] : [`<span class="prov-item">relevance ${card.relevance_score}</span>`]),
    ...(card.venue.length > 0 ? [`<span class="prov-item prov-venue">${escapeHtml(card.venue)}</span>`] : []),
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
    <div class="reading-col">
      <article class="detail">
        <header class="detail-head">
          <button type="button" class="detail-dismiss" data-sheet="close" title="Back to grid (Esc)" aria-keyshortcuts="Escape">Back to grid</button>
          ${banner}
          <h2 id="detail-title" title="${attr(card.title)}"><span class="detail-rank">#${card.seed_rank}</span>${escapeHtml(card.title)}</h2>
        </header>
        <div class="detail-body">
          <p class="detail-id">${escapeHtml(card.id)}</p>
          <p class="authors" title="${attr(card.authors.join(" · "))}">${escapeHtml(card.authors.join(" · "))}</p>
          <p class="ids">${identifiers}</p>
          <div class="chips chips-topics">${topicChips}</div>
          <p class="provenance">${provenance}</p>
          ${renderCites(card, corpus)}
          ${sections}
          <p class="reviewed">Reviewed ${escapeHtml(card.reviewed)}</p>
        </div>
      </article>
    </div>
  `;
}

function requireElement<T extends HTMLElement>(root: HTMLElement, id: string): T {
  const node = root.querySelector(`#${id}`);
  if (!(node instanceof HTMLElement)) throw new Error(`Missing #${id}`);
  return node as T;
}

function syncLocation(route: Route, view: ViewMode): void {
  const hash = printRoute(route);
  const search = printViewSearch(location.search, view);
  const next = `${location.pathname}${search}${hash}`;
  const currentHash = location.hash === "#" ? "" : location.hash;
  const current = `${location.pathname}${location.search}${currentHash}`;
  if (next === current) return;
  history.replaceState(null, "", next);
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
  const initialView = resolveView(location.search, storage);
  const initialFocus = readStoredDetailFocus(storage);
  root.innerHTML = shellHtml(corpus, initialView, initialFocus);

  const chrome = requireElement<HTMLElement>(root, "chrome");
  const queryInput = requireElement<HTMLInputElement>(root, "query");
  const filtersToggle = requireElement<HTMLButtonElement>(root, "filters-toggle");
  const filterFields = requireElement<HTMLElement>(root, "filter-fields");
  const filterPills = requireElement<HTMLElement>(root, "filter-pills");
  const topicSelect = requireElement<HTMLSelectElement>(root, "topic");
  const batchSelect = requireElement<HTMLSelectElement>(root, "batch");
  const poolSelect = requireElement<HTMLSelectElement>(root, "pool");
  const lineageSelect = requireElement<HTMLSelectElement>(root, "lineage");
  const yearMinInput = requireElement<HTMLInputElement>(root, "yearMin");
  const yearMaxInput = requireElement<HTMLInputElement>(root, "yearMax");
  const sortSelect = requireElement<HTMLSelectElement>(root, "sort");
  const jumpRankInput = requireElement<HTMLInputElement>(root, "jump-rank");
  const resetButton = requireElement<HTMLButtonElement>(root, "reset");
  const viewToggle = requireElement<HTMLElement>(root, "view-toggle");
  const focusDetail = requireElement<HTMLButtonElement>(root, "focus-detail");
  const workspace = requireElement<HTMLElement>(root, "workspace");
  const browse = requireElement<HTMLElement>(root, "browse");
  const detail = requireElement<HTMLElement>(root, "detail");
  const status = requireElement<HTMLParagraphElement>(root, "status");
  const virt = createBrowseVirtualizer(browse, renderBrowse);

  let model = init(corpus, location.hash, initialView, initialFocus);
  let painted: Paint | null = null;
  let filtersOpen = false;
  let sheetWasVisible = false;
  const compactLayout = window.matchMedia(COMPACT_MEDIA);

  const syncFilterDisclosure = (): void => {
    const narrow = compactLayout.matches;
    const showFields = !narrow || filtersOpen;
    filterFields.toggleAttribute("hidden", !showFields);
    chrome.classList.toggle("is-filters-open", filtersOpen);
    filtersToggle.setAttribute("aria-expanded", filtersOpen ? "true" : "false");
    filtersToggle.hidden = !narrow;
  };

  const syncSheetChrome = (vm: ViewModel, detailHadFocus: boolean): void => {
    const compact = compactLayout.matches;
    const sheetLayout = isCardsSheetLayout(vm.view, compact);
    const sheetVisible = isCardsSheetVisible({
      view: vm.view,
      compact,
      sheetOpen: vm.cardsSheet,
      hasSelection: vm.selected !== null,
    });
    workspace.dataset.sheet = sheetVisible ? "open" : "closed";
    if (sheetVisible) {
      detail.setAttribute("role", "dialog");
      detail.setAttribute("aria-modal", "true");
      detail.setAttribute("aria-labelledby", "detail-title");
      detail.removeAttribute("aria-hidden");
    } else {
      detail.removeAttribute("role");
      detail.removeAttribute("aria-modal");
      detail.removeAttribute("aria-labelledby");
      if (sheetLayout) detail.setAttribute("aria-hidden", "true");
      else detail.removeAttribute("aria-hidden");
    }
    detail.toggleAttribute("inert", sheetLayout && !sheetVisible);
    browse.toggleAttribute("inert", sheetVisible);
    const active = document.activeElement;
    const focusInDetail = active instanceof Node && detail.contains(active);
    if (sheetVisible && !sheetWasVisible) {
      const closeBtn = detail.querySelector(".detail-dismiss");
      if (closeBtn instanceof HTMLButtonElement) closeBtn.focus();
    } else if (sheetVisible && detailHadFocus && !focusInDetail) {
      const closeBtn = detail.querySelector(".detail-dismiss");
      if (closeBtn instanceof HTMLButtonElement) closeBtn.focus();
    } else if (!sheetVisible && sheetWasVisible) {
      const selected = browse.querySelector("[data-id].is-active");
      if (selected instanceof HTMLElement) selected.focus();
    }
    sheetWasVisible = sheetVisible;
  };

  const syncFilterControls = (query: Query): void => {
    if (document.activeElement !== queryInput) queryInput.value = query.search;
    topicSelect.value = topicSelectValue(query.topic);
    batchSelect.value = batchSelectValue(query.batch);
    poolSelect.value = poolSelectValue(query.pool);
    lineageSelect.value = lineageSelectValue(query.lineage);
    if (document.activeElement !== yearMinInput) {
      yearMinInput.value = query.year.min === null ? "" : String(query.year.min);
    }
    if (document.activeElement !== yearMaxInput) {
      yearMaxInput.value = query.year.max === null ? "" : String(query.year.max);
    }
    sortSelect.value = query.sort;
  };

  const patch = (next: Model): void => {
    const vm = project(next);
    const highlight = vm.offFilter ? null : (vm.selected?.id ?? null);
    const detailId = vm.selected?.id ?? null;
    const filters = filterKey(vm.query);
    const hasVisible = vm.visible.length > 0;
    const activeCount = activeFilters(vm.query).length;
    status.textContent = `${vm.visible.length} shown · ${vm.corpus.cards.length} packed`;
    workspace.dataset.view = vm.view;
    workspace.dataset.focus = vm.detailFocus ? "detail" : "browse";
    focusDetail.setAttribute("aria-pressed", vm.detailFocus ? "true" : "false");
    syncViewToggle(root, vm.view);
    syncFilterControls(vm.query);
    filtersToggle.textContent = activeCount > 0 ? `Filters (${activeCount})` : "Filters";
    if (painted === null || painted.filterKey !== filters) {
      filterPills.innerHTML = renderFilterPills(vm.query);
    }

    const prev = painted;
    virt.set(vm.view, vm.visible, highlight);
    if (prev !== null && prev.detailFocus !== vm.detailFocus) {
      requestAnimationFrame(() => {
        virt.refresh();
      });
    }

    const detailHadFocus = detail.contains(document.activeElement);
    if (
      prev === null ||
      prev.detail !== detailId ||
      prev.offFilter !== vm.offFilter ||
      prev.hasVisible !== hasVisible
    ) {
      detail.innerHTML = renderDetail(vm.selected, vm.corpus, vm.offFilter, vm.visible.length);
    }

    syncSheetChrome(vm, detailHadFocus);

    painted = {
      detail: detailId,
      offFilter: vm.offFilter,
      hasVisible,
      filterKey: filters,
      detailFocus: vm.detailFocus,
    };
  };

  const dispatch = (msg: Msg): void => {
    const next = update(model, msg);
    if (next === model) return;
    model = next;
    if (msg._tag !== "Hash") syncLocation(model.route, model.view);
    if (msg._tag === "SetView") writeStoredView(storage, model.view);
    if (msg._tag === "SetDetailFocus") writeStoredDetailFocus(storage, model.detailFocus);
    patch(model);
  };

  const flashFirstMatch = (): void => {
    dispatch({ _tag: "SelectFirst" });
    const id = routeId(model.route);
    if (id !== null) virt.flash(id);
  };

  const onSearch = debounce(75, () => {
    dispatch({ _tag: "SetSearch", value: queryInput.value });
  });

  queryInput.addEventListener("input", () => {
    onSearch();
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
  jumpRankInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const rank = parseRank(jumpRankInput.value);
    if (rank !== null) dispatch({ _tag: "JumpRank", rank });
  });
  viewToggle.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("button[data-view]");
    if (!(button instanceof HTMLButtonElement) || button.dataset.view === undefined) return;
    const view = parseViewMode(button.dataset.view);
    if (view !== null) dispatch({ _tag: "SetView", view });
  });
  focusDetail.addEventListener("click", () => {
    dispatch({ _tag: "SetDetailFocus", value: !model.detailFocus });
  });
  filtersToggle.addEventListener("click", () => {
    filtersOpen = !filtersOpen;
    syncFilterDisclosure();
  });
  resetButton.addEventListener("click", () => {
    dispatch({ _tag: "Reset" });
  });
  filterPills.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("button[data-clear]");
    if (!(button instanceof HTMLButtonElement) || button.dataset.clear === undefined) return;
    const key = parseFilterKey(button.dataset.clear);
    if (key !== null) dispatch({ _tag: "ClearFilter", key });
  });
  browse.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("button[data-id]");
    if (!(button instanceof HTMLButtonElement) || button.dataset.id === undefined) return;
    const id = parseCardId(button.dataset.id);
    if (id !== null) dispatch({ _tag: "Select", id });
  });
  detail.addEventListener("click", (event) => {
    const dismiss = (event.target instanceof Element ? event.target : null)?.closest("button[data-sheet]");
    if (dismiss instanceof HTMLButtonElement && dismiss.dataset.sheet === "close") {
      dispatch({ _tag: "SetCardsSheet", value: false });
      return;
    }
    const off = (event.target instanceof Element ? event.target : null)?.closest("button[data-off]");
    if (off instanceof HTMLButtonElement) {
      if (off.dataset.off === "clear") dispatch({ _tag: "Reset" });
      else if (off.dataset.off === "first") flashFirstMatch();
      return;
    }
    const button = (event.target instanceof Element ? event.target : null)?.closest("button[data-filter]");
    if (!(button instanceof HTMLButtonElement)) return;
    const kind = button.dataset.filter;
    const value = button.dataset.value;
    if (kind === undefined || value === undefined) return;
    if (kind === "topic") {
      const topic = TopicSchema.safeParse(value);
      if (!topic.success) return;
      dispatch({ _tag: "SetTopic", filter: { _tag: "One", topic: topic.data } });
    } else if (kind === "batch") {
      const batch = SeedBatchSchema.safeParse(value);
      if (!batch.success) return;
      dispatch({ _tag: "SetBatch", filter: { _tag: "One", batch: batch.data } });
    } else if (kind === "pool") {
      const pool = PoolSchema.safeParse(value);
      if (!pool.success) return;
      dispatch({ _tag: "SetPool", filter: { _tag: "One", pool: pool.data } });
    } else if (kind === "lineage") {
      const lineage = LineageSchema.safeParse(value);
      if (!lineage.success) return;
      dispatch({ _tag: "SetLineage", filter: { _tag: "One", lineage: lineage.data } });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === "Escape") {
      event.preventDefault();
      if (isTypingTarget(event.target)) {
        if (event.target === queryInput && queryInput.value !== "") {
          queryInput.value = "";
          dispatch({ _tag: "SetSearch", value: "" });
          return;
        }
        if (event.target instanceof HTMLElement) event.target.blur();
        return;
      }
      if (
        isCardsSheetVisible({
          view: model.view,
          compact: compactLayout.matches,
          sheetOpen: model.cardsSheet,
          hasSelection: routeId(model.route) !== null,
        })
      ) {
        dispatch({ _tag: "SetCardsSheet", value: false });
        return;
      }
      if (model.query.search.trim() !== "") {
        queryInput.value = "";
        dispatch({ _tag: "SetSearch", value: "" });
        return;
      }
      if (model.detailFocus) {
        dispatch({ _tag: "SetDetailFocus", value: false });
        return;
      }
      if (filtersOpen) {
        filtersOpen = false;
        syncFilterDisclosure();
      }
      return;
    }
    if (isTypingTarget(event.target)) return;
    if (event.key === "/") {
      event.preventDefault();
      queryInput.focus();
      queryInput.select();
      return;
    }
    if (event.key === "]") {
      event.preventDefault();
      dispatch({ _tag: "SetDetailFocus", value: !model.detailFocus });
      return;
    }
    if (painted?.offFilter) {
      if (event.key === "Enter") {
        event.preventDefault();
        flashFirstMatch();
        return;
      }
      if (event.key === "c") {
        event.preventDefault();
        dispatch({ _tag: "Reset" });
        return;
      }
    }
    if (
      event.key === "Enter" &&
      model.view === "cards" &&
      compactLayout.matches &&
      !model.cardsSheet &&
      routeId(model.route) !== null
    ) {
      event.preventDefault();
      dispatch({ _tag: "SetCardsSheet", value: true });
      return;
    }
    if (model.view === "cards") {
      const dir = gridDirFromKey(event.key);
      if (dir !== null) {
        event.preventDefault();
        dispatch({ _tag: "MoveGrid", dir, cols: virt.columns() });
        return;
      }
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
  const onCompactChange = (): void => {
    syncFilterDisclosure();
    if (compactLayout.matches && model.view === "cards" && routeId(model.route) !== null) {
      dispatch({ _tag: "SetCardsSheet", value: true });
    }
    patch(model);
  };
  if (typeof compactLayout.addEventListener === "function") {
    compactLayout.addEventListener("change", onCompactChange);
  } else {
    compactLayout.addListener(onCompactChange);
  }

  syncFilterDisclosure();
  syncLocation(model.route, model.view);
  patch(model);
}
