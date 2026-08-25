---
title: "Decima Engine: Advances in Lighting and AA"
authors: ["Giliam de Carpentier", "Kohei Ishiyama"]
year: 2017
venue: "SIGGRAPH Courses"
arxiv: null
doi: null
source: "https://www.guerrilla-games.com/read/decima-engine-advances-in-lighting-and-aa"
topics:
  - "physically-based-shading"
  - "anti-aliasing"
seed_rank: 1357
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: decima-engine
cites:
  - title: "Microfacet Models for Refraction through Rough Surfaces"
    url: "https://doi.org/10.2312/EGWR/EGSR07/195-206"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/195-206"
see:
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1312-microfacet-models-for-refraction-through-rough-surfaces"
  - "1352-fxaa"
---

# Decima Engine: Advances in Lighting and AA

## One-sentence takeaway

Guerrilla + Kojima Productions SIGGRAPH 2017: Decima (Horizon / Death Stranding) — GGX spherical area lights, atmosphere, FXAA+TAA, checkerboard 2160p. Different engine from Fox; Kojima's post-Konami successor stack.

## Problem

Fox was a Konami deferred PBR engine. After Kojima left, Death Stranding shipped on Guerrilla's Decima. People looking for a "Fox SIGGRAPH talk" often land here instead.

## Design

Advances in Real-Time Rendering 2017. Spherical area lights with a Karis-style light-bending approximation cleaned up at grazing angles for GGX; height-fog atmosphere; 2-frame TAA + FXAA at 1080p (≤1 ms on PS4); PS4 Pro 2160p checkerboard with a "tangram" resolve. Presenters: Giliam de Carpentier (Guerrilla), Kohei Ishiyama (Kojima Productions).

## Evidence

Course page + Guerrilla writeup + PDF (DecimaSiggraph2017.pdf) all live. Not a Fox Engine talk. Minted only as a related successor so the library does not confuse the two.

## Limitations

Decima ≠ Fox. Do not cite this as the MGSV lighting talk. Area-light GGX work post-dates Horizon's ship and was retrofitted internally.

## Implications for Broadside

If someone asks for "the SIGGRAPH Fox/MGSV talk", send them to 1344 (GDC 2013) and file this under Death Stranding / Decima.

## Bottom line

Mint as related successor, not the primary ingest. Slides PDF is real (Guerrilla / advances.realtimerendering.com).

## Links

- Guerrilla writeup: https://www.guerrilla-games.com/read/decima-engine-advances-in-lighting-and-aa
- PDF: https://www.guerrilla-games.com/media/News/Files/DecimaSiggraph2017.pdf
- Course PDF mirror: https://advances.realtimerendering.com/s2017/DecimaSiggraph2017.pdf
- SIGGRAPH 2017 course: https://advances.realtimerendering.com/s2017/
