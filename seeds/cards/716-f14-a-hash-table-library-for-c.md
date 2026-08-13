---
title: F14 — A Hash Table Library for C++
authors:
- Facebook Engineering
year: 2019
venue: Engineering Blog
arxiv: null
doi: null
source: https://engineering.fb.com/2019/04/25/developer-tools/f14/
topics:
- hashtable
seed_rank: 716
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 7
lineage: open-addressing
cites:
- title: Abseil Swiss Tables
  url: https://abseil.io/about/design/swisstables
  year: 2017
  arxiv: null
  doi: null
- title: Hopscotch Hashing
  url: https://people.csail.mit.edu/shanir/publications/disc2008_submission_56.pdf
  year: 2008
  arxiv: null
  doi: null
- title: Robin Hood Hashing
  url: https://cs.uwaterloo.ca/research/tr/1986/CS-86-14.pdf
  year: 1986
  arxiv: null
  doi: null
see:
- "470-abseil-swiss-tables"
- "483-hopscotch-hashing"
- "499-robin-hood-hashing"
---

# F14 — A Hash Table Library for C++

## One-sentence takeaway

F14 is a production open-addressing/chunked hash map in the Swiss-table design family.

## Why it matters here

Industrial sibling to Abseil Swiss Tables for engine hashtable choices.

## Key ideas

- SIMD/metadata filtering for probes.
- Multiple map variants.
- Explicit engineering writeup.
- Lives in Folly.

## Caveats

- Blog + library; API churn possible.
- Benchmark against Swiss Tables/ska on your key type.

## Links

- URL: https://engineering.fb.com/2019/04/25/developer-tools/f14/
