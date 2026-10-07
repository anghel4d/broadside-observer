---
title: "Patterson's first moment for cubic Gauss sums"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 023; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-unconditional-first-moment-for-cubic-Gauss-sums-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1883
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An unconditional first moment for cubic Gauss sums"
    url: "https://github.com/openai/math/blob/main/preprints/An-unconditional-first-moment-for-cubic-Gauss-sums-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Patterson's first moment for cubic Gauss sums

## One-sentence takeaway

OpenAI's result family 023 (Number theory) claims: Proves unconditionally the all-primary-prime form of Patterson’s first-moment asymptotic: normalized cubic Gauss sums over primary Eisenstein primes of norm at most X, including both conjugates, have an explicit positive main term of order $X^{5/6}/\log X$.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Every fixed nonzero prime-angle Fourier mode has smaller order.
- *An unconditional first moment for cubic Gauss sums*: We prove Patterson's first-moment conjecture for normalized cubic Gauss sums over all primary Eisenstein primes, unconditionally. The sharp-cutoff main term is $(6/5)c_*X^{5/6}/\log X$, where $c_*=(2\pi)^{2/3}/(3\Gamma(2/3))$. For every fixed nonzero angular Fourier mode of the prime argument, we also prove cancellation at the first-moment scale.
- Lean scope (lean/docs/023.md): Patterson's first-moment conjecture concerns the average of normalized cubic Gauss sums over primary Eisenstein primes. The formalization proves the sharp-cutoff asymptotic with main term $\frac65c_*X^{5/6}/\log X$, where $c_*=(2\pi)^{2/3}/(3\Gamma(2/3))$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An unconditional first moment for cubic Gauss sums](https://github.com/openai/math/blob/main/preprints/An-unconditional-first-moment-for-cubic-Gauss-sums-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/023.md
- Comparator statement (Patterson first moment and angular cancellation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PattersonFirstMoment.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
