---
title: "The optimal order of convex-body covering density"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 092; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-single-lattice-covering-bound-of-order-n-log-n-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1949
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A single-lattice covering bound of order n log n"
    url: "https://github.com/openai/math/blob/main/preprints/A-single-lattice-covering-bound-of-order-n-log-n-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Translative covering densities of order n log n"
    url: "https://github.com/openai/math/blob/main/preprints/Translative-covering-densities-of-order-n-log-n-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The optimal order of convex-body covering density

## One-sentence takeaway

OpenAI's result family 092 (Convex and metric geometry) claims: Determines the optimal worst-case covering density as $\Theta(n\log n)$, for both lattice and unrestricted translative coverings.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Every convex body in ℝn, n ≥ 2, admits a lattice covering of density at most $Cn\log n$; centrally symmetric examples in every sufficiently large dimension require at least $cn\log n$ even without the lattice restriction, for absolute $c,C\gt 0$.
- *A single-lattice covering bound of order n log n*: Every convex body in ℝn, n ≥ 2, admits a covering by translates along one full-rank lattice with density at most $Cn\log n$, for an absolute constant C. No symmetry or boundary regularity is assumed.
- *Translative covering densities of order n log n*: For every sufficiently large dimension n, we construct a centrally symmetric convex body whose translative covering density exceeds $c n\log n$, where c > 0 is absolute. This disproves the existence of a universal linear upper bound and matches the order of Rogers' upper bound.
- Lean scope (lean/docs/092.md): The formalized result gives an absolute constant $C>0$ such that every convex body $K\subset\mathbb R^n$, $n\ge2$, admits a covering by translates along one full-rank lattice $L$ with density $|K|/\mathrm{covol}(L)\le Cn\log n$. The covering is exact, and no symmetry, boundary regularity, or volume normalization is assumed.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The covering is exact, and no symmetry, boundary regularity, or volume normalization is assumed.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A single-lattice covering bound of order n log n](https://github.com/openai/math/blob/main/preprints/A-single-lattice-covering-bound-of-order-n-log-n-September-23-2026/paper.pdf)
- Manuscript: [Translative covering densities of order n log n](https://github.com/openai/math/blob/main/preprints/Translative-covering-densities-of-order-n-log-n-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/092.md
- Comparator statement (Single-lattice covering bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SingleLatticeCovering.lean
- Comparator statement (Optimal order for translative and lattice covering-density suprema): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CoveringDensity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
