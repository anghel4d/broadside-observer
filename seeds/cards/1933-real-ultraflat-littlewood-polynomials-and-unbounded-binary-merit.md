---
title: "Real ultraflat Littlewood polynomials and unbounded binary merit factors"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 076; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Ultraflat-real-Littlewood-polynomials-October-5-2026/ultraflat-real-littlewood-polynomials.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "lean4"
  - "formalized"
seed_rank: 1933
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Ultraflat real Littlewood polynomials"
    url: "https://github.com/openai/math/blob/main/preprints/Ultraflat-real-Littlewood-polynomials-October-5-2026/ultraflat-real-littlewood-polynomials.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Nearly minimal maxima and positive minima of Littlewood polynomials"
    url: "https://github.com/openai/math/blob/main/preprints/Nearly-minimal-maxima-and-positive-minima-of-Littlewood-polynomials-October-5-2026/littlewood-lower-envelope.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Asymptotically minimal maxima of real Littlewood polynomials"
    url: "https://github.com/openai/math/blob/main/preprints/Asymptotically-minimal-maxima-of-real-Littlewood-polynomials-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Real ultraflat Littlewood polynomials and unbounded binary merit factors

## One-sentence takeaway

OpenAI's result family 076 (Real and complex analysis) claims: Constructs polynomials with N consecutive coefficients in $\{-1,1\}$ whose modulus is $(1+o(1))\sqrt N$ uniformly on the entire unit circle, for every sufficiently large integer length N.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Thus real Littlewood polynomials are ultraflat, including at the real endpoints. Their binary merit factors tend to infinity, disproving Turyn's bounded-merit-factor conjecture.
- *Ultraflat real Littlewood polynomials*: For every $\varepsilon\in(0,1)$ and every sufficiently large integer N, there is a polynomial of length N with coefficients in $\{-1,1\}$ whose modulus lies between $(1-\varepsilon)\sqrt N$ and $(1+\varepsilon)\sqrt N$ everywhere on the unit circle. Thus real Littlewood polynomials can be ultraflat through every sufficiently large integer length. The signs may be chosen separately at each length.
- *Nearly minimal maxima and positive minima of Littlewood polynomials*: For every η > 0 and every sufficiently large integer N, there is a polynomial with N consecutive coefficients in $\{-1,1\}$ whose modulus lies between $\sqrt N/16$ and $(1+\eta)\sqrt N$ everywhere on the unit circle.
- *Asymptotically minimal maxima of real Littlewood polynomials*: We prove that the minimum possible maximum modulus on the unit circle of a polynomial with N consecutive real coefficients in $\{-1,1\}$ is $(1+o(1))\sqrt N$, as N tends to infinity through all integers. This disproves the real-sign analogue of Erdős's fixed relative-gap conjecture. As a consequence, the largest binary merit factor at length N tends to infinity through all integer lengths, disproving Turyn's conjecture.
- Lean scope (lean/docs/076.md): The formalization gives real Littlewood polynomials of every sufficiently large length whose maximum modulus on the unit circle is at most $(1+\eta)\sqrt N$ for any fixed $\eta>0$. Thus the smallest possible maximum is asymptotically minimal through all integer lengths.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Ultraflat real Littlewood polynomials](https://github.com/openai/math/blob/main/preprints/Ultraflat-real-Littlewood-polynomials-October-5-2026/ultraflat-real-littlewood-polynomials.pdf)
- Manuscript: [Nearly minimal maxima and positive minima of Littlewood polynomials](https://github.com/openai/math/blob/main/preprints/Nearly-minimal-maxima-and-positive-minima-of-Littlewood-polynomials-October-5-2026/littlewood-lower-envelope.pdf)
- Manuscript: [Asymptotically minimal maxima of real Littlewood polynomials](https://github.com/openai/math/blob/main/preprints/Asymptotically-minimal-maxima-of-real-Littlewood-polynomials-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/076.md
- Comparator statement (Asymptotically minimal Littlewood maximum): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/AsymptoticallyMinimalLittlewood.lean
- Comparator statement (Finite-exponent flatness of one all-length Littlewood family): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LittlewoodFiniteFlatness.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
