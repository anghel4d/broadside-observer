---
title: "Fast Diffraction Pathfinding for Dynamic Sound Propagation"
authors: ["Carl Schissler", "Gregor Mückl", "Paul Calamia"]
year: 2021
venue: "ACM TOG / SIGGRAPH"
arxiv: null
doi: "10.1145/3450626.3459751"
source: "https://doi.org/10.1145/3450626.3459751"
topics: [dynamic-scenes, diffraction, geometric, interactive]
seed_rank: 1680
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "High-Order Diffraction and Diffuse Reflections for Interactive Sound Propagation in Large Environments"
    url: "https://doi.org/10.1145/2601097.2601216"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601216"
  - title: "Modeling Acoustics in Virtual Environments Using the Uniform Theory of Diffraction"
    url: "https://doi.org/10.1145/383259.383323"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383323"
  - title: "An analytic secondary source model of edge diffraction impulse responses"
    url: "https://doi.org/10.1121/1.428071"
    year: 1999
    arxiv: null
    doi: "10.1121/1.428071"
see:
  - "1664-high-order-diffraction-and-diffuse-reflections-for-interactive-sound"
  - "1660-modeling-acoustics-in-virtual-environments-using-the-uniform-theory-of"
  - "1665-an-analytic-secondary-source-model-of-edge-diffraction-impulse-responses"
---

# Fast Diffraction Pathfinding for Dynamic Sound Propagation

## One-sentence takeaway

Fast diffraction pathfinding: treat visible edges as a graph and search diffracted routes as the world moves — dynamic geometric diffraction at SIGGRAPH 2021 rates.

## Why it matters here

High-order diffraction (1664) dies when geometry animates. Schissler/Mückl/Calamia 2021 recast diffraction as pathfinding on an edge graph so doors and movers don't require a full retrace. GRID COMMAND destructible interiors want this, not a static beam tree.

## Key ideas

- **Edge graph.** Diffraction as shortest/feasible paths over silhouette edges.
- **Dynamic scenes.** Update the graph as occluders move rather than restarting UTD from scratch.
- **Interactive TOG 2021.** Facebook/RealityLabs + UNC alumni flavor; harvest rel=13.
- **Geometric, not BTMS analytic IR.** Path geometry first; filter/UTD/BTM as a shader on the path.

## Caveats

Still high-frequency geometric. Graph density vs CPU. Not wave (Triton) and not Svensson closed-form (1665).

## Links

- DOI: https://doi.org/10.1145/3450626.3459751
