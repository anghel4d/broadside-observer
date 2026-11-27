---
title: "Efficiently Monitoring Relational Databases"
authors:
  - "O. Peter Buneman"
  - "Eric K. Clemons"
year: 1979
venue: "ACM Transactions on Database Systems 4(3), 368–382, September 1979"
arxiv: null
doi: "10.1145/320083.320099"
source: "https://dl.acm.org/doi/pdf/10.1145/320083.320099"
version_reviewed: "TODS September 1979 journal PDF (ACM, 15 pages, read via the Internet Archive snapshot of 2024-04-24)"
topics:
  - "alerters"
  - "triggers"
  - "standing-queries"
  - "incremental-view-maintenance"
  - "relevance-analysis"
  - "relational-algebra"
  - "integrity-constraints"
seed_rank: 2740
seed_batch: "archive-2026-11-28"
reviewed: "2026-11-28"
pool: "languages"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Efficiently Monitoring Relational Databases"
    url: "https://doi.org/10.1145/320083.320099"
    year: 1979
    arxiv: null
    doi: "10.1145/320083.320099"
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
  - title: "System R: Relational Approach to Database Management"
    url: "https://doi.org/10.1145/320455.320457"
    year: 1976
    arxiv: null
    doi: "10.1145/320455.320457"
  - title: "Implementation of a Structured English Query Language"
    url: "https://doi.org/10.1145/361020.361215"
    year: 1975
    arxiv: null
    doi: "10.1145/361020.361215"
  - title: "Efficient Monitoring of Database Assertions"
    url: "https://doi.org/10.1145/509252.509290"
    year: 1978
    arxiv: null
    doi: "10.1145/509252.509290"
see:
  - "047-a-relational-model-of-data-for-large-shared-data-banks"
---

# Efficiently Monitoring Relational Databases

## One-sentence takeaway

An *alerter* is a standing condition on a view (for example "employees earning more than their managers"). Buneman and Clemons show how to avoid recomputing that view on most updates. Per-operator rules, pushed down the view's operator DAG, say which kinds of change (add, delete, or modify of a given column) can possibly matter, so most updates are rejected from the schema alone. The rest are re-evaluated bottom-up only until the change stops being relevant.

## Why it matters here

This is the closest 1970s ancestor of ano's standing rules (する/なる) that the library has. A standing rule is an alerter on a virtual relation, and the paper's machinery maps directly onto a tick loop. Compute a per-node *relevance* bitmask once, at rule-definition time, from the query plan. Each tick, form a *difference* bitmask from the write set (which tables gained rows, lost rows, or had which columns written). Skip the rule when the two AND to zero. When the rule cannot be skipped, run the plan bottom-up and stop at the first node whose output did not change in a relevant way. The "filter" trick (evaluate the rule with the changed table replaced by only the inserted rows, and if the result is empty the rule cannot fire) is the delta-rule idea behind later incremental view maintenance (2582, 1489, 823). It also mirrors Rete's (042) refusal to rematch unchanged working memory. The mapping to ano is my reading; the paper targets a relational DBMS.

## Key ideas

- **Problem framing.** System R triggers fire on updates to base relations, which is *simple* alerting. Useful alerters are *complex*: they sit on a virtual relation built by joins, projections, differences and divisions over several relations. Most updates should be shown irrelevant without building that relation.
- **Readily ignorable updates (RIUs).** Add-alerters report new target tuples and delete-alerters report removed ones. Table I gives, for each algebra operator and operand side, what an add, delete or modify of field f can do to the result. Deleting from the right operand of a division can never add a result tuple, so it is an RIU for an add-alerter. Renaming a department is an RIU for "earns more than manager". These checks need no database access.
- **Relevance and difference vectors.** Every node of the construction diagram (the operator DAG from base relations up to the target) carries a bit vector of length k+2: add, delete, and modify of each of its k domains. `relevance-comp` ORs the alerter's bits into the target and pushes them down through `rules(i, op, v)`. An update's difference vector ANDed with its base relation's relevance vector decides the RIU test. The paper's example is the EMP relevance vector `101011` for the manager alerter.
- **Partial evaluation upward.** `alert-eval` starts at the changed base node and gets the old and new values of each node (`both-eval`, memoized through an `eval-flag` so shared subplans are computed once). It climbs to a parent only if `diff(old, new) ∧ relevance` is nonzero. Example: moving an employee between two departments with the same manager leaves the manager join unchanged, so evaluation stops there. The procedure must run as a critical section, with further base updates queued.
- **Plan rewriting and filters.** Restrictions should be percolated down the diagram because alerters re-run the same query many times. A *filter* evaluates the target with a base relation replaced by just `R-in` (or `R-out`). An empty result proves the alerter cannot fire. For modifications, comparing `target-in` with `target-out` separates add, delete and modify cases. The authors expect filters across many relations (or through division) to cost nearly as much as evaluation.
- **Scope.** The work was motivated by the DAISY decision-aiding system at Wharton. It applies equally to maintaining views and to integrity constraints, which are alerters that back out the offending update. A referee's point about predicate-aware savings (a modification from "MARYLAND" to "MAINE" cannot affect `STATE = "OHIO"`) is noted but left out of the data-independent rules.

## Caveats

There is no implementation, benchmark or cost measurement. The method is a design with pseudocode, and the authors say a practical `alert-eval` "would be more intricate". It handles one alerter per diagram in the formal treatment and serializes updates during evaluation. The rules are deliberately data-independent, so many updates that a predicate-aware check would reject still cause evaluation. `both-eval` returning whole old and new relations is a simplification the authors flag. The related Hammer & Sarin report is cited only as an MIT report (Dec. 1977); the SIGMOD 1978 DOI in `cites` is my match to that work. I read the full text, including Table I (OCR of the table is partly garbled, so I did not transcribe it rule by rule).

## Links

- PDF (ACM): https://dl.acm.org/doi/pdf/10.1145/320083.320099
- PDF (Internet Archive copy): https://web.archive.org/web/20240424040827/https://dl.acm.org/doi/pdf/10.1145/320083.320099
- DOI: https://doi.org/10.1145/320083.320099
