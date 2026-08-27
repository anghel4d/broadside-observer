---
title: "Practical Realtime Strategies for Accurate Indirect Occlusion"
authors:
  - "Jorge Jimenez"
  - "Xian-Chun Wu"
  - "Angelo Pesce"
  - "Adrian Jarabo"
year: 2016
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://www.activision.com/cdn/research/Practical_Real_Time_Strategies_for_Accurate_Indirect_Occlusion_NEW.pdf"
topics:
  - "GTAO"
  - "AO"
seed_rank: 1387
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 8
lineage: realtime-gi
cites:
  - title: "Horizon-Based Ambient Occlusion"
    url: "https://developer.download.nvidia.com/presentations/2008/SIGGRAPH/HBAO_SIG08b.pdf"
    year: 2008
    arxiv: null
    doi: null
  - title: "Scalable Ambient Obscurance"
    url: "https://casual-effects.com/research/McGuire2012SAO/index.html"
    year: 2012
    arxiv: null
    doi: "10.1145/2159616.2159630"
  - title: "Finding Next Gen: CryEngine 2 (SSAO)"
    url: "https://www.crytek.com/download/Finding_NextGen_CryEngine2.pdf"
    year: 2007
    arxiv: null
    doi: null
see:
  - "401-horizon-based-ambient-occlusion"
  - "1349-scalable-ambient-obscurance"
  - "484-finding-next-gen-cryengine-2-ssao"
---

# Practical Realtime Strategies for Accurate Indirect Occlusion

## One-sentence takeaway

GTAO: ground-truth-matched horizon AO that replaced HBAO in most engines.

## Why it's lovely

Why you might love this: THE AO paper after HBAO. A cosine-weighted horizon that actually matches a path-traced reference, and it's cheap.

## Problem

SSAO is a blob. HBAO (401) is better but still a heuristic vs true integrated visibility. Games needed AO that looks like the first bounce of a cosine lobe, at 60 Hz, without becoming another SSAO clone.

## Design

- Integrate visibility over a cosine-weighted hemisphere using horizon angles in screen space (GTAO).
- Match a path-traced reference of indirect occlusion, not a dark-crease aesthetic.
- Practical: noise, cache, temporal, and a bent-normal / color-bleed path for 'accurate indirect occlusion' not just a grayscale multiply.
- Activision SIGGRAPH Advances 2016 PDF is the paper.

## Evidence

Shipped in Call of Duty-class titles; became the default AO in Unreal/Unity/custom after 2016. Not a remint of McGuire SAO (1349) or HBAO (401).

## Limitations

Still screen-space. Does not replace GI. Bent normals help but do not transport energy around corners.

## Implications for Broadside

Anoptic's AO line is HBAO (401) → SAO (1349) → GTAO (this). Do not remint SAO. Use GTAO as the production occlusion term next to Lumen/RC.

## Bottom line

Mint GTAO. The AO that replaced HBAO.

## Links

- URL: https://www.activision.com/cdn/research/Practical_Real_Time_Strategies_for_Accurate_Indirect_Occlusion_NEW.pdf
