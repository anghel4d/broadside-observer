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
seed_rank: 455
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    doi: "10.1109/TPDS.2004.8"
  - title: "Practical Lock-Freedom"
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
    year: 2004
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "293-epoch-based-reclamation-practical-lock-freedom"
---

# Hazard Eras: Non-Blocking Memory Reclamation

## One-sentence takeaway

Hazard Eras keep the hazard-pointer API but publish monotonically increasing eras instead of raw pointers, so a traversal can protect a whole interval of births/retirements with far fewer stores and fences.

## Why it matters here

Anoptic lock-free maps and ECS lookups pay HP fence costs on every hop; eras are the practical hybrid before IBR/Hyaline when readers walk long lists.

## Key ideas

- Readers reserve the current global era clock rather than each pointer they dereference; a node is reclaimable only when no reserved era overlaps its birth-to-retire interval.
- Progress matches carefully used hazard pointers: stalled threads bound unreclaimed memory by the eras they hold, not by a global epoch.
- On their lock-free list microbenchmark, throughput matches HP in the worst case and reaches about 5× HP when traversals dominate.
- Implementable with C11/C++11 atomics; the brief announcement pairs with the longer Concurrency Freaks writeup.

## Caveats

## Links

- DOI: [10.1145/3087556.3087588](https://doi.org/10.1145/3087556.3087588)
- Author PDF: https://github.com/pramalhe/ConcurrencyFreaks/blob/master/papers/hazarderas-2017.pdf
