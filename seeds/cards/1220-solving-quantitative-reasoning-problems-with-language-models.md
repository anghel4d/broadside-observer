---
title: "Solving Quantitative Reasoning Problems with Language Models"
authors:
  - "Aitor Lewkowycz"
  - "Anders Andreassen"
  - "David Dohan"
  - "Ethan Dyer"
  - "Henryk Michalewski"
  - "Vinay Ramasesh"
  - "Ambrose Slone"
  - "Cem Anil"
  - "Imanol Schlag"
  - "Theo Gutman-Solo"
  - "Yuhuai Wu"
  - "Behnam Neyshabur"
  - "Guy Gur-Ari"
  - "Vedant Misra"
year: 2022
venue: "NeurIPS"
arxiv: "2206.14858"
doi: null
source: "https://arxiv.org/abs/2206.14858"
topics:
  - "mathematical-reasoning"
seed_rank: 1220
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: ai-mathematical-reasoning
cites:
  []
see:
  - "977-deepseekmath-pushing-limits-of-mathematical-reasoning"
---

# Solving Quantitative Reasoning Problems with Language Models

## One-sentence takeaway

Minerva: PaLM continued on technical tokens, step-by-step LaTeX, no tools — the 2022 event that made "LLM does college STEM" a real paper rather than a GSM8K bump.

## Why it matters here

Named 2022 solve: MATH / GSM8K / STEM-MMLU SOTA without tools, plus about 1/3 of a new undergraduate STEM eval. The pre-o1, pre-IMO ancestor.

## Problem

LLMs failed quantitative reasoning at college level. Tools were the obvious crutch.

## Design

Continue-train PaLM 8B/62B/540B on scientific/math tokens; few-shot step-by-step solutions; majority voting. No calculator.

## Evidence

arXiv:2206.14858, NeurIPS 2022. Google Research.

## Limitations

Still a benchmark paper more than a named open-problem solve. Hallucinated steps. Not formal. Do not mint Hendrycks MATH or GSM8K as siblings.

## Implications for Broadside

See DeepSeekMath 977 (already in catalog) as the open-weight 2024 echo. Not reminted.

## Bottom line

Mint Minerva. Skip the dataset papers.

## Links

- arXiv: [2206.14858](https://arxiv.org/abs/2206.14858)
