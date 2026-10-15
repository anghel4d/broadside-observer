---
title: "Vec-QMDP: Vectorized POMDP Planning on CPUs for Real-Time Autonomous Driving"
authors:
  - "Xuanjin Jin"
  - "Yanxin Dong"
  - "Bin Sun"
  - "Huan Xu"
  - "Zhihui Hao"
  - "XianPeng Lang"
  - "Panpan Cai"
year: 2026
venue: "arXiv"
arxiv: "2602.08334"
doi: null
source: "https://arxiv.org/abs/2602.08334"
topics:
  - "data-oriented-design"
  - "simd"
  - "tree-search"
  - "planning-under-uncertainty"
seed_rank: 2302
seed_batch: "craft-2026-10-15"
reviewed: "2026-10-15"
pool: "game-ai"
relevance_score: 7
lineage: mcts
cites:
  - title: "Vec-QMDP: Vectorized POMDP Planning on CPUs for Real-Time Autonomous Driving"
    url: "https://arxiv.org/abs/2602.08334"
    year: 2026
    arxiv: "2602.08334"
    doi: null
see:
  - "345-structure-of-arrays-and-data-layout-for-simd"
  - "354-parallel-monte-carlo-tree-search"
  - "1009-bandit-based-monte-carlo-planning"
---

# Vec-QMDP: Vectorized POMDP Planning on CPUs for Real-Time Autonomous Driving

## One-sentence takeaway

Re-laying a belief-tree planner out data-oriented — SoA node arrays, pre-allocated array trees, scenario sub-trees per core and scenarios per SIMD lane, plus a vectorized STR-tree for broad-phase collision — makes CPU POMDP search 227–1073× faster than serial planners with millisecond latency, beating GPU hybrids that drown in host–device sync and divergence.

## Why it matters here

GRID COMMAND-style unit AI and any MCTS/rollout planner in the engine face the same shape of problem: many sampled futures, cheap per-step dynamics, collision/visibility checks. This is a concrete DOD recipe for batching rollouts across SIMD lanes and cores on the CPU side, where game AI usually lives, instead of reaching for the GPU.

## Key ideas

- **QMDP decomposition.** After the first action, the belief tree splits into independent per-scenario sub-trees (one sampled future world each) — embarrassingly parallel structure.
- **Hierarchical parallelism.** M CPU threads each own disjoint scenario sub-trees; inside a thread, *global vectorization* batches transition dynamics across N scenarios in SIMD lanes, and *local vectorization* accelerates within-node collision checks.
- **Data-oriented layout.** Belief samples, per-node statistics (Q, visits, reward, terminal/expanded flags) and cached ego states live in SoA buffers; trees have fixed max sizes so they are pre-allocated as array-based balanced hierarchies with padding — no pointers, no allocation in the loop.
- **Masked lanes + UCB load balancing.** Lanes are masked as rollouts hit horizon or terminal; UCB-based selection balances work across trees so SIMD groups don't idle on one long lane.
- **Vectorized broad phase.** A Frenet-frame Sort-Tile-Recursive tree of exogenous-agent AABBs is traversed with SIMD; leaf hits gather candidate agents into vector registers for narrow phase.
- **Result.** State-of-the-art closed-loop driving scores on large-scale benchmarks at millisecond planning time, without training data.

## Caveats

QMDP assumes uncertainty resolves after one step (no information-gathering actions), which suits short-horizon reactive control but not deep scouting/fog-of-war reasoning. Domain is autonomous driving (Li Auto co-authors); speedups are versus serial planners, and the code release status is via a project website. Preprint (v2 2026-06-20).

## Links

- arXiv abstract: https://arxiv.org/abs/2602.08334
- PDF: https://arxiv.org/pdf/2602.08334
- Project page: https://sii-boluomonster.github.io/VecQMDP-website
