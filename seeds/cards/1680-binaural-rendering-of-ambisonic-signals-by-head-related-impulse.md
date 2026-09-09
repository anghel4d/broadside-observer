---
title: "Binaural rendering of Ambisonic signals by head-related impulse response time alignment and a diffuseness constraint"
authors: ["Markus Zaunschirm", "Christian Schörkhuber", "Robert Höldrich"]
year: 2018
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.5040489"
source: "https://doi.org/10.1121/1.5040489"
topics: [hrtf, binaural, ambisonics, itd-ild, vr-ar]
seed_rank: 1680
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: ambisonics-binaural
cites:
  - title: "HRTF measurements of a KEMAR"
    url: "https://doi.org/10.1121/1.412407"
    year: 1995
    arxiv: null
    doi: "10.1121/1.412407"
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
see:
  - "1675-hrtf-measurements-of-a-kemar"
  - "1684-the-cipic-hrtf-database"
---

# Binaural rendering of Ambisonic signals by head-related impulse response time alignment and a diffuseness constraint

## One-sentence takeaway

MagLS binaural Ambisonics: time-align HRIRs (ITD) then magnitude-least-squares match the HRTF above a cutoff — the HOA→headphone decoder everyone actually uses.

## Why it matters here

GRID COMMAND VR will decode Ambisonic beds to headphones. Zaunschirm/Schörkhuber/Höldrich 2018 is the JASA recipe: align onset, MagLS at high frequency, diffuseness constraint so timbre doesn't notch. Pair with SADIE/CIPIC HRTFs, not with Triton parameters.

## Key ideas

- **HRIR time alignment.** Pull ITD out as a delay so the LS fit isn't fighting linear phase.
- **Magnitude least squares.** Above ~kHz, fit |HRTF| because phase is spatial-aliasing soup at HOA order N.
- **Diffuseness constraint.** Regularize so diffuse fields stay diffuse after decode.
- **JASA 2018.** Canonical MagLS; later iMagLS/masked MagLS (1716, 1747) tweak the loss.

## Caveats

Needs an HRTF set (measured KEMAR/CIPIC/SADIE, not a baked wave field). HOA order vs sweet-spot/aliasing is a budget. Not a room-acoustics paper.

## Links

- DOI: https://doi.org/10.1121/1.5040489
