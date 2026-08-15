---
title: "Shadow Algorithms for Computer Graphics"
authors: ["Franklin C. Crow"]
year: 1977
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/563858.563901"
source: "https://doi.org/10.1145/563858.563901"
topics: [shadow-volumes, silhouette-extrusion, shadows]
seed_rank: 1043
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "graphics"
relevance_score: 9
lineage: shadow-volumes
cites:
  - title: "Casting Curved Shadows on Curved Surfaces"
    url: "https://doi.org/10.1145/800248.807402"
    year: 1978
    arxiv: null
    doi: "10.1145/800248.807402"
  - title: "Deep Shadow Maps"
    url: "https://doi.org/10.1145/344779.344958"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344958"
  - title: "Summed-Area Tables for Texture Mapping"
    url: "https://doi.org/10.1145/800031.808600"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808600"
see:
  - "1005-casting-curved-shadows-on-curved-surfaces"
  - "1012-deep-shadow-maps"
  - "356-cascaded-shadow-maps"
  - "359-variance-shadow-maps"
---

# Shadow Algorithms for Computer Graphics

## One-sentence takeaway

Three classes of shadow algorithm, and the one Crow bets on: extrude silhouette edges from the light into semi-infinite *shadow volumes* and test points against the polyhedron.

## Why it matters here

Last Archive minted Williams' 1978 shadow *map* (1005) and Lokovic/Veach deep shadow maps (1012). Crow 1977 is the other founding family — stencil shadow volumes, Carmack's reverse, and every "silhouette extrusion" GPU path. Anoptic can choose maps or volumes; the library had only maps.

## Key ideas

- Class 1: compute shadows during scan-out (project shadow edges onto the image, switch illumination when a scanline crosses).
- Class 2: from the light's view, split surfaces into lit/shadowed *before* hidden-surface removal.
- Class 3: add shadow-volume polygons to the object database; a point-in-polyhedron test (later: stencil increment/decrement) decides in-shadow.
- Crow argues class 3 has the best characteristics: precise umbra boundaries, works with existing hidden-surface machinery, no extra light-view raster.
- Heidmann (1991) maps the point-in-volume test onto the stencil buffer; Everitt/Kilgard close the near/far clipping holes. Those are cites.

## Caveats

- Fill-rate disaster on modern GPUs without scissor/attenuated lights and two-sided stencil; maps won real-time for a reason.
- Original paper sketches implementations inside each class — not a ready-to-paste Vulkan recipe.
- Non-closed meshes and non-planar polygons need Bergeron's later generalisation.

## Links

- DOI: [10.1145/563858.563901](https://doi.org/10.1145/563858.563901)
- SIGGRAPH History: https://history.siggraph.org/learning/shadow-algorithms-for-computer-graphics-by-crow/
- PDF: https://www.cs.rpi.edu/~cutler/classes/advancedgraphics/S11/papers/crow_shadows_77.pdf
