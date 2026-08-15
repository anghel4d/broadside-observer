---
title: "MarkovJunior"
authors:
  - "Maxim Gumin"
year: 2022
venue: "GitHub"
arxiv: null
doi: null
source: "https://github.com/mxgmn/MarkovJunior"
topics:
  - pcg
  - rewriting
seed_rank: 481
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: procedural-generation
cites:
  - title: "Wave Function Collapse"
    url: "https://github.com/mxgmn/WaveFunctionCollapse"
    year: 2016
  - title: "Example-Based Model Synthesis"
    url: "https://doi.org/10.1145/1230100.1230119"
    year: 2007
    doi: "10.1145/1230100.1230119"
see:
  - "103-wave-function-collapse"
  - "459-example-based-model-synthesis"
---

# MarkovJunior

## One-sentence takeaway

MarkovJunior programs are ordered rewrite rules on a grid; the interpreter applies the first matching rule at a random (or all non-conflicting) site, and optional constraint propagation generates only those runs that reach an observed future.

## Why it matters here

Living multi-scale PCG tool for RTS/colony maps: hierarchical dungeons, rivers, and architecture as rule programs rather than a single WFC pass.

## Key ideas

- Named for Markov algorithms: an ordered list of `x=y` replacements, generalized to 2D/3D where left- and right-hand sides have equal size.
- Nodes compose: `(exists)` picks a random match, `{forall}` a maximal non-overlapping set, sequences run stages, nested Markov nodes return to earlier rules (maze backtracker, Nystrom dungeon).
- Inference treats unmatched cells as waves and propagates rewrite-rule constraints (rule-propagation fields generalizing Dijkstra maps) so a self-avoiding walk can be forced to cover the grid or solve Sokoban.
- Same author as WaveFunctionCollapse; MIT-licensed C# with 150+ example models.

## Caveats

## Links

- Repository: https://github.com/mxgmn/MarkovJunior
