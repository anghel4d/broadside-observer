---
title: "Towards Robust Distributed Systems (PODC Keynote)"
authors:
  - "Eric A. Brewer"
year: 2000
venue: "PODC"
arxiv: null
doi: null
source: "https://people.eecs.berkeley.edu/~brewer/cs262b-2004/PODC-keynote.pdf"
topics:
  - distributed-systems
  - cap
  - brewer
seed_rank: 1098
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: systems-classics
cites:
  - title: "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services"
    url: "https://doi.org/10.1145/564585.564601"
    year: 2002
    arxiv: null
    doi: "10.1145/564585.564601"
    card: "1099-brewer-s-conjecture-and-the-feasibility-of-consistent-availa"
  - title: "BASE: An Acid Alternative"
    url: "https://doi.org/10.1145/1394127.1394128"
    year: 2008
    arxiv: null
    doi: "10.1145/1394127.1394128"
    card: "1100-base-an-acid-alternative"
---

# Towards Robust Distributed Systems (PODC Keynote)

## One-sentence takeaway

Brewer's CAP conjecture: under partition, a system must trade consistency against availability—the slogan that shaped web-scale stores.

## Why it matters here

Forces explicit consistency/availability choices in any Broadside networked sim or service design.

## Key ideas

- Consistency / Availability / Partition tolerance triad.
- Forfeiture under partition as design choice.
- Motivates BASE and tunable consistency practice.
- Later formalized by Gilbert & Lynch.

## Caveats

- Keynote/conjecture card—pair with Gilbert–Lynch for the theorem statement.

## Links

- URL: https://people.eecs.berkeley.edu/~brewer/cs262b-2004/PODC-keynote.pdf
