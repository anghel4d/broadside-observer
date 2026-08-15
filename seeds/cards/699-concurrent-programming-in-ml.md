---
title: "Concurrent Programming in ML"
authors:
  - "John H. Reppy"
year: 1999
venue: "Cambridge University Press"
arxiv: null
doi: "10.1017/CBO9780511574962"
source: "https://doi.org/10.1017/CBO9780511574962"
topics:
  - concurrent-ml
  - reppy
  - events
  - sml
  - concurrency
seed_rank: 699
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Definition of Standard ML (Revised)"
    url: "https://mitpress.mit.edu/9780262631815/the-definition-of-standard-ml/"
    year: 1997
    arxiv: null
    doi: null
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359585"
see:
  - "137-the-definition-of-standard-ml-revised"
  - "046-communicating-sequential-processes"
---

# Concurrent Programming in ML

## One-sentence takeaway

Reppy's Concurrent ML makes synchronous events first-class values: `choose`, `wrap`, and `guard` compose protocols the way ordinary ML functions compose data.

## Why it matters here

CML is the typed concurrent-language classic — event combinators still sit under modern `select`/`join` APIs, and they are what you want if ano grows typed rendezvous rather than raw actor mailboxes.

## Key ideas

- An event is a value describing a potential synchronization; `sync` performs it. `choose` is nondeterministic alternative, `wrap` post-composes a function, `guard` computes the event at sync time.
- Channels, threads, and timeouts are ordinary libraries on top of that interface; the book then builds a parallel build system, a window manager, and distributed tuple spaces.
- Implemented in the SML/NJ lineage; a chapter covers implementing concurrency on SML/NJ's first-class continuations.
- CUP 1999, DOI 10.1017/CBO9780511574962. Process calculi are the theory; this is the ML you write.

## Caveats

## Links

- DOI: [10.1017/CBO9780511574962](https://doi.org/10.1017/CBO9780511574962)
