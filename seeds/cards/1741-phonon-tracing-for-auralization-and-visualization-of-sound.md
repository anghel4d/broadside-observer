---
title: "Phonon Tracing for Auralization and Visualization of Sound"
authors: ["Martin Bertram", "Eduard Deines", "Jan Mohring", "Jevgenij Jegorovs", "Hans Hagen"]
year: 2005
venue: "IEEE Visualization"
arxiv: null
doi: "10.1109/VIS.2005.78"
source: "https://doi.org/10.1109/VIS.2005.78"
topics: [phonon-tracing, auralization, phonon-mapping, geometric]
seed_rank: 1741
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 9
lineage: geometric-acoustics
cites:
  - title: "Calculating the acoustical room response by the use of a ray tracing technique"
    url: "https://doi.org/10.1016/0022-460X(68)90198-3"
    year: 1968
    arxiv: null
    doi: "10.1016/0022-460X(68)90198-3"
see:
  - "1677-calculating-the-acoustical-room-response-by-the-use-of-a-ray-tracing"
  - "1669-the-room-acoustic-rendering-equation"
---

# Phonon Tracing for Auralization and Visualization of Sound

## One-sentence takeaway

Phonon tracing: pack sound energy into particles (phonons) for coupled auralization *and* visualization — Bertram et al. IEEE Vis 2005.

## Why it matters here

Graphics-friendly GA: like photon mapping for acoustics. Useful for Anoptic debug views (see the rays) and as a conceptual cousin of Krokstad rays with visualization. Not the production tracer (that's GSound/BDPT).

## Key ideas

- **Phonons as energy packets.** Trace, splat to listener / to a visual.
- **IEEE Visualization 2005.** Harvest phonon-mapping / geometric.
- **Auralization + viz.** Dual product for tools.
- **Geometric MC.**

## Caveats

2005 vis paper; not MagLS, not wave. Phonon count vs noise. Don't confuse with solid-state phonons.

## Links

- DOI: https://doi.org/10.1109/VIS.2005.78
