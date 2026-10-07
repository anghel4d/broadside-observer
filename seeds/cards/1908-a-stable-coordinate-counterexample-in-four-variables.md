---
title: "A stable-coordinate counterexample in four variables"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 049; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-stable-coordinate-that-is-not-a-coordinate-in-four-variables-October-5-2026/stable-coordinate-four-variables.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebraic-and-complex-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1908
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A stable coordinate that is not a coordinate in four variables"
    url: "https://github.com/openai/math/blob/main/preprints/A-stable-coordinate-that-is-not-a-coordinate-in-four-variables-October-5-2026/stable-coordinate-four-variables.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An explicit noncoordinate polynomial with affine three-space zero fibre"
    url: "https://github.com/openai/math/blob/main/preprints/An-explicit-noncoordinate-polynomial-with-affine-three-space-zero-fibre-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A stable-coordinate counterexample in four variables

## One-sentence takeaway

OpenAI's result family 049 (Algebraic and complex geometry) claims: Constructs a polynomial in four complex variables that is not a coordinate but becomes one after adjoining a single variable, disproving the Stable Coordinate conjecture in four variables.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Every fiber is affine three-space, yet none of its embeddings is rectifiable, also disproving the Abhyankar–Sathaye conjecture even when all fibers are affine spaces.
- *A stable coordinate that is not a coordinate in four variables*: We construct an explicit degree-five polynomial over $\mathbf C$ that is not a coordinate in four variables but becomes one after adjoining a single variable. This gives a counterexample to the stable coordinate conjecture in four variables. Every fiber is isomorphic to affine three-space, yet its embedding in affine four-space is not rectifiable.
- *An explicit noncoordinate polynomial with affine three-space zero fibre*: We construct an explicit counterexample to the Abhyankar–Sathaye conjecture: a noncoordinate polynomial in four complex variables whose zero fibre is affine three-space. Adjoining variables gives counterexamples in every ambient dimension at least four.
- Lean scope (lean/docs/049.md): The Abhyankar–Sathaye conjecture predicts that a polynomial defining an affine-space quotient must be an ambient coordinate. For every $n\ge4$, the formalized counterexample gives $F\in\mathbb C[x_1,\ldots,x_n]$ with quotient $\mathbb C[x_1,\ldots,x_n]/(F)\cong\mathbb C[y_1,\ldots,y_{n-1}]$, although $F$ is not a coordinate.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A stable coordinate that is not a coordinate in four variables](https://github.com/openai/math/blob/main/preprints/A-stable-coordinate-that-is-not-a-coordinate-in-four-variables-October-5-2026/stable-coordinate-four-variables.pdf)
- Manuscript: [An explicit noncoordinate polynomial with affine three-space zero fibre](https://github.com/openai/math/blob/main/preprints/An-explicit-noncoordinate-polynomial-with-affine-three-space-zero-fibre-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/049.md
- Comparator statement (Noncoordinate polynomial in every dimension at least four): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/AbhyankarSathaye.lean
- Comparator statement (Commuting locally nilpotent derivations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CommutingDerivations.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
