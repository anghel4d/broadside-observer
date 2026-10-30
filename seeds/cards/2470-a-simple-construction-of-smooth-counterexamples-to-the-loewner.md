---
title: "A simple construction of smooth counterexamples to the Loewner and Carathéodory conjectures"
authors:
  - "Naoya Ando"
  - "Masaaki Umehara"
year: 2026
venue: "arXiv preprint (math.DG)"
arxiv: "2610.34036"
doi: null
source: "https://arxiv.org/abs/2610.34036"
topics:
  - "differential-geometry"
  - "umbilics"
  - "counterexample"
  - "ai-assisted-proof"
seed_rank: 2470
seed_batch: "curiosity-2026-10-31"
reviewed: "2026-10-31"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "A simple construction of smooth counterexamples to the Loewner and Carathéodory conjectures"
    url: "https://arxiv.org/abs/2610.34036"
    year: 2026
    arxiv: "2610.34036"
    doi: null
see: ["2433-the-elastic-figure-eight-knot-is-not-planar", "2435-a-frame-indifferent-rank-one-convex-function-which-is-not-quasiconvex"]
---

# A simple construction of smooth counterexamples to the Loewner and Carathéodory conjectures

## One-sentence takeaway

Both century-old umbilic conjectures (Carathéodory: every closed convex surface has at least two umbilics; Loewner: an umbilic's index is at most 1) fail in the smooth category, and Ando–Umehara give a short self-contained construction from the seed F(z) = a(x) − a(y) + sin x sin y with a(t) = sin⁴t + 3 sin²t.

## Why it's lovely

An umbilic is a point where a surface curves equally in every direction, like every point of a sphere. Carathéodory's conjecture, from around 1924, says every egg-shaped surface has at least two, and it was believed for a century. Alpöge recently announced, with AI help, that it is false for smooth (non-analytic) surfaces. This note rebuilds the counterexample from one trigonometric function whose trace-free Hessian you can check by hand, then flattens it to zero at the origin, so the whole failure fits in a few pages. It also continues the Alpöge thread already in this library's notes.

## Key ideas

- **Seed.** F(z) = a(x) − a(y) + sin x sin y with a″(t) = 6 − 16 sin⁴t, so the trace-free Hessian of F is visibly never zero. The simpler seed sin⁴x − sin⁴y + sin x sin y also works.
- **Local index.** H_k(z) = exp(−|z|^(−k/4)) F(z^(−k/2)) is smooth and flat at 0, and its Hessian eigenline fields have an isolated singularity of index 1 + k/2. For k ≥ 1 this beats Loewner's bound of 1.
- **Surface.** A support-function parametrization turns that into an umbilic of index 1 + k/2 on a C^∞, non-analytic surface germ in R³, with a Lorentz–Minkowski analogue via the Ribaucour correspondence.
- **Global.** Damping the seed with e^(−δ(1+|W|²)^(1/4)) gives a strictly convex closed smooth surface with exactly one umbilic, of index 2, which contradicts Carathéodory.
- **Analytic case untouched.** The counterexamples are flat, so they cannot be real-analytic; the analytic Carathéodory theorem (Hamburger, Ivanov) is not affected. Only the smooth category breaks.

## Caveats

This is a simplification of Alpöge's announced construction, which I have not read. The counterexamples need flatness, which is impossible for real-analytic surfaces, so the classical analytic statements remain true. I read the abstract and the first five pages; I did not check the index computation.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.34036
- PDF: https://arxiv.org/pdf/2610.34036
