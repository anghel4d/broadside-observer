---
title: "AlphaEvolve: A coding agent for scientific and algorithmic discovery"
authors:
  - "Alexander Novikov"
  - "Ngan Vu"
  - "Marvin Eisenberger"
  - "Emilien Dupont"
  - "Po-Sen Huang"
  - "Adam Zsolt Wagner"
  - "Sergey Shirobokov"
  - "Borislav Kozlovskii"
  - "Francisco J. R. Ruiz"
  - "Abbas Mehrabian"
  - "M. Pawan Kumar"
  - "Abigail See"
  - "Swarat Chaudhuri"
  - "George Holland"
  - "Alex Davies"
  - "Sebastian Nowozin"
  - "Pushmeet Kohli"
year: 2025
venue: "arXiv white paper"
arxiv: "2506.13131"
doi: null
source: "https://arxiv.org/abs/2506.13131"
topics:
  - "algorithm-discovery"
  - "mathematical-reasoning"
seed_rank: 1231
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: ai-mathematical-reasoning
cites:
  - title: "Mathematical discoveries from program search with large language models"
    url: "https://doi.org/10.1038/s41586-023-06924-6"
    year: 2024
    arxiv: null
    doi: "10.1038/s41586-023-06924-6"
  - title: "Discovering faster matrix multiplication algorithms with reinforcement learning"
    url: "https://doi.org/10.1038/s41586-022-05172-4"
    year: 2022
    arxiv: null
    doi: "10.1038/s41586-022-05172-4"
see:
  - "1224-mathematical-discoveries-from-program-search-with-large-langua"
  - "1225-discovering-faster-matrix-multiplication-algorithms-with-reinf"
---

# AlphaEvolve: A coding agent for scientific and algorithmic discovery

## One-sentence takeaway

Evolutionary coding agent (Gemini Flash + Pro + evaluators) that improves whole programs: first improvement in 56 years on 4x4 complex matrix multiplication (48 scalar multiplies, beating Strassen in that setting), plus datacenter/circuit/training-stack wins.

## Why it matters here

Named 2025 algorithm-discovery event that generalises FunSearch from functions to codebases. Counts as "AI solved a named hard math thing" (matrix multiplication, again).

## Problem

FunSearch evolves a function. Real algorithms are files. Need LLM proposals plus automatic evaluators plus an evolutionary loop.

## Design

Ensemble: Flash for breadth, Pro for depth. Evaluators score candidates. Iterate. Applied to math constructions and to Google production stacks.

## Evidence

arXiv:2506.13131 (June 2025). DeepMind blog 14 May 2025. 4x4 complex: 48 multiplies.

## Limitations

White paper, not Nature. Needs a metric. Not a proof assistant.

## Implications for Broadside

Closes the FunSearch-AlphaTensor discovery spine for this ingest.

## Bottom line

Mint 2506.13131.

## Links

- arXiv: [2506.13131](https://arxiv.org/abs/2506.13131)
- Blog: https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/
