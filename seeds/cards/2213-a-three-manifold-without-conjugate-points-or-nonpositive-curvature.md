---
title: "A three-manifold without conjugate points or nonpositive curvature"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 358; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Three-Manifold-Without-Conjugate-Points-and-Without-a-Nonpositively-Curved-Metric-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2213
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A Three-Manifold Without Conjugate Points and Without a Nonpositively Curved Metric"
    url: "https://github.com/openai/math/blob/main/preprints/A-Three-Manifold-Without-Conjugate-Points-and-Without-a-Nonpositively-Curved-Metric-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A three-manifold without conjugate points or nonpositive curvature

## One-sentence takeaway

OpenAI's result family 358 (Differential geometry) claims: Constructs a closed connected orientable smooth three-manifold that admits a metric without conjugate points but no metric of nonpositive sectional curvature.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This answers negatively, already in dimension three, whether the first metric-existence property implies the second.
- *A Three-Manifold Without Conjugate Points and Without a Nonpositively Curved Metric*: We construct a closed connected orientable smooth three-manifold that admits a smooth Riemannian metric without conjugate points but admits no smooth Riemannian metric of nonpositive sectional curvature.
- Lean scope (lean/docs/358.md): The formalized result separates absence of conjugate points from nonpositive sectional curvature. It constructs a closed connected orientable smooth three-manifold with a smooth Riemannian metric having no conjugate points, while the same manifold admits no smooth metric of everywhere nonpositive sectional curvature.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Three-Manifold Without Conjugate Points and Without a Nonpositively Curved Metric](https://github.com/openai/math/blob/main/preprints/A-Three-Manifold-Without-Conjugate-Points-and-Without-a-Nonpositively-Curved-Metric-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/358.md
- Comparator statement (No conjugate points without a nonpositively curved metric): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ConjugatePoints.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
