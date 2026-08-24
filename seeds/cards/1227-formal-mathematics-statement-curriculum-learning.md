---
title: "Formal Mathematics Statement Curriculum Learning"
authors:
  - "Stanislas Polu"
  - "Jesse Michael Han"
  - "Kunhao Zheng"
  - "Mantas Baksys"
  - "Igor Babuschkin"
  - "Ilya Sutskever"
year: 2022
venue: "ICLR"
arxiv: "2102.06221"
doi: null
source: "https://arxiv.org/abs/2102.06221"
topics:
  - "theorem-proving"
  - "mathematical-reasoning"
seed_rank: 1227
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  []
see:
  - "980-deepseek-prover-advancing-theorem-proving"
---

# Formal Mathematics Statement Curriculum Learning

## One-sentence takeaway

The 2021+ GPT-f successor: expert-iteration on formal math with a statement curriculum, plus the miniF2F benchmark — OpenAI's formal-math paper inside the 2021-2026 window (original GPT-f is 2020, not reminted).

## Why it matters here

User: GPT-f / formal math if 2021+ and a real paper. This is that paper. Introduces miniF2F as the eval, not as a dump-the-bench card.

## Problem

Formal proof search has no natural curriculum; models stall on the long tail of lemmas.

## Design

Generate formal statements of increasing difficulty; expert iteration (prove, train on successes); evaluate on miniF2F (Olympiad / undergraduate Lean/Metamath/Isabelle).

## Evidence

arXiv:2102.06221, ICLR 2022.

## Limitations

Pre-AlphaProof, pre-DeepSeek-Prover. miniF2F itself is a bench — do not mint a second card for it.

## Implications for Broadside

See DeepSeek-Prover 980/982/991 (already in catalog) as the later open jump.

## Bottom line

Mint 2102.06221 as the 2021 formal-math event. Skip 2009.03393 GPT-f (2020).

## Links

- arXiv: [2102.06221](https://arxiv.org/abs/2102.06221)
