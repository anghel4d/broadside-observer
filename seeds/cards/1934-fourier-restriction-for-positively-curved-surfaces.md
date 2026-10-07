---
title: "Fourier restriction for positively curved surfaces"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 077; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Elliptic-capacity-propagation-and-Fourier-restriction-to-the-sphere-September-24-2026/Elliptic-capacity-propagation-and-Fourier-restriction-to-the-sphere-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "unformalized"
seed_rank: 1934
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Elliptic capacity propagation and Fourier restriction to the sphere"
    url: "https://github.com/openai/math/blob/main/preprints/Elliptic-capacity-propagation-and-Fourier-restriction-to-the-sphere-September-24-2026/Elliptic-capacity-propagation-and-Fourier-restriction-to-the-sphere-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Diagonal Fourier extension for positively curved surfaces in three dimensions"
    url: "https://github.com/openai/math/blob/main/preprints/Diagonal-Fourier-extension-for-positively-curved-surfaces-in-three-dimensions-September-24-2026/Diagonal-Fourier-extension-for-positively-curved-surfaces-in-three-dimensions-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Fourier restriction for positively curved surfaces

## One-sentence takeaway

OpenAI's result family 077 (Real and complex analysis) claims: Proves the diagonal Fourier extension conjecture for positively curved surfaces in three dimensions.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): For every compact smooth positively curved surface $\Sigma\subset\mathbb R^3$, including surfaces with boundary, the extension operator is bounded from $L^p(\Sigma)$ to $L^p(\mathbb R^3)$ for every p > 3.
- *Elliptic capacity propagation and Fourier restriction to the sphere*: We prove the bounded-data Fourier restriction conjecture for the sphere in three dimensions: the Fourier extension operator maps $L^\infty(S^2)$ boundedly into $L^p(\mathbb R^3)$ for every p > 3. This is the full conjectured open range, and the threshold p = 3 is sharp.
- *Diagonal Fourier extension for positively curved surfaces in three dimensions*: We prove the diagonal Fourier extension conjecture for compact smooth positively curved surfaces $\Sigma\subset\mathbb R^3$, including surfaces with smooth boundary. For every $3\lt p\lt \infty$, the extension operator maps $L^p(\Sigma)$ boundedly into $L^p(\mathbb R^3)$. The compact paraboloid case also yields free Schrödinger local smoothing in two spatial dimensions for every $3\lt p\lt \infty$ and Sobolev order $s\gt 2-6/p$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Elliptic capacity propagation and Fourier restriction to the sphere](https://github.com/openai/math/blob/main/preprints/Elliptic-capacity-propagation-and-Fourier-restriction-to-the-sphere-September-24-2026/Elliptic-capacity-propagation-and-Fourier-restriction-to-the-sphere-September-24-2026.pdf)
- Manuscript: [Diagonal Fourier extension for positively curved surfaces in three dimensions](https://github.com/openai/math/blob/main/preprints/Diagonal-Fourier-extension-for-positively-curved-surfaces-in-three-dimensions-September-24-2026/Diagonal-Fourier-extension-for-positively-curved-surfaces-in-three-dimensions-September-24-2026.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
