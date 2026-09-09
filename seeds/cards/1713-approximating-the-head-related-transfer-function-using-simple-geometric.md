---
title: "Approximating the head-related transfer function using simple geometric models of the head and torso"
authors: ["V. Ralph Algazi", "Richard O. Duda", "Ramani Duraiswami", "Nail A. Gumerov", "Zhihui Tang"]
year: 2002
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.1508780"
source: "https://doi.org/10.1121/1.1508780"
topics: [hrtf, anthropometry, measurement]
seed_rank: 1713
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: hrtf-spatial-audio
cites:
  - title: "Elevation localization and head-related transfer function analysis at low frequencies"
    url: "https://doi.org/10.1121/1.1349185"
    year: 2001
    arxiv: null
    doi: "10.1121/1.1349185"
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
see:
  - "1712-elevation-localization-and-head-related-transfer-function-analysis-at"
  - "1676-the-cipic-hrtf-database"
  - "1701-approximately-calculate-individual-near-field-head-related-transfer"
  - "1163-rapid-solution-of-integral-equations-of-classical-potential-the"
---

# Approximating the head-related transfer function using simple geometric models of the head and torso

## One-sentence takeaway

Snowman: sphere-head + sphere-torso (and simple pinna-less geometry) as a closed-form-ish HRTF approximant — Algazi/Duda/Duraiswami/Gumerov 2002.

## Why it matters here

Need a procedural HRTF for NPCs. This JASA paper (with FMM-adjacent coauthors Gumerov/Duraiswami) is the analytic geometric head–torso model. Use for LF/ITD; don't expect pinna notches. Do not remint FMM cards — Duraiswami's FMM work is 1163-lineage, this is the HRTF application.

## Key ideas

- **Simple geometric bodies.** Head and torso spheres; scattering series.
- **JASA 2002.** ~109 cites.
- **Modeled HRTF.** Fast compared to Katz BEM.
- **Anthropometry knobs.** Radius, neck height.

## Caveats

No pinna → poor HF elevation. Modeled vs measured (CIPIC). Near-field needs extra work. Not a remint of FMM Helmholtz cluster.

## Links

- DOI: https://doi.org/10.1121/1.1508780
