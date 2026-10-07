---
title: "The ℓ¹-Bass conjecture for all discrete groups"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 207; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-l1-Bass-Conjecture-for-Discrete-Groups-October-5-2026/l1-bass-conjecture.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebra"
  - "lean4"
  - "formalized"
seed_rank: 2062
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The ℓ¹-Bass Conjecture for Discrete Groups"
    url: "https://github.com/openai/math/blob/main/preprints/The-l1-Bass-Conjecture-for-Discrete-Groups-October-5-2026/l1-bass-conjecture.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The Bass trace conjecture and the characteristic-zero Kaplansky idempotent conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-Bass-trace-conjecture-for-complex-group-rings-September-24-2026/The-Bass-trace-conjecture-for-complex-group-rings-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The ℓ¹-Bass conjecture for all discrete groups

## One-sentence takeaway

OpenAI's result family 207 (Algebra) claims: Proves the ℓ1-Bass conjecture for every discrete group: Hattori–Stallings traces of idempotent matrices over $\ell^1(G)$ are supported on finitely many finite-order conjugacy classes.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The algebraic companion proves the integral Bass trace conjecture and Kaplansky's idempotent conjecture for torsion-free groups over every commutative unital characteristic-zero domain.
- *The ℓ¹-Bass Conjecture for Discrete Groups*: We prove the ℓ1-Bass conjecture for every discrete group. The Hattori–Stallings trace of every idempotent matrix over the complex ℓ1 group algebra is supported on finitely many conjugacy classes of finite-order elements.
- *The Bass trace conjecture and the characteristic-zero Kaplansky idempotent conjecture*: We prove the complex group-ring Bass trace conjecture for every discrete group: the Hattori–Stallings trace of a finitely generated projective module over its complex group ring is supported on conjugacy classes of finite-order elements. As a consequence, for every torsion-free group G and every commutative unital domain R of characteristic zero, the only idempotents in $RG$ are 0 and 1. This proves Kaplansky's idempotent conjecture in characteristic zero.
- Lean scope (lean/docs/207.md): The formalization proves the complex Bass trace conjecture for every group: the Hattori–Stallings trace of each virtual class of finitely generated projective right $\mathbb C[G]$-modules vanishes on conjugacy classes of infinite-order elements. No finiteness, countability, or geometric hypothesis on $G$ is imposed.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The ℓ¹-Bass Conjecture for Discrete Groups](https://github.com/openai/math/blob/main/preprints/The-l1-Bass-Conjecture-for-Discrete-Groups-October-5-2026/l1-bass-conjecture.pdf)
- Manuscript: [The Bass trace conjecture and the characteristic-zero Kaplansky idempotent conjecture](https://github.com/openai/math/blob/main/preprints/The-Bass-trace-conjecture-for-complex-group-rings-September-24-2026/The-Bass-trace-conjecture-for-complex-group-rings-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/207.md
- Comparator statement (Complex Bass trace vanishing and support): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BassTrace.lean
- Comparator statement (Trace rank and characteristic-zero Kaplansky idempotents for torsion-free groups): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BassTorsionFree.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
