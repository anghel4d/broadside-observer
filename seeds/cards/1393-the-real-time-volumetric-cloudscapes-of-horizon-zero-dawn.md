---
title: "The Real-Time Volumetric Cloudscapes of Horizon Zero Dawn"
authors:
  - "Andrew Schneider"
year: 2015
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://advances.realtimerendering.com/s2015/index.html"
topics:
  - "nubis"
  - "volumetric-clouds"
  - "horizon"
seed_rank: 1393
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: sky-atmosphere
cites:
  - title: "Precomputed Atmospheric Scattering"
    url: "https://hal.inria.fr/inria-00288758/"
    year: 2008
    arxiv: null
    doi: "10.1111/j.1467-8659.2008.01245.x"
  - title: "Physically Based Sky, Atmosphere and Cloud Rendering in Frostbite"
    url: "https://www.ea.com/frostbite/news/physically-based-sky-atmosphere-and-cloud-rendering"
    year: 2016
    arxiv: null
    doi: null
see:
  - "1357-decima-engine-advances-in-lighting-and-aa"
---

# The Real-Time Volumetric Cloudscapes of Horizon Zero Dawn

## One-sentence takeaway

Nubis 1: the volumetric cloud shader that made game skies look like nature documentaries.

## Why it's lovely

Why you might love this: Clouds as a volume, not a skybox. Guerrilla's Nubis — still the cloud talk everyone clones.

## Problem

Skyboxes and layered 2D clouds cannot hold a camera that flies, orbits, and sunsets. True volumetric clouds were film-only. Games needed a ray-marched volume that art-directs into a recognizable sky.

## Design

- Ray-marched volumetric clouds with a weather map + 3D noise (Nubis).
- Energy-ish lighting (Beer–Powder, ambient approximation) cheap enough for PS4.
- SIGGRAPH Advances 2015; advances.realtimerendering.com is the artifact.
- Later Nubis Evolved / Cubed extend this — mint Evolved separately, do not remint Decima 1357.

## Evidence

Shipped in HZD; every UE/Unity volumetric-cloud plugin is a Nubis descendant. The 2015 slides are the paper.

## Limitations

Approximated multiple scattering. Not a full atmosphere (that's Bruneton/Hillaire). Horizon-line issues at scale.

## Implications for Broadside

Anoptic sky: Nubis for clouds, Bruneton 2008 / Hillaire Frostbite for atmosphere. Distinct from Decima lighting (1357).

## Bottom line

Mint Nubis 1. The cloud shader of the decade.

## Links

- URL: https://advances.realtimerendering.com/s2015/index.html
