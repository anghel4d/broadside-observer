---
title: "Skip Lists: A Probabilistic Alternative to Balanced Trees"
authors:
- William Pugh
year: 1990
venue: Communications of the ACM
arxiv: null
doi: 10.1145/78973.78977
source: "https://doi.org/10.1145/78973.78977"
topics:
- skip-lists
- randomized-structures
seed_rank: 768
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: A Dichromatic Framework for Balanced Trees
  url: "https://doi.org/10.1109/SFCS.1978.3"
  year: 1978
  arxiv: null
  doi: 10.1109/SFCS.1978.3
- title: An Algorithm for the Organization of Information
  url: "https://www.mathnet.ru/eng/dan26964"
  year: 1962
  arxiv: null
  doi: null
see:
- "765-a-dichromatic-framework-for-balanced-trees"
- "763-an-algorithm-for-the-organization-of-information"
---

# Skip Lists: A Probabilistic Alternative to Balanced Trees

## One-sentence takeaway

A skip list is a layered linked list whose node heights are geometric random variables, giving expected $O(\log n)$ search, insert, and delete without rotations or balance bits.

## Why it matters here

Skip lists are the concurrent-friendly ordered map (Redis zsets, lock-free maps) that Anoptic job queues and GRID COMMAND leaderboards can implement without red-black rotation races.

## Key ideas

- Level-0 is a sorted singly linked list; each node is promoted to the next level independently with probability $p$ (classically $1/2$).
- Search walks the highest list, dropping a level when the next key would overshoot — expected $O(\log n)$ hops.
- Insert and delete only splice a random-height tower; no global rebalance.
- The structure is easier to make concurrent than a rotated tree because updates touch a local tower rather than rotating ancestors.

## Caveats

## Links

- DOI: [10.1145/78973.78977](https://doi.org/10.1145/78973.78977)
- URL: https://doi.org/10.1145/78973.78977
