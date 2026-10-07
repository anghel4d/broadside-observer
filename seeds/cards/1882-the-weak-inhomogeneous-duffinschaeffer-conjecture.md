---
title: "The weak inhomogeneous Duffin–Schaeffer conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 022; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-weak-inhomogeneous-Duffin-Schaeffer-conjecture-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "unformalized"
seed_rank: 1882
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "The Weak Inhomogeneous Duffin–Schaeffer Conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-weak-inhomogeneous-Duffin-Schaeffer-conjecture-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The weak inhomogeneous Duffin–Schaeffer conjecture

## One-sentence takeaway

OpenAI's result family 022 (Number theory) claims: Proves that for every real shift γ and finite-valued $\psi:\mathbb N\to[0,\infty)$, divergence of $\sum_q\phi(q)\psi(q)/q$ implies $\|qx-\gamma\|\lt \psi(q)$ for infinitely many q, for almost every x.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Here ϕ is Euler's totient and the norm is distance to the nearest integer. Numerators are unrestricted; no monotonicity or Diophantine condition on γ is needed.
- *The Weak Inhomogeneous Duffin–Schaeffer Conjecture*: We prove the weak inhomogeneous Duffin–Schaeffer conjecture. For every fixed γ ∈ ℝ and finite-valued $\psi:\mathbb N\to[0,\infty)$, divergence of $\sum_{q\ge1}\phi(q)\psi(q)/q$ implies $\|qx-\gamma\|\lt \psi(q)$ for infinitely many q, for almost every x. Here ϕ is Euler's totient and $\|\cdot\|$ is distance to the nearest integer.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The Weak Inhomogeneous Duffin–Schaeffer Conjecture](https://github.com/openai/math/blob/main/preprints/The-weak-inhomogeneous-Duffin-Schaeffer-conjecture-September-25-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
