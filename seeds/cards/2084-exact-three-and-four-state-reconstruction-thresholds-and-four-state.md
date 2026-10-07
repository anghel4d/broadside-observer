---
title: "Exact three- and four-state reconstruction thresholds and four-state tree capacity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 229; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Reconstruction-Threshold-for-the-Ferromagnetic-Four-State-Potts-Model-October-5-2026/four-state-potts.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2084
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Reconstruction Threshold for the Ferromagnetic Four-State Potts Model"
    url: "https://github.com/openai/math/blob/main/preprints/The-Reconstruction-Threshold-for-the-Ferromagnetic-Four-State-Potts-Model-October-5-2026/four-state-potts.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Capacity Criterion for Four-State Potts Reconstruction on Trees"
    url: "https://github.com/openai/math/blob/main/preprints/A-Capacity-Criterion-for-Four-State-Potts-Reconstruction-on-Trees-October-5-2026/four-state-capacity.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The exact reconstruction threshold for the three-state symmetric channel"
    url: "https://github.com/openai/math/blob/main/preprints/The-exact-reconstruction-threshold-for-the-three-state-symmetric-channel-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Exact three- and four-state reconstruction thresholds and four-state tree capacity

## One-sentence takeaway

OpenAI's result family 229 (Probability and statistical mechanics) claims: Proves the exact reconstruction threshold $d\lambda^2\gt 1$, with nonreconstruction at equality, for three-state symmetric and four-state ferromagnetic broadcasting on regular trees (d ≥ 2) and observed Poisson trees (mean d > 1 and d > 0, respectively), with Poisson advantage averaged without conditioning on survival.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The three-state theorem allows both signs of λ and gives the exact weak-recovery threshold for the symmetric three-community stochastic block model.
- *The Reconstruction Threshold for the Ferromagnetic Four-State Potts Model*: We establish the exact Kesten–Stigum reconstruction threshold for the ferromagnetic four-state Potts broadcast model on every regular d-ary tree with d ≥ 2 and every Poisson Galton–Watson tree of mean d > 0. Reconstruction occurs exactly when $d\lambda^2\gt 1$; we prove nonreconstruction at and below the threshold, including equality. In the Poisson model the whole tree is observed and the reconstruction advantage is averaged without conditioning on survival.
- *A Capacity Criterion for Four-State Potts Reconstruction on Trees*: For the ferromagnetic four-state broadcast model with $0\lt \lambda\lt 1$, we prove that reconstruction on a bounded-degree deterministic rooted tree occurs exactly when its L3 capacity with edge resistances $\lambda^{-2|e|}$ is positive. This gives an exact criterion without regularity or growth-rate assumptions on the tree, including at the exponential critical boundary.
- *The exact reconstruction threshold for the three-state symmetric channel*: We determine the exact reconstruction threshold for the symmetric three-state broadcast process on every regular b-ary tree, b ≥ 2, and every observed Poisson Galton–Watson tree of mean d > 1. Reconstruction occurs exactly when $d\lambda^2\gt 1$, with d = b in the regular model; there is non-reconstruction at equality for either sign of the channel parameter. The Poisson advantage is averaged over trees and spins without conditioning on survival.
- Lean scope (lean/docs/229.md): The formalization proves the supercritical direction of reconstruction for the symmetric three-state broadcast channel, whose parameter satisfies $-1/2\le\lambda\le1$. On a regular $b$-ary tree, reconstruction holds when $b\lambda^2>1$; on an observed Poisson Galton–Watson tree of mean $d$, it holds when $d\lambda^2>1$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The selected statements cover reconstruction above the Kesten–Stigum threshold. Non-reconstruction at or below the threshold and the stochastic-block-model consequences in the paper are outside them.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Reconstruction Threshold for the Ferromagnetic Four-State Potts Model](https://github.com/openai/math/blob/main/preprints/The-Reconstruction-Threshold-for-the-Ferromagnetic-Four-State-Potts-Model-October-5-2026/four-state-potts.pdf)
- Manuscript: [A Capacity Criterion for Four-State Potts Reconstruction on Trees](https://github.com/openai/math/blob/main/preprints/A-Capacity-Criterion-for-Four-State-Potts-Reconstruction-on-Trees-October-5-2026/four-state-capacity.pdf)
- Manuscript: [The exact reconstruction threshold for the three-state symmetric channel](https://github.com/openai/math/blob/main/preprints/The-exact-reconstruction-threshold-for-the-three-state-symmetric-channel-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/229.md
- Comparator statement (Supercritical reconstruction on regular and Poisson trees): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThreeStateSupercritical.lean
- Comparator statement (Three-state reconstruction above the Kesten–Stigum threshold): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThreeStateTreeClauses.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
