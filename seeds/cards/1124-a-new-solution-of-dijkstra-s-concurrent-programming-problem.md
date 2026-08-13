---
title: "A New Solution of Dijkstra's Concurrent Programming Problem"
authors:
  - "Leslie Lamport"
year: 1974
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/361082.361093"
source: "https://doi.org/10.1145/361082.361093"
topics:
  - concurrency
  - bakery-algorithm
  - mutual-exclusion
  - lamport
seed_rank: 1124
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Myths About the Mutual Exclusion Problem"
    url: "https://doi.org/10.1016/0020-0190(81)90133-8"
    year: 1981
    arxiv: null
    doi: "10.1016/0020-0190(81)90133-8"
    card: "1125-myths-about-the-mutual-exclusion-problem"
  - title: "Introduction and Overview of the Multics System"
    url: "https://multicians.org/fjcc1.html"
    year: 1965
    arxiv: null
    doi: null
    card: "1105-introduction-and-overview-of-the-multics-system"
  - title: "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs"
    url: "https://doi.org/10.1109/TC.1979.1675439"
    year: 1979
    arxiv: null
    doi: "10.1109/TC.1979.1675439"
    card: "722-how-to-make-a-multiprocessor-computer-that-correctly-execute"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
    card: "037-wait-free-synchronization"
  - title: "The Art of Multiprocessor Programming"
    url: "https://www.worldcat.org/title/art-of-multiprocessor-programming/oclc/171614366"
    year: 2008
    arxiv: null
    doi: null
    card: "141-the-art-of-multiprocessor-programming"
---

# A New Solution of Dijkstra's Concurrent Programming Problem

## One-sentence takeaway

The bakery algorithm: first-come mutual exclusion using only shared reads/writes—ticket numbers like a bakery queue.

## Why it matters here

Foundational mutex before locks/atomics assumptions; cites into the concurrent-data-structures spine.

## Key ideas

- Ticket/numbering for FIFO-ish entry.
- Works with only atomic read/write registers of the model.
- People take tickets; lowest ticket enters critical section.
- Classic teaching algorithm still used to explain fairness.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/361082.361093](https://doi.org/10.1145/361082.361093)
- URL: https://doi.org/10.1145/361082.361093
