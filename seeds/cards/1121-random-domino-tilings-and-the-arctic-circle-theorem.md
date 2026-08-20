---
title: "Random Domino Tilings and the Arctic Circle Theorem"
authors: ["William Jockusch", "James Propp", "Peter Shor"]
year: 1998
venue: "Ann. Inst. Henri Poincaré D"
arxiv: "math/9801068"
doi: "10.4171/aihpd/233"
source: "https://arxiv.org/abs/math/9801068"
topics: [curiosity]
seed_rank: 1121
seed_batch: "curiosity-2026-08-21"
reviewed: "2026-08-21"
pool: "maths-foundations"
relevance_score: 10
lineage: arctic-circle-dimers
cites:
  - title: "Alternating-Sign Matrices and Domino Tilings (Part I)"
    url: "https://arxiv.org/abs/math/9201305"
    year: 1992
    arxiv: "math/9201305"
    doi: "10.1023/A:1022420103267"
  - title: "Local statistics for random domino tilings of the Aztec diamond"
    url: "https://arxiv.org/abs/math/0008243"
    year: 1996
    arxiv: "math/0008243"
    doi: "10.1215/S0012-7094-96-08506-3"
  - title: "Another proof of the alternating sign matrix conjecture"
    url: "https://arxiv.org/abs/math/9712207"
    year: 1996
    arxiv: "math/9712207"
    doi: null
  - title: "Dimers and Amoebae"
    url: "https://arxiv.org/abs/math-ph/0311005"
    year: 2006
    arxiv: "math-ph/0311005"
    doi: null
see:
  - "1023-an-aperiodic-monotile"
  - "1085-the-sphere-packing-problem-in-dimension-8"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "1083-riemann-roch-and-abel-jacobi-theory-on-a-finite-graph"
---

# Random Domino Tilings and the Arctic Circle Theorem

## One-sentence takeaway

A uniformly random domino tiling of a large Aztec diamond freezes into brickwork in four polar regions, and the temperate zone where orientations mix is bounded by a circle of radius \(n/\sqrt{2}\) — the arctic circle.

## Why it matters here

Why you might love this: a purely combinatorial random tiling, with no PDE in sight, nucleates a *perfect circle* as a phase boundary. Four frozen "arctic" corners of aligned dominos; a disordered temperate interior; the interface concentrates on the inscribed circle. The proof is a shuffle of tiles that is secretly a discrete-time TASEP, so the circle is a hydrodynamic limit of an exclusion process. Bridge: Broadside already thinks in discrete fields and frozen/liquid interfaces (radiance cascades, heightfields); this is the theorem that a lattice model can grow a Euclidean shape from a counting measure. Contrast with the hat monotile (1023): that is aperiodic *order*; this is random dimer *limit shape*.

## Key ideas

- Aztec diamond of order \(n\) has \(2^{n(n+1)/2}\) domino tilings (Elkies–Kuperberg–Larsen–Propp). Each tiling splits into four polar brickwork regions plus a temperate zone of mixed orientations.
- Arctic Circle Theorem: for every \(\varepsilon>0\) and \(n\) large, all but an \(\varepsilon\)-fraction of tilings have temperate boundary uniformly within \(\varepsilon n\) of the inscribed circle of radius \(n/\sqrt{2}\).
- The engine is *domino shuffling*: a local move that grows order-\(n\) tilings from order-\((n-1)\). Tracking the arctic interface under shuffling yields a discrete-time totally asymmetric exclusion process whose stationary classification forces the circular limit.
- Later proofs (Cohn–Elkies–Propp via Krawtchouk; Kenyon–Okounkov–Sheffield amoebae) recast the same circle as a Ronkin/spectral-curve phenomenon; mint the 1998 particle-system original, cite the rest.

## Caveats

- Discovery 1998 (arxiv math/9801068); journal version *Ann. Inst. Henri Poincaré D* 13 (2026), DOI `10.4171/aihpd/233` — a 28-year delay, not a 2026 theorem.
- Aztec diamonds specifically; hexagons, groves, and half-hexagon "arctic parabolas" are siblings (cite, do not remint).
- Not an aperiodic-monotile paper and not a deterministic tiling algorithm.

## Links

- arXiv: [math/9801068](https://arxiv.org/abs/math/9801068)
- Journal: [Ann. Inst. Henri Poincaré D (2026)](https://doi.org/10.4171/aihpd/233)
