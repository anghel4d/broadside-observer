---
title: "On-line Learning of Parametric Mixture Models for Light Transport Simulation"
authors:
  - "Jiří Vorba"
  - "Ondřej Karlík"
  - "Martin Šik"
  - "Tobias Ritschel"
  - "Jaroslav Křivánek"
year: 2014
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/2601097.2601203"
source: "https://cgg.mff.cuni.cz/~jaroslav/papers/2014-onlinelearn/"
topics:
  - "path-guiding"
seed_rank: 1379
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: path-guiding
cites:
  - title: "Global Illumination using Photon Maps"
    url: "https://graphics.stanford.edu/papers/photon-maps/"
    year: 1996
    arxiv: null
    doi: null
  - title: "Practical Path Guiding for Efficient Light-Transport Simulation"
    url: "https://tom94.net/data/publications/mueller17practical/mueller17practical.pdf"
    year: 2017
    arxiv: null
    doi: "10.1111/cgf.13227"
see:
  - "374-global-illumination-using-photon-maps"
---

# On-line Learning of Parametric Mixture Models for Light Transport Simulation

## One-sentence takeaway

Learn a Gaussian mixture of incident illumination while you render, then importance-sample it — the path-guiding paper the field still starts from.

## Why it's lovely

Why you might love this: THE path-guiding paper. A mixture that learned where the light actually is, and production never went back.

## Problem

Path tracing wastes almost every bounce in a door-crack or caustic scene. Photon maps help but are biased and memory-heavy. A guiding distribution has to be learned from the same noisy samples you are trying to improve, online, without a second render.

## Design

- Parametric mixture (GMMs) of incident radiance, trained on-line from path samples.
- One mixture per spatial cache region; sampled as a product with BSDF for the next direction.
- Adapts during the render; no precomputed photon pass required for the guiding field.
- Works with unidirectional PT and with adjoint particle tracing for the training signal.

## Evidence

SIGGRAPH 2014 / TOG. Became the citation every later guiding paper (Müller 2017, production course 2019, NRC 2021) has to beat. Production renderers adopted the idea within a few years.

## Limitations

GMM fit is CPU-era; realtime needs a different representation (quad-trees, MLPs). Mixes poorly with highly specular chains. Not a GI cache — it only reshapes the sampler.

## Implications for Broadside

Anoptic offline/reference PT (and any future realtime PT) should treat Vorba as the guiding ancestor. Photon maps (374) are the biased cousin; NRC is the neural grandchild.

## Bottom line

Mint Vorba 2014. Path guiding starts here.

## Links

- DOI: [10.1145/2601097.2601203](https://doi.org/10.1145/2601097.2601203)
- URL: https://cgg.mff.cuni.cz/~jaroslav/papers/2014-onlinelearn/
