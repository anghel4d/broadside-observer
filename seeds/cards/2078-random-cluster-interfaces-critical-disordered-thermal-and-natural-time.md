---
title: "Random-cluster interfaces: critical, disordered, thermal, and natural-time scaling"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 223; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Square-lattice-FK-interfaces-and-nested-loops-for-1-leq-q-lt-4-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "unformalized"
seed_rank: 2078
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Square-lattice FK interfaces and nested loops for 1 <= q < 4"
    url: "https://github.com/openai/math/blob/main/preprints/Square-lattice-FK-interfaces-and-nested-loops-for-1-leq-q-lt-4-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Self-dual random-cluster interfaces below one"
    url: "https://github.com/openai/math/blob/main/preprints/Self-dual-random-cluster-interfaces-below-one-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Quenched SLE Universality for Weakly Disordered FK–Ising Interfaces"
    url: "https://github.com/openai/math/blob/main/preprints/Quenched-SLE-Universality-for-Weakly-Disordered-FK-Ising-Interfaces-October-5-2026/quenched-fk-ising.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Thermal FK–Ising interfaces and massive SLE"
    url: "https://github.com/openai/math/blob/main/preprints/Thermal-FK-Ising-interfaces-and-massive-SLE-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Natural Occupation Measures for Critical Square-Lattice FK Interfaces"
    url: "https://github.com/openai/math/blob/main/preprints/Natural-Occupation-Measures-for-Critical-Square-Lattice-FK-Interfaces-October-5-2026/natural-occupation-measures-critical-square-lattice-fk-interfaces.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Conformal Limits of Critical Square-Lattice Random-Cluster Interfaces"
    url: "https://github.com/openai/math/blob/main/preprints/Conformal-Limits-of-Critical-Square-Lattice-Random-Cluster-Interfaces-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Random-cluster interfaces: critical, disordered, thermal, and natural-time scaling

## One-sentence takeaway

OpenAI's result family 223 (Probability and statistical mechanics) claims: Proves chordal SLEκ limits for critical square-lattice random-cluster interfaces for $0\lt q\le4$, with $\kappa=4\pi/\arccos(-\sqrt q/2)$: bounded Jordan domains are allowed for q ≥ 1, and smooth Jordan domains for q < 1, under the stated marked-boundary approximations.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): For $1\le q\le4$, complete nested plane loops converge to CLEκ.
- *Square-lattice FK interfaces and nested loops for 1 <= q < 4*: For every fixed $1\le q\lt 4$, critical square-lattice random-cluster Dobrushin interfaces converge as ordered curves to chordal $\mathop{\mathrm{SLE}}\nolimits _{\kappa(q)}$, where $\kappa(q)=4\pi/\arccos(-\sqrt q/2)$, confirming the Rohde–Schramm prediction in this parameter range. This holds in every bounded Jordan domain under uniform marked boundary approximation. The complete nested plane loop collections converge to whole-plane $\mathop{\mathrm{CLE}}\nolimits _{\kappa(q)}$ in a spherical matching topology retaining multiplicities and traversals.
- *Self-dual random-cluster interfaces below one*: For every fixed $0\lt q\lt 1$, we prove that the Dobrushin interface of the square-lattice random-cluster model at its self-dual parameter converges to chordal SLEκ, where $\kappa=4\pi/\arccos(-\sqrt q/2)\in(6,8)$. The approximating domains are simple closed nearest-neighbor lattice polygons with distinct marked vertices, whose marked boundary parametrizations converge uniformly to those of a bounded smooth Jordan domain. Convergence holds along the full mesh sequence in the uniform metric on oriented curves modulo increasing reparametrization.
- *Quenched SLE Universality for Weakly Disordered FK–Ising Interfaces*: We prove that critical FK–Ising interfaces with sufficiently weak, symmetric, independent two-valued bond disorder converge to chordal SLE16/3. The disorder strength is fixed as the mesh tends to zero, and convergence of the conditional curve laws holds in probability over the environment.
- *Thermal FK–Ising interfaces and massive SLE*: We prove convergence of thermal FK–Ising interfaces, for every fixed nonzero mass of either sign, on uniformly angle-bounded isoradial lattices in bounded simply connected domains. The limit is independent of the lattice and the admissible domain approximation. For positive mass it is the unique massive SLE$_{16/3}$ law with locally finite-energy drift prescribed by a massive boundary value problem; negative mass follows by duality and reversal.
- *Natural Occupation Measures for Critical Square-Lattice FK Interfaces*: We prove that the rescaled counting measure of a critical square-lattice Fortuin–Kasteleyn Dobrushin interface in the unit square converges to the Minkowski-content measure of its Schramm–Loewner limit, for every fixed cluster weight $1\le q\lt 4$. A single deterministic constant times the predicted power of the mesh gives the normalization. Convergence is joint with the ordered curve and includes the total mass, giving the scaling limit of the interface's total number of steps.
- Plus 1 more companion manuscripts in this family; see Links.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Square-lattice FK interfaces and nested loops for 1 <= q < 4](https://github.com/openai/math/blob/main/preprints/Square-lattice-FK-interfaces-and-nested-loops-for-1-leq-q-lt-4-September-23-2026/paper.pdf)
- Manuscript: [Self-dual random-cluster interfaces below one](https://github.com/openai/math/blob/main/preprints/Self-dual-random-cluster-interfaces-below-one-September-23-2026/paper.pdf)
- Manuscript: [Quenched SLE Universality for Weakly Disordered FK–Ising Interfaces](https://github.com/openai/math/blob/main/preprints/Quenched-SLE-Universality-for-Weakly-Disordered-FK-Ising-Interfaces-October-5-2026/quenched-fk-ising.pdf)
- Manuscript: [Thermal FK–Ising interfaces and massive SLE](https://github.com/openai/math/blob/main/preprints/Thermal-FK-Ising-interfaces-and-massive-SLE-October-5-2026/paper.pdf)
- Manuscript: [Natural Occupation Measures for Critical Square-Lattice FK Interfaces](https://github.com/openai/math/blob/main/preprints/Natural-Occupation-Measures-for-Critical-Square-Lattice-FK-Interfaces-October-5-2026/natural-occupation-measures-critical-square-lattice-fk-interfaces.pdf)
- Manuscript: [Conformal Limits of Critical Square-Lattice Random-Cluster Interfaces](https://github.com/openai/math/blob/main/preprints/Conformal-Limits-of-Critical-Square-Lattice-Random-Cluster-Interfaces-October-5-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
