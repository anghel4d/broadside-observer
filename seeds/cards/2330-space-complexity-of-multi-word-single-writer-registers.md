---
title: "Upper and Lower Bounds on the Space Complexity of Multi-word Single-Writer Registers"
authors:
  - "Yuanhao Wei"
  - "Yousof Yavari"
year: 2026
venue: "arXiv"
arxiv: "2608.19167"
doi: null
source: "https://arxiv.org/abs/2608.19167"
topics:
  - "wait-free"
  - "shared-registers"
  - "double-buffering"
  - "concurrency-lower-bounds"
seed_rank: 2330
seed_batch: "craft-2026-10-17"
reviewed: "2026-10-17"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "Upper and Lower Bounds on the Space Complexity of Multi-word Single-Writer Registers"
    url: "https://arxiv.org/abs/2608.19167"
    year: 2026
    arxiv: "2608.19167"
    doi: null
see:
  - "1857-can-seqlocks-get-along-with-programming-language-memory-models"
  - "456-hyaline-fast-and-transparent-lock-free-memory-reclamati"
---

# Upper and Lower Bounds on the Space Complexity of Multi-word Single-Writer Registers

## One-sentence takeaway

To publish a large value (m possible values) from one writer to r readers using small atomic words (b values each), any obstruction-free scheme whose readers never write needs at least ⌈(m−1)/(b−1)⌉ words, essentially one slot per value, while letting readers flip a few handshake bits brings it down to Θ(r + log m / log b) with a new wait-free double-buffer-plus-helping algorithm, and the two bounds match.

## Why it matters here

"One thread produces a big struct each frame, many threads read it" is the bread-and-butter pattern in engines (camera/frame constants, simulation snapshots, config hot-reload), and the usual answers are seqlocks (readers can retry forever) or triple buffers. This paper says precisely what wait-freedom costs in memory and why invisible readers are so expensive, then gives a construction whose shape is directly usable: the writer double-buffers, readers try an optimistic scan, a one-bit "tripwire" tells them whether the scan was disturbed, and if they keep losing, the writer streams them a fixed snapshot piece by piece through a per-reader mailbox.

## Key ideas

- **Setting.** Simulate a single-writer m-valued register from single-writer base registers holding b values; the lower bounds hold even when base registers are atomic, the target is only regular, and the progress guarantee is just obstruction-freedom, so they bind lock-free and wait-free designs too.
- **Invisible readers are costly.** If some reader never writes, at least ⌈(m−1)/(b−1)⌉ base registers are needed, an exponential improvement over the previous lower bound and asymptotically tight.
- **General bound.** With any mix of visible and invisible readers, at least ⌈min((m−1)/(b−1), r + log m / log b)⌉ registers are needed.
- **Matching algorithm.** Two global buffers of L = log m / log b words plus a 1-bit active pointer V. The writer fills the inactive buffer, flips V (the linearization point), then runs a service block per reader.
- **Per-reader handshakes.** ReadReq/ReadAck announces a new read; AttemptReq/AttemptAck is a tripwire that the writer trips when it may have endangered a scan; PieceReady/PieceAck streams one piece of a frozen value through Mailbox_i. A reader either returns an undisturbed fast-path scan or assembles the mailbox copy, and gets at least one safe piece between any two failed scans.
- **Costs.** Writes take Θ(r + log m / log b) steps and reads Θ((log m / log b)²); combined with known invisible-reader constructions the space is Θ(min(m/b, r + log m / log b)), improving the old Θ(min(m/b, r · log m / log b)).

## Caveats

A theory paper: no implementation or benchmarks, and the step complexity (writer touches every reader each write, quadratic read worst case) may lose to a seqlock or triple buffer in practice when contention is low. It assumes a known, fixed number of readers and single-writer base registers, not general CAS. Preprint.

## Links

- arXiv abstract: https://arxiv.org/abs/2608.19167
- PDF: https://arxiv.org/pdf/2608.19167
