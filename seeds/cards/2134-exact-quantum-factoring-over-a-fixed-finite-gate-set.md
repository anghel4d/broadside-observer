---
title: "Exact quantum factoring over a fixed finite gate set"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 279; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Exact-quantum-factoring-over-a-fixed-finite-gate-set-September-25-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2134
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Exact quantum factoring over a fixed finite gate set"
    url: "https://github.com/openai/math/blob/main/preprints/Exact-quantum-factoring-over-a-fixed-finite-gate-set-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Exact quantum factoring over a fixed finite gate set

## One-sentence takeaway

OpenAI's result family 279 (Mathematical physics) claims: Gives a polynomial-time uniform quantum circuit family that outputs the complete prime factorization of every integer with probability one.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Both gate count and qubit count are polynomial in the input length, and one fixed finite gate set suffices.
- *Exact quantum factoring over a fixed finite gate set*: We give a polynomial-time uniform quantum circuit family that outputs the complete prime factorization of every integer N ≥ 2 with probability one. A fixed finite set of bounded-arity gates suffices, and both the gate count and the number of qubits have polynomial worst-case bounds in the input length.
- Lean scope (lean/docs/279.md): The formalization constructs a polynomial-time uniform quantum circuit family that outputs the complete prime factorization of every integer $N\ge2$ with probability exactly one. The circuits use one fixed finite set of bounded-arity gates, and both the gate count and number of qubits have polynomial worst-case bounds in the bit length of $N$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Exact quantum factoring over a fixed finite gate set](https://github.com/openai/math/blob/main/preprints/Exact-quantum-factoring-over-a-fixed-finite-gate-set-September-25-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/279.md
- Comparator statement (Exact quantum factoring over a fixed finite gate set): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ExactQuantumFactoring.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
