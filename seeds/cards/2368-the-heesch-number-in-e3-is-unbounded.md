---
title: "The Heesch number in E^3 is unbounded"
authors:
  - "Bojan Bašić"
year: 2026
venue: "arXiv preprint"
arxiv: "2610.24281"
doi: null
source: "https://arxiv.org/abs/2610.24281"
topics:
  - "tiling"
  - "heesch-problem"
  - "polycubes"
  - "discrete-geometry"
seed_rank: 2368
seed_batch: "curiosity-2026-10-21"
reviewed: "2026-10-21"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "The Heesch number in E^3 is unbounded"
    url: "https://arxiv.org/abs/2610.24281"
    year: 2026
    arxiv: "2610.24281"
    doi: null
  - title: "Heesch numbers of unmarked polyforms (Kaplan)"
    url: "https://arxiv.org/abs/2105.09438"
    year: 2022
    arxiv: "2105.09438"
    doi: null
see: ["1023-an-aperiodic-monotile", "2011-a-counterexample-to-periodic-tiling-in-dimension-three", "1024-sturmian-lattices-and-aperiodic-tile-sets"]
---

# The Heesch number in E^3 is unbounded

## One-sentence takeaway

For every h there is an explicit ball-shaped polyhedron in three-dimensional space (a polycube of 48h + 64 unit cubes with bumps and nicks) that cannot tile space yet can be surrounded by at least h complete layers of its own copies, so Heesch's problem has a "no bound" answer in dimension three and up.

## Why it's lovely

The Heesch number counts how many full rings of copies you can wrap around a shape before you get stuck; it measures how close a non-tiling shape comes to tiling. In the plane, after decades of searches including Kaplan's SAT-solver sweep of all small polyforms, the record is still 6, and nobody knows whether there is any upper limit. Bašić settles the space version with an elementary, explicit construction that starts from a humble 1-D fact: a four-point set of integers that cannot tile the line but can pack long intervals. That is the same flavour as the hat monotile (card 1023) and Greenfeld–Tao's periodic-tiling counterexample (card 2011): tiny local rules, long-range consequences. It also bears on decidability, since a bound on Heesch numbers would make single-tile tiling decidable for nice classes.

## Key ideas

- **Coronas.** The i-th corona is a ring of copies touching the previous layer and enclosing everything so far; the Heesch number is the largest number of coronas possible. It is finite exactly when the shape does not tile, by the Extension Theorem.
- **1-D seed.** A four-element integer set that does not tile ℤ but packs long intervals supplies "almost tilings" whose failure is pushed far from the centre.
- **Lift to 3-D.** That pattern is encoded in a polycube of 48h + 64 cubes, with bumps and nicks on the faces forcing copies to lock in unique ways, so the failure appears only after h layers.
- **Higher dimensions.** Extending the shape along extra axes gives the same result in every dimension d ≥ 3.
- **Context.** Previously, unbounded finite Heesch numbers were known only for sets of several tiles, in the hyperbolic plane, or when dimension grows with the number (d − 1 in E^d).

## Caveats

Fresh 12-page preprint. The planar Heesch problem, the famous one, remains open; the construction relies on room that three dimensions give and the plane does not. The shapes are explicit but large and rely on bumps and nicks, not clean polycubes.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.24281
- PDF: https://arxiv.org/pdf/2610.24281
- Kaplan, Heesch numbers of unmarked polyforms: https://arxiv.org/abs/2105.09438
