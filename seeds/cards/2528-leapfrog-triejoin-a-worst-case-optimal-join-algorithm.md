---
title: "Leapfrog Triejoin: a Worst-Case Optimal Join Algorithm"
authors:
  - "Todd L. Veldhuizen"
year: 2014
venue: "ICDT 2014 (OpenProceedings); arXiv:1210.0481"
arxiv: "1210.0481"
doi: null
source: "https://arxiv.org/abs/1210.0481"
topics:
  - "worst-case-optimal-join"
  - "datalog"
  - "leapfrog-triejoin"
  - "agm-bound"
  - "logicblox"
seed_rank: 2528
seed_batch: "archive-2026-11-06"
reviewed: "2026-11-06"
pool: "languages"
lineage: concurrent-data-structures
relevance_score: 9
cites:
  - title: "Leapfrog Triejoin: a Worst-Case Optimal Join Algorithm"
    url: "https://arxiv.org/pdf/1210.0481"
    year: 2014
    arxiv: "1210.0481"
    doi: null
see: ["1550-size-bounds-and-query-plans-for-relational-joins", "1552-emptyheaded-a-relational-engine-for-graph-processing", "2508-an-amateurs-introduction-to-recursive-query-processing-strategies", "2521-distributed-datalog-at-scale-with-worst-case-optimal-joins"]
---

# Leapfrog Triejoin: a Worst-Case Optimal Join Algorithm

## One-sentence takeaway

Veldhuizen proves that LogicBlox's production join — leapfrog triejoin over sorted trie iterators — matches the AGM/NPRR worst-case bound up to a log factor, is tighter on projection-cardinality instance classes where NPRR is not optimal, and can be built from ordinary B-trees.

## Why it matters here

ano's relational hops and standing-rule fixpoints need a join kernel that does not blow up on cycles (triangles, multi-way patterns). Leapfrog is the practically shipped WCOJ: variable-oriented rather than binary-join-tree-oriented, with a short optimality proof you can teach. Together with the already-carded AGM size bounds and EmptyHeaded, this is the missing "how LogicBlox actually joins" ancestor for GRID COMMAND-style queries.

## Key ideas

- Full conjunctive queries; running example Q(a,b,c) ← R(a,b), S(b,c), T(a,c). AGM fractional edge cover gives |Q| ≤ Q*; NPRR runs in O(Q*).
- Leapfrog triejoin enumerates satisfying assignments by binding variables in order. Each relation (or non-materialized view) is a trie iterator; unary leapfrog intersection of sorted iterators does the per-variable step.
- Complexity O(Q* log n) with conventional searches; a refined version removes the log. Improves NPRR on finer instance classes (projection-cardinality constraints): counterexample O(n log n) leapfrog vs Θ(n^1.375) NPRR.
- Extends to ∃₁ queries (existential, no universal) used as LogicBlox rule bodies; disjunctions and views presented through the same iterator interface without materializing.
- Implemented with B-trees / tries already in the engine — no exotic algebraic machinery required to ship.

## Caveats

- Assumes inputs presented in sorted / trie order consistent with the variable order. Choosing a bad variable order still hurts constants even when the asymptotic bound holds.
- Focuses on full conjunctive / ∃₁ fragments; recursive Datalog stratification and magic sets sit in the surrounding engine (see Bancilhon & Ramakrishnan 1986).
- arXiv 1210.0481 (v5, Dec 2013) is the archival text; ICDT 2014 OpenProceedings PDF matches.

## Links

- [arXiv abs](https://arxiv.org/abs/1210.0481)
- [arXiv PDF](https://arxiv.org/pdf/1210.0481)
- [ICDT 2014 OpenProceedings PDF](https://openproceedings.org/2014/conf/icdt/Veldhuizen14.pdf)
