---
title: 'Finding Next Gen: CryEngine 2 (SSAO)'
authors:
- Martin Mittring
year: 2007
venue: SIGGRAPH Course
arxiv: null
doi: null
source: https://www.crytek.com/download/Presentations/FindingNextGen-CryEngine2.pdf
topics:
- ssao
- ao
seed_rank: 735
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: graphics
relevance_score: 8
lineage: screen-space-ao
cites:
- title: Horizon-Based Ambient Occlusion
  url: https://developer.nvidia.com/gpugems/gpugems3/part-ii-light-and-shadows/chapter-14-horizon-based-ambient-occlusion
  year: 2008
  arxiv: null
  doi: null
  card: 484-horizon-based-ambient-occlusion
---

# Finding Next Gen: CryEngine 2 (SSAO)

## One-sentence takeaway

Crytek SSAO popularized screen-space ambient occlusion as a real-time GI approximation.

## Why it matters here

Baseline for HBAO and later AO comparisons outside the radiance-cascades spine.

## Key ideas

- Sample depth-buffer hemisphere to estimate occlusion.
- Screenspace approximation — no scene BVH.
- Industrial adoption catalyst for AO post-processes.
- Parent of HBAO refinements.

## Caveats

- Course notes; PDF hosts move.
- Not physically based GI.

## Links

- URL: https://www.crytek.com/download/Presentations/FindingNextGen-CryEngine2.pdf
