---
title: "Lattices with Large Kissing Number from Local Density"
authors:
  - "Huck Bennett"
  - "Minki Hhan"
  - "Zihan Li"
  - "Noah Stephens-Davidowitz"
year: 2026
venue: "arXiv"
arxiv: "2610.14380"
doi: null
source: "https://arxiv.org/abs/2610.14380"
topics:
  - "lattices"
  - "kissing-number"
  - "sphere-packing"
  - "lattice-cryptography"
seed_rank: 2296
seed_batch: "curiosity-2026-10-15"
reviewed: "2026-10-15"
pool: "maths"
relevance_score: 8
cites:
  - title: "Lattices with Large Kissing Number from Local Density"
    url: "https://arxiv.org/abs/2610.14380"
    year: 2026
    arxiv: "2610.14380"
    doi: null
see: ["1085-the-sphere-packing-problem-in-dimension-8"]
---

# Lattices with Large Kissing Number from Local Density

## One-sentence takeaway

Randomised constructions borrowed from computational lattice problems give n-dimensional lattices with e^{√n − o(√n)} shortest vectors in every ℓp norm, and exponentially many for p > 2, beating Leech's 1964 quasipolynomial 2^{Θ(log² n)} bound for Euclidean lattice kissing numbers, which had stood for over 60 years.

## Why it's lovely

Kissing numbers are the most tactile question in geometry: how many equal balls can touch one ball? For lattices in high dimension, the best Euclidean answer had been Barnes–Wall lattices since the 1960s, and claimed exponential constructions were later withdrawn. The new bound comes from an unexpected place, the gadgets cryptographers build to prove the shortest vector problem hard, turned around by a "simple equivalence". Two groups found essentially the same construction independently at the same time, which is a nice sign the idea was ripe. It follows on nicely from the dimension-8 sphere packing card (1085).

## Key ideas

- **Target.** κp(n) is the largest number of shortest nonzero vectors (in ℓp) of a rank-n lattice. κ∞(n) = 3ⁿ − 1 is already known, attained by Zⁿ.
- **Exact locally dense lattices.** A new object, shown to be equivalent to lattices with large kissing number. This runs the earlier Bennett–Peikert–Tang direction (kissing-number lattices to locally dense gadgets) in reverse.
- **Recycled constructions.** Craig-lattice gadgets (Bennett–Peikert 2023), sparsification of Zⁿ (Aggarwal–Stephens-Davidowitz 2018), and a new construction from rotations of the checkerboard lattice D_m all turn out to give exact locally dense lattices.
- **Bounds.** For all p ≥ 1, κp(n) ≥ 2^{Ω(√n)}, and one random lattice achieves it for all p at once. For p > 2, κp(n) ≥ Ω(αpⁿ), which is tight up to the constant, with αp → 2 as p → ∞.
- **Explicit version.** A Craig lattice with one explicit extra basis vector reaches e^{Ω(n^{1/4} log n)} deterministically.

## Caveats

Preprint (Oct 2026). For 1 ≤ p ≤ 2 the authors do not know whether √n in the exponent is tight. The main constructions are randomised, and the deterministic one is weaker. Laarhoven and Kominers (arXiv:2609.13608) posted essentially the same Euclidean result first, with a slightly better constant. These are lattice kissing numbers; Alon's earlier 2^{√n} bound was for non-lattice packings.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.14380
- PDF: https://arxiv.org/pdf/2610.14380
- Concurrent work (Laarhoven–Kominers): https://arxiv.org/abs/2609.13608
