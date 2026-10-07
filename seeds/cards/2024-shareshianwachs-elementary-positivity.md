---
title: "Shareshian–Wachs elementary positivity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 169; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Elementary-Positivity-of-Chromatic-Quasisymmetric-Functions-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2024
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Elementary positivity of chromatic quasisymmetric functions"
    url: "https://github.com/openai/math/blob/main/preprints/Elementary-Positivity-of-Chromatic-Quasisymmetric-Functions-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Shareshian–Wachs elementary positivity

## One-sentence takeaway

OpenAI's result family 169 (Combinatorics) claims: Resolves the elementary-positivity part of the Shareshian–Wachs conjecture: the chromatic quasisymmetric function of every natural unit interval graph has elementary-basis coefficients in $\mathbb N[q]$.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The coefficients count explicitly described permutations, giving a combinatorial explanation of positivity.
- *Elementary positivity of chromatic quasisymmetric functions*: We prove that the chromatic quasisymmetric function of every natural unit interval graph is elementary-positive over $\mathbb N[q]$. This resolves the elementary-positivity part of the Shareshian–Wachs conjecture.
- Lean scope (lean/docs/169.md): The elementary-positivity part of the Shareshian–Wachs conjecture asks whether the chromatic quasisymmetric function of every natural unit interval graph has nonnegative coefficients in the elementary basis. The formalization proves this over $\mathbb N[q]$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Elementary positivity of chromatic quasisymmetric functions](https://github.com/openai/math/blob/main/preprints/Elementary-Positivity-of-Chromatic-Quasisymmetric-Functions-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/169.md
- Comparator statement (Elementary positivity for natural unit interval graphs): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ElementaryPositivity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
