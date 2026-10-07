---
title: "The Gaussian propeller conjecture in every dimension"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 096; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Gaussian-Propeller-Bound-in-Every-Dimension-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1953
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Gaussian propeller bound in every dimension"
    url: "https://github.com/openai/math/blob/main/preprints/The-Gaussian-Propeller-Bound-in-Every-Dimension-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Gaussian propeller conjecture in every dimension

## One-sentence takeaway

OpenAI's result family 096 (Convex and metric geometry) claims: Proves that the sum of squared Gaussian first moments of any finite measurable partition is at most $9/(8\pi)$.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): In dimension at least two, three planar sectors of angle $2\pi/3$, extended orthogonally, attain the bound. Combined with the separate Unique Games theorem, this proves NP-hardness of improving the loss factor $(8\pi/9)(1-1/k)$ for identity-target kernel clustering with fixed k ≥ 3 on rational centered positive semidefinite inputs.
- *The Gaussian propeller bound in every dimension*: We prove the Gaussian propeller conjecture: for every finite measurable partition of a Euclidean space, the sum of the squared lengths of its Gaussian first moments is at most $9/(8\pi)$. For dimension at least two and at least three cells, three planar sectors of angle $2\pi/3$, extended by an orthogonal Euclidean factor, attain the bound.
- Lean scope (lean/docs/096.md): The Gaussian propeller problem asks how large the sum of squared Gaussian first moments can be over a partition. The formalized result proves the sharp bound $9/(8\pi)$ for every positive dimension and every positive number of labelled cells, allowing empty cells and arbitrary masses.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Gaussian propeller bound in every dimension](https://github.com/openai/math/blob/main/preprints/The-Gaussian-Propeller-Bound-in-Every-Dimension-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/096.md
- Comparator statement (Gaussian propeller bound and attainment): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GaussianPropeller.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
