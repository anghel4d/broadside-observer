---
title: "Image method for efficiently simulating small-room acoustics"
authors: ["Jont B. Allen", "David A. Berkley"]
year: 1979
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.382599"
source: "https://doi.org/10.1121/1.382599"
topics: [image-source, geometric, rir]
seed_rank: 1674
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 10
lineage: geometric-acoustics
---

# Image method for efficiently simulating small-room acoustics

## One-sentence takeaway

The rectangular-room image-source method: mirror the source across six walls, sum 1/r delayed impulses — still the baseline geometric RIR.

## Why it matters here

Any Anoptic shoebox (hangar, corridor) should hit Allen–Berkley before a wave bake. Closed form, trivial to SIMD, ground truth for rectangular Sabinian rooms. Everything later (beam tracing, path tracing, FDTD) is judged against this when the room is a box.

## Key ideas

- **Lattice of image sources.** Integer triples (n,l,m) of mirrored rooms; delay = distance/c, amplitude = 1/r times wall reflection coefficients.
- **Small-room speech.** Bell Labs 1979; designed for efficient simulation of office-sized rooms.
- **Baseline geometric method.** Harvest note: still the reference GA algorithm.
- **Frequency-independent walls** in the original; filters on coefficients are later practice.

## Caveats

Axis-aligned rectangular rooms only (no furniture, no diffraction). Unforced geometric: ignores modal wave physics that FDTD captures in the same box. Not a binaural BRIR unless you spatialize each image with an HRTF.

## Links

- DOI: https://doi.org/10.1121/1.382599
