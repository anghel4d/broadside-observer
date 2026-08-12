---
title: "Cilk: An Efficient Multithreaded Runtime System"
authors:
  - "Robert D. Blumofe"
  - "Christopher F. Joerg"
  - "Bradley C. Kuszmaul"
  - "Charles E. Leiserson"
  - "Keith H. Randall"
  - "Yuli Zhou"
year: 1995
venue: "PPoPP"
arxiv: null
doi: "10.1145/209936.209958"
source: "https://doi.org/10.1145/209936.209958"
topics:
  - work-stealing
  - cilk
  - scheduling
seed_rank: 541
seed_batch: "lineage-work-stealing-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 10
lineage: work-stealing
cites:
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
    card: "257-scheduling-multithreaded-computations-by-work-stealing"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
    card: "381-the-implementation-of-the-cilk-5-multithreaded-language"
  - title: "Thread Scheduling for Multiprogrammed Multiprocessors"
    url: "https://doi.org/10.1145/277651.277678"
    year: 1998
    doi: "10.1145/277651.277678"
    card: "542-thread-scheduling-for-multiprogrammed-multiprocessors"
---

# Cilk: An Efficient Multithreaded Runtime System

## One-sentence takeaway

First production Cilk runtime: randomized work stealing with work/span performance model.

## Why it matters here

The living ancestor of every continuation-stealing job system Anoptic/ano might mirror—proves that thieves stealing oldest ready work keeps space and communication near-optimal.

## Key ideas

- Idle workers steal the shallowest ready thread from a random victim (randomized work stealing).
- Programmer-facing performance model: T_P ≈ T_1/P + O(T_∞) for fully strict computations.
- Space and communication bounds within a constant factor of optimal for fully strict programs.
- Deployed on CM-5, Paragon, SGI Power Challenge; applications include *Socrates chess.

## Caveats

- Seed card from lineage epistemology pass; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/209936.209958](https://doi.org/10.1145/209936.209958)
- URL: https://doi.org/10.1145/209936.209958
