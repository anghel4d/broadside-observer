---
title: Priority Ceiling Protocols for Real-Time Synchronization
authors:
- Lui Sha
- Ragunathan Rajkumar
- John P. Lehoczky
year: 1990
venue: IEEE Trans. Computers
arxiv: null
doi: 10.1109/12.57058
source: https://doi.org/10.1109/12.57058
topics:
- realtime
- scheduling
seed_rank: 725
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: realtime
relevance_score: 7
lineage: realtime-scheduling
cites:
- title: 'Priority Inheritance Protocols: An Approach to Real-Time Synchronization'
  url: https://doi.org/10.1109/12.57055
  year: 1990
  arxiv: null
  doi: 10.1109/12.57055
  card: 496-priority-inheritance-protocols-an-approach-to-real-time-sync
---

# Priority Ceiling Protocols for Real-Time Synchronization

## One-sentence takeaway

Priority ceiling complements priority inheritance for bounded priority inversion in RT locks.

## Why it matters here

Living RT sync pair with the priority inheritance card for engine soft-RT threads.

## Key ideas

- Raise ceiling to prevent transitive blocking chains.
- Analyzable blocking bounds for RMS/EDF.
- Still taught in RTOS courses.
- Pairs with inheritance protocols.

## Caveats

- Overkill for many game-frame job systems.
- Requires static resource knowledge.

## Links

- DOI: [10.1109/12.57058](https://doi.org/10.1109/12.57058)
- URL: https://doi.org/10.1109/12.57058
