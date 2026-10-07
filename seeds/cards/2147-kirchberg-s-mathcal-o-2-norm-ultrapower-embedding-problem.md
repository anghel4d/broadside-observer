---
title: "Kirchberg's $\\mathcal O_2$ norm-ultrapower embedding problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 292; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-explicit-obstruction-to-nuclear-norm-ultrapower-embeddings-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2147
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An explicit obstruction to nuclear norm-ultrapower embeddings"
    url: "https://github.com/openai/math/blob/main/preprints/An-explicit-obstruction-to-nuclear-norm-ultrapower-embeddings-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Kirchberg's $\mathcal O_2$ norm-ultrapower embedding problem

## One-sentence takeaway

OpenAI's result family 292 (Operator algebras) claims: Constructs an explicit separable unital full group C∗-algebra that cannot embed unitally into the norm ultrapower of any fixed nonzero unital nuclear C∗-algebra, for any free ultrafilter on the natural numbers.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Taking the target to be $\mathcal O_2$ answers Kirchberg's norm-ultrapower embedding problem negatively.
- *An explicit obstruction to nuclear norm-ultrapower embeddings*: We give a negative answer to Kirchberg's norm-ultrapower embedding problem. We construct an explicit separable unital full group C∗-algebra that admits no unital embedding into Bω, for any nonzero unital nuclear C∗-algebra B and any free ultrafilter ω on ℕ. In particular, it does not embed unitally into $\mathcal O_2^\omega$.
- Lean scope (lean/docs/292.md): Kirchberg's norm-ultrapower embedding problem asks whether separable $C^*$-algebras embed into norm ultrapowers of nuclear algebras. The formalization constructs an explicit separable unital full group $C^*$-algebra that has no unital embedding into $B^\omega$ for any nonzero unital nuclear $C^*$-algebra $B$ and any free ultrafilter $\omega$ on $\mathbb N$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An explicit obstruction to nuclear norm-ultrapower embeddings](https://github.com/openai/math/blob/main/preprints/An-explicit-obstruction-to-nuclear-norm-ultrapower-embeddings-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/292.md
- Comparator statement (Obstruction to nuclear norm-ultrapower embeddings): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/NuclearUltrapower.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
