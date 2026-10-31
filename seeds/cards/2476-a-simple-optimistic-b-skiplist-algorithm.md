---
title: "A Simple Optimistic B-Skiplist Algorithm"
authors:
  - "Jianting Guo"
  - "Yicong Luo"
  - "Helen Xu"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2610.37977"
doi: null
source: "https://arxiv.org/abs/2610.37977"
topics:
  - "concurrent-data-structures"
  - "skiplists"
  - "optimistic-lock-coupling"
seed_rank: 2476
seed_batch: "craft-2026-10-31"
reviewed: "2026-10-31"
pool: "systems"
lineage: concurrent-data-structures
relevance_score: 8
cites:
  - title: "A Simple Optimistic B-Skiplist Algorithm"
    url: "https://arxiv.org/abs/2610.37977"
    year: 2026
    arxiv: "2610.37977"
    doi: null
see: ["768-skip-lists-a-probabilistic-alternative-to-balanced-trees", "1596-skiplists-with-foresight-skipping-cache-misses", "867-the-bw-tree-a-b-tree-for-new-hardware-platforms"]
---

# A Simple Optimistic B-Skiplist Algorithm

## One-sentence takeaway

Blocking a skiplist so each level lives in its own node makes optimistic lock coupling (version-validated reads, single-cache-line locks) fit skiplists after all, giving 1.2–10× the throughput of the best concurrent skiplists at 128 threads and landing within reach of OLC B+-trees.

## Why it matters here

Anoptic wants ordered concurrent indexes (spatial buckets, event timelines, ano's sorted relations) without the cache-line ping-pong of reader-writer locks. This is a small, copyable recipe: readers never write shared memory, and because a B-skiplist knows an insert's promotion height up front, inserts traverse the upper levels optimistically and lock only from the promotion level down, so most inserts dirty no shared line at all. It is a simpler alternative to a Bw-tree when we want ordered iteration plus concurrency.

## Key ideas

- **OLC on a skiplist.** The objection was that one element's lock spans unrelated levels; the blocked layout puts each level and its lock in a separate node, which removes it.
- **Hybrid top-down insert.** Optimistic traversal above the promotion height, lock coupling below it.
- **Compact single-line lock.** A version word replaces a multi-line RW lock, and readers validate and retry only on a detected conflict.
- **Results.** 1.2–10× throughput over concurrent skiplists, 0.8–4.3× of OLC/RW B+-trees, up to 13× lower latency than skiplists and within 1.6× of the OLC B+-tree.

## Caveats

Lock-based rather than lock-free, so a descheduled lock holder still stalls writers below it. Memory reclamation for deletes is not covered in the abstract. Throughput numbers come from the authors' own benchmark harness. Abstract-level read.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.37977
- PDF: https://arxiv.org/pdf/2610.37977
