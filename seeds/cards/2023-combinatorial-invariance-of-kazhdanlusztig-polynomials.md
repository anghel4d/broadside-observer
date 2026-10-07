---
title: "Combinatorial invariance of Kazhdan–Lusztig polynomials"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 168; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Combinatorial-Invariance-of-Kazhdan-Lusztig-Polynomials-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2023
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Combinatorial invariance of Kazhdan–Lusztig polynomials"
    url: "https://github.com/openai/math/blob/main/preprints/Combinatorial-Invariance-of-Kazhdan-Lusztig-Polynomials-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Combinatorial invariance of Kazhdan–Lusztig polynomials

## One-sentence takeaway

OpenAI's result family 168 (Combinatorics) claims: Resolves the full combinatorial invariance conjecture: isomorphic Bruhat intervals in arbitrary Coxeter systems have identical equal-parameter Kazhdan–Lusztig polynomials.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Thus the abstract order of the interval determines the polynomial, even across different Coxeter systems.
- *Combinatorial invariance of Kazhdan–Lusztig polynomials*: We prove that an isomorphism of Bruhat intervals in arbitrary Coxeter systems preserves their equal-parameter Kazhdan–Lusztig polynomials. This resolves the full combinatorial invariance conjecture positively.
- Lean scope (lean/docs/168.md): The combinatorial invariance conjecture asks whether a Kazhdan–Lusztig polynomial depends only on its Bruhat interval as an ordered set. The formalization proves that every order isomorphism between Bruhat intervals in arbitrary Coxeter systems preserves the corresponding equal-parameter Kazhdan–Lusztig polynomial.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Combinatorial invariance of Kazhdan–Lusztig polynomials](https://github.com/openai/math/blob/main/preprints/Combinatorial-Invariance-of-Kazhdan-Lusztig-Polynomials-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/168.md
- Comparator statement (Combinatorial invariance of Kazhdan–Lusztig polynomials): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KLInvariance.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
