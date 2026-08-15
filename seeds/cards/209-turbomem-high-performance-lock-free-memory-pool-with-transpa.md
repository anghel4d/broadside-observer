---
title: "TurboMem: High-Performance Lock-Free Memory Pool with Transparent Huge Page Auto-Merging for DPDK"
authors:
  - "Junyi Yang"
year: 2026
venue: "arXiv:cs.PF"
arxiv: "2603.18690"
doi: null
source: "https://arxiv.org/abs/2603.18690"
topics:
  - lockfree
seed_rank: 209
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
---

# TurboMem: High-Performance Lock-Free Memory Pool with Transparent Huge Page Auto-Merging for DPDK

## One-sentence takeaway

TurboMem is a lock-free C++ mempool that promotes buffers onto 2 MB pages via `madvise(MADV_HUGEPAGE)` instead of requiring manually reserved DPDK huge pages.

## Why it matters here

Anoptic packet-like object pools (commands, netcode frames, GPU upload rings) hit the same ring-lock, cache-coherence, and TLB walls; THP auto-merge is a practical alternative to pinning 1 GB pages.

## Key ideas

- DPDK mempools still contend on a shared ring, bounce cache lines across cores, and thrash the TLB on 4 KB pages.
- TurboMem uses atomic stacks plus per-core local caches so alloc/free stay lock-free on the fast path.
- Transparent Huge Page auto-merging asks the kernel to collapse the pool into 2 MB pages without an explicit hugepage mount.
- Strict NUMA locality and CPU affinity keep each core on its own node.
- Reported mock-benchmark gains are up to 28% throughput and 41% fewer TLB misses versus a standard DPDK mempool; the preprint flags those numbers as preliminary.

## Caveats

## Links

- arXiv: [2603.18690](https://arxiv.org/abs/2603.18690)
- PDF: https://arxiv.org/pdf/2603.18690
