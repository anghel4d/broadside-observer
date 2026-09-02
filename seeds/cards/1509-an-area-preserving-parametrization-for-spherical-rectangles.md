---
title: "An Area-Preserving Parametrization for Spherical Rectangles"
authors: ["Carlos Ureña", "Marcos Fajardo", "Benedikt Bitterli"]
year: 2013
venue: "EGSR / CGF"
arxiv: null
doi: "10.1111/cgf.12176"
source: "https://www.arnoldrenderer.com/research/egsr2013_spherical_rectangle.pdf"
topics: [quad-lights, solid-angle, analytic-area, NEE]
seed_rank: 1509
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: area-lights
cites:
  - title: "Applications of Irradiance Tensors to Direct Illumination and Radiosity"
    url: "https://www.graphics.cornell.edu/pubs/1995/Arv95c.pdf"
    year: 1995
    arxiv: null
    doi: "10.1145/218380.218498"
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
  - title: "Importance Sampling of Many Lights with Adaptive Tree Splitting"
    url: "https://www.solidangle.com/research/egsr2018_ats.pdf"
    year: 2018
    arxiv: null
    doi: "10.1111/cgf.13476"
see:
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
  - "1382-importance-sampling-of-many-lights-with-adaptive-tree-splitting"
---

# An Area-Preserving Parametrization for Spherical Rectangles

## One-sentence takeaway

The area-preserving spherical-rectangle map every path tracer uses for quad NEE — uniform in solid angle, closed form, the sampler games steal the moment they ray-trace area lights.

## Why it matters here

LTC (this batch) *shades* a polygon analytically; Ureña–Fajardo–Bitterli *samples* it for NEE/ReSTIR (1374) / ATS (1382). Anoptic RT area lights should not sample the rectangle in area and hope the cosine-solid-angle Jacobian is kind.

## Key ideas

- **Solid-angle uniform.** A bilinear map from [0,1]² onto the spherical projection of a planar rectangle, with constant Jacobian so pdf = 1/ω.
- **Closed form.** Four atan2 / acos operations; no rejection. Works for rectangles that straddle the horizon after clamping.
- **Production NEE.** Arnold shipped it; every subsequent PT (and ReSTIR candidate gen for quads) copies the map.
- **Evidence.** EGSR / CGF 2013, doi `10.1111/cgf.12176`. PDF: https://www.arnoldrenderer.com/research/egsr2013_spherical_rectangle.pdf

## Caveats

- Rectangles only — disks/spheres have their own spherical maps. Clipping a general clip-polygon is still Arvo. Not a remint of Lightcuts 1042 or ATS 1382 (those pick *which* light).

## Links

- PDF: https://www.arnoldrenderer.com/research/egsr2013_spherical_rectangle.pdf
- DOI: https://doi.org/10.1111/cgf.12176
