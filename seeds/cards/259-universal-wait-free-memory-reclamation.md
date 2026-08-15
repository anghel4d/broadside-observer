---
title: "Universal Wait-Free Memory Reclamation"
authors:
  - "Ruslan Nikolaev"
  - "Binoy Ravindran"
year: 2020
venue: "PPoPP 2020 / arXiv cs.DC"
arxiv: "2001.01999"
doi: "10.1145/3332466.3374540"
source: "https://arxiv.org/abs/2001.01999"
topics:
  - memory-allocation
  - lockfree
seed_rank: 259
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
  - title: "Hyaline: Fast and Transparent Lock-Free Memory Reclamation"
    url: "https://arxiv.org/abs/1905.07903"
    year: 2019
    arxiv: "1905.07903"
    doi: null
  - title: "Crystalline: Fast and Memory Efficient Wait-Free Reclamation"
    url: "https://arxiv.org/abs/2104.01142"
    year: 2021
    arxiv: "2104.01142"
    doi: null
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "456-hyaline-fast-and-transparent-lock-free-memory-reclamati"
  - "245-crystalline-fast-and-memory-efficient-wait-free-reclamation"
---

# Universal Wait-Free Memory Reclamation

## One-sentence takeaway

Wait-Free Eras (WFE) lifts lock-free Hazard Eras to a universal wait-free reclaimer so a wait-free data structure no longer has to marry lock-free hazard pointers or blocking epochs.

## Why it matters here

If ano queues and ECS storages advertise wait-freedom, the reclaimer cannot be the thing that blocks. WFE is the "keep the progress guarantee all the way to free()" design, with a Hazard-Pointers-shaped API.

## Key ideas

- Prior wait-free reclaimers were structure-specific; WFE is universal — any wait-free object can use it.
- Extends Ramalhete and Correia's Hazard Eras rather than classic hazard pointers or EBR, because those two cannot be made wait-free in general.
- Implementable with the atomics on x86-64 and AArch64; API is mostly drop-in for hazard-pointer code.
- Throughput sits near epoch-based reclamation and original Hazard Eras while restoring wait-freedom.
- PPoPP 2020 paper; arXiv:2001.01999.

## Caveats

## Links

- arXiv: [2001.01999](https://arxiv.org/abs/2001.01999)
- DOI: [10.1145/3332466.3374540](https://doi.org/10.1145/3332466.3374540)
- PDF: https://arxiv.org/pdf/2001.01999
