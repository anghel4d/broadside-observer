---
title: "iMagLS: Interaural Level Difference with Magnitude Least-Squares Loss for Optimized First-Order Head-Related Transfer Function"
authors: ["Or Berebi", "Zamir Ben-Hur", "David Lou Alon", "Boaz Rafaely"]
year: 2023
venue: "Proceedings of the 10th Convention of the European Acoustics Association Forum Acusticum 2023"
arxiv: "2311.16702"
doi: "10.61782/fa.2023.0678"
source: "https://arxiv.org/abs/2311.16702"
topics: [hrtf, binaural, ambisonics, itd-ild, vr-ar, headphone]
seed_rank: 1739
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: ambisonics-binaural
cites:
  - title: "Binaural rendering of Ambisonic signals by head-related impulse response time alignment and a diffuseness constraint"
    url: "https://doi.org/10.1121/1.5040489"
    year: 2018
    arxiv: null
    doi: "10.1121/1.5040489"
  - title: "End-to-End Magnitude Least Squares Binaural Rendering of Spherical Microphone Array Signals"
    url: "https://doi.org/10.1109/i3da48870.2021.9610864"
    year: 2021
    arxiv: null
    doi: "10.1109/i3da48870.2021.9610864"
see:
  - "1672-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
  - "1708-ambisonics-binaural-rendering-via-masked-magnitude-least-squares"
  - "1723-end-to-end-magnitude-least-squares-binaural-rendering-of-spherical"
---

# iMagLS: Interaural Level Difference with Magnitude Least-Squares Loss for Optimized First-Order Head-Related Transfer Function

## One-sentence takeaway

iMagLS: add an ILD term to MagLS so *first-order* HRTF/HOA binaural decode keeps interaural level (Berebi/Ben-Hur/Alon/Rafaely, arXiv 2311.16702, Forum Acusticum 2023).

## Why it matters here

Order-1 Ambisonics is what many game engines actually ship. MagLS alone underfits ILD. iMagLS is the FOA headphone leftover. Anoptic default decoder for Ambisonic beds on cheap HOA.

## Key ideas

- **ILD-augmented MagLS loss.** First-order HRTF specifically.
- **arXiv 2311.16702** + Forum Acusticum 2023 DOI 10.61782/fa.2023.0678.
- **VR-AR-games tagged.** Harvest quality 10.
- **Same authors as masked MagLS 2025.**

## Caveats

FOA cannot buy you pinna elevation. Needs an HRTF set. Not a room-acoustics bake. Not 1672 remint — ILD/FOA leftover.

## Links

- arXiv abs: https://arxiv.org/abs/2311.16702
- PDF: https://arxiv.org/pdf/2311.16702
- DOI: https://doi.org/10.61782/fa.2023.0678
