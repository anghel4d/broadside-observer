---
title: "Reducing the dispersion error in the digital waveguide mesh using interpolation and frequency-warping techniques"
authors: ["Lauri Savioja", "Vesa Välimäki"]
year: 2000
venue: "IEEE Trans. Speech and Audio Processing"
arxiv: null
doi: "10.1109/89.824704"
source: "https://doi.org/10.1109/89.824704"
topics: [waveguide-mesh, wave]
seed_rank: 1753
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 8
lineage: wave-based-acoustics
cites:
  - title: "Acoustic modeling using the digital waveguide mesh"
    url: "https://doi.org/10.1109/MSP.2007.323276"
    year: 2007
    arxiv: null
    doi: "10.1109/MSP.2007.323276"
see:
  - "1681-acoustic-modeling-using-the-digital-waveguide-mesh"
  - "1744-the-kw-boundary-hybrid-digital-waveguide-mesh-for-room-acoustics"
---

# Reducing the dispersion error in the digital waveguide mesh using interpolation and frequency-warping techniques

## One-sentence takeaway

Kill DWM dispersion with interpolated meshes and frequency warping (Savioja & Välimäki IEEE 2000) — the classic DSP fix.

## Why it matters here

If you still have a waveguide mesh, this is the paper. Otherwise it's historical support for the DWM survey. Anoptic: prefer FVTD/high-order FDTD for rooms; keep this if you inherited a mesh synth.

## Key ideas

- **Interpolated DWM** to reduce direction-dependent dispersion.
- **Frequency warping** to remap remaining error.
- **IEEE Trans. Speech and Audio 2000.** Harvest waveguide-mesh.
- **Aalto + Välimäki.** Same names as 50-years reverb.

## Caveats

Doesn't make DWM a game auralizer. 2D/3D mesh still scales poorly. Not FDTD high-order 2017.

## Links

- DOI: https://doi.org/10.1109/89.824704
