---
title: "Nim heaps in the Game of Cycles: the parity conjecture fails on trees"
authors:
  - "Muchen Xu"
year: 2026
venue: "arXiv"
arxiv: "2610.15145"
doi: null
source: "https://arxiv.org/abs/2610.15145"
topics:
  - "combinatorial-game-theory"
  - "sprague-grundy"
  - "nim"
  - "trees"
seed_rank: 2297
seed_batch: "curiosity-2026-10-15"
reviewed: "2026-10-15"
pool: "maths"
relevance_score: 8
cites:
  - title: "Nim heaps in the Game of Cycles: the parity conjecture fails on trees"
    url: "https://arxiv.org/abs/2610.15145"
    year: 2026
    arxiv: "2610.15145"
    doi: null
see: []
---

# Nim heaps in the Game of Cycles: the parity conjecture fails on trees

## One-sentence takeaway

In Francis Su's Game of Cycles played on a tree, the conjecture that the second player wins exactly when the number of markable edges is even is false, because a path segment blocked by an arrow at one end and free at the other behaves exactly like a Nim heap of its length; the smallest counterexamples have 15 vertices.

## Why it's lovely

A cute pencil-and-paper game (draw arrows on edges of a plane graph, never create a sink or a source, last move wins) turns out to hide Nim. Several authors had guessed a parity rule, and the explanation of why it fails is better than the counterexample itself: once you spot the heaps, the Sprague–Grundy calculus does the rest, and Grundy values up to 63 all appear. For game AI it is a crisp reminder that a simple parity heuristic can look right on small boards and still be wrong. Decomposing a position into independent heaps is what makes these games solvable at all.

## Key ideas

- **Rules on trees.** On a tree the cycle rule never fires, so only the no-sink/no-source rule matters, and normal play applies: whoever makes the last move wins.
- **Hidden Nim heaps.** A path segment blocked at one end by an arrow and free at the other is equivalent to a Nim heap whose size is its length.
- **Cut-and-glue calculus.** Trees can be cut and glued at vertices next to leaves, so the conjecture fails as soon as one tree has Grundy value at least 2.
- **Census.** The smallest counterexamples have 15 vertices; Grundy values 2 and 4 first appear at 17; every value up to 63 occurs, answering a question of Fokkink and Zandee. A related conjecture of Zandee is also refuted.
- **Spiders.** S(2,3,z) violates the conjecture for every z ≥ 14; S(1,2j,z) has an exact formula governed by binary carries. There is also a twin-branch reduction and an algorithm that is polynomial for spiders with a fixed number of legs.
- **Sharp positive result.** The conjecture holds when every thread has at most two edges, and that bound is sharp.

## Caveats

Single-author preprint (35 pages, Oct 2026). Much of the census is computational, but the programs and data are included as ancillary files. The results are for trees only; general plane graphs, where the cycle rule matters, are not settled. Open: is every non-negative integer the Grundy value of some tree?

## Links

- arXiv abstract: https://arxiv.org/abs/2610.15145
- PDF: https://arxiv.org/pdf/2610.15145
- Ancillary programs and data: https://arxiv.org/src/2610.15145/anc
