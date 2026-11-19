---
title: "Accelerating Real-Time Shading with Reverse Reprojection Caching"
authors:
  - "Diego Nehab"
  - "Pedro V. Sander"
  - "Jason Lawrence"
  - "Natalya Tatarchuk"
  - "John R. Isidoro"
year: 2007
venue: "Graphics Hardware 2007 (Eurographics/ACM SIGGRAPH)"
arxiv: null
doi: "10.2312/EGGH/EGGH07/025-036"
source: "https://gfx.cs.princeton.edu/pubs/Nehab_2007_ARS/NehEtAl07.pdf"
version_reviewed: "Graphics Hardware 2007 author PDF"
topics:
  - "temporal-reuse"
  - "reprojection"
  - "shading-cache"
  - "real-time-rendering"
  - "amortized-sampling"
seed_rank: 2651
seed_batch: "archive-2026-11-20"
reviewed: "2026-11-20"
pool: "graphics"
lineage: realtime-gi
relevance_score: 8
see:
  - "350-amortized-supersampling"
  - "250-a-survey-of-temporal-antialiasing-techniques"
  - "1389-spatiotemporal-variance-guided-filtering-real-time-reconstructio"
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
cites:
  - title: "Accelerating Real-Time Shading with Reverse Reprojection Caching"
    url: "https://gfx.cs.princeton.edu/pubs/Nehab_2007_ARS/"
    year: 2007
---

# Accelerating Real-Time Shading with Reverse Reprojection Caching

## One-sentence takeaway

Keep last frame's expensive shading results in viewport-sized buffers, have each vertex also compute where it was last frame so each pixel can look itself up in that buffer, accept the cached value when the reprojected depth matches within ε, and refresh entries on a tiled or random schedule — the root of TAA, temporal GI accumulation and ReSTIR-style reuse.

## Why it matters here

Every modern temporal technique in the library (amortised supersampling 350, TAA 250, SVGF 1389, ReSTIR 1374) starts from this cache. For Anoptic's radiance cascades it is the baseline to beat or combine with: cascades are a spatial cache of radiance, and this is the temporal one, with the same questions of what to cache (low-frequency, view-independent terms) and when to invalidate (disocclusion via depth test). It is short, concrete, and maps directly onto one extra buffer and a vertex attribute.

## Key ideas

- **Output-sensitive cache.** One entry per visible pixel, so memory is independent of scene size and lookups are just texture fetches. Sequences showed over 90% of pixels still visible from one frame to the next.
- **Cheap cache coordinates.** The vertex shader is given last frame's transforms and skinning parameters and emits last frame's projected position as an attribute; hardware perspective-correct interpolation gives each pixel its cache coordinates.
- **Miss detection.** Compare the reprojected depth with the cached depth (bilinearly reconstructed), like a shadow-map test; hit if within ε, else run the miss shader. GPU lock-step means one miss stalls a whole block, which spatial coherence mostly avoids.
- **Refresh policies.** Refresh each entry every n frames by tiles or randomly scattered 2×2 regions. With refresh every 4 frames on a noise-plus-specular dragon, frame rate went from 35 fps to 60 (tiled) and 67 fps (random).
- **Uses.** Precomputed global lighting and PRT-based translucency, stereo (28 → 44 fps, a 57% increase), motion blur, depth of field, shadow mapping, and amortising stochastic sampling across frames with a running average.

## Caveats

Only pays off when per-pixel shading dominates geometry cost, and only for low-frequency, slowly varying terms; view-dependent glossy terms show error. Disocclusions and fast motion fall back to full shading, and 2007 hardware numbers do not transfer directly. Later work (350) adds the filtering and error analysis this paper lacks.

## Links

- PDF (author copy): https://gfx.cs.princeton.edu/pubs/Nehab_2007_ARS/NehEtAl07.pdf
- Project page: https://gfx.cs.princeton.edu/pubs/Nehab_2007_ARS/
- Eurographics DOI: https://doi.org/10.2312/EGGH/EGGH07/025-036
