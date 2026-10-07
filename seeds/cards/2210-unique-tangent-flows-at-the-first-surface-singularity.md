---
title: "Unique tangent flows at the first surface singularity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 355; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Tangent-flow-uniqueness-2026-09-24/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "unformalized"
seed_rank: 2210
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Uniqueness of tangent flows at the first singular time of embedded surface mean-curvature flow"
    url: "https://github.com/openai/math/blob/main/preprints/Tangent-flow-uniqueness-2026-09-24/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Unique tangent flows at the first surface singularity

## One-sentence takeaway

OpenAI's result family 355 (Differential geometry) claims: Proves the first-singular-time case of tangent-flow uniqueness for smooth compact connected embedded surfaces without boundary in ℝ3.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): At every singular point, all fixed-center backward tangent flows agree as area measures at every negative time in the original ambient coordinates, without mean-convexity or a prescribed tangent model.
- *Uniqueness of tangent flows at the first singular time of embedded surface mean-curvature flow*: We prove that, at each singular point of the first singular time of the mean-curvature flow of a smooth compact connected embedded surface without boundary in ℝ3, all fixed-center rescalings converge locally smoothly on compact negative-time intervals to one multiplicity-one homothetic self-shrinker flow. The limit is unique in the original ambient coordinates, including its position and axes. No mean-convexity assumption or prescribed tangent model is required.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Uniqueness of tangent flows at the first singular time of embedded surface mean-curvature flow](https://github.com/openai/math/blob/main/preprints/Tangent-flow-uniqueness-2026-09-24/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
