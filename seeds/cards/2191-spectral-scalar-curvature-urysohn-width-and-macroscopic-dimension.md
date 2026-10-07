---
title: "Spectral scalar curvature, Urysohn width, and macroscopic dimension"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 336; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Spectral-scalar-curvature-and-uniform-Urysohn-width-October-5-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "unformalized"
seed_rank: 2191
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Spectral scalar curvature and uniform Urysohn width"
    url: "https://github.com/openai/math/blob/main/preprints/Spectral-scalar-curvature-and-uniform-Urysohn-width-October-5-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Spectral scalar curvature and Urysohn width in dimension three"
    url: "https://github.com/openai/math/blob/main/preprints/Spectral-scalar-curvature-and-Urysohn-width-in-dimension-three-October-5-2026/spectral-urysohn-three-manifolds.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Positive scalar curvature and uniform codimension-two width"
    url: "https://github.com/openai/math/blob/main/preprints/Positive-scalar-curvature-and-uniform-codimension-two-width-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Spectral scalar curvature, Urysohn width, and macroscopic dimension

## One-sentence takeaway

OpenAI's result family 336 (Differential geometry) claims: Every complete connected smooth boundaryless n-manifold, n ≥ 3, satisfying $-4\Delta+\mathrm{Scal}\ge1$ as a quadratic-form inequality admits a continuous map to a simplicial complex of dimension at most $n-2$ whose entire fibers have diameter bounded only by n in the original metric.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): This strengthens Gromov's width conclusion to spectral scalar curvature. Universal covers of closed positive-scalar-curvature manifolds also have continuous macroscopic dimension at most $n-2$ for every n ≥ 2.
- *Spectral scalar curvature and uniform Urysohn width*: For every n ≥ 4, a complete connected smooth Riemannian n-manifold without boundary satisfying $-4\Delta+\mathop{\mathrm{Scal}}\nolimits \ge1$ as a quadratic-form inequality admits a continuous map to a simplicial complex of dimension at most $n-2$ whose entire fibers have diameter bounded only in terms of n. The bound is measured in the original metric. This extends the uniform Urysohn width theorem from a pointwise scalar-curvature lower bound to a spectral lower bound.
- *Spectral scalar curvature and Urysohn width in dimension three*: Every connected complete smooth Riemannian three-manifold without boundary satisfying $-4\Delta+\mathop{\mathrm{Scal}}\nolimits \ge\lambda\gt 0$ as a quadratic-form inequality admits a continuous map to a graph whose entire fibers have diameter at most $500/\sqrt\lambda$ in the original metric. No orientability, spin, compactness, or bounded-geometry assumption is required.
- *Positive scalar curvature and uniform codimension-two width*: We prove the quantitative continuous form of Gromov's scalar-curvature conjecture in every dimension n ≥ 4. Every complete connected smooth boundaryless n-manifold with scalar curvature at least one admits a continuous map to a simplicial complex of dimension at most $n-2$ whose entire fibers have diameter bounded only in terms of n. We also obtain the continuous macroscopic-dimension conclusion for universal covers of closed manifolds with positive scalar curvature in every dimension n ≥ 2.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Spectral scalar curvature and uniform Urysohn width](https://github.com/openai/math/blob/main/preprints/Spectral-scalar-curvature-and-uniform-Urysohn-width-October-5-2026/main.pdf)
- Manuscript: [Spectral scalar curvature and Urysohn width in dimension three](https://github.com/openai/math/blob/main/preprints/Spectral-scalar-curvature-and-Urysohn-width-in-dimension-three-October-5-2026/spectral-urysohn-three-manifolds.pdf)
- Manuscript: [Positive scalar curvature and uniform codimension-two width](https://github.com/openai/math/blob/main/preprints/Positive-scalar-curvature-and-uniform-codimension-two-width-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
