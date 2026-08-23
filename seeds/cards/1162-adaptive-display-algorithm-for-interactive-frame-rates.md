---
title: "Adaptive Display Algorithm for Interactive Frame Rates During Visualization of Complex Virtual Environments"
authors:
  - "Thomas A. Funkhouser"
  - "Carlo H. Séquin"
year: 1993
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/166117.166149"
source: "https://doi.org/10.1145/166117.166149"
topics:
  - "lod"
  - "frame-budget"
  - "predictive-scheduling"
  - "engines"
seed_rank: 1162
seed_batch: "archive-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: predictive-lod
cites:
  - title: "Nanite: A Deep Dive"
    url: "https://www.unrealengine.com/en-US/blog/nanite-virtualized-geometry-in-unreal-engine-5"
    year: 2021
    arxiv: null
    doi: null
  - title: "Progressive Meshes"
    url: "https://doi.org/10.1145/237348.237395"
    year: 1996
    arxiv: null
    doi: "10.1145/237348.237395"
  - title: "Surface Simplification Using Quadric Error Metrics"
    url: "https://doi.org/10.1145/258734.258849"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258849"
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
see:
  - "090-nanite-a-deep-dive"
  - "375-progressive-meshes"
  - "373-surface-simplification-using-quadric-error-metrics"
---

# Adaptive Display Algorithm for Interactive Frame Rates During Visualization of Complex Virtual Environments

## One-sentence takeaway

Pick, each frame, a LOD *and* a renderer per object by a constrained optimization against a *user-specified frame time* — predictive, not "the last frame was slow so degrade."

## Problem

Reactive detail elision (if last frame missed vsync, drop a LOD) oscillates and cannot spend a budget it has not measured yet. Progressive meshes (375) and QEM (373) *build* the LOD ladder; Nanite (90) virtualizes geometry. None of them is a *scheduler* for mixed object types (hero mesh vs impostor vs volume) under a hard frame time. GRID COMMAND and Anoptic both have a frame budget that is not only triangles.

## Design

Hierarchical model: each object has several representations (LODs × rendering algorithms) with a predicted *cost* (ms) and *benefit* (contribution to image, typically size × importance × error). Each frame, solve a multiple-choice knapsack: maximize benefit subject to Σ cost ≤ target frame time, over the potentially visible set. The paper's online algorithm is an incremental greedy adjustment from last frame's assignment, with hysteresis so objects do not flicker LOD every frame. Cost models are calibrated; visibility is an input (they use a separate PVS; hierarchical z-buffer is the 1993 sibling, already on main as 144). Tests against reactive elision: more uniform frame times, similar visual quality.

## Evidence

SIGGRAPH 1993, pp. 247–254, DOI `10.1145/166117.166149`. This is the "budgeted LOD" paper game engines still re-derive (UE scalability, Frozen/Unity LOD groups, Nanite's cluster budget is the geometry-specialized descendant). Clark 1976 hierarchical models is the LOD *representation* ancestor — notable reject this cycle (90/375 cover geometric LOD).

## Limitations

Cost prediction is a model; a shader compile, a hitch, or a GPU preemption blows it. Benefit is a heuristic, not a perceptual metric (they say so). The optimizer does not *create* LODs. Nanite makes per-object LOD selection the wrong granularity for hero geometry — keep this for *entities* (AI tick rate, animation LOD, impostors, UI, SDF gizmos from 1161), not for triangle clusters.

## Implications for Broadside

GRID COMMAND's frame is a budget across sim, pathing, and draw. Steal the knapsack: each system publishes cost/benefit, a planner fills 16.6 ms, hysteresis on quality knobs. Anoptic uses the same loop for "SDF brush vs mesh vs impostor" rather than a boolean LOD distance. Do not remint Nanite, QEM, or PM as the scheduler.

## Bottom line

Mint the predictive frame-budget paper. Geometry-LOD construction stays on 90/373/375.

## Links

- DOI: [10.1145/166117.166149](https://doi.org/10.1145/166117.166149)
- Author PDF (Princeton): https://www.cs.princeton.edu/~funk/sig93.pdf
