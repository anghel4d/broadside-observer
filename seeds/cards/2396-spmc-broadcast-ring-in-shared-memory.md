---
title: "An SPMC Broadcast Ring in Shared Memory"
authors:
  - "Jasper"
year: 2026
venue: "jasper-aa64.github.io (blog)"
arxiv: null
doi: null
source: "https://jasper-aa64.github.io/posts/spmc-shared-memory-broadcast-ring/"
topics:
  - "wait-free-queues"
  - "broadcast-ring"
  - "seqlock"
  - "cache-coherence"
  - "shared-memory-ipc"
seed_rank: 2396
seed_batch: "craft-2026-10-23"
reviewed: "2026-10-23"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "An SPMC Broadcast Ring in Shared Memory"
    url: "https://jasper-aa64.github.io/posts/spmc-shared-memory-broadcast-ring/"
    year: 2026
    arxiv: null
    doi: null
  - title: "SPMC_Queue (MengRao)"
    url: "https://github.com/MengRao/SPMC_Queue"
    year: null
    arxiv: null
    doi: null
see:
  - "347-lmax-disruptor"
  - "1837-concurrent-reading-and-writing"
  - "1857-can-seqlocks-get-along-with-programming-language-memory-models"
---

# An SPMC Broadcast Ring in Shared Memory

## One-sentence takeaway

A careful, measured teardown of a roughly fifty-line single-producer/multi-consumer broadcast ring (MengRao's `SPMC_Queue`). Each slot carries its own release-stored sequence stamp, so the producer never reads reader state and never waits. The post then shows what that costs. Overruns are silent. A "re-check the stamp" fix still accepts torn reads unless the producer invalidates the stamp first (seqlock-style). And readers spinning on the next slot raise flat-out write cost from 2.8 ns to 18.5 ns with one reader in a cache-resident ring.

## Why it matters here

Anoptic's design calls for wait-free buses: sim to render, sim to replay/recorder, sim to netcode, sim to debug tools. This is exactly the one-writer, N-full-stream-readers case where readers come and go. The post gives the decision rule for broadcast ring vs per-reader SPSC queues, plus hard numbers for the coherence traffic each spinning reader adds. It also lists the shared-memory traps that matter for an out-of-process profiler or replay recorder.

## Key ideas

- **Stamp in the slot.** The producer writes the slot's data in place, then release-stores `idx = write_idx`. The reader acquire-loads the stamp and compares it using `int(new_idx - next_idx)`: below zero means not yet written, zero means its message, above zero means it was lapped (the gap is always a multiple of `CNT`). The signed difference is wrap-safe across 2³².
- **Layout.** With `alignas(64)` slots, the stamp shares a cache line with the first 56 bytes of payload, which saves a round trip. An 88-byte record becomes a 128-byte block (two lines), and a 524,288-slot ring is 64 MiB.
- **Torn reads need a three-step producer.** With `CNT = 4` under stress, about 5.5% of reads were torn, and re-reading the stamp after copying still left about 4.7%. Zeroing the stamp, issuing a release fence, writing the data, then stamping (with an acquire fence before the reader's re-check) brought torn reads to 0. The post notes that strict C++ would also need atomic payload fields.
- **Hardware cost.** In normal operation the store buffer hides the per-write line steal. Flat out, each caught-up reader forces an invalidation round trip, about 1–7 ns extra per added reader after the first. Readers that are behind cost the producer nothing. So batch-waking readers (disk, monitor) should wake periodically rather than spin on the newest slot.
- **Shared-memory rules.** Use `shm_open`/`ftruncate`/`mmap` and rely on zero-filled memory instead of constructors. The payload must contain no pointers (SSO `std::string` points into itself). Pre-fault every page before the hot path: first-lap writes averaged 56 ns vs 9 ns. Overrun headroom is capacity ÷ (feed rate − processing rate). Persist reader cursors across restarts, and detect stamps going backwards after the queue is recreated.

## Caveats

This is a single-author blog post with a pseudonymous byline ("Jasper"), measured mainly on one Ryzen 5 5600GT under Windows, with some Linux tmpfs claims argued by analogy. The torn-read fix is validated on x86 only. The base ring gives no loss signal unless you add one (the gap is available but not reported). It is one writer per ring, and the 128-byte alignment of `write_idx` is explained only as a guess (adjacent-line prefetch).

## Links

- Post: https://jasper-aa64.github.io/posts/spmc-shared-memory-broadcast-ring/
- SPMC_Queue source: https://github.com/MengRao/SPMC_Queue
