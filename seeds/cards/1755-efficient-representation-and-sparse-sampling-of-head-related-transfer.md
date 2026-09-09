---
title: "Efficient Representation and Sparse Sampling of Head-Related Transfer Functions Using Phase-Correction Based on Ear Alignment"
authors: ["Zamir Ben-Hur", "D. Alon", "Ravish Mehra", "B. Rafaely"]
year: 2019
venue: "IEEE/ACM Transactions on Audio Speech and Language Processing"
arxiv: null
doi: "10.1109/TASLP.2019.2945479"
source: "https://doi.org/10.1109/TASLP.2019.2945479"
topics: [hrtf, interpolation, measurement, vr-ar]
seed_rank: 1755
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: hrtf-spatial-audio
cites:
  - title: "Binaural rendering of Ambisonic signals by head-related impulse response time alignment and a diffuseness constraint"
    url: "https://doi.org/10.1121/1.5040489"
    year: 2018
    arxiv: null
    doi: "10.1121/1.5040489"
  - title: "Analyzing head-related transfer function measurements using surface spherical harmonics"
    url: "https://doi.org/10.1121/1.423749"
    year: 1998
    arxiv: null
    doi: "10.1121/1.423749"
see:
  - "1672-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
  - "1711-analyzing-head-related-transfer-function-measurements-using-surface"
  - "1667-hrtf-measurements-of-a-kemar"
---

# Efficient Representation and Sparse Sampling of Head-Related Transfer Functions Using Phase-Correction Based on Ear Alignment

## One-sentence takeaway

Ear-alignment phase correction: sparse-sample HRTFs by factoring ITD via ear position so interpolation needs fewer measurements (Ben-Hur/Alon/Mehra/Rafaely TASLP 2019).

## Why it matters here

Same year as SUpDEq, different trick: align to the ear, then SH/interpolate. Facebook/Rafaely. Anoptic MagLS already time-aligns; this is the measurement-sparsity leftover for capturing player HRTFs quickly.

## Key ideas

- **Phase correction from ear alignment.** Pull geometric ITD out.
- **Sparse sampling.** Fewer loudspeaker positions.
- **IEEE/ACM TASLP 2019.** Harvest interpolation / VR-AR-games.
- **Mehra among authors** — wave-propagation person on an HRTF paper.

## Caveats

~30 cites. Alignment model vs real pinna delay. Not iMagLS (decode loss). Not CIPIC remint.

## Links

- DOI: https://doi.org/10.1109/TASLP.2019.2945479
- HTML: https://www.semanticscholar.org/paper/120db8f71db6909757341176257de67ce44b4d0b
