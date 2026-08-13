---
title: "Texture and Reflection in Computer Generated Images"
authors:
  - "James F. Blinn"
  - "Martin E. Newell"
year: 1976
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/360349.360353"
source: "https://doi.org/10.1145/360349.360353"
topics:
  - graphics
  - environment-mapping
  - texture
seed_rank: 1150
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Models of Light Reflection for Computer Synthesized Pictures"
    url: "https://doi.org/10.1145/563858.563893"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563893"
    card: "1149-models-of-light-reflection-for-computer-synthesized-pictures"
  - title: "Survey of Texture Mapping"
    url: "https://doi.org/10.1109/MCG.1986.276672"
    year: 1986
    arxiv: null
    doi: "10.1109/MCG.1986.276672"
    card: "1159-survey-of-texture-mapping"
  - title: "Physically Based Shading at Disney"
    url: "https://media.disneyanimation.com/uploads/production/publication_asset/48/asset/s2012_pbs_disney_brdf_notes_v3.pdf"
    year: 2012
    arxiv: null
    doi: null
    card: "424-physically-based-shading-at-disney"
---

# Texture and Reflection in Computer Generated Images

## One-sentence takeaway

Blinn–Newell environment mapping: fake reflections with a texture lookup indexed by reflection direction.

## Why it matters here

Envmap/IBL ancestor still everywhere in real-time engines.

## Key ideas

- Reflection-vector indexed texture.
- Cheap approximate specular surroundings.
- Early texture-as-lighting idea.
- Path to modern IBL/cube maps.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/360349.360353](https://doi.org/10.1145/360349.360353)
- URL: https://doi.org/10.1145/360349.360353
