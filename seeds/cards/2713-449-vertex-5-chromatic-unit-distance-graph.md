---
title: "From two heptagrams to a 449-vertex 5-chromatic unit-distance graph"
authors:
  - "Marijn J. H. Heule"
  - "Benjamin Przybocki"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.28518"
doi: null
source: "https://arxiv.org/abs/2611.28518"
version_reviewed: "v1"
topics:
  - "hadwiger-nelson"
  - "unit-distance-graphs"
  - "chromatic-number"
  - "sat-solving"
  - "cyclotomic-fields"
seed_rank: 2713
seed_batch: "curiosity-2026-11-25"
reviewed: "2026-11-25"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "From two heptagrams to a 449-vertex 5-chromatic unit-distance graph"
    url: "https://arxiv.org/abs/2611.28518"
    year: 2026
    arxiv: "2611.28518"
    doi: null
see: []
---

# From two heptagrams to a 449-vertex 5-chromatic unit-distance graph

## One-sentence takeaway

A 5-chromatic unit-distance graph on 449 vertices and 2198 edges, down from 509 vertices, is found by a simple greedy construction from a 14-vertex seed of two heptagrams, with 7-fold rotational symmetry and coordinates in Q(sin(2π/21)).

## Why it's lovely

The Hadwiger–Nelson problem asks how many colours colour the plane so that no two points at distance 1 share a colour; the answer was between 4 and 7 until de Grey's 1581-vertex 5-chromatic graph in 2018, then Polymath16 cut it to 509 vertices. This paper reaches 449 with a graph that does not contain the Moser spindle, built by starting from two heptagrams, repeatedly adding vertices by a greedy edge-maximising heuristic over a fixed set of 84 unit vectors (and their conjugates) taken from Haugland's H21 graph, and then extracting a small 5-chromatic subgraph. The picture is lovely: a heptagon-symmetric lattice of unit steps in a cyclotomic field forces five colours. The paper notes in passing that OpenAI has recently proved χ(R²) ≥ 6 non-constructively, with no finite 6-chromatic unit-distance graph known, which makes this small constructive record an interesting counterpoint.

## Key ideas

- **Problem.** Hadwiger–Nelson: χ(R²) ≥ 4 by the Moser spindle, ≤ 7 by a hexagonal tiling; compactness reduces it to finite unit-distance graphs.
- **History in the paper.** de Grey 2018: 1581 vertices; Polymath16 and Parts 2020: 509 vertices; Moser-spindle-free graphs of 64,513, 1441, 2131, 852 and 557 vertices.
- **Construction.** Seed C14 is the induced subgraph of Haugland's H21 consisting of its two heptagrams; vertices are added greedily to maximise edge count among unit vectors from 84 directions and their reflections, and once 5-chromatic a small subgraph is extracted.
- **Result.** G449 has 449 vertices and 2198 edges, 7-fold symmetry, coordinates in Q(sin(2π/21)), and contains no Moser spindle.
- **Context.** The paper cites an OpenAI proof that χ(R²) ≥ 6, non-constructive, with no known finite 6-chromatic unit-distance graph.

## Caveats

I read the abstract, introduction and construction sections of v1 (21 Nov 2026, 8 pp.); I did not check the colouring certificate or the 2198-edge list. The χ(R²) ≥ 6 claim is only what this paper says about someone else's result; I did not verify it. It is unrefereed, and the improvement is a record in a small search, not a change in the bounds on χ(R²) itself.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.28518
- PDF: https://arxiv.org/pdf/2611.28518
