---
title: "Tangent splittings and product decompositions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 052; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Universal-cover-splitting-for-compact-Kahler-manifolds-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebraic-and-complex-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1911
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Universal-cover splitting for compact Kähler manifolds"
    url: "https://github.com/openai/math/blob/main/preprints/Universal-cover-splitting-for-compact-Kahler-manifolds-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Integrability of split tangent bundles on rationally connected manifolds"
    url: "https://github.com/openai/math/blob/main/preprints/Integrability-of-split-tangent-bundles-on-rationally-connected-manifolds-September-23-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Tangent splittings and product decompositions

## One-sentence takeaway

OpenAI's result family 052 (Algebraic and complex geometry) claims: A splitting of the tangent bundle of a compact Kähler manifold into two integrable holomorphic subbundles induces a compatible product decomposition of its universal cover, proving the two-summand form of Beauville's splitting conjecture.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): On smooth rationally connected projective manifolds, both summands are automatically integrable, establishing Höring's conjecture and the corresponding product decomposition.
- *Universal-cover splitting for compact Kähler manifolds*: We prove the two-summand form of Beauville's compatible splitting conjecture. If the tangent bundle of a compact connected Kähler manifold decomposes into two integrable holomorphic subbundles of positive rank, then its ordinary universal cover admits a product decomposition whose factor tangent bundles are the lifted specified summands.
- *Integrability of split tangent bundles on rationally connected manifolds*: We prove that both summands of every specified holomorphic splitting of the tangent bundle of a smooth rationally connected projective complex manifold into two positive-rank subbundles are integrable. This proves Höring's conjecture on rationally connected projective manifolds. Höring's product theorem then gives a product decomposition compatible with the specified splitting.
- Lean scope (lean/docs/052.md): The splitting question asks whether a holomorphic decomposition of the tangent bundle comes from a product decomposition of the universal cover. The formalized result gives an affirmative answer for a compact connected Kähler manifold whose tangent bundle splits into two positive-rank, integrable holomorphic subbundles.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Both integrability assumptions are required. The paper's compatible product decomposition is a separate consequence, outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Universal-cover splitting for compact Kähler manifolds](https://github.com/openai/math/blob/main/preprints/Universal-cover-splitting-for-compact-Kahler-manifolds-September-23-2026/paper.pdf)
- Manuscript: [Integrability of split tangent bundles on rationally connected manifolds](https://github.com/openai/math/blob/main/preprints/Integrability-of-split-tangent-bundles-on-rationally-connected-manifolds-September-23-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/052.md
- Comparator statement (Universal-cover product splitting): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KahlerSplitting.lean
- Comparator statement (Integrability of both holomorphic tangent summands): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SplitTangentIntegrability.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
