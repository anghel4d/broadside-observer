---
title: "Strongly polynomial linear programming"
authors:
  - "OpenAI"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 380, 24 Nov 2026 edition; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Strongly-polynomial-linear-programming-November-24-2026/paper.pdf"
version_reviewed: "web 2026-11-24 edition (58 pp.)"
topics:
  - "linear-programming"
  - "smale-problems"
  - "strongly-polynomial"
  - "mean-payoff-games"
  - "lean4"
  - "ai-assisted-math"
seed_rank: 2729
seed_batch: "curiosity-2026-11-27"
reviewed: "2026-11-27"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Strongly polynomial linear programming (paper)"
    url: "https://github.com/openai/math/blob/main/preprints/Strongly-polynomial-linear-programming-November-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Superpolynomial graph diameter of simple polytopes (OpenAI companion paper)"
    url: "https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
see:
  - "2730-superpolynomial-graph-diameter-of-simple-polytopes"
---

# Strongly polynomial linear programming

## One-sentence takeaway

An OpenAI manuscript claims a deterministic strongly polynomial algorithm for linear programming with arbitrary real coefficients, which would settle Smale's ninth problem. The number of arithmetic steps depends only on the numbers of variables and constraints, and the same method claims strongly polynomial convex QP and fast algorithms for turn-based mean-payoff games.

## Why it's lovely

Linear programming has been polynomial in *bits* since Khachiyan's ellipsoid method, but two LPs with the same shape can have wildly different input lengths. Megiddo asked whether the shape alone could bound the work, and Smale put the question on his list of problems for the 21st century. The idea is elegant: deciding feasibility means finding which of two orthogonal subspaces holds a nonnegative witness. The algorithm uses *changes of unit* (rescaling coordinates) as queries that reveal reliable signs where the rescaled entries are largest. It then compresses the logarithms of subdeterminant magnitudes into short substitutes, so each query is an ordinary bit-polynomial LP whose size depends only on the dimensions. There is also a direct GRID COMMAND bridge. The same sign queries give a fixed-point method for contractions, and from that come exact values and optimal strategies for finite turn-based mean-payoff games. That time bound is strongly polynomial for deterministic games, and for stochastic games with rational data it is polynomial in the bit length, which includes simple stochastic reachability games. These are the textbook models of turn-based strategy evaluation.

## Key ideas

- **Theorem 1.** For real A, b, c, a deterministic strongly polynomial algorithm returns a strictly complementary optimal primal–dual pair, a feasible point with an improving ray, or an infeasibility certificate y ≥ 0 with |supp y| ≤ 1 + rank A. On rational input every intermediate number has bit length polynomial in the input length, and the result extends to every ordered field.
- **Sign queries.** Rescaling a coordinate changes which entries are visible at fixed precision. A search combines the signs from several queries without knowing in advance which ones it can trust, then zeroes coordinates one at a time until linear algebra recovers the witness exactly.
- **Compression.** For a minimal-support witness, the entry ratios are ratios of subdeterminants. Short substitutes for their logarithms preserve exactly the comparisons that matter, in the spirit of Frank–Tardos compression.
- **Consequences.** Monotone LCP and convex quadratic programming are also strongly polynomial. Contractions on [−1,1]ⁿ with Lipschitz constant ≤ 1 − 2⁻ᵇ get a deterministic fixed-point locator, and turn-based mean-payoff games (deterministic or stochastic) get the time bounds above.
- **Lean.** For rational data, Lean proves strongly polynomial feasibility and optimization on fixed rational RAM programs, with polynomial instruction count and bit lengths (per the release README).

## Caveats

This is an AI-generated manuscript in OpenAI's release repository, with no peer review and no arXiv posting. I read the abstract, the introduction, the overview of earlier approaches, and the README's description of the Lean scope (58 pp.). I did not check the search, the compression argument, or the game corollaries. The Lean result covers rational RAM programs, not the full real-number model claimed in the theorem. This came as a Frontier 2026-11-26 hand-off (OpenAI family 380). Community verification matters more than usual for a claim this large.

## Links

- Paper (PDF): https://github.com/openai/math/blob/main/preprints/Strongly-polynomial-linear-programming-November-24-2026/paper.pdf
- Release README: https://github.com/openai/math/tree/main/preprints/Strongly-polynomial-linear-programming-November-24-2026
- Companion (polytope diameter): https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf
