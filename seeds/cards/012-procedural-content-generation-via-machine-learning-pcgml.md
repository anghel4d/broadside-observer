---
title: "Procedural Content Generation via Machine Learning (PCGML)"
authors:
  - "Adam Summerville"
  - "Sam Snodgrass"
  - "Matthew Guzdial"
  - "Christoffer Holmgård"
  - "Amy K. Hoover"
  - "Aaron Isaksen"
  - "Andy Nealen"
  - "Julian Togelius"
year: 2018
venue: "IEEE Transactions on Games"
arxiv: "1702.00539"
doi: "10.1109/TG.2018.2846639"
source: "https://arxiv.org/abs/1702.00539"
topics:
  - pcg
seed_rank: 12
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
lineage: procedural-generation
cites:
  - title: "Search-Based Procedural Content Generation: A Taxonomy and Survey"
    url: "https://doi.org/10.1109/TCIAIG.2011.2148116"
    year: 2011
    arxiv: null
    doi: "10.1109/TCIAIG.2011.2148116"
  - title: "Experience-Driven Procedural Content Generation"
    url: "https://doi.org/10.1109/TCIAIG.2011.2159716"
    year: 2011
    arxiv: null
    doi: "10.1109/TCIAIG.2011.2159716"
see:
  - "019-search-based-procedural-content-generation-a-taxonomy-and-su"
  - "119-experience-driven-procedural-content-generation"
---

# Procedural Content Generation via Machine Learning (PCGML)

## One-sentence takeaway

PCGML trains models on existing game content — levels, maps, stories, cards — so generation, repair, and critique become sample-and-complete rather than search or hand-authored grammars.

## Why it matters here

GRID COMMAND maps and entity tables are functional content with tiny labeled sets. This survey is the menu of representations (tiles, graphs, sequences) Broadside should try before inventing a new generator.

## Key ideas

- PCGML is defined against search-based, solver-based, and constructive PCG: the generator is a model of existing content, not a fitness function or a grammar.
- Scope is functional content (platformer levels, maps, IF stories, CCG cards), not sprites or SFX.
- Because the model is of existing work, the same machinery supports mixed-initiative design, compression, repair, and automated critique — not only autonomous generation.
- Methods covered: LSTMs and convnets, autoencoders, Markov / n-gram / multi-dimensional Markov chains, clustering, and matrix factorization.
- Open problems that still bite: tiny datasets, missing training data, multi-layer structure (geometry vs mechanics), style transfer, and using PCG itself as a game mechanic.

## Caveats

## Links

- arXiv: [1702.00539](https://arxiv.org/abs/1702.00539)
- PDF: https://arxiv.org/pdf/1702.00539
- DOI: [10.1109/TG.2018.2846639](https://doi.org/10.1109/TG.2018.2846639)
