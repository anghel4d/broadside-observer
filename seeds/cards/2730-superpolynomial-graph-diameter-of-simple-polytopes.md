---
title: "Superpolynomial graph diameter of simple polytopes"
authors:
  - "OpenAI"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 380, 24 Nov 2026 edition; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf"
version_reviewed: "web 2026-11-24 edition (57 pp.)"
topics:
  - "hirsch-conjecture"
  - "polytopes"
  - "simplex-method"
  - "discrete-geometry"
  - "lean4"
  - "ai-assisted-math"
seed_rank: 2730
seed_batch: "curiosity-2026-11-27"
reviewed: "2026-11-27"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Superpolynomial graph diameter of simple polytopes (paper)"
    url: "https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A counterexample to the Hirsch conjecture (Santos)"
    url: "https://arxiv.org/abs/1006.2814"
    year: 2012
    arxiv: "1006.2814"
    doi: null
  - title: "Strongly polynomial linear programming (OpenAI companion paper)"
    url: "https://github.com/openai/math/blob/main/preprints/Strongly-polynomial-linear-programming-November-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
see:
  - "2729-strongly-polynomial-linear-programming"
---

# Superpolynomial graph diameter of simple polytopes

## One-sentence takeaway

An OpenAI manuscript claims to disprove the polynomial Hirsch conjecture: for every large n there is a bounded simple rational polytope with exactly n facets, dimension n^{o(1)}, and graph diameter n^{ω(1)}, so some pairs of vertices are farther apart than any fixed power of n.

## Why it's lovely

Hirsch's 1957 question (recorded by Dantzig) asks how many edges you must walk between two vertices of a polytope, which is the best case for any simplex-method pivot rule. Santos broke the linear bound n − d in 2012 with a 43-dimensional polytope with 86 facets. The polynomial version, a single polynomial bound in every dimension, stayed open. The construction is a lovely piece of geometric engineering. A coordinate x acts as "time", and lower bounds z ≥ |x − a| force a bend at each corner, because an affine segment cannot pass through a V. Expensive crossings are nested inside "episodes" with auxiliary clocks, so the distances multiply while the facet count does not, because the copies share "clock readings". Read with its companion (card 2729), the pair makes a sharp point: the simplex method's graph walk can be forced to take superpolynomially many steps, yet LP can still be solved in a strongly polynomial number of steps if the algorithm reads certificates off the inequalities instead of walking.

## Key ideas

- **Theorem 1.1.** For every positive integer-valued s(n) = n^{o(1)}, there are bounded simple rational polytopes with exactly n facets, dimension n^{o(1)}, and diameter n^{ω(1)}, even when one move may cross any face of dimension ≤ s(n). Taking s = 1 disproves polynomial Hirsch.
- **Objective-separated vertices.** A linear functional x makes every pair of vertices separated by a fraction n^{−α} of its range need a superpolynomially long walk.
- **Theorem 1.2.** For prescribed dimension d and facet excess E, two vertices need at least c·E·min{E^a, d^b} moves. Corollary 14.3 gives packing LPs where the origin and the all-ones vector are the unique optimum endpoints, yet every edge path between them is superpolynomially long.
- **Consistent with known upper bounds.** Larman's n·2^{O(d)} forces d/log n → ∞ for superpolynomial diameter, and Kalai–Kleitman-type bounds are quasipolynomial. The examples sit in that window with d below every power of n.
- **Lean.** Per the README, Lean proves the refutation for bounded simple rational polytopes, the low-dimensional-face move bound, and the separation theorem.

## Caveats

This is an AI-generated manuscript (OpenAI family 380) in a GitHub release repository, not refereed. I read the abstract, Section 1, the "why distances multiply" overview, and the README (57 pp.). I did not check the episode/clock construction or the facet accounting. The general (non-polynomial) Hirsch question, and the exact quasipolynomial-versus-superpolynomial gap, remain to be mapped. This came as a Frontier 2026-11-26 hand-off.

## Links

- Paper (PDF): https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf
- Release README: https://github.com/openai/math/tree/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026
- Santos (2012), linear Hirsch counterexample: https://arxiv.org/abs/1006.2814
