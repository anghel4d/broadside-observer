---
title: "Acoustic modeling using the digital waveguide mesh"
authors: ["Damian T. Murphy", "Antony Kelloniemi", "Jonathan Mullen", "Simon Shelley"]
year: 2007
venue: "IEEE Signal Processing Magazine"
arxiv: null
doi: "10.1109/MSP.2007.323276"
source: "https://doi.org/10.1109/MSP.2007.323276"
topics: [waveguide-mesh, wave, survey]
seed_rank: 1689
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 8
lineage: wave-based-acoustics
cites:
  - title: "Physical Audio Signal Processing"
    url: "https://ccrma.stanford.edu/~jos/pasp/"
    year: 2010
    arxiv: null
    doi: null
see:
  - "1761-reducing-the-dispersion-error-in-the-digital-waveguide-mesh-using"
  - "1752-the-kw-boundary-hybrid-digital-waveguide-mesh-for-room-acoustics"
---

# Acoustic modeling using the digital waveguide mesh

## One-sentence takeaway

Digital waveguide mesh (DWM) survey: Kirchhoff/rectilinear meshes as cheap wave-equation toys for rooms and resonators.

## Why it matters here

If Anoptic wants a *tiny* wave toy (instrument body, small room) without FVTD machinery, DWM is the DSP-native formulation (Smith/Savioja lineage). Murphy 2007 IEEE SPM is the readable map; dispersion fixes are Savioja 2000 (1761).

## Key ideas

- **Waveguide mesh.** Scattering junctions on a grid; travel-time = delay-line hops.
- **Rooms and objects.** Same family as 1-D Karplus-Strong / digital waveguides, lifted to 2-D/3-D.
- **IEEE Signal Processing Magazine 2007.** Accessible survey, not a new scheme.
- **Sibling of FDTD.** Different stencil culture; same Courant/dispersion pain.

## Caveats

Dispersion and boundary artifacts are famous; not a production auralizer. Offline/research. Do not remint FMM Helmholtz.

## Links

- DOI: https://doi.org/10.1109/MSP.2007.323276
