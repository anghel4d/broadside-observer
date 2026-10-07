---
title: "Approximate counting and entropy of perfect matchings"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 113; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Fully-Polynomial-Randomized-Approximation-Scheme-for-Perfect-Matchings-in-General-Graphs-September-23-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1970
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "A Fully Polynomial Randomized Approximation Scheme for Perfect Matchings in General Graphs"
    url: "https://github.com/openai/math/blob/main/preprints/A-Fully-Polynomial-Randomized-Approximation-Scheme-for-Perfect-Matchings-in-General-Graphs-September-23-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Entropy and Face Dimension of the Perfect-Matching Polytope"
    url: "https://github.com/openai/math/blob/main/preprints/Entropy-and-Face-Dimension-of-the-Perfect-Matching-Polytope-September-23-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Approximate counting and entropy of perfect matchings

## One-sentence takeaway

OpenAI's result family 113 (Theoretical computer science) claims: Gives a fully polynomial randomized approximation scheme for counting perfect matchings in arbitrary finite simple graphs, with exact detection of zero counts.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Also proves the perfect-matching entropy conjecture of Anari, Oveis Gharan, and Vinzant, bounding the maximum entropy of a matching law at every feasible edge-marginal vector in a loopless labelled multigraph, including boundary points.
- *A Fully Polynomial Randomized Approximation Scheme for Perfect Matchings in General Graphs*: We give a fully polynomial randomized approximation scheme (FPRAS) for counting perfect matchings in arbitrary finite simple undirected graphs, resolving the general-graph perfect-matching approximation problem. The algorithm returns zero with certainty when no perfect matching exists. Otherwise, it achieves relative error ε with failure probability at most δ in worst-case bit time polynomial in the input length, $\varepsilon ^{-1}$, and $\log\delta^{-1}$.
- *Entropy and Face Dimension of the Perfect-Matching Polytope*: We prove the perfect-matching entropy conjecture of Anari, Oveis Gharan, and Vinzant. For every feasible vector x of perfect-matching edge marginals in a loopless labelled multigraph on $2m\ge2$ vertices, the maximum entropy $H(x)$ of a matching law with marginals x satisfies

$\displaystyle F(x)-(2-2/m)B(x)\le H(x)\le F(x),$

where $F(x)=-\sum_e x_e\log x_e$ and $B(x)=-\sum_e(1-x_e)\log(1-x_e)$. This bound holds throughout the polytope, including its boundary.
- Lean scope (lean/docs/113.md): The formalization gives a fully polynomial randomized approximation scheme for counting perfect matchings in every finite simple undirected graph. For rational $0<\varepsilon<1$ and $0<\delta<1/2$, it returns a nonnegative rational estimate with relative error at most $\varepsilon$ with probability at least $1-\delta$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 6 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's sharp global face-dimension bound is not part of that selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Fully Polynomial Randomized Approximation Scheme for Perfect Matchings in General Graphs](https://github.com/openai/math/blob/main/preprints/A-Fully-Polynomial-Randomized-Approximation-Scheme-for-Perfect-Matchings-in-General-Graphs-September-23-2026/main.pdf)
- Manuscript: [Entropy and Face Dimension of the Perfect-Matching Polytope](https://github.com/openai/math/blob/main/preprints/Entropy-and-Face-Dimension-of-the-Perfect-Matching-Polytope-September-23-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/113.md
- Comparator statement (Randomized approximation of the perfect-matching count): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatchingFPRAS.lean
- Comparator statement (Perfect-matching entropy bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatchingEntropy.lean
- Comparator statement (Deterministic approximate matching count): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BinaryMatching.lean
- Comparator statement (Approximate counting with singleton loops): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SingletonLoopMatching.lean
- Comparator statement (Refined pointwise perfect-matching entropy bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatchingEntropyBounds.lean
- Comparator statement (Face correspondence under triangle expansion): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TriangleFace.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
