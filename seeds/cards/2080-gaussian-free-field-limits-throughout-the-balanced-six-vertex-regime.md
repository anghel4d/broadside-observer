---
title: "Gaussian free field limits throughout the balanced six-vertex regime"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 225; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Gaussian-free-field-limit-of-the-balanced-six-vertex-model-with-variance-multiplier-1-over-arcsin-c-over-2-September-23-2026/The-Gaussian-free-field-limit-of-the-balanced-six-vertex-model-with-variance-multiplier-1-over-arcsin-c-over-2-September-23-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "unformalized"
seed_rank: 2080
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "The Gaussian free field limit of the balanced six-vertex model with variance multiplier 1/arcsin(c/2)"
    url: "https://github.com/openai/math/blob/main/preprints/The-Gaussian-free-field-limit-of-the-balanced-six-vertex-model-with-variance-multiplier-1-over-arcsin-c-over-2-September-23-2026/The-Gaussian-free-field-limit-of-the-balanced-six-vertex-model-with-variance-multiplier-1-over-arcsin-c-over-2-September-23-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Gaussian free field limits throughout the balanced six-vertex regime

## One-sentence takeaway

OpenAI's result family 225 (Probability and statistical mechanics) claims: The balanced square-lattice six-vertex height field with $a=b=1$ and $0\lt c\le2$ converges to a Gaussian free field, including at the endpoint c = 2.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): The plane state is defined by balanced-torus limits. For unit height increments and Green kernel $-(2\pi)^{-1}\log|x-y|$, the exact variance multiplier is $1/\arcsin(c/2)$.
- *The Gaussian free field limit of the balanced six-vertex model with variance multiplier 1/arcsin(c/2)*: We prove that the height function of the square-lattice six-vertex model with weights $a=b=1$ and $0\lt c\le2$, in the plane state obtained from balanced tori, converges to a multiple of the Gaussian free field. For unit height jumps and Green kernel $-(2\pi)^{-1}\log|x-y|$, the squared multiplier is $1/\arcsin(c/2)$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The Gaussian free field limit of the balanced six-vertex model with variance multiplier 1/arcsin(c/2)](https://github.com/openai/math/blob/main/preprints/The-Gaussian-free-field-limit-of-the-balanced-six-vertex-model-with-variance-multiplier-1-over-arcsin-c-over-2-September-23-2026/The-Gaussian-free-field-limit-of-the-balanced-six-vertex-model-with-variance-multiplier-1-over-arcsin-c-over-2-September-23-2026.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
