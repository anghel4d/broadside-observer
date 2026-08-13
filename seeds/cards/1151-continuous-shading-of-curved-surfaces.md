---
title: "Continuous Shading of Curved Surfaces"
authors:
  - "Henri Gouraud"
year: 1971
venue: "IEEE Trans. Computers"
arxiv: null
doi: "10.1109/T-C.1971.223313"
source: "https://doi.org/10.1109/T-C.1971.223313"
topics:
  - graphics
  - gouraud
  - shading
seed_rank: 1151
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Illumination for Computer Generated Pictures"
    url: "https://doi.org/10.1145/360825.360839"
    year: 1975
    arxiv: null
    doi: "10.1145/360825.360839"
    card: "1152-illumination-for-computer-generated-pictures"
  - title: "Models of Light Reflection for Computer Synthesized Pictures"
    url: "https://doi.org/10.1145/563858.563893"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563893"
    card: "1149-models-of-light-reflection-for-computer-synthesized-pictures"
  - title: "Computer Graphics: Principles and Practice"
    url: "https://www.worldcat.org/title/computer-graphics-principles-and-practice/oclc/21227003"
    year: 1990
    arxiv: null
    doi: null
    card: "1140-computer-graphics-principles-and-practice"
---

# Continuous Shading of Curved Surfaces

## One-sentence takeaway

Gouraud shading interpolates vertex intensities across polygons—the first widely used smooth-shading hack.

## Why it matters here

Explains why vertex normals/attributes exist in the pipeline before PBR.

## Key ideas

- Per-vertex lighting, per-pixel interpolation of intensity.
- Mach-band reduction vs flat shading.
- Cheap smooth appearance on faceted meshes.
- Phong later interpolates normals instead.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1109/T-C.1971.223313](https://doi.org/10.1109/T-C.1971.223313)
- URL: https://doi.org/10.1109/T-C.1971.223313
