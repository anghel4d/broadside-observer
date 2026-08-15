---
title: "Motion Matching and The Road to Next-Gen Animation"
authors:
  - "Simon Clavet"
year: 2016
venue: "GDC"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1023280/Motion-Matching-and-The"
topics:
  - animation
seed_rank: 329
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "FABRIK: A fast, iterative solver for the Inverse Kinematics problem"
    url: "https://doi.org/10.1016/j.gmod.2011.05.001"
    year: 2011
    arxiv: null
    doi: "10.1016/j.gmod.2011.05.001"
see:
  - "346-fabrik-a-fast-iterative-solver-for-the-inverse-kinematics-pr"
---

# Motion Matching and The Road to Next-Gen Animation

## One-sentence takeaway

Clavet’s GDC 2016 Ubisoft talk replaces hand-authored transition graphs with a per-frame nearest-neighbor search over a huge motion database, matching pose, trajectory, and gameplay intent.

## Why it matters here

GRID COMMAND and Anoptic character locomotion need responsive animation without an unmaintainable state machine; motion matching is the industrial alternative that later learned-motion work still sits on.

## Key ideas

- Each frame is a feature vector: current pose (joint positions/velocities), a short predicted root trajectory, and high-level desire (speed, facing, action tags).
- Every tick, search the database for the frame whose features are closest and whose continuation is valid; jump there instead of blending through a canned transition.
- Quality comes from data density and good features, not from more graph edges. Ubisoft used it in *For Honor*.
- Cost is a well-indexed kNN over tens of thousands of frames; the talk covers PCA / grouping tricks to keep it in budget.
- GDC Vault: “Motion Matching and The Road to Next-Gen Animation,” Simon Clavet, 2016.

## Caveats

## Links

- GDC Vault: https://www.gdcvault.com/play/1023280/Motion-Matching-and-The
