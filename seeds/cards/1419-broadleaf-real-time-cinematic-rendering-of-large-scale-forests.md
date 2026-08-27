---
title: "BroadLeaf: Real-Time Cinematic Rendering of Large-Scale Forests"
authors:
  - "Yixin Hu"
  - "Yuewei Shao"
  - "Jinzhao Zhan"
year: 2023
venue: "GDC 2023"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1028728/BroadLeaf-Real-Time-Cinematic-Rendering"
topics:
  - "foliage"
  - "lod"
  - "gpu-driven"
  - "forest"
seed_rank: 1419
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: china-graphics
cites:
  - title: "Between Tech and Art: The Vegetation of Horizon Zero Dawn"
    url: "https://www.gdcvault.com/play/1025129/Between-Tech-and-Art-The"
    year: 2018
    arxiv: null
    doi: null
  - title: "Real-time Realistic Rendering and Lighting of Forests"
    url: "https://hal.inria.fr/hal-00649787/"
    year: 2012
    arxiv: null
    doi: "10.1111/j.1467-8659.2012.03014.x"
---

# BroadLeaf: Real-Time Cinematic Rendering of Large-Scale Forests

## One-sentence takeaway

THE shipping Chinese foliage talk. Hierarchical leaf LOD, 120k trees, explicit leaf geo. Tencent.

## Why it's lovely

Why you might love this: A cinematic forest that is still a game. Tencent BroadLeaf — leaves as geometry, not a postcard impostor.

## Problem

Western near-equivalents (HZD Team Green, Tsushima grass) do not substitute for a Tencent open-world forest with explicit leaves at 120k trees. Need hierarchical leaf LOD that holds a cinematic camera.

## Design

- Hierarchical leaf LOD, GPU-driven.
- Explicit leaf geometry at near LODs rather than camera-facing cards only.
- GDC 2023 Vault play/1028728; Tencent Games.
- Do not drop for HZD/Tsushima — China-shelf rule.

## Evidence

THE shipping Chinese foliage talk. 120k trees, cinematic. Vault is the paper.

## Limitations

Talk. Not Bruneton forest lighting (that's the academic lighting card). Not a wind-sim paper.

## Implications for Broadside

Anoptic cinematic woods on the China shelf: BroadLeaf for LOD, Bruneton 2012 for lighting, HZD for photogrammetry pipeline. Keep all three.

## Bottom line

Mint BroadLeaf. Tencent cinematic forests.

## Links

- URL: https://www.gdcvault.com/play/1028728/BroadLeaf-Real-Time-Cinematic-Rendering
