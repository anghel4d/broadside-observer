---
title: "Physically Based Shading at Disney"
authors:
  - "Brent Burley"
year: 2012
venue: "SIGGRAPH Courses"
arxiv: null
doi: null
source: "https://media.disneyanimation.com/uploads/production/publication_asset/48/asset/s2012_pbs_disney_brdf_notes_v3.pdf"
topics:
  - pbr
seed_rank: 344
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Real Shading in Unreal Engine 4"
    url: "https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf"
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

# Physically Based Shading at Disney

## One-sentence takeaway

Burley’s 2012 course notes define the Disney principled BRDF: a small set of artist-facing parameters (baseColor, roughness, metallic, specular, sheen, clearcoat, …) that still integrate a microfacet specular lobe with energy-aware diffuse.

## Why it matters here

Every Anoptic/Broadside material graph is this parameterization or a subset; UE4 and Frostbite PBR notes are ports of the same model into real-time constraints.

## Key ideas

- Artists hated academic parameter names. Disney remaps physically based knobs onto intuitive sliders and enforces plausible ranges.
- Specular is a GGX/GTR microfacet lobe with a roughness-remap; metallic interpolates between dielectric Fresnel and tinted conductor Fresnel.
- Diffuse is not Lambert: a retro-reflective term (and later Disney 2015’s diffuse-roughness) keeps energy as roughness rises.
- Clearcoat is a second specular lobe; sheen models grazing cloth. Subsurface is a separate parameter, not a hacked wrap light.
- SIGGRAPH 2012 *Practical Physically Based Shading* course. Canonical PDF at the Disney Animation URL above.

## Caveats

## Links

- PDF: https://media.disneyanimation.com/uploads/production/publication_asset/48/asset/s2012_pbs_disney_brdf_notes_v3.pdf
