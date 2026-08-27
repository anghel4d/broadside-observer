---
title: "Water Technology of Uncharted"
authors:
  - "Carlos Gonzalez-Ochoa"
year: 2012
venue: "GDC"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1015517/Water-Technology-of"
topics:
  - "uncharted"
  - "lod-mesh"
  - "flow-shader"
  - "storm"
seed_rank: 1396
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: water
cites:
  - title: "Simulating Ocean Water"
    url: "https://people.computing.clemson.edu/~jtessen/reports/papers_files/coursenotes2002.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "Real-time Realistic Ocean Lighting using Seamless Transitions from Geometry to BRDF"
    url: "https://hal.inria.fr/inria-00443630/"
    year: 2010
    arxiv: null
    doi: "10.1111/j.1467-8659.2010.01735.x"
---

# Water Technology of Uncharted

## One-sentence takeaway

Naughty Dog water: puddles to cruise-ship storm, hierarchical LOD displacement, artistic PBR water.

## Why it's lovely

Why you might love this: Game-ocean cream. One hierarchy from a wet street to a ship-killing sea, and it played.

## Problem

A linear adventure needs puddles, rivers, and an open-ocean storm in one engine, with an art-directable look, not a research FFT that the camera never leaves. SIGGRAPH companion talks exist — mint the GDC talk, skip the SIGGRAPH twin.

## Design

- Hierarchical LOD displacement mesh from close foam to distant ocean.
- Flow shaders for rivers/puddles vs spectrum water for the sea.
- Artistic PBR: not a full ocean BRDF paper (that's Bruneton 2010).
- GDC 2012 Vault talk is the paper of record. Do not also mint 'From a Calm Puddle to a Stormy Ocean' SIGGRAPH 2012.

## Evidence

Shipped in Uncharted 3. The GDC talk every later game-water deck cites.

## Limitations

Talk. Tessendorf/Bruneton are the theory cards. No public code.

## Implications for Broadside

Anoptic water: Uncharted for production LOD, Tessendorf for spectrum, Bruneton 2010 for lighting, Wave Particles for local wakes.

## Bottom line

Mint Uncharted water (GDC). Skip the SIGGRAPH companion.

## Links

- URL: https://www.gdcvault.com/play/1015517/Water-Technology-of
