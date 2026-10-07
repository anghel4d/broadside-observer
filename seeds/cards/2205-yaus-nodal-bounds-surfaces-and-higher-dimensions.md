---
title: "Yau’s nodal bounds: surfaces and higher dimensions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 350; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Sharp-nodal-length-on-smooth-surfaces-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2205
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Sharp nodal length on smooth surfaces"
    url: "https://github.com/openai/math/blob/main/preprints/Sharp-nodal-length-on-smooth-surfaces-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Smooth counterexamples to Yau's nodal upper bound in dimensions three and four"
    url: "https://github.com/openai/math/blob/main/preprints/Smooth-counterexamples-to-Yaus-nodal-upper-bound-in-dimensions-three-and-four-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Power-law violations of Yau's nodal upper bound"
    url: "https://github.com/openai/math/blob/main/preprints/Power-law-violations-of-Yaus-nodal-upper-bound-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Yau’s nodal bounds: surfaces and higher dimensions

## One-sentence takeaway

OpenAI's result family 350 (Differential geometry) claims: Proves the sharp $C\sqrt\lambda$ upper bound for nodal length on every fixed smooth closed surface, completing Yau's conjecture there.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The upper bound fails for fixed smooth metrics in dimensions three and four, including metrics on S3 arbitrarily close to round. In dimension five, nodal measure can grow faster than $\lambda^{1/2+\varepsilon_0}$ for some fixed $\varepsilon_0\gt 0$, ruling out even arbitrarily small power losses.
- *Sharp nodal length on smooth surfaces*: We prove that a nonzero real Laplace eigenfunction with eigenvalue λ > 0 on a fixed smooth closed connected Riemannian surface has nodal length at most $C\sqrt\lambda$. Together with the known lower bound, this proves Yau's conjecture in this setting.
- *Smooth counterexamples to Yau's nodal upper bound in dimensions three and four*: We construct a smooth metric on the three-sphere, arbitrarily close to the round metric in the smooth topology, and a smooth metric on $S^2\times\mathbb T^2$ for which sequences of exact real Laplace eigenfunctions have unbounded nodal measure divided by the square root of the eigenvalue. Each sequence belongs to one fixed metric. Thus the upper-bound part of Yau's nodal conjecture fails for smooth metrics in dimensions three and four.
- *Power-law violations of Yau's nodal upper bound*: We construct a smooth Riemannian metric on $S^4\times S^1$ and a sequence of real Laplace eigenfunctions whose nodal four-volume grows faster than $\lambda^{1/2+\epsilon_0}$ for one fixed $\epsilon_0\gt 0$. This disproves the smooth upper-bound assertion in Yau's nodal-set conjecture and the proposed bound with an arbitrarily small positive power loss.
- Lean scope (lean/docs/350.md): Yau's nodal-set conjecture predicts nodal size of order $\sqrt\lambda$ for Laplace eigenfunctions of eigenvalue $\lambda$. The formalization proves the upper bound on every fixed smooth closed connected Riemannian surface: there is a surface-dependent constant $C$ such that the one-dimensional Hausdorff measure of the zero set of every nonzero real eigenfunction with $\lambda>0$ is at most $C\sqrt\lambda$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The known lower bound is not part of this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Sharp nodal length on smooth surfaces](https://github.com/openai/math/blob/main/preprints/Sharp-nodal-length-on-smooth-surfaces-September-23-2026/paper.pdf)
- Manuscript: [Smooth counterexamples to Yau's nodal upper bound in dimensions three and four](https://github.com/openai/math/blob/main/preprints/Smooth-counterexamples-to-Yaus-nodal-upper-bound-in-dimensions-three-and-four-September-23-2026/paper.pdf)
- Manuscript: [Power-law violations of Yau's nodal upper bound](https://github.com/openai/math/blob/main/preprints/Power-law-violations-of-Yaus-nodal-upper-bound-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/350.md
- Comparator statement (Sharp upper bound for nodal length on smooth surfaces): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/NodalLength.lean
- Comparator statement (Nodal counterexamples in dimensions three and four): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SmoothYau.lean
- Comparator statement (Unbounded nodal ratio on $S^4\times S^1$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/YauCounterexample.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
