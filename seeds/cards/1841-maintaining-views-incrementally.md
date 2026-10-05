---
title: "Maintaining Views Incrementally"
authors:
  - "Ashish Gupta"
  - "Inderpal Singh Mumick"
  - "V. S. Subrahmanian"
year: 1993
venue: "SIGMOD"
arxiv: null
doi: "10.1145/170035.170066"
source: "https://dl.acm.org/doi/10.1145/170035.170066"
topics:
  - incremental-view-maintenance
  - datalog
  - counting-algorithm
  - dred
  - production-systems
seed_rank: 1841
seed_batch: "archive-2026-10-06"
reviewed: "2026-10-06"
pool: "languages"
relevance_score: 9
lineage: incremental-computation
cites:
  - title: "Efficiently Updating Materialized Views"
    url: "https://doi.org/10.1145/16856.16861"
    year: 1986
    arxiv: null
    doi: "10.1145/16856.16861"
  - title: "Maintaining views incrementally (SIGMOD Record 22(2) version)"
    url: "https://doi.org/10.1145/170036.170066"
    year: 1993
    arxiv: null
    doi: "10.1145/170036.170066"
---

# Maintaining Views Incrementally

## One-sentence takeaway

Keep derived facts up to date under inserts and deletes by storing, per derived tuple, only a count of its alternative derivations (non-recursive views) or by over-deleting and then re-deriving (DRed, recursive views).

## Why it matters here

A production-rule engine is a materialized view over working memory: Rete (042), TREAT (1004) and Doorenbos (1049) maintain match state incrementally, and the library's modern IVM cards (differential dataflow 823, DBSP 1489, differential Datalog 1809 — which explicitly positions itself as not hand-writing DRed) sit downstream of this pair of algorithms. For ano rules/triggers over ECS columns and GRID COMMAND's derived "who sees whom / who threatens what" relations, counting vs DRed is the first design fork: counts are cheap and exact without recursion; recursion (reachability, supply lines) needs DRed-style retraction.

## Key ideas

- **Scope.** Views in SQL or Datalog with UNION, negation, aggregation (e.g. SUM, MIN), linear and general recursion; changes are insertions, deletions and updates to base relations.
- **Counting algorithm.** Track the number of alternative derivations of each derived tuple (not the derivations themselves); works under set and duplicate semantics; presented for non-recursive views with negation and aggregation; the count costs little or nothing beyond deriving the tuple, and only tuples actually inserted or deleted are computed.
- **DRed (Delete and Rederive).** For recursive views: (1) compute an overestimate of deleted derived tuples — any tuple with an invalidated derivation; (2) prune tuples that still have an alternative derivation in the new database; (3) compute new insertions from the partially updated view plus base changes.
- **View redefinition.** DRed also applies when the view definition itself changes.
- **Division of labour.** The authors propose counting for non-recursive and DRed for recursive views, arguing each is better on its own domain.

## Caveats

Algorithms are stated over relational/Datalog views; the paper predates timely/differential dataflow, so it has no story for iteration-versioned or out-of-order updates (that is exactly what 823/1489 add). DRed's first phase deliberately over-deletes, which can be expensive on dense recursive graphs; counting as presented is restricted to non-recursive views. Card written from the ACM abstract and the indexed full text of the Columbia course-mirror PDF; the mirror timed out from this box and the ACM PDF is behind an automated-fetch block, so verify any detail against the PDF.

## Links

- DOI (SIGMOD 1993, pp. 157–166): https://doi.org/10.1145/170035.170066
- ACM DL: https://dl.acm.org/doi/10.1145/170035.170066
- PDF (Columbia qualifying-exam reading list mirror): http://www1.cs.columbia.edu/~gravano/Qual/Papers/13%20-%20Maintaining%20Views%20Incrementally.pdf
