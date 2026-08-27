---
title: "Specular Manifold Sampling for Rendering High-Frequency Caustics and Glints"
authors:
  - "Tizian Zeltner"
  - "Iliyan Georgiev"
  - "Wenzel Jakob"
year: 2020
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/3386569.3392408"
source: "https://rgl.epfl.ch/publications/Zeltner2020Specular"
topics:
  - "specular-manifold"
  - "caustics"
  - "glints"
  - "refraction"
seed_rank: 1424
seed_batch: "mirrors-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: refraction
cites:
  - title: "Manifold Next Event Estimation"
    url: "https://jo.dreggn.org/home/2015_mnee.pdf"
    year: 2015
    arxiv: null
    doi: "10.1111/cgf.12681"
  - title: "Manifold Exploration: A Markov Chain Monte Carlo Technique for Rendering Scenes with Difficult Specular Transport"
    url: "https://rgl.epfl.ch/publications/Jakob2012Manifold"
    year: 2012
    arxiv: null
    doi: "10.1145/2185520.2185554"
  - title: "Path Cuts: Efficient Rendering of Pure Specular Light Transport"
    url: "https://doi.org/10.1145/3414685.3417793"
    year: 2020
    arxiv: null
    doi: "10.1145/3414685.3417793"
  - title: "Microfacet Models for Refraction through Rough Surfaces"
    url: "https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/195-206"
  - title: "Discrete Stochastic Microfacet Models"
    url: "https://www.cs.cornell.edu/projects/microfacetGlints/"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601186"
see:
  - "1422-path-cuts-efficient-rendering-of-pure-specular-light-transport"
  - "1312-microfacet-models-for-refraction-through-rough-surfaces"
  - "1412-discrete-stochastic-microfacet-models"
---

# Specular Manifold Sampling for Rendering High-Frequency Caustics and Glints

## One-sentence takeaway

Stochastic manifold walks find the specular chains that brute path tracing never samples — glass, SDS caustics, and glints in one estimator.

## Why it's lovely

Why you might love this: The refraction-chain paper that is not 'shoot more rays.' Seed a guess, Newton-walk Fermat's constraint, and the caustic is a sample, not a miracle.

## Problem

Pure-specular and high-frequency glossy chains (glass, bottles, wet streets, sparkle) have measure zero under ordinary path sampling. Photon maps cache; MNEE finds at most one deterministic seed; Path Cuts (1422) partitions a specular tree. Games and VFX need an estimator that sits inside unidirectional PT and still finds SDS and glints.

## Design

- Specular manifold: vertices that satisfy the half-vector / Snell constraint between two endpoints.
- Stochastic initialization on the caster (often from the microfacet NDF), then a Newton manifold walk as in MNEE / Jakob 2012.
- Bernoulli trials estimate the inverse discovery probability → unbiased; a fixed trial budget is the biased production variant.
- One framework covers reflection, refraction, multi-bounce specular, normal-mapped glints, and SDS.

## Evidence

SIGGRAPH / TOG 2020. Mitsuba 2 reference; Cycles already ships MNEE and research ports of SMS. Beats disjoint caustic and glint pipelines on the paper's stress scenes. Not a BVH paper.

## Limitations

Newton walks fail on badly seeded or very rough geometry. Unbiased discovery-probability estimates are high-variance; production uses the biased cutoff. Not a realtime 8 ms SSR replacement.

## Implications for Broadside

Anoptic glass, visors, puddles, and sparkle should speak SMS (or MNEE as the cheap sibling), not another ReSTIR extension or Path Cuts remint. Walter GGX (1312) is the lobe; this is how you *find* the path. Discrete glints (1412) is the microstructure primitive SMS also samples.

## Bottom line

Mint SMS. This is the specular-manifold SOTA, and it is about appearance of glass and sparkle, not faster mirrors-as-rays.
