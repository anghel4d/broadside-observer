---
title: "The State-of-the-Art LCRQ Concurrent Queue Algorithm Does NOT Require CAS2"
authors:
  - "Raed Romanov"
  - "Nikita Koval"
year: 2023
venue: "PPoPP"
arxiv: null
doi: "10.1145/3572848.3577485"
source: "https://doi.org/10.1145/3572848.3577485"
topics:
  - lockfree
  - queues
seed_rank: 513
seed_batch: "lineage-concurrent-data-structures-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Fast Concurrent Queues for x86 Processors"
    url: "https://doi.org/10.1145/2442516.2442527"
    year: 2013
    arxiv: null
    doi: "10.1145/2442516.2442527"
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue"
    url: "https://arxiv.org/abs/1908.04511"
    year: 2019
    arxiv: "1908.04511"
    doi: "10.4230/LIPIcs.DISC.2019.28"
  - title: "FAAArrayQueue (Concurrency Freaks)"
    url: "https://github.com/pramalhe/ConcurrencyFreaks/blob/master/CPP/queues/array/FAAArrayQueue.hpp"
    year: 2016
    arxiv: null
    doi: null
see:
  - "507-morrison-afek-lcrq-fast-concurrent-queues-x86"
  - "032-michael-scott-lock-free-queue"
  - "512-nikolaev-scq-scalable-portable-lock-free-fifo"
  - "511-ramalhete-correia-faaarrayqueue"
---

# The State-of-the-Art LCRQ Concurrent Queue Algorithm Does NOT Require CAS2

## One-sentence takeaway

LPRQ: portable LCRQ modification that removes CAS2, matching classic LCRQ speed with only CAS + FAA.

## Why it matters here

Closes the portability gap for Anoptic/JVM/Go/Kotlin ports that cannot emit CAS2.

## Key ideas

- Replaces CRQ’s CAS2 cell updates with a three-step CAS protocol (PRQ cells with epochs).
- Keeps LCRQ’s linked-ring architecture and FAA ticket spreading.
- Reports parity with LCRQ and up to ~1.6× over prior non-CAS2 leaders in their experiments.
- Explicitly targets languages/ISAs without double-width CAS.

## Caveats

- Still an FAA/ring design with LCRQ-family imbalance caveats.
- Verify memory-reclamation integration for your runtime.
- Seed card; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/3572848.3577485](https://doi.org/10.1145/3572848.3577485)
- PDF: https://nikitakoval.org/publications/ppopp23-lprq.pdf
