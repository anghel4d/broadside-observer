---
title: "Algorithms for Acyclic Database Schemes"
authors:
  - "Mihalis Yannakakis"
year: 1981
venue: "VLDB 1981 (Cannes), pp. 82–94"
arxiv: null
doi: "10.5555/1286831.1286840"
source: "https://dl.acm.org/doi/10.5555/1286831.1286840"
topics:
  - "acyclic-joins"
  - "semijoin"
  - "join-trees"
  - "query-evaluation"
  - "conjunctive-queries"
seed_rank: 2507
seed_batch: "archive-2026-11-04"
reviewed: "2026-11-04"
pool: "languages"
lineage: worst-case-optimal-joins
relevance_score: 9
cites:
  - title: "Algorithms for Acyclic Database Schemes"
    url: "https://www.vldb.org/dblp/db/conf/vldb/Yannakakis81.html"
    year: 1981
    arxiv: null
    doi: "10.5555/1286831.1286840"
see: ["1550-size-bounds-and-query-plans-for-relational-joins", "1554-free-join-unifying-worst-case-optimal-and-traditional-joins"]
---

# Algorithms for Acyclic Database Schemes

## One-sentence takeaway

For acyclic join schemes, one bottom-up and one top-down pass of semijoins along a join tree remove every dangling tuple. After that, the join (and its projections) can be computed in time polynomial in input plus output. This is "Yannakakis' algorithm", the baseline every worst-case-optimal and free-join paper measures against.

## Why it matters here

ano's relational hops are chains and trees of joins over columns. When the hop graph is acyclic, which is the common case for ECS-style "entity → component → related entity" queries, the semijoin full reducer means no hop ever materialises tuples that won't reach the output. That is a cheap, provable guarantee to build on before reaching for generic WCOJ machinery.

## Key ideas

- Acyclic (α-acyclic) schemes are exactly those with a join tree. They are also exactly those that admit a full semijoin reducer.
- Full reducer: root the join tree, then semijoin children into parents bottom-up and parents into children top-down. Every relation then holds only tuples that join with the rest.
- After full reduction, joining along the tree never produces intermediate results bigger than needed, so project-join queries run in time polynomial in |input| + |output|. For full joins that is O(|IN| + |OUT|) up to log factors.
- The paper also gives algorithms for related problems on acyclic schemes: join minimisation, and inferring and testing satisfaction of acyclic join dependencies.

## Caveats

- No free full text was reachable from this run. The card is written from the VLDB/ACM record and abstract, plus the well-established secondary accounts of the algorithm. The exact section structure and complexity statements in the original were not re-read.
- The bounds only apply to acyclic queries. Cyclic patterns (triangles) need hypertree decompositions or worst-case-optimal joins (see the linked cards).

## Links

- [ACM Digital Library](https://dl.acm.org/doi/10.5555/1286831.1286840)
- [VLDB 1981 dblp entry](https://www.vldb.org/dblp/db/conf/vldb/Yannakakis81.html)
