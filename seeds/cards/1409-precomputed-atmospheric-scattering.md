---
title: "Precomputed Atmospheric Scattering"
authors:
  - "Eric Bruneton"
  - "Fabrice Neyret"
year: 2008
venue: "EGSR / Computer Graphics Forum"
arxiv: null
doi: "10.1111/j.1467-8659.2008.01245.x"
source: "https://hal.inria.fr/inria-00288758/"
topics:
  - "atmosphere"
  - "lut"
seed_rank: 1409
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: sky-atmosphere
---

# Precomputed Atmospheric Scattering

## One-sentence takeaway

The atmosphere LUT every engine shipped for a decade.

## Why it's lovely

Why you might love this: A 4D table that is a planet. Bruneton–Neyret scattering, still in the sky shader.

## Problem

Single-scattering analytic skies (Preetham, Hosek) miss aerial perspective and multiple scatter. Full path-traced atmospheres are film. Games needed a LUT you sample in a pixel shader.

## Design

- Precompute transmittance, inscatter, and related tables for a spherical atmosphere.
- Runtime: a few LUT taps give sky, aerial perspective, and sun.
- EGSR 2008 / CGF; HAL inria-00288758.
- Hillaire 2016/2020 are the production sequels — mint 2016, leave 2020 as leftover.

## Evidence

UE SkyAtmosphere, Frostbite, and a decade of custom engines. THE atmosphere LUT paper.

## Limitations

Precomputed for a given atmosphere model. Clouds are a separate volume (Nubis/Hillaire clouds). Not a weather sim.

## Implications for Broadside

Anoptic planet sky starts here. Hillaire 2016 for production packaging; Nubis for clouds.

## Bottom line

Mint Bruneton atmosphere. The LUT.

## Links

- DOI: [10.1111/j.1467-8659.2008.01245.x](https://doi.org/10.1111/j.1467-8659.2008.01245.x)
- URL: https://hal.inria.fr/inria-00288758/
