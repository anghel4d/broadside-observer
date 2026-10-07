---
title: "Pointwise multiple ergodic averages for mixing transformations"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 154; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Pointwise-Multiple-Ergodic-Averages-for-Mixing-Transformations-October-4-2026/multiple-ergodic-averages.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "unformalized"
seed_rank: 2010
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Pointwise Multiple Ergodic Averages for Mixing Transformations"
    url: "https://github.com/openai/math/blob/main/preprints/Pointwise-Multiple-Ergodic-Averages-for-Mixing-Transformations-October-4-2026/multiple-ergodic-averages.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Pointwise convergence of fourfold ergodic averages for mixing transformations"
    url: "https://github.com/openai/math/blob/main/preprints/Pointwise-convergence-of-fourfold-ergodic-averages-for-mixing-transformations-October-4-2026/fourfold-ergodic-averages.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Triple ergodic averages with distinct integer slopes"
    url: "https://github.com/openai/math/blob/main/preprints/Triple-ergodic-averages-with-distinct-integer-slopes-October-4-2026/triple-ergodic-distinct-slopes.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Pointwise convergence of triple ergodic averages for mixing transformations"
    url: "https://github.com/openai/math/blob/main/preprints/Pointwise-convergence-of-triple-ergodic-averages-for-mixing-transformations-October-4-2026/pointwise-triple-ergodic-averages-mixing-transformations.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Pointwise multiple ergodic averages for mixing transformations

## One-sentence takeaway

OpenAI's result family 154 (Dynamical systems and ergodic theory) claims: Proves almost-everywhere convergence of consecutive multiple ergodic averages of every finite length for invertible mixing probability-preserving transformations.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): For each fixed tuple of bounded functions, the limit is the product of their integrals, along all positive averaging lengths. No mixing rate or standardness assumption on the probability space is required.
- *Pointwise Multiple Ergodic Averages for Mixing Transformations*: Let T be an invertible mixing probability-preserving transformation. For every integer n ≥ 2 and every fixed tuple of bounded measurable functions, we prove that the consecutive multiple ergodic averages of length n converge almost everywhere to the product of the integrals, as the averaging length tends to infinity through all positive integers. The probability space need not be standard, and no rate of mixing is required.
- *Pointwise convergence of fourfold ergodic averages for mixing transformations*: We prove that fourfold ergodic averages along the times $n,2n,3n,4n$ converge almost everywhere to the product of the integrals for every invertible, bimeasurable, mixing probability-preserving transformation and every fixed choice of bounded measurable inputs. Convergence holds along all positive integer averaging lengths. No quantitative mixing rate is assumed, and the probability space need not be standard.
- *Triple ergodic averages with distinct integer slopes*: For every invertible mixing probability-preserving transformation, triple ergodic averages of bounded measurable functions along any three pairwise distinct nonzero integer slopes converge almost everywhere to the product of their integrals. The slopes may be positive or negative.
- *Pointwise convergence of triple ergodic averages for mixing transformations*: We prove pointwise convergence of triple ergodic averages for every invertible mixing probability preserving transformation T of an arbitrary probability space $(X,\mathcal F,\mu)$, with measurable inverse. For every triple of bounded measurable functions $f_1,f_2,f_3:X\to\mathbb C$,

$\displaystyle \frac1N\sum_{n=1}^N f_1(T^nx)f_2(T^{2n}x)f_3(T^{3n}x) \longrightarrow \prod_{j=1}^3\int_X f_j\,d\mu$

for μ-almost every x as $N\to\infty$ through all positive integers.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Pointwise Multiple Ergodic Averages for Mixing Transformations](https://github.com/openai/math/blob/main/preprints/Pointwise-Multiple-Ergodic-Averages-for-Mixing-Transformations-October-4-2026/multiple-ergodic-averages.pdf)
- Manuscript: [Pointwise convergence of fourfold ergodic averages for mixing transformations](https://github.com/openai/math/blob/main/preprints/Pointwise-convergence-of-fourfold-ergodic-averages-for-mixing-transformations-October-4-2026/fourfold-ergodic-averages.pdf)
- Manuscript: [Triple ergodic averages with distinct integer slopes](https://github.com/openai/math/blob/main/preprints/Triple-ergodic-averages-with-distinct-integer-slopes-October-4-2026/triple-ergodic-distinct-slopes.pdf)
- Manuscript: [Pointwise convergence of triple ergodic averages for mixing transformations](https://github.com/openai/math/blob/main/preprints/Pointwise-convergence-of-triple-ergodic-averages-for-mixing-transformations-October-4-2026/pointwise-triple-ergodic-averages-mixing-transformations.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
