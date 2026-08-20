---
title: "A categorification of the Jones polynomial"
authors: ["Mikhail Khovanov"]
year: 2000
venue: "Duke Math. J."
arxiv: "math/9908171"
doi: "10.1215/S0012-7094-00-10131-7"
source: "https://arxiv.org/abs/math/9908171"
topics: [curiosity]
seed_rank: 1124
seed_batch: "curiosity-2026-08-21"
reviewed: "2026-08-21"
pool: "maths-foundations"
relevance_score: 9
lineage: khovanov-homology
cites:
  - title: "A polynomial invariant for knots via von Neumann algebras"
    url: "https://doi.org/10.1090/S0273-0979-1985-15304-2"
    year: 1985
    arxiv: null
    doi: "10.1090/S0273-0979-1985-15304-2"
  - title: "On Khovanov's categorification of the Jones polynomial"
    url: "https://arxiv.org/abs/math/0209059"
    year: 2002
    arxiv: "math/0209059"
    doi: "10.2140/agt.2002.2.337"
  - title: "Physics, Topology, Logic and Computation: A Rosetta Stone"
    url: "https://arxiv.org/abs/0903.0340"
    year: 2009
    arxiv: "0903.0340"
    doi: "10.1007/978-3-642-12821-9_7"
  - title: "Canonical bases in tensor products and graphical calculus for U_q(sl_2)"
    url: "https://doi.org/10.1215/S0012-7094-97-08715-9"
    year: 1997
    arxiv: null
    doi: "10.1215/S0012-7094-97-08715-9"
see:
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "1025-on-the-sphere-spectrum-from-the-viewpoint-of-linear-logic"
  - "951-an-introduction-to-string-diagrams-for-computer-scientists"
  - "040-linear-logic"
---

# A categorification of the Jones polynomial

## One-sentence takeaway

Replace each coefficient of the Jones polynomial by a homology group: a cube of Kauffman resolutions, with maps from the Frobenius algebra \(\mathbb{Z}[x]/(x^2)\), yields a bigraded link homology whose Euler characteristic is Jones.

## Why it matters here

Why you might love this: a polynomial invariant that "should not" lift — because Reidemeister moves only preserve the state-sum, not a preferred chain complex — *does* lift. Each crossing becomes a bit of a hypercube; each complete resolution is a tensor of a 2-dimensional Frobenius algebra; the differential is the multiplication/comultiplication of that algebra; homology is a link invariant strictly stronger than Jones (torsion, thickness, Rasmussen \(s\)). Categorification as a method, not a slogan: numbers become spaces, identities become maps. Bridge: Broadside already lives in diagrammatic calculi (string diagrams, linear logic, Rosetta Stone); Khovanov is the knot-theoretic proof that a rewrite system's *homology* can be the invariant when the Euler characteristic is only the shadow.

## Key ideas

- Kauffman bracket state-sum upgraded: \(n\) crossings \(\to\) an \(n\)-cube of smoothings; each smoothing of \(k\) circles is \(A^{\otimes k}\) with \(A=\mathbb{Z}[x]/(x^2)\) (deg \(x=-2\)).
- Edge maps are multiplication \(A\otimes A\to A\) or comultiplication \(A\to A\otimes A\) according as two circles merge or one splits. \(d^2=0\) is the Frobenius axiom.
- Reidemeister invariance of the *homology* (not merely the Euler characteristic). Graded Euler characteristic recovers Jones (up to the standard \(q+q^{-1}\) factor).
- Groups may have torsion; rational ranks are a two-parameter family of integer invariants. Later Bar-Natan rewrite and Rasmussen \(s\) are cited, not minted.

## Caveats

- Classical links in \(S^3\); \(\mathfrak{sl}_n\) / HOMFLY categorifications and tangle functoriality are sequels.
- The original writeup is algebraically dense; most working definitions follow Bar-Natan `math/0209059`.
- Not a quantum-Turing or TQFT-survey paper; the 3+1 TQFT reading is later.

## Links

- arXiv: [math/9908171](https://arxiv.org/abs/math/9908171)
- Journal: [Duke Math. J. 101 (2000) 359–426](https://doi.org/10.1215/S0012-7094-00-10131-7)
