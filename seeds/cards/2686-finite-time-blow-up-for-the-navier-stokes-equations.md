---
title: "Finite-time blow-up for the Navier–Stokes equations"
authors:
  - "Levent Alpöge"
  - "Tristan Buckmaster"
year: 2026
venue: "Paper (79 pp., version of 20 Nov 2026) with Lean 4 formalization, GitHub release; not yet refereed"
arxiv: null
doi: null
source: "https://github.com/tristanbuckmaster/navier-stokes"
version_reviewed: "paper version of 2026-11-20"
topics:
  - "partial-differential-equations"
  - "navier-stokes"
  - "lean4"
  - "formalized"
  - "ai-assisted-math"
  - "millennium-problems"
seed_rank: 2686
seed_batch: "frontier-2026-11-22"
reviewed: "2026-11-22"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Existence and smoothness of the Navier–Stokes equation (Fefferman, Millennium Prize problem description)"
    url: "https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf"
    year: 2000
    arxiv: null
    doi: null
  - title: "Rotationally corrected scaling invariant solutions to the Navier–Stokes equations"
    url: "https://doi.org/10.1080/03605302.2017.1323922"
    year: 2017
    arxiv: null
    doi: "10.1080/03605302.2017.1323922"
  - title: "On Leray's self-similar solutions of the Navier–Stokes equations"
    url: "https://doi.org/10.1007/BF02551584"
    year: 1996
    arxiv: null
    doi: "10.1007/BF02551584"
  - title: "Sur le mouvement d'un liquide visqueux emplissant l'espace"
    url: "https://doi.org/10.1007/BF02547354"
    year: 1934
    arxiv: null
    doi: "10.1007/BF02547354"
  - title: "Nonuniqueness of weak solutions to the Navier–Stokes equation"
    url: "https://doi.org/10.4007/annals.2019.189.1.3"
    year: 2019
    arxiv: null
    doi: "10.4007/annals.2019.189.1.3"
  - title: "Finite-Time Singularity Formation for the Three-Dimensional Euler Equations"
    url: "https://cims.nyu.edu/~tristanb/cc.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Finite-time blow-up for the Navier–Stokes equations

## One-sentence takeaway

Alpöge and Buckmaster prove that smooth, compactly supported, divergence-free data on R³ (and smooth data on T³) can blow up in finite time for the unforced 3D Navier–Stokes equations, at rate (T−t)^(−1/4) in Ḣ¹. In Fefferman's Millennium formulation this disproves (A) and (B) and proves (C) and (D). The proof runs from a numerically certified discretely self-similar profile, with a Lean formalization of about 600,000 lines.

## Why it matters here

This closes the question that remained open after the forced Navier–Stokes episode: blow-up with no forcing at all. It does so the way the library's AI-math and FMM threads anticipated. A numerically built approximate solution plus explicit inequalities (a "certificate") is turned into an exact solution by rigorous perturbation theory, and Lean checks the deduction. For Anoptic the shape is familiar: discretise, certify error bounds with interval arithmetic, then prove that the continuous object exists nearby. For Broadside it is another long-horizon human–AI proof whose trust comes from formal checking and a published certificate hash, not from narrative. The acknowledgments say the paper was drafted from an initial Lean proof.

## Key ideas

- **Two-step proof.** Theorem 1.1: any smooth backward discretely self-similar profile (possibly rotated) with Type I decay implies finite-energy blow-up on R³ and periodic blow-up on T³. The profile is Ḣ¹-stable up to finitely many directions, whatever its linearised spectrum. Theorem 7.1: such a profile exists near any approximate solution meeting explicit inequalities.
- **Avoiding the known no-go.** Exactly self-similar Leray solutions are ruled out (Nečas–Růžička–Šverák, Tsai). Discretely self-similar ones answer Bradshaw–Tsai Open Problem 5.1.
- **Certificate.** The approximate profile's inequalities are checked by interval arithmetic (Arb via FLINT, 128-bit), outside Lean. The certificate is not yet released. The paper publishes its SHA-256 hash (3f7a335b…4b22c5).
- **Formalization.** Lean 4.33.1 + Mathlib, about 2,270 files and 600,000 lines. Statement files with `sorry` are paired with `Solution.lean` by comparator configs that allow only the three standard axioms.
- **Sibling result.** Alpöge, Buckmaster and Coiculescu's human-readable 55-page proof of finite-time singularity for unforced 3D Euler on T³ (Craik–Criminale waves, bounded velocity, vorticity blowing up at the origin) was released the same day, also with a Lean formalization.

## Caveats

Not refereed. Tao calls the paper "technically human-readable" but says it needs proper professional writing. The certificate data and the interval-arithmetic verification are not in the repository yet and sit outside the formalization. The README says a 20 Nov patch to cell-layer statements was applied and the patched package was not rebuilt when the repo was assembled. I read the abstract, introduction, statement of Theorem 1.1, acknowledgments and the README, not the proofs. Carded in Frontier as a deliberate cross-cluster exception (see run log).

## Links

- Repository (paper + Lean): https://github.com/tristanbuckmaster/navier-stokes
- Paper PDF: https://raw.githubusercontent.com/tristanbuckmaster/navier-stokes/main/paper/finite-time-blow-up-navier-stokes.pdf
- Sibling Euler paper (PDF): https://cims.nyu.edu/~tristanb/cc.pdf
- Euler Lean formalization: https://github.com/mcoiculescu/EulerBlowupPublic
- Terence Tao's summary post: https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/
