---
title: "Moving Frostbite to Physically Based Rendering"
authors:
  - "Sébastien Lagarde"
  - "Charles de Rousiers"
year: 2014
venue: "SIGGRAPH 2014 Courses"
arxiv: null
doi: null
source: "https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf"
topics:
  - pbr
  - frostbite
seed_rank: 267
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "Real Shading in Unreal Engine 4"
    url: "https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf"
    year: 2013
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
  - "270-real-shading-in-unreal-engine-4"
  - "344-physically-based-shading-at-disney"
---

# Moving Frostbite to Physically Based Rendering

## One-sentence takeaway

Frostbite's SIGGRAPH 2014 course is the production cookbook that turned Disney/UE4 theory into a shipped GGX + energy-conserving lighting stack, including area lights, image-based lighting, and a dielectric/metal workflow.

## Why it matters here

Anoptic's material model should start from this document, not from a blog paraphrase. It is the bridge from Karis/Burley notes to a real engine: units, exposure, punctual vs area, and what to bake into probes.

## Key ideas

- Standardize on a microfacet GGX specular, Lambert (or Disney diffuse) base, and a metalness/reflectance parameterization artists can author.
- Energy conservation and Fresnel (Schlick, with a fudge for grazing) are non-optional once you mix punctual, area, and IBL terms.
- Area lights and filtered environment maps are first-class; punctual lights are the special case.
- Exposure, color spaces, and lighting units have to be specified or every other formula is meaningless.
- Course notes v3.2 (July 2015) are the canonical PDF; SIGGRAPH 2014 Physically Based Shading in Theory and Practice course.

## Caveats

## Links

- Course notes: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
