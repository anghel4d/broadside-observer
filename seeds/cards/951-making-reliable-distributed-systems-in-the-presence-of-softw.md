---
title: "Making Reliable Distributed Systems in the Presence of Software Errors"
authors:
  - "Joe Armstrong"
year: 2003
venue: "PhD thesis, KTH Stockholm"
arxiv: null
doi: null
source: "https://erlang.org/download/armstrong_thesis_2003.pdf"
topics:
  - erlang
  - armstrong
  - actors
  - fault-tolerance
  - distributed-systems
seed_rank: 951
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
  - title: "Actors: A Model of Concurrent Computation in Distributed Systems"
    url: "https://mitpress.mit.edu/9780262511414/actors/"
    year: 1986
    arxiv: null
    doi: "10.7551/mitpress/1086.001.0001"
  - title: "Concurrent Programming in ML"
    url: "https://doi.org/10.1017/CBO9780511574962"
    year: 1999
    arxiv: null
    doi: "10.1017/CBO9780511574962"
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359585"
see:
  - "934-viewing-control-structures-as-patterns-of-passing-messages"
  - "935-actors-a-model-of-concurrent-computation-in-distributed-syst"
  - "950-concurrent-programming-in-ml"
  - "047-communicating-sequential-processes"
---

# Making Reliable Distributed Systems in the Presence of Software Errors

## One-sentence takeaway

Armstrong's Erlang thesis: let-it-crash supervision and lightweight processes for reliable distributed systems.

## Why it matters here

Erlang's founding thesis — practical actor-style reliability that Anoptic networking/sim stacks can steal from.

## Key ideas

- Isolation + supervision trees.
- Lightweight processes and message passing.
- Fail fast; recover from known process boundaries.
- Industrial descendant of Actors thinking.

## Caveats

- Seed card from the wisdom-of-the-perfects PL haul; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI pagination against your preferred edition before formal citation.

## Links

- URL: https://erlang.org/download/armstrong_thesis_2003.pdf
