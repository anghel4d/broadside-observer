---
title: "Column Imprints: A Secondary Index Structure"
authors:
  - "Lefteris Sidirourgos"
  - "Martin Kersten"
year: 2013
venue: "SIGMOD 2013, pp. 893-904"
arxiv: null
doi: "10.1145/2463676.2465306"
source: "https://homepages.cwi.nl/~manegold/COMMIT/imprints.pdf"
topics:
  - "column-stores"
  - "bitmap-indexes"
  - "data-skipping"
  - "cache-conscious"
  - "relational-ecs-queries"
seed_rank: 2603
seed_batch: "archive-2026-11-16"
reviewed: "2026-11-16"
pool: "systems"
relevance_score: 9
lineage: data-layout
cites:
  - title: "Small Materialized Aggregates: A Light Weight Index Structure for Data Warehousing"
    url: "https://www.vldb.org/conf/1998/p476.pdf"
    year: 1998
    arxiv: null
    doi: null
see:
  - "2602-small-materialized-aggregates-a-light-weight-index-structure"
  - "2580-mil-primitives-for-querying-a-fragmented-world"
  - "2405-better-bitmap-performance-with-roaring-bitmaps"
---

# Column Imprints: A Secondary Index Structure

## One-sentence takeaway

For each cache line of a column, keep one 64-bit vector with a bit set for each of up to 64 sampled equal-height value bins that the line touches, run-length compress identical consecutive vectors with a tiny cache-line dictionary, and answer a range predicate by ANDing each vector with a query mask (skip the line), checking it against an inner mask (take every value without looking), or else scanning the line.

## Why it matters here

This is the zone map of card 2602 made cache-line-sized and multi-modal: min/max per block fails as soon as a block holds both small and large values, while an imprint records which bins actually occur. It came out of MonetDB, the same lineage as ano's BAT-like columns (card 2580), and the whole index is a couple of flat arrays plus one 64-entry bin table per column. For ano selections over large component columns it is a ready design for a skip index that costs a few percent of the column and is updated by appending.

## Key ideas

- **Bins.** Sample at most 2048 values to build an approximate equal-height histogram of up to 64 bins; frequent values get narrower bins. Only the bin borders are stored.
- **Imprint.** Per cache line, a bit vector with bit i set if any value in that line falls in bin i. It is non-dense: equal values in a line share one bit.
- **Cache-line dictionary.** Entries `{cnt:24, repeat:1, flags:7}`; repeat set means the next cnt cache lines share one stored imprint, otherwise the next cnt lines each have their own. This row-wise compression exploits local clustering but does not need sorted data.
- **Query.** Build `mask` (bins overlapping [low, high)) and `innermask` (bins wholly inside). `imprint & mask == 0` skips the line; `imprint & ~innermask == 0` emits every id in the line with no value check; anything else checks values for false positives.
- **Results.** Storage overhead a few percent of the column on real datasets; over 40,000 range queries, faster than zone maps and WAH-compressed bitmaps, with up to 1000× over scans and 100× over zone maps for the most selective queries.

## Caveats

Read from the CWI-hosted author PDF. Evaluated in MonetDB on read-mostly datasets (routing, SDSS, Cnet, airtraffic, TPC-H 100); appends just extend the imprints, while in-place updates and mid-table inserts or deletes are left to a columnar delta structure merged at query time. Bins are fixed from a sample, with the outer bins as overflow, so a shifting distribution degrades filtering. Single-column range and point predicates only.

## Links

- Author PDF: https://homepages.cwi.nl/~manegold/COMMIT/imprints.pdf
- DOI: https://doi.org/10.1145/2463676.2465306
- CWI repository: https://ir.cwi.nl/pub/21383
