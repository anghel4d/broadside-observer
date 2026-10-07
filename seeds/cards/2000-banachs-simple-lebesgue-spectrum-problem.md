---
title: "Banach’s simple Lebesgue-spectrum problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 144; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-smooth-three-torus-diffeomorphism-with-simple-Lebesgue-spectrum-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "lean4"
  - "formalized"
seed_rank: 2000
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A smooth three-torus diffeomorphism with simple Lebesgue spectrum"
    url: "https://github.com/openai/math/blob/main/preprints/A-smooth-three-torus-diffeomorphism-with-simple-Lebesgue-spectrum-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Banach’s simple Lebesgue-spectrum problem

## One-sentence takeaway

OpenAI's result family 144 (Dynamical systems and ergodic theory) claims: Resolves the probability-preserving form of Banach's simple Lebesgue-spectrum problem within smooth dynamics.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A smooth volume-preserving diffeomorphism of the standard-volume three-torus has simple Lebesgue spectrum on its entire complex mean-zero L2 space: the bilateral iterates of one real observable form an orthonormal basis of that space.
- *A smooth three-torus diffeomorphism with simple Lebesgue spectrum*: We solve the probability-preserving form of Banach's simple Lebesgue-spectrum problem in smooth dynamics. We construct a C∞ diffeomorphism of the three-torus that preserves standard volume and whose Koopman operator has simple Lebesgue spectrum on the entire mean-zero L2 space.
- Lean scope (lean/docs/144.md): Banach's simple Lebesgue-spectrum problem asks for a probability-preserving transformation with simple Lebesgue spectrum on its mean-zero $L^2$ space. The formalization constructs a smooth volume-preserving diffeomorphism of the three-torus with this property.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A smooth three-torus diffeomorphism with simple Lebesgue spectrum](https://github.com/openai/math/blob/main/preprints/A-smooth-three-torus-diffeomorphism-with-simple-Lebesgue-spectrum-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/144.md
- Comparator statement (Smooth simple Lebesgue spectrum on the three-torus): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThreeTorus.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
