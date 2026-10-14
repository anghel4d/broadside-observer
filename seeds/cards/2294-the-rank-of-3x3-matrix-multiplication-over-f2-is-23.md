---
title: "The rank of 3×3 matrix multiplication over F2 is 23"
authors:
  - "Tejasvi Singh Tomar"
year: 2026
venue: "arXiv"
arxiv: "2610.11823"
doi: null
source: "https://arxiv.org/abs/2610.11823"
topics:
  - "matrix-multiplication"
  - "tensor-rank"
  - "bilinear-complexity"
  - "lean"
  - "computer-assisted-proof"
seed_rank: 2294
seed_batch: "curiosity-2026-10-15"
reviewed: "2026-10-15"
pool: "maths"
relevance_score: 9
cites:
  - title: "The rank of 3×3 matrix multiplication over F2 is 23"
    url: "https://arxiv.org/abs/2610.11823"
    year: 2026
    arxiv: "2610.11823"
    doi: null
see: ["1225-discovering-faster-matrix-multiplication-algorithms-with-reinf", "1231-alphaevolve-a-coding-agent-for-scientific-and-algorithmic-disc", "2267-finiteness-of-planar-central-configurations-of-five-bodies"]
---

# The rank of 3×3 matrix multiplication over F2 is 23

## One-sentence takeaway

Over the two-element field, no bilinear algorithm multiplies two 3×3 matrices with 22 multiplications, so Laderman's 1976 23-multiplication algorithm is optimal over F2 and for all integer-coefficient bilinear algorithms, with the search certificates checked by the Lean 4 kernel.

## Why it's lovely

Strassen's 7 for 2×2 was shown optimal half a century ago, but whether Laderman's 23 for 3×3 could be beaten has been open since 1976, and the F2 lower bound climbed 20, 21, 22 during 2026 alone. This closes the F2/integer case for good. It is also the cleanest example yet of the pattern Broadside cares about with agent-found and machine-searched results: a huge exhaustive search that emits certificates, and a proof whose final theorem rests only on Lean's three standard axioms. It is the lower-bound twin of the AlphaTensor and AlphaEvolve upper-bound searches (cards 1225, 1231), and the same author as the five-body card 2267.

## Key ideas

- **Substitution method with capacities.** For a subspace S of first factors, a length-r decomposition can have at most r − R(S) first factors in S; with r = 22 this caps how many first factors each subspace may hold. The paper raises Wang's bounds for 111 of his 496 subspace classes, most usefully R(S) ≥ 21 for a point spanned by a rank-one matrix, which forces the 22 first factors to be distinct.
- **A 27×27 flattening.** Each term contributes the rank of its first factor, so n1 + 2n2 + 3n3 ≥ 27; a Gram-matrix form of this identity rules out eight (n1, n2, n3) types.
- **Line exclusions.** If at least 14 first factors have rank one, no line in a certain 441-line orbit can carry two of them, though its capacity is 2.
- **Enumerate, then fail to complete.** All candidate sets of 22 first factors are listed up to the order-56,448 symmetry group, and an exact completion search shows none extends to a decomposition.
- **Two formal proofs.** One evaluates the largest checks as compiled code; in the other the kernel evaluates every check. Both build on Rudich and Rousseau's Lean formalisation (the ≥ 22 bound) and its block-algorithm reduction.
- **Consequence.** R_Z(⟨3,3,3⟩) = 23, and no recursive 3×3 integer-constant algorithm has an exponent below log₃ 23 ≈ 2.854.

## Caveats

Single-author preprint (17 pages, v2 12 Oct 2026). The result covers F2 and integer coefficients only: over characteristic-zero fields such as R and C the rank is still somewhere between 19 and 23, so a 22-multiplication algorithm with, say, rational non-integer coefficients is not ruled out. The proof is a large computation, and its trust rests on the Lean certificate checks and on the imported tables and reductions from prior work.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.11823
- PDF: https://arxiv.org/pdf/2610.11823
- Kernel-only Lean proof: https://github.com/tejasvi/rank333-f2-kernel
- First formal proof, programs and data: https://github.com/tejasvi/rank333-f2
- Archive: https://doi.org/10.5281/zenodo.23304897
