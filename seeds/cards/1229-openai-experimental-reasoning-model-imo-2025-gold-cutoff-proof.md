---
title: "OpenAI experimental reasoning model, IMO 2025 gold-cutoff proofs"
authors:
  - "Alexander Wei"
  - "Sheryl Hsu"
  - "Noam Brown"
  - "OpenAI"
year: 2025
venue: "OpenAI first-party writeup / proof release"
arxiv: null
doi: null
source: "https://openai.com/index/first-proof-submissions/"
topics:
  - "mathematical-reasoning"
  - "imo"
seed_rank: 1229
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: ai-mathematical-reasoning
cites:
  []
see:
  - "1228-learning-to-reason-with-llms"
  - "1223-olympiad-level-formal-mathematical-reasoning-with-reinforcemen"
---

# OpenAI experimental reasoning model, IMO 2025 gold-cutoff proofs

## One-sentence takeaway

An unreleased general-purpose reasoning model scores 35/42 (5/6) on IMO 2025 under human contest rules — two 4.5-hour sessions, no tools, natural-language proofs graded by former medalists. First-party artifact is the proof release / writeup, not a paper.

## Why it matters here

User: OpenAI IMO gold 2025 / o3 / o1 math if there is a real paper or technical report (blog+eval OK). This is the 2025 gold event. Not official IMO participation; OpenAI's own gold-cutoff comparison.

## Problem

2024 AlphaProof needed Lean, days of TTRL, and expert formalization. Can a general reasoner write informal IMO proofs in contest time?

## Design

General-purpose RL / test-time compute (hours, not seconds). No IMO-specific fine-tune claimed. Natural language only.

## Evidence

https://openai.com/index/first-proof-submissions/ plus Alexander Wei / Noam Brown public notes. Solutions posted. Gemini Deep Think independently also 35/42 with official IMO grading (1230).

## Limitations

Not coordinator-certified as a contestant. Grading is three ex-medalists, unanimous. Model unreleased; o3/o4-mini public models did not medal on the same paper. P6 unsolved.

## Implications for Broadside

Pair with 1230 (DeepMind official gold, same score). See 1223 for the 2024 formal silver.

## Bottom line

Mint the first-party writeup. Do not invent a paper.

## Links

- https://openai.com/index/first-proof-submissions/
