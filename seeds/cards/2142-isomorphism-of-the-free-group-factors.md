---
title: "Isomorphism of the free group factors"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 287; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-isomorphism-of-the-free-group-factors-September-23-2026/An-isomorphism-of-the-free-group-factors-September-23-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2142
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An isomorphism of the free group factors"
    url: "https://github.com/openai/math/blob/main/preprints/An-isomorphism-of-the-free-group-factors-September-23-2026/An-isomorphism-of-the-free-group-factors-September-23-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Isomorphism of the free group factors

## One-sentence takeaway

OpenAI's result family 287 (Operator algebras) claims: Resolves the free group factor isomorphism problem: $L(\mathbb F_2)\cong L(\mathbb F_3)$, and hence all interpolated free group factors, including $L(\mathbb F_\infty)$, are isomorphic.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Their common factor has fundamental group $\mathbb R_{\gt 0}$.
- *An isomorphism of the free group factors*: We solve the free group factor isomorphism problem affirmatively by proving that $L(\mathbb F_2)$ and $L(\mathbb F_3)$ are isomorphic as tracial von Neumann algebras. The classical free group factor alternative then implies that all interpolated free group factors, including $L(\mathbb F_\infty)$, are isomorphic and have fundamental group $\mathbb R_{\gt 0}$.
- Lean scope (lean/docs/287.md): The free group factor problem asks whether the von Neumann algebras of free groups of different ranks are isomorphic. The formalization proves that interpolated free group factors with any parameters $r,s>1$, including the infinite parameter, are normally trace-preservingly isomorphic.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's fundamental-group conclusion is a further consequence rather than a separate selected statement here.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An isomorphism of the free group factors](https://github.com/openai/math/blob/main/preprints/An-isomorphism-of-the-free-group-factors-September-23-2026/An-isomorphism-of-the-free-group-factors-September-23-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/287.md
- Comparator statement (Isomorphism of all interpolated free group factors): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/InterpolatedFactors.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/free-group-factor-isomorphism.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
