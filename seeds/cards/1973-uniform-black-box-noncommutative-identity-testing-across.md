---
title: "Uniform black-box noncommutative identity testing across characteristics"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 116; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Uniform-Matrix-Hitting-Points-in-Every-Positive-Characteristic-October-4-2026/uniform-matrix-hitting-points-positive-characteristic.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1973
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Uniform Matrix Hitting Points in Every Positive Characteristic"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-Matrix-Hitting-Points-in-Every-Positive-Characteristic-October-4-2026/uniform-matrix-hitting-points-positive-characteristic.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "One Rational Matrix Hitting Point for Noncommutative Formulas"
    url: "https://github.com/openai/math/blob/main/preprints/One-Rational-Matrix-Hitting-Point-for-Noncommutative-Formulas-September-24-2026/One-Rational-Matrix-Hitting-Point-for-Noncommutative-Formulas-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Polynomial Hitting Lists for Noncommutative Rational Formulas"
    url: "https://github.com/openai/math/blob/main/preprints/Polynomial-Hitting-Lists-for-Noncommutative-Rational-Formulas-September-24-2026/Polynomial-Hitting-Lists-for-Noncommutative-Rational-Formulas-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Uniform black-box noncommutative identity testing across characteristics

## One-sentence takeaway

OpenAI's result family 116 (Theoretical computer science) claims: For each characteristic, constructs in deterministic polynomial bit time a polynomial-dimensional matrix tuple detecting every nonzero division-free noncommutative formula of bounded size over any field of that characteristic.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Rational formulas over ℚ also admit polynomial-size hitting lists whenever they have a defined rational-matrix evaluation.
- *Uniform Matrix Hitting Points in Every Positive Characteristic*: We construct a single matrix substitution that detects every nonzero size-s division-free noncommutative formula in n variables over every field of a given positive characteristic. One deterministic machine, given a promised prime p in binary and n, s in unary, outputs matrices over 𝔽p of dimension $O(n^3s^6)$ in polynomial bit time. The same tuple works with arbitrary extension-field coefficients, including in characteristic two.
- *One Rational Matrix Hitting Point for Noncommutative Formulas*: We construct, in deterministic polynomial bit time, one tuple of rational matrices that detects every nonzero polynomial computed by a noncommutative division-free formula of a prescribed size. The matrices have dimension $O(ns^2)$ for n variables and formula size s, and the same tuple works over every field of characteristic zero.
- *Polynomial Hitting Lists for Noncommutative Rational Formulas*: We construct, in deterministic polynomial bit time, a polynomial-size list of rational matrix tuples for noncommutative rational formulas over ℚ of bounded tree size. Every nonzero admissible formula has a defined, invertible value at one tuple, with no separate bounds on inverse nesting or rational constant heights. Matrix dimensions, entry bit lengths, and total output length are polynomially bounded.
- Lean scope (lean/docs/116.md): The formalization gives one explicit tuple of rational matrices that simultaneously detects every nonzero division-free noncommutative formula with at most $s$ gates in $n$ variables, for $n,s\ge1$. Evaluation at that tuple is a nonzero matrix over every characteristic-zero field.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Uniform Matrix Hitting Points in Every Positive Characteristic](https://github.com/openai/math/blob/main/preprints/Uniform-Matrix-Hitting-Points-in-Every-Positive-Characteristic-October-4-2026/uniform-matrix-hitting-points-positive-characteristic.pdf)
- Manuscript: [One Rational Matrix Hitting Point for Noncommutative Formulas](https://github.com/openai/math/blob/main/preprints/One-Rational-Matrix-Hitting-Point-for-Noncommutative-Formulas-September-24-2026/One-Rational-Matrix-Hitting-Point-for-Noncommutative-Formulas-September-24-2026.pdf)
- Manuscript: [Polynomial Hitting Lists for Noncommutative Rational Formulas](https://github.com/openai/math/blob/main/preprints/Polynomial-Hitting-Lists-for-Noncommutative-Rational-Formulas-September-24-2026/Polynomial-Hitting-Lists-for-Noncommutative-Rational-Formulas-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/116.md
- Comparator statement (One rational matrix tuple hitting all bounded-size noncommutative formulas): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FormulaHitting.lean
- Comparator statement (Polynomial hitting lists for rational formulas): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RationalHitting.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
