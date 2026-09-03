---
title: "Adopting Worst-Case Optimal Joins in Relational Database Systems"
authors:
  - "Michael Freitag"
  - "Maximilian Bandle"
  - "Tobias Schmidt"
  - "Alfons Kemper"
  - "Thomas Neumann"
year: 2020
venue: "PVLDB"
arxiv: null
doi: "10.14778/3407790.3407797"
source: "https://www.vldb.org/pvldb/vol13/p1891-freitag.pdf"
topics:
  - "worst-case-optimal-joins"
  - "umbra"
  - "hash-trie"
seed_rank: 1553
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
  - title: "Leapfrog Triejoin: A Simple, Worst-Case Optimal Join Algorithm"
    url: "https://arxiv.org/abs/1210.0481"
    year: 2014
    arxiv: "1210.0481"
    doi: "10.5441/002/icdt.2014.13"
  - title: "Umbra: A Disk-Based System with In-Memory Performance"
    url: "https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.html"
    year: 2020
    arxiv: null
    doi: null
see:
  - "1550-size-bounds-and-query-plans-for-relational-joins"
  - "1552-emptyheaded-a-relational-engine-for-graph-processing"
  - "821-umbra-a-disk-based-system-with-in-memory-performance"
  - "832-efficiently-compiling-efficient-query-plans-for-modern-hardw"
---

# Adopting Worst-Case Optimal Joins in Relational Database Systems

## One-sentence takeaway

Umbra ships a hash-trie WCOJ built on the fly during execution, plus a hybrid optimizer that mixes binary joins and multiway WCOJ in one plan, so cyclic queries get the AGM bound without tanking TPC-H or JOB.

## Why it matters here

This is how a compiled relational engine (Umbra 821, HyPer's successor, the same code-gen family as 832) actually absorbs AGM instead of remaining a graph-specialist. Anoptic/ano will not pre-index every component column in every order; Freitag's on-the-fly hash-tries are the HTAP-compatible version of EmptyHeaded's tries. Hybrid plans are the practical answer to 'most GRID COMMAND queries are acyclic, some relationship queries are triangles.'

## Key ideas

- **The tax of sorted indexes.** Leapfrog / EmptyHeaded assume ordered tries on every attribute order. That is fine for read-only graph analytics and fatal for an HTAP engine that also runs TPC-H. Umbra refuses the precomputation.
- **Hash-based WCOJ.** Build hash-tries during the query, on the relations the optimizer actually needs, then run a Generic-Join-style multiway intersection over those tries. Linear in the AGM bound once the tries exist; trie build is the remaining cost.
- **Hybrid optimizer.** Cost-based: keep binary hash joins for the acyclic backbone (Yannakakis/Volcano territory), splice in a multiway WCOJ operator on cyclic subqueries. One plan tree, not two engines.
- **When it wins.** Complex analytical and graph-shaped queries beat pairwise engines and beat graph-specialist WCOJ systems that paid for indexes; TPC-H and JOB stay at binary-join speed when WCOJ would not help.
- PVLDB 13(11):1891–1904, 2020, doi 10.14778/3407790.3407797. Implemented in Umbra (TUM). Author PDF: https://db.in.tum.de/~freitag/papers/p1891-freitag.pdf. No arXiv posting.

## Caveats

- The query named 'Freitag, Binnig, et al.' — Carsten Binnig is not an author. The authors are Freitag, Bandle, Schmidt, Kemper, Neumann (TUM Umbra group).
- No arXiv id; the archival copy is the VLDB PDF / DOI. Hash-tries still cost build time on large right-hand tables — Free Join's COLT is the sequel that lazy-builds them.
- Not a remint of Umbra the system paper (821) or of EmptyHeaded (1552). Does not replace Yannakakis on α-acyclic queries.

## Links

- VLDB PDF: https://www.vldb.org/pvldb/vol13/p1891-freitag.pdf
- Author PDF: https://db.in.tum.de/~freitag/papers/p1891-freitag.pdf
- DOI: https://doi.org/10.14778/3407790.3407797
- Umbra page: https://umbra.db.in.tum.de/
