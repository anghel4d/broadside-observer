---
title: "Area laws and tensor networks for two-dimensional gapped systems"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 265; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "unformalized"
seed_rank: 2120
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "A two-dimensional area law from a global spectral gap"
    url: "https://github.com/openai/math/blob/main/preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Polynomial PEPS approximation of gapped square-grid ground states"
    url: "https://github.com/openai/math/blob/main/preprints/Polynomial-PEPS-approximation-of-gapped-square-grid-ground-states-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Area laws and tensor networks for two-dimensional gapped systems

## One-sentence takeaway

OpenAI's result family 265 (Mathematical physics) claims: Proves an entropy area law for unique ground states of finite-range Hamiltonians on arbitrary finite induced square-lattice domains, using only a uniform full-system spectral gap and bounds on the local interactions.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): On open $L\times L$ squares, uniformly gapped nearest-neighbor ground states also admit projected entangled-pair state approximations with polynomial bond dimension and global vector error at most L−1.
- *A two-dimensional area law from a global spectral gap*: We prove an entropy area law for the unique ground state of a finite-range Hamiltonian on any finite induced subgraph of the square lattice. A lower bound on the spectral gap of the full Hamiltonian and fixed bounds on the local dimension, interaction range, and interaction strength suffice. For every set of sites, its entanglement entropy is bounded by a constant times the number of edges crossing its boundary, independently of the size and shape of the domain.
- *Polynomial PEPS approximation of gapped square-grid ground states*: We prove that the unique ground state of a uniformly gapped nearest-neighbor Hamiltonian on an $L\times L$ square lattice admits a projected entangled-pair state approximation with bond dimension polynomial in L and global vector error at most L−1 after normalization. Only the gap of the full Hamiltonian is assumed. The result is an existence theorem, with constants uniform over Hamiltonians of fixed local dimension, interaction strength, and gap.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [A two-dimensional area law from a global spectral gap](https://github.com/openai/math/blob/main/preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf)
- Manuscript: [Polynomial PEPS approximation of gapped square-grid ground states](https://github.com/openai/math/blob/main/preprints/Polynomial-PEPS-approximation-of-gapped-square-grid-ground-states-September-24-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
