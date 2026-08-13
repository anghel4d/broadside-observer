---
title: "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services"
authors:
  - "Seth Gilbert"
  - "Nancy Lynch"
year: 2002
venue: "ACM SIGACT News"
arxiv: null
doi: "10.1145/564585.564601"
source: "https://doi.org/10.1145/564585.564601"
topics:
  - distributed-systems
  - cap
  - impossibility
seed_rank: 1099
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "Towards Robust Distributed Systems (PODC Keynote)"
    url: "https://people.eecs.berkeley.edu/~brewer/cs262b-2004/PODC-keynote.pdf"
    year: 2000
    arxiv: null
    doi: null
    card: "1098-towards-robust-distributed-systems-podc-keynote"
  - title: "BASE: An Acid Alternative"
    url: "https://doi.org/10.1145/1394127.1394128"
    year: 2008
    arxiv: null
    doi: "10.1145/1394127.1394128"
    card: "1100-base-an-acid-alternative"
  - title: "Time, Clocks, and the Ordering of Events in a Distributed System"
    url: "https://doi.org/10.1145/359545.359563"
    year: 1978
    arxiv: null
    doi: "10.1145/359545.359563"
    card: "1060-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
---

# Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services

## One-sentence takeaway

Gilbert–Lynch formalize CAP: in an asynchronous network, no atomic read/write object can guarantee availability and linearizability under partition.

## Why it matters here

The theorem behind the slogan—use when arguing what a partitioned GRID node can still promise.

## Key ideas

- Formal asynchronous model with message loss/partition.
- Impossibility of atomic C+A under P.
- Clarifies what consistency means in the CAP debate.
- Anchor for later PACELC and tunable-consistency work.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/564585.564601](https://doi.org/10.1145/564585.564601)
- URL: https://doi.org/10.1145/564585.564601
