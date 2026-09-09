---
title: "Fixing Non-blocking Data Structures for Better Compatibility with Memory Reclamation Schemes"
authors: ["Md Amit Hasan Arovi", "Ruslan Nikolaev"]
year: 2026
venue: "PPoPP 2026"
arxiv: "2504.06254"
doi: "10.1145/3774934.3786455"
source: "https://arxiv.org/abs/2504.06254"
topics: [lockfree-game-parallelism]
seed_rank: 1654
seed_batch: "craft-2026-09-09"
reviewed: "2026-09-09"
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
  - title: "Universal Wait-Free Memory Reclamation"
    url: "https://doi.org/10.1145/3332466.3374540"
    year: 2020
    arxiv: null
    doi: "10.1145/3332466.3374540"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "259-universal-wait-free-memory-reclamation"
  - "245-crystalline-fast-and-memory-efficient-wait-free-reclamation"
  - "031-michael-scott-lock-free-queue"
  - "1589-big-atomics"
---

# Fixing Non-blocking Data Structures for Better Compatibility with Memory Reclamation Schemes

## One-sentence takeaway

SCOT (Safe Concurrent Optimistic Traversals) repairs the optimistic-traversal / SMR mismatch so Hazard Pointers, Hazard Eras, IBR, and Hyaline can protect lock-free structures that EBR forgave but robust schemes break.

## Why it matters here

Anoptic C lock-free buses need Hazard Pointers (024), not just epochs: stalled job threads must not pin the world, but classic optimistic traversals race with HP/HE/IBR. SCOT is the leftover practice paper after 024 / Crystalline 245 / Universal Wait-Free Reclamation 259 — how to *write* the structure so robust SMR works, rather than another reclamation algorithm.

## Key ideas

- **The bug class.** Optimistic traversals that read a pointer, then use it without a protection handshake, are fine under EBR but unsound under HP/HE/IBR/Hyaline once a stalled thread can hold a retired node forever.
- **SCOT.** A systematic fix pattern for concurrent optimistic traversals so they compose with robust SMR without switching the whole runtime to epochs.
- **PPoPP 2026 evaluation.** Drop-in compatibility across multiple classical structures; show where naive ports to HP silently break.
- **Engine rule.** Prefer HP-style robust SMR for Anoptic worker threads; apply SCOT (or equivalent protect-before-use) at every optimistic chase.

## Caveats

PPoPP 2026 / arXiv `2504.06254` / DOI `10.1145/3774934.3786455`. Not a new allocator and not a replacement for 024. Do not remint Hazard Pointers, Universal Wait-Free Reclamation 259, Crystalline 245, or Michael–Scott 031.

## Links

- arXiv abs: https://arxiv.org/abs/2504.06254
- PDF: https://arxiv.org/pdf/2504.06254
- DOI: https://doi.org/10.1145/3774934.3786455
