---
title: "Invariant projections, hyperinvariant subspaces, and transitive algebras"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 293; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Invariant-projection-counterexamples-for-every-irrational-rotation-September-27-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2148
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Invariant-projection counterexamples for every irrational rotation"
    url: "https://github.com/openai/math/blob/main/preprints/Invariant-projection-counterexamples-for-every-irrational-rotation-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Backward intertwiners and a transitive commutant"
    url: "https://github.com/openai/math/blob/main/preprints/Backward-intertwiners-and-a-transitive-commutant-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Invariant projections, hyperinvariant subspaces, and transitive algebras

## One-sentence takeaway

OpenAI's result family 293 (Operator algebras) claims: Constructs a nonzero norm-quasinilpotent operator on every infinite-dimensional separable complex Hilbert space with no nonzero proper closed subspace invariant under every commuting operator.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The construction also gives operators with no nontrivial invariant projection in the hyperfinite type II1 factor.
- *Invariant-projection counterexamples for every irrational rotation*: For every irrational angle, we construct a continuous nonnegative circle weight with exactly one zero and logarithmic integral $-\infty$ whose weighted rotation has no nontrivial invariant projection in the associated hyperfinite type II1 factor. This answers negatively the question of Zhu, Fang, and Shi, with the angle prescribed in advance. The resulting operator is nonzero and norm-quasinilpotent.
- *Backward intertwiners and a transitive commutant*: We give a negative answer to the hyperinvariant-subspace problem by constructing, on every infinite-dimensional separable complex Hilbert space, a nonzero bounded norm-quasinilpotent operator with no nonzero proper closed hyperinvariant subspace. Its commutant is a proper strongly closed unital transitive complex operator algebra.
- Lean scope (lean/docs/293.md): For every irrational rotation angle $\theta\in(0,1)$, the formalization constructs a continuous nonnegative circle weight with a single zero and logarithmic integral $-\infty$ whose weighted rotation is nonzero and quasinilpotent. In its associated hyperfinite type $\mathrm{II}_1$ factor, the operator has no nontrivial invariant projection: $(1-p)Tp=0$ forces $p=0$ or $p=1$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 7 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Invariant-projection counterexamples for every irrational rotation](https://github.com/openai/math/blob/main/preprints/Invariant-projection-counterexamples-for-every-irrational-rotation-September-27-2026/paper.pdf)
- Manuscript: [Backward intertwiners and a transitive commutant](https://github.com/openai/math/blob/main/preprints/Backward-intertwiners-and-a-transitive-commutant-September-27-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/293.md
- Comparator statement (Finite-factor invariant-projection counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FiniteFactor.lean
- Comparator statement (Quasinilpotent operator with transitive commutant): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BackwardIntertwiners.lean
- Comparator statement (Continuous-weight invariant-projection counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ContinuousCircleWeight.lean
- Comparator statement (Quasinilpotent operator with a transitive commutant): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HyperinvariantSubspaces.lean
- Comparator statement (Invariant-projection counterexamples for every irrational rotation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/IrrationalRotation.lean
- Comparator statement (Brown measure of the selected product weighted shift): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ProductBrown.lean
- Comparator statement (Quasinilpotent operator without a hyperinvariant subspace): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HyperinvariantSubspaces.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
