---
title: "GOE bulk universality for regular graphs with weak Anderson disorder"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 219; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Fixed-energy-universality-for-weak-Anderson-disorder-on-random-regular-graphs-October-5-2026/fixed-energy-universality-weak-anderson-disorder-random-regular-graphs.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "unformalized"
seed_rank: 2074
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Fixed-energy universality for weak Anderson disorder on random regular graphs"
    url: "https://github.com/openai/math/blob/main/preprints/Fixed-energy-universality-for-weak-Anderson-disorder-on-random-regular-graphs-October-5-2026/fixed-energy-universality-weak-anderson-disorder-random-regular-graphs.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "GOE bulk universality for fixed-degree random regular graphs"
    url: "https://github.com/openai/math/blob/main/preprints/GOE-bulk-universality-for-fixed-degree-random-regular-graphs-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# GOE bulk universality for regular graphs with weak Anderson disorder

## One-sentence takeaway

OpenAI's result family 219 (Probability and statistical mechanics) claims: For every fixed degree d ≥ 3, the bulk adjacency-eigenvalue point process of a uniform simple random d-regular graph converges to the Gaussian orthogonal ensemble law, including for cubic graphs.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): The same fixed-energy universality persists under sufficiently weak fixed iid uniform diagonal disorder, throughout compact bands strictly inside the clean spectral edges.
- *Fixed-energy universality for weak Anderson disorder on random regular graphs*: For every fixed degree d ≥ 3, we prove fixed-energy GOE universality for the adjacency matrix of a uniformly random simple labelled d-regular graph with independent uniform diagonal disorder. The disorder strength is positive, sufficiently small, and fixed as the graph grows. At each fixed energy in a compact subinterval of the clean spectral band, the full microscopic eigenvalue point process converges to the GOE bulk process after rescaling by the positive density of states of the corresponding infinite-tree operator.
- *GOE bulk universality for fixed-degree random regular graphs*: We prove the fixed-degree bulk-universality conjecture for random regular graphs. For every fixed integer d ≥ 3 and every fixed energy in the open Kesten–McKay bulk, the unfolded eigenvalue point process of the adjacency matrix of a uniform simple labelled d-regular graph converges to the GOE bulk process. The convergence holds along all admissible graph sizes, without additional conditioning.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Fixed-energy universality for weak Anderson disorder on random regular graphs](https://github.com/openai/math/blob/main/preprints/Fixed-energy-universality-for-weak-Anderson-disorder-on-random-regular-graphs-October-5-2026/fixed-energy-universality-weak-anderson-disorder-random-regular-graphs.pdf)
- Manuscript: [GOE bulk universality for fixed-degree random regular graphs](https://github.com/openai/math/blob/main/preprints/GOE-bulk-universality-for-fixed-degree-random-regular-graphs-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
