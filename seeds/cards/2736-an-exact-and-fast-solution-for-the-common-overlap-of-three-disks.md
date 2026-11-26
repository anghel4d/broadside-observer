---
title: "An exact and fast solution for the common overlap of three disks in mutual transits and eclipses"
authors:
  - "Michael Hippke"
  - "René Heller"
year: 2026
venue: "arXiv preprint (astro-ph.IM); A&A manuscript"
arxiv: "2611.31456"
doi: null
source: "https://arxiv.org/abs/2611.31456"
version_reviewed: "v1"
topics:
  - "computational-geometry"
  - "circle-intersection"
  - "numerical-robustness"
  - "greens-theorem"
  - "exomoons"
seed_rank: 2736
seed_batch: "curiosity-2026-11-27"
reviewed: "2026-11-27"
pool: "graphics"
relevance_score: 8
cites:
  - title: "An exact and fast solution for the common overlap of three disks in mutual transits and eclipses"
    url: "https://arxiv.org/abs/2611.31456"
    year: 2026
    arxiv: "2611.31456"
    doi: null
  - title: "reuleaux (open-source implementation)"
    url: "https://github.com/hippke/reuleaux"
    year: 2026
    arxiv: null
    doi: null
see: []
---

# An exact and fast solution for the common overlap of three disks in mutual transits and eclipses

## One-sentence takeaway

The area common to three disks gets a case-free, backward-stable algorithm. A non-degenerate overlap has at most four corners, so five topologies are resolved by one boundary walk and Green's theorem, at 45 ns per configuration. Along the way it corrects errors in earlier published formulas, and five public packages fail on some of its test configurations.

## Why it's lovely

It is a small, perfect geometry kernel. Earlier treatments split the problem into 9 (Fewell), 27 (Kipping's LUNA) or 16 (gefera) cases, and inherited bugs: a minor-arc arcsine where a major arc was needed, and catastrophic cancellation in the textbook two-disk lens formula for a thin lens. This paper proves the overlap has at most four vertices. It then walks the boundary counter-clockwise, choosing at each vertex the unique arc whose midpoint lies inside both other disks, and sums circular segments plus a vertex polygon. It needs one arctangent per arc, has no subtractive cancellation, and handles arcs longer than π without special cases. The Anoptic bridge is direct. Disk-disk-disk overlap is the kind of kernel that analytic visibility of spherical lights and occluders (soft shadows, cone/sphere AO) and 2D coverage queries could use. That use is my extrapolation, not the paper's. Also, "replace a case tree with a proven topology bound plus a boundary walk" is a technique worth stealing. It is also a candid AI-provenance record: the authors say the solution was derived iteratively with Claude Opus 5.5 and that Claude wrote all the software.

## Key ideas

- **Topology bound.** A non-degenerate common overlap has at most four corners (V ≤ 4, and V = 1 never occurs), which leaves exactly five topologies.
- **Boundary walk.** Arc membership is decided by midpoint tests reduced to cross-product signs, and a counter-clockwise walk links the arcs into the overlap boundary.
- **Green's theorem.** Area = sum of circular segments + polygon on the vertices, and the same decomposition gives the centroid in closed form.
- **Numerics.** Componentwise backward stable. On test configurations gefera, eulerr, venn.js, matplotlib-venn and Shapely each fail somewhere (undefined values, missing topologies, or lost precision), and the new method is 4× to several thousand times faster.
- **Code.** Open-source implementation at hippke/reuleaux.

## Caveats

This is a v1 preprint (23 Nov 2026, 7 pp.), not refereed. I read the abstract, introduction and method sections, not the full verification. The solution covers uniform disks only. Limb-darkened flux still needs the line-integral machinery of Pál and Gordon–Agol. The 45 ns figure is the authors' single-core benchmark. The AI-derived provenance means the stability proof deserves an independent read before reuse in a renderer.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.31456
- PDF: https://arxiv.org/pdf/2611.31456
- Code: https://github.com/hippke/reuleaux
