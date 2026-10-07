---
title: "Zero entropy does not guarantee a smooth positive-volume model"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 152; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-finite-entropy-system-without-a-smooth-positive-volume-model-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "lean4"
  - "formalized"
seed_rank: 2008
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A zero-entropy system without a smooth positive-volume model"
    url: "https://github.com/openai/math/blob/main/preprints/A-finite-entropy-system-without-a-smooth-positive-volume-model-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Zero entropy does not guarantee a smooth positive-volume model

## One-sentence takeaway

OpenAI's result family 152 (Dynamical systems and ergodic theory) claims: Constructs a zero-entropy ergodic invertible transformation of a standard nonatomic probability space that is not measurably conjugate to any C∞ diffeomorphism preserving a strictly positive smooth probability density on a compact finite-dimensional manifold.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): One example rules out every finite dimension.
- *A zero-entropy system without a smooth positive-volume model*: We construct an ergodic invertible transformation of a standard nonatomic probability space with zero Kolmogorov–Sinai entropy that has no smooth positive-volume model. More precisely, it is not measurably conjugate to any C∞ diffeomorphism preserving a strictly positive smooth probability density on a compact finite-dimensional manifold. A single example excludes every finite dimension, including models on nonorientable manifolds and manifolds with smooth boundary.
- Lean scope (lean/docs/152.md): The paper asks whether a measure-preserving system can be represented by a smooth diffeomorphism preserving positive smooth volume. The formalized supporting result constructs an ergodic invertible transformation of a standard nonatomic probability space with finite Kolmogorov–Sinai entropy that has no such model on any compact finite-dimensional manifold, including manifolds with smooth boundary.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The linked statement gives finite entropy; the paper's stronger zero-entropy conclusion is outside this statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A zero-entropy system without a smooth positive-volume model](https://github.com/openai/math/blob/main/preprints/A-finite-entropy-system-without-a-smooth-positive-volume-model-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/152.md
- Comparator statement (Finite-entropy system without a smooth positive-volume model): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SmoothObstruction.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
