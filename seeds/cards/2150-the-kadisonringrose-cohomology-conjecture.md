---
title: "The Kadison–Ringrose cohomology conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 295; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Vanishing-of-higher-bounded-Hochschild-cohomology-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2150
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Vanishing of higher bounded Hochschild cohomology"
    url: "https://github.com/openai/math/blob/main/preprints/Vanishing-of-higher-bounded-Hochschild-cohomology-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Kadison–Ringrose cohomology conjecture

## One-sentence takeaway

OpenAI's result family 295 (Operator algebras) claims: Proves that every bounded Hochschild cocycle of degree at least two on a complex von Neumann algebra, with coefficients in the algebra itself, has a bounded primitive.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Equivalently, all higher bounded Hochschild cohomology groups vanish, resolving the Kadison–Ringrose conjecture.
- *Vanishing of higher bounded Hochschild cohomology*: We prove that every bounded Hochschild cocycle of degree at least two on a complex von Neumann algebra, with values in the algebra itself, has a bounded primitive. Together with the established degree-one inner-derivation theorem, this resolves the Kadison–Ringrose cohomology conjecture positively.
- Lean scope (lean/docs/295.md): The formalization proves vanishing of bounded Hochschild cohomology in every degree at least two for a complex von Neumann algebra with coefficients in itself. Every bounded multilinear cocycle of such a degree is the Hochschild differential of a bounded multilinear cochain one degree lower.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The degree-one inner-derivation theorem is outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Vanishing of higher bounded Hochschild cohomology](https://github.com/openai/math/blob/main/preprints/Vanishing-of-higher-bounded-Hochschild-cohomology-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/295.md
- Comparator statement (Bounded primitives for all Hochschild cocycles of degree at least two): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KadisonRingrose.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
