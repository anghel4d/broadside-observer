---
title: "Search-Based Procedural Content Generation: A Taxonomy and Survey"
authors:
  - "Julian Togelius"
  - "Georgios N. Yannakakis"
  - "Kenneth O. Stanley"
  - "Cameron Browne"
year: 2011
venue: "IEEE TCIAIG"
arxiv: null
doi: "10.1109/TCIAIG.2011.2148116"
source: "https://doi.org/10.1109/TCIAIG.2011.2148116"
topics:
  - pcg
seed_rank: 19
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
lineage: procedural-generation
cites:
  - title: "Experience-Driven Procedural Content Generation"
    url: "https://doi.org/10.1109/TCIAIG.2011.2159716"
    year: 2011
    arxiv: null
    doi: "10.1109/TCIAIG.2011.2159716"
  - title: "Procedural Content Generation via Machine Learning (PCGML)"
    url: "https://arxiv.org/abs/1702.00539"
    year: 2018
    arxiv: "1702.00539"
    doi: "10.1109/TG.2018.2846639"
see:
  - "119-experience-driven-procedural-content-generation"
  - "012-procedural-content-generation-via-machine-learning-pcgml"
---

# Search-Based Procedural Content Generation: A Taxonomy and Survey

## One-sentence takeaway

SBPCG is PCG recast as a search problem: a content representation, a search algorithm, and an evaluation function — the 2011 taxonomy that later PCGML and mixed-initiative work still cite.

## Why it matters here

GRID COMMAND’s generated maps, encounter tables, and buildable props are search problems before they are learning problems. This paper names the three knobs Broadside should turn.

## Key ideas

- Constructive PCG (grammars, noise, constraint solvers that never backtrack at the content level) is distinguished from search-based PCG, where a space of candidates is explored.
- The taxonomy axes are representation (direct vs indirect / compositional), search algorithm (evolutionary, random, exhaustive), and evaluation (direct theory-driven, simulation-based, interactive).
- Indirect encodings (genotypes that expand into maps) are argued to search more smoothly than bitmaps of tiles.
- Evaluation functions are the hard part: theory-driven scores are cheap but gameable; simulation-based scores need an AI to play the content; interactive scores need a human in the loop.
- The survey catalogs then-current applications — levels, tracks, weapons, rules — and flags the evaluation bottleneck that Experience-Driven PCG and later PCGML try to fill.

## Caveats

## Links

- DOI: [10.1109/TCIAIG.2011.2148116](https://doi.org/10.1109/TCIAIG.2011.2148116)
