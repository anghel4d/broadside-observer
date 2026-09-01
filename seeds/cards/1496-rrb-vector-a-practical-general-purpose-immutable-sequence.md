---
title: "RRB Vector: A Practical General Purpose Immutable Sequence"
authors: ["Nicolas Stucki", "Tiark Rompf", "Vlad Ureche", "Philipp Haller"]
year: 2015
venue: "ICFP"
arxiv: "1509.04351"
doi: "10.1145/2784731.2784739"
source: "https://infoscience.epfl.ch/record/213452/files/rrbvector.pdf"
topics: [array-programming-apl-bqn-q, embedded-scripting-dsls, typed-programming-systems]
seed_rank: 1496
seed_batch: "archive-2026-09-02"
reviewed: "2026-09-02"
pool: "languages"
relevance_score: 9
lineage: persistent-data-structures
cites:
  - title: "Ideal Hash Trees"
    url: "https://lampwww.epfl.ch/papers/idealhashtrees.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "Ropes: An Alternative to Strings"
    url: "https://doi.org/10.1002/spe.4380251203"
    year: 1995
    arxiv: null
    doi: "10.1002/spe.4380251203"
  - title: "Finger Trees: A Simple General-purpose Data Structure"
    url: "https://doi.org/10.1017/S0956796805005769"
    year: 2006
    arxiv: null
    doi: "10.1017/S0956796805005769"
  - title: "Purely Functional Data Structures"
    url: "https://www.cs.cmu.edu/~rwh/students/okasaki.pdf"
    year: 1996
    arxiv: null
    doi: "10.1017/CBO9780511530104"
see:
  - "1463-ideal-hash-trees"
  - "1462-ropes-an-alternative-to-strings"
  - "1441-finger-trees-a-simple-general-purpose-data-structure"
---

# RRB Vector: A Practical General Purpose Immutable Sequence

## One-sentence takeaway

Relax the left-packed radix invariant of a 32-way Bagwell vector so concat and slice stay logarithmic — a persistent sequence with HAMT-like indexing and rope-like joins.

## Why it matters here

Ideal Hash Trees (1463) are the *map* leftover of Finger Trees 1441; Clojure/Scala `Vector` is the strict radix-balanced *sequence* (O(log₃₂ n) index, O(n) concat). ano arrays need concat/slice without copying the world. Relaxed radix-balanced (RRB) trees keep the wide branching and radix addressing, then allow a few non-full nodes so two vectors can be joined by a short search-and-rewrite instead of rebuilding. Ropes (1462) are the binary-tree string ancestor; Finger Trees are the 2-3 measured ancestor. This is the 32-way array leftover.

## Key ideas

- **Strict radix vectors.** A left-packed 32-way tree with sizes a power of the radix: index is a bit-slice walk, but concat must copy one side.
- **Relaxed radix.** Nodes may be non-full; a size table (or equivalent) restores O(1) slot choice per level. Height stays small; indexing is still O(log₃₂ n) with a slightly fatter node.
- **Concat and slice.** Join walks the right spine of the left tree and the left spine of the right tree, redistributing a bounded number of slots — logarithmic, not linear. Slice is the dual.
- **Evidence.** ICFP 2015, doi `10.1145/2784731.2784739`, arXiv `1509.04351`. Infoscience PDF. Scala/Clojure community follow-ups (RRB-Vector library) are implementations, not a remint.

## Caveats

Relaxed nodes cost extra words (size tables) and a more careful rebalance; a hot `append` loop on a single vector still wants the strict left-packed spine. Not a GPU structure — ano's C/ECS host is the target. Bagwell is cited as the radix ancestor, not a coauthor of this ICFP paper (Stucki–Rompf–Ureche–Haller). Not a remint of HAMT 1463, ropes 1462, or Finger Trees 1441.

## Links

- PDF: https://infoscience.epfl.ch/record/213452/files/rrbvector.pdf
- DOI: https://doi.org/10.1145/2784731.2784739
- arXiv: https://arxiv.org/abs/1509.04351
