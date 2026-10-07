---
title: "Failure of rational injectivity for maximal coarse assembly"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 307; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Failure-of-rational-injectivity-for-maximal-coarse-assembly-October-5-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "topology"
  - "lean4"
  - "formalized"
seed_rank: 2162
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Failure of rational injectivity for maximal coarse assembly"
    url: "https://github.com/openai/math/blob/main/preprints/Failure-of-rational-injectivity-for-maximal-coarse-assembly-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A counterexample to the coarse Novikov conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-coarse-Novikov-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Failure of rational injectivity for maximal coarse assembly

## One-sentence takeaway

OpenAI's result family 307 (Topology) claims: Constructs a uniformly discrete bounded-geometry space whose maximal coarse assembly map is not rationally injective.

## Why it matters here

Topology results are background for knot, surface and configuration-space reasoning in geometry code. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The example is a coarse disjoint union of finite connected graphs of uniformly bounded degree, with an infinite-order kernel class. A companion gives the analogous failure for reduced coarse assembly, disproving the rational coarse Novikov conjecture.
- *Failure of rational injectivity for maximal coarse assembly*: We construct a uniformly discrete bounded-geometry space whose maximal coarse assembly map has an infinite-order element in its kernel. The space is a coarse disjoint union of finite connected graphs of uniformly bounded degree, so maximal coarse assembly need not be rationally injective even for such graph unions.
- *A counterexample to the coarse Novikov conjecture*: We disprove the coarse Novikov conjecture: ordinary coarse assembly need not be rationally injective for uniformly discrete spaces of bounded geometry. We construct a coarse disjoint union of finite graphs of uniformly bounded degree and an infinite-order class in its degree-one coarse K-homology whose image under ordinary coarse assembly in the K-theory of the reduced, locally compact Roe algebra vanishes.
- Lean scope (lean/docs/307.md): The coarse Novikov conjecture predicts rational injectivity of the ordinary coarse assembly map for uniformly discrete spaces of bounded geometry. The formalization constructs a counterexample from a coarse disjoint union of finite connected graphs with uniformly bounded degree.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Failure of rational injectivity for maximal coarse assembly](https://github.com/openai/math/blob/main/preprints/Failure-of-rational-injectivity-for-maximal-coarse-assembly-October-5-2026/paper.pdf)
- Manuscript: [A counterexample to the coarse Novikov conjecture](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-coarse-Novikov-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/307.md
- Comparator statement (Failure of rational injectivity for ordinary coarse assembly): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CoarseAssembly.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
