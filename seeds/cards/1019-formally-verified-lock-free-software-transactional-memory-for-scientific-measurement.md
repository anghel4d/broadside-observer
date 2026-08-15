---
title: "Formally Verified Lock-Free Software Transactional Memory for Scientific Measurement"
authors: ["Kentaro Kitagawa"]
year: 2026
venue: "arXiv:cond-mat.other"
arxiv: "2608.12024"
doi: null
source: "https://arxiv.org/abs/2608.12024"
topics: [lockfree-game-parallelism, type-safety]
seed_rank: 1019
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "engines"
relevance_score: 9
lineage: lock-free
cites:
  - title: "Software Transactional Memory"
    url: "https://doi.org/10.1007/s00446-007-0030-4"
    year: 1997
    arxiv: null
    doi: "10.1007/s00446-007-0030-4"
  - title: "Transactional Memory: Architectural Support for Lock-Free Data Structures"
    url: "https://doi.org/10.1145/165123.165164"
    year: 1993
    arxiv: null
    doi: "10.1145/165123.165164"
  - title: "The Bw-Tree: A B-tree for New Hardware Platforms"
    url: "https://doi.org/10.1109/ICDE.2013.6544834"
    year: 2013
    arxiv: null
    doi: "10.1109/ICDE.2013.6544834"
  - title: "Are Lock-Free Concurrent Algorithms Practically Wait-Free?"
    url: "https://arxiv.org/abs/1311.3200"
    year: 2016
    arxiv: "1311.3200"
    doi: null
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
  - "377-transactional-memory-architectural-support-for-lock-free-dat"
---

# Formally Verified Lock-Free Software Transactional Memory for Scientific Measurement

## One-sentence takeaway

A 16-year production lock-free tree STM (KAME) gets TLA+/GenMC verification plus oldest-first livelock repair: O(1) unchanged-subtree snapshots, CAS commits, bundle/unbundle for subtree consistency, now exposed to Python and MCP agents.

## Why it matters here

Anoptic-engine is C, lock-free buses, ECS — this is the systems-variety crème of the window, not another queue paper. The access pattern matches a game/sim tree: one primary writer per node, frequent consistent subtree snapshots for GUI/scripts, no lock held across a view. Same Snapshot/Transaction API is what you’d want if ano or GRID COMMAND ever shares live world state with an LLM without stalling the sim.

## Key ideas

- Lock-free `atomic_shared_ptr` via tagged low-3-bit local refcount (no DCAS, no stolen high VA bits); still ahead of libstdc++ `atomic<shared_ptr>`.
- Tree STM: optimistic snapshot = one atomic load; commit = pointer-identity CAS on immutable PacketWrapper; bundle/unbundle four-phase protocol for subtree consistency, unbundle on child commit so unrelated instruments don’t conflict.
- Oldest-first per-linkage priority kills the legacy proportional-backoff livelock (reproduced at 128 threads on x86); no_backoff collapses; oldest-first holds ~3 M child-updates/s at T=128 on EPYC.
- TLC exhausts bounded TLA+ configs (safety + livelock-freedom under oldest-wins); GenMC checks the C11 pointer layer. MCP/pybind11 expose the same API to AI agents.

## Caveats


## Links

- arXiv: [2608.12024](https://arxiv.org/abs/2608.12024)
- PDF: https://arxiv.org/pdf/2608.12024
- Code: https://github.com/northriv/KAME
