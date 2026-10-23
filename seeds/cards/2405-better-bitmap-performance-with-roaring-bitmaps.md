---
title: "Better Bitmap Performance with Roaring Bitmaps"
authors:
  - "Samy Chambi"
  - "Daniel Lemire"
  - "Owen Kaser"
  - "Robert Godin"
year: 2016
venue: "Software: Practice and Experience 46(5):709-719"
arxiv: "1402.6407"
doi: "10.1002/spe.2325"
source: "https://arxiv.org/abs/1402.6407"
topics:
  - compressed-bitmaps
  - integer-sets
  - selection-masks
  - set-intersection
seed_rank: 2405
seed_batch: "archive-2026-10-24"
reviewed: "2026-10-24"
pool: "systems"
relevance_score: 8
lineage: columnar-predicates
see:
  - 127-c-store-a-column-oriented-dbms
  - 1552-emptyheaded-a-relational-engine-for-graph-processing
  - 345-structure-of-arrays-and-data-layout-for-simd
cites:
  - title: "Better Bitmap Performance with Roaring Bitmaps"
    url: "https://arxiv.org/abs/1402.6407"
    year: 2016
    arxiv: "1402.6407"
    doi: "10.1002/spe.2325"
---

# Better Bitmap Performance with Roaring Bitmaps

## One-sentence takeaway

Roaring splits the 32-bit integer space into 2^16-wide chunks keyed by the high 16 bits and stores each chunk either as a sorted array of 16-bit values (up to 4096 entries) or as a 2^16-bit bitmap (more than 4096), so no chunk ever costs much more than 16 bits per integer, membership stays O(log) with random access, and union/intersection pick a specialised bitmap–bitmap, bitmap–array or array–array routine — compressing better than the RLE formats WAH and Concise (e.g. 2×) in the paper's tests and running up to 900× faster on intersections.

## Why it matters here

ano's selections are references to row sets — the result of a predicate over a column, intersected and unioned with others before an effect is applied. Entity ids in Anoptic's ECS are 32-bit and clustered by archetype and spawn order, which is exactly the "dense here, sparse there" shape Roaring handles. It argues for representing ano selection masks as chunked hybrid containers (keyed per 64K-entity block) rather than one flat bitmask or RLE stream, so a sparse selection of a few units costs a short array while a full-archetype selection stays a word-parallel bitmap with a stored cardinality.

## Key ideas

- **Two-level index.** A sorted first-level array of 16-bit keys (small enough to stay in cache) points to containers holding the low 16 bits; each container tracks its cardinality, so total cardinality and rank/select are fast.
- **Container switch at 4096.** Array containers convert to bitmaps when they exceed 4096 values and back when a bitmap drops to 4096, keeping cost at no more than about 16 bits per integer at container level.
- **Bitmap vs bitmap.** 1024 64-bit word ORs/ANDs with popcount; for intersections, compute the result cardinality first and write a bitmap only if it exceeds 4096, otherwise extract set bits straight into an array (using w & −w and popcount of (t − 1)).
- **Bitmap vs array.** Probe each array value in the bitmap (intersection) or set bits in a copy of the bitmap (union).
- **Array vs array.** Merge when the sizes differ by less than 64×, galloping intersection otherwise; unions over 4096 go through a bitmap and convert back if small.
- **In-place and many-way operations.** In-place unions and intersections avoid allocation; unioning hundreds of bitmaps pulls containers with the same key off a min-heap, clones the largest and ORs the rest into it in place without recomputing cardinality after each step.
- **Results.** On Colantonio and Di Pietro's synthetic benchmark Roaring uses about 50% of Concise's and 25% of WAH's space on sparse data and is 4–5× faster on intersections; on real bitmap-index data it is always faster than WAH and Concise on average, up to 900× on CENSUS1881 where cardinalities differ widely.

## Caveats

This first paper has no run containers, so data with long runs of ones (WIKILEAKS in the evaluation) can compress better with Concise or WAH; on CENSUS2000-like data (about 30 values per bitmap over a 37M universe) Roaring used 4× Concise's memory. Experiments are a Java implementation on an AMD FX-8150 with JVM 1.7; the paper leaves run-length containers as future work. Uncompressed BitSet is still faster on dense data.

## Links

- Paper (arXiv): https://arxiv.org/abs/1402.6407
- Paper (PDF): https://arxiv.org/pdf/1402.6407
- Paper (DOI, Software: Practice and Experience): https://doi.org/10.1002/spe.2325
- Library: https://roaringbitmap.org/
