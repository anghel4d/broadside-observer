---
title: "An asymptotic formula for the number of totients"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 024; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-asymptotic-formula-for-the-number-of-totients-September-25-2026/An-asymptotic-formula-for-the-number-of-totients-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1884
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An asymptotic formula for the number of totients"
    url: "https://github.com/openai/math/blob/main/preprints/An-asymptotic-formula-for-the-number-of-totients-September-25-2026/An-asymptotic-formula-for-the-number-of-totients-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# An asymptotic formula for the number of totients

## One-sentence takeaway

OpenAI's result family 024 (Number theory) claims: Gives an asymptotic equivalent for the number $V(x)$ of distinct totient values up to x, with a positive bounded phase-dependent factor determined by convergent arithmetic approximations.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): In particular, $V(cx)/V(x)\to c$ for every fixed c > 0, answering Erdős and Hall’s scaling question.
- *An asymptotic formula for the number of totients*: Let $V(x)$ count the distinct values of Euler's totient function up to x. We give an explicit asymptotic equivalent for $V(x)$. Its coefficient is a uniform limit of functions defined from finite arithmetic data.
- Lean scope (lean/docs/024.md): Let $V(x)$ count the distinct values of Euler's totient function up to $x$. The formalization constructs the paper's explicit positive main term from finite arithmetic approximants and proves that their ratio tends to one.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An asymptotic formula for the number of totients](https://github.com/openai/math/blob/main/preprints/An-asymptotic-formula-for-the-number-of-totients-September-25-2026/An-asymptotic-formula-for-the-number-of-totients-September-25-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/024.md
- Comparator statement (Totient-count asymptotics and regular variation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TotientAsymptotic.lean
- Comparator statement (Exact zero case for the companion totient counts): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TotientCompanionZero.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
