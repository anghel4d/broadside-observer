---
title: I Wrote a Faster Hash Table
authors:
- Malte Skarupke
year: 2017
venue: Blog
arxiv: null
doi: null
source: https://probablydance.com/2017/02/26/i-wrote-the-fastest-hashtable/
topics:
- hashtable
- robin-hood
seed_rank: 737
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 8
lineage: open-addressing
cites:
- title: Robin Hood Hashing
  url: https://cs.uwaterloo.ca/research/tr/1986/CS-86-14.pdf
  year: 1986
  arxiv: null
  doi: null
  card: 499-robin-hood-hashing
- title: Hopscotch Hashing
  url: https://people.csail.mit.edu/shanir/publications/disc2008_submission_56.pdf
  year: 2008
  arxiv: null
  doi: null
  card: 483-hopscotch-hashing
- title: Abseil Swiss Tables
  url: https://abseil.io/about/design/swisstables
  year: 2017
  arxiv: null
  doi: null
  card: 470-abseil-swiss-tables
---

# I Wrote a Faster Hash Table

## One-sentence takeaway

Modern robin-hood open-addressing craft that influenced many post-Swiss flat hash maps.

## Why it matters here

Practical successor notes connecting Celis robin hood to Abseil Swiss Tables era.

## Key ideas

- Robin-hood displacement bounds probe lengths.
- Flat arrays beat node-based maps for small keys.
- Empirically tuned for game/engine workloads.
- Conversation partner to Swiss Tables / F14.

## Caveats

- Blog engineering, not peer-reviewed.
- Benchmarks are workload-sensitive.

## Links

- URL: https://probablydance.com/2017/02/26/i-wrote-the-fastest-hashtable/
