---
title: "A short open space curve of unit width"
authors:
  - "Tinko Sebastian Bartels"
  - "Dennis Kevin Choy"
  - "Ruixiang Wu"
  - "Tongxin Li"
year: 2026
venue: "arXiv"
arxiv: "2610.19585"
doi: null
source: "https://arxiv.org/abs/2610.19585"
topics:
  - "geometric-optimization"
  - "lost-in-a-forest"
  - "interval-arithmetic"
  - "lean-verified"
seed_rank: 2325
seed_batch: "curiosity-2026-10-17"
reviewed: "2026-10-17"
pool: "maths"
relevance_score: 8
cites:
  - title: "A short open space curve of unit width"
    url: "https://arxiv.org/abs/2610.19585"
    year: 2026
    arxiv: "2610.19585"
    doi: null
  - title: "Supplementary Material to \"A short open space curve of unit width\""
    url: "https://doi.org/10.5281/zenodo.23309323"
    year: 2026
    arxiv: null
    doi: "10.5281/zenodo.23309323"
  - title: "The problem of the shortest space curve of unit width (Zalgaller, English translation)"
    url: "https://arxiv.org/abs/1910.02729"
    year: 1994
    arxiv: "1910.02729"
    doi: null
  - title: "The length, width, and inradius of space curves"
    url: "https://doi.org/10.1007/s10711-017-0312-3"
    year: 2018
    arxiv: null
    doi: "10.1007/s10711-017-0312-3"
  - title: "Minimization problem"
    url: "https://doi.org/10.1090/s0002-9904-1956-10021-9"
    year: 1956
    arxiv: null
    doi: "10.1090/s0002-9904-1956-10021-9"
see: ["739-on-a-routing-problem"]
---

# A short open space curve of unit width

## One-sentence takeaway

The 1994 conjectured shortest space curve of unit width (Zalgaller's L3) turns out to be narrower than 1 in some direction, and the authors replace it with a curve of eight segments, two cone geodesics and three circular helices that provably has width exactly 1 and length 3.9051241622…, a strict local minimum they conjecture is the global one, with a Lean formalization and interval-arithmetic certificates.

## Why it's lovely

It is a 3D descendant of Bellman's 1956 "lost in a forest" puzzle (Bellman of dynamic programming fame): what is the shortest walk that is sure to get you out of a strip, or more generally, how short can a curve be if it can't fit between any two planes closer than distance 1? In the plane Zalgaller found the answer, a caliper-shaped arc of length about 2.2783. In space, his proposed curve stood unchallenged for thirty years with a published "proof" of unit width, until direction sampling in a 2021 master's thesis found a slab of width under 0.9912 that holds the whole curve. The repair is a good example of careful modern computer-assisted geometry: numerical search over polygonal chains, exact joining and stationarity equations, then interval arithmetic over a finite cover of directions to certify the width everywhere. Width queries over all directions are the same min-max-over-normals computation as collision-detection support functions, so the techniques carry over directly.

## Key ideas

- **Problem.** Minimize L(γ)/w(γ), where width is the thinnest slab containing the curve (equivalently, the width of its convex hull). Ghomi's 2018 lower bound is √(ℓ_caliper² + 3²) ≈ 3.767, and Zalgaller's L3 claimed about 3.9215.
- **The flaw.** For Zalgaller's printed parameters the whole of L3 lies in the slab 0 ≤ y + z ≤ t + c, so its width is at most (t + c)/√2 < 0.991103. It was never a valid competitor.
- **Search.** Polygonal-chain optimization, where width reduces to finitely many antipodal face-vertex and edge-edge pairs (Houle–Toussaint), suggests the shape of a new candidate family.
- **Exact curve.** Eight straight segments, two geodesics on cones and three circular helices, with parameters fixed by an isolated solution of the joining and stationarity equations. It is a strict local minimum in its three-parameter family, with 3.905124162243593023905759435469 < L < …470, so m_open < 3.905124162243594.
- **Certification.** Analytic estimates combined with interval arithmetic on a finite cover of directions prove width 1. A Lean 4 formalization (generated with ChatGPT 6 Astra and checked to compile) proves slightly looser bounds, and the code and certificates are on Zenodo.

## Caveats

Global optimality is only conjectured, and the gap to Ghomi's lower bound (3.767 versus 3.905) is still wide. The Lean proof uses looser numerical bounds than the paper's 30-digit interval. AI wrote a lot of the code and the Lean formalization, as the authors disclose, so the human-written proofs and the reproducible scripts deserve the closer read.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.19585
- PDF: https://arxiv.org/pdf/2610.19585
- Supplementary code, certificates and Lean proof (Zenodo): https://doi.org/10.5281/zenodo.23309323
- Zalgaller's original problem (English translation): https://arxiv.org/abs/1910.02729
