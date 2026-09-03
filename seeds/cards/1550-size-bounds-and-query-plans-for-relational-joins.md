---
title: "Size Bounds and Query Plans for Relational Joins"
authors:
  - "Albert Atserias"
  - "Martin Grohe"
  - "Dániel Marx"
year: 2013
venue: "FOCS 2008 / SIAM J. Comput."
arxiv: "1711.03860"
doi: "10.1137/110859440"
source: "https://arxiv.org/abs/1711.03860"
topics:
  - "worst-case-optimal-joins"
  - "relational-ecs-queries"
  - "query-planning"
seed_rank: 1550
seed_batch: "user-agm-wcoj-2026-09-03"
reviewed: "2026-09-03"
pool: "languages"
relevance_score: 10
lineage: worst-case-optimal-joins
cites:
  - title: "Constraint Solving via Fractional Edge Covers"
    url: "https://doi.org/10.1145/2635812"
    year: 2014
    arxiv: null
    doi: "10.1145/2635812"
  - title: "Algorithms for Acyclic Database Schemes"
    url: "https://dl.acm.org/doi/10.5555/1286831.1286840"
    year: 1981
    arxiv: null
    doi: null
---

# Size Bounds and Query Plans for Relational Joins

## One-sentence takeaway

The worst-case size of a natural join is |D|^{ρ*} where ρ* is the fractional edge cover of the query hypergraph, and join-project plans beat join-only plans by a superpolynomial factor.

## Why it matters here

Anoptic ECS archetype tables are relations; a system query is a natural join of those tables on entity keys (Transform ⋈ Velocity ⋈ Health, Flecs relationship edges, GRID COMMAND standing rules). Pairwise hash-join trees are the AGM-suboptimal plans this paper kills: a triangle of relationship tables is n^{3/2} not n^2, and inserting a projection in the plan can beat any join-only tree by |D|^{Ω(log |Q|)}. ano's relational core should cost a query by ρ*, not by Selinger's left-deep binary tree. Card 170 already ships WCOJ Datalog on GPU because of this bound; this is the theorem that bound sits on.

## Key ideas

- **Query hypergraph.** Vertices are attributes, hyperedges are relation schemas. A join query Q is a natural join of the atoms; |Q(D)| is the number of tuples whose projections land in every input.
- **Fractional edge cover ρ*.** LP: minimise Σ_R x_R subject to each attribute a being covered by Σ_{R ∋ a} x_R ≥ 1, x_R ≥ 0. For the triangle R(a,b) ⋈ S(b,c) ⋈ T(c,a), ρ*=3/2 so |Q| ≤ √(|R||S||T|), beating the pairwise min{|R|·|S|, …} bound.
- **Matching lower bound.** LP dual (a fractional packing of attributes) builds arbitrarily large instances that meet the upper bound up to a |Q|^{ρ*} factor. Polynomial-size answers ⇔ polynomial-time evaluation ⇔ bounded ρ*.
- **Join-project vs join-only.** Grohe–Marx already gave a join-project plan running in O(|Q|² · |D|^{ρ*+1}) via attribute-at-a-time projection. This paper proves some queries need |D|^{Ω(log |Q|)} time under any join-only plan (integrality gap of edge cover is Θ(log n)); the gap is tight.
- **Average case.** On Erdős–Rényi-style random databases the governing parameter is maximum density, computable by max-flow; every join-project plan converts to a join-only plan with only a query-dependent constant blowup in expectation — projections help in the worst case, not on average.
- **Size constraints.** With known |R|=N_R the same LP with objective Σ x_R log N_R gives a 2^n-factor estimate; approximating the true max output better than 2^{n^{1-ε}} is NP-hard under ZPP≠NP. FOCS 2008, SICOMP 42(4):1737–1767, 2013; arXiv:1711.03860 is the SICOMP text.

## Caveats

- The bound is worst-case over unconstrained instances; real ECS tables have keys, FDs, and degree skew that later papers (FAQ, PANDA) tighten. Functional dependencies are announced but deferred — Gottlob et al. and Abo Khamis–Ngo–Suciu pick that thread up.
- Join-project optimality is up to a polynomial in |Q| and |D|, not a drop-in SQL optimizer. Yannakakis already solves α-acyclic queries in linear time; do not read this as a remint of acyclic joins.
- Not a systems paper: no trie, no SIMD, no engine. EmptyHeaded / Umbra / Free Join are the engines. Not a remint of card 170 (GPU WCOJ Datalog) or Umbra 821.

## Links

- arXiv abs: https://arxiv.org/abs/1711.03860
- PDF: https://arxiv.org/pdf/1711.03860
- SICOMP DOI: https://doi.org/10.1137/110859440
