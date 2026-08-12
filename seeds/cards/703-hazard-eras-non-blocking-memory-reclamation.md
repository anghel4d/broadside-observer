---

title: "Hazard Eras: Non-Blocking Memory Reclamation"
authors:
  - "Pedro Ramalhete"
  - "Andreia Correia"
year: 2017
venue: "SPAA"
arxiv: null
doi: "10.1145/3087556.3087588"
source: "https://doi.org/10.1145/3087556.3087588"
topics:
  - reclamation
  - lockfree
  - hazard-pointers
seed_rank: 703
seed_batch: "lineage-shallow-2026-08-13"
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
    card: "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - title: "Epoch-Based Reclamation / Practical lock-freedom"
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
    year: 2004
    arxiv: null
    doi: null
    card: "369-epoch-based-reclamation-practical-lock-freedom"
  - title: "Interval-Based Memory Reclamation"
    url: "https://doi.org/10.1145/3178487.3178488"
    year: 2018
    arxiv: null
    doi: "10.1145/3178487.3178488"
    card: "402-interval-based-memory-reclamation"
---
# Hazard Eras: Non-Blocking Memory Reclamation

## One-sentence takeaway

HP-shaped API that reserves eras instead of pointers, often cutting fence traffic on traversals.

## Why it matters here

Anoptic lock-free structures that walk lists/trees pay HP fence costs; Hazard Eras is the practical hybrid before IBR/Hyaline.

## Key ideas

- Readers publish monotonically increasing eras.
- Same progress conditions as hazard pointers when used carefully.
- Strong on read-heavy traversals.
- Implementable with C11/C++11 atomics.

## Caveats

- Unreclaimed memory still bounded by reserved eras.
- Not always faster than HP for queue-like patterns.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/3087556.3087588](https://doi.org/10.1145/3087556.3087588)
- URL: https://doi.org/10.1145/3087556.3087588
- https://github.com/pramalhe/ConcurrencyFreaks/blob/master/papers/hazarderas-2017.pdf
