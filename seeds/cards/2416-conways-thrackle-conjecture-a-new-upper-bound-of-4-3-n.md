---
title: "Conway's thrackle conjecture: a new upper bound of 4/3 n"
authors:
  - "Dániel Gábor Simon"
year: 2026
venue: "arXiv preprint (math.CO; cross-list math.GT)"
arxiv: "2610.31589"
doi: null
source: "https://arxiv.org/abs/2610.31589"
topics:
  - "graph-drawing"
  - "topological-graph-theory"
  - "discharging"
  - "computer-assisted-proof"
  - "ai-assisted-proof"
seed_rank: 2416
seed_batch: "curiosity-2026-10-25"
reviewed: "2026-10-25"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Conway's thrackle conjecture: a new upper bound of 4/3 n"
    url: "https://arxiv.org/abs/2610.31589"
    year: 2026
    arxiv: "2610.31589"
    doi: null
  - title: "Another brick in the wall: A computationally assisted proof of an improved upper bound for thrackles"
    url: "https://arxiv.org/abs/2610.17508"
    year: 2026
    arxiv: "2610.17508"
    doi: null
see: ["2020-the-hararyhill-and-zarankiewicz-crossing-number-formulas", "2035-barnettes-hamiltonian-cycle-conjecture"]
---

# Conway's thrackle conjecture: a new upper bound of 4/3 n

## One-sentence takeaway

Every thrackle on n ≥ 4 vertices (a drawing in which every pair of edges meets exactly once) has at most ⌊4(n−1)/3⌋ edges. This is a big jump from the 18/13·(n−1) bound posted earlier the same month toward Conway's conjectured m ≤ n.

## Why it's lovely

Conway's thrackle conjecture is a perfect puzzle: draw a graph so that every two edges touch exactly once, either at a shared endpoint or at one crossing, and you supposedly can't have more edges than vertices. Decades of bounds crept down from 2n − 3 (Lovász–Pach–Szegedy) through 3/2, 167/117, 1.4, 1.3984 and 1.393 to 18/13. This paper reaches 4/3 in about seven pages. It combines a forgotten 2014 master's-thesis computation with a few lines of discharging. Pammer had already verified the conjecture for every graph on at most twelve vertices, which rules out exactly the small cycle configurations the discharging needs. The concluding remark is just as nice: discharging with any fixed finite lower bound D on average face degree gives m ≤ D/(D−2)·(n − χ), which never reaches 1, so the full conjecture needs a genuinely topological idea.

## Key ideas

- **Classical thrackle facts.** Thrackleable graphs have no 4-cycles, and distinct 6-cycles are vertex-disjoint. Connected bipartite thrackles have plane embeddings, and non-bipartite ones have parity embeddings in the projective plane. Conway doubling turns odd cycles into bipartite thrackles.
- **Reuse an old computation.** Pammer's thesis (Observation 5.16) shows that thrackles on at most 12 vertices satisfy m ≤ n. That yields the needed forbidden local patterns: 6- and 8-cycles cannot share an edge, 6- and 10-cycles cannot share a three-edge path, and short facial walks are cycles.
- **Discharging.** Each face starts with charge equal to its degree. Hexagons receive 1/3 across edges from larger faces, octagons have no hexagonal neighbours and donate nothing, decagons donate across at most 6 edges, and faces of degree 12 or more can afford it. Every face ends with charge at least 8, so 2m ≥ 8f, and Euler's formula gives the bound.
- **Barrier.** Any fixed average-facial-degree bound D gives coefficient D/(D−2) > 1, so methods of this type cannot finish the conjecture.

## Caveats

It is an incremental bound, not the conjecture. The proof relies on a 2014 computer search, which the author says was independently double-checked by an AI agent. The author also discloses that OpenAI's ChatGPT (GPT-6.1-Sol) helped develop the proof, locate and check references, prepare figures and draft some text, and he takes full responsibility. Short and recent, so expect quick scrutiny and possibly further improvements. Not yet refereed.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.31589
- PDF: https://arxiv.org/pdf/2610.31589
- Prior 18/13 bound (Scoppetto): https://arxiv.org/abs/2610.17508
