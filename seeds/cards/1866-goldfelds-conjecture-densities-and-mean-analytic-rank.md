---
title: "Goldfeld’s conjecture: densities and mean analytic rank"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 006; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Goldfelds-analytic-density-conjecture-and-the-2-converse-for-elliptic-curves-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "unformalized"
seed_rank: 1866
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Goldfeld's analytic density conjecture and the 2-converse for elliptic curves"
    url: "https://github.com/openai/math/blob/main/preprints/Goldfelds-analytic-density-conjecture-and-the-2-converse-for-elliptic-curves-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The mean analytic rank of quadratic twists of elliptic curves"
    url: "https://github.com/openai/math/blob/main/preprints/The-mean-analytic-rank-of-quadratic-twists-of-elliptic-curves-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Goldfeld’s conjecture: densities and mean analytic rank

## One-sentence takeaway

OpenAI's result family 006 (Number theory) claims: Proves Goldfeld's conjecture for quadratic twists of every elliptic curve over ℚ: analytic ranks zero and one each have density 1/2, and the mean analytic rank tends to 1/2.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Both statements order signed squarefree twist parameters by absolute value.
- *Goldfeld's analytic density conjecture and the 2-converse for elliptic curves*: We prove Goldfeld's analytic density conjecture: for every elliptic curve E over ℚ, the quadratic twists of E with analytic rank zero and one each have density 1/2 among signed squarefree twist parameters ordered by absolute value. We also prove the low-corank 2-converse: if the $2^\infty$-Selmer corank of E is zero or one, then it equals the analytic and Mordell–Weil ranks, and the Tate–Shafarevich group is finite.
- *The mean analytic rank of quadratic twists of elliptic curves*: For every elliptic curve over ℚ, we prove that the average analytic rank of its quadratic twists tends to 1/2 when signed squarefree twist parameters are ordered by absolute value. This resolves Goldfeld's mean analytic-rank conjecture in this counting convention.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Goldfeld's analytic density conjecture and the 2-converse for elliptic curves](https://github.com/openai/math/blob/main/preprints/Goldfelds-analytic-density-conjecture-and-the-2-converse-for-elliptic-curves-September-23-2026/paper.pdf)
- Manuscript: [The mean analytic rank of quadratic twists of elliptic curves](https://github.com/openai/math/blob/main/preprints/The-mean-analytic-rank-of-quadratic-twists-of-elliptic-curves-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
