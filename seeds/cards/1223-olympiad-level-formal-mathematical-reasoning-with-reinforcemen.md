---
title: "Olympiad-level formal mathematical reasoning with reinforcement learning"
authors:
  - "Thomas Hubert"
  - "Google DeepMind AlphaProof team"
year: 2025
venue: "Nature"
arxiv: null
doi: "10.1038/s41586-025-09833-y"
source: "https://doi.org/10.1038/s41586-025-09833-y"
topics:
  - "mathematical-reasoning"
  - "theorem-proving"
  - "imo"
seed_rank: 1223
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: ai-mathematical-reasoning
cites:
  - title: "Gold-medalist Performance in Solving Olympiad Geometry with AlphaGeometry2"
    url: "https://arxiv.org/abs/2502.03544"
    year: 2025
    arxiv: "2502.03544"
    doi: null
  - title: "Mastering the game of Go without human knowledge"
    url: "https://doi.org/10.1038/nature24270"
    year: 2017
    arxiv: null
    doi: "10.1038/nature24270"
see:
  - "980-deepseek-prover-advancing-theorem-proving"
  - "991-deepseek-prover-v2-formal-reasoning-via-rl"
  - "1222-gold-medalist-performance-in-solving-olympiad-geometry-with-al"
---

# Olympiad-level formal mathematical reasoning with reinforcement learning

## One-sentence takeaway

AlphaProof: AlphaZero-style RL in Lean on millions of auto-formalized problems, plus test-time RL on millions of variants — IMO 2024 P1/P2/P6 including the hardest problem, 28/42 silver with AG2.

## Why it matters here

First AI medal at a live IMO (silver, 2024). Formal proofs, multi-day TTRL, not a MATH bump. Nature 2025 is the paper; 2024 blog is the announcement.

## Problem

Informal LLMs do not verify. Formal data is scarce. IMO combinatorics/algebra/NT were out of reach of AG1.

## Design

Auto-formalize a large informal corpus into Lean; RL the proof agent. At test time, generate related problem variants and learn on them (TTRL), 2-3 days per hard problem. Gemini 1.5 Pro guesses answers for "find all" problems; AlphaProof refutes the rest.

## Evidence

Nature, 12 Nov 2025, DOI 10.1038/s41586-025-09833-y. 2024 blog: deepmind.google IMO silver. P3 and P5 (combinatorics) unsolved. No arXiv id used here — do not invent one.

## Limitations

Days of compute vs 4.5h; experts formalized the statements. Not natural language. Open provers (DeepSeek-Prover 980/991) already in catalog — see, do not remint.

## Implications for Broadside

The formal-IMO event. See 1230 for 2025 gold in natural language.

## Bottom line

Mint the Nature paper; cite the blog, do not remint it.

## Links

- DOI: [10.1038/s41586-025-09833-y](https://doi.org/10.1038/s41586-025-09833-y)
- Blog: https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/
