---
title: "Infinite Worlds from One Example: What Local Generators Must Share"
authors:
  - "Amin Najafgholizadeh"
  - "Mohsen Afsharchi"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2611.01048"
doi: null
source: "https://arxiv.org/abs/2611.01048"
topics:
  - "procedural-generation"
  - "wave-function-collapse"
  - "random-access-worlds"
  - "cellular-automata"
seed_rank: 2502
seed_batch: "craft-2026-11-03"
reviewed: "2026-11-03"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "Infinite Worlds from One Example: What Local Generators Must Share"
    url: "https://arxiv.org/abs/2611.01048"
    year: 2026
    arxiv: "2611.01048"
    doi: null
see: ["103-wave-function-collapse", "459-example-based-model-synthesis", "1860-meaningful-content-diversity-through-non-uniform-tile-wfc"]
---

# Infinite Worlds from One Example: What Local Generators Must Share

## One-sentence takeaway

A random-access world generator where each cell is a fixed function of nearby randomness cannot be both exactly valid against a Wave Function Collapse example and faithful to its statistics when the constraints carry a quantity over distance (like a brick row's place between mortar lines): at radius \(r\) it leaves forbidden windows at density at least order \(1/r\), and the fix is randomness shared along the relevant axis, which a finite check on the example can certify.

## Why it matters here

RTS maps want seeded, chunk-by-chunk, any-order generation so every client builds the same world, and designers want example-driven local style. This paper says exactly when those two wishes conflict and what extra seed input (row coins, position modulo a period) resolves it, which turns a tuning headache into a design rule for our map generator.

## Key ideas

- **Locality model.** Each cell depends on randomness within radius \(r\), optionally on coins shared along rows or blocks, and on position modulo a fixed period; cellular automata and convolutional diffusion samplers fit.
- **Lower bound.** With only independent per-cell coins, any statistics-faithful generator leaves forbidden windows at density of order at least \(1/r\); a min-coin copy construction matches the order.
- **Certificate.** A finitely checkable condition on the example's patches decides when row types from the seed plus position modulo a period suffice, and names the input each example needs.
- **Experiments.** On 52 public WFC examples and 27 others, the certificate fires only where independent-coin generators fail; given the named input, a neural cellular automaton and a diffusion model become valid on most certified cases, and repair keeps random access.

## Caveats

Validity is measured as at most one forbidden window in a thousand after repair, not zero. The model excludes generators that read absolute position or use unboundedly many noise scales. Learned generators are used for the experiments; a pure hand-written rule set is not compared head to head. I read the abstract and introduction (35 pages plus a 47-page supplement).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.01048
- PDF: https://arxiv.org/pdf/2611.01048
