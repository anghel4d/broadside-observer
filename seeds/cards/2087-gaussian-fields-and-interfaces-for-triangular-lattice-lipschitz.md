---
title: "Gaussian fields and interfaces for triangular-lattice Lipschitz heights"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 232; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Gaussian-free-field-limits-of-weighted-integer-Lipschitz-heights-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "unformalized"
seed_rank: 2087
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Gaussian free-field limits of weighted integer Lipschitz heights"
    url: "https://github.com/openai/math/blob/main/preprints/Gaussian-free-field-limits-of-weighted-integer-Lipschitz-heights-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Gaussian free field limit of integer Lipschitz heights with two-arc boundary data"
    url: "https://github.com/openai/math/blob/main/preprints/The-Gaussian-free-field-limit-of-integer-Lipschitz-heights-with-two-arc-boundary-data-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Uniform real Lipschitz surfaces on the triangular lattice"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-real-Lipschitz-surfaces-on-the-triangular-lattice-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Gaussian fields and interfaces for triangular-lattice Lipschitz heights

## One-sentence takeaway

OpenAI's result family 232 (Probability and statistical mechanics) claims: Proves Gaussian free field limits on bounded smooth simply connected domains for triangular-lattice height models: uniform odd heights with increments $0,\pm2$ and two-arc boundary values $\pm1$, and zero-boundary integer Lipschitz heights weighted by fixed $x\in[1/\sqrt2,1]$.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Uniform real Lipschitz heights also converge to a Gaussian field; at a tuned opposite-boundary amplitude, their interface converges to chordal SLE4, establishing Schramm’s real-field/interface predictions.
- *Gaussian free-field limits of weighted integer Lipschitz heights*: We prove a Gaussian free field scaling limit for weighted integer Lipschitz heights on the triangular lattice. With zero boundary values and a factor x for each edge on which the height changes, the field converges after division by a positive constant depending only on x to the zero-Dirichlet Gaussian free field, for every fixed $x\in[1/\sqrt2,1]$. The convergence holds as a random distribution on every bounded C2 Jordan domain under inside lattice approximations with uniformly convergent boundary parametrizations.
- *The Gaussian free field limit of integer Lipschitz heights with two-arc boundary data*: We prove that the centered uniform odd integer height function on triangular-lattice approximations of a smooth simply connected domain, with neighboring differences zero or two and boundary values +1 and −1 on two arcs, converges to a universal multiple of the Dirichlet Gaussian free field. This resolves the field part of Schramm's Problem 2.2. We give an absolutely convergent finite-volume formula for the normalization.
- *Uniform real Lipschitz surfaces on the triangular lattice*: We prove the Gaussian free field and SLE$_4$ scaling limits for uniformly sampled real nearest-neighbor Lipschitz heights on the triangular lattice, resolving Schramm's Problem 2.3. On approximations of smooth simply connected domains, the centered height field converges as a random distribution to a multiple of the Dirichlet Gaussian free field. At one tuned two-arc boundary amplitude, the zero-height interface converges in uniform curve distance to chordal SLE$_4$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Gaussian free-field limits of weighted integer Lipschitz heights](https://github.com/openai/math/blob/main/preprints/Gaussian-free-field-limits-of-weighted-integer-Lipschitz-heights-September-25-2026/paper.pdf)
- Manuscript: [The Gaussian free field limit of integer Lipschitz heights with two-arc boundary data](https://github.com/openai/math/blob/main/preprints/The-Gaussian-free-field-limit-of-integer-Lipschitz-heights-with-two-arc-boundary-data-September-25-2026/paper.pdf)
- Manuscript: [Uniform real Lipschitz surfaces on the triangular lattice](https://github.com/openai/math/blob/main/preprints/Uniform-real-Lipschitz-surfaces-on-the-triangular-lattice-September-25-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
