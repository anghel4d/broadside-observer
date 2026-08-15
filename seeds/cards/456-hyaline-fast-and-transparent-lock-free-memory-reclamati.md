---
title: "Hyaline: Fast and Transparent Lock-Free Memory Reclamation"
authors:
  - "Ruslan Nikolaev"
  - "Binoy Ravindran"
year: 2021
venue: "PLDI"
arxiv: "1905.07903"
doi: "10.1145/3453483.3454090"
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
  - title: "Practical Lock-Freedom"
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
    year: 2004
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    doi: "10.1109/TPDS.2004.8"
  - title: "Hazard Eras: Non-Blocking Memory Reclamation"
    url: "https://doi.org/10.1145/3087556.3087588"
    year: 2017
    doi: "10.1145/3087556.3087588"
see:
  - "293-epoch-based-reclamation-practical-lock-freedom"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "455-hazard-eras-non-blocking-memory-reclamation"
---

# Hyaline: Fast and Transparent Lock-Free Memory Reclamation

## One-sentence takeaway

Hyaline uses reference counts only while reclaiming, not on every object access, so any thread can free a retired node and the scheme can match EBR speed with HP-like memory bounds.

## Why it matters here

Engine-side concurrent maps want EBR's enter/leave API without stalled-thread leaks; Hyaline-S plus birth eras is the deployable step toward Crystalline-style wait-free SMR.

## Key ideas

- Readers call enter/leave around a data-structure operation; retired nodes hang on shared lists whose special counters track how many still-active threads can see them.
- Because an arbitrary thread may drop a node's last reclaim-phase count, writer-heavy and read-dominated mixes share free work instead of stranding retire lists on the mutator.
- Hyaline-S adopts HE/IBR birth eras plus a deref wrapper so stalled threads only pin older objects; slot count can grow to keep the scheme robust.
- General algorithm wants LL/SC or double-width CAS (pointer+counter); Hyaline-1 is a single-width-CAS specialization. Measured ~10% over EBR on bonsai and up to 2× when oversubscribed.

## Caveats

## Links

- arXiv: [1905.07903](https://arxiv.org/abs/1905.07903)
- DOI: [10.1145/3453483.3454090](https://doi.org/10.1145/3453483.3454090)
