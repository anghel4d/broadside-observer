---
title: "Ostmann’s inverse Goldbach conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 013; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/the-additive-indecomposability-of-the-primes-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1873
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The additive indecomposability of the primes"
    url: "https://github.com/openai/math/blob/main/preprints/the-additive-indecomposability-of-the-primes-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Ostmann’s inverse Goldbach conjecture

## One-sentence takeaway

OpenAI's result family 013 (Number theory) claims: Proves that no finite modification of the primes can be written as $A+B$ with $A,B\subseteq\mathbb Z_{\ge0}$ each containing at least two elements.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This resolves Ostmann's inverse Goldbach conjecture on additive indecomposability.
- *The additive indecomposability of the primes*: We prove Ostmann's inverse Goldbach conjecture: no set differing from the primes by finitely many elements can be written as $A+B$, where A and B are sets of nonnegative integers with at least two elements each.
- Lean scope (lean/docs/013.md): The formalization proves Ostmann's inverse Goldbach conjecture. For any two sets $A,B$ of nonnegative integers, each containing at least two elements, the symmetric difference between their sumset $A+B$ and the set of primes is infinite.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The additive indecomposability of the primes](https://github.com/openai/math/blob/main/preprints/the-additive-indecomposability-of-the-primes-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/013.md
- Comparator statement (Ostmann's inverse Goldbach theorem and the infinite-summands case): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/OstmannComplete.lean
- Comparator statement (Additive indecomposability of the primes up to finite changes): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/OstmannPrimes.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
