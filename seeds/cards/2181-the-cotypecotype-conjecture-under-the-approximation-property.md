---
title: "The cotype–cotype conjecture under the approximation property"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 326; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-cotype-cotype-conjecture-under-the-approximation-property-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2181
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The cotype–cotype conjecture under the approximation property"
    url: "https://github.com/openai/math/blob/main/preprints/The-cotype-cotype-conjecture-under-the-approximation-property-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The cotype–cotype conjecture under the approximation property

## One-sentence takeaway

OpenAI's result family 326 (Functional analysis) claims: Resolves the cotype–cotype conjecture for real Banach spaces with the approximation property.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Such a nonzero space is K-convex if and only if both it and its dual have finite Rademacher cotype, with possibly different exponents. Equivalently, these cotype assumptions force nontrivial Rademacher type.
- *The cotype–cotype conjecture under the approximation property*: We prove the cotype–cotype conjecture under the ordinary approximation property. A nonzero real Banach space with this property is K-convex if and only if both the space and its dual have finite Rademacher cotype, possibly with different exponents.
- Lean scope (lean/docs/326.md): The cotype–cotype problem asks whether finite cotype of a Banach space and its dual characterizes $K$-convexity. The formalized result establishes this equivalence for every nonzero real Banach space with the approximation property: $X$ is $K$-convex exactly when both $X$ and $X^*$ have finite cotype.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The cotype–cotype conjecture under the approximation property](https://github.com/openai/math/blob/main/preprints/The-cotype-cotype-conjecture-under-the-approximation-property-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/326.md
- Comparator statement (Cotype–cotype equivalence with approximation property): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Cotype.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
