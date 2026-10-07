---
title: "Cannon's conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 246; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Modulus-Proof-of-Cannons-Conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2101
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A Modulus Proof of Cannon’s Conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-Modulus-Proof-of-Cannons-Conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Cannon's conjecture

## One-sentence takeaway

OpenAI's result family 246 (Group theory) claims: Every word-hyperbolic group with boundary homeomorphic to S2 admits a proper cocompact isometric action on hyperbolic three-space with finite kernel, proving Cannon's conjecture.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Every torsion-free such group is therefore the fundamental group of a closed hyperbolic three-manifold.
- *A Modulus Proof of Cannon’s Conjecture*: We prove that every hyperbolic group whose boundary is homeomorphic to the two-sphere admits a proper cocompact isometric action on hyperbolic three-space with finite kernel. This resolves Cannon's conjecture positively.
- Lean scope (lean/docs/246.md): Cannon's conjecture asks whether a hyperbolic group with boundary homeomorphic to the two-sphere acts geometrically on hyperbolic three-space. The formalization proves that such a group admits an isometric action on $\mathbb H^3$ that is proper and cocompact and has finite kernel.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Modulus Proof of Cannon’s Conjecture](https://github.com/openai/math/blob/main/preprints/A-Modulus-Proof-of-Cannons-Conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/246.md
- Comparator statement (Cannon's geometric-action conclusion): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CannonGeometricAction.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
