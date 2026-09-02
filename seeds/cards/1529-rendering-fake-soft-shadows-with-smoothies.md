---
title: "Rendering Fake Soft Shadows with Smoothies"
authors: ["Eric Chan", "Frédo Durand"]
year: 2003
venue: "Rendering Techniques"
arxiv: null
doi: "10.2312/EGWR/EGWR03/208-218"
source: "https://doi.org/10.2312/EGWR/EGWR03/208-218"
topics: [silhouette, smoothies, fake-penumbra]
seed_rank: 1529
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: soft-shadows
cites:
  - title: "Approximate Soft Shadows on Arbitrary Surfaces using Penumbra Wedges"
    url: "https://doi.org/10.2312/EGWR/EGWR02/297-306"
    year: 2002
    arxiv: null
    doi: "10.2312/EGWR/EGWR02/297-306"
  - title: "Penumbra Maps: Approximate Soft Shadows in Real-Time"
    url: "https://doi.org/10.2312/EGWR/EGWR03/202-207"
    year: 2003
    arxiv: null
    doi: "10.2312/EGWR/EGWR03/202-207"
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
---

# Rendering Fake Soft Shadows with Smoothies

## One-sentence takeaway

Chan–Durand silhouette smoothies: extra geometry at occluder silhouettes that fans a fake penumbra — the cheap mid-2000s look before PCSS.

## Why it matters here

Wedges (this batch) try to be geometric vis; smoothies *draw* a soft plate at the silhouette and accept the cheat. Penumbra Maps (this batch) is the same year's SM-space cousin. GRID COMMAND stylized/cheap contact can still use this idea.

## Key ideas

- **Smoothie geometry.** For each silhouette edge, emit a quad/fin whose alpha/depth encodes a penumbra falloff sized by light and distance.
- **Fake, on purpose.** No backprojection, no blocker search — a plausible plate that reads as contact-hardening in motion.
- **Realtime 2003.** Cheap enough for the cards that could not run wedges or large PCF.
- **Evidence.** EGWR 2003, doi `10.2312/EGWR/EGWR03/208-218`.

## Caveats

- Fails on self-shadowing complexity, overlapping occluders, and large area lights. Not PCSS. Same venue-year as Wyman penumbra maps — different algorithm.

## Links

- DOI: https://doi.org/10.2312/EGWR/EGWR03/208-218
