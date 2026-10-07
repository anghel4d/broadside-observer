---
title: "Memory–sample lower bounds for noiseless Gaussian regression"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 140; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Memory-and-precision-in-noiseless-Gaussian-regression-September-27-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1996
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Memory and precision in noiseless Gaussian regression"
    url: "https://github.com/openai/math/blob/main/preprints/Memory-and-precision-in-noiseless-Gaussian-regression-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Posterior replicas and conditional information in Gaussian regression"
    url: "https://github.com/openai/math/blob/main/preprints/Posterior-replicas-and-conditional-information-in-Gaussian-regression-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Localization costs and information growth for exact Gaussian observations"
    url: "https://github.com/openai/math/blob/main/preprints/Localization-costs-and-information-growth-for-exact-Gaussian-observations-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Projection moments, positive cap domination, and Riesz estimates on the sphere"
    url: "https://github.com/openai/math/blob/main/preprints/Projection-moments-positive-cap-domination-and-Riesz-estimates-on-the-sphere-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Replacing Gaussian observations in memory-constrained inference"
    url: "https://github.com/openai/math/blob/main/preprints/Replacing-Gaussian-observations-in-memory-constrained-inference-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Subsphere methods for memory-sample lower bounds in noiseless Gaussian regression"
    url: "https://github.com/openai/math/blob/main/preprints/Subsphere-methods-for-memory-sample-lower-bounds-in-noiseless-Gaussian-regression-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Memory–sample lower bounds for noiseless Gaussian regression

## One-sentence takeaway

OpenAI's result family 140 (Theoretical computer science) claims: For fixed A > 0, a one-pass learner with $Ad^2$ persistent bits needs $\Omega_A(d\log(1/\epsilon))$ noiseless Gaussian samples to recover a unit vector to angular error $0\lt \epsilon\le1/10$ with probability 2/3, uniformly in accuracy for large d.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Computation and randomized updates are unrestricted, but output uses only the terminal state, stopping index and fresh randomness.
- *Memory and precision in noiseless Gaussian regression*: For every fixed A > 0, a learner that retains at most $Ad^2$ bits between fresh exact Gaussian linear measurements needs $\Omega_A(d\log(1/\epsilon))$ measurements to estimate a uniformly random unit vector to angular error at most ϵ, for any $0\lt \epsilon\le 1/10$, with probability at least 2/3. The constant is absolute for $o(d^2)$ memory.
- *Posterior replicas and conditional information in Gaussian regression*: For a signal with density bounded by L relative to uniform probability on $S^{d-1}$, we bound the information in a finite message W formed from exact Gaussian measurements, conditional on an independent projection revealed only to the analyst. For explicit row counts proportional to d, the bound is $O(H(W)/d+d+\log(2+\log L))$. Consequently, a finite-state learner with $o(d^2)$ persistent bits and a deterministic sample horizon needs $\Omega(d\log(1/\epsilon))$ fresh noiseless Gaussian measurements for constant-probability angular accuracy $0\lt \epsilon\le1/10$ under the uniform spherical prior.
- *Localization costs and information growth for exact Gaussian observations*: For the image of a uniform cube under a spherical coordinate map, we prove that finite messages from t blocks of $\Theta(d)$ exact Gaussian measurements reveal only $O_A(dt)$ information when each message has at most $\exp(Ad^2)$ values, for fixed A. The same bound holds when each message is supplemented with a nested cell that restores the required geometric spread.
- *Projection moments, positive cap domination, and Riesz estimates on the sphere*: We prove moment estimates for exact random projections of finite measures whose mass is controlled on Euclidean balls, and derive positive domination by countable sums of spherical cap measures. For learners with $M=o(d^2)$ bits of memory, these estimates give three proofs that uniform-sphere average success at least 2/3 at angular accuracy $0\lt \epsilon\le1/10$ requires $\Omega(d\log(1/\epsilon))$ noiseless Gaussian observations. The three proofs keep their different stopping and accuracy costs explicit.
- *Replacing Gaussian observations in memory-constrained inference*: Replacing the Gaussian rows used to select a finite message by independent rows increases the remaining conditional information by at most $Cd$, for a uniform spherical signal, message entropy at most d2, and the specified row dimensions proportional to d. As an application, we prove that learners with $M=o(d^2)$ persistent bits need $T=\Omega(d\log(1/\epsilon))$ exact observations to attain uniform-sphere angular success at least 3/5, for $0\lt \epsilon\le1/10$ and a deterministic finite horizon.
- Plus 1 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/140.md): In noiseless Gaussian regression, a learner observes inner products of an unknown unit vector in $\mathbb R^d$ with independent standard Gaussian vectors. The formalization proves that, for every fixed $A>0$, there is $c_A>0$ such that, in sufficiently large dimension, a learner retaining at most $Ad^2$ bits between observations needs at least $c_A d\log(1/\varepsilon)$ observations to attain angular error at most $\varepsilon$ with probability at least $2/3$ for a uniformly random unit signal, for $0<\varepsilon\le1/10$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 8 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: For memory $o(d^2)$, the constant can be universal, and the selected statement also permits success at least $2/3$ separately for every signal. The formalized streaming result uses the $2/3$ threshold; the stronger $3/5$ variant is outside this scope. The randomized learner model allows independent shared seeds; its reduction to a finite-state model is proved for dimensions at least three, with the auxiliary dimension-two case outside this scope.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Memory and precision in noiseless Gaussian regression](https://github.com/openai/math/blob/main/preprints/Memory-and-precision-in-noiseless-Gaussian-regression-September-27-2026/paper.pdf)
- Manuscript: [Posterior replicas and conditional information in Gaussian regression](https://github.com/openai/math/blob/main/preprints/Posterior-replicas-and-conditional-information-in-Gaussian-regression-September-27-2026/paper.pdf)
- Manuscript: [Localization costs and information growth for exact Gaussian observations](https://github.com/openai/math/blob/main/preprints/Localization-costs-and-information-growth-for-exact-Gaussian-observations-September-27-2026/paper.pdf)
- Manuscript: [Projection moments, positive cap domination, and Riesz estimates on the sphere](https://github.com/openai/math/blob/main/preprints/Projection-moments-positive-cap-domination-and-Riesz-estimates-on-the-sphere-September-27-2026/paper.pdf)
- Manuscript: [Replacing Gaussian observations in memory-constrained inference](https://github.com/openai/math/blob/main/preprints/Replacing-Gaussian-observations-in-memory-constrained-inference-September-27-2026/paper.pdf)
- Manuscript: [Subsphere methods for memory-sample lower bounds in noiseless Gaussian regression](https://github.com/openai/math/blob/main/preprints/Subsphere-methods-for-memory-sample-lower-bounds-in-noiseless-Gaussian-regression-September-27-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/140.md
- Comparator statement (Projection estimates and memory–precision bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MemoryPrecision.lean
- Comparator statement (Subquadratic and fixed-quadratic memory–precision lower bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/NoiselessRegression.lean
- Comparator statement (Posterior-replica comparisons and sample lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PosteriorReplicas.lean
- Comparator statement (Finite-entropy localization and regularization bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GaussianFiniteEntropy.lean
- Comparator statement (Information growth under repeated exact Gaussian observations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GaussianInformation.lean
- Comparator statement (Projection, cap, and Riesz estimates with regression bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ProjectionMoments.lean
- Comparator statement (Gaussian replacement and information bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GaussianReplacement.lean
- Comparator statement (Subsphere estimates and memory–sample lower bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SubsphereCurrent.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
