---
title: "Real-time Soft Shadows in Dynamic Scenes using Spherical Harmonic Exponentiation"
authors:
  - "Zhong Ren"
  - "Rui Wang"
  - "John Snyder"
  - "Kun Zhou"
  - "Xinguo Liu"
  - "Bo Sun"
  - "Peter-Pike Sloan"
  - "Hujun Bao"
  - "Qunsheng Peng"
  - "Baining Guo"
year: 2006
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1141911.1141982"
source: "https://dl.acm.org/doi/10.1145/1141911.1141982"
topics:
  - "shexp"
  - "soft-shadows"
  - "sh"
  - "dynamic"
seed_rank: 1415
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: china-graphics
cites:
  - title: "Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
  - title: "Precomputed Shadow Fields for Dynamic Scenes"
    url: "https://dl.acm.org/doi/10.1145/1073204.1073319"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073319"
see:
  - "366-precomputed-radiance-transfer"
---

# Real-time Soft Shadows in Dynamic Scenes using Spherical Harmonic Exponentiation

## One-sentence takeaway

SHEXP: all-frequency soft shadows in dynamic scenes by exponentiating SH occlusion. MSRA+ZJU, still cited in production GI stacks.

## Why it's lovely

Why you might love this: Occlusion as a log, shadows as an exp. SH that can actually do a sharp contact shadow.

## Problem

SH lighting is low-frequency; multiplying blockers in SH smears. Dynamic scenes cannot precompute a visibility vector per point. Need a closed-form way to combine occluders at runtime.

## Design

- Spherical harmonic exponentiation: represent occlusion in a log-SH domain so products of blockers become sums.
- Dynamic objects combine cheaply; all-frequency-ish soft shadows without a shadow map per light.
- SIGGRAPH 2006 / TOG, DOI 10.1145/1141911.1141982.
- MSRA / Zhejiang CAD&CG.

## Evidence

A genuine all-frequency soft-shadow primitive. Still cited next to PRT and SG papers. Halo-era cousin of Zhou shadow fields.

## Limitations

SH order still bounds the sharpness. Not a ray-traced contact. Overlaps conceptually with PRT (366) — keep both.

## Implications for Broadside

Anoptic SH lighting that needs contact: SHEXP, not a bigger SH order. Pair with shadow fields (Halo 3) and PRT (366).

## Bottom line

Mint SHEXP. Soft shadows by exponentiation.

## Links

- DOI: [10.1145/1141911.1141982](https://doi.org/10.1145/1141911.1141982)
- URL: https://dl.acm.org/doi/10.1145/1141911.1141982
