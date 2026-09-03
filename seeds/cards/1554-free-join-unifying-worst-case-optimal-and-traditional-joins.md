---
title: "Free Join: Unifying Worst-Case Optimal and Traditional Joins"
authors:
  - "Yisu Remy Wang"
  - "Max Willsey"
  - "Dan Suciu"
year: 2023
venue: "SIGMOD / PACMMOD"
arxiv: "2301.10841"
doi: "10.1145/3589295"
source: "https://arxiv.org/abs/2301.10841"
topics:
  - "worst-case-optimal-joins"
  - "free-join"
  - "column-oriented-lazy-trie"
seed_rank: 1554
seed_batch: "user-agm-wcoj-2026-09-03"
reviewed: "2026-09-03"
pool: "engines"
relevance_score: 10
lineage: worst-case-optimal-joins
cites:
  - title: "Size Bounds and Query Plans for Relational Joins"
    url: "https://arxiv.org/abs/1711.03860"
    year: 2013
    arxiv: "1711.03860"
    doi: "10.1137/110859440"
  - title: "EmptyHeaded: A Relational Engine for Graph Processing"
    url: "https://arxiv.org/abs/1503.02368"
    year: 2017
    arxiv: "1503.02368"
    doi: "10.1145/3129246"
  - title: "Adopting Worst-Case Optimal Joins in Relational Database Systems"
    url: "https://www.vldb.org/pvldb/vol13/p1891-freitag.pdf"
    year: 2020
    arxiv: null
    doi: "10.14778/3407790.3407797"
  - title: "Leapfrog Triejoin: A Simple, Worst-Case Optimal Join Algorithm"
    url: "https://arxiv.org/abs/1210.0481"
    year: 2014
    arxiv: "1210.0481"
    doi: "10.5441/002/icdt.2014.13"
  - title: "DuckDB: an Embeddable Analytical Database"
    url: "https://doi.org/10.1145/3299869.3320212"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3320212"
  - title: "Skew Strikes Back: New Developments in the Theory of Join Algorithms"
    url: "https://arxiv.org/abs/1310.3314"
    year: 2013
    arxiv: "1310.3314"
    doi: "10.1145/2590989.2590991"
see:
  - "1550-size-bounds-and-query-plans-for-relational-joins"
  - "1552-emptyheaded-a-relational-engine-for-graph-processing"
  - "1553-adopting-worst-case-optimal-joins-in-relational-database-systems"
  - "874-duckdb-an-embeddable-analytical-database"
---

# Free Join: Unifying Worst-Case Optimal and Traditional Joins

## One-sentence takeaway

Free Join covers the whole design space between left-deep binary hash joins and Generic Join: one plan language, a column-oriented lazy trie (COLT), and vectorized execution, matching or beating both DuckDB binary joins and Generic Join on JOB and LSQB.

## Why it matters here

The false dichotomy 'WCOJ for cyclic, binary for acyclic' is exactly the trap an ano query planner will walk into. Free Join says: start from the binary plan you already trust (DuckDB/Umbra/HyPer), rewrite it into a Free Join plan that can intersect on any subset of attributes and relations, lazy-build tries only when probed, and keep the left table as a scan. That is the shape of a compiled ECS query engine that does not maintain EmptyHeaded-style full tries on every component table.

## Key ideas

- **Design space.** Binary join = two relations, all join attrs at once. Generic Join = one attribute, all relations that carry it. Free Join nodes mix any number of subatoms; a node is valid if some cover subatom supplies the newly bound variables.
- **binary2fj + factoring.** Take a DuckDB left-deep (or bushy-decomposed) plan, emit the equivalent Free Join plan, then pull lookups out of inner loops when their variables are already available — the clover-query n² blowup becomes an intersection on x before expanding a,b,c.
- **COLT.** Column-oriented lazy trie: leaves are offset vectors into base columns; inner hash maps materialise on first get/iter. Left-child tables never build a trie. Beats fully expanded tries by ~8× geomean and Freitag-style first-level-eager lazy tries by ~2×.
- **Vectorization.** iter_batch groups probes before recursing; any batch size >1 beat the scalar Generic Join loop (~2× geomean at 1000).
- **Numbers.** JOB (acyclic): up to 19× vs DuckDB binary, 32× vs Generic Join (geomean ~3× / ~10×). LSQB cyclic: up to 15× vs binary, 4× vs Generic Join. Cyclicity is not the predictor — skew is. Factorized output helps when |out| ≫ |in|.
- PACMMOD 1(2) article 150, June 2023, doi 10.1145/3589295; arXiv:2301.10841. Rust standalone library; plans imported from DuckDB.

## Caveats

- Main-memory only; COLT's random column gathers would hurt on disk. Materialisation of bushy intermediates is naive (full tuples in a vector) and is the main remaining slowdown.
- Optimizer is two-phase (DuckDB cost-based, then heuristic factoring), not a joint search over Free Join plans. Cover choice currently follows Generic Join (iterate the smallest) which fights the traditional 'build on the small, scan the large' heuristic.
- Not a remint of EmptyHeaded (1552), Umbra WCOJ (1553), DuckDB (874), or egg (1152) even though Willsey is shared. Yannakakis is cited, not reminted.

## Links

- arXiv abs: https://arxiv.org/abs/2301.10841
- PDF: https://arxiv.org/pdf/2301.10841
- DOI: https://doi.org/10.1145/3589295
- Willsey page: https://www.mwillsey.com/papers/freejoin
