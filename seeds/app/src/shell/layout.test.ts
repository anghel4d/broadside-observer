import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  BROWSE_MIN_REM,
  CARDS_DETAIL_MAX_DEFAULT_REM,
  CARDS_DETAIL_MIN_DEFAULT_REM,
  CARDS_DETAIL_RATIO,
  COMPACT_MAX_PX,
  COMPACT_MEDIA,
  DETAIL_MIN_REM,
  LIST_BROWSE_DEFAULT_REM,
  PANE_SPLIT_STORAGE_KEY,
  SPLIT_GUTTER_PX,
  browseWidthPx,
  clampDetailWidthPx,
  clearStoredDetailWidth,
  defaultDetailWidthPx,
  detailWidthFromClientX,
  isCardsSheetLayout,
  isCardsSheetVisible,
  isSideSplitLayout,
  paneSplitKey,
  parsePaneSplitMap,
  persistDetailWidthPx,
  readStoredDetailWidth,
  resolveDetailWidthPx,
  writeStoredDetailWidth,
} from "./layout.ts";
import {
  SEED_CARD_GAP_REM,
  SEED_CARD_INSET_REM,
  SEED_CARD_WIDTH_REM,
} from "./cardMetrics.ts";
import { GRID_COLUMN_COVER_FRACTION } from "./virtualize.ts";

assert.equal(COMPACT_MAX_PX, 980);
assert.equal(COMPACT_MEDIA, "(max-width: 980px)");

assert.equal(isCardsSheetLayout("cards", true), true);
assert.equal(isCardsSheetLayout("cards", false), false);
assert.equal(isCardsSheetLayout("list", true), false);
assert.equal(isCardsSheetLayout("list", false), false);

assert.equal(
  isCardsSheetVisible({ view: "cards", compact: true, sheetOpen: true, hasSelection: true }),
  true,
);
assert.equal(
  isCardsSheetVisible({ view: "cards", compact: false, sheetOpen: true, hasSelection: true }),
  false,
);
assert.equal(
  isCardsSheetVisible({ view: "list", compact: true, sheetOpen: true, hasSelection: true }),
  false,
);
assert.equal(
  isCardsSheetVisible({ view: "cards", compact: true, sheetOpen: false, hasSelection: true }),
  false,
);
assert.equal(
  isCardsSheetVisible({ view: "cards", compact: true, sheetOpen: true, hasSelection: false }),
  false,
);

{
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  assert.ok(
    css.includes(`@media (max-width: ${COMPACT_MAX_PX}px)`) ||
      css.includes(`@media (width <= ${COMPACT_MAX_PX}px)`),
    "style.css compact breakpoint must match COMPACT_MAX_PX",
  );
}

assert.equal(isSideSplitLayout(false), true);
assert.equal(isSideSplitLayout(true), false);
assert.equal(paneSplitKey("list"), "list");
assert.equal(paneSplitKey("cards"), "cards");

assert.deepEqual(parsePaneSplitMap(null), {});
assert.deepEqual(parsePaneSplitMap(""), {});
assert.deepEqual(parsePaneSplitMap("nope"), {});
assert.deepEqual(parsePaneSplitMap("[]"), {});
assert.deepEqual(parsePaneSplitMap("null"), {});
assert.deepEqual(parsePaneSplitMap('{"list":512}'), { list: 512 });
assert.deepEqual(parsePaneSplitMap('{"list":0,"cards":-4,"extra":"32"}'), {});
assert.deepEqual(parsePaneSplitMap('{"list":400.2,"cards":512,"extra":1}'), { list: 400.2, cards: 512 });
assert.deepEqual(
  parsePaneSplitMap('{"list":400,"listFocus":900,"cardsFocus":512}'),
  { list: 400 },
  "legacy focus-mode split keys must be ignored",
);

assert.equal(readStoredDetailWidth(null, "list"), null);
assert.equal(readStoredDetailWidth({ getItem: () => null }, "cards"), null);
assert.equal(readStoredDetailWidth({ getItem: () => '{"cards":480}' }, "cards"), 480);
assert.equal(readStoredDetailWidth({ getItem: () => '{"cards":480}' }, "list"), null);
assert.equal(
  readStoredDetailWidth(
    {
      getItem: () => {
        throw new Error("blocked");
      },
    },
    "list",
  ),
  null,
);

{
  const memory = new Map<string, string>();
  const storage = {
    getItem: (key: string) => memory.get(key) ?? null,
    setItem: (key: string, value: string) => {
      memory.set(key, value);
    },
  };
  writeStoredDetailWidth(storage, "cards", 512.4);
  assert.equal(memory.get(PANE_SPLIT_STORAGE_KEY), '{"cards":512}');
  writeStoredDetailWidth(storage, "list", 800);
  assert.deepEqual(parsePaneSplitMap(memory.get(PANE_SPLIT_STORAGE_KEY)), { list: 800, cards: 512 });
  clearStoredDetailWidth(storage, "cards");
  assert.deepEqual(parsePaneSplitMap(memory.get(PANE_SPLIT_STORAGE_KEY)), { list: 800 });
  clearStoredDetailWidth(storage, "list");
  assert.equal(memory.get(PANE_SPLIT_STORAGE_KEY), "{}");
  writeStoredDetailWidth(null, "list", 100);
  writeStoredDetailWidth(storage, "list", 0);
  writeStoredDetailWidth(storage, "list", Number.NaN);
  assert.equal(memory.get(PANE_SPLIT_STORAGE_KEY), "{}");
  writeStoredDetailWidth(
    {
      getItem: () => "{}",
      setItem: () => {
        throw new Error("blocked");
      },
    },
    "list",
    400,
  );
  clearStoredDetailWidth(null, "list");
}

{
  const rem = 16;
  const gutter = SPLIT_GUTTER_PX;
  const listWide = defaultDetailWidthPx({
    view: "list",
    workspacePx: 1400,
    gutterPx: gutter,
    rem,
  });
  assert.equal(browseWidthPx(1400, listWide, gutter), LIST_BROWSE_DEFAULT_REM * rem);

  const cardsLaptop = defaultDetailWidthPx({
    view: "cards",
    workspacePx: 1280,
    gutterPx: gutter,
    rem,
  });
  const expectedCards = Math.min(
    CARDS_DETAIL_MAX_DEFAULT_REM * rem,
    Math.max(CARDS_DETAIL_MIN_DEFAULT_REM * rem, 1280 * CARDS_DETAIL_RATIO),
  );
  assert.equal(cardsLaptop, expectedCards);
  assert.ok(cardsLaptop >= CARDS_DETAIL_MIN_DEFAULT_REM * rem);
  assert.ok(cardsLaptop <= CARDS_DETAIL_MAX_DEFAULT_REM * rem);
  const minTwoCols =
    2 * SEED_CARD_WIDTH_REM * rem + SEED_CARD_GAP_REM * rem + 2 * SEED_CARD_INSET_REM * rem;
  assert.ok(
    browseWidthPx(1280, cardsLaptop, gutter) >= minTwoCols,
    `Cards default must leave room for two ${SEED_CARD_WIDTH_REM}rem columns on a 1280px laptop`,
  );

  const cardsNarrow = defaultDetailWidthPx({
    view: "cards",
    workspacePx: 1042,
    gutterPx: gutter,
    rem,
  });
  assert.equal(cardsNarrow, CARDS_DETAIL_MIN_DEFAULT_REM * rem);
  assert.ok(browseWidthPx(1042, cardsNarrow, gutter) >= minTwoCols);

  const cardsWide = defaultDetailWidthPx({
    view: "cards",
    workspacePx: 1800,
    gutterPx: gutter,
    rem,
  });
  assert.equal(cardsWide, CARDS_DETAIL_MAX_DEFAULT_REM * rem);
}

{
  const rem = 16;
  const gutter = SPLIT_GUTTER_PX;
  const measure = {
    view: "cards" as const,
    workspacePx: 1200,
    gutterPx: gutter,
    rem,
  };
  const minDetail = DETAIL_MIN_REM * rem;
  const maxDetail = 1200 - gutter - BROWSE_MIN_REM * rem;
  assert.equal(clampDetailWidthPx({ ...measure, detailPx: 1 }), minDetail);
  assert.equal(clampDetailWidthPx({ ...measure, detailPx: 9999 }), maxDetail);
  assert.equal(clampDetailWidthPx({ ...measure, detailPx: 500 }), 500);

  assert.equal(resolveDetailWidthPx({ ...measure, storedPx: null }), defaultDetailWidthPx(measure));
  assert.equal(resolveDetailWidthPx({ ...measure, storedPx: 500 }), 500);
  assert.equal(resolveDetailWidthPx({ ...measure, storedPx: 50 }), minDetail);
}

{
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  assert.ok(css.includes(".pane-split"), "style.css must style the pane splitter");
  assert.ok(css.includes("col-resize"), "splitter hover/drag cursor must be col-resize");
  assert.ok(
    css.includes(`--split-gutter: ${SPLIT_GUTTER_PX}px`),
    "CSS gutter must match SPLIT_GUTTER_PX",
  );
  assert.match(
    css,
    /\.browse-pane,\s*\n\s*\.detail-pane \{[\s\S]*?overflow-x:\s*hidden/,
    "browse pane must clip a partially covered last grid column at the splitter",
  );
  assert.ok(
    !css.includes("minmax(16rem, 18rem)"),
    "Cards default must no longer pin detail to 16–18rem",
  );
  assert.ok(!css.includes(".focus-detail"), "Focus detail control CSS must be gone");
  assert.ok(!css.includes("data-focus"), "focused layout CSS must be gone");
  const compactBlock =
    css.includes(`@media (width <= ${COMPACT_MAX_PX}px)`)
      ? css.slice(css.indexOf(`@media (width <= ${COMPACT_MAX_PX}px)`))
      : css.slice(css.indexOf(`@media (max-width: ${COMPACT_MAX_PX}px)`));
  assert.ok(
    compactBlock.includes(".pane-split") && compactBlock.includes("display: none"),
    "compact layout must hide the side splitter",
  );
  assert.ok(css.includes("#view-toggle"), "view toggle must stack above theme so clicks are not stolen");
}

{
  const rem = 16;
  const gutter = SPLIT_GUTTER_PX;
  const workspacePx = 1200;
  const workspaceLeft = 80;
  const startX = 700;
  const startDetail = detailWidthFromClientX({
    clientX: startX,
    workspaceLeft,
    workspacePx,
    gutterPx: gutter,
  });
  const movedLeft = detailWidthFromClientX({
    clientX: startX - 40,
    workspaceLeft,
    workspacePx,
    gutterPx: gutter,
  });
  const movedRight = detailWidthFromClientX({
    clientX: startX + 40,
    workspaceLeft,
    workspacePx,
    gutterPx: gutter,
  });
  assert.equal(movedLeft, startDetail + 40);
  assert.equal(movedRight, startDetail - 40);

  const measure = {
    view: "list" as const,
    workspacePx,
    gutterPx: gutter,
    rem,
  };
  const nearMax = workspacePx - gutter - BROWSE_MIN_REM * rem;
  const clampedMax = clampDetailWidthPx({ ...measure, detailPx: nearMax });
  const jumped = clampDetailWidthPx({
    ...measure,
    workspacePx: workspacePx - 20,
    detailPx: nearMax,
  });
  assert.equal(clampedMax, nearMax);
  assert.notEqual(
    jumped,
    nearMax,
    "a mid-drag workspacePx change retargets the clamp — freeze width while dragging",
  );

  const memory = new Map<string, string>();
  const storage = {
    getItem: (key: string) => memory.get(key) ?? null,
    setItem: (key: string, value: string) => {
      memory.set(key, value);
    },
  };
  const persisted = persistDetailWidthPx(storage, "list", { ...measure, detailPx: movedLeft });
  assert.equal(persisted, movedLeft);
  assert.equal(readStoredDetailWidth(storage, "list"), Math.round(movedLeft));
  const cardsInner = browseWidthPx(workspacePx, movedLeft, gutter);
  const track = SEED_CARD_WIDTH_REM * rem;
  const gap = SEED_CARD_GAP_REM * rem;
  const inset = 2 * SEED_CARD_INSET_REM * rem;
  const pitch = track + gap;
  const cols = Math.max(
    1,
    Math.floor((cardsInner - inset + gap + GRID_COLUMN_COVER_FRACTION * track) / pitch),
  );
  const snappedBrowse = cols * track + Math.max(0, cols - 1) * gap + inset;
  const snappedDetail = workspacePx - gutter - snappedBrowse;
  assert.notEqual(
    persisted,
    snappedDetail,
    "persist must stay clamp-only; column snap must not return",
  );
}

console.log("layout.test.ts ok");
