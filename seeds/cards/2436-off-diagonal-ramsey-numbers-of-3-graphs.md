---
title: "Off-diagonal Ramsey numbers of 3-graphs"
authors:
  - "Lior Gishboliner"
  - "Sepehr Hajebi"
  - "Xiangyu Li"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2610.32644"
doi: null
source: "https://arxiv.org/abs/2610.32644"
topics:
  - "combinatorics"
  - "ramsey-theory"
  - "hypergraphs"
seed_rank: 2436
seed_batch: "curiosity-2026-10-27"
reviewed: "2026-10-27"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Off-diagonal Ramsey numbers of 3-graphs"
    url: "https://arxiv.org/abs/2610.32644"
    year: 2026
    arxiv: "2610.32644"
    doi: null
see: ["2025-sharp-logarithmic-exponents-for-off-diagonal-ramsey-numbers"]
---

# Off-diagonal Ramsey numbers of 3-graphs

## One-sentence takeaway

A 3-uniform hypergraph H has an off-diagonal Ramsey number R(H, n) that grows only polynomially in n exactly when H fits inside a recursive "triple of triples" B_t. That is the converse of an Erdős–Hajnal theorem from 1972, and it proves the 2015 conjecture of Conlon and seven coauthors.

## Why it's lovely

The answer is a fractal. Start with one vertex, take three copies, and add every hyperedge with one vertex in each copy; repeat t times. The hypergraphs inside that self-similar object are exactly the ones whose Ramsey numbers stay tame. Everything else, even linear 3-graphs that were once expected to behave, forces super-polynomial growth. For graphs every R(H, n) is polynomial, and for 3-graphs it already fails at K₄⁽³⁾, so this draws the exact line one level up. The authors also state that no generative AI was used beyond typo spotting, which is now rare enough in this feed to be worth noting.

## Key ideas

- **Iteratively tripartite.** B₀ is a single vertex, and B_t is three disjoint copies of B_{t−1} plus all transversal triples. H is iteratively tripartite if it embeds in some B_t.
- **Main construction (Theorem 1.2).** For every c and h ≥ 2 and every large n there is a 3-graph on n^c vertices with independence number below n in which every subgraph with h edges is iteratively tripartite.
- **Consequence.** If H is not iteratively tripartite, with h edges, then R(H, n) > 3^((1/60h)(log₃ n)^(1+1/(6h))), which is super-polynomial. The authors did not try to optimize this bound.
- **Context.** Earlier work settled 3-graphs with at most two, then at most five, tight components, and reduced the whole problem to linear 3-graphs. This paper finishes it.

## Caveats

The super-polynomial bound is barely so (exponent 1 + 1/(6h) on a log), so the gap between polynomial and the true growth is left wide open. Higher uniformities are not treated. I read the first five pages.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.32644
- PDF: https://arxiv.org/pdf/2610.32644
