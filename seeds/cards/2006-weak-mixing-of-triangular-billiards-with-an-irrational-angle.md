---
title: "Weak mixing of triangular billiards with an irrational angle"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 150; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Weak-mixing-of-triangular-billiards-with-an-irrational-angle-October-5-2026/weak-mixing-triangular-billiards.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "lean4"
  - "formalized"
seed_rank: 2006
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Weak mixing of triangular billiards with an irrational angle"
    url: "https://github.com/openai/math/blob/main/preprints/Weak-mixing-of-triangular-billiards-with-an-irrational-angle-October-5-2026/weak-mixing-triangular-billiards.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Ergodicity of triangular billiards with an irrational angle"
    url: "https://github.com/openai/math/blob/main/preprints/Ergodicity-of-triangular-billiards-with-an-irrational-angle-September-25-2026/Ergodicity-of-triangular-billiards-with-an-irrational-angle-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Weak mixing of triangular billiards with an irrational angle

## One-sentence takeaway

OpenAI's result family 150 (Dynamical systems and ergodic theory) claims: Proves that the billiard flow in every nondegenerate Euclidean triangle with at least one angle irrational relative to π is weakly mixing for normalized area times uniform direction.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This strengthens ergodicity on the entire irrational-angle class, with no genericity or Diophantine restrictions.
- *Weak mixing of triangular billiards with an irrational angle*: We prove that the unit-speed billiard flow in every nondegenerate Euclidean triangle with at least one angle irrational relative to π is weakly mixing for normalized Liouville measure. Equivalently, the product of the flow with itself is ergodic.
- *Ergodicity of triangular billiards with an irrational angle*: We prove that the unit-speed billiard flow in every nondegenerate Euclidean triangle with at least one angle irrational relative to π is ergodic for normalized area times uniform angular measure. No genericity or Diophantine condition is required. The flow is considered outside the null set of trajectories that hit a vertex.
- Lean scope (lean/docs/150.md): The formalization proves that the unit-speed billiard flow in every nondegenerate Euclidean triangle with at least one angle irrational relative to $\pi$ is ergodic for normalized area times uniform angular measure. It constructs the flow outside the null set of exceptional trajectories, proves uniqueness of the flight chain there, and establishes measure preservation and the flow law almost everywhere.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: It constructs the flow outside the null set of exceptional trajectories, proves uniqueness of the flight chain there, and establishes measure preservation and the flow law almost everywhere. No genericity or Diophantine condition on the irrational angle is assumed.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Weak mixing of triangular billiards with an irrational angle](https://github.com/openai/math/blob/main/preprints/Weak-mixing-of-triangular-billiards-with-an-irrational-angle-October-5-2026/weak-mixing-triangular-billiards.pdf)
- Manuscript: [Ergodicity of triangular billiards with an irrational angle](https://github.com/openai/math/blob/main/preprints/Ergodicity-of-triangular-billiards-with-an-irrational-angle-September-25-2026/Ergodicity-of-triangular-billiards-with-an-irrational-angle-September-25-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/150.md
- Comparator statement (Ergodicity of triangular billiards with an irrational angle): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/IrrationalTriangleBilliard.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
