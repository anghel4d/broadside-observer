---

title: "Universal Wait-Free Memory Reclamation"
authors:
  - "Ruslan Nikolaev"
  - "Binoy Ravindran"
year: 2020
venue: "arXiv:cs.DC"
arxiv: "2001.01999"
doi: "10.1145/3332466.3374540"
source: "https://arxiv.org/abs/2001.01999"
topics:
  - memory-allocation
  - lockfree
seed_rank: 333
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
    card: "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - title: "Hyaline: Fast and Transparent Lock-Free Memory Reclamation"
    url: "https://arxiv.org/abs/1905.07903"
    year: 2019
    arxiv: "1905.07903"
    doi: null
    card: "704-hyaline-fast-and-transparent-lock-free-memory-reclamati"
  - title: "Crystalline: Fast and Memory Efficient Wait-Free Reclamation"
    url: "https://arxiv.org/abs/2104.01142"
    year: 2021
    arxiv: "2104.01142"
    doi: null
    card: "315-crystalline-fast-and-memory-efficient-wait-free-reclamation"
---

# Universal Wait-Free Memory Reclamation

## One-sentence takeaway

In this paper, we present a universal memory reclamation scheme, Wait-Free Eras (WFE), for deleted memory blocks in wait-free concurrent data structures.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Universal Wait-Free Memory Reclamation).

## Key ideas

- In this paper, we present a universal memory reclamation scheme, Wait-Free Eras (WFE), for deleted memory blocks in wait-free concurrent data structures.
- WFE's key innovation is that it is completely wait-free.
- Although some prior techniques provide similar guarantees for certain data structures, they lack support for arbitrary wait-free data structures.
- Consequently, developers are typically forced to marry their wait-free data structures with lock-free Hazard Pointers or (potentially blocking) epoch-based memory reclamation.
- Since both these schemes provide weaker progress guarantees, they essentially forfeit the strong progress guarantee of wait-free data structures.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2001.01999](https://arxiv.org/abs/2001.01999)
- DOI: [10.1145/3332466.3374540](https://doi.org/10.1145/3332466.3374540)
- URL: https://arxiv.org/abs/2001.01999
