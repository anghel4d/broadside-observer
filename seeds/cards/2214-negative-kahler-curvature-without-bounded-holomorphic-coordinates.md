---
title: "Negative Kähler curvature without bounded holomorphic coordinates"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 359; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-negatively-pinched-Kahler-threefold-without-bounded-holomorphic-coordinates-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2214
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A negatively pinched Kähler threefold without bounded holomorphic coordinates"
    url: "https://github.com/openai/math/blob/main/preprints/A-negatively-pinched-Kahler-threefold-without-bounded-holomorphic-coordinates-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "One-sided negative sectional curvature and the holomorphic Liouville property"
    url: "https://github.com/openai/math/blob/main/preprints/One-sided-negative-sectional-curvature-and-the-holomorphic-Liouville-property-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Negative Kähler curvature without bounded holomorphic coordinates

## One-sentence takeaway

OpenAI's result family 359 (Differential geometry) claims: Constructs a contractible domain in ℂ3 with a complete negatively pinched Kähler metric but no bounded holomorphic coordinates, disproving bounded-domain uniformization in this setting.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A higher-dimensional example has sectional curvature at most −1 and only constant bounded holomorphic functions; its curvature is not bounded below.
- *A negatively pinched Kähler threefold without bounded holomorphic coordinates*: We construct a contractible domain in complex dimension three with a complete Kähler metric whose real sectional curvatures lie between two finite negative constants. It admits no bounded holomorphic map to ℂ3 with nowhere-vanishing Jacobian and is therefore not biholomorphic to a bounded domain. This gives a negative answer to the negatively pinched Kähler uniformization question.
- *One-sided negative sectional curvature and the holomorphic Liouville property*: We construct, in some sufficiently large fixed finite complex dimension m, a domain in ℂm diffeomorphic to $\mathbb R^{2m}$ that admits a complete Kähler metric with real sectional curvature at most −1 and has only constant bounded holomorphic functions. Its sectional curvatures are unbounded below. The construction gives a negative answer to the one-sided bounded-holomorphic-function question.
- Lean scope (lean/docs/359.md): The formalized result constructs a nonempty contractible complex threefold with a complete Kähler metric whose real sectional curvatures lie between two fixed negative constants. Nevertheless, it has no system of bounded holomorphic coordinates and is not biholomorphic to a bounded domain.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A negatively pinched Kähler threefold without bounded holomorphic coordinates](https://github.com/openai/math/blob/main/preprints/A-negatively-pinched-Kahler-threefold-without-bounded-holomorphic-coordinates-September-25-2026/paper.pdf)
- Manuscript: [One-sided negative sectional curvature and the holomorphic Liouville property](https://github.com/openai/math/blob/main/preprints/One-sided-negative-sectional-curvature-and-the-holomorphic-Liouville-property-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/359.md
- Comparator statement (Negatively pinched Kähler threefold without bounded coordinates): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PinchedKahler.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
