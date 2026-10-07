---
title: "The Euclidean Steinitz–Bergström bound"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 097; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Euclidean-Steinitz-Bergstrom-theorem-September-24-2026/The-Euclidean-Steinitz-Bergstrom-theorem-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1954
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Euclidean Steinitz–Bergström theorem"
    url: "https://github.com/openai/math/blob/main/preprints/The-Euclidean-Steinitz-Bergstrom-theorem-September-24-2026/The-Euclidean-Steinitz-Bergstrom-theorem-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Euclidean Steinitz–Bergström bound

## One-sentence takeaway

OpenAI's result family 097 (Convex and metric geometry) claims: Proves that any finite sequence in the Euclidean unit ball of ℝd admits signs keeping every partial sum within $C\sqrt d$, independently of length.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Consequently every zero-sum family can be reordered with the same bound on unsigned partial sums. A matching lower bound gives the optimal order $S_2(d)=\Theta(\sqrt d)$.
- *The Euclidean Steinitz–Bergström theorem*: Every prescribed-order finite sequence of vectors in the Euclidean unit ball of ℝd has one signing for which every signed prefix has norm at most $C\sqrt d$, with C absolute and independent of the sequence length. Consequently, every indexed zero-sum family of unit-ball vectors admits an ordering with the same bound for its unsigned partial sums. This determines the Euclidean Steinitz constant up to absolute factors, $S_2(d)=\Theta(\sqrt d)$, and resolves the Euclidean Steinitz–Bergström conjecture.
- Lean scope (lean/docs/097.md): The formalized result gives the Euclidean Steinitz–Bergström bound with one absolute constant $C$. For every finite family of vectors in the unit ball of $\mathbb R^d$, signs can be chosen so that every prefix in the prescribed order has norm at most $C\sqrt d$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Euclidean Steinitz–Bergström theorem](https://github.com/openai/math/blob/main/preprints/The-Euclidean-Steinitz-Bergstrom-theorem-September-24-2026/The-Euclidean-Steinitz-Bergstrom-theorem-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/097.md
- Comparator statement (Euclidean signed and reordered prefix bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SteinitzBergstrom.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
