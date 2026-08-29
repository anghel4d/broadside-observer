---
title: "Ropes: An Alternative to Strings"
authors: ["Hans-J. Boehm", "Russ Atkinson", "Michael Plass"]
year: 1995
venue: "Software: Practice and Experience"
arxiv: null
doi: "10.1002/spe.4380251203"
source: "https://doi.org/10.1002/spe.4380251203"
topics: [unicode-text-shaping, embedded-scripting-dsls, array-programming-apl-bqn-q]
seed_rank: 1462
seed_batch: "archive-2026-08-30"
reviewed: "2026-08-30"
pool: "languages"
relevance_score: 9
lineage: persistent-data-structures
cites:
  - title: "Making Data Structures Persistent"
    url: "https://doi.org/10.1016/0022-0000(89)90034-2"
    year: 1989
    arxiv: null
    doi: "10.1016/0022-0000(89)90034-2"
  - title: "Finger Trees: A Simple General-purpose Data Structure"
    url: "https://doi.org/10.1017/S0956796805005769"
    year: 2006
    arxiv: null
    doi: "10.1017/S0956796805005769"
  - title: "The Zipper"
    url: "https://doi.org/10.1017/S0956796897002864"
    year: 1997
    arxiv: null
    doi: "10.1017/S0956796897002864"
see:
  - "1441-finger-trees-a-simple-general-purpose-data-structure"
  - "1101-the-zipper"
  - "1461-making-data-structures-persistent"
---

# Ropes: An Alternative to Strings

## One-sentence takeaway

Represent a string as a balanced tree of immutable chunks so concatenation and substring are logarithmic and never recopy the world — the Cedar/Boehm answer to C's flat `char[]`.

## Why it matters here

ano and GRID COMMAND both pass text around (Japanese surface, NL orders, editor buffers, log lines). A contiguous byte array is the wrong default once strings are values: in-place updates race, concat copies, and long lines crash editors. Boehm–Atkinson–Plass make the string *the* persistent sequence, with a C implementation that shipped in the Boehm GC distribution. Finger Trees (1441) later give the same API from a measure monoid (measure = length); ropes are the industrial ancestor.

## Key ideas

- **Immutable by default.** A procedure can hold a rope it was passed without locking or cloning. Concurrency becomes sharing, not `strcpy`.
- **Concat and substring scale.** Balanced binary trees of character arrays; rebalancing keeps height logarithmic; no practical length cap of the `vi`/fingerd kind.
- **Two implementations.** Cedar's heavyweight ropes (almost since inception) and a lighter C version in the Boehm garbage collector, with measurements.
- **Evidence.** SPE 25(12), 1995. Xerox PARC. Still the standard citation for "don't use flat strings as your document type."

## Caveats

A single-cursor editor may still want a gap buffer or piece table for the hot insertion point; ropes win once you have multiple cursors, undo, or concurrent readers. Tree overhead hurts tiny strings — intern or keep a small-string optimization. Unicode shaping (Slug 1128, Nehab 1460) sits *on* the rope, not inside it. Not a remint of Finger Trees (1441); this is the string cell those trees generalize.

## Links

- DOI: https://doi.org/10.1002/spe.4380251203
- Author PDF: https://www.cs.tufts.edu/comp/150FP/archive/hans-boehm/ropes.pdf
