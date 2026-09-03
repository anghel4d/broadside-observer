---
title: "FAQ: Questions Asked Frequently"
authors:
  - "Mahmoud Abo Khamis"
  - "Hung Q. Ngo"
  - "Atri Rudra"
year: 2016
venue: "PODS"
arxiv: "1504.04044"
doi: "10.1145/2902251.2902280"
source: "https://arxiv.org/abs/1504.04044"
topics:
  - "worst-case-optimal-joins"
  - "functional-aggregate-queries"
  - "variable-elimination"
seed_rank: 1551
seed_batch: "user-agm-wcoj-2026-09-03"
reviewed: "2026-09-03"
pool: "languages"
relevance_score: 10
lineage: worst-case-optimal-joins
cites:
  - title: "Size Bounds and Query Plans for Relational Joins"
    url: "https://arxiv.org/abs/1711.03860"
    year: 2013
    arxiv: "1711.03860"
    doi: "10.1137/110859440"
  - title: "Leapfrog Triejoin: A Simple, Worst-Case Optimal Join Algorithm"
    url: "https://arxiv.org/abs/1210.0481"
    year: 2014
    arxiv: "1210.0481"
    doi: "10.5441/002/icdt.2014.13"
  - title: "Skew Strikes Back: New Developments in the Theory of Join Algorithms"
    url: "https://arxiv.org/abs/1310.3314"
    year: 2013
    arxiv: "1310.3314"
    doi: "10.1145/2590989.2590991"
  - title: "Algorithms for Acyclic Database Schemes"
    url: "https://dl.acm.org/doi/10.5555/1286831.1286840"
    year: 1981
    arxiv: null
    doi: null
see:
  - "1550-size-bounds-and-query-plans-for-relational-joins"
---

# FAQ: Questions Asked Frequently

## One-sentence takeaway

Functional Aggregate Queries put joins, aggregates, MAP inference, matrix-chain products and #QCQ in one expression; InsideOut evaluates them by variable elimination whose intermediates are worst-case optimal joins, in time Õ(N^{faqw(σ)} + |φ|).

## Why it matters here

ano queries are not just listing joins: GRID COMMAND standing rules want COUNT/SUM/MIN over archetype tables, and Anoptic's relational core is closer to 'eliminate a bound variable, emit a residual factor' than to Volcano iterators. FAQ is the language in which a Transform ⋈ Velocity query with a SUM over damage is the same object as the join, with the same fractional-cover runtime. InsideOut is the planner: pick a variable order equivalent to the written aggregates, then WCOJ the bags.

## Key ideas

- **FAQ expression.** Output φ(x_[f]) is a nested product of input factors ψ_S, with each bound variable aggregated by its own ⊕^{(i)} (sum, max, ×, …) over a commutative semiring. Free variables stay; bound variables are eliminated.
- **InsideOut.** Variable elimination with three twists: (1) WCOJ (NPRR / leapfrog) computes each intermediate inside the AGM/fractional-cover bound; (2) indicator projections recover fractional-hypertree-width style guarantees; (3) product-aggregates may swap with the inner ⊗.
- **FAQ-width.** Runtime Õ(N^{faqw(σ)} + ||φ||) for a variable order σ. faqw is the FAQ analogue of induced fractional hypertree width.
- **Equivalent variable orders (EVO).** Not every permutation is legal (aggregates need not commute). The paper characterises semantically equivalent orders from the expression tree plus the hypergraph, then approximates the min-faqw order in that set. Complexity of the search is essentially the same as ordinary FAQ-SS / treewidth.
- **Recovered results.** SumProd, CSP, PGM MAP, matrix-chain multiplication, QCQ/#QCQ, and ordinary WCOJ listing joins are FAQ special cases. Compact factor representations recover Minesweeper/Tetris beyond-worst-case joins and β-acyclic SAT.
- PODS 2016 Best Paper (invited to JACM; the archival cite remains the PODS proceedings + arXiv:1504.04044). SIGMOD Record 2017 'Juggling Functions Inside a Database' is the same algorithm told for a DB audience; LogicBlox shipped a version.

## Caveats

- Invited to JACM after the PODS Best Paper; there is no JACM article to cite. Do not invent a JACM DOI.
- faqw minimisation is NP-hard in query complexity (same as fractional hypertree width). The approximation is over equivalent orders, not a magic SQL knob.
- Listing representation of factors is assumed in the main analysis; compact inputs need the Section-7 modifications. Not a remint of AGM (1550) or of Yannakakis acyclic joins.

## Links

- arXiv abs: https://arxiv.org/abs/1504.04044
- PDF: https://arxiv.org/pdf/1504.04044
- PODS DOI: https://doi.org/10.1145/2902251.2902280
