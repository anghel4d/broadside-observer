---
title: "Erdős’s reciprocal-sum conjecture and quasipolynomial Szemerédi bounds"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 159; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Quasipolynomial-Bounds-for-Arithmetic-Progressions-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2015
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Quasipolynomial Bounds for Arithmetic Progressions"
    url: "https://github.com/openai/math/blob/main/preprints/Quasipolynomial-Bounds-for-Arithmetic-Progressions-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Erdős’s reciprocal-sum conjecture and quasipolynomial Szemerédi bounds

## One-sentence takeaway

OpenAI's result family 159 (Combinatorics) claims: Proves Erdős's conjecture that every set of positive integers with divergent reciprocal sum contains arithmetic progressions of every finite length.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Quantitatively, for each fixed k ≥ 3, every subset of $\{1,\ldots,N\}$ with no nonconstant k-term progression has size at most $C_kN\exp[-c_k(\log N)^{\varepsilon_k}]$, with positive constants depending only on k.
- *Quasipolynomial Bounds for Arithmetic Progressions*: We prove Erdős's conjecture that every set of positive integers with divergent reciprocal sum contains arithmetic progressions of every finite length. More quantitatively, for every fixed k ≥ 3, we show

$\displaystyle r_k(N)\le C_kN\exp\bigl(-c_k(\log N)^{\varepsilon_k}\bigr)$

with $C_k,c_k,\varepsilon_k\gt 0$, where $r_k(N)$ is the largest size of a subset of $\{1,\ldots,N\}$ with no nonconstant k-term arithmetic progression.
- Lean scope (lean/docs/159.md): Erdős's reciprocal-sum conjecture asks whether every set of positive integers with divergent reciprocal sum contains arithmetic progressions of every finite length. The formalization proves this statement: for every requested length, such a set contains a progression with positive common difference.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's quantitative upper bound for the largest progression-free subset of $\{1,\ldots,N\}$ is outside this statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Quasipolynomial Bounds for Arithmetic Progressions](https://github.com/openai/math/blob/main/preprints/Quasipolynomial-Bounds-for-Arithmetic-Progressions-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/159.md
- Comparator statement (Erdős's reciprocal-sum arithmetic-progression conjecture): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ErdosReciprocal.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/quasipolynomial-arithmetic-progressions.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
