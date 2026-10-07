---
title: "Bloch's law, its lattice correction, and the spherical magnetization law"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 271; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Blochs-Law-for-Finite-Range-Heisenberg-Ferromagnets-in-Three-Dimensions-October-5-2026/bloch-law-heisenberg.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2126
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Bloch's Law for Finite-Range Heisenberg Ferromagnets in Three Dimensions"
    url: "https://github.com/openai/math/blob/main/preprints/Blochs-Law-for-Finite-Range-Heisenberg-Ferromagnets-in-Three-Dimensions-October-5-2026/bloch-law-heisenberg.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The first lattice correction to Bloch's law"
    url: "https://github.com/openai/math/blob/main/preprints/The-first-lattice-correction-to-Blochs-law-October-5-2026/first-lattice-correction-bloch-law.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The spherical magnetization law for the three-dimensional quantum Heisenberg ferromagnet"
    url: "https://github.com/openai/math/blob/main/preprints/The-spherical-magnetization-law-for-the-three-dimensional-quantum-Heisenberg-ferromagnet-October-5-2026/spherical-magnetization.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Spontaneous magnetization in the quantum Heisenberg ferromagnet"
    url: "https://github.com/openai/math/blob/main/preprints/Spontaneous-magnetization-in-the-quantum-Heisenberg-ferromagnet-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Bloch's law, its lattice correction, and the spherical magnetization law

## One-sentence takeaway

OpenAI's result family 271 (Mathematical physics) claims: Proves Bloch's T3/2 law with its exact coefficient for three-dimensional quantum Heisenberg ferromagnets at every positive quantum spin, allowing nonnegative symmetric finite-range couplings whose support generates ℤ3.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The thermodynamic limit precedes the zero-field derivative and low-temperature limit. The family also proves spontaneous magnetization for nearest-neighbor models in every dimension d ≥ 3 and determines the first lattice correction for three-dimensional nearest-neighbor couplings.
- *Bloch's Law for Finite-Range Heisenberg Ferromagnets in Three Dimensions*: We prove Bloch's T3/2 law for the spontaneous magnetization of three-dimensional quantum Heisenberg ferromagnets at every fixed positive quantum spin. The result holds for every nonnegative symmetric finite-range interaction whose support generates ℤ3, including spatially anisotropic couplings. The leading magnetization deficit has the exact coefficient determined by the determinant of the quadratic one-magnon dispersion.
- *The first lattice correction to Bloch's law*: We prove the first lattice correction to Bloch's law for the three-dimensional nearest-neighbor quantum Heisenberg ferromagnet at every fixed spin $S=\tfrac12,1,\tfrac32,\ldots$. The spontaneous-magnetization deficit agrees with the full ideal-magnon density up to $o(\beta^{-5/2})$. In addition to the leading Bloch term, this gives the correction $3\zeta(5/2)(\beta S)^{-5/2}/(128\pi^{3/2})$.
- *The spherical magnetization law for the three-dimensional quantum Heisenberg ferromagnet*: We prove the spherical magnetization law for the three-dimensional nearest-neighbor isotropic quantum Heisenberg ferromagnet at every fixed positive quantum spin and every sufficiently low fixed positive temperature. As the even periodic cubes grow, the symmetric zero-field magnetization converges in moments to a uniform direction with a deterministic positive magnitude. This magnitude equals the right derivative at zero field of the infinite-volume pressure.
- *Spontaneous magnetization in the quantum Heisenberg ferromagnet*: For every dimension d ≥ 3 and every spin $S\in\{\frac12,1,\frac32,\ldots\}$, we prove that the nearest-neighbor isotropic quantum Heisenberg ferromagnet has a translation-invariant, spontaneously magnetized equilibrium state at every sufficiently low positive temperature. The same state satisfies the KMS condition for the zero-field dynamics and has magnetization at least $S/4$. This resolves the low-temperature ordering problem in the spontaneous-magnetization formulation.
- Lean scope (lean/docs/271.md): The formalization proves spontaneous magnetization for the nearest-neighbor isotropic quantum Heisenberg ferromagnet on $\mathbb Z^d$ for every $d\ge3$ and every spin $S\in\{\tfrac12,1,\tfrac32,\ldots\}$. At every sufficiently low positive temperature, it constructs a translation-invariant equilibrium state satisfying the KMS condition for the zero-field dynamics and having magnetization at least $S/4$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Bloch's Law for Finite-Range Heisenberg Ferromagnets in Three Dimensions](https://github.com/openai/math/blob/main/preprints/Blochs-Law-for-Finite-Range-Heisenberg-Ferromagnets-in-Three-Dimensions-October-5-2026/bloch-law-heisenberg.pdf)
- Manuscript: [The first lattice correction to Bloch's law](https://github.com/openai/math/blob/main/preprints/The-first-lattice-correction-to-Blochs-law-October-5-2026/first-lattice-correction-bloch-law.pdf)
- Manuscript: [The spherical magnetization law for the three-dimensional quantum Heisenberg ferromagnet](https://github.com/openai/math/blob/main/preprints/The-spherical-magnetization-law-for-the-three-dimensional-quantum-Heisenberg-ferromagnet-October-5-2026/spherical-magnetization.pdf)
- Manuscript: [Spontaneous magnetization in the quantum Heisenberg ferromagnet](https://github.com/openai/math/blob/main/preprints/Spontaneous-magnetization-in-the-quantum-Heisenberg-ferromagnet-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/271.md
- Comparator statement (Low-temperature spontaneous magnetization for every positive spin): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Heisenberg.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/spontaneous-magnetization-quantum-heisenberg-ferromagnet.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
