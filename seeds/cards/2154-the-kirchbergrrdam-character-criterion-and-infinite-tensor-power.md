---
title: "The Kirchberg–Rørdam character criterion and infinite tensor-power Jiang–Su stability"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 299; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Kirchberg-Rordam-character-criterion-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2154
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Kirchberg–Rørdam character criterion"
    url: "https://github.com/openai/math/blob/main/preprints/The-Kirchberg-Rordam-character-criterion-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Kirchberg–Rørdam character criterion and infinite tensor-power Jiang–Su stability

## One-sentence takeaway

OpenAI's result family 299 (Operator algebras) claims: A nonzero unital separable complex C∗-algebra is Jiang–Su stable exactly when its norm central-sequence algebra has no characters, for every free ultrafilter.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This answers the Kirchberg–Rørdam character question. Also, the infinite minimal tensor power of every such algebra without characters is Jiang–Su stable, answering the Dadarlat–Toms question.
- *The Kirchberg–Rørdam character criterion*: We prove the Kirchberg–Rørdam character criterion: for every free ultrafilter on ℕ, a nonzero unital separable complex C∗-algebra absorbs the Jiang–Su algebra if and only if its norm central-sequence algebra has no characters. We also prove that the infinite minimal tensor power of every nonzero unital separable complex C∗-algebra without characters is $\mathcal Z$-stable and contains a unital copy of $\mathcal Z$.
- Lean scope (lean/docs/299.md): The Kirchberg–Rørdam criterion relates Jiang–Su absorption to characters of the central-sequence algebra. The formalized result proves that, for every nonzero unital separable complex $C^*$-algebra $A$ and every free ultrafilter on $\mathbb N$, the norm central-sequence algebra has no nonzero character exactly when $A\cong A\otimes_{\min}\mathcal Z$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Kirchberg–Rørdam character criterion](https://github.com/openai/math/blob/main/preprints/The-Kirchberg-Rordam-character-criterion-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/299.md
- Comparator statement (Kirchberg–Rørdam character criterion): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CharacterCriterion.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
