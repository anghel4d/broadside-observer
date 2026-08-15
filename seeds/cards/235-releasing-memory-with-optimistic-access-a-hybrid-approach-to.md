---
title: "Releasing Memory with Optimistic Access: A Hybrid Approach to Memory Reclamation and Allocation in Lock-Free Programs"
authors:
  - "Pedro Moreno"
  - "Ricardo Rocha"
year: 2023
venue: "arXiv:cs.DC"
arxiv: "2302.06520"
doi: null
source: "https://arxiv.org/abs/2302.06520"
topics:
  - memory-allocation
  - lockfree
seed_rank: 235
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
  - title: "Practical lock-freedom"
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "Interval-Based Memory Reclamation"
    url: "https://doi.org/10.1145/3178487.3178488"
    year: 2018
    arxiv: null
    doi: "10.1145/3178487.3178488"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "293-epoch-based-reclamation-practical-lock-freedom"
  - "323-interval-based-memory-reclamation"
---

# Releasing Memory with Optimistic Access: A Hybrid Approach to Memory Reclamation and Allocation in Lock-Free Programs

## One-sentence takeaway

LRMalloc is extended so Optimistic Access can actually return pages to the OS: OA is allowed to read reclaimed memory, and the allocator plus virtual memory make that safe and reusable.

## Why it matters here

Anoptic lock-free structures want OA's speed without a private recycling arena that never gives memory back; tying reclamation to the process allocator is the missing piece.

## Key ideas

- Optimistic Access has the progress/memory-bound properties people want, but it reads nodes after they are retired, which a normal malloc/free model forbids.
- That incompatibility forced a complex in-allocator recycling loop that never released memory to the rest of the process.
- Teaching LRMalloc about OA simplifies the reclaimer and lets other subsystems reuse the same pages.
- Virtual-memory tricks then let truly idle pages go back to the operating system.
- Hybrid claim: reclamation and allocation have to be designed together once you allow post-reclaim reads.

## Caveats

## Links

- arXiv: [2302.06520](https://arxiv.org/abs/2302.06520)
- PDF: https://arxiv.org/pdf/2302.06520
