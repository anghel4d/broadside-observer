---
title: "Mathematical discoveries from program search with large language models"
authors:
  - "Bernardino Romera-Paredes"
  - "Mohammadamin Barekatain"
  - "Alexander Novikov"
  - "Matej Balog"
  - "M. Pawan Kumar"
  - "Emilien Dupont"
  - "Francisco J. R. Ruiz"
  - "Jordan S. Ellenberg"
  - "Pengming Wang"
  - "Omar Fawzi"
  - "Pushmeet Kohli"
  - "Alhussein Fawzi"
year: 2024
venue: "Nature"
arxiv: null
doi: "10.1038/s41586-023-06924-6"
source: "https://doi.org/10.1038/s41586-023-06924-6"
topics:
  - "mathematical-reasoning"
  - "algorithm-discovery"
seed_rank: 1224
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: ai-mathematical-reasoning
cites:
  []
see:
  []
---

# Mathematical discoveries from program search with large language models

## One-sentence takeaway

FunSearch: freeze an LLM, evolve functions against a systematic evaluator — new cap-set constructions (finite and asymptotic) and better online bin-packing heuristics. First LLM-era discovery on a named open combinatorics problem.

## Why it matters here

Cap set is the event, not a benchmark bump. Programs, not answers — interpretable, deployable.

## Problem

LLMs confabulate; raw search over objects does not generalise. Cap set: largest subset of F_3^n with no three-term AP.

## Design

Island-evolutionary program search. Evaluator is the source of truth. Skeleton written by humans; the LLM evolves the interesting function.

## Evidence

Nature 625, 468-475 (2024). DOI 10.1038/s41586-023-06924-6. Nature is the artifact (no arXiv id used). Ellenberg is a coauthor.

## Limitations

Needs an automatic evaluator. Not a proof of a theorem, a construction. AlphaEvolve (1231) is the later generalisation.

## Implications for Broadside

Named combinatorics solve. See 1225 AlphaTensor, 1231 AlphaEvolve.

## Bottom line

Mint FunSearch Nature.

## Links

- DOI: [10.1038/s41586-023-06924-6](https://doi.org/10.1038/s41586-023-06924-6)
- Blog: https://deepmind.google/discover/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/
