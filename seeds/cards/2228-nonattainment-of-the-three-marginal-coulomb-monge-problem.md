---
title: "Nonattainment of the three-marginal Coulomb Monge problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 373; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-Monge-ansatz-for-the-three-marginal-Coulomb-cost-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2228
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A counterexample to the Monge ansatz for the three-marginal Coulomb cost"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-Monge-ansatz-for-the-three-marginal-Coulomb-cost-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Nonattainment of the three-marginal Coulomb Monge problem

## One-sentence takeaway

OpenAI's result family 373 (Partial differential equations) claims: An optimal three-particle Coulomb configuration need not be a deterministic function of the first particle, even for smooth identical spatial densities.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The Monge and Kantorovich infima agree, but the Monge infimum is not attained. The same phenomenon occurs for every inverse-power Riesz exponent in each dimension at least two, with a suitable density in each case.
- *A counterexample to the Monge ansatz for the three-marginal Coulomb cost*: We construct a smooth compactly supported probability density on ℝ3, with a smooth compactly supported square root, for which the three-marginal Coulomb transport minimum is not attained by any pair of measure-preserving Borel maps. Nevertheless, the Monge and Kantorovich infima agree: we construct preserving maps whose costs approach the Kantorovich minimum. For every d ≥ 2 and s > 0, we also construct a smooth identical marginal with the same nonattainment and equality-of-infima properties for the inverse-power interaction $\sum_{i\lt j}|x_i-x_j|^{-s}$ on ℝd.
- Lean scope (lean/docs/373.md): The Monge ansatz asks whether an optimal multi-marginal transport plan can be induced by maps from one marginal. For the three-marginal Coulomb cost in $\mathbb R^3$, the formalization constructs a smooth compactly supported probability density, with smooth compactly supported square root, for which no pair of measure-preserving Borel maps attains the Kantorovich minimum.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: This is the three-dimensional Coulomb result; the paper's inverse-power extensions in every dimension are outside this statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A counterexample to the Monge ansatz for the three-marginal Coulomb cost](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-Monge-ansatz-for-the-three-marginal-Coulomb-cost-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/373.md
- Comparator statement (Coulomb Monge nonattainment with equality of infima): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CoulombCounterexample.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
