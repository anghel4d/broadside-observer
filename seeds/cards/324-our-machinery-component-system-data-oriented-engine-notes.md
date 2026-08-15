---
title: "Our Machinery Component System / data-oriented engine notes"
authors:
  - "Niklas Frykholm"
  - "Tobias Persson"
year: 2018
venue: "Our Machinery Blog"
arxiv: null
doi: null
source: "https://ruby0x1.github.io/machinery_blog_archive/post/ecs-and-rendering/index.html"
topics:
  - ecs
  - engine
seed_rank: 324
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "Bitsquid Data-Driven / Entity system posts"
    url: "https://bitsquid.blogspot.com/2014/08/building-data-oriented-entity-system.html"
    year: 2013
    arxiv: null
    doi: null
  - title: "Data-Oriented Design and C++"
    url: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
    year: 2014
    arxiv: null
    doi: null
  - title: "Unity ECS / DOTS architecture overview (Entities package docs)"
    url: "https://docs.unity3d.com/Packages/com.unity.entities@latest"
    year: 2018
    arxiv: null
    doi: null
see:
  - "268-bitsquid-data-driven-entity-system-posts"
  - "194-data-oriented-design-and-c"
  - "325-unity-ecs-dots-architecture-overview-entities-package-docs"
---

# Our Machinery Component System / data-oriented engine notes

## One-sentence takeaway

The Machinery’s renderer never iterates “every entity and draw it”: ECS plugins expose `tm_ci_render_i` / `tm_ci_shader_i` callbacks, the engine culls per viewer, and a render graph owns GPU work.

## Why it matters here

This is the Bitsquid-lineage answer to “how does an ECS talk to a modern renderer,” which is exactly the Anoptic problem of feeding GRID COMMAND views without baking mesh types into the engine core.

## Key ideas

- The ECS itself is a plugin. Components opt into rendering through two interfaces: renderables (cull + draw) and shader/aux objects (lights, probes, post, graph extensions).
- A frame gathers editor viewports, lets plugins inject render-graph modules, culls lights/probes, runs shader-update callbacks, builds the graph, then culls renderables for every generated viewer.
- Visibility is a bit stream consumed by broad parallel component passes, aimed at hundreds of thousands of components per frame.
- Viewers are first-class (editor camera, shadow camera, reflection probe), so the same component data is culled once per view rather than drawn ad hoc.
- Original `ourmachinery.com/post/ecs-and-rendering/` is offline; the 2018-10-23 archive is the stable copy.

## Caveats

## Links

- Archive: https://ruby0x1.github.io/machinery_blog_archive/post/ecs-and-rendering/index.html
