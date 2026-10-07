---
title: "Weak MTW curvature gives convexity and regular optimal transport"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 360; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Global-Support-and-Convex-Injectivity-Domains-under-Weak-MTW-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2215
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Global Support and Convex Injectivity Domains under Weak MTW"
    url: "https://github.com/openai/math/blob/main/preprints/Global-Support-and-Convex-Injectivity-Domains-under-Weak-MTW-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Uniform Bi-Holder Transport from Weak MTW"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-Bi-Holder-Transport-from-Weak-MTW-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Weak MTW curvature gives convexity and regular optimal transport

## One-sentence takeaway

OpenAI's result family 360 (Differential geometry) claims: On every closed connected Riemannian manifold of dimension at least two satisfying weak Ma–Trudinger–Wang curvature, all tangent injectivity domains are convex, resolving Villani’s conjecture in this setting.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For squared-distance transport between measurable probability densities bounded above and away from zero, the optimal map and its inverse are Hölder continuous.
- *Global Support and Convex Injectivity Domains under Weak MTW*: We prove that weak Ma–Trudinger–Wang curvature on a smooth, connected, compact Riemannian manifold of dimension at least two without boundary implies convexity of every tangent injectivity domain, resolving Villani's conjecture in this setting. Conjugate cut points are allowed. More generally, every ordinary subgradient of a squared-distance cost potential is a minimizing velocity with a global supporting mountain.
- *Uniform Bi-Holder Transport from Weak MTW*: We prove that the weak Ma–Trudinger–Wang condition on a fixed smooth connected compact boundaryless Riemannian manifold of dimension at least two implies a common Hölder estimate for optimal transport maps and their inverses over the entire class of probability densities with fixed positive upper and lower bounds. The maps have homeomorphic representatives, conjugate cut points are allowed, and no density regularity is assumed.
- Lean scope (lean/docs/360.md): On a compact connected smooth Riemannian manifold of dimension at least two, the formalized result proves that weak MTW curvature implies convexity of every open tangent injectivity domain. Prior convexity or nonfocality is not assumed.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Prior convexity or nonfocality is not assumed. The latter finite-family result does not cover the paper's arbitrary-potential local-injectivity assertion.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Global Support and Convex Injectivity Domains under Weak MTW](https://github.com/openai/math/blob/main/preprints/Global-Support-and-Convex-Injectivity-Domains-under-Weak-MTW-September-25-2026/paper.pdf)
- Manuscript: [Uniform Bi-Holder Transport from Weak MTW](https://github.com/openai/math/blob/main/preprints/Uniform-Bi-Holder-Transport-from-Weak-MTW-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/360.md
- Comparator statement (Convex injectivity domains under weak MTW): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/WeakMTWGlobalSupport.lean
- Comparator statement (Uniform bi-Hölder optimal transport): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BiholderTransport.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
