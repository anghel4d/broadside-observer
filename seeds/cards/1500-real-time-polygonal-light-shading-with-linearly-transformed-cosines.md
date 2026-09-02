---
title: "Real-Time Polygonal-Light Shading with Linearly Transformed Cosines"
authors: ["Eric Heitz", "Jonathan Dupuy", "Stephen Hill", "David Neubelt"]
year: 2016
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/2897824.2925895"
source: "https://eheitzresearch.wordpress.com/415-2/"
topics: [LTC, polygonal-lights, analytic-area, GGX]
seed_rank: 1500
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: area-lights
cites:
  - title: "Applications of Irradiance Tensors to Direct Illumination and Radiosity"
    url: "https://www.graphics.cornell.edu/pubs/1995/Arv95c.pdf"
    year: 1995
    arxiv: null
    doi: "10.1145/218380.218498"
  - title: "Microfacet Models for Refraction through Rough Surfaces"
    url: "https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/195-206"
  - title: "Real Shading in Unreal Engine 4"
    url: "https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes.pdf"
    year: 2013
    arxiv: null
    doi: null
  - title: "Moving Frostbite to Physically Based Rendering"
    url: "https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf"
    year: 2014
    arxiv: null
    doi: null
see:
  - "270-real-shading-in-unreal-engine-4"
  - "267-moving-frostbite-to-physically-based-rendering"
---

# Real-Time Polygonal-Light Shading with Linearly Transformed Cosines

## One-sentence takeaway

Warp a clamped-cosine into an anisotropic GGX lobe with a 3×3 matrix, then shade a polygon by the closed-form cosine integral in the warped domain — real-time polygonal area lights that match the microfacet BRDF.

## Why it matters here

Unity, Unreal, Frostbite, and Godot area lights are this 3×3 cosine warp plus a dual-source (diffuse + GGX) LUT. Anoptic/GRID COMMAND still shades punctual or fake-sphere lights; LTC is the analytic direct term to ship before ReSTIR (1374) spends rays on visibility. Arvo 1995 (1510, minted this batch) is the integral; this paper is the BRDF fit engines actually paste.

## Key ideas

- **Linearly transformed cosines.** A 3×3 matrix M fitted per (roughness, incidence) warps a clamped cosine so the transformed density matches a GGX (or Disney diffuse) lobe; the fit is a small 2D LUT of matrix entries.
- **Polygon integral after warp.** Clip the light polygon against the clamped-cosine horizon in the warped frame, then evaluate Arvo's cosine-weighted solid-angle / irradiance-tensor integral on the clipped polygon — one analytic number, not a texture of samples.
- **Dual-source shading.** Diffuse and specular get separate M and separate evaluations; textured lights factor as a filtered texture lookup times the untextured LTC integral.
- **Evidence.** SIGGRAPH / TOG 2016, doi `10.1145/2897824.2925895`. Project: https://eheitzresearch.wordpress.com/415-2/ . The engine default for quad/rect lights.

## Caveats

- Analytic *shading*, not shadows — combining with stochastic visibility is Heitz–Hill–McGuire 2018 (this batch). Spheres/tubes/disks are the 2017 companion, not this paper. Fitting assumes a clamped-cosine family; extreme anisotropy and textured near-field still leak. Not a remint of UE4 Real Shading (270) or Frostbite PBR (267), which only footnote area lights.

## Links

- Project: https://eheitzresearch.wordpress.com/415-2/
- DOI: https://doi.org/10.1145/2897824.2925895
