---
title: "The honeycomb model of GL(n) tensor products I: Proof of the saturation conjecture"
authors: ["Allen Knutson", "Terence Tao"]
year: 1999
venue: "J. Amer. Math. Soc."
arxiv: "math/9807160"
doi: "10.1090/S0894-0347-99-00299-4"
source: "https://arxiv.org/abs/math/9807160"
topics: [curiosity]
seed_rank: 1122
seed_batch: "curiosity-2026-08-21"
reviewed: "2026-08-21"
pool: "maths-foundations"
relevance_score: 10
lineage: honeycomb-saturation
cites:
  - title: "The honeycomb model of GL(n) tensor products II: Puzzles determine facets of the Littlewood-Richardson cone"
    url: "https://arxiv.org/abs/math/0107011"
    year: 2004
    arxiv: "math/0107011"
    doi: "10.1090/S0894-0347-03-00441-7"
  - title: "Honeycombs and Sums of Hermitian Matrices, Revisited"
    url: "https://arxiv.org/abs/2607.06710"
    year: 2026
    arxiv: "2607.06710"
    doi: null
  - title: "Cluster algebras I: Foundations"
    url: "https://arxiv.org/abs/math/0104151"
    year: 2002
    arxiv: "math/0104151"
    doi: "10.1090/S0894-0347-01-00385-X"
  - title: "Total positivity, Grassmannians, and networks"
    url: "https://arxiv.org/abs/math/0609764"
    year: 2006
    arxiv: "math/0609764"
    doi: null
see:
  - "1086-cluster-algebras-i-foundations"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "1023-an-aperiodic-monotile"
  - "1085-the-sphere-packing-problem-in-dimension-8"
---

# The honeycomb model of GL(n) tensor products I: Proof of the saturation conjecture

## One-sentence takeaway

Littlewood–Richardson coefficients count lattice honeycombs with given boundary rays, and the existence of a particularly well-behaved (hence integral) honeycomb proves saturation — which is Horn's conjecture on the spectrum of a sum of Hermitian matrices.

## Why it matters here

Why you might love this: representation-theoretic positivity (\(c_{\lambda\mu}^\nu>0\)) becomes a picture of a planar tinkertoy whose edges carry tensions and whose outer rays are the three weights. Saturation says "if some multiple of the weights tensors, so does the original" because you can rescale a real honeycomb until a linear functional pins an *integral* one. The same pictures compute which eigenvalue triples \((\lambda,\mu,\nu)\) can arise as \(\operatorname{spec} A+\operatorname{spec} B=\operatorname{spec}(A+B)\). Bridge: this is diagrammatic reasoning that *is* the theorem — string diagrams for tensor product, with a saturation that later cluster/positroid combinatorics (1086, 1123) inherit. Paper II's puzzles are the cute sibling; mint I, cite II.

## Key ideas

- Honeycombs are a planar model of the Berenstein–Zelevinsky cone: lattice points in a fibre over \((\lambda,\mu,\nu)\) are \(\dim(V_\lambda\otimes V_\mu\otimes V_\nu)^{GL_n}\).
- Main theorem: a regular triple admits a "largest lift" honeycomb maximizing weighted perimeter; it is integral. Saturation (\(c_{\lambda\mu}^\nu>0\Leftrightarrow c_{N\lambda,N\mu}^{N\nu}>0\) for some \(N\)) is the corollary, completing Klyachko's inequalities.
- Horn's 1962 recursive inequalities on Hermitian spectra follow. Tinkertoy models unify honeycombs with Gelfand–Cetlin as a 1-d case.
- Paper II (puzzles as facets of the LR cone; Fulton conjecture) is cited, not minted. 2026 "honeycombs revisited" is an increment.

## Caveats

- \(GL_n\) specifically; other groups remain conjectural in the original (and mostly still are).
- Pictures are 2d; the Hermitian-sum interpretation is spectral, not a numerical linear-algebra algorithm.
- Not a cluster-algebra paper: positroids/plabic graphs come later (Postnikov 1123).

## Links

- arXiv: [math/9807160](https://arxiv.org/abs/math/9807160)
- Journal: [J. Amer. Math. Soc. 12 (1999) 1055–1090](https://doi.org/10.1090/S0894-0347-99-00299-4)
