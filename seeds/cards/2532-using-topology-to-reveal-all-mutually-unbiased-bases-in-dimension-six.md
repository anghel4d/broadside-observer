---
title: "Using topology to reveal all mutually unbiased bases in dimension six"
authors:
  - "Mateo Cárdenes Wuttig"
  - "Joseph Tindall"
year: 2026
venue: "arXiv preprint (quant-ph)"
arxiv: "2611.06917"
doi: null
source: "https://arxiv.org/abs/2611.06917"
topics:
  - "mutually-unbiased-bases"
  - "complex-hadamard-matrices"
  - "topology"
  - "computer-assisted-proof"
  - "lean4"
  - "ai-assisted-math"
seed_rank: 2532
seed_batch: "curiosity-2026-11-09"
reviewed: "2026-11-09"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The maximum number of mutually unbiased bases in dimension six"
    url: "https://github.com/openai/math/blob/main/preprints/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Exact Fourier certificates for complex Hadamard matrices of order six"
    url: "https://github.com/openai/math/blob/main/preprints/Exact-Fourier-certificates-for-complex-Hadamard-matrices-of-order-six-September-24-2026/Exact-Fourier-certificates-for-complex-Hadamard-matrices-of-order-six-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A complete classification of complex Hadamard matrices of order six"
    url: "https://arxiv.org/abs/2608.18053"
    year: 2026
    arxiv: "2608.18053"
    doi: null
see:
  - "2121-exactly-three-mutually-unbiased-bases-in-dimension-six"
---

# Using topology to reveal all mutually unbiased bases in dimension six

## One-sentence takeaway

By proving that the space of all order-six complex Hadamard matrices except Tao's is connected, the authors reduce the problem to 2,775 interval-certified four-dimensional phase balls (plus one chart at the Fourier matrix) and classify every set of mutually unbiased bases in \(\mathbb{C}^6\): every triple is in the known two-parameter family or is the isolated Fourier triple, so no four MUBs exist, independently of OpenAI's earlier proof.

## Why it's lovely

Zauner's 1991 question gets a second, structurally different answer only weeks after the AI-generated one in card 2121, and this one explains more: it classifies all triples rather than just excluding quartets, which makes six the first non-prime-power dimension where all MUB sets are known. The key move is topological, not computational. Once the space is connected, a finite set of balls covers it as soon as each ball's boundary lies inside another ball, so a local certificate becomes a global theorem. The workflow is also worth noting for Broadside: the authors directed ChatGPT and Claude agents to search for a cover-based proof, then reviewed and simplified it. The reconstruction and connectedness are formalised in Lean, the exclusion inequalities are re-proved in Lean, and the interval certifiers are released, so nothing rests on OpenAI's certificates.

## Key ideas

- **Four-phase reconstruction.** Every non-Tao order-six complex Hadamard matrix is built from four phases fixing a dephased \(3\times3\) corner wherever a reconstruction invariant \(R(\theta)>0\); the Fourier matrix \(F_6\) is reached as a limit.
- **Connectedness.** The strict-seed region and the space of all non-Tao Hadamards are connected. A finite union of closed balls whose boundaries all lie in other balls' interiors therefore covers everything.
- **Certified cover.** 2,775 phase balls plus a chart around \(F_6\), checked with interval arithmetic in Arb and Julia, with exact arithmetic where needed.
- **Local exclusion.** Inside each ball, OpenAI-style graph-search tests (exclusion, normal-form localisation near the continuous family, symmetry) pin down every third basis. Tao's matrix admits no third basis, so all triples are classified.
- **Side result.** The method also gives an analytical proof of the Matolcsi–Ruzsa–Weiner Fourier-vanishing conjecture.

## Caveats

This is a computer-assisted proof. Lean covers the reconstruction, connectedness and the exclusion inequalities, while the ball cover and exclusion certificates are checked by separate interval-arithmetic programs, not inside Lean. It is a fresh preprint, not refereed, and the AI assistance is disclosed. Classification is up to standard equivalence. I read the abstract, introduction, Section II and the methods/data sections (paper with supplementary material, about 27k words).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.06917
- PDF: https://arxiv.org/pdf/2611.06917
- Code, certificates and Lean formalisation: https://github.com/JoeyT1994/NoFourMUBS
- Prior Hadamard classification: https://arxiv.org/abs/2608.18053
