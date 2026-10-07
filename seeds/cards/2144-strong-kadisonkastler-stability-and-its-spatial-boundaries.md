---
title: "Strong Kadison–Kastler stability and its spatial boundaries"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 289; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Universal-strong-Kadison-Kastler-stability-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2144
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Universal strong Kadison–Kastler stability"
    url: "https://github.com/openai/math/blob/main/preprints/Universal-strong-Kadison-Kastler-stability-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Near Inclusions of von Neumann Algebras Without Small Spatial Embeddings"
    url: "https://github.com/openai/math/blob/main/preprints/Near-Inclusions-of-von-Neumann-Algebras-Without-Small-Spatial-Embeddings-October-5-2026/near-inclusions.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Close Separable C*-Algebras Without Spatial Conjugacy"
    url: "https://github.com/openai/math/blob/main/preprints/Close-Separable-Cstar-Algebras-Without-Spatial-Conjugacy-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Strong Kadison–Kastler stability and its spatial boundaries

## One-sentence takeaway

OpenAI's result family 289 (Operator algebras) claims: Proves that sufficiently close unital von Neumann algebras on the same Hilbert space are conjugate by a unitary arbitrarily close to the identity, with a universal tolerance in the operator-norm distance between unit balls.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Counterexamples show that near-identity conjugacy fails for one-sided near inclusions, and that arbitrarily close norm-separable C∗-algebras need not be ambiently unitarily conjugate.
- *Universal strong Kadison–Kastler stability*: We prove that sufficiently close unital von Neumann algebras are conjugate by a unitary arbitrarily close to the identity. The tolerance depends only on the prescribed distance of that unitary from the identity, uniformly over all algebras, representations, and Hilbert spaces. This resolves the strong Kadison–Kastler conjecture.
- *Near Inclusions of von Neumann Algebras Without Small Spatial Embeddings*: We give a negative answer to the unrestricted small-spatial-embedding problem for one-sided near inclusions of von Neumann algebras. On separable complex Hilbert spaces, we construct pairs of unital von Neumann algebras with common identity whose one-sided gaps tend to zero. Spatial embeddings of the source into the target exist, but every implementing unitary stays a fixed positive distance from the identity.
- *Close Separable C*-Algebras Without Spatial Conjugacy*: We disprove the separable C∗-algebraic spatial form of the Kadison–Kastler conjecture. For every ε > 0, we construct unital, norm-separable C∗-algebras on a common separable complex Hilbert space, with the same identity and Kadison–Kastler distance less than ε, that are not conjugate by any unitary. The two algebras have the same von Neumann closure.
- Lean scope (lean/docs/289.md): The formalization proves the strong Kadison–Kastler conjecture uniformly. For every $\varepsilon>0$, there is a $\delta>0$ such that any two unital von Neumann algebras on the same complex Hilbert space at Kadison–Kastler distance below $\delta$ are conjugate by a unitary $u$ with $\lVert u-1\rVert<\varepsilon$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Universal strong Kadison–Kastler stability](https://github.com/openai/math/blob/main/preprints/Universal-strong-Kadison-Kastler-stability-September-23-2026/paper.pdf)
- Manuscript: [Near Inclusions of von Neumann Algebras Without Small Spatial Embeddings](https://github.com/openai/math/blob/main/preprints/Near-Inclusions-of-von-Neumann-Algebras-Without-Small-Spatial-Embeddings-October-5-2026/near-inclusions.pdf)
- Manuscript: [Close Separable C*-Algebras Without Spatial Conjugacy](https://github.com/openai/math/blob/main/preprints/Close-Separable-Cstar-Algebras-Without-Spatial-Conjugacy-October-5-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/289.md
- Comparator statement (Universal near-identity unitary conjugacy for close von Neumann algebras): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/StrongKadisonKastler.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
