---
title: "Directional zero–one laws beyond iid environments and iid ballisticity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 220; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-directional-zero-one-law-for-finite-range-dependent-random-environments-October-5-2026/directional-zero-one-finite-range.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2075
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A directional zero–one law for finite-range-dependent random environments"
    url: "https://github.com/openai/math/blob/main/preprints/A-directional-zero-one-law-for-finite-range-dependent-random-environments-October-5-2026/directional-zero-one-finite-range.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A directional zero–one law under strict ellipticity"
    url: "https://github.com/openai/math/blob/main/preprints/A-directional-zero-one-law-under-strict-ellipticity-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Directional transience implies ballisticity"
    url: "https://github.com/openai/math/blob/main/preprints/Directional-transience-implies-ballisticity-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Directional zero–one laws beyond iid environments and iid ballisticity

## One-sentence takeaway

OpenAI's result family 220 (Probability and statistical mechanics) claims: On ℤd, d ≥ 3, directional escape has probability zero or one for iid strictly elliptic nearest-neighbor environments, and for stationary ergodic finite-range-dependent environments under uniform ellipticity.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): In iid uniformly elliptic environments with d ≥ 2, almost-sure directional transience implies a deterministic limiting velocity with positive projection in that direction, resolving the ballisticity conjecture.
- *A directional zero–one law for finite-range-dependent random environments*: We prove a directional zero–one law for uniformly elliptic nearest-neighbor random walks in stationary, ergodic, finite-range-dependent environments on ℤd, d ≥ 3. For every fixed nonzero real direction, the probability of escape in that direction, averaged over the environment, is either zero or one. Finite-range dependence is imposed on the full transition rows: collections of rows at distance greater than a fixed range are independent, including collections indexed by infinite deterministic sets.
- *A directional zero–one law under strict ellipticity*: We prove the directional zero–one conjecture for nearest-neighbor random walks in independent and identically distributed strictly elliptic environments on ℤd, d ≥ 3: the probability of escape in each fixed nonzero real direction is zero or one. Only strict positivity of the transition probabilities is required; no uniform lower bound or moment assumption is imposed.
- *Directional transience implies ballisticity*: We prove that almost-sure transience in a fixed direction implies a deterministic limiting velocity with positive projection in that direction for nearest-neighbor random walks in independent and identically distributed uniformly elliptic environments on ℤd, d ≥ 2. This resolves the ballisticity conjecture positively.
- Lean scope (lean/docs/220.md): The directional zero–one conjecture asks whether a random walk's probability of escape in a fixed direction must be zero or one. The formalization proves this for nearest-neighbor walks in independent identically distributed strictly elliptic environments on $\mathbb Z^d$, for every $d\ge3$ and every nonzero real direction.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Strict ellipticity means that every allowed transition probability is positive almost surely; no uniform positive lower bound or moment condition is assumed.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A directional zero–one law for finite-range-dependent random environments](https://github.com/openai/math/blob/main/preprints/A-directional-zero-one-law-for-finite-range-dependent-random-environments-October-5-2026/directional-zero-one-finite-range.pdf)
- Manuscript: [A directional zero–one law under strict ellipticity](https://github.com/openai/math/blob/main/preprints/A-directional-zero-one-law-under-strict-ellipticity-September-23-2026/paper.pdf)
- Manuscript: [Directional transience implies ballisticity](https://github.com/openai/math/blob/main/preprints/Directional-transience-implies-ballisticity-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/220.md
- Comparator statement (Directional zero–one law under strict ellipticity): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DirectionalWalk.lean
- Comparator statement (Directional transience implies ballisticity): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DirectionalBallisticity.lean
- Comparator statement (Positive-probability transience and the velocity hemisphere): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/VelocityHemisphere.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
