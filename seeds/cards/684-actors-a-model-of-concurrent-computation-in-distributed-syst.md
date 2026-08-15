---
title: "Actors: A Model of Concurrent Computation in Distributed Systems"
authors:
  - "Gul Agha"
year: 1986
venue: "MIT Press"
arxiv: null
doi: "10.7551/mitpress/1086.001.0001"
source: "https://mitpress.mit.edu/9780262511414/actors/"
topics:
  - actors
  - agha
  - concurrency
  - distributed-systems
seed_rank: 684
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Viewing Control Structures as Patterns of Passing Messages"
    url: "https://doi.org/10.1016/0004-3702(77)90033-9"
    year: 1977
    arxiv: null
    doi: "10.1016/0004-3702(77)90033-9"
  - title: "A Calculus of Communicating Systems"
    url: "https://link.springer.com/book/10.1007/3-540-10235-3"
    year: 1980
    arxiv: null
    doi: null
see:
  - "683-viewing-control-structures-as-patterns-of-passing-messages"
  - "043-a-calculus-of-communicating-systems"
---

# Actors: A Model of Concurrent Computation in Distributed Systems

## One-sentence takeaway

Agha's 1986 MIT Press monograph turns Hewitt's actor vision into a model you can implement: actor semantics, fairness, and composition for distributed systems.

## Why it matters here

The book-form Actors classic — more formal and systems-facing than Hewitt 1977, the citation to put next to Erlang and CML when Anoptic needs a concurrent-object story that is not just "message passing."

## Key ideas

- An actor is defined by its acquaintances and its replacement behaviour; configuration evolution is the operational semantics.
- Fairness (every sent message is eventually received) is part of the model, not an implementation accident.
- Mobility and open systems: new actors and new addresses appear as computation proceeds, which is the distributed-systems content CCS does not give you for free.
- MIT Press 1986, DOI 10.7551/mitpress/1086.001.0001. Armstrong 2003 is the industrial reliability thesis, not this book.

## Caveats

## Links

- DOI: [10.7551/mitpress/1086.001.0001](https://doi.org/10.7551/mitpress/1086.001.0001)
- MIT Press: https://mitpress.mit.edu/9780262511414/actors/
