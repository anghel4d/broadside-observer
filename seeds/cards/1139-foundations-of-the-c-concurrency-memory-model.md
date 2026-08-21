---
title: "Foundations of the C++ Concurrency Memory Model"
authors:
  - "Hans-J. Boehm"
  - "Sarita V. Adve"
year: 2008
venue: "PLDI"
arxiv: null
doi: "10.1145/1375581.1375591"
source: "https://doi.org/10.1145/1375581.1375591"
topics:
  - "memory-model"
  - "data-race-freedom"
  - "sequential-consistency"
  - "lock-free"
seed_rank: 1139
seed_batch: "archive-2026-08-22"
reviewed: "2026-08-22"
pool: "systems"
relevance_score: 10
lineage: cpp-memory-model
cites:
  - title: "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs"
    url: "https://doi.org/10.1109/TC.1979.1675439"
    year: 1979
    arxiv: null
    doi: "10.1109/TC.1979.1675439"
  - title: "A Better x86 Memory Model: x86-TSO"
    url: "https://doi.org/10.1007/978-3-642-03359-9_27"
    year: 2010
    arxiv: null
    doi: "10.1007/978-3-642-03359-9_27"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Release Consistency versus Sequential Consistency"
    url: "https://doi.org/10.1145/103727.103729"
    year: 1990
    arxiv: null
    doi: null
see:
  - "472-how-to-make-a-multiprocessor-computer-that-correctly-execute"
  - "485-a-better-x86-memory-model-x86-tso"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "414-release-consistency-versus-sequential-consistency"
  - "031-michael-scott-lock-free-queue"
---

# Foundations of the C++ Concurrency Memory Model

## One-sentence takeaway

DRF-SC for C++: race-free programs are sequentially consistent; data races have *no* semantics; there are no benign C++ races — that is the model every lock-free queue in this library is now judged against.

## Why it matters here

The library has x86-TSO (485), Lamport SC (472), linearizability (203), and a shelf of lock-free queues (031…). Missing was the *language* contract those papers compile to. Boehm–Adve 2008 is the C++11 memory model in eight PLDI pages: sequential consistency for data-race-free programs, undefined behaviour on a race (so compilers may not invent writes), and a deliberately *weaker* `trylock` so the race definition stays the one programmers actually use. Anoptic atomics, job-system handoff, and "is this a data race?" reviews steal this paper, not the Java model and not a hardware axiomatisation.

## Key ideas

- Data-race-free-0: if every sequentially consistent execution is race-free, the implementation must appear sequentially consistent. Racy programs are undefined — no "benign race" loophole, unlike Java.
- Compilers must not invent stores (speculative writes that would race in some execution). That constraint is why the Java model got so hard, and why C++ just says UB.
- `trylock` is allowed to fail spuriously in a way that keeps the simple race definition and still yields SC for race-free programs.
- The paper is a design rationale for the C++ standard, not a new hardware model. x86-TSO (485) is what the chip does; this is what the programmer may assume.

## Caveats

- `memory_order_relaxed` / acquire-release are the *escape hatches* standardised later; this paper is the SC-for-DRF core and the no-benign-race decision.
- UB-on-race is a compiler-writer gift and a sanitizer necessity. It is not a debugging model — you need TSan, not a racy operational semantics.
- Java's model (Manson–Pugh–Adve 2005) is the sibling that tried to give races a meaning. Do not mix the two when reviewing C++.

## Links

- DOI: [10.1145/1375581.1375591](https://doi.org/10.1145/1375581.1375591)
- Author PDF: [http://rsim.cs.uiuc.edu/Pubs/08PLDI.pdf](http://rsim.cs.uiuc.edu/Pubs/08PLDI.pdf)
- Course reprint: [https://www.cs.toronto.edu/~pekhimenko/courses/csc2231-f17/Papers/C++Consistency.pdf](https://www.cs.toronto.edu/~pekhimenko/courses/csc2231-f17/Papers/C++Consistency.pdf)
