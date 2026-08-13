---
title: "Publish on Ping: A Better Way to Publish Reservations in Memory Reclamation for Concurrent Data Structures"
authors:
  - "Ajay Singh"
  - "Trevor Brown"
year: 2025
venue: "PPoPP"
arxiv: "2501.04250"
doi: null
source: "https://arxiv.org/abs/2501.04250"
topics:
  - lockfree-game-parallelism
  - custom-allocators-runtime
seed_rank: 6
seed_batch: "craft-2026-08-13"
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
  - title: "Safe Memory Reclamation for Dynamic Lock-Free Objects Using Atomic Reads and Writes"
    url: "https://doi.org/10.1145/571825.571829"
    year: 2002
    arxiv: null
    doi: "10.1145/571825.571829"
  - title: "Hazard Eras: Non-Blocking Memory Reclamation"
    url: "https://doi.org/10.1145/3178487.3178488"
    year: 2018
    arxiv: null
    doi: "10.1145/3178487.3178488"
  - title: "Epoch-Based Reclamation / Practical Lock-Freedom"
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
    year: 2004
    arxiv: null
    doi: null
see:
  - "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "373-safe-memory-reclamation-for-dynamic-lock-free-objects-using-"
  - "703-hazard-eras-non-blocking-memory-reclamation"
  - "369-epoch-based-reclamation-practical-lock-freedom"
---

# Publish on Ping: A Better Way to Publish Reservations in Memory Reclamation for Concurrent Data Structures

## One-sentence takeaway

POSIX signals + delayed reclamation: drop the per-read hazard-pointer announce/fence, and only publish reservations when a reclaimer pings you.

## Why it matters here

Hazard pointers are the correct *robust* SMR for a game process that cannot stall a thread forever, but the announce+`mfence` on every pointer chase is poison on a hot ECS/bus walk. Publish-on-ping keeps HP-class robustness for the rare reclaim, and makes the common read path look like EBR. That is the shape of an Anoptic lock-free frame bus: traverse without fences, reclaim without waiting on a stuck job.

## Key ideas

- Per-read HP reservations dominate in read-heavy workloads even when almost nothing is actually freed.
- Publish-on-ping: readers run unannounced; a reclaimer sends a signal; the reader then publishes its current reservations; reclamation proceeds.
- Combines POSIX signals with delayed reclamation so the fence cost moves off the traverse and onto the uncommon reclaim.
- Aimed at linked concurrent structures where HP was previously “correct but too slow to ship.”
- PPoPP 2025 (extended arXiv version).

## Caveats

- Signal-based: not portable to every console/GPU-side queue, and signal latency is a scheduling artifact.
- Need a story for threads that mask signals or sit in uninterruptible GPU waits — engines must pick the ping mechanism (signal, APC, job mailbox).
- Complements card 1187 (EBR vs allocators): HP-robust when you need it, EBR-cheap when you do not.

## Links

- arXiv: [2501.04250](https://arxiv.org/abs/2501.04250)
- PDF: https://arxiv.org/pdf/2501.04250
