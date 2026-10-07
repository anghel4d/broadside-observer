---
title: "Limiting random SAT thresholds, sharp variance and computability"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 235; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Limiting-Satisfiability-Threshold-for-Every-Fixed-Clause-Size-September-25-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2090
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A Limiting Satisfiability Threshold for Every Fixed Clause Size"
    url: "https://github.com/openai/math/blob/main/preprints/A-Limiting-Satisfiability-Threshold-for-Every-Fixed-Clause-Size-September-25-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Linear Variance of the Random 3-SAT Hitting Time"
    url: "https://github.com/openai/math/blob/main/preprints/Linear-Variance-of-the-Random-3-SAT-Hitting-Time-October-5-2026/linear-variance-of-the-random-3-sat-hitting-time.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Variance of the Random k-SAT Hitting Time"
    url: "https://github.com/openai/math/blob/main/preprints/Variance-of-the-Random-k-SAT-Hitting-Time-September-27-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Computing the Random 3-SAT Threshold"
    url: "https://github.com/openai/math/blob/main/preprints/Computing-the-Random-3-SAT-Threshold-September-27-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Limiting random SAT thresholds, sharp variance and computability

## One-sentence takeaway

OpenAI's result family 235 (Probability and statistical mechanics) claims: For random k-SAT with independent uniformly signed proper clauses sampled with replacement, proves finite positive limiting thresholds and hitting-time variance $\Theta_k(n)$ for every fixed k ≥ 3, and computability of the 3-SAT threshold.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): We credit Gaia Carenini with priority for resolving the threshold-existence conjecture in her concurrent [ECCC TR26-229](https://eccc.weizmann.ac.il/report/2026/229/), made public October 5, 2026; this family supplies another proof and the sharper variance and computability results.
- *A Limiting Satisfiability Threshold for Every Fixed Clause Size*: For every fixed integer k ≥ 3, random k-SAT with independent uniformly signed clauses on distinct variables, sampled with replacement, has a finite positive limiting satisfiability threshold. We credit Gaia Carenini [[5]](https://eccc.weizmann.ac.il/report/2026/229/) with priority for resolving the satisfiability conjecture. This paper gives an alternative proof, using concentration of a capped last satisfiable index and a comparison between different system sizes.
- *Linear Variance of the Random 3-SAT Hitting Time*: For random 3-SAT on n Boolean variables, with independent uniformly signed clauses on three distinct variables sampled with replacement, we prove that the first unsatisfiable prefix has variance $\Theta(n)$. The upper bound removes the logarithmic loss in the earlier variance estimate; the matching lower bound follows from Wilson's transition-width theorem.
- *Variance of the Random k-SAT Hitting Time*: Let Hn be the index of the first unsatisfiable prefix in random k-SAT on n variables, with independent uniformly signed clauses using k distinct variables and sampled with replacement. For every fixed k ≥ 4, we prove $\mathop{\mathrm{Var}}\nolimits (H_n)=\Theta_k(n)$. For k = 3, the variance is bounded below by a positive multiple of n and above by a constant multiple of $n\log n$; the companion paper on random 3-SAT sharpens this to $\Theta(n)$.
- *Computing the Random 3-SAT Threshold*: The limiting satisfiability threshold of uniform random 3-SAT is a computable real. We credit Gaia Carenini [[4]](https://eccc.weizmann.ac.il/report/2026/229/) with priority for resolving the satisfiability conjecture, which establishes the threshold's existence. We prove that one finite deterministic machine can approximate it to any prescribed accuracy.
- Lean scope (lean/docs/235.md): The random $k$-SAT threshold problem asks whether satisfiability changes at one limiting clause density. The formalization proves that every fixed integer $k\ge3$ has a finite positive threshold $\alpha_k$: for every fixed density $c<\alpha_k$, the satisfiability probability tends to one as the number of variables grows, while for every $c>\alpha_k$ it tends to zero.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No computable rate of finite-size convergence is assumed in the statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Limiting Satisfiability Threshold for Every Fixed Clause Size](https://github.com/openai/math/blob/main/preprints/A-Limiting-Satisfiability-Threshold-for-Every-Fixed-Clause-Size-September-25-2026/article.pdf)
- Manuscript: [Linear Variance of the Random 3-SAT Hitting Time](https://github.com/openai/math/blob/main/preprints/Linear-Variance-of-the-Random-3-SAT-Hitting-Time-October-5-2026/linear-variance-of-the-random-3-sat-hitting-time.pdf)
- Manuscript: [Variance of the Random k-SAT Hitting Time](https://github.com/openai/math/blob/main/preprints/Variance-of-the-Random-k-SAT-Hitting-Time-September-27-2026/article.pdf)
- Manuscript: [Computing the Random 3-SAT Threshold](https://github.com/openai/math/blob/main/preprints/Computing-the-Random-3-SAT-Threshold-September-27-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/235.md
- Comparator statement (Limiting satisfiability threshold for every fixed $k\ge3$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FixedClauseThreshold.lean
- Comparator statement (Sharpness of random $k$-SAT lifetime and replacement bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SATSharpness.lean
- Comparator statement (Variance bounds for the random $k$-SAT hitting time): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SATVariance.lean
- Comparator statement (Computability of the random $3$-SAT threshold): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SATComputability.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
