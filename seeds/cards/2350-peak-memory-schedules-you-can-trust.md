---
title: "Peak-Memory Schedules You Can Trust: Exact Realization, Certified Optimality, and the Limits of Recomputation for Inference"
authors:
  - "Ivan Fomin"
  - "Ivan Koryabkin"
  - "Boris Sheludko"
year: 2026
venue: "arXiv"
arxiv: "2610.23328"
doi: null
source: "https://arxiv.org/abs/2610.23328"
topics:
  - "memory-planning"
  - "operator-scheduling"
  - "rematerialization"
  - "lower-bounds"
  - "ml-compilers"
seed_rank: 2350
seed_batch: "craft-2026-10-19"
reviewed: "2026-10-19"
pool: "systems"
relevance_score: 8
lineage: memory-planning
cites:
  - title: "Peak-Memory Schedules You Can Trust: Exact Realization, Certified Optimality, and the Limits of Recomputation for Inference"
    url: "https://arxiv.org/abs/2610.23328"
    year: 2026
    arxiv: "2610.23328"
    doi: null
  - title: "Training Deep Nets with Sublinear Memory Cost"
    url: "https://arxiv.org/abs/1604.06174"
    year: 2016
    arxiv: "1604.06174"
    doi: null
  - title: "Checkmate: Breaking the Memory Wall with Optimal Tensor Rematerialization"
    url: "https://arxiv.org/abs/1910.02653"
    year: 2020
    arxiv: "1910.02653"
    doi: null
see:
  - "343-per-frame-arena-allocation-patterns-in-games"
  - "1839-fast-allocation-and-deallocation-of-memory-based-on-object-lifetimes"
---

# Peak-Memory Schedules You Can Trust: Exact Realization, Certified Optimality, and the Limits of Recomputation for Inference

## One-sentence takeaway

Handing a better operator order back to a compiler often doesn't deliver the predicted memory peak (PyTorch Inductor missed it in 22 of 54 CPU configurations and got worse than stock in 9), so this Yandex paper instead permutes the generated program's own statements against an exact memory model, proves the peak is then hit to the byte, and adds min-cut lower bounds that tell you when no better order exists.

## Why it matters here

Peak memory is a scheduling problem anywhere a frame or a job runs a fixed graph of passes over transient buffers, whether that's a render graph, an array-language program or an inference step. The paper's three lessons carry over directly. Change the order of the program you actually run, not a model of it, because code generation re-decides buffer reuse after scheduling. Compute a cheap lower bound before searching harder. And recompute only a cheap value that is held for a late reuse, since general recomputation is intractable.

## Key ideas

- **Regeneration is unreliable.** Code generation runs after scheduling and decides call grouping, in-place reuse and when references drop, so a new order changes those decisions. On GPU, regenerating was worse than stock in 19 of 50 configurations and also changed numerical results.
- **Fixed-wrapper realization.** Profile one run, model memory per statement from its read and write effects, then move only statements, allocations and frees, leaving kernels and buffer reuse alone. Theorem 1 says the realized peak equals the modeled peak when allocation doesn't depend on history. It held to the byte in all 78 training and 22 inference CPU runs with bitwise-identical outputs. The CUDA caching allocator breaks that condition, and the paper says exactly how.
- **Trap lower bounds.** Forward and reverse "trap" bounds each take O(n²) minimum cuts and each dominate the classical event-cut bound. Together they prove the found order optimal for 115 of 122 held-out graphs and all 16 microcontroller-class models, in under a second.
- **Most inference graphs are already optimal.** Branching networks are the exception, where reordering is free and pays (10.0% on DeepLabV3 inference, up to 7.6% in compiled training).
- **Limits of selective recomputation.** With per-operator recompute caps, feasibility is strongly NP-hard for every fixed cap even at treewidth two, cap two is exactly knapsack on series–parallel graphs, and bounded treewidth is solvable exactly. On tiny models the peak is one operator's inputs and output, so it doesn't help, but on ReDimNet speaker networks recomputing the stem cuts the peak 5.2–6.1% for at most 0.34% more MACs.

## Caveats

The exactness guarantee needs a history-independent allocator, which mainstream GPU caching allocators are not, so GPU results are characterized rather than guaranteed. The search is an existing exact capacity search, not a new heuristic. The certificates leave seven graphs open, including RegNetY-400MF with a 13% gap. The evidence comes from PyTorch Inductor and small or medium models, the paper is an industry preprint, and there was no code link in the version reviewed.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.23328
- PDF: https://arxiv.org/pdf/2610.23328
