---
title: "A quadratic bound for Jacobsthal’s function"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 021; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-quadratic-bound-for-Jacobsthals-function-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1881
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A quadratic bound for Jacobsthal's function"
    url: "https://github.com/openai/math/blob/main/preprints/A-quadratic-bound-for-Jacobsthals-function-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A quadratic bound for Jacobsthal’s function

## One-sentence takeaway

OpenAI's result family 021 (Number theory) claims: Answers Jacobsthal's quadratic-bound question: every interval of $Ck^2$ consecutive integers contains an integer coprime to any prescribed positive integer with at most k distinct prime divisors, for an absolute constant C.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The bound is uniform over prime sets and interval positions and removes the classical logarithmic loss.
- *A quadratic bound for Jacobsthal's function*: Let $h(k)$ be the least integer such that every interval of $h(k)$ consecutive integers contains an integer coprime to any prescribed positive integer having at most k distinct prime divisors. We prove $h(k)\ll k^2/(\log\log(3k))^2$, giving an affirmative answer to Jacobsthal's quadratic-bound question.
- Lean scope (lean/docs/021.md): Let $h(k)$ be the least interval length that guarantees an integer coprime to any prescribed positive modulus with at most $k$ distinct prime factors. The formalization proves the paper's strengthened Jacobsthal bound $h(k)\le Ck^2/(\log\log(3k))^2$ for one absolute $C>0$ and every $k\ge1$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A quadratic bound for Jacobsthal's function](https://github.com/openai/math/blob/main/preprints/A-quadratic-bound-for-Jacobsthals-function-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/021.md
- Comparator statement (Quadratic Jacobsthal bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Jacobsthal.lean
- Comparator statement (Jacobsthal bound with an iterated-logarithm saving): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/JacobsthalImproved.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
