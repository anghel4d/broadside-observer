---
title: "Cyclic length and chromatic fixed-point loss"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 314; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Cyclic-Length-and-Chromatic-Fixed-Point-Loss-September-24-2026/Cyclic-Length-and-Chromatic-Fixed-Point-Loss-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "topology"
  - "unformalized"
seed_rank: 2169
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Cyclic length and chromatic fixed-point loss"
    url: "https://github.com/openai/math/blob/main/preprints/Cyclic-Length-and-Chromatic-Fixed-Point-Loss-September-24-2026/Cyclic-Length-and-Chromatic-Fixed-Point-Loss-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Cyclic length and chromatic fixed-point loss

## One-sentence takeaway

OpenAI's result family 314 (Topology) claims: Determines the optimal chromatic loss from geometric H-fixed points to geometric G-fixed points for every subgroup H of a finite p-group G.

## Why it matters here

Topology results are background for knot, surface and configuration-space reasoning in geometry code. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): At every nonnegative height, the loss equals the shortest subnormal-chain length from H to G with cyclic quotients. Each quotient counts once regardless of order, and finite spectra witness sharpness.
- *Cyclic length and chromatic fixed-point loss*: For a finite p-group G and a subgroup H, we prove that the optimal chromatic fixed-point loss equals the shortest length of a subnormal chain from H to G with cyclic quotients. The equality holds at every prime and every nonnegative height, resolving positively the equality proposed by Kuhn and Lloyd.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Cyclic length and chromatic fixed-point loss](https://github.com/openai/math/blob/main/preprints/Cyclic-Length-and-Chromatic-Fixed-Point-Loss-September-24-2026/Cyclic-Length-and-Chromatic-Fixed-Point-Loss-September-24-2026.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
