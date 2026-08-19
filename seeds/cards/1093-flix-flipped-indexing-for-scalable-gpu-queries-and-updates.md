---
title: "FliX: Flipped-Indexing for Scalable GPU Queries and Updates"
authors: ["Rosina Kharal", "Trevor Brown", "Justus Henneberg", "Felix Schuhknecht"]
year: 2026
venue: "arXiv"
arxiv: "2604.16725"
doi: null
source: "https://arxiv.org/abs/2604.16725"
topics: [ecs-data-oriented-simulation, relational-ecs-queries]
seed_rank: 1093
seed_batch: "craft-2026-08-19"
reviewed: "2026-08-19"
pool: "engines"
relevance_score: 9
lineage: ecs-data-oriented-simulation
cites:
  - title: "Engineering a High-Performance GPU B-Tree"
    url: "https://doi.org/10.1145/3293883.3295706"
    year: 2019
    arxiv: null
    doi: "10.1145/3293883.3295706"
  - title: "GPU LSM: A Dynamic Dictionary Data Structure for the GPU"
    url: "https://doi.org/10.1109/IPDPS.2018.00053"
    year: 2018
    arxiv: null
    doi: "10.1109/IPDPS.2018.00053"
  - title: "WarpCore: A Library for Fast Hash Tables on GPUs"
    url: "https://doi.org/10.1109/HIPC50609.2020.00015"
    year: 2020
    arxiv: null
    doi: "10.1109/HIPC50609.2020.00015"
see:
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "207-space-efficient-lock-free-linear-probing-hash-table"
  - "240-eemarq-efficient-lock-free-range-queries-with-memory-reclama"
  - "1033-towards-efficient-hash-maps-in-functional-array-languages"
---

# FliX: Flipped-Indexing for Scalable GPU Queries and Updates

## One-sentence takeaway

Delete the index layer: sort the *batch*, station a warp at each bucket, binary-search the batch for that bucket's key range — 6.5× lower query latency than a GPU B-tree, 8× insert vs the same B-tree, 4× better throughput-per-byte, physical deletes (no tombstones), GPU-side flatten/merge to reclaim up to 46% of nodes.

## Why it matters here

Anoptic's ECS world and GRID COMMAND spatial queries are batched (ticks, vis, "units in this AABB"). Traditional GPU B-trees pay a traversal per key and warp-diverge; FliX maps *compute to buckets*, which is the same shape as archetype iteration. Range and successor queries come free because order lives in the data layer. Different from last Craft's fused bag-relations (1060) / Bonsai (1037): this is the GPU-resident *map*, not the query compiler.

## Key ideas

- Build: sort keys, pack half-full nodes, store per-bucket max-key array (MKBA). Inserts split; deletes compact immediately.
- Query/update: one binary search per bucket into the sorted batch (log of *batch* size, not of the index).
- TL-Bulk kernels win for ≥200% growth / skewed hot ranges; ST-Shift-Right wins for 2–3 keys/bucket uniform inserts.
- Restructuring flattens chains and merges underfull nodes; default one-tile-per-bucket is robust even at 2%-range / 90%-ops skew (<0.5 ms extra).
- Unsorted queries: still win after paying GPU sort (5× vs B-tree at 2^25).

## Caveats

- CUDA / A6000 numbers. Porting the compute-to-bucket idea to Vulkan compute is the Anoptic job; don't copy the kernels blindly.
- No unsorted in-place path — you sort. Fine for tick batches, not for one-off CPU picks.
- Paper is arXiv 2026, not a venue yet.

## Links

- arXiv: [2604.16725](https://arxiv.org/abs/2604.16725)
