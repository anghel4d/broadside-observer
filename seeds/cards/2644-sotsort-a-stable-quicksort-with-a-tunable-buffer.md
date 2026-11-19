---
title: "SotSort: a stable quicksort with a tunable buffer"
authors:
  - "Lucas Sotomayor"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2611.24786"
doi: null
source: "https://arxiv.org/abs/2611.24786"
version_reviewed: "v1"
topics:
  - "sorting"
  - "stable-sort"
  - "quicksort"
  - "memory-bounded-algorithms"
  - "benchmarks"
seed_rank: 2644
seed_batch: "craft-2026-11-19"
reviewed: "2026-11-19"
pool: "systems"
relevance_score: 7
see:
  - "761-quicksort"
  - "2276-sorting-networks-and-their-applications"
cites:
  - title: "SotSort: a stable quicksort with a tunable buffer"
    url: "https://arxiv.org/abs/2611.24786"
    year: 2026
    arxiv: "2611.24786"
    doi: null
---

# SotSort: a stable quicksort with a tunable buffer

## One-sentence takeaway

SotSort is a stable comparison sort whose one code path runs with any buffer from a fixed 16 KB up to n elements, using a stable quicksort that partitions blocks through the buffer and gathers them with rotations; in constant-memory mode it takes 0.19–0.75 of blitsort's time on 16 of 22 integer input classes.

## Why it matters here

ano's columnar queries and Anoptic's ECS sort component columns (by archetype, chunk, depth key) inside arenas where a full n-sized scratch buffer is not always available. A stable sort that degrades smoothly from a fixed 16 KB buffer to a full buffer, in one code path, fits arena-bounded scratch memory. The report also says which parts are borrowed from blitsort, fluxsort, glidesort and driftsort, which is a useful map of the current state of practical sorts.

## Key ideas

- **One path, any buffer.** Same algorithm from 16 KB to n elements of scratch.
- **Core.** Stable quicksort; blocks are partitioned through the buffer and gathered with rotations.
- **Baselines.** blitsort, fluxsort, glidesort, driftsort, GrailSort, WikiSort.
- **Results (preliminary).** Constant-memory mode: 0.19–0.75 of blitsort's time on 16 of 22 classes, 0.94–1.09 on the other six (32- and 64-bit integers, one 2-vCPU machine). With a comparator that rules out the vector partition it is slower than blitsort on 7 of 11 classes, up to 2.6× on sorted input.
- **Artifact.** Code, tests and raw measurements at github.com/sotomayorlucas/sotsort.

## Caveats

Abstract-level read of a 4-page v1 report (18 Nov 2026); the author calls all numbers preliminary. One small machine, integer keys only; the speedups depend on a vectorized partition that general comparators do not get.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.24786
- PDF: https://arxiv.org/pdf/2611.24786
- Code and data: https://github.com/sotomayorlucas/sotsort
