---
title: "The Scalable Commutativity Rule: Designing Scalable Software for Multicore Processors"
authors:
  - "Austin T. Clements"
  - "M. Frans Kaashoek"
  - "Nickolai Zeldovich"
  - "Robert T. Morris"
  - "Eddie Kohler"
year: 2013
venue: "SOSP 2013"
arxiv: null
doi: "10.1145/2517349.2522712"
source: "https://pdos.csail.mit.edu/papers/commutativity:sosp13.pdf"
version_reviewed: "SOSP 2013 author PDF"
topics:
  - "commutativity"
  - "multicore-scalability"
  - "interface-design"
  - "conflict-free-access"
  - "cache-coherence"
  - "posix"
seed_rank: 2678
seed_batch: "archive-2026-11-22"
reviewed: "2026-11-22"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
see:
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "1493-algorithms-for-scalable-synchronization-on-shared-memory-multiprocessors"
cites:
  - title: "The Scalable Commutativity Rule: Designing Scalable Software for Multicore Processors"
    url: "https://doi.org/10.1145/2517349.2522712"
    year: 2013
    arxiv: null
    doi: "10.1145/2517349.2522712"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Algorithms for Scalable Synchronization on Shared-Memory Multiprocessors"
    url: "https://doi.org/10.1145/103727.103729"
    year: 1991
    arxiv: null
    doi: "10.1145/103727.103729"
---

# The Scalable Commutativity Rule: Designing Scalable Software for Multicore Processors

## One-sentence takeaway

Whenever interface operations commute (no caller can tell their order apart through the interface), there exists an implementation whose memory accesses are conflict-free for those operations, so scalability can be designed at the interface; COMMUTER turns this into generated tests, and an OS built to the rule (sv6) is conflict-free on 99% of 13,664 POSIX tests vs 68% for Linux.

## Why it matters here

This is the design rule for ano's command layer and Anoptic's buses. If two commands commute, they can run on different cores without sharing cache lines. So the language should make commuting commands the default and make order-revealing ones explicit. Concretely: `spawn` should return *any* free entity id, not the lowest one (POSIX's lowest-FD rule is their main example of a scalability killer); expose per-field queries instead of whole-row snapshots (their `stat` → `fstatx` change); let releases take effect asynchronously (deferred despawn, like their munmap/TLB argument); and do not promise ordering on channels that do not need it. The same test tells an agent harness which tool calls can safely run in parallel.

## Key ideas

- **Model.** Assume MESI-like coherence. Operations scale if they are *conflict-free*: no core writes a cache line that another core read or wrote. Commutativity has long been used to reason about *safety* (e.g., commutativity-based concurrency control). Here it is used for *scalability*.
- **SIM commutativity.** Commutativity is defined relative to a state, the arguments, and the concurrent set of operations (State-dependent), is judged only by what the interface can observe (Interface-based), and also commutes for prefixes of the reordered region (Monotonic), so operations never have to remember their order in case later operations break commutativity. This makes the rule apply to stateful APIs like POSIX, where almost nothing commutes unconditionally. The proof builds an impractical replaying implementation for each commutative region. Real implementations scale over whole classes of states.
- **Interface guidelines.** Decompose compound operations (fork+exec → posix_spawn; stat returns too many fields). Embrace specification non-determinism (any unused FD, like mmap's any address). Permit weak ordering (unordered local datagram sockets). Release resources asynchronously (lazy SIGPIPE, lazy munmap).
- **COMMUTER.** ANALYZER symbolically executes a Python model of the interface to find commutativity conditions. TESTGEN produces concrete test cases. MTRACE checks the real kernel for shared cache lines. On 18 POSIX file-system and VM calls it generated 13,664 tests: Linux was conflict-free on 9,389 and sv6 (RadixVM + ScaleFS, using RCU, Refcache and seqlocks) on 13,528.
- **Costs are real.** With an O_ANYFD flag (per-core FD partitions) openbench scales linearly, and at one core sv6's open is 27% faster than Linux's. But keeping st_nlink correct with Refcache makes fstat 3.9× more expensive than Linux at 80 cores. The commutative fstatx avoids that cost unless link counts are requested.

## Caveats

The rule is one-directional: commutativity is enough for conflict-free access, but not necessary for it. And conflict-free does not guarantee scaling if, for example, the memory bus saturates. sv6 is a research kernel that omits things like permission checks. The cache model is an approximation, and the existence proof gives no practical implementation. 2013 is recent for Archive, but it collects older commutativity ideas into a design rule.

## Links

- Author PDF (MIT PDOS): https://pdos.csail.mit.edu/papers/commutativity:sosp13.pdf
- Mirror (Harvard): https://read.seas.harvard.edu/~kohler/pubs/clements13scalable.pdf
- DOI: https://doi.org/10.1145/2517349.2522712
