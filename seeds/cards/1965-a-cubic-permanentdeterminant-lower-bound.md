---
title: "A cubic permanent–determinant lower bound"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 108; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1965
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "A cubic lower bound for border determinantal complexity of the permanent"
    url: "https://github.com/openai/math/blob/main/preprints/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A cubic permanent–determinant lower bound

## One-sentence takeaway

OpenAI's result family 108 (Theoretical computer science) claims: Proves an $\Omega(n^3)$ lower bound for the border determinantal complexity of the $n\times n$ permanent over ℂ.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Even coefficientwise limits of determinants of affine-linear matrices require matrix size at least $cn^3$, for an absolute c > 0 and all sufficiently large n; the same bound therefore holds for exact representations.
- *A cubic lower bound for border determinantal complexity of the permanent*: We prove that the complex border determinantal complexity of the $m\times m$ permanent is $\Omega(m^3)$, allowing arbitrary affine-linear determinant representations and coefficientwise limits. It also gives cubic lower bounds for exact determinantal complexity and for the numbers of vertices and edges in affine-linear algebraic branching programs, including coefficientwise limits with a fixed vertex or edge budget.
- Lean scope (lean/docs/108.md): The formalization proves a cubic lower bound for both exact and border determinantal representations of the complex $m\times m$ permanent. For $m\ge1408$, every affine-linear determinant representation of size $n$, including coefficientwise limits, satisfies $n\ge m^3/(5529600e)$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's algebraic-branching-program consequences are outside these statements.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A cubic lower bound for border determinantal complexity of the permanent](https://github.com/openai/math/blob/main/preprints/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/108.md
- Comparator statement (Cubic lower bounds for permanent determinantal complexity): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PermanentCubic.lean
- Comparator statement (Determinantal lower bound from a smooth initial form): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SmoothInitialForm.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
