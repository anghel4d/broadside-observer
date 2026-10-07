---
title: "The quasi-Riemann hypothesis"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 003; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1863
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane $\\Re s\\gt 7/8$"
    url: "https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Quasi-Riemann Hypothesis (alternate 11/12 proof)"
    url: "https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Uniform exclusion of Landau–Siegel zeros"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The quasi-Riemann hypothesis

## One-sentence takeaway

OpenAI's result family 003 (Number theory) claims: Proves that every Dirichlet L-function, including $\zeta(s)$, is zero-free in $\Re s\gt 7/8$, resolving the quasi-Riemann hypothesis.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The same half-plane is zero-free for every finite-order Hecke L-function over $\mathbb Q(\sqrt{-3})$. A companion gives a different proof of the zero-free half-plane $\Re s\gt 11/12$.
- *The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane $\Re s\gt 7/8$*: We prove that all finite-order Hecke L-functions over $\mathbb Q(\sqrt{-3})$ and all Dirichlet L-functions are zero-free in the half-plane $\Re s\gt 7/8$, with the principal pole at s = 1 allowed. In particular, the Riemann zeta function is zero-free in this half-plane, proving the quasi-Riemann hypothesis.
- *The Quasi-Riemann Hypothesis (alternate 11/12 proof)*: We establish the quasi-Riemann hypothesis by proving that every Dirichlet L-function, including Riemann's zeta function, has no zeros in the half-plane $\mathop{\mathrm{Re}}\nolimits s\gt 11/12$. More generally, we prove the same zero-free half-plane for every finite-order Hecke L-function over $K=\mathbb Q(\sqrt{-3})$. In particular, this rules out the existence of Landau–Siegel zeros.
- *Uniform exclusion of Landau–Siegel zeros*: We prove the uniform exclusion of Landau–Siegel zeros. There is an absolute constant c > 0 such that every real zero $\beta\in(0,1)$ of every primitive nonprincipal real Dirichlet L-function of conductor q ≥ 3 satisfies $(1-\beta)\log q\ge c$.
- Lean scope (lean/docs/003.md): The quasi-Riemann hypothesis asks for a fixed zero-free half-plane $\Re s>\theta$ with $\theta<1$. The formalization gives $\theta=7/8$ for the Riemann zeta function and every Dirichlet $L$-function, uniformly over all positive moduli and all characters.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane $\Re s\gt 7/8$](https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf)
- Manuscript: [The Quasi-Riemann Hypothesis (alternate 11/12 proof)](https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf)
- Manuscript: [Uniform exclusion of Landau–Siegel zeros](https://github.com/openai/math/blob/main/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/003.md
- Comparator statement (Riemann zeta $7/8$ bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/QuasiRiemannHypothesis.lean
- Comparator statement (Dirichlet $L$-function $7/8$ bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DirichletSevenEighths.lean
- Comparator statement (Finite-order Hecke $L$-function $7/8$ bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HeckeSevenEighths.lean
- Comparator statement (Uniform real-zero gap): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SiegelZeros.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
