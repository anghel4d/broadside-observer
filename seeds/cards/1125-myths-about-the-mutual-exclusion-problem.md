---
title: "Myths About the Mutual Exclusion Problem"
authors:
  - "Gary L. Peterson"
year: 1981
venue: "Information Processing Letters"
arxiv: null
doi: "10.1016/0020-0190(81)90133-8"
source: "https://doi.org/10.1016/0020-0190(81)90133-8"
topics:
  - concurrency
  - peterson-lock
  - mutual-exclusion
seed_rank: 1125
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "A New Solution of Dijkstra's Concurrent Programming Problem"
    url: "https://doi.org/10.1145/361082.361093"
    year: 1974
    arxiv: null
    doi: "10.1145/361082.361093"
    card: "1124-a-new-solution-of-dijkstra-s-concurrent-programming-problem"
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
  - title: "The Art of Multiprocessor Programming"
    url: "https://www.worldcat.org/title/art-of-multiprocessor-programming/oclc/171614366"
    year: 2008
    arxiv: null
    doi: null
    card: "141-the-art-of-multiprocessor-programming"
---

# Myths About the Mutual Exclusion Problem

## One-sentence takeaway

Peterson's algorithm: a strikingly small two-process mutex using only shared flags and a turn variable.

## Why it matters here

The minimal shared-memory mutex everyone re-derives before discovering atomics and MCS locks.

## Key ideas

- Two-process solution with flag[] and turn.
- Discards several mutual-exclusion myths of the era.
- Extensible toward n-process variants.
- Pedagogical twin to bakery.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1016/0020-0190(81)90133-8](https://doi.org/10.1016/0020-0190(81)90133-8)
- URL: https://doi.org/10.1016/0020-0190(81)90133-8
