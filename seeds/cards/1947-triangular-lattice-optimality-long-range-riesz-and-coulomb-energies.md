---
title: "Triangular-lattice optimality, long-range Riesz and Coulomb energies, and spherical logarithmic energy"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 090; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-atomic-certificate-for-triangular-lattice-universal-optimality-September-26-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1947
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An atomic certificate for triangular-lattice universal optimality"
    url: "https://github.com/openai/math/blob/main/preprints/An-atomic-certificate-for-triangular-lattice-universal-optimality-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Universal optimality of the triangular lattice"
    url: "https://github.com/openai/math/blob/main/preprints/Universal-optimality-of-the-triangular-lattice-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A sharp Fourier certificate for planar circle packing"
    url: "https://github.com/openai/math/blob/main/preprints/A-sharp-Fourier-certificate-for-planar-circle-packing-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Triangular minimality for planar Coulomb renormalized energy"
    url: "https://github.com/openai/math/blob/main/preprints/Triangular-minimality-for-planar-Coulomb-renormalized-energy-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Triangular-lattice optimality, long-range Riesz and Coulomb energies, and spherical logarithmic energy

## One-sentence takeaway

OpenAI's result family 090 (Convex and metric geometry) claims: Proves that the triangular lattice minimizes the lower limit of energy per particle for every nonnegative completely monotone potential of squared distance among locally finite planar configurations of centered-disk density one.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): It also minimizes unit-background renormalized Riesz energies for $0\lt s\lt 2$ and Coulomb energy, resolving Sandier–Serfaty and the two-dimensional Brauchart–Hardin–Saff conjecture on the linear term of optimal spherical logarithmic energy.
- *An atomic certificate for triangular-lattice universal optimality*: We prove that the density-one triangular lattice minimizes the lower energy per particle for every nonnegative completely monotone function of squared distance, among all locally finite planar configurations of centered disk density one. The comparison includes infinite energies. The proof constructs sharp Gaussian Fourier minorants using an atomic interpolation certificate.
- *Universal optimality of the triangular lattice*: We prove universal energy minimality for the triangular lattice in the plane. Among locally finite configurations of centered density one, it minimizes the lower limit of centered-ball energy averages for every nonnegative completely monotone function of squared distance, including when the energy is infinite. We also prove triangular minimality for planar logarithmic and Riesz renormalized energies, with $0\lt s\lt 2$ in the Riesz case, and the corresponding jellium minima.
- *A sharp Fourier certificate for planar circle packing*: We resolve the planar Cohn–Elkies sharpness conjecture: the two-point Fourier bound attains the optimal circle-packing density $\pi/(2\sqrt3)$. We construct a radial Schwartz certificate and prove its global sign conditions using rigorous interval arithmetic and analytic estimates. The same certificate recovers the classical uniqueness of the triangular packing among periodic equality cases.
- *Triangular minimality for planar Coulomb renormalized energy*: We prove the Sandier–Serfaty conjecture: the triangular lattice of covolume one minimizes planar Coulomb renormalized energy over all admissible curl-free fields with a unit uniform background. Combined with Bétermin and Sandier's asymptotic formula, this also proves the Brauchart–Hardin–Saff conjecture for the linear term of optimal ordered-pair logarithmic energy on the unit two-sphere. The proof uses a direct Voronoi-cell comparison with rigorous interval arithmetic.
- Lean scope (lean/docs/090.md): The formalization proves that the density-one triangular lattice minimizes lower energy per particle among all locally finite planar configurations of centered-disk density one, for every nonnegative completely monotone function of squared distance. Infinite energies are allowed in the comparison.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The separate uniqueness statement for periodic equality cases is outside this selected theorem.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An atomic certificate for triangular-lattice universal optimality](https://github.com/openai/math/blob/main/preprints/An-atomic-certificate-for-triangular-lattice-universal-optimality-September-26-2026/paper.pdf)
- Manuscript: [Universal optimality of the triangular lattice](https://github.com/openai/math/blob/main/preprints/Universal-optimality-of-the-triangular-lattice-September-23-2026/paper.pdf)
- Manuscript: [A sharp Fourier certificate for planar circle packing](https://github.com/openai/math/blob/main/preprints/A-sharp-Fourier-certificate-for-planar-circle-packing-September-23-2026/paper.pdf)
- Manuscript: [Triangular minimality for planar Coulomb renormalized energy](https://github.com/openai/math/blob/main/preprints/Triangular-minimality-for-planar-Coulomb-renormalized-energy-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/090.md
- Comparator statement (Sharp Gaussian minorants from an atomic certificate): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/AtomicGaussian.lean
- Comparator statement (Universal energy minimality of the triangular lattice): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TriangularEnergy.lean
- Comparator statement (Gaussian Fourier minorants with their construction): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TriangularGaussian.lean
- Comparator statement (Sharp Fourier certificate for planar circle packing): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PlanarPacking.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
