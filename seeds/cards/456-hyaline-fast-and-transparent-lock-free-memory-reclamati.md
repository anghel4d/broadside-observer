---

title: "Hyaline: Fast and Transparent Lock-Free Memory Reclamation"
authors:
  - "Ruslan Nikolaev"
  - "Binoy Ravindran"
year: 2019
venue: "PODC (brief); full PLDI 2021"
arxiv: "1905.07903"
doi: "10.1145/3293611.3331575"
source: "https://arxiv.org/abs/1905.07903"
topics:
  - reclamation
  - lockfree
seed_rank: 456
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Epoch-Based Reclamation / Practical lock-freedom"
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
  - title: "Crystalline: Fast and Memory Efficient Wait-Free Reclamation"
    url: "https://arxiv.org/abs/2104.01142"
    year: 2021
    arxiv: "2104.01142"
    doi: null
see:
  - "293-epoch-based-reclamation-practical-lock-freedom"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "245-crystalline-fast-and-memory-efficient-wait-free-reclamation"
---
# Hyaline: Fast and Transparent Lock-Free Memory Reclamation

## One-sentence takeaway

Reference-counting only in the reclamation phase: EBR-like speed with better robustness than classical epochs.

## Why it matters here

Bridges toward Crystalline/Universal wait-free SMR while staying deployable for engine-side concurrent maps.

## Key ideas

- Avoid per-read refcount traffic; count during reclaim.
- Robust variants bound memory with stalled threads.
- Supports dynamically changing thread counts.
- Full paper develops snapshot-free transparent schemes (PLDI 2021).

## Caveats

- Some variants want LL/SC or wide CAS.
- Family members differ — read the full paper before shipping.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/3293611.3331575](https://doi.org/10.1145/3293611.3331575)
- URL: https://arxiv.org/abs/1905.07903
- arXiv: [1905.07903](https://arxiv.org/abs/1905.07903)
