---
title: "Physically Based Sky, Atmosphere and Cloud Rendering in Frostbite"
authors:
  - "Sebastien Hillaire"
year: 2016
venue: "SIGGRAPH Physically Based Shading course"
arxiv: null
doi: null
source: "https://www.ea.com/frostbite/news/physically-based-sky-atmosphere-and-cloud-rendering"
topics:
  - "frostbite"
  - "clouds"
  - "atmosphere"
seed_rank: 1394
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
  - title: "Moving Frostbite to Physically Based Rendering"
    url: "https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf"
    year: 2014
    arxiv: null
    doi: null
see:
  - "267-moving-frostbite-to-physically-based-rendering"
---

# Physically Based Sky, Atmosphere and Cloud Rendering in Frostbite

## One-sentence takeaway

Production sky plus clouds: Frostbite's physically based atmosphere, the Nubis counterpart that engines actually copied into PBR stacks.

## Why it's lovely

Why you might love this: Hillaire's sky. LUT atmosphere + volumetric clouds, in the same course notes as Frostbite PBR.

## Problem

Games shipped a cubemap sky, a Mie blob sun, and clouds that didn't share a coordinate system with the atmosphere. PBR materials looked wrong against a fake sky. Need one physically based sky+cloud+atmosphere path.

## Design

- Bruneton-class atmosphere LUTs, productionized (later EGSR 2020 is the cheaper sequel — not this card).
- Volumetric clouds lit consistently with the atmosphere.
- Aerial perspective as a first-class term, not a fog overlay.
- SIGGRAPH Physically Based Shading course 2016; EA Frostbite writeup.

## Evidence

Frostbite titles; UE/Unity sky atmospheres are Hillaire-shaped. Course notes are the paper.

## Limitations

2016 production approximations; 2020 EGSR paper improved multiple scattering (leftover, not minted). Not Nubis (Guerrilla's cloud art direction is different).

## Implications for Broadside

Anoptic sky stack: this + Bruneton 2008 (LUTs) + Nubis (cloudscapes). Frostbite PBR (267) is the ground materials sibling.

## Bottom line

Mint Hillaire 2016. Production sky+atmosphere+clouds.

## Links

- URL: https://www.ea.com/frostbite/news/physically-based-sky-atmosphere-and-cloud-rendering
