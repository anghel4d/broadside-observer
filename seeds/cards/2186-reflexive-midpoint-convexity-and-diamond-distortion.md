---
title: "Reflexive midpoint convexity and diamond distortion"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 331; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Asymptotic-midpoint-uniform-convexity-and-unbounded-diamond-distortion-in-a-reflexive-tree-space-September-27-2026/manuscript.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2186
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Asymptotic midpoint uniform convexity and unbounded diamond distortion in a reflexive tree space"
    url: "https://github.com/openai/math/blob/main/preprints/Asymptotic-midpoint-uniform-convexity-and-unbounded-diamond-distortion-in-a-reflexive-tree-space-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Midpoint lenses in segment spaces"
    url: "https://github.com/openai/math/blob/main/preprints/Midpoint-lenses-in-segment-spaces-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Distortion of countably branching diamonds from midpoint and tree energies"
    url: "https://github.com/openai/math/blob/main/preprints/Diamond-distortion-from-midpoint-and-tree-energies-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Exact asymptotic moduli in a Daugavet subspace of L1"
    url: "https://github.com/openai/math/blob/main/preprints/Exact-asymptotic-moduli-in-a-Daugavet-subspace-of-L1-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Midpoint convexity from bounded tree potentials and path costs"
    url: "https://github.com/openai/math/blob/main/preprints/Midpoint-convexity-from-bounded-tree-potentials-and-path-costs-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Independent products in real L1: asymptotic midpoint convexity without AUC renormings"
    url: "https://github.com/openai/math/blob/main/preprints/Independent-products-in-real-L1-asymptotic-midpoint-convexity-without-AUC-renormings-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Midpoint convexity from two recursive potentials"
    url: "https://github.com/openai/math/blob/main/preprints/Midpoint-convexity-from-two-recursive-potentials-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Reflexive midpoint convexity and diamond distortion

## One-sentence takeaway

OpenAI's result family 331 (Functional analysis) claims: Constructs a real reflexive Banach space with an asymptotically midpoint uniformly convex norm but no equivalent asymptotically uniformly convex norm, extending Baudier's separation to reflexive spaces.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): In the same space, depth-k countably branching diamonds require distortion at least $\sqrt{1+k/12}$, so midpoint uniform convexity does not force uniformly bounded diamond distortion even under reflexivity.
- *Asymptotic midpoint uniform convexity and unbounded diamond distortion in a reflexive tree space*: We construct a separable reflexive real Banach space whose given norm is asymptotically midpoint uniformly convex but which admits no asymptotically uniformly convex equivalent norm. Its averaged midpoint modulus is at least $\sqrt{1+t^2/12}-1$, and the countably branching diamond of depth k has distortion at least $\sqrt{1+k/12}$ in this space. This gives a negative answer to the reflexive diamond converse for asymptotic uniform convexifiability.
- *Midpoint lenses in segment spaces*: For a real segment-forest dual with unbounded finite component heights and the real infinite-height coordinate predual, we bound the tail of an arbitrary displacement in a symmetric lens by $2\sqrt{R^2-\|x\|^2}$, where R is the lens radius and x is its finitely supported center. Both given norms are asymptotically midpoint uniformly convex, although neither space admits an equivalent asymptotically uniformly convex norm. The finite-height forest dual is reflexive.
- *Distortion of countably branching diamonds from midpoint and tree energies*: We derive quantitative distortion bounds for countably branching diamond graphs from midpoint estimates and direct tree energies. In the dual of a finite-height segment forest, every distortion-D embedding of the depth-k diamond satisfies $D^2\ge1+k/4$. The same bound holds in the infinite-height coordinate predual.
- *Exact asymptotic moduli in a Daugavet subspace of L1*: For an infinite-dimensional real subspace of L1 whose unit ball is totally bounded in measure and whose norm has the Daugavet property, we compute the averaged midpoint and one-sided asymptotic moduli at every unit center. They are $\max\{t/2,t-1\}$ and $\max\{0,t-2\}$, respectively. The same weak-neighborhood geometry excludes every equivalent asymptotically uniformly convex norm.
- *Midpoint convexity from bounded tree potentials and path costs*: Four real Banach spaces defined by bounded tree potentials satisfy the averaged asymptotic midpoint bound $\widehat\delta(t)\ge\sqrt{1+t^2/4}-1$ for $0\lt t\lt 1$, while none admits an asymptotically uniformly convex (AUC) renorming. On finite-height trees, the globally constrained norm equals the least additive cost of a Hilbert vector and root paths. The quadratic path and segment-start outer Hilbert sums are reflexive and asymptotically midpoint uniformly convex, and admit no equivalent AUC norm.
- Plus 2 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/331.md): The paper constructs a Banach space whose midpoint geometry is asymptotically uniformly convex even though no equivalent norm is asymptotically uniformly convex in the usual one-sided sense. The formalization proves that the full dual of the specified segment-norm completion is infinite-dimensional, separable, and reflexive; its averaged midpoint modulus is at least $\sqrt{1+t^2/12}-1$ for every $t>0$, while every equivalent norm fails asymptotic uniform convexity.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 7 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: If $x$ is supported on a finite ancestral set $H$, $R\ge0$, and $\|x+y\|,\|x-y\|\le R$, then the part of $y$ outside $H$ has norm at most $2\sqrt{R^2-\|x\|^2}$. The formalization also contains selected graph deductions under explicit companion assumptions. Twenty-two of those companion inputs are assumed in these deductions; the diamond distortion bound above does not require them.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Asymptotic midpoint uniform convexity and unbounded diamond distortion in a reflexive tree space](https://github.com/openai/math/blob/main/preprints/Asymptotic-midpoint-uniform-convexity-and-unbounded-diamond-distortion-in-a-reflexive-tree-space-September-27-2026/manuscript.pdf)
- Manuscript: [Midpoint lenses in segment spaces](https://github.com/openai/math/blob/main/preprints/Midpoint-lenses-in-segment-spaces-September-27-2026/manuscript.pdf)
- Manuscript: [Distortion of countably branching diamonds from midpoint and tree energies](https://github.com/openai/math/blob/main/preprints/Diamond-distortion-from-midpoint-and-tree-energies-September-27-2026/manuscript.pdf)
- Manuscript: [Exact asymptotic moduli in a Daugavet subspace of L1](https://github.com/openai/math/blob/main/preprints/Exact-asymptotic-moduli-in-a-Daugavet-subspace-of-L1-September-27-2026/manuscript.pdf)
- Manuscript: [Midpoint convexity from bounded tree potentials and path costs](https://github.com/openai/math/blob/main/preprints/Midpoint-convexity-from-bounded-tree-potentials-and-path-costs-September-27-2026/manuscript.pdf)
- Manuscript: [Independent products in real L1: asymptotic midpoint convexity without AUC renormings](https://github.com/openai/math/blob/main/preprints/Independent-products-in-real-L1-asymptotic-midpoint-convexity-without-AUC-renormings-September-27-2026/manuscript.pdf)
- Manuscript: [Midpoint convexity from two recursive potentials](https://github.com/openai/math/blob/main/preprints/Midpoint-convexity-from-two-recursive-potentials-September-27-2026/manuscript.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/331.md
- Comparator statement (Reflexive tree space, midpoint modulus, and diamond distortion): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ForestSpace.lean
- Comparator statement (Midpoint-lens tail estimate): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MidpointLenses.lean
- Comparator statement (All-pairs diamond distortion bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DiamondDistortion.lean
- Comparator statement (Exact asymptotic moduli and a Daugavet example): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DaugavetModuli.lean
- Comparator statement (Tree-potential midpoint convexity and renorming obstruction): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BoundedTreePotentials.lean
- Comparator statement (Independent-product spaces and positive midpoint moduli): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/IndependentProducts.lean
- Comparator statement (Recursive-potential spaces and midpoint convexity): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RecursivePotentials.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
