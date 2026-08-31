---
title: "The Presort Hierarchy for Geometric Problems"
authors: ["Ivor van der Hoog", "Eva Rotenberg", "Jack Spalding-Jamieson", "Lasse Wulf"]
year: 2026
venue: "arXiv:cs.CG"
arxiv: "2602.08843"
doi: null
source: "https://arxiv.org/abs/2602.08843"
topics: ["curiosity", "computational-geometry", "engine"]
seed_rank: 1483
seed_batch: "curiosity-2026-09-01"
reviewed: "2026-09-01"
pool: "engines"
relevance_score: 10
lineage: computational-geometry
cites:
  - title: "The Presort Hierarchy for Geometric Problems"
    url: "https://arxiv.org/abs/2602.08843"
    year: 2026
    arxiv: "2602.08843"
    doi: null
  - title: "A linear-time algorithm for computing the Voronoi diagram of a convex polygon"
    url: "https://doi.org/10.1007/BF02187734"
    year: 1989
    arxiv: null
    doi: "10.1007/BF02187734"
see:
  - "1358-primitives-for-the-manipulation-of-general-subdivisions-and-th"
---

# The Presort Hierarchy for Geometric Problems

## One-sentence takeaway

Quadtrees (and thus Delaunay / Voronoi / EMST) are 2-Presortable: given \(x\)- and \(y\)-sortings plus the permutation, a randomised Real-RAM algorithm builds them in expected \(O(n\sqrt{\log n})\), answering Aggarwal–Guibas–Saxe–Shor 1989.

## Why it's lovely

Why you might love this: a 37-year open question — *does orthogonal presorting break the \(n\log n\) Voronoi barrier?* — gets a clean hierarchy (1-Presortable / 2-Presortable / Presort-Hard) and a yes for the whole proximity family. The trick is beautiful: simulate Word-RAM orthogonal range successor on Real RAM because rank-space coordinates live in \([n]\), then run a skip-list exponential search that recreates Buchin–Mulzer's linear-depth clairvoyant ADT at \(O(\log^\varepsilon n)\) overhead.

## Key ideas

- Hierarchy: 1-axis advice vs both axes + permutation vs hard even with constant directions.
- Main theorem: compressed quadtree in expected \(O(n\sqrt{\log n})\); linear-time reductions lift to Delaunay, Voronoi, EMST, WSPD, NN-graph, max empty circle, KD-tree.
- Orthogonal segment intersection is 2-Presortable in \(O(n\log\log n)\) via van Emde Boas on ranks.
- Presort-Hard: onion layers, decremental convex hull, ordered \(k\)-closest pairs (clairvoyant ADT / sorting reductions).

## Caveats

Randomised; derandomisation open. Bound inherits Belazzougui–Puglisi \(\sqrt{\log n}\) preprocessing — improving range successor would improve everything. Higher-\(d\) open. Not a claim that unsorted Voronoi is sub-\(n\log n\).

## Implications for Broadside

Anoptic spatial indexes: if your ECS already keeps entities sorted on axes (or can afford the permutation), proximity rebuilds need not pay full \(n\log n\). Advice-as-presort is a clean cousin of prediction-augmented geometry.

## Links

- arXiv abs: https://arxiv.org/abs/2602.08843
- PDF: https://arxiv.org/pdf/2602.08843.pdf
