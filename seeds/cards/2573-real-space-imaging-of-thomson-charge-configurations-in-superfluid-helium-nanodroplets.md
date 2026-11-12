---
title: "Real-Space Imaging of Thomson Charge Configurations in Superfluid Helium Nanodroplets"
authors:
  - "Thomas Pohl"
  - "Jan Mayerhofer"
  - "Hanqing Liu"
  - "Arin Mizouri"
  - "Hao Sha"
  - "Masoomeh Mahmoodi Darian"
  - "Fabio Zappa"
  - "Andrew M. Ellis"
  - "David J. Wales"
  - "Shengfu Yang"
  - "Paul Scheier"
year: 2026
venue: "Physical Review Letters 137, 183001"
arxiv: null
doi: "10.1103/qby4-bm6q"
source: "https://journals.aps.org/prl/abstract/10.1103/qby4-bm6q"
topics:
  - "thomson-problem"
  - "points-on-the-sphere"
  - "curved-crystals"
  - "topological-defects"
  - "experimental-mathematics"
seed_rank: 2573
seed_batch: "curiosity-2026-11-13"
reviewed: "2026-11-13"
pool: "physics"
relevance_score: 7
cites: []
see: []
---

# Real-Space Imaging of Thomson Charge Configurations in Superfluid Helium Nanodroplets

## One-sentence takeaway

J. J. Thomson's 1904 question (how do \(N\) identical charges arrange themselves on a sphere?) has now been answered by experiment rather than computation. Charges on superfluid-helium nanodroplets are tagged with ~700-atom gold nanoparticles and stamped onto a TEM grid, and for 5–36 charges the imprints match projections of the computed Thomson minima, while micron-sized droplets show hexagonal order broken by five-fold defects.

## Why it's lovely

Nature solves an optimisation problem and leaves a fingerprint. The setup is very simple: electron-beam a stream of helium droplets so the charges float just under the superfluid surface, fly them through gold vapour so each charge grows one nanoparticle, then crash the droplet onto carbon film and read off the 2D projection. Fitting a rotation and scale of the known Thomson solution to each imprint recovers the 3D arrangement. At large \(N\) the same Coulomb repulsion produces the soccer-ball story: a flat hexagonal lattice cannot tile a sphere, so pentagonal disclinations have to appear. As the authors put it, the experiment shows which configuration a physical system actually picks, and that need not be the mathematical global minimum. For Anoptic and Broadside the problem is familiar: well-spread points on the sphere are what probe placement, spherical-harmonic and radiance-cascade direction sets, and blue-noise ray directions all need. Here is a physical sampler for that distribution, defects included.

## Key ideas

- **Platform.** Multiply charged superfluid helium nanodroplets are near-spherical, cold, weakly screening hosts, and charges stay at the surface instead of spreading through the volume.
- **Tagging.** Gold atoms picked up in flight aggregate at the charge centres into singly charged nanoparticles of about 700 atoms, large enough to see by TEM and of nearly uniform size.
- **Readout.** Droplets deposit onto TEM grids; the helium evaporates and leaves a 2D imprint. The 3D arrangement is inferred by matching orthographic projections of computed global minima (25 well-separated imprints analysed, \(N=5\)–36).
- **Large \(N\).** Larger droplets show curvature-frustrated Coulomb crystallisation: hexagonal ordering interrupted by five-fold defects, with only qualitative agreement because large droplets distort on impact.
- **Next.** Test simulated solutions above 1000 charges, slow droplets before impact, and study spinning, non-spherical droplets.

## Caveats

This is an experiment, not a proof. Agreement means projected imprints are consistent with known computed minima; it does not certify global optimality, and it cannot rule out nearby metastable states that project similarly. Agreement breaks down for large droplets. I read the APS abstract and the excerpt of the paper returned by search, plus the Innsbruck and Physics World write-ups; the APS pages return HTTP 403 to scripted fetches, so they were confirmed through search results rather than a direct download.

## Links

- APS abstract: https://journals.aps.org/prl/abstract/10.1103/qby4-bm6q
- APS PDF: https://journals.aps.org/prl/pdf/10.1103/qby4-bm6q
- DOI: https://doi.org/10.1103/qby4-bm6q
- University of Innsbruck news: https://www.uibk.ac.at/en/newsroom/2026/a-120-year-old-puzzle-made-visible-in-a-helium-droplet/
- Physics World: https://physicsworld.com/a/gold-nanoparticles-on-superfluid-droplets-illuminate-century-old-thomson-problem/
