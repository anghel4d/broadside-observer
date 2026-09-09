---
title: "The Room Acoustic Rendering Equation"
authors: ["Samuel Siltanen", "Tapio Lokki", "Lauri Savioja"]
year: 2007
venue: "Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.2766781"
source: "https://doi.org/10.1121/1.2766781"
topics: [radiance-transfer]
seed_rank: 1677
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 10
lineage: geometric-acoustics
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
see:
  - "152-the-rendering-equation"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# The Room Acoustic Rendering Equation

## One-sentence takeaway

Write room acoustics as an acoustic rendering equation (surface radiance / radiosity analog of Kajiya) so diffuse multi-bounce has a linear integral operator.

## Why it matters here

Specular beams miss the muddy late field. Siltanen/Lokki/Savioja 2007 is acoustic radiosity: discretize surfaces, transport energy like GI. The conceptual twin of Kajiya 152 and a cousin of radiance cascades 005 — energy on surfaces, not probes. Frequency-domain ART follows in 1743.

## Key ideas

- **Acoustic rendering equation.** Outgoing acoustic 'radiance' = emitted + reflected incident, with time delays.
- **Surface discretization.** Form-factor-like unoccluded transport between patches (diffuse Lambert-like walls).
- **Time-resolved.** Delays make it an IR, not a steady radiosity bake.
- **JASA 2007.** Aalto; harvest ~101 cites.

## Caveats

Diffuse-surface assumption; specular and diffraction are other operators. Not realtime without the compact-operator / frequency-domain follow-ons (1707, 1743). Do not remint Kajiya 152.

## Links

- DOI: https://doi.org/10.1121/1.2766781
