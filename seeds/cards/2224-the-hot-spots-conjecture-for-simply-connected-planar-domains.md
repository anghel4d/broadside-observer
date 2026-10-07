---
title: "The hot spots conjecture for simply connected planar domains"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 369; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Strict-hot-spots-and-absence-of-interior-critical-points-on-smooth-simply-connected-planar-domains-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2224
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Strict hot spots and absence of interior critical points on smooth simply connected planar domains"
    url: "https://github.com/openai/math/blob/main/preprints/Strict-hot-spots-and-absence-of-interior-critical-points-on-smooth-simply-connected-planar-domains-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The hot spots conjecture for simply connected planar domains

## One-sentence takeaway

OpenAI's result family 369 (Partial differential equations) claims: Proves a strict form of Burdzy's simply connected hot spots conjecture.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): On every smooth bounded simply connected planar domain, each nonzero eigenfunction for the first positive Neumann eigenvalue has no interior critical point, so all global extrema lie on the boundary. Eigenvalue multiplicity is allowed.
- *Strict hot spots and absence of interior critical points on smooth simply connected planar domains*: We prove the strict hot spots conjecture for smooth bounded simply connected planar domains. More precisely, every nonzero eigenfunction for the first positive Neumann eigenvalue has nonvanishing gradient in the interior, so all its global maxima and minima lie on the boundary. This holds even when the eigenvalue is multiple.
- Lean scope (lean/docs/369.md): The strict hot-spots conjecture asks whether extrema of a first nonconstant Neumann eigenfunction occur only on the boundary. The formalization proves the stronger interior statement on every nonempty smooth bounded simply connected planar domain: every nonzero eigenfunction in the first positive Neumann eigenspace has nonvanishing gradient throughout the interior.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Strict hot spots and absence of interior critical points on smooth simply connected planar domains](https://github.com/openai/math/blob/main/preprints/Strict-hot-spots-and-absence-of-interior-critical-points-on-smooth-simply-connected-planar-domains-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/369.md
- Comparator statement (Strict hot spots and absence of interior critical points): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HotSpots.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
