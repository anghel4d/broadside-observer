---
title: "Terascale Query Processing in the Browser: Rethinking GPU Acceleration"
authors: ["Jiaxin Lu", "Landon Dyken", "Yihao Sun", "Kristopher Micinski", "Thomas Gilray", "Sidharth Kumar"]
year: 2026
venue: "arXiv"
arxiv: "2607.17571"
doi: null
source: "https://arxiv.org/abs/2607.17571"
topics: [production-rules-triggers, relational-ecs-queries]
seed_rank: 1094
seed_batch: "craft-2026-08-19"
reviewed: "2026-08-19"
pool: "languages"
relevance_score: 10
lineage: production-rules-triggers
cites:
  - title: "Scaling Worst-Case Optimal Datalog to GPUs"
    url: "https://arxiv.org/abs/2604.20073"
    year: 2026
    arxiv: "2604.20073"
    doi: null
  - title: "Soufflé: On Synthesis of Program Analyzers"
    url: "https://doi.org/10.1007/978-3-662-49434-9_6"
    year: 2016
    arxiv: null
    doi: "10.1007/978-3-662-49434-9_6"
  - title: "WebGPU"
    url: "https://www.w3.org/TR/webgpu/"
    year: 2025
    arxiv: null
    doi: null
see:
  - "170-scaling-worst-case-optimal-datalog-to-gpus"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "1049-production-matching-for-large-learning-systems"
  - "1061-uniformity-analysis-in-the-webgpu-shading-language"
  - "1060-a-compiler-for-operations-on-relations-with-bag-semantics"
---

# Terascale Query Processing in the Browser: Rethinking GPU Acceleration

## One-sentence takeaway

WGLog is a WebGPU Datalog engine: sorted-array binary-search joins (no hash-table hub contention) plus batched indirect-dispatch fixpoint (no per-stage host readback) — 1.48–4.68× over native CUDA Datalog engines and 14–132× over browser WASM SQL, on the same laptop GPU GRID COMMAND already ships.

## Why it matters here

GRID COMMAND is a *browser* RTS with standing rules / NL orders that want a Datalog-shaped trigger engine, and WebGPU is the only GPU API we have there. Last Craft kept WGSL uniformity (1061) and bag-relations (1060); this is the missing *evaluator*: semi-naïve TC/SG/triangles as compute shaders, with the host only checking "did delta go empty?" every K iterations. Cite SRDatalog (card 170) — do not remint it; WGLog is the browser port of the idea, not another CUDA WCOJ.

## Key ideas

- Semi-naïve loop is join → radix sort → fused dedup/set-difference → disjoint merge. Relations stay sorted 32-bit src/dst split arrays.
- Join is two-phase binary search into the base edge array (count then emit). Hub vertices cost O(d log N) contiguous scan, not O(d²) CAS retries.
- Indirect dispatch writes next-stage grid sizes into GPU buffers; host records K iterations (TC default 30, adaptive shrink) so WebGPU's 2.5 ms 4-byte readback is paid per *batch*, not per stage. Non-compute overhead drops to 2–4% vs 68–70% in CUDA host loops.
- Ping-pong buffers dodge WebGPU's no-alias rule; adaptive 16/24/32-bit radix from max vertex id.

## Caveats

- Evaluated on TC / same-generation / triangles — not a full Soufflé. Standing-rule programs with many relations still need a front-end.
- Browser path is Chromium Dawn. Firefox/Safari WebGPU gaps (subgroups, timestamp queries) are real.
- Small graphs lose to CUDA (wing 0.40×) because WebGPU fixed overhead dominates; the win is terascale closures on consumer GPUs.

## Links

- arXiv: [2607.17571](https://arxiv.org/abs/2607.17571)
