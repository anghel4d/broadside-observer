---
title: "Boolean functions violate the square-root degree bound by arbitrary factors"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 192; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Unbounded-Violations-of-the-Square-Root-Degree-Bound-September-26-2026/Unbounded-Violations-of-the-Square-Root-Degree-Bound-September-26-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2047
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Unbounded Violations of the Square-Root Degree Bound"
    url: "https://github.com/openai/math/blob/main/preprints/Unbounded-Violations-of-the-Square-Root-Degree-Bound-September-26-2026/Unbounded-Violations-of-the-Square-Root-Degree-Bound-September-26-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Boolean functions violate the square-root degree bound by arbitrary factors

## One-sentence takeaway

OpenAI's result family 192 (Combinatorics) claims: Disproves the proposed square-root bound relating a Boolean function's linear Fourier coefficients to its polynomial degree.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For every C > 0, there is a sign-valued Boolean function f with $\sum_i\widehat f(\{i\})\gt C\sqrt{\deg(f)}$. Thus its total signed correlation with individual input bits can exceed the proposed bound by an arbitrary factor.
- *Unbounded Violations of the Square-Root Degree Bound*: We disprove the Gopalan–Servedio square-root conjecture, even up to an arbitrary constant factor. For every real C > 0, there is a nonconstant Boolean function $f:\{-1,1\}^n\to\{-1,1\}$ on a finite sign cube such that

$\displaystyle \sum_{i=1}^n \widehat f(\{i\})\gt C\sqrt{\deg(f)}.$

Here $\widehat f(\{i\})$ is the linear Fourier coefficient associated with the ith input, and $\deg(f)$ is the degree of the real multilinear polynomial representing f.
- Lean scope (lean/docs/192.md): The formalization disproves the Gopalan–Servedio square-root degree conjecture by an unbounded factor. For every $C>0$, it gives a nonconstant Boolean function on a finite sign cube for which the sum of its linear Fourier coefficients exceeds $C\sqrt{\deg f}$, where $\deg f$ is its real multilinear degree.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Unbounded Violations of the Square-Root Degree Bound](https://github.com/openai/math/blob/main/preprints/Unbounded-Violations-of-the-Square-Root-Degree-Bound-September-26-2026/Unbounded-Violations-of-the-Square-Root-Degree-Bound-September-26-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/192.md
- Comparator statement (Unbounded violations of the square-root Fourier-degree bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SquareRootDegree.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
