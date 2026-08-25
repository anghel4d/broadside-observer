---
title: "Rendering techniques in Toy Story 3"
authors: ["John-Paul Ownby", "Robert Hall", "Christopher Hall"]
year: 2010
venue: "SIGGRAPH Courses"
arxiv: null
doi: null
source: "https://advances.realtimerendering.com/s2010/Ownby,Hall%20and%20Hall%20-%20Toystory3%20(SIGGRAPH%202010%20Advanced%20RealTime%20Rendering%20Course).pdf"
topics:
  - "ambient-occlusion"
seed_rank: 1350
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: ambient-occlusion
cites:
  - title: "Volumetric obscurance"
    url: "https://doi.org/10.1145/1730804.1730829"
    year: 2010
    arxiv: null
    doi: "10.1145/1730804.1730829"
see:
  - "1349-scalable-ambient-obscurance"
  - "401-horizon-based-ambient-occlusion"
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1355-metal-gear-solid-v-graphics-study"
---

# Rendering techniques in Toy Story 3

## One-sentence takeaway

Avalanche / Disney SIGGRAPH 2010 course: SSAO via line integrals over a per-pixel sphere — sample in 2D, each tap is a fractional occlusion. The "Line Integral SSAO" Courrèges names in Fox.

## Problem

Classic SSAO samples a 3D hemisphere and projects back to a 2D depth buffer; samples clump and each tap is a binary hit. Need smoother AO that rotates in 2D.

## Design

For each pixel, consider a sphere; subdivide it into line-shaped volumes; one depth tap per line gives a fractional occupancy; weighted sum is AO. Ownby credits discussions with Peter-Pike Sloan; Loos–Sloan I3D 2010 "Volumetric obscurance" is the paper behind the idea (cited, not reminted). Fox (Courrèges): 2 symmetric sample pairs + center = 5 taps, half-res, stored with linear depth, then a depth-aware blur.

## Evidence

SIGGRAPH 2010 Advances in Real-Time Rendering course. Official title: "Rendering techniques in Toy Story 3". PDF on advances.realtimerendering.com (HTTP 200). Course page lists Ownby, Robert Hall, Christopher Hall (Avalanche / Disney). Courrèges 2017: "Line Integral SSAO is the ambient occlusion technique Avalanche Software used in Disney's Toy Story 3 game … well explained in this 2010 Siggraph talk."

## Limitations

Course slides, not a DOI paper. Not by Bavoil (HBAO). Loos–Sloan is the academic line-integral paper; this is the game talk Courrèges named.

## Implications for Broadside

Fox combined this with SAO (1349) in two passes. If Anoptic wants cheap contact darkening, this is the 5-tap half-res recipe that shipped.

## Bottom line

Mint the real TS3 course title and PDF. Cite Loos–Sloan; do not invent a Bavoil "Line Integral SSAO" paper.

## Links

- Course PDF: https://advances.realtimerendering.com/s2010/Ownby,Hall%20and%20Hall%20-%20Toystory3%20(SIGGRAPH%202010%20Advanced%20RealTime%20Rendering%20Course).pdf
- Course page: https://advances.realtimerendering.com/s2010/
- Loos–Sloan Volumetric Obscurance DOI: https://doi.org/10.1145/1730804.1730829
