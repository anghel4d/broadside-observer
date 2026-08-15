---
title: "Efficient and Robust Lock-Free Multi-Word Compare-and-Swap via Contention-Aware Helping"
authors:
  - "Motoki Unno"
  - "Kento Sugiura"
  - "Yoshiharu Ishikawa"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2607.06034"
doi: null
source: "https://arxiv.org/abs/2607.06034"
topics:
  - lockfree-game-parallelism
seed_rank: 925
seed_batch: "craft-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "A Practical Multi-Word Compare-and-Swap Operation"
    url: "https://doi.org/10.1007/3-540-45706-2_19"
    year: 2002
    arxiv: null
    doi: "10.1007/3-540-45706-2_19"
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
see:
  - "364-a-practical-multi-word-compare-and-swap-operation"
  - "031-michael-scott-lock-free-queue"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Efficient and Robust Lock-Free Multi-Word Compare-and-Swap via Contention-Aware Helping

## One-sentence takeaway

Lock-free MCAS whose helping is *contention-aware*: less cache-invalidation storms under load than classic Harris–Fraser–Pratt-style always-help designs.

## Why it matters here

Anoptic will keep hitting “I need to swing two pointers / a packed header and a tail” on buses and ECS structural changes. Single-word CAS makes those algorithms ugly; always-help MCAS makes them slow when many threads collide. Contention-aware helping is the recipe to actually *ship* MCAS for rare multi-word updates (archetype moves, bus cursor pairs) without turning the common case into a helping thundering herd.

## Key ideas

- MCAS as the practical primitive for atomically updating several discrete locations without a lock.
- Diagnoses classic lock-free MCAS helping as a cache-invalidation amplifier under high contention.
- Contention-aware helping: help less, help smarter, keep lock-freedom.
- Aimed at in-memory structures (DB/DC), not at a new hardware CAS2.
- 2026 preprint (IEICE submission); treat algorithm details as living until the journal version lands.

## Caveats


## Links

- arXiv: [2607.06034](https://arxiv.org/abs/2607.06034)
- PDF: https://arxiv.org/pdf/2607.06034
