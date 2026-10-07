---
title: "Linear-Speed Vertex Cache Optimisation"
authors:
  - "Tom Forsyth"
year: 2006
venue: "Technical article, RAD Game Tools (28 September 2006)"
arxiv: null
doi: null
source: "https://tomforsyth1000.github.io/papers/fast_vert_cache_opt.html"
topics:
  - vertex-cache-optimisation
  - triangle-ordering
  - mesh-processing
  - mesh-shaders-gpu-driven
  - vulkan-realtime-rendering
seed_rank: 2240
seed_batch: "archive-2026-10-08"
reviewed: "2026-10-08"
pool: "graphics"
relevance_score: 8
lineage: mesh-shaders-gpu-driven
cites:
  - title: "Optimization of Mesh Locality for Transparent Vertex Caching"
    url: "https://doi.org/10.1145/311535.311565"
    year: 1999
    arxiv: null
    doi: "10.1145/311535.311565"
  - title: "Universal Rendering Sequences for Transparent Vertex Caching of Progressive Meshes"
    url: "https://doi.org/10.1111/1467-8659.00573"
    year: 2002
    arxiv: null
    doi: "10.1111/1467-8659.00573"
  - title: "Fast Triangle Reordering for Vertex Locality and Reduced Overdraw"
    url: "https://doi.org/10.1145/1276377.1276489"
    year: 2007
    arxiv: null
    doi: "10.1145/1276377.1276489"
---

# Linear-Speed Vertex Cache Optimisation

## One-sentence takeaway

Reorder an indexed triangle list greedily. Model a 32-entry LRU cache, score each vertex by its cache position (raised to the power 1.5) plus a bonus for having few undrawn triangles left, and always emit the highest-scoring triangle. The result is a single ordering that is near-optimal across unknown hardware cache sizes, computed in linear time with no edge data.

## Why it matters here

Anoptic's meshlet pipeline starts from a triangle order. Meshlet builders (1129) and meshlet compression (226) work best on locality-ordered input, and the classic vertex-cache objective, the average cache miss ratio (ACMR), is still the cheapest proxy for vertex reuse inside a meshlet. Forsyth's algorithm is short enough to run at load time on procedurally generated or composited meshes, such as GRID COMMAND terrain chunks or unit variants. That is the use case he names: dynamically assembled characters in RPGs and MMOs.

## Key ideas

- **Universal, not tuned.** Hoppe (1999) optimised for one known cache size and policy. Following Bogomjakov and Gotsman's "universal rendering sequence" idea, this algorithm aims for one ordering that is good on any FIFO or LRU cache of unknown size. An LRU model is used because modelling a FIFO of the wrong size can thrash.
- **Vertex score.** For positions 3 and up in the modelled cache, the score is `(1 − (pos − 3)/(size − 3))^1.5`. The three vertices of the last triangle get a fixed, deliberately *lower* 0.75, to discourage long thin strips that double back (ACMR around 1.0). Vertices not in the cache score 0.
- **Valence boost.** Add `2.0 × remaining^−0.5`, where `remaining` is the number of undrawn triangles using the vertex. This picks up isolated "detritus" triangles as the sweep passes, instead of leaving them for an expensive clean-up at about 3 vertices per triangle, and restarts at dead ends near mesh edges.
- **Greedy and linear.** Each triangle's score is the sum of its vertices' scores. The best triangle is emitted, the valences of its vertices drop, the cache is updated, and the cached scores of affected vertices and triangles are recomputed. The next best triangle is usually already known from that update, and a full scan runs only in rare cases. Per-vertex data is cache position, score, triangle counts and a triangle list, with no edge data, which also sidesteps edges shared by many triangles.
- **Constants by annealing.** The constants 1.5, 0.75, 2.0 and 0.5 come from days of brute-force annealing over typical meshes and simulated caches. The article reports results within a few percent of the best known alternatives, with ACMR tables for hardware caches of 4 to 1024 entries.

## Caveats

This is a 2006 article, not a peer-reviewed paper. Its first score table is wrong (the author's own "emergency edit"), so use the code listing. The algorithm optimises the post-transform cache, which modern mesh-shader pipelines do not have; inside meshlets, the targets are unique-vertex count and primitive locality, so re-derive the scoring for that objective. It ignores overdraw and vertex-fetch order. Sander, Nehab and Barczak (2007, Tipsify) later gave a fast alternative that also reduces overdraw. The 4-entry cache results are poor by design.

## Links

- Article (HTML, author's archive): https://tomforsyth1000.github.io/papers/fast_vert_cache_opt.html
- Hoppe 1999, transparent vertex caching: https://doi.org/10.1145/311535.311565
- Sander–Nehab–Barczak 2007 (Tipsify): https://doi.org/10.1145/1276377.1276489
