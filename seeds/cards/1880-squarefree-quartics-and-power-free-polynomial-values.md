---
title: "Squarefree quartics and power-free polynomial values"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 020; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Squarefree-values-of-quartics-and-power-free-values-of-polynomials-September-24-2026/manuscript.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1880
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Squarefree values of quartics and power-free values of polynomials"
    url: "https://github.com/openai/math/blob/main/preprints/Squarefree-values-of-quartics-and-power-free-values-of-polynomials-September-24-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Squarefree quartics and power-free polynomial values

## One-sentence takeaway

OpenAI's result family 020 (Number theory) claims: Proves the squarefree-values conjecture for irreducible integer quartics with no fixed prime-square divisor: squarefree values on positive integers have the predicted positive Euler-product density.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): More generally, establishes the $(d-2)$-power-free density for irreducible integer polynomials of degrees four through eight under the necessary local condition; together with Browning's higher-degree theorem, this covers every d ≥ 4.
- *Squarefree values of quartics and power-free values of polynomials*: We prove that every irreducible integer quartic with no fixed prime-square divisor takes squarefree values with the predicted positive Euler-product density. More generally, we obtain the corresponding $(d-2)$-power-free density in degrees $4\le d\le8$. The proof combines number-field factorization, determinant estimates with adaptive auxiliary primes, and explicit low-degree geometry.
- Lean scope (lean/docs/020.md): The formalized result proves positive-density power-free values for every integer polynomial $f$ irreducible over $\mathbb Q$ of degree $d\ge4$. Put $k=d-2$ and assume no prime $k$th power divides every value of $f$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Put $k=d-2$ and assume no prime $k$th power divides every value of $f$.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Squarefree values of quartics and power-free values of polynomials](https://github.com/openai/math/blob/main/preprints/Squarefree-values-of-quartics-and-power-free-values-of-polynomials-September-24-2026/manuscript.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/020.md
- Comparator statement (Positive density of power-free polynomial values): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PowerFreeValues.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
