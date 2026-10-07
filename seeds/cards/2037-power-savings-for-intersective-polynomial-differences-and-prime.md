---
title: "Power savings for intersective polynomial differences and prime arguments"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 182; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-power-saving-for-intersective-polynomial-differences-with-an-exponent-depending-only-on-the-degree-October-5-2026/power-saving-intersective-polynomial-differences.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2037
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A power saving for intersective polynomial differences with an exponent depending only on the degree"
    url: "https://github.com/openai/math/blob/main/preprints/A-power-saving-for-intersective-polynomial-differences-with-an-exponent-depending-only-on-the-degree-October-5-2026/power-saving-intersective-polynomial-differences.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Power Saving for Polynomial Differences at Prime Arguments"
    url: "https://github.com/openai/math/blob/main/preprints/A-Power-Saving-for-Polynomial-Differences-at-Prime-Arguments-October-5-2026/prime-argument-polynomial-differences.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A power saving for square-difference-free sets"
    url: "https://github.com/openai/math/blob/main/preprints/A-power-saving-for-square-difference-free-sets-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Power savings for intersective polynomial differences and prime arguments

## One-sentence takeaway

OpenAI's result family 182 (Combinatorics) claims: For every fixed intersective integer polynomial h of degree k ≥ 2 with positive leading coefficient, proves that a subset of $\{1,\ldots,N\}$ avoiding nonzero values $h(1),h(2),\ldots$ as differences has size $O_h(N^{1-c_k})$, with $c_k\gt 0$ depending only on degree.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Here intersective means having a root modulo every modulus. For prime arguments, a power saving also holds when h has a unit root modulo every modulus, with exponent allowed to depend on h.
- *A power saving for intersective polynomial differences with an exponent depending only on the degree*: An integer polynomial is intersective if it has a root modulo every positive integer. For each degree k ≥ 2, we prove that there is an exponent $c_k\gt 0$ such that every set $A\subseteq\{1,\ldots,N\}$ whose differences avoid all nonzero values $h(1),h(2),\ldots$, where h is an intersective polynomial of degree k with positive leading coefficient, satisfies $|A|=O_h(N^{1-c_k})$. The implied constant may depend on h, but the power-saving exponent depends only on its degree.
- *A Power Saving for Polynomial Differences at Prime Arguments*: Let h be a fixed integer polynomial of degree at least two with positive leading coefficient, having a unit root modulo every positive integer. We prove that any set $A\subseteq\{1,\ldots,N\}$ whose differences avoid all nonzero values $h(p)$ at primes satisfies $|A|\le C_hN^{1-c_h}$, where $c_h\gt 0$ and $C_h\ge1$ depend only on h. Thus the local unit-root condition gives a fixed power saving even when polynomial arguments are restricted to primes.
- *A power saving for square-difference-free sets*: We prove that there are absolute constants c > 0 and C < ∞ such that every set $A\subseteq\{1,\ldots,N\}$ with no nonzero square difference satisfies $|A|\le C N^{1-c}$. This answers the fixed-power question posed by Green and Sawhney.
- Lean scope (lean/docs/182.md): The formalization proves a fixed power saving for sets with no nonzero square difference. There are absolute constants $c>0$ and $C$ such that every $A\subseteq\{1,\ldots,N\}$ satisfying $a-b\ne m^2$ for all $a,b\in A$ and integers $m\ge1$ has $|A|\le C N^{1-c}$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A power saving for intersective polynomial differences with an exponent depending only on the degree](https://github.com/openai/math/blob/main/preprints/A-power-saving-for-intersective-polynomial-differences-with-an-exponent-depending-only-on-the-degree-October-5-2026/power-saving-intersective-polynomial-differences.pdf)
- Manuscript: [A Power Saving for Polynomial Differences at Prime Arguments](https://github.com/openai/math/blob/main/preprints/A-Power-Saving-for-Polynomial-Differences-at-Prime-Arguments-October-5-2026/prime-argument-polynomial-differences.pdf)
- Manuscript: [A power saving for square-difference-free sets](https://github.com/openai/math/blob/main/preprints/A-power-saving-for-square-difference-free-sets-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/182.md
- Comparator statement (Power saving for square-difference-free sets): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SquareDifference.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
