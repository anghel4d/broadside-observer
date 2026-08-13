import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  BROWSE_MIN_FOCUS_REM,
  BROWSE_MIN_REM,
  CARDS_DETAIL_MAX_DEFAULT_REM,
  CARDS_DETAIL_MIN_DEFAULT_REM,
  CARDS_DETAIL_RATIO,
  COMPACT_MAX_PX,
  COMPACT_MEDIA,
  DETAIL_FOCUS_STORAGE_KEY,
  DETAIL_MIN_FOCUS_REM,
  DETAIL_MIN_REM,
  FOCUS_BROWSE_DEFAULT_REM,
  LIST_BROWSE_DEFAULT_REM,
  PANE_SPLIT_STORAGE_KEY,
  SPLIT_GUTTER_PX,
  browseMinRem,
  browseWidthPx,
  clampDetailWidthPx,
  clearStoredDetailWidth,
  defaultDetailWidthPx,
  detailMinRem,
  isCardsSheetLayout,
  isCardsSheetVisible,
  isSideSplitLayout,
  paneSplitKey,
  parseDetailFocus,
  parsePaneSplitMap,
  readStoredDetailFocus,
  readStoredDetailWidth,
  resolveDetailWidthPx,
  writeStoredDetailFocus,
  writeStoredDetailWidth,
} from "./layout.ts";

assert.equal(parseDetailFocus("1"), true);
assert.equal(parseDetailFocus("true"), true);
assert.equal(parseDetailFocus("0"), false);
assert.equal(parseDetailFocus("false"), false);
assert.equal(parseDetailFocus(""), false);
assert.equal(parseDetailFocus(null), false);
assert.equal(parseDetailFocus(undefined), false);

assert.equal(readStoredDetailFocus(null), false);
assert.equal(readStoredDetailFocus({ getItem: () => null }), false);
assert.equal(readStoredDetailFocus({ getItem: () => "1" }), true);
assert.equal(readStoredDetailFocus({ getItem: () => "true" }), true);
assert.equal(readStoredDetailFocus({ getItem: () => "nope" }), false);
assert.equal(
  readStoredDetailFocus({
    getItem: () => {
      throw new Error("blocked");
    },
  }),
  false,
);

const store = new Map<string, string>();
writeStoredDetailFocus(
  {
    setItem: (key, value) => {
      store.set(key, value);
    },
  },
  true,
);
assert.equal(store.get(DETAIL_FOCUS_STORAGE_KEY), "1");
writeStoredDetailFocus(
  {
    setItem: (key, value) => {
      store.set(key, value);
    },
  },
  false,
);
assert.equal(store.get(DETAIL_FOCUS_STORAGE_KEY), "0");

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
    css.includes(`@media (max-width: ${COMPACT_MAX_PX}px)`),
    "style.css compact breakpoint must match COMPACT_MAX_PX",
  );
}

writeStoredDetailFocus(null, true);
writeStoredDetailFocus(
  {
    setItem: () => {
      throw new Error("blocked");
    },
  },
  true,
);

assert.equal(isSideSplitLayout(false), true);
assert.equal(isSideSplitLayout(true), false);
assert.equal(paneSplitKey("list", false), "list");
assert.equal(paneSplitKey("list", true), "listFocus");
assert.equal(paneSplitKey("cards", false), "cards");
assert.equal(paneSplitKey("cards", true), "cardsFocus");
assert.equal(browseMinRem(false), BROWSE_MIN_REM);
assert.equal(browseMinRem(true), BROWSE_MIN_FOCUS_REM);
assert.equal(detailMinRem(false), DETAIL_MIN_REM);
assert.equal(detailMinRem(true), DETAIL_MIN_FOCUS_REM);

assert.deepEqual(parsePaneSplitMap(null), {});
assert.deepEqual(parsePaneSplitMap(""), {});
assert.deepEqual(parsePaneSplitMap("nope"), {});
assert.deepEqual(parsePaneSplitMap("[]"), {});
assert.deepEqual(parsePaneSplitMap("null"), {});
assert.deepEqual(parsePaneSplitMap('{"list":512}'), { list: 512 });
assert.deepEqual(parsePaneSplitMap('{"list":0,"cards":-4,"cardsFocus":"32"}'), {});
assert.deepEqual(parsePaneSplitMap('{"list":400.2,"cards":512,"extra":1}'), { list: 400.2, cards: 512 });

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
  writeStoredDetailWidth(storage, "cardsFocus", 900);
  clearStoredDetailWidth(storage, "cards");
  assert.deepEqual(parsePaneSplitMap(memory.get(PANE_SPLIT_STORAGE_KEY)), { list: 800, cardsFocus: 900 });
  clearStoredDetailWidth(storage, "list");
  clearStoredDetailWidth(storage, "cardsFocus");
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
    focus: false,
    workspacePx: 1400,
    gutterPx: gutter,
    rem,
  });
  assert.equal(browseWidthPx(1400, listWide, gutter), LIST_BROWSE_DEFAULT_REM * rem);

  const focusWide = defaultDetailWidthPx({
    view: "cards",
    focus: true,
    workspacePx: 1400,
    gutterPx: gutter,
    rem,
  });
  assert.equal(browseWidthPx(1400, focusWide, gutter), FOCUS_BROWSE_DEFAULT_REM * rem);

  const cardsLaptop = defaultDetailWidthPx({
    view: "cards",
    focus: false,
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
  const minTwoCols = 2 * 14.5 * rem + 0.5 * rem + 2 * 0.5 * rem;
  assert.ok(
    browseWidthPx(1280, cardsLaptop, gutter) >= minTwoCols,
    "Cards default must leave room for two 14.5rem columns on a 1280px laptop",
  );

  const cardsNarrow = defaultDetailWidthPx({
    view: "cards",
    focus: false,
    workspacePx: 1042,
    gutterPx: gutter,
    rem,
  });
  assert.equal(cardsNarrow, CARDS_DETAIL_MIN_DEFAULT_REM * rem);
  assert.ok(browseWidthPx(1042, cardsNarrow, gutter) >= minTwoCols);

  const cardsWide = defaultDetailWidthPx({
    view: "cards",
    focus: false,
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
    focus: false,
    workspacePx: 1200,
    gutterPx: gutter,
    rem,
  };
  const minDetail = DETAIL_MIN_REM * rem;
  const maxDetail = 1200 - gutter - BROWSE_MIN_REM * rem;
  assert.equal(clampDetailWidthPx({ ...measure, detailPx: 1 }), minDetail);
  assert.equal(clampDetailWidthPx({ ...measure, detailPx: 9999 }), maxDetail);
  assert.equal(clampDetailWidthPx({ ...measure, detailPx: 500 }), 500);

  const focused = { ...measure, focus: true };
  assert.equal(clampDetailWidthPx({ ...focused, detailPx: 1 }), DETAIL_MIN_FOCUS_REM * rem);
  assert.equal(
    clampDetailWidthPx({ ...focused, detailPx: 9999 }),
    1200 - gutter - BROWSE_MIN_FOCUS_REM * rem,
  );

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
  assert.ok(
    !css.includes("minmax(16rem, 18rem)"),
    "Cards default must no longer pin detail to 16–18rem",
  );
  const compactBlock = css.slice(css.indexOf(`@media (max-width: ${COMPACT_MAX_PX}px)`));
  assert.ok(
    compactBlock.includes(".pane-split") && compactBlock.includes("display: none"),
    "compact layout must hide the side splitter",
  );
}

console.log("layout.test.ts ok");
