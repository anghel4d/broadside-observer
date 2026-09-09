---
title: "Shade Trees"
authors:
  - "Robert L. Cook"
year: 1984
venue: "SIGGRAPH / Computer Graphics 18(3)"
arxiv: null
doi: "10.1145/800031.808602"
source: "https://web.archive.org/web/20201112000000id_/https://graphics.pixar.com/library/ShadeTrees/paper.pdf"
topics:
  - programmable-shading
  - shade-trees
  - reyes-pipeline
seed_rank: 1660
seed_batch: "archive-2026-09-10"
reviewed: "2026-09-10"
pool: "graphics"
relevance_score: 10
lineage: cook-shade-trees
cites:
  - title: "The REYES Image Rendering Architecture"
    url: "https://doi.org/10.1145/37402.37414"
    year: 1987
    arxiv: null
    doi: "10.1145/37402.37414"
  - title: "Distributed Ray Tracing"
    url: "https://doi.org/10.1145/800031.808590"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808590"
see:
  - "1010-the-reyes-image-rendering-architecture"
  - "1659-distributed-ray-tracing"
  - "1038-the-a-buffer-an-antialiased-hidden-surface-method"
---

# Shade Trees

## One-sentence takeaway

Cook replaces fixed Phong-style lighting models with a tree of texture, bump, reflection, and light operators that a renderer evaluates per sample — the conceptual ancestor of RenderMan shaders, GLSL/HLSL graphs, and every node-based material editor.

## Why it matters here

Anoptic’s material/authoring path wants programmable surface appearance without baking a single BRDF enum into the engine. Shade Trees is the 1984 language for that: compose operators, not hard-code models. Title was already in `seen.json` from prior harvests but had no live card (same mint pattern as SHOP 1629). Complements REYES 1010 and Distributed Ray Tracing 1659 from the same Lucasfilm stack.

## Key ideas

- **Shading as expression trees.** Leaves are textures/parameters; interior nodes are math, lighting, bump, and reflection operators; the tree is the shader.
- **Separation from geometry.** Appearance is not glued to a fixed illumination equation; artists/TDs build new looks without new renderer code.
- **Production bridge to REYES.** Shade Trees describe *what* to compute per micropolygon; REYES (1010) describes *where* and *when* those samples run.
- **Bump and texture as first-class.** Blinn-style perturbation and texture lookup sit inside the tree rather than as post-effects.

## Caveats

- Shade Trees are not a typed GPU shading language — modern GLSL/HLSL/Slang/MaterialX are the descendants with registers, derivatives, and binder layouts. Do not remint REYES 1010 or A-buffer 1038.
- Title sat in `radar/seen.json` without a card; this mint closes that gap rather than inventing a new paper.
- Inverse Shade Trees (appearance capture) are a later, separate line — not this card.

## Links

- Wayback Pixar PDF: https://web.archive.org/web/20201112000000id_/https://graphics.pixar.com/library/ShadeTrees/paper.pdf
- DOI: https://doi.org/10.1145/800031.808602
- Pixar library page: https://graphics.pixar.com/library/ShadeTrees/
