---
title: "How the Dirty Set Moves: Characterizing Schedule Reuse in Incremental Sparse Matrix Multiplication"
authors:
  - "Hunter Horne"
  - "Eric Spencer"
  - "Alex Henningfield"
  - "Arslan Bisharat"
year: 2026
venue: "arXiv"
arxiv: "2610.19489"
doi: null
source: "https://arxiv.org/abs/2610.19489"
topics:
  - "incremental-computation"
  - "sparse-matrix-multiplication"
  - "inspector-executor"
  - "performance-methodology"
seed_rank: 2328
seed_batch: "craft-2026-10-17"
reviewed: "2026-10-17"
pool: "systems"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "How the Dirty Set Moves: Characterizing Schedule Reuse in Incremental Sparse Matrix Multiplication"
    url: "https://arxiv.org/abs/2610.19489"
    year: 2026
    arxiv: "2610.19489"
    doi: null
see:
  - "1489-dbsp-automatic-incremental-view-maintenance-for-rich-query-languages"
  - "1466-adapton-composable-demand-driven-incremental-computation"
---

# How the Dirty Set Moves: Characterizing Schedule Reuse in Incremental Sparse Matrix Multiplication

## One-sentence takeaway

When a fixed sparse operator multiplies an input where only a few rows change per step, updating from just those "dirty" rows with a plain column-wise CSC kernel is 2.1–8.2× faster than the best of eight full-recompute codes (oneMKL and PyTorch among them), yet a fancier tiled inspector-executor that caches schedules loses to that plain kernel in 779 of 837 workloads.

## Why it matters here

ECS systems, rule engines and incremental UI/layout passes all face this exact choice: do the delta, and then decide whether to build cached "schedules" around it. This paper measures it carefully and lands on a rule you can act on: delta execution is the first-order win; schedule reuse is second-order and only pays when tiles merge many entries into each output write and the session is long. It also warns that a 2.5× kernel win can shrink to 0.87× once the whole pipeline (profile maintenance, building the compact update, ranking) is charged, which is the right humility for any Anoptic hot-path claim.

## Key ideas

- **Dirty set.** The input rows that changed this step; the result can be patched from those rows alone, and *how* that set moves (turnover, locality, periodicity) decides what reuse pays.
- **Separate the two reuse effects.** Split the tiled executor's benefit into per-tile *preparation* (kept for the operator's lifetime) and *cached assembled schedules* (session cache). Almost all the benefit is preparation; extra cache capacity rarely helps because a tile set seldom recurs after a different one has intervened.
- **Predict before measuring.** Tiling wins only when tiles combine many entries per output row write (the TSOPF family). The authors predicted this structural property beforehand and confirmed it on four held-out matrices.
- **Guidelines.** G1 always compare against full recompute *and* direct CSC; G2 default to direct CSC; G3 keep operator preparation, enlarge session caches only for periodic workloads (otherwise up to 4.5× more buffer memory); G4 choose tiling per operator at setup time; G5 charge full pipeline and communication costs.
- **Selectors aren't free.** A learned online strategy selector costs 39.51 ms of metadata plus 53.95 µs per decision; with that charged, always picking CSC wins.
- **Scaling.** Row-partitioned full CSR scales best on multicore; across hosts every strategy slows as ranks are added because communication dominates small updates.

## Caveats

One tiled-executor design on CPUs; GPU kernels with costlier output writes may favour tiling more. Dirty-set motion is mostly synthetic (two application replays: MovieLens recommendations and air-quality windows, where specialised running sums beat every sparse strategy). The corpus is 21 preselected SuiteSparse matrices, and every stable tiling win comes from one family. Small industry/academic team; the authors note AI assistants helped draft the text.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.19489
- PDF: https://arxiv.org/pdf/2610.19489
