---
title: "Saxl’s conjecture and universal tensor squares"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 205; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Universal-Tensor-Squares-for-Symmetric-Groups-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebra"
  - "lean4"
  - "formalized"
seed_rank: 2060
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Universal Tensor Squares for Symmetric Groups"
    url: "https://github.com/openai/math/blob/main/preprints/Universal-Tensor-Squares-for-Symmetric-Groups-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Cyclic Polytabloid Proof of Saxl's Conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-Cyclic-Polytabloid-Proof-of-Saxls-Conjecture-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Saxl’s conjecture and universal tensor squares

## One-sentence takeaway

OpenAI's result family 205 (Algebra) claims: Proves Saxl's conjecture: the tensor square of every staircase representation contains every irreducible complex representation of the corresponding symmetric group.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): More generally, every Sn with $n\notin\{2,4,9\}$ has an irreducible representation whose tensor square contains all irreducibles.
- *Universal Tensor Squares for Symmetric Groups*: For every positive integer n other than 2, 4, and 9, we prove that some irreducible complex representation of Sn has a tensor square containing every irreducible representation. This resolves the tensor square conjecture for symmetric groups affirmatively.
- *A Cyclic Polytabloid Proof of Saxl's Conjecture*: For every staircase partition, we prove that the tensor square of the corresponding irreducible complex representation of the symmetric group contains every irreducible representation of that group. This proves Saxl's conjecture.
- Lean scope (lean/docs/205.md): The formalization proves the universal tensor-square conjecture for symmetric groups in the stated range. For every positive integer $n\notin\{2,4,9\}$, it constructs an irreducible complex representation of $S_n$ whose tensor square contains every irreducible complex representation of $S_n$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Universal Tensor Squares for Symmetric Groups](https://github.com/openai/math/blob/main/preprints/Universal-Tensor-Squares-for-Symmetric-Groups-September-24-2026/main.pdf)
- Manuscript: [A Cyclic Polytabloid Proof of Saxl's Conjecture](https://github.com/openai/math/blob/main/preprints/A-Cyclic-Polytabloid-Proof-of-Saxls-Conjecture-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/205.md
- Comparator statement (Universal irreducible tensor squares for symmetric groups): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/UniversalTensorSquares.lean
- Comparator statement (Saxl's conjecture): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Saxl.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
