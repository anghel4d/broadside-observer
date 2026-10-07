---
title: "Cuntz comparison, nuclear dimension, and equivariant Jiang–Su stability"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 291; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Equivariant-Jiang-Su-Stability-for-Amenable-Actions-in-the-Unital-Stably-Finite-Case-October-5-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2146
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Equivariant Jiang–Su Stability for Amenable Actions in the Unital Stably Finite Case"
    url: "https://github.com/openai/math/blob/main/preprints/Equivariant-Jiang-Su-Stability-for-Amenable-Actions-in-the-Unital-Stably-Finite-Case-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Cuntz comparison and Jiang–Su absorption"
    url: "https://github.com/openai/math/blob/main/preprints/Cuntz-comparison-and-Jiang-Su-absorption-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Nuclear dimension and Jiang–Su stability without elementary subquotients"
    url: "https://github.com/openai/math/blob/main/preprints/Nuclear-dimension-and-Jiang-Su-stability-without-elementary-subquotients-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Tracial projection methods and uniform property Gamma"
    url: "https://github.com/openai/math/blob/main/preprints/Tracial-projection-methods-and-uniform-property-Gamma-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Cuntz comparison, nuclear dimension, and equivariant Jiang–Su stability

## One-sentence takeaway

OpenAI's result family 291 (Operator algebras) claims: Proves equivariant Jiang–Su stability for every countable discrete amenable group action on a simple separable unital infinite-dimensional nuclear stably finite Jiang–Su-stable C∗-algebra, resolving this case of Szabó's conjecture without restrictions on trace dynamics.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The family also proves the unital Toms–Winter conjecture, equating strict comparison, finite nuclear dimension and Jiang–Su stability in the simple separable unital infinite-dimensional nuclear setting.
- *Equivariant Jiang–Su Stability for Amenable Actions in the Unital Stably Finite Case*: Every action of a countable discrete amenable group on a simple, separable, unital, infinite-dimensional, nuclear, stably finite complex C∗-algebra that is already Jiang–Su stable absorbs the trivial action on the Jiang–Su algebra up to cocycle conjugacy. No restriction is imposed on the action on the tracial-state simplex. This proves the unital, stably finite case of Szabó's Conjecture A on automatic equivariant Jiang–Su stability.
- *Cuntz comparison and Jiang–Su absorption*: We prove that strict comparison in the extended-functional sense implies Jiang–Su absorption for separable simple nuclear non-elementary C∗-algebras. This resolves the corresponding implication of the Toms–Winter regularity problem, including nonunital algebras and allowing unbounded traces. More generally, every separable nuclear C∗-algebra whose Cuntz semigroup is almost unperforated and fully almost divisible absorbs the Jiang–Su algebra.
- *Nuclear dimension and Jiang–Su stability without elementary subquotients*: For separable nuclear C∗-algebras with no nonzero elementary ideal subquotients, finite nuclear dimension is equivalent to Jiang–Su stability. More generally, $\dim_{\mathrm{nuc}}(A_0\otimes\mathcal Z)\le1$ for every separable nuclear A0. This proves Robert and Tikuisis's Conjecture (C1) and the nuclear-dimension equivalence in the nonsimple Toms–Winter regularity question.
- *Tracial projection methods and uniform property Gamma*: For a simple, separable, unital, infinite-dimensional, nuclear, stably finite C∗-algebra with traces, real rank zero of the uniform tracial ultrapower of its uniform tracial completion implies uniform property Γ. This answers Problem XXI of Schafhauser, Tikuisis and White affirmatively. Independently, strict comparison implies Jiang–Su absorption for simple, separable, unital, infinite-dimensional nuclear algebras, resolving the unital Toms–Winter conjecture.
- Lean scope (lean/docs/291.md): The formalization proves that real rank zero of the uniform tracial ultrapower of the uniform tracial completion implies uniform property $\Gamma$ for a simple separable unital infinite-dimensional nuclear stably finite $C^*$-algebra with traces. The conclusion holds at every specified free ultrafilter under the corresponding real-rank-zero hypothesis.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Equivariant Jiang–Su Stability for Amenable Actions in the Unital Stably Finite Case](https://github.com/openai/math/blob/main/preprints/Equivariant-Jiang-Su-Stability-for-Amenable-Actions-in-the-Unital-Stably-Finite-Case-October-5-2026/paper.pdf)
- Manuscript: [Cuntz comparison and Jiang–Su absorption](https://github.com/openai/math/blob/main/preprints/Cuntz-comparison-and-Jiang-Su-absorption-September-23-2026/paper.pdf)
- Manuscript: [Nuclear dimension and Jiang–Su stability without elementary subquotients](https://github.com/openai/math/blob/main/preprints/Nuclear-dimension-and-Jiang-Su-stability-without-elementary-subquotients-September-23-2026/paper.pdf)
- Manuscript: [Tracial projection methods and uniform property Gamma](https://github.com/openai/math/blob/main/preprints/Tracial-projection-methods-and-uniform-property-Gamma-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/291.md
- Comparator statement (Uniform property $\Gamma$ from tracial real rank zero): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/UniformGamma.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
