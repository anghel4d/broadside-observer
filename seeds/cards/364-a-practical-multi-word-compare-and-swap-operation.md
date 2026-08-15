---
title: "A Practical Multi-Word Compare-and-Swap Operation"
authors:
  - "Timothy L. Harris"
  - "Keir Fraser"
  - "Ian A. Pratt"
year: 2002
venue: "DISC"
arxiv: null
doi: "10.1007/3-540-36108-1_18"
source: "https://doi.org/10.1007/3-540-36108-1_18"
topics:
  - lockfree
seed_rank: 364
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
see:
  - "031-michael-scott-lock-free-queue"
---

# A Practical Multi-Word Compare-and-Swap Operation

## One-sentence takeaway

Harris, Fraser, and Pratt implement CASN from single-word CAS by installing a descriptor and stealing a couple of low bits so helpers can finish a multi-word update.

## Why it matters here

Anoptic lock-free structures (queues, epoch retire, multi-slot ECS commits) eventually need “change these N words or none.” This is the practical software MCAS that later lock-free trees and STM runtimes sit on, without waiting for hardware DCAS.

## Key ideas

- A CASN descriptor lists the addresses, expected values, and new values; the first successful CAS installs a pointer-to-descriptor in a reserved bit-pattern.
- Competing threads help rather than abort, so a stalled updater cannot pin the words forever.
- Non-overlapping CASN operations proceed concurrently; only true conflicts serialize.
- Reserves 0 or 2 bits per word (alignment / spare tag bits) — the tax for building multi-word atomics on CAS1.

## Caveats

## Links

- DOI: https://doi.org/10.1007/3-540-36108-1_18
- Microsoft Research PDF: https://www.microsoft.com/en-us/research/wp-content/uploads/2002/10/2002-disc.pdf
