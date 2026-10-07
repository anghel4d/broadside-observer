---
title: "Critical and near-critical XY scaling and BKT universality"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 216; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-critical-logarithmic-correction-for-the-planar-XY-model-October-5-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "unformalized"
seed_rank: 2071
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "The critical logarithmic correction for the planar XY model"
    url: "https://github.com/openai/math/blob/main/preprints/The-critical-logarithmic-correction-for-the-planar-XY-model-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Critical Center Magnetization in the Planar XY Model"
    url: "https://github.com/openai/math/blob/main/preprints/Critical-Center-Magnetization-in-the-Planar-XY-Model-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Critical Spin Field of the Planar XY Model"
    url: "https://github.com/openai/math/blob/main/preprints/The-Critical-Spin-Field-of-the-Planar-XY-Model-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Essential Singularity of the Correlation Length in the Planar XY Model"
    url: "https://github.com/openai/math/blob/main/preprints/Essential-Singularity-of-the-Correlation-Length-in-the-Planar-XY-Model-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The critical correlation exponent of the planar XY model"
    url: "https://github.com/openai/math/blob/main/preprints/The-critical-correlation-exponent-of-the-planar-XY-model-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "BKT universality for height and planar spin fields"
    url: "https://github.com/openai/math/blob/main/preprints/BKT-universality-for-height-and-planar-spin-fields-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Critical and near-critical XY scaling and BKT universality

## One-sentence takeaway

OpenAI's result family 216 (Probability and statistical mechanics) claims: For the square-lattice nearest-neighbor cosine XY model, proves critical axis correlations $C_{\beta_c}(r)\sim Ar^{-1/4}(\log r)^{1/8}$ and the Berezinskii–Kosterlitz–Thouless essential singularity $\sqrt{\beta_c-\beta}\log\xi(\beta)\to B$, with $A,B\gt 0$ after the free-box thermodynamic limit.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): For finite square-symmetric interactions containing nearest neighbors, discrete Gaussian heights converge to Gaussian fields throughout the rough phase, including its threshold, along geometric torus sizes. Critical center-magnetization and spin-field conclusions retain their stated height, renormalization, and field-input assumptions.
- *The critical logarithmic correction for the planar XY model*: We prove the critical logarithmic correction for the nearest-neighbor cosine XY model on the square lattice. Let $C_{b_c}(r)$ be the two-point correlation at critical inverse temperature, obtained by taking the free-box thermodynamic limit while the two sites remain r lattice steps apart along a coordinate axis. Then

$\displaystyle C_{b_c}(r)=B_{\mathrm{XY}}r^{-1/4}(\log r)^{1/8}(1+o(1)), \qquad B_{\mathrm{XY}}\in(0,\infty),$

as $r\to\infty$.
- *Critical Center Magnetization in the Planar XY Model*: Assuming the stated critical-height, local-renormalization, and spin-field inputs from the companion papers, we determine the center magnetization of the planar XY model in a square with aligned boundary spins at its mass-defined critical threshold. As $n\to\infty$, the magnetization is $A_{\mathrm{XY}}n^{-1/8}(\log n)^{1/16}(1+o(1))$, where $A_{\mathrm{XY}}$ is a finite, strictly positive model-specific constant.
- *The Critical Spin Field of the Planar XY Model*: Using the companion critical Bessel-height and pin-limit theorems, we prove that at the mass-defined critical inverse temperature of the nearest-neighbor XY model on the square lattice, the spin field on a square with boundary angles fixed to zero converges along the full sequence to the full-variance imaginary exponential of a zero-Dirichlet Gaussian free field with stiffness $2/\pi$. The normalization uses the exact center magnetization and the lattice Green-function factor. Convergence holds in law in $H^{-3}_{\mathrm{loc}}((-1,1)^2)$; all mixed moments and joint laws of fields smeared against smooth compactly supported test functions in $(-1,1)^2$ converge as well.
- *Essential Singularity of the Correlation Length in the Planar XY Model*: We prove the Berezinskii–Kosterlitz–Thouless essential singularity for the correlation length of the nearest-neighbor cosine XY model on the square lattice. Let $m(b)$ be the mass obtained by taking first the free-box thermodynamic limit and then the separation limit along a coordinate axis. As the inverse temperature b approaches bc from the massive side,

$\displaystyle \sqrt{b_c-b}\log\frac{1}{m(b)} \longrightarrow A_{\mathrm{XY}},$

where $A_{\mathrm{XY}}$ is a finite, strictly positive model-specific constant.
- *The critical correlation exponent of the planar XY model*: For the ordinary nearest-neighbor XY model on the square lattice, we prove the Berezinskii–Kosterlitz–Thouless prediction that the critical spin-correlation exponent is 1/4. More precisely, at the mass-defined critical inverse temperature, the infinite-volume correlation is $n^{-1/4+o(1)}$. The infinite-volume limit through free square boxes is taken before the separation limit.
- Plus 1 more companion manuscripts in this family; see Links.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The critical logarithmic correction for the planar XY model](https://github.com/openai/math/blob/main/preprints/The-critical-logarithmic-correction-for-the-planar-XY-model-October-5-2026/paper.pdf)
- Manuscript: [Critical Center Magnetization in the Planar XY Model](https://github.com/openai/math/blob/main/preprints/Critical-Center-Magnetization-in-the-Planar-XY-Model-October-5-2026/paper.pdf)
- Manuscript: [The Critical Spin Field of the Planar XY Model](https://github.com/openai/math/blob/main/preprints/The-Critical-Spin-Field-of-the-Planar-XY-Model-October-5-2026/paper.pdf)
- Manuscript: [Essential Singularity of the Correlation Length in the Planar XY Model](https://github.com/openai/math/blob/main/preprints/Essential-Singularity-of-the-Correlation-Length-in-the-Planar-XY-Model-October-5-2026/paper.pdf)
- Manuscript: [The critical correlation exponent of the planar XY model](https://github.com/openai/math/blob/main/preprints/The-critical-correlation-exponent-of-the-planar-XY-model-September-24-2026/paper.pdf)
- Manuscript: [BKT universality for height and planar spin fields](https://github.com/openai/math/blob/main/preprints/BKT-universality-for-height-and-planar-spin-fields-September-24-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
