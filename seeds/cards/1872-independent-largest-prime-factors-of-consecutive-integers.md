---
title: "Independent largest prime factors of consecutive integers"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 012; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-joint-Dickman-law-for-consecutive-integers-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1872
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The joint Dickman law for consecutive integers"
    url: "https://github.com/openai/math/blob/main/preprints/The-joint-Dickman-law-for-consecutive-integers-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Independent largest prime factors of consecutive integers

## One-sentence takeaway

OpenAI's result family 012 (Number theory) claims: Resolves the Erdős–Pomerance joint Dickman conjecture: the logarithmic sizes of the largest prime factors of n and $n+1$ are asymptotically independent in ordinary natural density.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): In particular, the integers satisfying $P^+(n)\lt P^+(n+1)$ have density 1/2.
- *The joint Dickman law for consecutive integers*: Let $P^+(n)$ denote the largest prime factor of n. We prove that $\log P^+(n)/\log n$ and $\log P^+(n+1)/\log n$ are asymptotically independent in ordinary natural density, with Dickman marginals. This resolves the Erdős–Pomerance joint Dickman conjecture positively and implies that the ordering $P^+(n)\lt P^+(n+1)$ has natural density 1/2.
- Lean scope (lean/docs/012.md): Let $P^+(n)$ be the largest prime factor of $n$. The formalization proves the joint Dickman law in ordinary natural density: for every $0<a,b<1$, the density of integers satisfying $P^+(n)\le n^a$ and $P^+(n+1)\le n^b$ tends to $\rho(1/a)\rho(1/b)$, where $\rho$ is the Dickman function.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The joint Dickman law for consecutive integers](https://github.com/openai/math/blob/main/preprints/The-joint-Dickman-law-for-consecutive-integers-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/012.md
- Comparator statement (Joint Dickman law and equal ordering densities for consecutive integers): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/JointDickman.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
