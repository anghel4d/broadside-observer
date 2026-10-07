---
title: "Can Seqlocks Get Along with Programming Language Memory Models?"
authors: ["Hans-J. Boehm"]
year: 2012
venue: "MSPC 2012 (ACM SIGPLAN Workshop on Memory Systems Performance and Correctness), pp. 12–20"
arxiv: null
doi: "10.1145/2247684.2247688"
source: "https://doi.org/10.1145/2247684.2247688"
topics: [lock-free, seqlock, memory-model, cpp11-atomics, readers-writers]
seed_rank: 1857
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "systems"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Concurrent Reading and Writing"
    url: "https://lamport.azurewebsites.net/pubs/rd-wr.pdf"
    year: 1977
    arxiv: null
    doi: "10.1145/359863.359878"
  - title: "Foundations of the C++ Concurrency Memory Model"
    url: "https://doi.org/10.1145/1375581.1375591"
    year: 2008
    arxiv: null
    doi: "10.1145/1375581.1375591"
see:
  - "1837-concurrent-reading-and-writing"
  - "1139-foundations-of-the-c-concurrency-memory-model"
---

# Can Seqlocks Get Along with Programming Language Memory Models?

## One-sentence takeaway

Boehm shows that the textbook seqlock (version counter, plain data reads, retry on mismatch) is a data race — undefined behavior — under C++11 and broken under Java, and gives the correct portable variants: atomic data loads (simple, near-optimal on x86), acquire fences (fast everywhere, subtle, C/C++ only), or a read-don't-modify-write `fetch_add(0)` on the counter.

## Why it matters here

Archive just minted Lamport's 1977 concurrent reading/writing (1837), the ancestor of the seqlock — the obvious recipe for Anoptic's sim→render snapshot handoff and GRID COMMAND's many-reader/one-writer world state. Lamport's proof assumes a memory model C++ does not give you. This is the paper that turns the idea into code that a C++20 compiler cannot legally miscompile, with the cost of each fix stated per architecture. Read it before writing `std::atomic<uint64_t> seq` in the engine.

## Key ideas

- **Why seqlocks.** Reader-writer locks make every reader write the lock word, so the cache line ping-pongs between reader cores; seqlock readers write nothing and retry if the writer interfered (Linux kernel, `jsr166e` SequenceLock).
- **Version 0 is racy.** Plain `int data1, data2` read concurrently with the writer is a data race: undefined in C++11, and the compiler may legally misoptimize it.
- **Version 1 — atomic data.** Make the protected fields `atomic` (seq_cst loads): data-race-free hence sequentially consistent; essentially optimal on x86/TSO, about 3× slower readers on POWER7.
- **Version 2 is broken again.** Relaxed data loads followed by a seq_cst re-read of the counter let the data loads drift past the second counter read; the same bug appears in Java with a volatile counter and plain data.
- **Version 3 — fences.** Relaxed data loads plus `atomic_thread_fence(memory_order_acquire)` before a relaxed re-read of `seq`: portable performance, but subtle and impossible in Java.
- **Version 4 — read-don't-modify-write.** Re-read the counter with `seq.fetch_add(0, memory_order_release)`: natural acquire/release reasoning and works with ordinary data, but reintroduces a store unless the compiler optimizes it away.

## Caveats

2012 C++11/Java framing; the trade-offs still hold for C++20, but measure on today's ARM/Apple silicon rather than POWER7. Seqlocks need copyable, tear-tolerant payloads (readers may see garbage they then discard), so a non-trivially-copyable snapshot needs a double buffer or Left-Right instead. Card read from the MSPC slides (the full HP Labs tech report HPL-2012-68 link is dead). Do not remint Lamport 1837 or the C++ memory model 1139.

## Links

- DOI: https://doi.org/10.1145/2247684.2247688
- Slides (PDF): https://pdfs.semanticscholar.org/ac35/455b128baf4e280f2571160c242b67b3f85e.pdf
- Google Research record: https://research.google/pubs/can-seqlocks-get-along-with-programming-language-memory-models/
- Author publication list: https://hboehm.info/pubs.html
