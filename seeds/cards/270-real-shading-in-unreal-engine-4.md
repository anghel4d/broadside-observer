---
title: "Real Shading in Unreal Engine 4"
authors:
  - "Brian Karis"
year: 2013
venue: "SIGGRAPH 2013 Courses"
arxiv: null
doi: null
source: "https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf"
topics:
  - pbr
seed_rank: 270
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "Moving Frostbite to Physically Based Rendering"
    url: "https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf"
    year: 2014
    arxiv: null
    doi: null
  - title: "Physically Based Shading at Disney"
    url: "https://media.disneyanimation.com/uploads/production/publication_asset/48/asset/s2012_pbs_disney_brdf_notes_v3.pdf"
    year: 2012
    arxiv: null
    doi: null
  - title: "Filament Physically Based Rendering Guide"
    url: "https://google.github.io/filament/Filament.md.html"
    year: 2019
    arxiv: null
    doi: null
see:
  - "267-moving-frostbite-to-physically-based-rendering"
  - "344-physically-based-shading-at-disney"
---

# Real Shading in Unreal Engine 4

## One-sentence takeaway

Karis's SIGGRAPH 2013 notes lock UE4 onto GGX, a split-sum IBL approximation, and a metalness workflow — the de-facto real-time PBR baseline every later engine course answers.

## Why it matters here

Anoptic's default BRDF and IBL should cite this, not folklore. The split-sum environment BRDF LUT and the punctual-light normalization are the two formulas you will re-derive if you skip the notes.

## Key ideas

- Microfacet specular with GGX/Trowbridge-Reitz NDF, Smith-Schlick geometry, and Schlick Fresnel.
- Dielectric/metal switch via a metalness mask; base color is albedo for dielectrics and F0 for metals.
- Image-based lighting via the split-sum approximation: prefiltered environment map times a 2D BRDF integration LUT in (N·V, roughness).
- Punctual lights use a normalization that keeps energy plausible as roughness changes.
- Course notes hosted on Unreal Engine CDN; SIGGRAPH 2013 Physically Based Shading course.

## Caveats

## Links

- Course notes: https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
