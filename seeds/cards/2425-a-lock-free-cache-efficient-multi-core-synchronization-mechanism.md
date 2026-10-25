---
title: "A Lock-Free, Cache-Efficient Multi-Core Synchronization Mechanism for Line-Rate Network Traffic Monitoring"
authors:
  - "Patrick P. C. Lee"
  - "Tian Bu"
  - "Girish Chandranmenon"
year: 2010
venue: "2010 IEEE International Symposium on Parallel & Distributed Processing (IPDPS), pp. 1-12"
arxiv: null
doi: "10.1109/IPDPS.2010.5470368"
source: "https://www.cse.cuhk.edu.hk/~pclee/www/pubs/ipdps10.pdf"
topics:
  - spsc-ring-buffer
  - lock-free
  - false-sharing
  - batched-synchronization
seed_rank: 2425
seed_batch: "archive-2026-10-26"
reviewed: "2026-10-26"
pool: "engines"
relevance_score: 8
lineage: concurrent-data-structures
see:
  - 1475-fastforward-for-efficient-pipeline-parallelism
  - 347-lmax-disruptor
  - 1837-concurrent-reading-and-writing
  - 472-how-to-make-a-multiprocessor-computer-that-correctly-execute
cites:
  - title: "A Lock-Free, Cache-Efficient Multi-Core Synchronization Mechanism for Line-Rate Network Traffic Monitoring"
    url: "https://doi.org/10.1109/IPDPS.2010.5470368"
    year: 2010
    arxiv: null
    doi: "10.1109/IPDPS.2010.5470368"
---

# A Lock-Free, Cache-Efficient Multi-Core Synchronization Mechanism for Line-Rate Network Traffic Monitoring

## One-sentence takeaway

MCRingBuffer is Lamport's single-producer/single-consumer ring buffer made cache-friendly by two changes — padding the control variables into separate cache lines and having each side check private cached copies of the other side's index before touching the shared one, and publishing the shared indices only once per batch of elements — which together give up to 5× the throughput of earlier lock-free ring buffers on a quad-core Xeon.

## Why it matters here

Anoptic's wait-free buses between pipeline stages (simulation → render, IO → simulation) are SPSC rings, and the two tricks here are the ones that decide whether such a ring costs a cache miss per message or per batch. Unlike FastForward (card 1475), MCRingBuffer keeps data and control decoupled, so it works for any element type with no reserved "empty" value; the paper also spells out the failure mode of batching (elements stall when traffic is sparse) and the fix, which a game engine with bursty per-frame traffic needs to adopt explicitly, e.g. by flushing at frame end.

## Key ideas

- **Baseline.** Lamport's ring uses shared `read` and `write` indices and needs no atomic read-modify-write instructions; FastForward instead tests slots against a null value, which forbids one data value; Wang et al. batch per cache line but only for elements smaller than a line.
- **Cache-line protection.** Control variables are grouped into shared (`read`, `write`), consumer-local, producer-local and constant groups, each padded to its own cache line, so modifying one group never falsely shares with another.
- **Local copies.** The producer checks fullness against its private `localRead` and only re-reads the shared `read` when the local copy says the ring is full (symmetrically `localWrite` for the consumer), so shared variables are read rarely.
- **Batch updates.** The ring is divided into blocks of `batchSize` slots; each side advances its shared index only after `batchSize` operations, so shared variables are written rarely, and producer and consumer tend to work in different blocks, which also avoids false sharing on the data.
- **Stall fix.** With a low arrival rate the shared indices do not advance and elements can sit in the buffer; the producer can periodically inject application-defined dummy elements that the consumer discards.
- **Evidence.** On an Intel Xeon 5355 quad-core, up to 5× throughput over conventional lock-free ring buffers, and, in a trace-driven simulation of the authors' parallel traffic monitor, up to 5.2× and 1.9× packet-processing throughput over the single-threaded case and over the multi-threaded case with conventional lock-free ring buffers respectively.

## Caveats

Correctness relies on atomic 32-bit loads/stores and sequential consistency, which the paper takes from the Intel memory model; on weaker models (Arm) memory barriers are required, and modern code would use C11 acquire/release atomics instead of `volatile`. SPSC only. Batching trades latency for throughput, so `batchSize` must be tuned per channel. Results are from 2010 hardware.

## Links

- Paper (author PDF): https://www.cse.cuhk.edu.hk/~pclee/www/pubs/ipdps10.pdf
- Paper (DOI, IPDPS 2010): https://doi.org/10.1109/IPDPS.2010.5470368
