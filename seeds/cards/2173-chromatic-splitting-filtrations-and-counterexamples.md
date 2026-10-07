---
title: "Chromatic splitting: filtrations and counterexamples"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 318; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Filtered-chromatic-splitting-at-generic-primes-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "topology"
  - "unformalized"
seed_rank: 2173
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Filtered chromatic splitting at generic primes"
    url: "https://github.com/openai/math/blob/main/preprints/Filtered-chromatic-splitting-at-generic-primes-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The height-three chromatic overlap: an explicit filtration and its attachments"
    url: "https://github.com/openai/math/blob/main/preprints/The-height-three-chromatic-overlap-an-explicit-filtration-and-its-attachments-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A rational obstruction to strong chromatic splitting at height three"
    url: "https://github.com/openai/math/blob/main/preprints/A-rational-obstruction-to-strong-chromatic-splitting-at-height-three-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Failure of finite assembly for a chromatic overlap at the prime three"
    url: "https://github.com/openai/math/blob/main/preprints/Failure-of-finite-assembly-for-a-chromatic-overlap-at-the-prime-three-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Counterexamples to weak chromatic splitting: sphere kernels and descent exponents"
    url: "https://github.com/openai/math/blob/main/preprints/Counterexamples-to-weak-chromatic-splitting-sphere-kernels-and-descent-exponents-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Chromatic splitting: filtrations and counterexamples

## One-sentence takeaway

OpenAI's result family 318 (Topology) claims: Disproves strong chromatic splitting at height three for primes p ≥ 5, and weak splitting for the derived p-completed sphere at heights p (p ≥ 5) and $p+1$ (p ≥ 7).

## Why it matters here

Topology results are background for knot, surface and configuration-space reasoning in geometry code. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Nevertheless, for n ≥ 1 and $p\gt n+1$, the overlap $L_{n-1}L_{K(n)}S_p^\wedge$ admits a $2^n$-stage filtration by the predicted localized-sphere pieces. At height three and prime three, even finite assembly from such pieces fails in the category of $E(2)$-local modules over the derived completed sphere.
- *Filtered chromatic splitting at generic primes*: For every n ≥ 1 and prime $p\gt n+1$, we construct a $2^n$-stage ordered filtration of $L_{n-1}L_{K(n)}S_p^\wedge$ with the classical chromatic-splitting cofibers. The map from the first stage to the target is the canonical localization unit.
- *The height-three chromatic overlap: an explicit filtration and its attachments*: For every prime p ≥ 5, we construct an explicit eight-stage filtration of $L_2L_{K(3)}\mathbb S_p^\wedge$ by the local-sphere layers in the height-three chromatic-splitting pattern. The map from its first stage to the overlap is the canonical unit, and two signed fracture formulas identify all attachments for the chosen local maps and compatibility homotopy. A companion canonical-map theorem further implies that the first height-one attachment is nonzero.
- *A rational obstruction to strong chromatic splitting at height three*: For every prime p ≥ 5, the canonical map $L_0L_{K(3)}S\to L_0L_{K(2)}L_{K(3)}S$ for the sphere spectrum S is nonzero on π−3. Consequently, the height-three strong chromatic splitting formula is false in this range, even as an equivalence of underlying $E(2)$-local spectra without specified summand maps.
- *Failure of finite assembly for a chromatic overlap at the prime three*: At the prime three and height three, the chromatic overlap cannot be constructed from the rational, height-one, and height-two local spheres by finitely many sums, shifts, cofibers, and retracts in the category of $E(2)$-local modules over the derived 3-complete sphere. This gives a negative answer to the ordinary finite-assembly question for chromatic overlaps.
- *Counterexamples to weak chromatic splitting: sphere kernels and descent exponents*: For the derived p-completion of the sphere, the canonical weak chromatic splitting map has no homotopy retraction at height p for every prime p ≥ 5, and at height $p+1$ for every prime p ≥ 7. The classical sphere product $\beta_1^{(p-1)^2}$ gives a nonzero kernel class in both ranges.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Filtered chromatic splitting at generic primes](https://github.com/openai/math/blob/main/preprints/Filtered-chromatic-splitting-at-generic-primes-September-25-2026/paper.pdf)
- Manuscript: [The height-three chromatic overlap: an explicit filtration and its attachments](https://github.com/openai/math/blob/main/preprints/The-height-three-chromatic-overlap-an-explicit-filtration-and-its-attachments-September-27-2026/paper.pdf)
- Manuscript: [A rational obstruction to strong chromatic splitting at height three](https://github.com/openai/math/blob/main/preprints/A-rational-obstruction-to-strong-chromatic-splitting-at-height-three-September-25-2026/paper.pdf)
- Manuscript: [Failure of finite assembly for a chromatic overlap at the prime three](https://github.com/openai/math/blob/main/preprints/Failure-of-finite-assembly-for-a-chromatic-overlap-at-the-prime-three-September-25-2026/paper.pdf)
- Manuscript: [Counterexamples to weak chromatic splitting: sphere kernels and descent exponents](https://github.com/openai/math/blob/main/preprints/Counterexamples-to-weak-chromatic-splitting-sphere-kernels-and-descent-exponents-September-27-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
