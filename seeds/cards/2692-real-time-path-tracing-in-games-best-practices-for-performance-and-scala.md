---
title: "Real-Time Path Tracing in Games: Best Practices for Performance and Scalability"
authors:
  - "NVIDIA"
year: 2026
venue: "NVIDIA RTX whitepaper (NVIDIA-RTX/Whitepapers on GitHub; English, Japanese and Korean editions)"
arxiv: null
doi: null
source: "https://github.com/NVIDIA-RTX/Whitepapers/tree/main/pt_performance_whitepaper"
version_reviewed: "GitHub README, commit of 2026-10-09 (document dated June 2026)"
topics:
  - "path-tracing"
  - "real-time-rendering"
  - "ray-budget"
  - "radiance-caching"
  - "acceleration-structures"
  - "restir"
  - "many-light-sampling"
  - "vulkan-realtime-rendering"
seed_rank: 2692
seed_batch: "craft-2026-11-23"
reviewed: "2026-11-23"
pool: "graphics"
relevance_score: 8
lineage: realtime-gi
cites:
  - title: "Real-Time Path Tracing in Games: Best Practices for Performance and Scalability"
    url: "https://github.com/NVIDIA-RTX/Whitepapers/tree/main/pt_performance_whitepaper"
    year: 2026
    arxiv: null
    doi: null
  - title: "RTXDI: ReSTIR direct illumination, ReSTIR GI and ReSTIR PT framework"
    url: "https://github.com/NVIDIA-RTX/RTXDI"
    arxiv: null
    doi: null
  - title: "RTXGI: SHaRC and NRC world-space radiance caches"
    url: "https://github.com/NVIDIA-RTX/RTXGI"
    arxiv: null
    doi: null
  - title: "Bounded VNDF Sampling for Smith-GGX Reflections"
    url: "https://gpuopen.com/download/publications/Bounded_VNDF_Sampling_for_Smith-GGX_Reflections.pdf"
    year: 2023
    arxiv: null
    doi: null
---

# Real-Time Path Tracing in Games: Best Practices for Performance and Scalability

## One-sentence takeaway

NVIDIA's guide to shipping path tracing treats the frame as a fixed ray budget split by signal (direct light, visibility, diffuse GI, glossy, cache updates), with caches, denoisers and upscalers counted as part of the renderer, and gives concrete policies for acceleration-structure updates, geometry layout, material LOD, sampling and shaders.

## Why it matters here

Anoptic's GI plan (radiance cascades, possibly FMM-style far field) will sit next to some ray tracing, and the hard questions are budgeting and plumbing, not the estimator. This document is a checklist of those choices from people who have shipped it: keep primary visibility rasterized, one shallow bounce plus a world-space cache instead of deep paths, a hash-grid light structure for off-screen hits, and BVH updates scheduled by measured hit counts. Most of it carries over from DXR to Vulkan ray tracing, and the per-signal budget table is a good template for Anoptic's own quality presets.

## Key ideas

- **Budget by signal, not one rays-per-pixel number.** Direct light: explicit light sampling plus reuse. Diffuse GI: one shallow bounce plus a radiance-cache fallback. Cache updates: deeper paths at low spatial rate, spread over frames. Judge the final denoised and upscaled image, not the pre-upscale buffer.
- **Measure per preset and platform:** internal vs output resolution, rays per pixel per signal, path depth and termination policy, TLAS/BLAS build and update time, memory, and temporal-stability metrics (ghosting, lag, disocclusion noise).
- **Acceleration-structure policy as an engine subsystem.** Static BLAS: fast-trace and compact. Deforming meshes: refit with periodic rebuilds. Dynamic updates chosen by a priority queue driven by GPU hit counters read back asynchronously, with both an instance budget and a geometry budget per frame and a distance boost for close objects.
- **Geometry as a minimal shading record.** Rebuild hit position from the ray; split hot and cold attributes; pack what hit shading reads together; specialize layouts by ray class where it pays.
- **Sampling.** NEE with MIS for glossy; ReSTIR-style reuse for many lights; screen-space light lists only for primary hits; for secondary hits a world-space structure (ReGIR-style grid or a sparse hash grid like SHaRC's) that proposes candidates but never replaces final visibility; separate paths for sun and environment; a separate emissive-primitive structure for mesh lights.
- **Denoiser-aware choices:** prefer stable low-frequency noise, clamp tiny-PDF outliers before they enter history, avoid naive Russian roulette at low sample counts, terminate into the radiance cache when it is valid.

## Caveats

A vendor document: the examples use DXR and NVIDIA technologies (SER, OMM, DLSS Ray Reconstruction, RTXDI/RTXGI), and Vulkan equivalents need their own capability checks. It is guidance, not a measured study; the update-budget percentages in its figures are labelled illustrative. No author names are given beyond NVIDIA. Read from the English README on GitHub, not the PDF layout.

## Links

- Whitepaper folder (README, English/Japanese/Korean PDFs): https://github.com/NVIDIA-RTX/Whitepapers/tree/main/pt_performance_whitepaper
- English PDF: https://github.com/NVIDIA-RTX/Whitepapers/blob/main/pt_performance_whitepaper/pt_performance_whitepaper_en.pdf
- Found via Graphics Programming Weekly 462: https://www.jendrikillner.com/post/graphics-programming-weekly-issue-462/
- RTXDI (ReSTIR implementations it points to): https://github.com/NVIDIA-RTX/RTXDI
- RTXGI (SHaRC and NRC radiance caches): https://github.com/NVIDIA-RTX/RTXGI
