---
title: "Learning to Reason with LLMs"
authors:
  - "OpenAI"
year: 2024
venue: "OpenAI blog / technical report"
arxiv: null
doi: null
source: "https://openai.com/index/learning-to-reason-with-llms/"
topics:
  - "mathematical-reasoning"
seed_rank: 1228
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: ai-mathematical-reasoning
cites:
  []
see:
  - "1220-solving-quantitative-reasoning-problems-with-language-models"
  - "1226-frontiermath-a-benchmark-for-evaluating-advanced-mathematical"
---

# Learning to Reason with LLMs

## One-sentence takeaway

o1: large-scale RL for chain-of-thought at test time — AIME 2024 74% (to 83% with consensus), Codeforces 89th percentile, GPQA diamond at PhD-contestant level. The first-party artifact is this blog/eval, not a separate arXiv.

## Why it matters here

User: o1 math if there is a real paper or technical report (blog+eval OK). This is the artifact. Not every GSM8K increment — AIME / GPQA / Codeforces are the named jumps.

## Problem

Next-token models fail multi-step math. Process supervision and test-time compute were the missing knobs.

## Design

RL to produce long hidden chains of thought; more inference compute → better answers. Public evals: AIME, Codeforces, GPQA.

## Evidence

https://openai.com/index/learning-to-reason-with-llms/ (Sept 2024). No arXiv id. o1-preview / o1 / o1-mini product line.

## Limitations

Closed model, closed traces. FrontierMath still near-zero at release (see 1226). o3 IMO-gold is a later experimental model (1229), not this blog.

## Implications for Broadside

The reasoning-model event. See 1229 for the 2025 IMO gold experimental system.

## Bottom line

Mint the o1 blog as the technical report. Do not invent an arXiv.

## Links

- https://openai.com/index/learning-to-reason-with-llms/
