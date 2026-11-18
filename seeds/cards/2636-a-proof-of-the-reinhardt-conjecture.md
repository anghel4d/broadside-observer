---
title: "A proof of the Reinhardt conjecture"
authors:
  - "Fei Xue"
year: 2026
venue: "arXiv preprint (math.MG)"
arxiv: "2611.21470"
doi: null
source: "https://arxiv.org/abs/2611.21470"
version_reviewed: "v1"
topics:
  - "lattice-packing"
  - "convex-geometry"
  - "optimal-control"
  - "computer-assisted-proof"
  - "ai-assisted-mathematics"
seed_rank: 2636
seed_batch: "curiosity-2026-11-19"
reviewed: "2026-11-18"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "A proof of the Reinhardt conjecture"
    url: "https://arxiv.org/abs/2611.21470"
    year: 2026
    arxiv: "2611.21470"
    doi: null
  - title: "On the Reinhardt Conjecture"
    url: "https://arxiv.org/abs/1103.4518"
    year: 2011
    arxiv: "1103.4518"
    doi: null
  - title: "The Reinhardt Conjecture as an Optimal Control Problem"
    url: "https://arxiv.org/abs/1703.01352"
    year: 2017
    arxiv: "1703.01352"
    doi: null
  - title: "Packings of Smoothed Polygons"
    url: "https://arxiv.org/abs/2405.04331"
    year: 2024
    arxiv: "2405.04331"
    doi: null
  - title: "Reinhardt's problem of lattice packings of convex domains: Local extremality of the Reinhardt octagon"
    url: "https://doi.org/10.1007/BF01727653"
    year: 1988
    arxiv: null
    doi: "10.1007/BF01727653"
  - title: "Über die dichteste gitterförmige Lagerung kongruenter Bereiche in der Ebene und eine besondere Art konvexer Kurven"
    url: "https://doi.org/10.1007/BF02940676"
    year: 1934
    arxiv: null
    doi: "10.1007/BF02940676"
---

# A proof of the Reinhardt conjecture

## One-sentence takeaway

A 472-page preprint claims the 1934 Reinhardt conjecture: among centrally symmetric convex disks in the plane, the smoothed regular octagon has the lowest best-lattice-packing density, (8 − 4√2 − log 2)/(2√2 − 1) ≈ 0.902, and only its affine images attain it.

## Why it's lovely

Ask which centrally symmetric shape packs worst, even when you choose its best lattice. Disks pack at about 0.907, so the circle seems the obvious answer. Reinhardt's 1934 guess was an octagon with its corners rounded off by hyperbola arcs, a shape that is neither a polygon nor an ellipse, and it sits just below the circle. Ninety years on, the proof runs through Hales's reformulation of the problem as optimal control, where each arc of the boundary is a constant control. Hales and Vajjha had already shown that a minimizer is a smoothed polygon with finitely many arcs. This paper bounds how many arcs there can be, enumerates the possible switching patterns, and eliminates all but the octagon with rigorous interval computation. It also belongs to the AI-mathematics thread: the acknowledgments say ChatGPT carried out much of the local-cost exploration, the proofs for the final six cases, and the organization of the manuscript, while the author proposed the finite-bound argument and takes responsibility for the claims. The bridge to our work is the proof's shape, not its subject: make finiteness explicit, enumerate, then certify each case, which is the same pattern as the glider certificates in card 2615.

## Key ideas

- **Problem.** δ_L(D) is the density of the densest lattice packing of a centrally symmetric convex disk D; the question is which D minimizes it. Affine maps preserve δ_L.
- **Lineage.** Mahler (1947) split the problem into two parts: every minimizer is a smoothed polygon (Mahler's first conjecture, proved by Hales–Vajjha), and that polygon is the octagon (Reinhardt). Nazarov (1986/1988) proved the octagon is a local minimizer.
- **Explicit finiteness.** A uniform positive cost for every 13 consecutive control arcs bounds the number of positive pieces by N < 2^165. Local cost inequalities and a capacity theorem then cut this to at most 20 essential switches (N ≤ 21).
- **Word reduction.** Twist and switching constraints leave 1355 cyclic switching words. Exact rational combinations of local costs remove 1334 of them, and further geometry reduces the remaining 21 to six types, R01–R06, three with eight essential arcs and three with nine.
- **Exclusion and rigidity.** Each of the six types is ruled out with closure equations, geometric reductions and rigorous finite interval covers. A short-chain rigidity argument then identifies the smoothed octagon and the equality case.
- **Reproducibility.** An appendix lists the computational inputs and checking procedures, and a reader archive supplies the algorithms and fixed data.

## Caveats

I read the abstract, introduction and acknowledgments of v1, posted 16 Nov 2026; the paper is not refereed. It is 472 pages, rests partly on computer verification, and by its own account much of it was produced by an AI system. No independent check exists yet, and the author hopes for a shorter proof. Treat the conjecture as claimed solved until experts, Hales among them, have weighed in. The result also depends on the Hales–Vajjha theorem for Mahler's first conjecture.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.21470
- PDF: https://arxiv.org/pdf/2611.21470
- Hales–Vajjha, Packings of Smoothed Polygons: https://arxiv.org/abs/2405.04331
