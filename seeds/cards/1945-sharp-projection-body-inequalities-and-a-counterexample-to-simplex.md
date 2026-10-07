---
title: "Sharp projection-body inequalities and a counterexample to simplex maximization"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 088; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Pettys-projection-volume-conjecture-in-dimensions-at-least-four-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1945
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Petty’s projection-volume conjecture in dimensions at least four"
    url: "https://github.com/openai/math/blob/main/preprints/Pettys-projection-volume-conjecture-in-dimensions-at-least-four-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A product counterexample to the simplex maximum for projection-body volume"
    url: "https://github.com/openai/math/blob/main/preprints/A-product-counterexample-to-the-simplex-maximum-for-projection-body-volume-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Sharp projection-body inequalities and a counterexample to simplex maximization

## One-sentence takeaway

OpenAI's result family 088 (Convex and metric geometry) claims: Proves Petty's projection-volume conjecture in the remaining dimensions n ≥ 4: ellipsoids uniquely minimize projection-body volume at fixed body volume.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Also establishes the full Lutwak–Petty projection inequalities. In contrast, products of simplices exceed Brannen's proposed simplex maximum for normalized projection-body volume by an exponential factor in every sufficiently large dimension.
- *Petty’s projection-volume conjecture in dimensions at least four*: We prove that ellipsoids uniquely minimize the volume of the projection body among convex bodies of fixed volume in every dimension at least four. This proves Petty's projection-volume conjecture in these dimensions.
- *A product counterexample to the simplex maximum for projection-body volume*: The product of two ten-dimensional simplices has larger normalized projection-body volume than a twenty-dimensional simplex. This gives a counterexample to Brannen's proposed simplex maximum.
- Lean scope (lean/docs/088.md): Petty's projection-volume conjecture predicts  $\displaystyle \frac{|\Pi K|}{|K|^{n-1}}\ge \kappa_{n-1}^{n}\kappa_n^{2-n},$  with equality exactly for ellipsoids; here $\kappa_j$ is the volume of the Euclidean unit ball in dimension $j$. The formalization establishes this for every convex body $K\subset\mathbb R^n$ and every $n\ge4$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Petty’s projection-volume conjecture in dimensions at least four](https://github.com/openai/math/blob/main/preprints/Pettys-projection-volume-conjecture-in-dimensions-at-least-four-September-24-2026/paper.pdf)
- Manuscript: [A product counterexample to the simplex maximum for projection-body volume](https://github.com/openai/math/blob/main/preprints/A-product-counterexample-to-the-simplex-maximum-for-projection-body-volume-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/088.md
- Comparator statement (Petty's projection-volume inequality): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PettyProjectionVolume.lean
- Comparator statement (Failure of the simplex upper bound in dimension 20): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ProjectionCounterexample.lean
- Comparator statement (Explicit product-of-simplices counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ProjectionVolume.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
