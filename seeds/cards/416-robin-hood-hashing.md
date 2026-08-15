---
title: "Robin Hood Hashing"
authors:
  - "Pedro Celis"
year: 1986
venue: "University of Waterloo TR CS-86-14"
arxiv: null
doi: null
source: "https://cs.uwaterloo.ca/research/tr/1986/CS-86-14.pdf"
topics:
  - hashtable
seed_rank: 416
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
lineage: open-addressing
cites:
  - title: "Space-Efficient Lock-Free Linear-Probing Hash Table"
    url: "https://arxiv.org/abs/2606.17315"
    year: 2026
    arxiv: "2606.17315"
    doi: null
  - title: "Hopscotch Hashing"
    url: "https://people.csail.mit.edu/shanir/publications/disc2008_submission_56.pdf"
    year: 2008
    arxiv: null
    doi: null
  - title: "Abseil Swiss Tables"
    url: "https://abseil.io/about/design/swisstables"
    year: 2017
    arxiv: null
    doi: null
  - title: "I Wrote a Faster Hash Table"
    url: "https://probablydance.com/2017/02/26/i-wrote-the-fastest-hashtable/"
    year: 2017
    arxiv: null
    doi: null
see:
  - "207-space-efficient-lock-free-linear-probing-hash-table"
  - "400-hopscotch-hashing"
  - "387-abseil-swiss-tables"
  - "486-i-wrote-a-faster-hash-table"
---

# Robin Hood Hashing

## One-sentence takeaway

On insert, if the incoming key has a longer probe-sequence length than the occupant, swap them — “rob the rich” — so PSL variance collapses and successful search stays near-constant even at high load.

## Why it matters here

Every modern open-address table Anoptic might ship (Swiss tables, hopscotch, game-engine dense maps) is fighting the same long-probe tail Celis named. Robin Hood is the displacement rule; later work adds SIMD metadata and tombstone-free deletes on top.

## Key ideas

- Open addressing measured by PSL: how far a key sits from its home bucket. Chapter 3 of the TR is literally “The Distribution of psl.”
- Insertion compares PSLs and continues with the poorer key, which cuts the variance of search cost more than it cuts the mean.
- Experiments (and the 1985 FOCS preliminary report) put successful search / delete under about 2.57 probes; insert and unsuccessful search grow like O(log n).
- Deletion and reinsertion are part of the thesis, not an afterthought — the hard part of shipping Robin Hood in a mutable map.

## Caveats

## Links

- TR CS-86-14: https://cs.uwaterloo.ca/research/tr/1986/CS-86-14.pdf
