---
title: "Short Egyptian fractions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 025; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Short-Egyptian-fractions-September-25-2026/Short-Egyptian-fractions-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1885
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Short Egyptian fractions"
    url: "https://github.com/openai/math/blob/main/preprints/Short-Egyptian-fractions-September-25-2026/Short-Egyptian-fractions-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Short Egyptian fractions

## One-sentence takeaway

OpenAI's result family 025 (Number theory) claims: Every rational $a/b$ with $1\le a\lt b$ is a sum of $O(\log\log b)$ distinct positive unit fractions.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The worst-case minimum number of terms has the same order, resolving Erdős’s conjecture on short Egyptian fractions.
- *Short Egyptian fractions*: We prove a conjecture of Erdős: for every sufficiently large integer b, every rational number $a/b$ with $1\le a\lt b$ is a sum of $O(\log\log b)$ distinct positive unit fractions, with an absolute implied constant. This order is best possible when the numerator varies. We also show that both the number of expansions of 1 with exactly k distinct terms and the least integer at least 2 that never occurs as a denominator in such an expansion grow doubly exponentially in k: their double logarithms have order k.
- Lean scope (lean/docs/025.md): An Egyptian-fraction expansion writes a rational number as a sum of distinct unit fractions. The formalization proves that every $a/b$ with $1\le a<b$ has such an expansion and that the largest minimum length at denominator $b$ is $\Theta(\log\log b)$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Short Egyptian fractions](https://github.com/openai/math/blob/main/preprints/Short-Egyptian-fractions-September-25-2026/Short-Egyptian-fractions-September-25-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/025.md
- Comparator statement (Short expansions, counting, and prescribed denominators): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EgyptianFractions.lean
- Comparator statement (Optimal order of the shortest Egyptian-fraction expansions): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ShortEgyptianFractions.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
