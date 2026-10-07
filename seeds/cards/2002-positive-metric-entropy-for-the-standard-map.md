---
title: "Positive metric entropy for the standard map"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 146; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Positive-Metric-Entropy-for-the-Standard-Map-at-Large-Parameters-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "lean4"
  - "formalized"
seed_rank: 2002
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Positive Metric Entropy for the Standard Map at Large Parameters"
    url: "https://github.com/openai/math/blob/main/preprints/Positive-Metric-Entropy-for-the-Standard-Map-at-Large-Parameters-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Positive metric entropy for the standard map

## One-sentence takeaway

OpenAI's result family 146 (Dynamical systems and ergodic theory) claims: Proves that the standard sine map on the two-dimensional torus has positive metric entropy with respect to area for every sufficiently large positive parameter.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This establishes Sinai's positive-parameter-measure conjecture for the original family, with the stronger conclusion of a full parameter tail.
- *Positive Metric Entropy for the Standard Map at Large Parameters*: We prove that the standard sine map of the two-dimensional torus has positive metric entropy with respect to normalized area for every sufficiently large positive parameter. This gives a full parameter tail, and hence answers Sinai's positive-parameter-measure conjecture affirmatively.
- Lean scope (lean/docs/146.md): The formalization proves Sinai's positive-entropy conjecture for the standard sine map on the two-dimensional torus in the stronger form of a full positive parameter tail. For every sufficiently large parameter, normalized area has positive metric entropy, and a positive-area set has positive largest Lyapunov exponent with the stated derivative-growth limit.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No genericity assumption on the parameter is used.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Positive Metric Entropy for the Standard Map at Large Parameters](https://github.com/openai/math/blob/main/preprints/Positive-Metric-Entropy-for-the-Standard-Map-at-Large-Parameters-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/146.md
- Comparator statement (Positive-area hyperbolic Bernoulli component): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/StandardMapComponents.lean
- Comparator statement (Positive metric entropy for all sufficiently large parameters): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/StandardMapEntropy.lean
- Comparator statement (Positive Lyapunov exponents and entropy): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/StandardMapLyapunov.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
