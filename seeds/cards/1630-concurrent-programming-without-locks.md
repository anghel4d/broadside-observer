---
title: "Concurrent Programming Without Locks"
authors:
  - "Keir Fraser"
  - "Tim Harris"
year: 2007
venue: "ACM Transactions on Computer Systems 25(2)"
arxiv: null
doi: "10.1145/1233307.1233309"
source: "https://timharris.uk/papers/2007-tocs.pdf"
topics:
  - lock-free
  - software-transactional-memory
  - mcas
seed_rank: 1630
seed_batch: "archive-2026-09-08"
reviewed: "2026-09-08"
pool: "systems"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Transactional Memory: Architectural Support for Lock-Free Data Structures"
    url: "https://doi.org/10.1145/165123.165164"
    year: 1993
    arxiv: null
    doi: "10.1145/165123.165164"
  - title: "Software Transactional Memory"
    url: "https://doi.org/10.1145/248052.248081"
    year: 1995
    arxiv: null
    doi: "10.1145/248052.248081"
see:
  - "036-wait-free-synchronization"
  - "377-transactional-memory-architectural-support-for-lock-free-dat"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "1493-algorithms-for-scalable-synchronization-on-shared-memory-multiprocessors"
  - "1598-queue-locks-on-cache-coherent-multiprocessors"
---

# Concurrent Programming Without Locks

## One-sentence takeaway

Fraser and Harris give a practical programmer API for non-blocking shared-memory: multi-word CAS (MCAS), a word-based STM, and a hybrid path that stays lock-free for the common case while documenting when and how to fall back — the engineering recipe behind many later lock-free libraries.

## Why it matters here

Anoptic’s lock-free ECS and queues need more than single-word CAS folklore. This TOCS paper is the readable systems bridge from Herlihy wait-free theory (036) and hardware TM (377) to APIs you can actually ship: steal MCAS + STM design notes for engine concurrency, not the experimental STM runtime numbers.

## Key ideas

- **MCAS as a building block.** Multi-word compare-and-swap is presented as the primitive that makes many lock-free structures tractable without rolling per-structure helping protocols from scratch.
- **Word-based STM.** A software transactional memory layered for ordinary mutable shared state, with clear discussion of conflict detection and opacity-style concerns as of 2007.
- **Hybrid / practical path.** The paper is explicit that pure lock-free isn’t free: it discusses when STM or locks are the right fallback and how to keep the fast path non-blocking.
- **Programmer-facing contract.** Emphasis on APIs and failure modes (not only asymptotic progress proofs) — the genre of paper you hand an engine programmer.

## Caveats

- 2007 STM performance numbers are historical; modern engines often prefer carefully designed lock-free structures or sharded mutexes over general STM. Do not remint Hazard Pointers 024, MCS 1493, Queue Locks 1598, or Herlihy 036/377.
- MCAS helping has nontrivial complexity; treat this as design literacy, not a drop-in Anoptic dependency.

## Links

- Author PDF: https://timharris.uk/papers/2007-tocs.pdf
- DOI: https://doi.org/10.1145/1233307.1233309
