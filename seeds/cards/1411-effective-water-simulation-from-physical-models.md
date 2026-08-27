---
title: "Effective Water Simulation from Physical Models"
authors:
  - "Mark Finch"
year: 2004
venue: "GPU Gems"
arxiv: null
doi: null
source: "https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models"
topics:
  - "gerstner"
  - "gpu-water"
  - "games"
seed_rank: 1411
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: water
cites:
  - title: "Simulating Ocean Water"
    url: "https://people.computing.clemson.edu/~jtessen/reports/papers_files/coursenotes2002.pdf"
    year: 2001
    arxiv: null
    doi: null
---

# Effective Water Simulation from Physical Models

## One-sentence takeaway

GPU Gems Ch.1. Gerstner on GPU; Myst/Uru production water. The games-side Tessendorf companion.

## Why it's lovely

Why you might love this: Chapter 1 of GPU Gems. Sum of sinusoids that shipped. The Gerstner water every first engine still writes.

## Problem

2004 games could not iFFT an ocean. Need a vertex-shader water that still comes from a physical model (Gerstner), with reasonable normals and a production look (Myst/Uru).

## Design

- Gerstner waves summed on the GPU.
- Normals from analytic derivatives, not finite differences only.
- GPU Gems I, Chapter 1; NVIDIA developer URL.
- Companion to Tessendorf (spectrum/FFT), not a remint of it.

## Evidence

Taught a generation of engine water. Still the right first water for a small world / lake. Myst/Uru production credit in the harvest why.

## Limitations

Not an open ocean at film quality. No foam Jacobian. Not interactive wakes.

## Implications for Broadside

Anoptic lakes and stylized seas can stay Gerstner (this). Open ocean upgrades to Tessendorf. Do not skip Finch because Tessendorf exists — different primitive.

## Bottom line

Mint Finch GPU Gems water. Gerstner, shipped.

## Links

- URL: https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models
