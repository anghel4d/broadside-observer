---
title: "Toggle Tree: A New Data Structure for Efficient Parallel Graph Processing"
authors:
  - "Xinjian Jiang"
  - "Youzhe Liu"
  - "Yan Gu"
  - "Yihan Sun"
year: 2026
venue: "PPoPP 2027 (to appear); arXiv preprint (cs.DS)"
arxiv: "2611.33738"
doi: null
source: "https://arxiv.org/abs/2611.33738"
version_reviewed: "v1"
topics:
  - "hierarchical-bitmasks"
  - "parallel-vertex-subsets"
  - "frontier-representation"
  - "atomic-fetch-or"
  - "tournament-tree"
  - "sparse-dense-sets"
  - "ecs-active-sets"
seed_rank: 2737
seed_batch: "craft-2026-11-27"
reviewed: "2026-11-27"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "Toggle Tree: A New Data Structure for Efficient Parallel Graph Processing"
    url: "https://arxiv.org/abs/2611.33738"
    year: 2026
    arxiv: "2611.33738"
    doi: null
  - title: "Toggle Tree Implementation (ucrparlay/toggle-tree)"
    url: "https://github.com/ucrparlay/toggle-tree"
    year: 2026
    arxiv: null
    doi: null
  - title: "Ligra: A Lightweight Graph Processing Framework for Shared Memory"
    url: "https://doi.org/10.1145/2442516.2442530"
    year: 2013
    arxiv: null
    doi: "10.1145/2442516.2442530"
  - title: "Theoretically Efficient Parallel Graph Algorithms Can Be Fast and Scalable"
    url: "https://arxiv.org/abs/1805.05208"
    year: 2021
    arxiv: "1805.05208"
    doi: "10.1145/3434393"
  - title: "Julienne: A Framework for Parallel Graph Algorithms using Work-efficient Bucketing"
    url: "https://doi.org/10.1145/3087556.3087580"
    year: 2017
    arxiv: null
    doi: "10.1145/3087556.3087580"
  - title: "Direction-Optimizing Breadth-First Search"
    url: "https://doi.org/10.1109/SC.2012.50"
    year: 2012
    arxiv: null
    doi: "10.1109/SC.2012.50"
  - title: "The GAP Benchmark Suite"
    url: "https://arxiv.org/abs/1508.03619"
    year: 2015
    arxiv: "1508.03619"
    doi: null
  - title: "ParlayLib — A Toolkit for Parallel Algorithms on Shared-Memory Multicore Machines"
    url: "https://doi.org/10.1145/3350755.3400254"
    year: 2020
    arxiv: null
    doi: "10.1145/3350755.3400254"
  - title: "Thread Scheduling for Multiprogrammed Multiprocessors"
    url: "https://doi.org/10.1007/s00224-001-0004-z"
    year: 2001
    arxiv: null
    doi: "10.1007/s00224-001-0004-z"
see:
  - "431-thread-scheduling-for-multiprogrammed-multiprocessors"
---

# Toggle Tree: A New Data Structure for Efficient Parallel Graph Processing

## One-sentence takeaway

A vertex subset stored as a w-ary tree of 64-bit words, where an internal bit is set if and only if its child word is nonzero, gets dense-style O(1) atomic insert/remove and sparse-style output-sensitive traversal at the same time. Swapping it in for the frontier in BFS, k-core, coloring, Bellman-Ford and wBFS is on average 1.8× faster than the best of GBBS, PASGAL and other baselines, and wins 98 of 100 algorithm-graph instances.

## Why it matters here

This is the "active set" problem in ano and in an ECS frame. Standing rules (する/なる) fire on the entities whose inputs changed, and selection-as-reference needs a set that many threads can mark concurrently and that one pass can then walk without touching the inactive majority. The usual choices are a dense mask (cheap to mark, Θ(n) to scan) or a packed index list (cheap to scan, needs prefix-sum packing or per-thread queues to build). The Toggle Tree removes that choice. Its update path is just `fetch_or`/`fetch_and` on one word, and it climbs to the parent only when the word crosses zero/nonzero, so contention stays at one winner per word. With w = 64 the tree is at most about 7 levels tall for realistic n, and the leaves are an ordinary bitmask column that SoA code can AND/OR wholesale. The IndexMap variant adds per-leaf values and dirty bits, giving a wide parallel tournament tree with write-min decrease-key. That is a plausible shape for GRID COMMAND's dirty-region or pathfinding open sets. The ECS and RTS mapping is my extrapolation; the paper is about graph frontiers.

## Key ideas

- **Hierarchical toggle bits.** The leaf level is the membership bitmask. Each level above holds one bit per child word, set when that word is nonzero. Total space is Θ(n/w) words, with padding only in the last word of each level.
- **Concurrent updates via word transitions.** `atomic_set` returns (changed, toggled). Among concurrent same-type updates, exactly one sees each zero↔nonzero transition of a word and propagates it upward, so no update is lost and propagation work is O(k log_w(n/k)) for k updates.
- **Output-sensitive ForEach/Reduce/Clear.** Traversal descends only into nonzero words, so its cost is O(k log_w(n/k)) for k members instead of Θ(n). No global packing step is needed between rounds.
- **IndexMap = wide tournament tree.** Per-node minimum values plus dirty flags support DecVal (write-min, then mark ancestors dirty) and ExtractMin-style rounds for Bellman-Ford and wBFS.
- **Evaluation.** 96-core / 192-thread Xeon, real-world graphs, five algorithms. Only the vertex subset was replaced in existing algorithms; average 1.8× over the best baseline, and at least 2× in over a third of the instances. Code is public at ucrparlay/toggle-tree.

## Caveats

This is a v1 preprint (to appear at PPoPP 2027). I read the abstract, introduction, interface and algorithm sections (Algs. 1–5) and the cost theorems. I skimmed the experiments and did not re-run them. The speedups are for graph frontiers on a 96-core x86 server, not for small per-frame ECS sets on an 8–16 core client. Below a few thousand members a flat bitmask scan may already be as fast. The IndexMap traversal cannot rely only on word-level bit ops and is slower than IndexSet. The ECS, rule-engine and RTS uses above are mine.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.33738
- PDF: https://arxiv.org/pdf/2611.33738
- Code: https://github.com/ucrparlay/toggle-tree
