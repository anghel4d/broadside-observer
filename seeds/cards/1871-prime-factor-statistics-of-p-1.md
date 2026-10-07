---
title: "Prime-factor statistics of $p-1$"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 011; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Weighted-Dilation-Graphs-Smooth-Shifted-Primes-and-Totient-Fibers-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "unformalized"
seed_rank: 1871
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Weighted dilation graphs, smooth shifted primes and totient fibers"
    url: "https://github.com/openai/math/blob/main/preprints/Weighted-Dilation-Graphs-Smooth-Shifted-Primes-and-Totient-Fibers-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Poisson-Dirichlet law for prime predecessors"
    url: "https://github.com/openai/math/blob/main/preprints/The-Poisson-Dirichlet-Law-for-Prime-Predecessors-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Prime Predecessors with an Even Number of Prime Factors"
    url: "https://github.com/openai/math/blob/main/preprints/Prime-Predecessors-with-an-Even-Number-of-Prime-Factors-September-17-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Prime-factor statistics of $p-1$

## One-sentence takeaway

OpenAI's result family 011 (Number theory) claims: Proves that the normalized ordered logarithms of the prime factors of $p-1$, counted with multiplicity, converge jointly to the Poisson–Dirichlet law $\mathrm{PD}(1)$ as p ranges uniformly over primes up to x and $x\to\infty$.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): This resolves the Ford–Konyagin–Luca conjecture. It also proves that infinitely many integers n have more than $n^{1-\varepsilon}$ totient preimages, for every ε > 0.
- *Weighted dilation graphs, smooth shifted primes and totient fibers*: We prove Erdős's conjecture on the largest fibers of Euler's totient function: for every ε > 0, infinitely many positive integers n have more than $n^{1-\varepsilon }$ preimages. We also show that, for every fixed δ > 0, there are at least $x^{1-o(1)}$ primes p in $2x\lt p\le5x$ whose predecessors have no prime factor exceeding xδ.
- *The Poisson-Dirichlet law for prime predecessors*: For a prime p chosen uniformly from $3\le p\le x$, list the prime factors of $p-1$ in decreasing order, with multiplicity. As $x\to\infty$, their logarithms, divided by $\log(p-1)$, converge in every finite joint distribution to the Poisson–Dirichlet distribution with parameter one. This proves the conjecture of Ford, Konyagin and Luca.
- *Prime Predecessors with an Even Number of Prime Factors*: We prove that there are infinitely many primes p for which $p-1$ is squarefree and has an even number of prime factors. Equivalently, there are infinitely many primes p with $\mu(p-1)=1$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Weighted dilation graphs, smooth shifted primes and totient fibers](https://github.com/openai/math/blob/main/preprints/Weighted-Dilation-Graphs-Smooth-Shifted-Primes-and-Totient-Fibers-September-24-2026/paper.pdf)
- Manuscript: [The Poisson-Dirichlet law for prime predecessors](https://github.com/openai/math/blob/main/preprints/The-Poisson-Dirichlet-Law-for-Prime-Predecessors-September-24-2026/paper.pdf)
- Manuscript: [Prime Predecessors with an Even Number of Prime Factors](https://github.com/openai/math/blob/main/preprints/Prime-Predecessors-with-an-Even-Number-of-Prime-Factors-September-17-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
