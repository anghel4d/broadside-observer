---
title: "The Mahler conjectures, functional inequalities and polar-product symplectic width"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 087; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-symmetric-Mahler-conjecture-and-its-equality-cases-September-22-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1944
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The symmetric Mahler conjecture and its equality cases"
    url: "https://github.com/openai/math/blob/main/preprints/The-symmetric-Mahler-conjecture-and-its-equality-cases-September-22-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Mahler Conjecture for General Convex Bodies"
    url: "https://github.com/openai/math/blob/main/preprints/The-Mahler-Conjecture-for-General-Convex-Bodies-September-22-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Symplectic Balls in Symmetric Polar Products"
    url: "https://github.com/openai/math/blob/main/preprints/Symplectic-Balls-in-Symmetric-Polar-Products-September-22-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Mahler conjectures, functional inequalities and polar-product symplectic width

## One-sentence takeaway

OpenAI's result family 087 (Convex and metric geometry) claims: Resolves the symmetric and nonsymmetric geometric Mahler conjectures in every dimension, with Hanner polytopes and simplices as the respective volume-product minimizers and all equality cases classified.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The corresponding sharp functional Mahler inequalities also hold. For n ≥ 2, every symmetric polar product $K\times K^\circ$ in dimension $2n$ has Gromov width 4.
- *The symmetric Mahler conjecture and its equality cases*: We resolve the symmetric Mahler conjecture positively, including its equality classification. Every origin-symmetric convex body in ℝn has volume product at least $4^n/n!$, with equality exactly for invertible linear images of Hanner polytopes.
- *The Mahler Conjecture for General Convex Bodies*: We resolve the Mahler conjecture for general convex bodies positively. For every convex body $K\subset\mathbb R^n$, n ≥ 1, with Santaló point $s(K)$, $|K|\,|(K-s(K))^\circ|\ge (n+1)^{n+1}/(n!)^2$, with equality exactly for simplices.
- *Symplectic Balls in Symmetric Polar Products*: For every integer n ≥ 2 and every origin-symmetric convex body $K\subset\mathbb R^n$, we prove that the Gromov width of $\mathop{\mathrm{int}}\nolimits K\times\mathop{\mathrm{int}}\nolimits K^\circ$ is 4. We construct smooth symplectic embeddings of standard balls of every capacity $0\lt c\lt 4$ into this polar product. Volume preservation then resolves the symmetric Mahler conjecture positively in every dimension.
- Lean scope (lean/docs/087.md): The symmetric Mahler conjecture predicts $|K||K^\circ|\ge4^n/n!$ for every origin-symmetric convex body $K\subset\mathbb R^n$. The formalization establishes this for every $n\ge1$ and characterizes equality exactly by invertible linear images of Hanner bodies, built from intervals using Cartesian products and convex-hull joins.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's functional inequality is outside this selected statement. No boundary smoothness or strict convexity is assumed.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The symmetric Mahler conjecture and its equality cases](https://github.com/openai/math/blob/main/preprints/The-symmetric-Mahler-conjecture-and-its-equality-cases-September-22-2026/paper.pdf)
- Manuscript: [The Mahler Conjecture for General Convex Bodies](https://github.com/openai/math/blob/main/preprints/The-Mahler-Conjecture-for-General-Convex-Bodies-September-22-2026/paper.pdf)
- Manuscript: [Symplectic Balls in Symmetric Polar Products](https://github.com/openai/math/blob/main/preprints/Symplectic-Balls-in-Symmetric-Polar-Products-September-22-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/087.md
- Comparator statement (Symmetric Mahler inequality): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MahlerConjecture.lean
- Comparator statement (Symmetric Mahler equality characterization): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SymmetricMahlerEquality.lean
- Comparator statement (General Mahler inequality and simplex equality cases): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GeneralMahler.lean
- Comparator statement (Gromov width of symmetric polar products): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SymmetricPolar.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/symmetric-and-general-mahler-conjectures.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
