---
title: "Finger Trees: A Simple General-purpose Data Structure"
authors: ["Ralf Hinze", "Ross Paterson"]
year: 2006
venue: "Journal of Functional Programming"
arxiv: null
doi: "10.1017/S0956796805005769"
source: "https://doi.org/10.1017/S0956796805005769"
topics: [array-programming-apl-bqn-q, embedded-scripting-dsls]
seed_rank: 1441
seed_batch: "archive-2026-08-28"
reviewed: "2026-08-28"
pool: "languages"
relevance_score: 9
lineage: persistent-data-structures
cites:
  - title: "Making Data Structures Persistent"
    url: "https://doi.org/10.1016/0022-0000(89)90034-2"
    year: 1989
    arxiv: null
    doi: "10.1016/0022-0000(89)90034-2"
  - title: "Ropes: An Alternative to Strings"
    url: "https://doi.org/10.1002/spe.4380251203"
    year: 1995
    arxiv: null
    doi: "10.1002/spe.4380251203"
  - title: "The Zipper"
    url: "https://doi.org/10.1017/S0956796800000319"
    year: 1997
    arxiv: null
    doi: "10.1017/S0956796800000319"
see:
  - "1101-the-zipper"
  - "1033-towards-efficient-hash-maps-in-functional-array-languages"
---

# Finger Trees: A Simple General-purpose Data Structure

## One-sentence takeaway

One elegant 2-3 finger tree yields persistent sequences with amortized O(1) access at both ends, and — via annotated measures — ordered sequences, priority queues, intervals, and ropes from the same spine.

## Why it matters here

ano wants persistent/columnar edits, undo, and editor buffers without rewriting half the world. Hinze–Paterson show a single structure whose *measure* monoid chooses the API: size → sequences, priority → heaps, key → maps, string length → ropes. Zipper (1101) is local navigation; finger trees are the persistent backbone. Prefer this over ad-hoc gap buffers once ano’s values are immutable by default.

## Key ideas

- **Fingers at the ends.** Shallow access to left/right ends; deeper tree for the middle — deque performance with persistent sharing.
- **Measures / annotations.** Cache a monoidal summary on every node; different monoids instantiate different data structures without changing topology.
- **Split and concat.** Logarithmic split by measure predicate and concat make sequences practical for editors and ropes.
- **Evidence.** JFP 16(2), 2006. Became the default sequence story in Haskell (`Data.Sequence`) and a standard teaching example for annotated trees.

## Caveats

Constants matter in strict/mutable hosts — a finger tree is not automatically faster than a gap buffer or piece table for a single-cursor editor. Amortized bounds assume persistent or carefully batched use. Bagwell HAMTs remain better for unordered maps; cite Driscoll persistence and Boehm ropes as siblings, not remints (neither is yet a Broadside card — this is the sequence cell).

## Links

- DOI: https://doi.org/10.1017/S0956796805005769
- Cambridge: https://www.cambridge.org/core/journals/journal-of-functional-programming/article/finger-trees-a-simple-generalpurpose-data-structure/18FAD80D30C9D5142FC354F6B8174400
