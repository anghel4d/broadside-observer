---
title: "Sharp singularity rates for symmetric random sign matrices"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 239; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-sharp-exponential-rate-of-singularity-for-symmetric-Bernoulli-matrices-October-3-2026/symmetric-bernoulli-singularity.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "unformalized"
seed_rank: 2094
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "The sharp exponential rate of singularity for symmetric Bernoulli matrices"
    url: "https://github.com/openai/math/blob/main/preprints/The-sharp-exponential-rate-of-singularity-for-symmetric-Bernoulli-matrices-October-3-2026/symmetric-bernoulli-singularity.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The sharp singularity rate for biased symmetric sign matrices"
    url: "https://github.com/openai/math/blob/main/preprints/The-sharp-singularity-rate-for-biased-symmetric-sign-matrices-October-4-2026/biased-symmetric-sign-singularity.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Sharp singularity rates for symmetric random sign matrices

## One-sentence takeaway

OpenAI's result family 239 (Probability and statistical mechanics) claims: Determines the sharp exponential singularity rate of symmetric random sign matrices with independent entries on and above the diagonal.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Uniform signs give $\Pr(\det A_n=0)=(1/2+o(1))^n$; for fixed bias $p\in(0,1)\setminus\{1/2\}$, the rate is $(p^2+(1-p)^2+o(1))^n$. In the biased case, agreeing rows attain this rate.
- *The sharp exponential rate of singularity for symmetric Bernoulli matrices*: Let An be a symmetric $n\times n$ matrix whose entries on and above the diagonal are independent uniform signs. We prove

$\displaystyle \Pr(\det A_n=0)=\left(\frac12+o(1)\right)^n.$
- *The sharp singularity rate for biased symmetric sign matrices*: Let An be a symmetric random matrix whose entries on and above the diagonal are independent signs, equal to 1 with fixed probability $p\in(0,1)\setminus\{1/2\}$. We prove that $\mathbb P(\det A_n=0)=(p^2+(1-p)^2+o(1))^n$. The rate is attained by the event that two rows agree.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The sharp exponential rate of singularity for symmetric Bernoulli matrices](https://github.com/openai/math/blob/main/preprints/The-sharp-exponential-rate-of-singularity-for-symmetric-Bernoulli-matrices-October-3-2026/symmetric-bernoulli-singularity.pdf)
- Manuscript: [The sharp singularity rate for biased symmetric sign matrices](https://github.com/openai/math/blob/main/preprints/The-sharp-singularity-rate-for-biased-symmetric-sign-matrices-October-4-2026/biased-symmetric-sign-singularity.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
