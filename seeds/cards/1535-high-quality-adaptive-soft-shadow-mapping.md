---
title: "High-Quality Adaptive Soft Shadow Mapping"
authors: ["Gaël Guennebaud", "Loïc Barthe", "Mathias Paulin"]
year: 2007
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/j.1467-8659.2007.01075.x"
source: "https://doi.org/10.1111/j.1467-8659.2007.01075.x"
topics: [backprojection, adaptive-SM]
seed_rank: 1535
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: soft-shadows
cites:
  - title: "Real-time Soft Shadow Mapping by Backprojection"
    url: "https://doi.org/10.2312/EGWR/EGSR06/227-234"
    year: 2006
    arxiv: null
    doi: "10.2312/EGWR/EGSR06/227-234"
  - title: "Bitmask Soft Shadows"
    url: "https://doi.org/10.1111/j.1467-8659.2007.01074.x"
    year: 2007
    arxiv: null
    doi: "10.1111/j.1467-8659.2007.01074.x"
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
---

# High-Quality Adaptive Soft Shadow Mapping

## One-sentence takeaway

Guennebaud 2007 adaptive search / gap filling on backprojection SSM — the quality paper on top of 2006, same year as bitmask.

## Why it matters here

2006 SSM (this batch) undersamples gaps; this CGF 2007 paper adaptively refines the search and fills holes. Bitmask 2007 (this batch) is the overlapping-occluder twin. Together they are the academic SSM peak before RT.

## Key ideas

- **Adaptive kernel / hierarchy.** Refine the backprojection search where occupancy is uncertain instead of a fixed PCSS window.
- **Gap filling.** Detect missing SM samples in the projected occluder and inpaint so penumbrae do not leak light.
- **Quality 2007.** Same venue-year as bitmask; complementary artifacts (gaps vs unions).
- **Evidence.** CGF 2007, doi `10.1111/j.1467-8659.2007.01075.x`.

## Caveats

- Still a raster SM approximation. Adaptive search cost is why games stayed on PCSS/VSSM. Not a remint of 2006 SSM or bitmask.

## Links

- DOI: https://doi.org/10.1111/j.1467-8659.2007.01075.x
