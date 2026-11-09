---
title: "Nothing Is Shared Until You Synchronise: Reinterpreting Java for Data-Race Freedom"
authors:
  - "Luke Cheeseman"
  - "Elias Castegren"
  - "David Black-Schaffer"
  - "Erik Österlund"
  - "Tobias Wrigstad"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.09410"
doi: null
source: "https://arxiv.org/abs/2611.09410"
topics:
  - "lockfree-game-parallelism"
  - "embedded-scripting-dsls"
seed_rank: 2535
seed_batch: "craft-2026-11-09"
reviewed: "2026-11-09"
pool: "languages"
relevance_score: 8
lineage: programming-language-foundations
cites:
  - title: "Nothing Is Shared Until You Synchronise: Reinterpreting Java for Data-Race Freedom"
    url: "https://arxiv.org/abs/2611.09410"
    year: 2026
    arxiv: "2611.09410"
    doi: null
see: ["1139-foundations-of-the-c-concurrency-memory-model", "1857-can-seqlocks-get-along-with-programming-language-memory-models"]
---

# Nothing Is Shared Until You Synchronise: Reinterpreting Java for Data-Race Freedom

## One-sentence takeaway

Sync-as-Share is a memory model where each thread works on a private view of memory and only synchronisation actions push and pull updates, so data races are impossible by construction and conflicting writes are detected at sync points; correctly synchronised Java programs behave identically, and the model is mechanised in Rocq.

## Why it matters here

This is the semantics ano's tick model already wants: systems read and write their own view, and the end-of-phase barrier is where changes are published and conflicts are caught. The paper gives that design a name, a formal model (version-controlled memory) and a proof that it agrees with the Java memory model for well-synchronised programs. It is a clean argument for making "who sees what, when" an explicit language decision in ano rather than inheriting C11 shared memory (card 1139).

## Key ideas

- **Isolation first.** Start from fully isolated threads, then reinterpret existing synchronisation (locks, volatiles and so on) as the only points of communication.
- **Conflicts, not races.** Since nothing is communicated between sync actions, conflicting updates show up as detectable conflicts at synchronisation rather than as silent races.
- **Design space exposed.** Treating sync as communication forces choices about what to send, to whom, and what counts as a conflict; the paper proposes two communication topologies with different trade-offs.
- **Formal backing.** Formalised as version-controlled memory and mechanised in Rocq, with an equivalence result for programs that are correctly synchronised under the JMM.

## Caveats

I read only the abstract (paper is 30 pages). Runtime cost of private views and conflict detection is not stated in the abstract, so whether it is practical outside a research VM is open. Java-specific instantiation; mapping to a C23 runtime is our own step.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.09410
- PDF: https://arxiv.org/pdf/2611.09410
