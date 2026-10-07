---
title: "Positive lower density of large prime gaps"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 026; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Positive-lower-density-of-large-prime-gaps-September-25-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1886
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Positive lower density of large prime gaps"
    url: "https://github.com/openai/math/blob/main/preprints/Positive-lower-density-of-large-prime-gaps-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Positive lower density of large prime gaps

## One-sentence takeaway

OpenAI's result family 026 (Number theory) claims: For every fixed C > 0, a positive proportion of consecutive prime gaps exceed $C\log p_n$, throughout every sufficiently large initial segment of the primes.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The proportion may depend on C. Consequently, the indices where $p_n/n$ increases have positive lower density, answering Erdős and Prachar.
- *Positive lower density of large prime gaps*: For every fixed C > 0, we prove that a positive proportion of consecutive prime gaps exceed $C\log p$, where p is the smaller prime. The proportion is bounded below for every sufficiently large initial segment of the prime sequence, with a constant depending on C. It follows that the indices at which $p_n/n$ increases have positive lower asymptotic density, answering a question of Erdős and Prachar.
- Lean scope (lean/docs/026.md): The formalized supplement proves that the indices $n$ for which $p_n/n<p_{n+1}/(n+1)$ have positive lower asymptotic density, where $p_n$ is the $n$th prime. Thus the normalized prime sequence has a positive-density set of increases.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Positive lower density of large prime gaps](https://github.com/openai/math/blob/main/preprints/Positive-lower-density-of-large-prime-gaps-September-25-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/026.md
- Comparator statement (Positive lower density of prime-ratio increases): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PrimeGaps.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
