---
title: "Breaking Paragraphs into Lines"
authors:
  - "Donald E. Knuth"
  - "Michael F. Plass"
year: 1981
venue: "Software: Practice and Experience 11(11), 1119–1184"
arxiv: null
doi: "10.1002/spe.4380111102"
source: "https://gwern.net/doc/design/typography/tex/1981-knuth.pdf"
topics:
  - text-layout
  - line-breaking
  - typesetting
  - dynamic-programming
seed_rank: 2303
seed_batch: "archive-2026-10-16"
reviewed: "2026-10-16"
pool: "graphics"
relevance_score: 9
lineage: text-layout
see:
  - 1599-unicode-bidirectional-algorithm-uax-9
  - 1858-unicode-text-segmentation-uax-29
  - 1787-higher-quality-2d-text-rendering
cites:
  - title: "Breaking Paragraphs into Lines"
    url: "https://doi.org/10.1002/spe.4380111102"
    year: 1981
    arxiv: null
    doi: "10.1002/spe.4380111102"
  - title: "Unicode Bidirectional Algorithm (UAX #9)"
    url: "https://www.unicode.org/reports/tr9/"
    year: 2000
    arxiv: null
    doi: null
---

# Breaking Paragraphs into Lines

## One-sentence takeaway

Knuth and Plass model a paragraph as a sequence of boxes (fixed-width material), glue (stretchable/shrinkable space) and penalties (candidate breaks with a cost), then choose all line breaks at once by a shortest-path dynamic program over "feasible breakpoints", minimizing total demerits instead of greedily filling one line at a time — the algorithm that TeX still uses.

## Why it matters here

The library has the Unicode pieces that decide *where* a break is allowed (UAX #9 bidi in 1599, UAX #29 segmentation in 1858) and glyph rasterization (1787), but not the algorithm that decides *which* allowed breaks to take. Anoptic and ano's UI need paragraph layout for in-game text, tooltips, logs and documentation; the box/glue/penalty abstraction is small enough to implement directly, separates shaping from layout, and the same machinery handles ragged-right, centered text and varying line widths (text around an illustration) without special cases.

## Key ideas

- **Box/glue/penalty algebra.** Every item has a natural width; glue additionally has stretch and shrink. A penalty marks a legal break with a cost (hyphenation points are "flagged" penalties); a penalty of −∞ forces a break and +∞ forbids one.
- **Adjustment ratio and badness.** Each candidate line gets a ratio r (how much its glue must stretch or shrink); badness is about 100·|r|³, infinite if the line would have to shrink past its limit (r < −1). Loose lines are only finitely bad, so they are allowed when nothing better exists.
- **Demerits, not just badness.** Line demerits are roughly (1 + badness + penalty)², plus extra charges for consecutive hyphenated lines (e.g. 3000) and, in the full algorithm, for adjacent lines of visually incompatible tightness classes. Squaring makes the optimizer spread badness across lines rather than accepting one terrible line.
- **Active-list dynamic programming.** Scan potential breakpoints left to right, keeping an "active" list of feasible breakpoints that could still start the current line, and remember for each new feasible breakpoint the predecessor with fewest total demerits. Active breakpoints are dropped once a line from them would be overfull, so work is about (number of breakpoints) × (words per line) and there is no backtracking.
- **Measured gains.** In 300 experiments on the same paragraph with widths 350–649 units, first-fit and best-fit traded wins; the optimum-fit breaks avoid isolated very loose or very tight lines, and a "looseness" parameter lets the layout deliberately add or remove a line (useful for page balancing).

## Caveats

Optimal paragraph layout needs the whole paragraph in memory and is harder to make incremental than greedy filling; editing one word can move every break. The demerit formula is admittedly arbitrary, tuned for justified Latin-script text, and does not address shaping, bidi or CJK rules (pair it with UAX #14 for break opportunities). The linked PDF is a scan mirror; the publisher version is behind Wiley's paywall.

## Links

- Paper (PDF mirror): https://gwern.net/doc/design/typography/tex/1981-knuth.pdf
- Paper (DOI): https://doi.org/10.1002/spe.4380111102
