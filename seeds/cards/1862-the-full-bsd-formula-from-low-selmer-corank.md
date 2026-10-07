---
title: "The full BSD formula from low Selmer corank"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 002; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Exact-Birch-Swinnerton-Dyer-Formula-from-Low-Selmer-Corank-October-3-2026/exact-bsd-low-selmer-corank.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "unformalized"
seed_rank: 1862
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Exact Birch–Swinnerton-Dyer Formula from Low Selmer Corank"
    url: "https://github.com/openai/math/blob/main/preprints/Exact-Birch-Swinnerton-Dyer-Formula-from-Low-Selmer-Corank-October-3-2026/exact-bsd-low-selmer-corank.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Selmer converse for elliptic curves at every prime"
    url: "https://github.com/openai/math/blob/main/preprints/The-Selmer-converse-for-elliptic-curves-at-every-prime-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The two-primary Birch–Swinnerton-Dyer formula in Selmer corank at most one"
    url: "https://github.com/openai/math/blob/main/preprints/The-two-primary-Birch-Swinnerton-Dyer-formula-in-Selmer-corank-at-most-one-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
see:
  - "1866-goldfelds-conjecture-densities-and-mean-analytic-rank"
---

# The full BSD formula from low Selmer corank

## One-sentence takeaway

OpenAI's result family 002 (Number theory) claims: Proves the full Birch–Swinnerton-Dyer leading-term formula for every elliptic curve over ℚ whose full q-power Selmer group has corank zero or one for some prime q, including finiteness of the Tate–Shafarevich group.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): With result 006, this gives full BSD for a density-one set of quadratic twists of every elliptic curve over ℚ.
- *Exact Birch–Swinnerton-Dyer Formula from Low Selmer Corank*: We prove the full Birch–Swinnerton-Dyer leading-term formula for every elliptic curve over ℚ whose full q-power Selmer group has corank zero or one at some prime q. The analytic and Mordell–Weil ranks equal that corank, and the Tate–Shafarevich group is finite. The formula includes all prime factors and requires no additional hypotheses on reduction, rational torsion, isogenies, complex multiplication, or residual Galois representations.
- *The Selmer converse for elliptic curves at every prime*: We prove the Selmer converse in coranks zero and one for every elliptic curve over ℚ and every prime p: if the full p-power Selmer group has ℤp-corank $r\in\{0,1\}$, then the analytic and Mordell–Weil ranks both equal r, and the entire Tate–Shafarevich group is finite. As an application at the additive prime 3, we prove that for every prime $\ell\equiv4,7,8\pmod9$, the cubic $X^3+Y^3=\ell Z^3$ has analytic and Mordell–Weil rank one and finite Tate–Shafarevich group. In particular, every such ℓ is a sum of two rational cubes.
- *The two-primary Birch–Swinnerton-Dyer formula in Selmer corank at most one*: We prove the two-primary Birch and Swinnerton-Dyer leading-term formula for every elliptic curve over the rationals whose two-power Selmer group has corank at most one. In this range, the algebraic rank, analytic rank, and Selmer corank are equal, and the Tate–Shafarevich group is finite. Combined with the quadratic-twist Selmer distribution, this gives the exact two-primary formula for a density-one set of signed squarefree twists of each fixed curve, ordered by absolute value; the common rank is zero or one, with each value having density one half.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Exact Birch–Swinnerton-Dyer Formula from Low Selmer Corank](https://github.com/openai/math/blob/main/preprints/Exact-Birch-Swinnerton-Dyer-Formula-from-Low-Selmer-Corank-October-3-2026/exact-bsd-low-selmer-corank.pdf)
- Manuscript: [The Selmer converse for elliptic curves at every prime](https://github.com/openai/math/blob/main/preprints/The-Selmer-converse-for-elliptic-curves-at-every-prime-September-24-2026/main.pdf)
- Manuscript: [The two-primary Birch–Swinnerton-Dyer formula in Selmer corank at most one](https://github.com/openai/math/blob/main/preprints/The-two-primary-Birch-Swinnerton-Dyer-formula-in-Selmer-corank-at-most-one-September-24-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
