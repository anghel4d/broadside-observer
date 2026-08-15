---
title: Wave Function Collapse
authors:
- Maxim Gumin
year: 2016
venue: GitHub
arxiv: null
doi: null
source: https://github.com/mxgmn/WaveFunctionCollapse
topics:
- pcg
- procedural
seed_rank: 103
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 9
lineage: procedural-generation
cites:
- title: Example-Based Model Synthesis
  url: https://doi.org/10.1145/1230100.1230119
  year: 2007
  arxiv: null
  doi: 10.1145/1230100.1230119
- title: Texture Synthesis by Non-parametric Sampling
  url: https://www2.eecs.berkeley.edu/Research/Projects/CS/vision/papers/efros-iccv99.pdf
  year: 1999
  arxiv: null
  doi: null
see:
- "459-example-based-model-synthesis"
---

# Wave Function Collapse

## One-sentence takeaway

WFC fills an output bitmap so that every NxN window is a pattern from a single example image, by repeatedly collapsing the lowest-entropy region and propagating adjacency constraints.

## Why it matters here

Anoptic / Broadside map and tileset generation can take a hand-authored exemplar and grow a larger coherent grid without writing a custom grammar — the same observe/propagate loop works for 2D tiles and, more expensively, voxels.

## Key ideas

- Local similarity: (C1) the output may contain only NxN patterns present in the input (N is typically 3); (weak C2) pattern frequencies over many outputs should match the input histogram.
- The "wave" is a grid of superpositions. Observation picks the unobserved cell with lowest Shannon entropy and samples a pattern; propagation forbids neighbor patterns that contradict the new adjacency, implemented as AC-4-style constraint propagation.
- Two models: overlapping (patterns extracted from a bitmap, optionally with rotations/reflections) and simple tiled (explicit tiles plus adjacency, with a D4 symmetry system so you do not enumerate every oriented pair).
- A contradiction is a cell whose coefficient vector is all false. Deciding whether a nontrivial completion exists is NP-hard; in practice contradictions are rare and the usual recovery is restart.
- Direct descendant of Merrell's model synthesis (AC-3 over tiles from an example). Gumin adds overlapping patterns, the lowest-entropy heuristic (kills scanline directional bias), and visualization of partial waves. Easy tilesets never contradict and therefore never form long-range structure.

## Caveats

## Links

- URL: https://github.com/mxgmn/WaveFunctionCollapse
- Demo video: https://youtu.be/DOQTr2Xmlz0
