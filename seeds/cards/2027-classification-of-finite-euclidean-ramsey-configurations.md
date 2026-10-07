---
title: "Classification of finite Euclidean Ramsey configurations"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 172; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-classification-of-finite-Euclidean-Ramsey-configurations-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2027
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A classification of finite Euclidean Ramsey configurations"
    url: "https://github.com/openai/math/blob/main/preprints/A-classification-of-finite-Euclidean-Ramsey-configurations-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Classification of finite Euclidean Ramsey configurations

## One-sentence takeaway

OpenAI's result family 172 (Combinatorics) claims: Classifies finite point configurations that occur monochromatically, at their original scale, in every finite coloring of sufficiently high-dimensional Euclidean space.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The characterization is an algebraic condition over the coordinate field. It also disproves the Leader–Russell–Walters conjecture that every such configuration is a subset of a finite transitive set.
- *A classification of finite Euclidean Ramsey configurations*: We classify finite Euclidean Ramsey configurations by a necessary and sufficient tensor condition over their coordinate fields. The Ramsey property here concerns monochromatic congruent copies at the original scale under arbitrary finite colorings. The criterion shows that every nonempty subtransitive set and every nonempty set of at most five points on a circle is Ramsey.
- Lean scope (lean/docs/172.md): A finite configuration is Euclidean Ramsey if every finite coloring of some sufficiently high-dimensional Euclidean space contains a monochromatic congruent copy at the original scale. The formalization gives the tensor-field classification for full-affine-span configurations, covers singleton and affine-span reductions, and proves that every Ramsey configuration is cospherical.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 7 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A classification of finite Euclidean Ramsey configurations](https://github.com/openai/math/blob/main/preprints/A-classification-of-finite-Euclidean-Ramsey-configurations-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/172.md
- Comparator statement (Tensor-field classification of Ramsey configurations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EuclideanRamsey.lean
- Comparator statement (Twelve-point spherical non-Ramsey example): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GrahamSpherical.lean
- Comparator statement (Ramsey property for at most five circle points): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EuclideanRamseyCircle.lean
- Comparator statement (Nine-point non-Ramsey circle configuration): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EuclideanRamseyNine.lean
- Comparator statement (Quadratic-independence criterion for spherical configurations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EuclideanRamseyQuadratic.lean
- Comparator statement (Cosphericity of Ramsey configurations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EuclideanRamseySpherical.lean
- Comparator statement (Ramsey property for subsets of finite transitive configurations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EuclideanRamseyTransitive.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
