---
title: "No regular icosahedron has a rational point on every face: a proof checked in Lean"
authors:
  - "Mikhail Levit"
year: 2026
venue: "arXiv preprint (math.MG)"
arxiv: "2611.11577"
doi: null
source: "https://arxiv.org/abs/2611.11577"
topics:
  - "platonic-solids"
  - "galois-conjugation"
  - "exact-arithmetic"
  - "lean4"
  - "formalized"
  - "ai-assisted-math"
seed_rank: 2553
seed_batch: "curiosity-2026-11-11"
reviewed: "2026-11-11"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Can a regular icosahedron contain a rational point on each face? (MathOverflow 452847)"
    url: "https://mathoverflow.net/questions/452847"
    year: 2023
    arxiv: null
    doi: null
see:
  - "2531-a-diameter-one-set-in-r5-that-cannot-be-covered-by-six-diameter-one-balls"
  - "2532-using-topology-to-reveal-all-mutually-unbiased-bases-in-dimension-six"
---

# No regular icosahedron has a rational point on every face: a proof checked in Lean

## One-sentence takeaway

However you place, scale or rotate a regular icosahedron in \(\mathbb{R}^3\), at least one of its twenty closed faces contains no rational point; the proof swaps \(\sqrt5\) for \(-\sqrt5\) to turn a hypothetical solution into a complex orthogonal matrix, then rules that matrix out with 48 exact certificates over \(\mathbb{Z}[\varphi]\) that the Lean kernel checks itself.

## Why it's lovely

The question is a child's question with a grown-up answer. Tetrahedra, cubes, octahedra and even dodecahedra can all be placed to touch the rational lattice on every face, and the icosahedron alone cannot. The key move is a wild field automorphism of \(\mathbb{C}\) (which exists but cannot be written down) that conjugates the golden ratio and drags the problem into \(SO(3,\mathbb{C})\). From there it is honest exact arithmetic with no floating point and no Lipschitz bounds, which suits anyone who has fought robustness bugs in geometry code. It is also a clear record of a division of labour: the author posed and checked, OpenAI Codex built the argument, and Anthropic Claude built the Lean formalization and certificate generator.

## Key ideas

- **Centering.** If opposite faces both hold rational points, their midpoint argument puts a rational point \(sRm\) with \(m\) in the face, so only ten face pairs matter.
- **Galois swap.** Applying \(\tau(\sqrt5)=-\sqrt5\) turns a solution into \(T\in SO(3,\mathbb{C})\) for which no real combination \(\alpha\,\mathrm{Re}\,T+\beta\,\mathrm{Im}\,T\) separates ten face intervals.
- **Separation theorem.** For every such \(T\) some combination does separate; linear algebra reduces this to a compact parameter space covered by rational quaternion chart frames.
- **Exact certificates.** 48 cells, each an exact polynomial inequality over \(\mathbb{Z}[\varphi]\), checked by `decide +kernel` (no `native_decide`); the trusted base is the kernel plus 58 lines of definitions.
- **Why boundaries matter.** A known example puts rational points on all twenty face *planes*, so any proof must use the closed triangles, unlike the planar pentagon analogue.

## Caveats

A narrow, recreational theorem with no further consequences claimed. The argument was produced by AI systems under the author's direction; Lean checks the theorem, but the paper's exposition has not been refereed. I read the full paper (8 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.11577
- PDF: https://arxiv.org/pdf/2611.11577
- MathOverflow question: https://mathoverflow.net/questions/452847
- Lean formalization: https://github.com/MikhailLevit1987/icosahedron-rational-faces
