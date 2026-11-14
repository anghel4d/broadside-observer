---
title: "Slicing a Doughnut at Random"
authors:
  - "Steven Finch"
year: 2026
venue: "arXiv preprint (math.PR)"
arxiv: "2611.15546"
doi: null
source: "https://arxiv.org/abs/2611.15546"
topics:
  - "integral-geometry"
  - "geometric-probability"
  - "crofton-measure"
  - "torus"
  - "exposition"
seed_rank: 2595
seed_batch: "curiosity-2026-11-15"
reviewed: "2026-11-15"
pool: "maths-foundations"
relevance_score: 7
cites: []
see:
  - "2593-the-minimum-size-of-the-3-dimensional-torus"
---

# Slicing a Doughnut at Random

## One-sentence takeaway

Steven Finch asks how likely a random plane through a solid torus is to cut a single disk, and how fat the doughnut should be to make that most likely, and solves it with calculus after carefully building what "random plane" must mean.

## Why it's lovely

It is a small, honest essay about the trap in every geometric-probability question (Bertrand's paradox): the answer depends on the measure, so the paper first constructs the invariant measure on lines in the plane and planes in space, then does the calculation. It also tells on itself: one tempting wrong turn appeared in print and turns out to be a correct answer to the 2D cousin (the doughnut's shadow), and the author's own first attempt "luckily stayed in a drawer." The bridge to the workbench is real: the invariant measure on lines and planes is the same Crofton-style measure behind uniform ray sampling, random-plane estimators of area and visibility, and stochastic slicing in rendering.

## Key ideas

- **Define the randomness first.** Motion-invariant measures on lines (planar) and planes (spatial), built from scratch.
- **The 3D question.** Probability that a plane meeting a solid torus slices it in one disk, and the aspect ratio that maximises it.
- **The 2D cousin.** The doughnut's shadow problem, which the published wrong turn actually solves.
- **Method.** Nothing beyond calculus once the measure is fixed.

## Caveats

Expository and elementary; no new technique. I read the abstract only and do not quote the optimal ratio, which the abstract does not state.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.15546
- PDF: https://arxiv.org/pdf/2611.15546
