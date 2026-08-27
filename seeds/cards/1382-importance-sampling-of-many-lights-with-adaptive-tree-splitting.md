---
title: "Importance Sampling of Many Lights with Adaptive Tree Splitting"
authors:
  - "Alejandro Conty Estevez"
  - "Christopher Kulla"
year: 2018
venue: "JCGT"
arxiv: null
doi: null
source: "https://jcgt.org/published/0007/01/07/"
topics:
  - "many-lights"
  - "light-tree"
  - "production"
seed_rank: 1382
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: many-lights
cites:
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073218"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073218"
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
see:
  - "1042-lightcuts-a-scalable-approach-to-illumination"
---

# Importance Sampling of Many Lights with Adaptive Tree Splitting

## One-sentence takeaway

Sony Imageworks' light BVH with adaptive splits — the production many-lights tree every engine and RTXDI still cites.

## Why it's lovely

Why you might love this: Lightcuts grew up and went to work. A tree you can actually ship in a production path tracer.

## Problem

Lightcuts (2005) clustered lights for error-bounded approximation, not for unbiased importance sampling. A modern path tracer wants a light BVH whose PDF you can sample and whose splits respect both energy and the receiver's cone.

## Design

- Build a binary light tree over emissive geometry.
- Adaptive tree splitting at shading time: traverse until a cluster is similar enough from this receiver, then sample.
- Importance is energy × orientation × (optional) BSDF-aware terms.
- Unbiased: the tree is a sampling distribution, not an approximant. JCGT 7(1), 2018.

## Evidence

JCGT 2018. Arnold/Imageworks production; the light-tree every later many-lights and ReSTIR paper treats as the candidate generator.

## Limitations

Still a per-shade traversal (ReSTIR amortizes that). Dynamic lights want refits. Not realtime by itself; the game form is ReSTIR on top of a tree like this.

## Implications for Broadside

Anoptic's many-lights stack is ATS tree (this card) + ReSTIR (1374). Lightcuts (1042) is the 2005 ancestor — do not remint it.

## Bottom line

Mint ATS. The production light-hierarchy.

## Links

- URL: https://jcgt.org/published/0007/01/07/
