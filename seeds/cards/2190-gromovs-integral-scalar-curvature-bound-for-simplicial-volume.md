---
title: "Gromov’s integral scalar-curvature bound for simplicial volume"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 335; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-integral-scalar-curvature-bound-for-real-simplicial-volume-October-5-2026/v126-proof.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "unformalized"
seed_rank: 2190
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "An integral scalar curvature bound for real simplicial volume"
    url: "https://github.com/openai/math/blob/main/preprints/An-integral-scalar-curvature-bound-for-real-simplicial-volume-October-5-2026/v126-proof.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Positive scalar curvature forces rational inessentiality"
    url: "https://github.com/openai/math/blob/main/preprints/Positive-scalar-curvature-forces-rational-inessentiality-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Gromov’s integral scalar-curvature bound for simplicial volume

## One-sentence takeaway

OpenAI's result family 335 (Differential geometry) claims: Proves $\int_M(\mathrm{Scal}_g^-)^{n/2}\,dV_g\ge a_n\lVert M\rVert$ for every closed connected oriented smooth n-manifold, n ≥ 3, and every smooth metric, with $a_n\gt 0$ depending only on dimension.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Here $\mathrm{Scal}_g^-=\max\{0,-\mathrm{Scal}_g\}$ and $\lVert M\rVert$ is real simplicial volume. Also proves rational inessentiality under positive scalar curvature, resolving the Gromov–Lawson conjecture; every nonnegative-scalar-curvature metric on a closed aspherical manifold is flat.
- *An integral scalar curvature bound for real simplicial volume*: We prove the integral scalar-curvature inequality proposed by Gromov. For every dimension n ≥ 3, there is a constant $a_n\gt 0$, depending only on n, such that

$\displaystyle \int_M(\mathop{\mathrm{Scal}}\nolimits _g^-)^{n/2}\,dV_g\ge a_n\|M\|$

for every closed connected oriented smooth n-manifold M and every smooth Riemannian metric g. Here $\mathop{\mathrm{Scal}}\nolimits _g^-:=\max\{0,-\mathop{\mathrm{Scal}}\nolimits _g\}$, and $\|M\|$ is real simplicial volume.
- *Positive scalar curvature forces rational inessentiality*: We prove that every closed connected oriented smooth manifold admitting strictly positive scalar curvature is rationally inessential: its rational fundamental class maps to zero under the classifying map. No spin or fundamental-group hypothesis is needed, and there is no upper dimension bound. This proves the Gromov–Lawson aspherical conjecture; moreover, every nonnegative-scalar-curvature metric on a closed aspherical manifold is flat.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [An integral scalar curvature bound for real simplicial volume](https://github.com/openai/math/blob/main/preprints/An-integral-scalar-curvature-bound-for-real-simplicial-volume-October-5-2026/v126-proof.pdf)
- Manuscript: [Positive scalar curvature forces rational inessentiality](https://github.com/openai/math/blob/main/preprints/Positive-scalar-curvature-forces-rational-inessentiality-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
