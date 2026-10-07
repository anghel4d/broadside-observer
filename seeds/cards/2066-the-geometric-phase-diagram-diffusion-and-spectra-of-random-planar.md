---
title: "The geometric phase diagram, diffusion, and spectra of random planar maps"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 211; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Random-Walks-on-Critical-FK-Ising-Maps-and-Liouville-Brownian-Motion-October-5-2026/fk-ising-walk-limit.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2066
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Random Walks on Critical FK–Ising Maps and Liouville Brownian Motion"
    url: "https://github.com/openai/math/blob/main/preprints/Random-Walks-on-Critical-FK-Ising-Maps-and-Liouville-Brownian-Motion-October-5-2026/fk-ising-walk-limit.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Spectral convergence for critical FK–Ising planar maps"
    url: "https://github.com/openai/math/blob/main/preprints/Spectral-convergence-for-critical-FK-Ising-planar-maps-October-5-2026/spectral-convergence-critical-fk-ising-planar-maps.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Linear Clock for Random Walk on Tree-Weighted Planar Maps"
    url: "https://github.com/openai/math/blob/main/preprints/A-Linear-Clock-for-Random-Walk-on-Tree-Weighted-Planar-Maps-October-5-2026/linear-clock-random-walk-tree-weighted-planar-maps.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Canonical conformal limits of subcritical FK planar maps"
    url: "https://github.com/openai/math/blob/main/preprints/Canonical-conformal-limits-of-subcritical-FK-planar-maps-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The critical Liouville quantum sphere and geometric limits of FK maps at q=4"
    url: "https://github.com/openai/math/blob/main/preprints/The-critical-Liouville-quantum-sphere-and-geometric-limits-of-FK-maps-at-q-equals-4-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Metric-measure limits of subcritical FK and spanning-tree planar maps"
    url: "https://github.com/openai/math/blob/main/preprints/Metric-measure-limits-of-subcritical-FK-and-spanning-tree-planar-maps-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Brownian continuum random tree limits of finite Fortuin–Kasteleyn maps above four"
    url: "https://github.com/openai/math/blob/main/preprints/Brownian-continuum-random-tree-limits-of-finite-Fortuin-Kasteleyn-maps-above-four-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The geometric phase diagram, diffusion, and spectra of random planar maps

## One-sentence takeaway

OpenAI's result family 211 (Probability and statistical mechanics) claims: Critical Fortuin–Kasteleyn planar maps converge to Liouville quantum gravity spheres for $0\lt q\le4$ and to the Brownian continuum random tree for q > 4, establishing the surface-to-tree geometric transition.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For FK–Ising and spanning-tree-weighted maps, stationary random walks converge to Liouville Brownian motion on the limiting sphere. The FK–Ising spectral result also gives convergence of eigenvalues and heat traces, using the stated Brownian/LQG inputs.
- *Random Walks on Critical FK–Ising Maps and Liouville Brownian Motion*: We prove that stationary random walks on critical spherical FK–Ising planar maps converge to Liouville Brownian motion on the ordinary unit-area $\sqrt3$-quantum sphere, using the geometric and electrical results of the spectral companion. The walk chooses uniformly among all incident half-edges, retaining loops and multiple edges. With the corner measure as the stationary law, the deterministic time acceleration is exactly the number of map edges.
- *Spectral convergence for critical FK–Ising planar maps*: Using the conformal and metric-measure companion results and the stated Brownian/Liouville quantum gravity inputs, we prove spectral convergence for critical spherical FK–Ising maps to Liouville Brownian motion on the ordinary unit-area $\sqrt3$-quantum sphere. The discrete walk has total attempt rate one, uses every map edge including loops and multiplicities, and has the corner measure as its stationary law. Accelerating time by the number of map edges gives joint convergence of the metric-measure space, all ordered eigenvalues with multiplicities and padding, and the heat trace locally uniformly at strictly positive times.
- *A Linear Clock for Random Walk on Tree-Weighted Planar Maps*: We prove that stationary random walk on a planar map sampled with weight equal to its number of spanning trees converges to Liouville Brownian motion on the unit-area $\sqrt2$-Liouville quantum sphere. The convergence retains the conditional path law jointly with the measured metric space. The walk chooses uniformly among all incident half-edges and starts from the stationary degree measure.
- *Canonical conformal limits of subcritical FK planar maps*: For every fixed $0\lt q\lt 4$, we prove joint convergence of spherical Fortuin–Kasteleyn planar maps in their flag-triangle uniformization to the corresponding unit-area Liouville quantum gravity sphere decorated by an independent conformal loop ensemble. The convergence includes the area measure, deterministically rescaled graph distances between all vertex pairs, and the full nested interface collection, with interfaces converging uniformly up to reparameterization.
- *The critical Liouville quantum sphere and geometric limits of FK maps at q=4*: We construct the field and area law of the unit-area critical Liouville quantum sphere as a limit of ordinary subcritical quantum spheres, and equip it with its critical intrinsic metric. We then prove that spherical Fortuin–Kasteleyn planar maps at q = 4, embedded by their equilateral flag uniformizations, converge jointly to this sphere decorated by an independent nested conformal loop ensemble CLE4. With deterministic distance normalization, the convergence includes the area measure, the full embedded distance function, and every macroscopic interface through all positive integer edge counts.
- Plus 2 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/211.md): For every fixed $q>4$, the formalization proves the Brownian continuum-random-tree limit for critical finite Fortuin–Kasteleyn planar maps. After rescaling graph distances in an $n$-edge map by a constant depending on $q$ times $n^{-1/2}$ and using normalized degree measure, the metric-measure space converges in distribution to the Brownian continuum random tree in the Gromov–Hausdorff–Prokhorov topology.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Random Walks on Critical FK–Ising Maps and Liouville Brownian Motion](https://github.com/openai/math/blob/main/preprints/Random-Walks-on-Critical-FK-Ising-Maps-and-Liouville-Brownian-Motion-October-5-2026/fk-ising-walk-limit.pdf)
- Manuscript: [Spectral convergence for critical FK–Ising planar maps](https://github.com/openai/math/blob/main/preprints/Spectral-convergence-for-critical-FK-Ising-planar-maps-October-5-2026/spectral-convergence-critical-fk-ising-planar-maps.pdf)
- Manuscript: [A Linear Clock for Random Walk on Tree-Weighted Planar Maps](https://github.com/openai/math/blob/main/preprints/A-Linear-Clock-for-Random-Walk-on-Tree-Weighted-Planar-Maps-October-5-2026/linear-clock-random-walk-tree-weighted-planar-maps.pdf)
- Manuscript: [Canonical conformal limits of subcritical FK planar maps](https://github.com/openai/math/blob/main/preprints/Canonical-conformal-limits-of-subcritical-FK-planar-maps-September-24-2026/main.pdf)
- Manuscript: [The critical Liouville quantum sphere and geometric limits of FK maps at q=4](https://github.com/openai/math/blob/main/preprints/The-critical-Liouville-quantum-sphere-and-geometric-limits-of-FK-maps-at-q-equals-4-September-24-2026/main.pdf)
- Manuscript: [Metric-measure limits of subcritical FK and spanning-tree planar maps](https://github.com/openai/math/blob/main/preprints/Metric-measure-limits-of-subcritical-FK-and-spanning-tree-planar-maps-September-24-2026/main.pdf)
- Manuscript: [Brownian continuum random tree limits of finite Fortuin–Kasteleyn maps above four](https://github.com/openai/math/blob/main/preprints/Brownian-continuum-random-tree-limits-of-finite-Fortuin-Kasteleyn-maps-above-four-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/211.md
- Comparator statement (Brownian continuum-random-tree limit for finite FK maps): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FKCRT.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
