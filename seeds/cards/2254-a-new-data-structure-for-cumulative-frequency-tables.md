---
title: "A New Data Structure for Cumulative Frequency Tables"
authors:
  - "Peter M. Fenwick"
year: 1994
venue: "Software: Practice and Experience 24(3), 327–336"
arxiv: null
doi: "10.1002/spe.4380240306"
source: "https://doi.org/10.1002/spe.4380240306"
topics:
  - prefix-sums
  - fenwick-tree
  - data-structures
  - arithmetic-coding
seed_rank: 2254
seed_batch: "archive-2026-10-10"
reviewed: "2026-10-10"
pool: "engines"
relevance_score: 8
lineage: prefix-sums
see:
  - 1571-prefix-sums-and-their-applications
  - 307-scans-as-primitive-parallel-operations
cites:
  - title: "A New Data Structure for Cumulative Frequency Tables"
    url: "https://doi.org/10.1002/spe.4380240306"
    year: 1994
    arxiv: null
    doi: "10.1002/spe.4380240306"
---

# A New Data Structure for Cumulative Frequency Tables

## One-sentence takeaway

The binary indexed (Fenwick) tree stores partial sums in a flat array of n entries, indexed by the lowest set bit of each position, so both a point update and a prefix-sum query take O(log n) with a few lines of bit-twiddling and no pointers.

## Why it matters here

The library has parallel scans (307, 1571) but not the dynamic case: a prefix sum that must stay correct while single elements change. That shows up constantly in an engine and in GRID COMMAND: weighted random picks from changing tables, running counts per cell or faction, rank queries, and adaptive arithmetic coding of replay or network streams (the paper's original use). It is also a natural ano primitive, since it is just an array plus index arithmetic.

## Key ideas

- **Implicit tree in an array.** Entry `i` holds the sum of the range ending at `i` whose length is the lowest set bit of `i` (`i & -i`).
- **Query** walks down by clearing the lowest bit (`i -= i & -i`), summing at most log n entries.
- **Update** walks up by adding the lowest bit (`i += i & -i`), touching at most log n entries.
- **Search by cumulative value** descends the implicit tree by halving a bitmask, which finds the symbol for a given cumulative frequency in O(log n), the operation arithmetic decoders need.
- Same space as the raw table, built in place, far simpler than a balanced tree.

## Caveats

It needs an invertible operation (sums, XOR) for range queries; min and max need segment trees instead. Access is scattered, so for bulk static data a plain scan is faster and parallel scans win on GPUs. The original paper is paywalled at Wiley.

## Links

- Paper (DOI): https://doi.org/10.1002/spe.4380240306
