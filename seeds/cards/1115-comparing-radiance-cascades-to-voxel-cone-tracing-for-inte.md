---
title: "Comparing Radiance Cascades to Voxel Cone Tracing for Interactive Global Illumination in Dynamic Scenes"
authors:
  - "Johannes Kung"
year: 2025
venue: "thesis"
arxiv: null
doi: null
source: "https://www.diva-portal.org/smash/record.jsf?pid=diva2:1967544"
topics:
  - radiance-cascades
  - gi
  - voxel-cone-tracing
seed_rank: 1115
seed_batch: "radiance-cascades-wip-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 7
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1111/j.1467-8659.2011.02063.x"
    year: 2011
    arxiv: null
    doi: "10.1111/j.1467-8659.2011.02063.x"
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
  - "120-voxel-cone-tracing-for-real-time-global-illumination"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
---

# Comparing Radiance Cascades to Voxel Cone Tracing for Interactive Global Illumination in Dynamic Scenes

## One-sentence takeaway

Kung's 2025 Linköping MSc implements screenspace-sampled Radiance Cascades in OpenGL and compares it to Voxel Cone Tracing: RC leaks less through thin geometry but adds depth-discontinuity leaks, visible rays around small lights, and flicker; per-pixel sampling is not real-time.

## Why it matters here

This is not a new 3D RC algorithm — it is the only thesis-length *measurement* of existing RC vs the VCT foil already on the spine (272 / 120). Sampling stride (every 4 / 2 / 1 screen pixels) is the quality knob. At every-4th-pixel: 5 / 20 / 30 ms across three scene sizes; every-2nd: 19 / 67 / 101 ms; every pixel is off the real-time table. Useful as a "do not expect screenspace RC to beat VCT for free in a filled 3D view" calibration for Anoptic, not as a method paper.

## Key ideas

- Independent thesis, Linköping University / Informationskodning, 28 HE credits, 2025. DiVA `diva2:1967544` (LiU `liu-214642`).
- Screen-sampled RC vs VCT in dynamic scenes; OpenGL interactive app.
- RC: less thin-object leak than VCT; extra artifacts = depth-discontinuity leak, individual rays near small emitters, flicker under motion.
- Render times have a few large spikes even when averages look stable.

## Caveats

- Student thesis, not a refereed venue paper and not a new cascade algorithm. Tagged thesis/WIP on purpose.
- Screenspace sampling of the existing RC method; does not address dense 3D cascade-0 memory.
- PDF is DiVA `FULLTEXT01.pdf` behind the record page (Anubis-protected HTML); pin the DiVA record, do not depend on a scraper-friendly PDF URL.

## Links

- DiVA record: https://www.diva-portal.org/smash/record.jsf?pid=diva2:1967544
- PDF (DiVA): https://www.diva-portal.org/smash/get/diva2:1967544/FULLTEXT01.pdf
- Abstract mirror: https://www.essays.se/essay/8d0c1b93e1/
