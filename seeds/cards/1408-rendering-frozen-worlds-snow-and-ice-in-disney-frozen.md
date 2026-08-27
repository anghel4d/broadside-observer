---
title: "Rendering Frozen Worlds: Snow and Ice in Disney Frozen"
authors:
  - "Mohit Kallianpur"
  - "Andrew Selle"
year: 2013
venue: "SIGGRAPH Talks"
arxiv: null
doi: null
source: null
topics:
  - "frozen"
  - "ice-palace"
seed_rank: 1408
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 8
lineage: snow
cites:
  - title: "A Material Point Method for Snow Simulation"
    url: "https://www.math.ucla.edu/~jteran/papers/SSCTS13.pdf"
    year: 2013
    arxiv: null
    doi: "10.1145/2461912.2461948"
---

# Rendering Frozen Worlds: Snow and Ice in Disney Frozen

## One-sentence takeaway

Lookdev of Frozen's ice palace and snow as volume/SSS. The shading half of Stomakhin MPM.

## Why it's lovely

Why you might love this: The palace that is a shader. Ice as volume and SSS, snow as a continuum's appearance — not a texture.

## Problem

MPM makes snow move; someone still has to shade packed snow, blown crystals, and a transparent ice palace that is a set, not a sim. Film lookdev, SIGGRAPH Talks 2013.

## Design

- Snow and ice as volumetric / SSS lookdev on top of the MPM show.
- Ice palace lighting: absorption, internal structure, not a glass BSDF only.
- Harvest has no URL/DOI — SIGGRAPH Talks 2013, Kallianpur & Selle. Do not invent a dl.acm link.
- Not 'The Design of Ice in Frozen' leftover.

## Evidence

The look of Frozen. Companion to Stomakhin MPM (1395). Talk, not a TOG paper.

## Limitations

No sourced URL. Film, not game. Sparkle at the microfacet level is Yan 2014.

## Implications for Broadside

Anoptic ice: this for lookdev intent, Yan glints for sparkle, game snow cards for interaction.

## Bottom line

Mint Frozen Worlds. Shading half of MPM snow.

## Links

- Venue: SIGGRAPH Talks (2013; no URL in harvest)
