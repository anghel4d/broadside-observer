---
title: "Cylinder coverings below the half-area bound"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 100; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Finite-angular-cylinder-covers-below-the-half-area-bound-September-27-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1957
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Finite angular cylinder covers below the half-area bound"
    url: "https://github.com/openai/math/blob/main/preprints/Finite-angular-cylinder-covers-below-the-half-area-bound-September-27-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Finite cylinder approximation of ruled sets"
    url: "https://github.com/openai/math/blob/main/preprints/Finite-cylinder-approximation-of-ruled-sets-September-27-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Slope-field perturbations of the two-cylinder covering"
    url: "https://github.com/openai/math/blob/main/preprints/Slope-field-perturbations-of-the-two-cylinder-covering-September-27-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Finite triangular approximation of radial sweeps"
    url: "https://github.com/openai/math/blob/main/preprints/Finite-triangular-approximation-of-radial-sweeps-September-27-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Cylinder coverings below the half-area bound

## One-sentence takeaway

OpenAI's result family 100 (Convex and metric geometry) claims: Covers the entire closed regular tetrahedron by finitely many cylinders with compact triangular perpendicular bases whose total area is less than half its smallest orthogonal projection area.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This disproves Bang's half-area cylinder-covering bound and the stronger directionwise normalized conjecture in dimension three.
- *Finite angular cylinder covers below the half-area bound*: A regular tetrahedron admits a finite cylinder covering with compact triangular perpendicular bases whose total area is less than half its minimum orthogonal projection area. This disproves the half-area cylinder-covering conjecture. By affine invariance, the same construction gives a counterexample to the directionwise normalized half-bound for every nondegenerate tetrahedron.
- *Finite cylinder approximation of ruled sets*: We approximate compact ruled families of segments by finitely many cylinders with square intercept tiles and perpendicular-base area at most their integral projection cost plus any positive error. The velocity field is C1, and its differential has opposite real eigenvalues whose magnitudes are strictly below the inverse segment half-length; both eigenvalues may vanish. The result includes square-zero differentials with unrestricted shear and fields that pass between the two regimes.
- *Slope-field perturbations of the two-cylinder covering*: The two-cylinder covering of a regular tetrahedron can be perturbed to give finite covers with total perpendicular base area strictly below half its minimum projection area. These covers give negative answers to both the half-area question and the directionwise normalized half-bound conjecture. By affine invariance, the directionwise conclusion holds for every nondegenerate tetrahedron.
- *Finite triangular approximation of radial sweeps*: We prove that radially aligned segment sweeps admit finite cylinder covers with one triangular base for each interval of any tagged partition. As the mesh tends to zero, the total perpendicular base area converges to a weighted parameter area. An explicit application covers every regular tetrahedron with total base area below half its minimum projection area, giving negative answers to the half-area question and the directionwise normalized 1-Codimensional Cylinder Covering Conjecture.
- Lean scope (lean/docs/100.md): The half-area cylinder-covering conjecture predicts that a cylinder cover of a convex body has total perpendicular-base area at least half its smallest projection area. The formalization constructs finite covers of a regular tetrahedron by cylinders with compact triangular bases whose total area is strictly below that bound.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 6 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The affine extension of the directionwise conclusion to every nondegenerate tetrahedron is outside the selected regular-tetrahedron statements.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Finite angular cylinder covers below the half-area bound](https://github.com/openai/math/blob/main/preprints/Finite-angular-cylinder-covers-below-the-half-area-bound-September-27-2026/main.pdf)
- Manuscript: [Finite cylinder approximation of ruled sets](https://github.com/openai/math/blob/main/preprints/Finite-cylinder-approximation-of-ruled-sets-September-27-2026/main.pdf)
- Manuscript: [Slope-field perturbations of the two-cylinder covering](https://github.com/openai/math/blob/main/preprints/Slope-field-perturbations-of-the-two-cylinder-covering-September-27-2026/main.pdf)
- Manuscript: [Finite triangular approximation of radial sweeps](https://github.com/openai/math/blob/main/preprints/Finite-triangular-approximation-of-radial-sweeps-September-27-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/100.md
- Comparator statement (Cylinder-covering counterexamples and companion approximations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CylinderCovering.lean
- Comparator statement (Explicit triangular-cylinder cover below half area): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TriangularCovering.lean
- Comparator statement (Ruled-set approximation within the cylinder-covering aggregate): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CylinderCovering.lean
- Comparator statement (Finite cylinder approximation for the selected ruled families): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RuledCovering.lean
- Comparator statement (Cylinder-covering counterexamples and approximation results): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CylinderCovering.lean
- Comparator statement (Finite triangular approximation of radial sweeps): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CylinderCovering.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
