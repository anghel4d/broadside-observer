---
title: "HRTF measurements of a KEMAR"
authors: ["William G. Gardner", "Keith D. Martin"]
year: 1995
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.412407"
source: "https://doi.org/10.1121/1.412407"
topics: [hrtf, measurement]
seed_rank: 1675
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: hrtf-spatial-audio
see:
  - "1091-finding-fast-filters"
  - "757-an-algorithm-for-the-machine-calculation-of-complex-fourier-"
---

# HRTF measurements of a KEMAR

## One-sentence takeaway

MIT KEMAR dummy-head HRIR set — the public far-field HRTF everyone still cites as the generic-head baseline.

## Why it matters here

Anoptic / GRID COMMAND headphone spatialize before anyone scans a player. Gardner & Martin 1995 is the classic measured KEMAR grid (elevations × azimuths) that CIPIC/SADIE/FABIAN later dwarf. Use as the *generic* HRTF, not as individualized spatial VR.

## Key ideas

- **KEMAR mannequin.** Knowles Electronics dummy with Zwislocki couplers; far-field loudspeaker sweep.
- **Public HRIR grid.** Compact time-domain impulse pairs used in countless binaural renderers.
- **JASA 1995 letter.** ~400+ cites class; the 'default HRTF' of 1990s–2000s DSP.
- **Measured, not BEM.** Contrast Katz 2001 numerical HRTF (1700).

## Caveats

One (two-pinna) dummy, not your head. Far-field; near-field ILD/ITD need Brungart 1999 (1699). Do not remint Finding Fast Filters 1091 (HRIR convolution codegen is a different card). Not CIPIC (1684).

## Links

- DOI: https://doi.org/10.1121/1.412407
