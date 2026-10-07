---
title: "Unicode Text Segmentation (UAX #29)"
authors:
  - "Unicode Consortium"
year: 2026
venue: "Unicode Standard Annex #29 (living; reviewed Unicode 18.0.0 / Revision 49, 2026-09-01)"
arxiv: null
doi: null
source: "https://www.unicode.org/reports/tr29/"
topics:
  - unicode
  - text-layout
  - grapheme-clusters
  - text-editing
  - i18n
seed_rank: 1858
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "languages"
relevance_score: 9
lineage: unicode-text-shaping
cites:
  - title: "Unicode Bidirectional Algorithm (UAX #9)"
    url: "https://www.unicode.org/reports/tr9/"
    year: 2000
    arxiv: null
    doi: null
  - title: "Unicode Line Breaking Algorithm (UAX #14)"
    url: "https://www.unicode.org/reports/tr14/"
    year: 2026
    arxiv: null
    doi: null
  - title: "Unicode Emoji (UTS #51)"
    url: "https://www.unicode.org/reports/tr51/"
    year: 2026
    arxiv: null
    doi: null
see:
  - "1599-unicode-bidirectional-algorithm-uax-9"
  - "1479-validating-utf-8-in-less-than-one-instruction-per-byte"
---

# Unicode Text Segmentation (UAX #29)

## One-sentence takeaway

UAX #29 defines the default boundaries for user-perceived characters (extended grapheme clusters), words and sentences as small, table-driven pair rules (GB/WB/SB) over Unicode properties — the rules that make the caret, backspace, selection, truncation and double-click-a-word behave correctly for combining marks, Hangul, Indic conjuncts, emoji ZWJ sequences and flags.

## Why it matters here

The Unicode slice so far covers bytes (UTF-8 validation 1479), display order (UBA 1599) and glyph rendering (Slug 1128, MSDF 1808, Srijika 1658). The missing layer between them is *what counts as one character*: ano's editor and REPL, GRID COMMAND's chat and unit-name fields, and every HUD string truncation need grapheme boundaries, or the cursor lands inside an emoji or a Devanagari conjunct and backspace deletes half of it. Unicode 18.0 (September 2026) just reissued the annex with a changed GB9c rule, so whatever table we generate this week should be built from the 18.0 data.

## Key ideas

- **Three segmentations.** Grapheme clusters (GB rules), words (WB) and sentences (SB) are each a list of "×" (no break) / "÷" (break) rules on property classes, applied in order with `Any ÷ Any` as the fallback; line breaking is UAX #14's job.
- **Extended vs legacy clusters.** Extended grapheme clusters (recommended) add GB9a/GB9b (SpacingMark, Prepend) and GB9c; legacy clusters omit them. Tailored clusters (e.g. collation contractions) are allowed as documented profiles.
- **Hard cases as rules.** GB11 keeps emoji ZWJ sequences together; GB12/GB13 pair regional indicators so flags never split; GB9c (changed in Revision 49 to `\p{InCB=Linker} \p{InCB=Extend}* × \p{InCB=Consonant}`) keeps Indic conjuncts together.
- **Data-driven and regex-able.** Boundaries reduce to simple regular expressions / state machines over the property tables, so an implementation is a generated table plus a small DFA — the conformance test files in the UCD check it.
- **Words need dictionaries for CJK.** Default WB breaks around every ideograph; reliable word boundaries for Japanese, Chinese, Thai or Lao need dictionary lookup or a tailored profile.

## Caveats

Living annex: this card reviews Revision 49 (Unicode 18.0.0, 2026-09-01); property tables change every release, so pin the UCD version in code. Default word segmentation is not adequate for Japanese text selection — plan a tailoring (dictionary or morphological analyzer) for ano's Japanese UI, and use UAX #14 plus the W3C JLREQ for line breaking. Character-count limits in the annex are not byte-size limits. Do not remint UBA 1599 or UTF-8 validation 1479.

## Links

- Latest UAX #29: https://www.unicode.org/reports/tr29/
- This reviewed revision (tr29-49): https://www.unicode.org/reports/tr29/tr29-49.html
- UAX #14 (line breaking): https://www.unicode.org/reports/tr14/
- UTS #51 (emoji): https://www.unicode.org/reports/tr51/
