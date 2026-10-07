---
title: "Counterexamples to stable-Morse and strong Arnold fixed-point bounds"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 347; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Hamiltonian-Fixed-Points-Below-the-Stable-Morse-Number-in-Dimension-Twenty-Two-October-5-2026/hamiltonian-fixed-points-below-stable-morse-number.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2202
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Hamiltonian Fixed Points Below the Stable Morse Number in Dimension Twenty-Two"
    url: "https://github.com/openai/math/blob/main/preprints/Hamiltonian-Fixed-Points-Below-the-Stable-Morse-Number-in-Dimension-Twenty-Two-October-5-2026/hamiltonian-fixed-points-below-stable-morse-number.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Sharpness of the Cyclic Integral Floer Bound Below the Stable Morse Number"
    url: "https://github.com/openai/math/blob/main/preprints/Sharpness-of-the-Cyclic-Integral-Floer-Bound-Below-the-Stable-Morse-Number-October-5-2026/sharp-cyclic-integral-floer-bound-below-stable-morse-number.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Hamiltonian Fixed Points Below the Stable Morse Number"
    url: "https://github.com/openai/math/blob/main/preprints/Hamiltonian-Fixed-Points-Below-the-Stable-Morse-Number-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A nondegenerate counterexample to the Morse-number Arnold bound"
    url: "https://github.com/openai/math/blob/main/preprints/A-nondegenerate-counterexample-to-the-Morse-number-Arnold-bound-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Three fixed points on the symplectic quadric threefold"
    url: "https://github.com/openai/math/blob/main/preprints/A-degenerate-counterexample-to-the-critical-number-Arnold-bound-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Counterexamples to stable-Morse and strong Arnold fixed-point bounds

## One-sentence takeaway

OpenAI's result family 347 (Differential geometry) claims: Disproves stable-Morse lower bounds for nondegenerate Hamiltonian fixed points: on simply connected closed Kähler manifolds of real dimension 22, the deficit below the stable Morse number is unbounded.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A separate Hamiltonian diffeomorphism of the complex quadric threefold has exactly three fixed points, fewer than the four critical points required of every smooth function.
- *Hamiltonian Fixed Points Below the Stable Morse Number in Dimension Twenty-Two*: We disprove the stable Morse lower bound for nondegenerate Hamiltonian fixed points with examples in fixed real dimension twenty-two. For every integer m ≥ 1, we construct a simply connected closed Kähler manifold with stable Morse number $80+1968m$ and a Hamiltonian diffeomorphism with exactly $80+1952m$ fixed points, all nondegenerate and with contractible orbit loops. The deficit is therefore unbounded, and the fixed-point count is at most 127/128 of the stable Morse number.
- *Sharpness of the Cyclic Integral Floer Bound Below the Stable Morse Number*: We construct a simply connected closed Kähler manifold of real dimension 3332 and minimal Chern number one whose Hamiltonian fixed-point count attains the cyclic integral Floer bound while falling below the stable Morse number. The Hamiltonian diffeomorphism has exactly $1\,872\,232$ fixed points, all nondegenerate and with contractible orbit loops, whereas the stable Morse number is $1\,872\,264$. Thus the stronger stable Morse bound fails by exactly 32, even when the cyclic integral bound is sharp.
- *Hamiltonian Fixed Points Below the Stable Morse Number*: We disprove the stable Morse lower bound for nondegenerate Hamiltonian fixed points by constructing a simply connected closed Kähler manifold with sixteen fewer fixed points than its stable Morse number. All the corresponding periodic orbits are contractible. The construction combines a Hamiltonian involution with integral homology torsion at two different primes; its proof uses finite-dimensional Morse theory and complex blowups.
- *A nondegenerate counterexample to the Morse-number Arnold bound*: We construct a smooth one-periodic Hamiltonian on a closed symplectic twelve-manifold whose time-one map has fewer fixed points than the manifold's ordinary Morse number. Every fixed point is nondegenerate and has a contractible Hamiltonian trajectory. This disproves the Morse-number form of the Arnold conjecture.
- *Three fixed points on the symplectic quadric threefold*: We construct a smooth Hamiltonian diffeomorphism of the complex quadric threefold with exactly three fixed points, at least one of which is degenerate. The critical number and the unit-inclusive rational cup length of this manifold are both four. Thus the example disproves the unrestricted critical-number and rational cup-length forms of the Arnold conjecture.
- Lean scope (lean/docs/347.md): The critical-number form of Arnold's fixed-point conjecture predicts at least as many fixed points as the minimum number of critical points of a smooth function. The formalized counterexample is a Hamiltonian diffeomorphism of the complex quadric threefold with exactly three fixed points, while every smooth function on that manifold has at least four critical points.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Hamiltonian Fixed Points Below the Stable Morse Number in Dimension Twenty-Two](https://github.com/openai/math/blob/main/preprints/Hamiltonian-Fixed-Points-Below-the-Stable-Morse-Number-in-Dimension-Twenty-Two-October-5-2026/hamiltonian-fixed-points-below-stable-morse-number.pdf)
- Manuscript: [Sharpness of the Cyclic Integral Floer Bound Below the Stable Morse Number](https://github.com/openai/math/blob/main/preprints/Sharpness-of-the-Cyclic-Integral-Floer-Bound-Below-the-Stable-Morse-Number-October-5-2026/sharp-cyclic-integral-floer-bound-below-stable-morse-number.pdf)
- Manuscript: [Hamiltonian Fixed Points Below the Stable Morse Number](https://github.com/openai/math/blob/main/preprints/Hamiltonian-Fixed-Points-Below-the-Stable-Morse-Number-October-5-2026/paper.pdf)
- Manuscript: [A nondegenerate counterexample to the Morse-number Arnold bound](https://github.com/openai/math/blob/main/preprints/A-nondegenerate-counterexample-to-the-Morse-number-Arnold-bound-September-23-2026/paper.pdf)
- Manuscript: [Three fixed points on the symplectic quadric threefold](https://github.com/openai/math/blob/main/preprints/A-degenerate-counterexample-to-the-critical-number-Arnold-bound-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/347.md
- Comparator statement (Three-fixed-point Arnold counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ArnoldCounterexample.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
