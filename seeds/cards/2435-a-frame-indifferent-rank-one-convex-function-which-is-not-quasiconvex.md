---
title: "A frame-indifferent rank-one convex function in three dimensions which is not quasiconvex"
authors:
  - "Sergio Conti"
  - "Georg Dolzmann"
  - "Patrick Dondl"
year: 2026
venue: "arXiv preprint (math.AP)"
arxiv: "2610.31886"
doi: null
source: "https://arxiv.org/abs/2610.31886"
topics:
  - "calculus-of-variations"
  - "nonlinear-elasticity"
  - "lean-formalization"
  - "ai-assisted-proof"
seed_rank: 2435
seed_batch: "curiosity-2026-10-27"
reviewed: "2026-10-27"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "A frame-indifferent rank-one convex function in three dimensions which is not quasiconvex"
    url: "https://arxiv.org/abs/2610.31886"
    year: 2026
    arxiv: "2610.31886"
    doi: null
see: ["2227-global-uniqueness-in-smooth-isotropic-elasticity"]
---

# A frame-indifferent rank-one convex function in three dimensions which is not quasiconvex

## One-sentence takeaway

There is a legitimate 3D elastic energy, unchanged by rotating the material, that passes the checkable test of being stable along every rank-one direction (ellipticity) but still fails quasiconvexity, the condition that actually guarantees minimizers exist. It is the first frame-indifferent answer to Morrey's question, and the proof is formalized in Lean 4.

## Why it's lovely

Morrey asked in 1952 whether rank-one convexity implies quasiconvexity. Šverák's 1992 counterexample said no for 3×2 and larger matrices, but it ignores the one symmetry real materials must have: rotating the deformed body changes nothing, W(QF) = W(F). Elasticity theory runs on exactly that gap, since engineers can check ellipticity but existence needs quasiconvexity. This paper closes it with a degree-four polynomial in the strain FᵀF − Id. The construction starts from a symmetric-gradient (geometrically linear) example, adds a uniaxial prestress and a cubic correction, and fails at the identity through Šverák's third-order mechanism. The whole proof was formalized in Lean by Claude Opus 5.5 under the authors' direction, which makes it a clean example of a classical PDE result shipped with a machine-checked certificate.

## Key ideas

- **Linear seed.** A rank-one convex, non-quasiconvex quartic in sym ∇u alone (Theorem 2.1). The classical counterexamples rely on the skew part and do not work in this setting.
- **Local polynomial.** W₀(F) = g(½(FᵀF − Id)). Its second variation on rank-one matrices at Id is nonnegative and vanishes exactly on three Šverák modes, e₁⊗e₁, e₂⊗e₂ and e₃⊗(e₁+e₂), and the cubic term on their span breaks quasiconvexity with test gradients arbitrarily close to Id.
- **Checkable certificates.** By frame indifference the rank-one Hessian is a polynomial in invariants; near each mode it has a nondegenerate minimum, certified by positive-definite explicit 10×10 rational matrices.
- **Globalization.** Adding K·Φ, with Φ a polyconvex frame-indifferent penalty that is zero near SO(3), extends W to all of ℝ³ˣ³ while keeping rank-one convexity.
- **Formal proof.** Theorems 1.1 and 2.1 are verified in Lean 4 with Mathlib.

## Caveats

W is frame-indifferent but not isotropic (it is not invariant under F ↦ FQ), and the isotropic case is still open. So is the 2×2 Morrey problem. The energy is a constructed counterexample, not a measured material law. I read the introduction and strategy, not the Lean development.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.31886
- PDF: https://arxiv.org/pdf/2610.31886
