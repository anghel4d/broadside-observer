---
title: "Power savings for planar halving lines and k-sets"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 183; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-power-saving-for-planar-halving-lines-September-25-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2038
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A power saving for planar halving lines"
    url: "https://github.com/openai/math/blob/main/preprints/A-power-saving-for-planar-halving-lines-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Power savings for planar halving lines and k-sets

## One-sentence takeaway

OpenAI's result family 183 (Combinatorics) claims: Improves the planar halving-line bound to $O(n^{4/3-\varepsilon})$ for sets with no three collinear and an absolute ε > 0.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): More generally, an n-point set with no three collinear has $O(n(k+1)^{1/3-\varepsilon_0})$ strictly separable k-subsets for $1\le k\le n/2$, with an absolute $\varepsilon_0\gt 0$. The constants and positive exponents are nonquantitative.
- *A power saving for planar halving lines*: There are absolute constants ε > 0 and C such that every sufficiently large even n-point set in the plane with no three collinear has at most $Cn^{4/3-\varepsilon}$ unordered halving pairs. This gives a power saving over the classical $O(n^{4/3})$ bound for planar halving lines. The proof is nonquantitative and does not supply explicit constants.
- Lean scope (lean/docs/183.md): A halving pair in an even planar point set is a pair whose line leaves equally many remaining points on each side. The formalization proves that some absolute $\varepsilon>0$ and $C$ bound the number of halving pairs by $Cn^{4/3-\varepsilon}$ for every sufficiently large even $n$ and every $n$-point set with no three collinear.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: It also proves a bound of the same form for all level-switch counts under the additional generic-position assumptions in the statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A power saving for planar halving lines](https://github.com/openai/math/blob/main/preprints/A-power-saving-for-planar-halving-lines-September-25-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/183.md
- Comparator statement (Power-saving bounds for halving pairs and level switches): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HalvingLines.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
