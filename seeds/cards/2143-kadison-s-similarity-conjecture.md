---
title: "Kadison's similarity conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 288; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Kadisons-similarity-theorem-through-uniform-derivation-estimates-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2143
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Kadison's similarity theorem through uniform derivation estimates"
    url: "https://github.com/openai/math/blob/main/preprints/Kadisons-similarity-theorem-through-uniform-derivation-estimates-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Kadison's similarity conjecture

## One-sentence takeaway

OpenAI's result family 288 (Operator algebras) claims: Proves Kadison's similarity conjecture: every bounded complex-linear unital algebra homomorphism from a unital complex C∗-algebra to operators on a Hilbert space becomes a $*$-homomorphism after conjugation by a bounded invertible operator.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- *Kadison's similarity theorem through uniform derivation estimates*: We prove that every bounded complex-linear unital algebra homomorphism from a unital complex C∗-algebra into the bounded operators on an arbitrary Hilbert space is similar to a $*$-homomorphism. This resolves Kadison's similarity conjecture positively. We also obtain one universal hyperreflexivity constant for all unital von Neumann algebras on arbitrary complex Hilbert spaces.
- Lean scope (lean/docs/288.md): Kadison's similarity problem asks whether every bounded unital homomorphism from a unital complex $C^*$-algebra into operators on a Hilbert space is similar to a $*$-homomorphism. The formalization proves this for arbitrary Hilbert spaces.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Kadison's similarity theorem through uniform derivation estimates](https://github.com/openai/math/blob/main/preprints/Kadisons-similarity-theorem-through-uniform-derivation-estimates-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/288.md
- Comparator statement (Kadison's similarity theorem and uniform hyperreflexivity): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KadisonSimilarity.lean
- Comparator statement (Uniform amplified commutator estimate): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/UniformCommutator.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
