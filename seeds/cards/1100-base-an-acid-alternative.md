---
title: "BASE: An Acid Alternative"
authors:
  - "Dan Pritchett"
year: 2008
venue: "ACM Queue"
arxiv: null
doi: "10.1145/1394127.1394128"
source: "https://doi.org/10.1145/1394127.1394128"
topics:
  - distributed-systems
  - base
  - eventual-consistency
seed_rank: 1100
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: systems-classics
cites:
  - title: "Towards Robust Distributed Systems (PODC Keynote)"
    url: "https://people.eecs.berkeley.edu/~brewer/cs262b-2004/PODC-keynote.pdf"
    year: 2000
    arxiv: null
    doi: null
    card: "1098-towards-robust-distributed-systems-podc-keynote"
  - title: "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services"
    url: "https://doi.org/10.1145/564585.564601"
    year: 2002
    arxiv: null
    doi: "10.1145/564585.564601"
    card: "1099-brewer-s-conjecture-and-the-feasibility-of-consistent-availa"
  - title: "The Transaction Concept: Virtues and Limitations"
    url: "https://www.vldb.org/conf/1981/P144.PDF"
    year: 1981
    arxiv: null
    doi: null
    card: "1096-the-transaction-concept-virtues-and-limitations"
---

# BASE: An Acid Alternative

## One-sentence takeaway

BASE (Basically Available, Soft state, Eventually consistent) names the eBay-style alternative to ACID for high-availability web data.

## Why it matters here

Practical counterweight to Gray transactions when Broadside discusses eventually-consistent game/meta services.

## Key ideas

- Availability over strict atomicity across services.
- Soft state and reconciliation patterns.
- Eventual consistency as product-acceptable semantics.
- Explicit ACID vs BASE design fork.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/1394127.1394128](https://doi.org/10.1145/1394127.1394128)
- URL: https://doi.org/10.1145/1394127.1394128
