---
title: "Structural Regular Expressions"
authors:
  - "Rob Pike"
year: 1987
venue: "AT&T Bell Laboratories technical note, 1987"
arxiv: null
doi: null
source: "https://doc.cat-v.org/bell_labs/structural_regexps/"
topics:
  - "text-processing"
  - "regular-expressions"
  - "selection-semantics"
  - "editors"
seed_rank: 2488
seed_batch: "archive-2026-11-02"
reviewed: "2026-11-02"
pool: "languages"
lineage: text-layout
relevance_score: 9
cites:
  - title: "Structural Regular Expressions"
    url: "https://doc.cat-v.org/bell_labs/structural_regexps/se.pdf"
    year: 1987
    arxiv: null
    doi: null
see: ["2354-an-ond-difference-algorithm-and-its-variations", "2303-breaking-paragraphs-into-lines"]
---

# Structural Regular Expressions

## One-sentence takeaway

Use regular expressions to describe the shape of a file as well as its contents: `x/re/` loops over every match, `y/re/` over the text between matches, and `g/re/` and `v/re/` filter, and composing them left to right turns selection into a pipeline that replaces the Unix line as the unit of work.

## Why it matters here

ano is built on selection-as-reference with effects applied to whatever is selected. Pike's sam-style commands are the cleanest precedent for exactly that: each stage narrows a set of ranges, and the final command acts on all of them. It is a seven-page argument for why the selection, not the record, should be the primitive, and it shows how nesting gives multi-level structure (records, then fields) without a parser.

## Key ideas

- The Unix tools hard-wire the line; many problems (the "Peter-on-silicon" bitmap-to-rectangles example, multi-line refer records) get awkward because of it.
- `x` extracts matches, `y` extracts the complement, `g`/`v` keep or drop ranges that contain a match; `p`, `d`, `c` act on the current selection.
- Commands compose: `x/(.+\n)+/ g/%A.*Bimmler/ x/.*\n/ g/%T/p` walks records, filters by author, then walks lines and prints titles.
- Sketches structural versions of grep, diff and awk, where patterns are `x` expressions and actions can nest further structural expressions.
- Nested closures can yield multi-dimensional arrays of matched pieces, a hint toward array-shaped results.

## Caveats

A short design note with examples, not an evaluated system; the awk and diff variants are proposals. The semantics of overlapping and nested matches are left informal, so an implementation has to pin them down. The working embodiment is the sam editor (and later acme), not a separate tool.

## Links

- [PDF](https://doc.cat-v.org/bell_labs/structural_regexps/se.pdf)
- [cat-v archive page](https://doc.cat-v.org/bell_labs/structural_regexps/)
