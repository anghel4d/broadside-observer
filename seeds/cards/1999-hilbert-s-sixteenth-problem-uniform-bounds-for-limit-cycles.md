---
title: "Hilbert's sixteenth problem: uniform bounds for limit cycles"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 143; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "lean4"
  - "formalized"
seed_rank: 1999
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Uniform bounds for planar polynomial limit cycles"
    url: "https://github.com/openai/math/blob/main/preprints/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Two limit cycles for quintic Liénard systems"
    url: "https://github.com/openai/math/blob/main/preprints/two-limit-cycles-for-quintic-lienard-systems-September-24-2026/two-limit-cycles-for-quintic-lienard-systems-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Hilbert's sixteenth problem: uniform bounds for limit cycles

## One-sentence takeaway

OpenAI's result family 143 (Dynamical systems and ergodic theory) claims: Resolves the uniform boundedness assertion in Hilbert's sixteenth problem: the number of isolated periodic orbits of a real planar polynomial vector field is bounded by a finite constant depending only on its degree.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For classical quintic Liénard systems, the exact maximum is two limit cycles.
- *Uniform bounds for planar polynomial limit cycles*: For every degree, we prove that the number of isolated periodic orbits of a real planar polynomial vector field is bounded by a finite constant depending only on that degree. This establishes the uniform boundedness assertion in the second part of Hilbert's sixteenth problem. The proof uses separation of asymptotic expansions on nested complex domains and a finite-dimensional counting argument.
- *Two limit cycles for quintic Liénard systems*: Every classical Liénard system $\dot x=y-F(x)$, $\dot y=-x$, with F an arbitrary real polynomial of degree at most five, has at most two geometrically distinct isolated periodic orbits, and the bound is attained. This proves the degree-five case of the Lins Neto–de Melo–Pugh conjecture.
- Lean scope (lean/docs/143.md): For the quintic Liénard system $x'=y-F(x)$, $y'=-x$, the formalized result proves that every real polynomial $F$ of degree at most five yields at most two limit cycles, and that some such $F$ yields exactly two. Limit cycles are isolated images of nonconstant periodic solutions.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Uniform bounds for planar polynomial limit cycles](https://github.com/openai/math/blob/main/preprints/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026.pdf)
- Manuscript: [Two limit cycles for quintic Liénard systems](https://github.com/openai/math/blob/main/preprints/two-limit-cycles-for-quintic-lienard-systems-September-24-2026/two-limit-cycles-for-quintic-lienard-systems-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/143.md
- Comparator statement (Exact two-cycle bound for quintic Liénard systems): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/QuinticLienard.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
