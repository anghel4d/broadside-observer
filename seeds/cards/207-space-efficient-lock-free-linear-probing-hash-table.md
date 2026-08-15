---
title: Space-Efficient Lock-Free Linear-Probing Hash Table
authors:
- Hagit Attiya
- Rotem Oshman
- Noa Schiller
year: 2026
venue: arXiv:cs.DC
arxiv: '2606.17315'
doi: null
source: https://arxiv.org/abs/2606.17315
topics:
- lockfree
seed_rank: 207
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: open-addressing
cites:
- title: Hopscotch Hashing
  url: https://people.csail.mit.edu/shanir/publications/disc2008_submission_56.pdf
  year: 2008
  arxiv: null
  doi: null
- title: Abseil Swiss Tables
  url: https://abseil.io/about/design/swisstables
  year: 2017
  arxiv: null
  doi: null
- title: An Efficient Wait-free Resizable Hash Table
  url: https://doi.org/10.1145/3210377.3210408
  year: 2018
  arxiv: '2204.09624'
  doi: 10.1145/3210377.3210408
see:
- "400-hopscotch-hashing"
- "387-abseil-swiss-tables"
- "238-an-efficient-wait-free-resizable-hash-table"
---

# Space-Efficient Lock-Free Linear-Probing Hash Table

## One-sentence takeaway

A lock-free linear-probing table keeps wait-free lookups and reclaimable deletes while adding only a constant number of bits per slot under LL/SC (logarithmic bits under CAS).

## Why it matters here

Anoptic entity maps and GRID COMMAND spatial hashes want open addressing for density; this is the concurrent design that does not blow the per-slot metadata the way earlier lock-free probes do.

## Key ideas

- Sequential linear probing is compact, but prior concurrent versions either serialize writers or store large per-entry headers.
- Insert and delete are lock-free and linearizable; lookup is wait-free.
- Metadata is a handful of extra bits with LL/SC, or O(log n) bits if the primitive is CAS.
- Deleted keys can be reclaimed in place without rebuilding the table.
- Amortized step complexity matches sequential linear probing up to per-key contention, assuming no concurrent inserts of the same key.

## Caveats

## Links

- arXiv: [2606.17315](https://arxiv.org/abs/2606.17315)
- PDF: https://arxiv.org/pdf/2606.17315
