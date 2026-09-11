---
title: "Illumination for Computer Generated Pictures"
authors:
  - "Bui Tuong Phong"
year: 1975
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/360825.360839"
source: "http://www.cs.northwestern.edu/~ago820/cs395/Papers/Phong_1975.pdf"
topics:
  - shading
  - local-illumination
  - phong
  - computer-graphics
seed_rank: 1791
seed_batch: "archive-2026-09-12"
reviewed: "2026-09-12"
pool: "graphics"
relevance_score: 10
lineage: phong-illumination
cites:
  - title: "A Reflectance Model for Computer Graphics"
    url: "https://doi.org/10.1145/357290.357293"
    year: 1982
    arxiv: null
    doi: "10.1145/357290.357293"
  - title: "An Improved Illumination Model for Shaded Display"
    url: "https://doi.org/10.1145/358876.358882"
    year: 1980
    arxiv: null
    doi: "10.1145/358876.358882"
see:
  - "1006-a-reflectance-model-for-computer-graphics"
  - "1634-an-improved-illumination-model-for-shaded-display"
  - "1010-the-reyes-image-rendering-architecture"
---

# Illumination for Computer Generated Pictures

## One-sentence takeaway

Phong’s 1975 CACM paper introduces the specular highlight model and normal-interpolated shading that became the default local-illumination language of realtime graphics.

## Why it matters here

Anoptic’s forward and deferred paths still speak Phong’s vocabulary — ambient/diffuse/specular lobes, interpolated normals, and CRT-era realism constraints. Cook–Torrance 1006 and Whitted 1634 are descendants; this mint is the classical local-illumination root, not a remint of either.

## Key ideas

- **Specular cosine-powered highlight.** A view-dependent lobe raised to a shininess exponent produces the compact highlight that rasterizers still treat as the local specular term.
- **Normal interpolation vs Gouraud.** Interpolating vertex normals and shading per pixel (Phong shading) keeps highlights coherent across facets; interpolating colors (Gouraud) smears them.
- **Shading coupled to modeling and hidden-surface.** Illumination is not a post-pass: it is wired to the same geometric model and visibility method that produce the picture.
- **CRT-era perception/optics constraints.** The model is tuned for then-current displays and human highlight perception, not energy conservation.

## Caveats

Empirical, not energy-conserving; superseded for physically based rendering by Cook–Torrance 1006. Silhouette antialiasing needs later methods (SMAA 1797). Northwestern PDF mirror verified open this pass; ACM DOI was paywalled from radar egress. Do not remint Cook–Torrance 1006, Whitted 1634, or REYES 1010.

## Links

- Northwestern PDF: http://www.cs.northwestern.edu/~ago820/cs395/Papers/Phong_1975.pdf
- DOI: https://doi.org/10.1145/360825.360839
