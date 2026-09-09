---
title: "GSound: Interactive Sound Propagation for Games"
authors: ["Carl Schissler", "Dinesh Manocha"]
year: 2011
venue: "AES 41st Conference: Audio for Games"
arxiv: null
doi: null
source: "http://gamma-web.iacs.umd.edu/GSOUND/gsound_aes41st.pdf"
topics: [games, ray-tracing, path-caching, utd]
seed_rank: 1671
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "Modeling Acoustics in Virtual Environments Using the Uniform Theory of Diffraction"
    url: "https://doi.org/10.1145/383259.383323"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383323"
  - title: "A Beam Tracing Approach to Acoustic Modeling for Interactive Virtual Environments"
    url: "https://doi.org/10.1145/280814.280818"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280818"
see:
  - "1660-modeling-acoustics-in-virtual-environments-using-the-uniform-theory-of"
  - "1659-a-beam-tracing-approach-to-acoustic-modeling-for-interactive-virtual"
---

# GSound: Interactive Sound Propagation for Games

## One-sentence takeaway

GSound: an AES Audio-for-Games ray tracer with path caching and UTD — the 2011 practical UNC/Manocha game-audio system.

## Why it matters here

Before Triton wave bakes, this is how you ship geometric acoustics in a title: cache ray/UTD paths, update incrementally. Anoptic can steal the cache policy even if the tracer is Embree.

## Key ideas

- **Ray tracing + UTD.** Specular rays and diffracted edge paths for games.
- **Path caching.** Persistent paths; invalidate on mover/listener motion rather than full retrace.
- **AES 41st (Audio for Games) 2011.** Schissler & Manocha; PDF on UNC GAMMA.
- **Ancestor of 2014 high-order diffraction TOG (1664).**

## Caveats

Geometric, high-frequency. Path cache staleness vs fully dynamic destruction. No DOI in harvest; HTML/PDF from GAMMA. Not a wave solver.

## Links

- PDF: http://gamma-web.iacs.umd.edu/GSOUND/gsound_aes41st.pdf
