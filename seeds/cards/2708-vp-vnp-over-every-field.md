---
title: "VP ≠ VNP over every field"
authors:
  - "Claude (Anthropic)"
year: 2026
venue: "Anthropic formal-math repository (paper PDF + Lean 4 formalization), 23 Nov 2026"
arxiv: null
doi: null
source: "https://github.com/anthropics/formal-math/tree/main/vp-vnp"
version_reviewed: "web 2026-11-23 (commit of 2026-11-23 20:04 UTC)"
topics:
  - "algebraic-complexity"
  - "lean4"
  - "formalized"
  - "ai-assisted-math"
seed_rank: 2708
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
see:
  - 809-the-complexity-of-computing-the-permanent
  - 1965-a-cubic-permanentdeterminant-lower-bound
cites:
  - title: "VP ≠ VNP over every field (paper)"
    url: "https://github.com/anthropics/formal-math/blob/main/vp-vnp/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Completeness classes in algebra (Valiant, STOC 1979)"
    url: "https://doi.org/10.1145/800135.804419"
    year: 1979
    arxiv: null
    doi: "10.1145/800135.804419"
  - title: "The complexity of computing the permanent (Valiant 1979)"
    url: "https://doi.org/10.1016/0304-3975(79)90044-6"
    year: 1979
    arxiv: null
    doi: "10.1016/0304-3975(79)90044-6"
---

# VP ≠ VNP over every field

## One-sentence takeaway

A paper and Lean 4 formalization released by Anthropic, credited to an internal research Claude model, claim that every arithmetic circuit for the Hamiltonian cycle polynomial (over every field), and for the permanent (outside characteristic 2), needs more than m^(c (log m)^(1/3)) gates for large m, also for approximating circuits; so VP ≠ VNP and VNP ⊄ closure(VP) over every field, Valiant's algebraic analogue of P ≠ NP, while P vs NP itself stays open.

## Why it matters here

It continues the standing `ai-mathematical-reasoning` thread (2685 RH/GRH, 2686 Navier–Stokes, 1965 cubic permanent–determinant bound) with another long-standing problem claimed by a model, and it follows the provenance-first pattern exactly: the claim is meant to be accepted through Lean (statement file importing only Mathlib, axiom check, Comparator against a challenge file, and a second independent kernel, nanoda) rather than through trust in the author. The README is explicit about the gap that remains: "no machine checks that this file says what is claimed", and no human mathematician has checked the proof. That statement-fidelity gap is the same one agent memory faces, where a verified derivation is only as good as its specification.

## Key ideas

- **Main theorem (thm_allfields).** For an absolute c > 0, every field of characteristic p, and m ≥ m₀(p): circuits for HC_m, and for PERM_m when p ≠ 2, have more than m^(c (log m)^(1/3)) gates, i.e. 2^Ω((log m)^(4/3)). Quasipolynomial, against exponential best upper bounds (Ryser-type).
- **Approximate computation (thm_approx).** The bound holds for circuits over k((ε)) that approximate the polynomial (border complexity), giving VNP ⊄ closure(VP).
- **Prior state.** The best previous general-circuit lower bound for an explicit polynomial was Ω(n log d) (Strassen; Baur–Strassen), so nothing above order m² log m was known for PERM_m. Superpolynomial bounds were known only for restricted models (e.g., Limaye–Srinivasan–Tavenas for low depth).
- **Proof shape.** Two cases on the field, a "contracting" and a "flat" hypothesis, built on Strassen-style spectral points on tensors, a pseudometric from wires, a nonpositive-curvature result, and then either Poincaré-inequality/tree arguments or circuit cutting. The paper explains why it fails for the determinant and for Boolean circuits.
- **Checking recipe.** `lake exe cache get`, `lake build`, then print axioms (only propext, Classical.choice, Quot.sound). The repository CI also runs Comparator and the nanoda kernel.

## Caveats

Unrefereed and, per the README, unchecked by any human mathematician; written by AI models and released as an unmaintained research artifact. Lean checks the proofs, but whether `Statement.lean` faithfully states VP ≠ VNP is a human-review question (Appendix Q lists where Lean statements and paper statements differ). One determinantal-complexity consequence in Section 1.2 is stated as not formalized. I read the README, abstract, introduction, related work and the start of the proof overview, not the proof. Outside Frontier's usual clusters; kept as a cross-cluster exception like 2685/2686 (see run log).

## Links

- Repository folder: https://github.com/anthropics/formal-math/tree/main/vp-vnp
- Paper PDF: https://github.com/anthropics/formal-math/blob/main/vp-vnp/paper.pdf
- README (raw): https://raw.githubusercontent.com/anthropics/formal-math/main/vp-vnp/README.md
- Lean statement: https://github.com/anthropics/formal-math/blob/main/vp-vnp/Statement.lean
