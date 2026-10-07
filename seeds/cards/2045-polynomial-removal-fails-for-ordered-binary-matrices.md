---
title: "Polynomial removal fails for ordered binary matrices"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 190; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Polynomial-removal-fails-for-ordered-binary-matrices-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2045
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Polynomial removal fails for ordered binary matrices"
    url: "https://github.com/openai/math/blob/main/preprints/Polynomial-removal-fails-for-ordered-binary-matrices-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Polynomial removal fails for ordered binary matrices

## One-sentence takeaway

OpenAI's result family 190 (Combinatorics) claims: Disproves polynomial ordered binary matrix removal with one fixed $66\times66$ zero–one pattern.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Matrices can require many binary-entry changes to become pattern-free while their copy density is smaller than every proposed polynomial bound in that distance. Copies preserve row and column orders and match both zeros and ones.
- *Polynomial removal fails for ordered binary matrices*: We construct a fixed $66\times66$ binary matrix for which ordered matrix removal has no polynomial bound. This disproves the polynomial ordered binary matrix-removal conjecture. Ordered copies preserve the separate row and column orders and match both zeros and ones; removal permits changing entries in either direction.
- Lean scope (lean/docs/190.md): The formalized result disproves a polynomial removal bound for one explicit $66\times66$ binary pattern. For every $c,C>0$, there is an $n\times n$ binary matrix at normalized edit distance at least $\varepsilon>0$ from being pattern-free but with fewer than $c\varepsilon^C n^{132}$ induced ordered copies.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Polynomial removal fails for ordered binary matrices](https://github.com/openai/math/blob/main/preprints/Polynomial-removal-fails-for-ordered-binary-matrices-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/190.md
- Comparator statement (Failure of polynomial removal for ordered binary matrices): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatrixRemoval.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
