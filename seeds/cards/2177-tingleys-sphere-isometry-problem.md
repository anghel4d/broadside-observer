---
title: "Tingley’s sphere-isometry problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 322; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-positive-solution-to-Tingleys-problem-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2177
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A positive solution to Tingley’s problem"
    url: "https://github.com/openai/math/blob/main/preprints/A-positive-solution-to-Tingleys-problem-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Tingley’s sphere-isometry problem

## One-sentence takeaway

OpenAI's result family 322 (Functional analysis) claims: Resolves Tingley's problem: every surjective isometry between the unit spheres of nonzero real Banach spaces extends uniquely to a surjective real-linear isometry of the whole spaces.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): No dimension restriction is imposed, so the metric geometry of the unit sphere determines the Banach space up to linear isometry.
- *A positive solution to Tingley’s problem*: Every surjective isometry between the unit spheres of real Banach spaces extends uniquely to a surjective real-linear isometry, giving an affirmative solution to Tingley's problem. If distances between different radii are not preserved, we realize the positive maximal defect in a possibly enlarged pair of Banach spaces. We then align extremal chords using common supports and Darbo's fixed-point theorem and obtain a contradiction from support and convexity estimates.
- Lean scope (lean/docs/322.md): Tingley's problem asks whether a surjective isometry between the unit spheres of Banach spaces extends to a linear isometry of the spaces. The formalized result gives a unique surjective real-linear isometric extension for arbitrary nonzero real Banach spaces, with no finite-dimensionality, separability, reflexivity, or convexity assumptions.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The formalized result gives a unique surjective real-linear isometric extension for arbitrary nonzero real Banach spaces, with no finite-dimensionality, separability, reflexivity, or convexity assumptions.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A positive solution to Tingley’s problem](https://github.com/openai/math/blob/main/preprints/A-positive-solution-to-Tingleys-problem-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/322.md
- Comparator statement (Tingley's sphere-isometry extension): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TingleySphereIsometry.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
