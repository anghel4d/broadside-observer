---
title: "NBLFQ: A Lock-Free MPMC Queue Optimized for Low Contention"
authors: ["Alexandre Denis", "Charles Goedefroit"]
year: 2025
venue: "IPDPS"
arxiv: null
doi: "10.1109/ipdps64566.2025.00090"
source: "https://doi.org/10.1109/ipdps64566.2025.00090"
topics: [lockfree-game-parallelism]
seed_rank: 1491
seed_batch: "craft-2026-09-01"
reviewed: "2026-09-01"
pool: "engines"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "FastForward for Efficient Pipeline Parallelism: a Cache-Optimized Concurrent Lock-Free Queue"
    url: "https://doi.org/10.1145/1345206.1345215"
    year: 2008
    arxiv: null
    doi: "10.1145/1345206.1345215"
  - title: "A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue"
    url: "https://arxiv.org/abs/1908.04511"
    year: 2019
    arxiv: "1908.04511"
    doi: "10.4230/LIPIcs.DISC.2019.28"
see:
  - "1475-fastforward-for-efficient-pipeline-parallelism"
  - "031-michael-scott-lock-free-queue"
  - "428-nikolaev-scq-scalable-portable-lock-free-fifo"
---

# NBLFQ: A Lock-Free MPMC Queue Optimized for Low Contention

## One-sentence takeaway

Bounded lock-free MPMC ring whose cells are authoritative (head/tail are caches): one CAS to enqueue, one to dequeue, no malloc, interrupt-safe — the copyable many-to-many leftover of FastForward's SPSC bus.

## Why it matters here

FastForward 1475 is the SPSC slot-coupled bus. Anoptic still has many-to-one and many-to-many hops (job workers → submit, interrupt-like GPU completions, several sim systems posting to one consumer) that must not block in a signal path. NBLFQ is that leftover: NewMadeleine measured 97% of queue ops uncontended (failed-CAS rate saturates ~3% even under an unrealistically saturated ping-pong), so they optimise the empty/one-thread path instead of LCRQ-style scalability. Bounded, no allocator, usable from an interrupt handler. Do not remint MS 31 / LCRQ 423 / Disruptor 347 / SCQ 428.

## Key ideas

- **Cells are the truth.** Ring `A[S]` of `⟨ptr, counter⟩` pairs (`S` power of two, `S > 1`). NIL marks empty. `head`/`tail` are non-authoritative hints. Enqueue at head, dequeue at tail (circular-buffer convention). Counters increment only on dequeue-to-NIL and stay constant for a whole lap — 16 tag bits on x86-64/aarch64 48-bit pointers wrap after `S × 2¹⁶` ops (67 M for `S = 1024`). DWCAS 128-bit variant stores the pair in two words when tags are unavailable (not RISC-V).
- **Single CAS commit.** Enqueue chases from cached `head` until it sees empty cell after non-empty predecessor (or empty/full at the counter step), computes the expected counter from the predecessor, CASes `⟨NIL, c⟩ → ⟨e, c⟩`. Dequeue chases the counter step to find tail, CASes the cell to `⟨NIL, c+1⟩`. Failed CAS is a full barrier and a retry from scratch. Linearization points are successful CASes. No dynamic allocation, so async-signal-safe.
- **Why low contention.** Queue ops are tens of nanoseconds; InfiniBand RTT is ~1 µs, so even a saturated NIC is sparse from the queue's point of view. Microbenchmarks vs MS, LCRQ, SCQ/SCQ2, LOO, wfqueue, CRTurn, … on four machines; NewMadeleine/PUK single-thread and multi-thread latency: NBLFQ (and NBLFQ2) best or tied in almost all library-level cases. High-contention microbenchmarks can lose to LCRQ/LOO/wfqueue — that is the design.

## Caveats

Bounded; full enqueue returns an error (flow-control is NewMadeleine's problem). Pointer payloads in the tagged flavor; 16-bit wrap is assumed implausible during one stalled CAS (use DWCAS if a thread can sleep for seconds under millions of ops). Not wait-free. Paper PDF recovered from HAL `hal-04851700` (IEEE/Anubis 403 on the live HAL document URL from this egress). Do not remint 31 / 347 / 423 / 1475.

## Links

- DOI: [10.1109/ipdps64566.2025.00090](https://doi.org/10.1109/ipdps64566.2025.00090)
- HAL: https://inria.hal.science/hal-04851700
- HAL PDF: https://inria.hal.science/hal-04851700/file/article-final.pdf
