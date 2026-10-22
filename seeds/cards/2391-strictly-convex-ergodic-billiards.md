---
title: "Strictly convex ergodic billiards"
authors:
  - "Wentao Fan"
  - "Boris Hasselblatt"
year: 2026
venue: "arXiv preprint (math.DS)"
arxiv: "2610.28247"
doi: null
source: "https://arxiv.org/abs/2610.28247"
topics:
  - "billiards"
  - "ergodic-theory"
  - "hyperbolic-dynamics"
  - "chaos"
seed_rank: 2391
seed_batch: "curiosity-2026-10-23"
reviewed: "2026-10-23"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Strictly convex ergodic billiards"
    url: "https://arxiv.org/abs/2610.28247"
    year: 2026
    arxiv: "2610.28247"
    doi: null
see: ["1830-integrability-knife-edge-billiard-in-a-disk", "1583-symplectic-tiling-billiards-on-complete-affine-tori"]
---

# Strictly convex ergodic billiards

## One-sentence takeaway

Sufficiently asymmetric lemon-shaped tables (the overlap of a small disk and a much larger one whose circle passes over both centres) are the first strictly convex billiards proven ergodic, and in fact Bernoulli, which settles a 2013 conjecture of Chen, Mohr, Zhang and Zhang.

## Why it's lovely

A billiard ball bouncing like a light ray in a mirror-walled room is the cleanest model of deterministic chaos. Stadiums and Sinai's dispersing tables are famously chaotic, but every known recipe for chaos in convex tables needed flat pieces or arcs whose whole circle sits inside the table, which rules out strictly convex shapes. Smooth, sufficiently curved convex tables have caustics that trap orbits and block ergodicity. The lemon dodges this with two sharp corners. Proving it took a 56-plus-page fight with singularity curves whose slope changes sign, a behaviour the standard toolkit did not expect. For anyone who traces light in Anoptic, this is the mathematics of when mirror reflections inside a convex shape fill phase space uniformly and when they get stuck on structured paths.

## Key ideas

- **Table.** L(r, R, ζ) is the intersection of a disk of radius r with a much larger disk of radius R that contains both centres. Theorem A gives the Bernoulli property for R above an explicit threshold (of order 30000·r / sin²ζ) for admissible corner angles ζ in (0, tan⁻¹(1/3)).
- **Builds on uniform hyperbolicity.** The authors' earlier paper proved uniformly hyperbolic returns to a well-chosen global section (last or only collisions with the small arc), refining nonuniform hyperbolicity from Jin and Zhang (2021).
- **The new work is singularity control.** Local ergodicity via the Markarian–Del Magno theorem needs four hypotheses. The Sinai–Chernov Ansatz fails in its standard form here, so they prove and use a one-sided variant (L3′).
- **Odd singularity curves.** Some singularity curves are nearly vertical and change the sign of their slope, unlike in prior billiard literature; controlling them is what lets unstable and stable leaves grow long enough to build Hopf chains.
- **From local to global.** Local ergodicity (ergodic components open almost everywhere) is upgraded to ergodicity and then the Bernoulli property for the billiard flow's section map.

## Caveats

The radius threshold is enormous, so the result covers very thin, very asymmetric lemons; it says nothing about moderate shapes or symmetric lemons, where numerics suggest mixed behaviour. The proof leans heavily on the companion paper. It is pure dynamics with no algorithmic content, so the connection to rendering is conceptual. The authors state that no AI was used in preparing the article.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.28247
- PDF: https://arxiv.org/pdf/2610.28247
