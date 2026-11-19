---
title: "An Implementation of the Fast Multipole Method without Multipoles"
authors:
  - "Christopher R. Anderson"
year: 1992
venue: "SIAM Journal on Scientific and Statistical Computing 13(4), pp. 923-947 (UCLA CAM Report 90-14, July 1990)"
arxiv: null
doi: "10.1137/0913055"
source: "https://ww3.math.ucla.edu/camreport/cam90-14.pdf"
version_reviewed: "UCLA CAM Report 90-14 (July 1990 scan)"
topics:
  - "fast-multipole"
  - "poisson-kernel"
  - "hierarchical-methods"
  - "multigrid"
  - "n-body"
seed_rank: 2648
seed_batch: "archive-2026-11-20"
reviewed: "2026-11-20"
pool: "maths-foundations"
lineage: fast-multipole
relevance_score: 9
see:
  - "1169-a-new-version-of-the-fast-multipole-method-for-the-laplace-equa"
  - "1176-a-kernel-independent-adaptive-fast-multipole-algorithm-in-two-a"
  - "1181-a-short-course-on-fast-multipole-methods"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
cites:
  - title: "An Implementation of the Fast Multipole Method without Multipoles"
    url: "https://doi.org/10.1137/0913055"
    year: 1992
    doi: "10.1137/0913055"
---

# An Implementation of the Fast Multipole Method without Multipoles

## One-sentence takeaway

Replace FMM's multipole and local expansions with the field's own values sampled at K points on a ring (2D) or sphere (3D) around each box, rebuilt outside or inside the ring by a band-limited Poisson kernel, so every FMM translation (shift, combine, far-to-local) becomes "evaluate the child approximation at the parent's sample points", and pick the tree depth from a cheap timing model instead of guessing.

## Why it matters here

This is the ancestor of the kernel-independent FMM (card 1176) and the cleanest bridge from FMM to radiance cascades: an "outer ring approximation" is literally a ring of samples of a field that is reconstructed away from the sources, which is what a cascade probe ring stores. If the M2L+RC idea (FMM far-to-local spliced onto cascades) is built, this paper says the interaction lists can stay and the expansions can be plain sample rings, with the same code in 2D and 3D. Its level-selection model is also a usable rule for choosing cascade depth per scene.

## Key ideas

- **Element = samples on a ring.** Outside a disk of radius a holding the particles, the potential is κ log r plus a Poisson integral of its values on the circle. Inside, the same holds with an inner kernel. Particles only ever need to be evaluated at the K sample points.
- **Fix the ill-conditioning by truncating modes.** Plain trapezoidal quadrature of the Poisson kernel breaks down as the evaluation point nears the ring. The fix is to notice that quadrature on K = 2M+1 points implicitly estimates Fourier coefficients, so sum only |k| ≤ M; the kernel collapses to a closed-form geometric-series expression. Errors then behave like an M-term multipole, and the ring radius a = 2× the cluster radius was found to work.
- **All translations are evaluations.** Combining child outer rings into a parent, or forming an inner ring from well-separated outer rings, is done by evaluating the component approximations at the target ring's points. No shift formulas, and 3D (sphere quadrature) is nearly the same program as 2D.
- **Multigrid structure.** The box hierarchy is organised and swept like multigrid levels (upward pass for outer rings, downward for inner rings), which simplifies programming and parallel analysis.
- **Choose the level.** Two cheap sweeps over per-level occupancy arrays estimate outer-ring construction time and inner-ring plus direct-interaction time per level. For 4,000 uniform particles: direct 829 s; levels 2/3/4/5 total 333.1 / 124.7 / 148.8 / 531.9 s, so level 3 wins and a wrong level costs about 4×.

## Caveats

Read from the 1990 report scan (31 pages, no text layer); the 1992 SIAM version may differ in details. Laplace kernel only, uniform (non-adaptive) refinement, a 1990 workstation benchmark, and the author says there is no great asymptotic advantage over multipoles — the gains are programmability, easy 3D, and easy non-point sources (segments, panels). Visibility, which is what makes radiance different from gravity, is out of scope.

## Links

- PDF (UCLA CAM Report 90-14): https://ww3.math.ucla.edu/camreport/cam90-14.pdf
- SIAM DOI: https://doi.org/10.1137/0913055
- Author paper list: https://www.math.ucla.edu/~anderson/ResearchFolder/Papers/Papers.html
