---
title: "Approximation and quadratic strong-operator paving"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 300; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Approximation-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026/Approximation-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "unformalized"
seed_rank: 2155
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Approximation Paving over Arbitrary Maximal Abelian Subalgebras"
    url: "https://github.com/openai/math/blob/main/preprints/Approximation-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026/Approximation-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Quadratic Strong-Operator Paving over Arbitrary Maximal Abelian Subalgebras"
    url: "https://github.com/openai/math/blob/main/preprints/Quadratic-Strong-Operator-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026/Quadratic-Strong-Operator-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Approximation and quadratic strong-operator paving

## One-sentence takeaway

OpenAI's result family 300 (Operator algebras) claims: Proves that every self-adjoint element of a complex von Neumann algebra admits strong-operator paving relative to any maximal abelian subalgebra with $O(\varepsilon^{-2})$ blocks.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): The norm bound holds after compression by a projection arbitrarily close to the identity in the strong topology, resolving the Popa–Vaes quadratic paving conjecture.
- *Approximation Paving over Arbitrary Maximal Abelian Subalgebras*: We prove the approximation-paving conjecture of Popa and Vaes for every maximal abelian subalgebra of a complex von Neumann algebra. For each $0\lt \varepsilon\lt 1$, every self-adjoint operator is a strong limit of self-adjoint operators of norm at most three times its norm, each admitting a norm paving with error at most ε times the approximant's own norm. The number of projections is at most $C\varepsilon^{-6}$ for a universal constant C.
- *Quadratic Strong-Operator Paving over Arbitrary Maximal Abelian Subalgebras*: We prove the quadratic strong-operator paving conjecture of Popa and Vaes. For every $0\lt \varepsilon \lt 1$, every self-adjoint element of a von Neumann algebra admits strong-operator paving over each maximal abelian subalgebra with at most $5\times10^8\varepsilon ^{-2}$ projections. The bound is uniform over representations and requires no separability or conditional-expectation assumption.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Approximation Paving over Arbitrary Maximal Abelian Subalgebras](https://github.com/openai/math/blob/main/preprints/Approximation-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026/Approximation-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026.pdf)
- Manuscript: [Quadratic Strong-Operator Paving over Arbitrary Maximal Abelian Subalgebras](https://github.com/openai/math/blob/main/preprints/Quadratic-Strong-Operator-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026/Quadratic-Strong-Operator-Paving-over-Arbitrary-Maximal-Abelian-Subalgebras-September-25-2026.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
