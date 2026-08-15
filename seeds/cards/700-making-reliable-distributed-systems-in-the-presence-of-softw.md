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
seed_rank: 700
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
see:
  - "683-viewing-control-structures-as-patterns-of-passing-messages"
  - "684-actors-a-model-of-concurrent-computation-in-distributed-syst"
---

# Making Reliable Distributed Systems in the Presence of Software Errors

## One-sentence takeaway

Armstrong's KTH thesis assumes the program contains bugs and shows how Erlang plus OTP — isolated lightweight processes, links, and supervision trees — still yields a reliable system.

## Why it matters here

Erlang's founding thesis is the practical actor-style reliability Anoptic networking and GRID COMMAND sim stacks can steal: fail fast at a process boundary, restart from a known supervisor, do not share memory.

## Key ideas

- Concurrency-oriented programming: isolated processes, no shared data, asynchronous messages, and a name for every process; the language meets some requirements, OTP libraries the rest.
- Let-it-crash: a process that hits an unexpected state dies; a linked supervisor decides restart strategy. Corrected vs uncorrected errors are distinguished.
- Evidence is industrial: Ericsson AXD301 (over a million lines of Erlang) is the reliability case study, not a microbenchmark.
- KTH / SICS dissertation, December 2003 (final with corrections 20 November 2003), TRITA-IMIT-LECS AVH 03:09. PDF on erlang.org.

## Caveats

## Links

- PDF: https://erlang.org/download/armstrong_thesis_2003.pdf
