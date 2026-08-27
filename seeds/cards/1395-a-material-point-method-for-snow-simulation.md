---
title: "A Material Point Method for Snow Simulation"
authors:
  - "Alexey Stomakhin"
  - "Craig Schroeder"
  - "Lawrence Chai"
  - "Joseph Teran"
  - "Andrew Selle"
year: 2013
venue: "ACM TOG (SIGGRAPH)"
arxiv: null
doi: "10.1145/2461912.2461948"
source: "https://www.math.ucla.edu/~jteran/papers/SSCTS13.pdf"
topics:
  - "mpm"
  - "frozen"
  - "disney"
seed_rank: 1395
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: snow
---

# A Material Point Method for Snow Simulation

## One-sentence takeaway

Frozen's Matterhorn: snow as an elasto-plastic continuum. The constitutive look every later snow shader still chases.

## Why it's lovely

Why you might love this: Film snow that broke. MPM, not particles-as-spheres. The paper that made snow a material.

## Problem

Particle snow (SPH, grains) either looks like sand or like foam. Film needed a continuum that packs, shears, fractures, and still renders as snow — including the Disney Frozen avalanche.

## Design

- Hybrid Eulerian/Lagrangian MPM: particles carry mass and deformation, grid solves collisions and gradients.
- Elasto-plastic constitutive model tuned to snow (compaction, hardening).
- Rendering/shading rides the constitutive look — this paper is simulation, Frozen Worlds is the shading sibling.
- SIGGRAPH 2013 / TOG, DOI 10.1145/2461912.2461948.

## Evidence

Shipped as Frozen's snow. Became the default MPM citation (later MLS-MPM, Taichi). PDF on Teran's page.

## Limitations

Film-budget sim, not a game snow deform. Game snow (Batman, ROTTR, HZD, GOW) is a different primitive — mint those too. Not the Snowflake warehouse (815).

## Implications for Broadside

Anoptic film-quality snow: MPM for motion, Discrete Stochastic Microfacet for sparkle, Frozen Worlds for ice-palace shading. Game trails stay on the deferred-deform cards.

## Bottom line

Mint MPM snow. Frozen's continuum.

## Links

- DOI: [10.1145/2461912.2461948](https://doi.org/10.1145/2461912.2461948)
- URL: https://www.math.ucla.edu/~jteran/papers/SSCTS13.pdf
