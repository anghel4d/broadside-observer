---
title: "A Reflectance Model for Computer Graphics"
authors: ["Robert L. Cook", "Kenneth E. Torrance"]
year: 1981
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800224.806819"
source: "https://doi.org/10.1145/800224.806819"
topics: [microfacet-brdf, physically-based-shading]
seed_rank: 1006
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "graphics"
relevance_score: 10
lineage: physically-based-shading
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Physically Based Shading at Disney"
    url: "https://media.disneyanimation.com/uploads/production/publication_asset/48/asset/s2012_pbs_disney_brdf_notes_v3.pdf"
    year: 2012
    arxiv: null
    doi: null
  - title: "Real Shading in Unreal Engine 4"
    url: "https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf"
    year: 2013
    arxiv: null
    doi: null
see:
  - "152-the-rendering-equation"
  - "344-physically-based-shading-at-disney"
  - "270-real-shading-in-unreal-engine-4"
  - "267-moving-frostbite-to-physically-based-rendering"
---

# A Reflectance Model for Computer Graphics

## One-sentence takeaway

A microfacet BRDF (Torrance–Sparrow geometry + Fresnel + roughness) that predicts metal vs plastic and the color shift of specular highlights with incidence angle.

## Why it matters here

Disney, UE4, and Frostbite PBR (344, 270, 267) are already in the library; the 1981 Cook–Torrance paper they all rewrite is not. Anoptic's Vulkan materials are this model plus later GGX/Smith terms. Mint the source, not another 2010s course note.

## Key ideas

- Reflectance is defined so object brightness tracks light intensity and source size, not an ad-hoc Phong exponent.
- Specular term is a Torrance–Sparrow microfacet model: distribution of facets, geometric attenuation (shadowing/masking), and Fresnel.
- Diffuse term is Lambertian; metals vs plastics fall out of whether the specular lobe is spectrally selective.
- Off-specular peaks and the grazing color shift are predicted, not painted on.
- A procedure maps measured spectral energy distributions onto display RGB, so real materials can be simulated rather than guessed.

## Caveats

- SIGGRAPH 1981 is the debut; the commonly cited archival text is TOG 1(1) 1982 (doi 10.1145/357290.357293). Same model; do not mint both.
- Beckmann distribution and the original geometric term are not GGX/Smith; modern engines swapped the D and G factors while keeping the microfacet skeleton.
- Energy conservation and reciprocity as used in 2010s PBR are later hygiene, not theorems proved here.

## Links

- DOI: [10.1145/800224.806819](https://doi.org/10.1145/800224.806819)
- TOG 1982: https://doi.org/10.1145/357290.357293
- PDF: https://neil3d.github.io/assets/pdf/cookpaper.pdf
- SIGGRAPH History: https://history.siggraph.org/learning/a-reflectance-model-for-computer-graphics-by-cook-and-torrance/
