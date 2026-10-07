---
title: "The circulant Hadamard and Barker-sequence conjectures"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 179; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-circulant-Hadamard-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2034
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The circulant Hadamard conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-circulant-Hadamard-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The circulant Hadamard and Barker-sequence conjectures

## One-sentence takeaway

OpenAI's result family 179 (Combinatorics) claims: Proves that real circulant Hadamard matrices exist exactly in orders 1 and 4, resolving the circulant Hadamard conjecture.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Together with classical Barker-sequence results, this shows that binary sequences whose nontrivial aperiodic autocorrelations have magnitude at most 1 exist at lengths n > 1 exactly when $n\in\{2,3,4,5,7,11,13\}$.
- *The circulant Hadamard conjecture*: We prove the circulant Hadamard conjecture: a real circulant Hadamard matrix has order 1 or 4. As a consequence, Barker sequences of length greater than one exist exactly at lengths 2, 3, 4, 5, 7, 11, 13, proving the Barker-sequence conjecture.
- Lean scope (lean/docs/179.md): The formalization proves the circulant Hadamard conjecture in exact form: a real circulant Hadamard matrix of positive order $n$ exists exactly when $n=1$ or $n=4$. Explicit witnesses are supplied for both orders, with no restriction on prime factors.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's classification of odd Barker lengths is outside this selected additional statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The circulant Hadamard conjecture](https://github.com/openai/math/blob/main/preprints/The-circulant-Hadamard-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/179.md
- Comparator statement (Classification of circulant Hadamard orders): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CirculantHadamard.lean
- Comparator statement (Classification of positive even Barker lengths): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EvenBarker.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
