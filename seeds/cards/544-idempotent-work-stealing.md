---
title: "Idempotent Work Stealing"
authors:
  - "Maged M. Michael"
  - "Martin T. Vechev"
  - "Vijay A. Saraswat"
year: 2009
venue: "PPoPP"
arxiv: null
doi: "10.1145/1504176.1504186"
source: "https://doi.org/10.1145/1504176.1504186"
topics:
  - work-stealing-schedulers
  - lockfree
  - idempotent
seed_rank: 544
seed_batch: "lineage-work-stealing-schedulers-schedulers-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: work-stealing-schedulers
cites:
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
    card: "367-dynamic-circular-work-stealing-deque"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
    card: "381-the-implementation-of-the-cilk-5-multithreaded-language"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
    card: "257-scheduling-multithreaded-computations-by-work-stealing"
---

# Idempotent Work Stealing

## One-sentence takeaway

Relax exactly-once extraction to at-least-once to remove atomics/fences from the owner's critical path.

## Why it matters here

Shows when Anoptic tasks are naturally idempotent (retry-safe graph work, rebuild passes), you can drop the expensive owner-side CAS/fence that Chase–Lev still pays.

## Key ideas

- Conventional steals guarantee exactly-once extraction; many apps only need at-least-once.
- Idempotent algorithms avoid store-load fences / atomics on owner push/take.
- Compared against THE (Cilk) and Chase–Lev; LIFO idempotent variant often wins.
- Trade correctness obligation to the client (dedup or tolerate repeats) for lower local latency.

## Caveats

- Seed card from lineage epistemology pass; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/1504176.1504186](https://doi.org/10.1145/1504176.1504186)
- URL: https://doi.org/10.1145/1504176.1504186
