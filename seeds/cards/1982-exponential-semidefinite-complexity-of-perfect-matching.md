---
title: "Exponential semidefinite complexity of perfect matching"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 126; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Exponential-PSD-rank-of-positively-shifted-matching-matrices-October-5-2026/shifted-matching-psd.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1982
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Exponential PSD rank of positively shifted matching matrices"
    url: "https://github.com/openai/math/blob/main/preprints/Exponential-PSD-rank-of-positively-shifted-matching-matrices-October-5-2026/shifted-matching-psd.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Exponential semidefinite complexity of perfect matching

## One-sentence takeaway

OpenAI's result family 126 (Theoretical computer science) claims: Proves that every exact semidefinite lift of the perfect matching polytope has exponential size, answering Rothvoss's polynomial-size lift question negatively.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The bound holds even for the positive semidefinite rank of its odd-cut slack matrix after any fixed shift $0\lt \rho\lt 1$, allowing arbitrary real positive semidefinite factors.
- *Exponential PSD rank of positively shifted matching matrices*: For every fixed $0\lt \rho\lt 1$, the matrix indexed by odd vertex sets U and perfect matchings M of Kn, with entries $|M\cap\delta(U)|-1+\rho$, has real positive semidefinite rank $2^{\Omega(n)}$ as even n tends to infinity. Here $\delta(U)$ is the edge cut of U. Consequently, every exact semidefinite lift of the perfect matching polytope has exponential size.
- Lean scope (lean/docs/126.md): The paper proves exponential PSD-rank lower bounds for positively shifted matching matrices. The linked formalization records the related superpolynomial lower bounds: for every fixed $C>0$, the PSD rank of the selected perfect-matching slack matrix exceeds $n^C$ for all sufficiently large even $n$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: These selected statements give superpolynomial growth.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Exponential PSD rank of positively shifted matching matrices](https://github.com/openai/math/blob/main/preprints/Exponential-PSD-rank-of-positively-shifted-matching-matrices-October-5-2026/shifted-matching-psd.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/126.md
- Comparator statement (Superpolynomial lower bound for affine semidefinite lifts): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatchingAffineLift.lean
- Comparator statement (Superpolynomial PSD rank for the perfect-matching slack matrix): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatchingPSD.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
