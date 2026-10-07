---
title: "Deterministic polynomial factorization over prime fields"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 142; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Deterministic-Polynomial-Factorization-over-Prime-Fields-October-4-2026/Deterministic-Polynomial-Factorization-over-Prime-Fields.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "unformalized"
seed_rank: 1998
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Deterministic Polynomial Factorization over Prime Fields"
    url: "https://github.com/openai/math/blob/main/preprints/Deterministic-Polynomial-Factorization-over-Prime-Fields-October-4-2026/Deterministic-Polynomial-Factorization-over-Prime-Fields.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Deterministic polynomial factorization over prime fields

## One-sentence takeaway

OpenAI's result family 142 (Theoretical computer science) claims: Gives a uniform deterministic algorithm that completely factors every nonzero dense degree-n polynomial over a prime field 𝔽p, including multiplicities, in bit complexity polynomial in $(n+1)\log p$.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): The prime is supplied in binary. No randomness, integer-factorization or primitive-root oracle, or GRH assumption is required.
- *Deterministic Polynomial Factorization over Prime Fields*: We give a uniform deterministic polynomial-time algorithm for complete factorization over prime fields. For a prime p in binary and a nonzero polynomial $f\in\mathbf F_p[x]$ given by its dense coefficient list, the algorithm computes the irreducible factors and their multiplicities using a number of bit operations polynomial in $(\deg f+1)\log p$. The proof uses the uniform Hecke zero-free theorem from the companion paper *Primitive roots for every admissible integer base*.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Deterministic Polynomial Factorization over Prime Fields](https://github.com/openai/math/blob/main/preprints/Deterministic-Polynomial-Factorization-over-Prime-Fields-October-4-2026/Deterministic-Polynomial-Factorization-over-Prime-Fields.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
