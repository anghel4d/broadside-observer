---
title: "Lech’s multiplicity conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 194; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Lechs-multiplicity-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebra"
  - "lean4"
  - "formalized"
seed_rank: 2049
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Lech's multiplicity conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/Lechs-multiplicity-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Lech’s multiplicity conjecture

## One-sentence takeaway

OpenAI's result family 194 (Algebra) claims: Proves $e(R)\le e(S)$ for every flat local homomorphism of nonzero Noetherian local rings, where e is Hilbert–Samuel multiplicity.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This resolves Lech's conjecture in every dimension and characteristic.
- *Lech's multiplicity conjecture*: We prove Lech's multiplicity conjecture: Hilbert–Samuel multiplicity cannot decrease under a flat local homomorphism of nonzero Noetherian local rings. The result holds in arbitrary dimension, with no restrictions on the residue fields or characteristics.
- Lean scope (lean/docs/194.md): Lech's multiplicity conjecture compares Hilbert–Samuel multiplicities across flat local maps. The linked formalization covers a supporting characteristic-$p$ comparison over a complete Noetherian local domain $D$: for a complex satisfying the stated short-complex and finite-length homology conditions, its Frobenius multiplicity sequence converges to its Dutta multiplicity, and the Hilbert–Samuel multiplicity of $D$ is at most that Dutta multiplicity.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: This selected statement is the complete-domain Dutta comparison. The paper's full flat-local result in arbitrary characteristic is outside it.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Lech's multiplicity conjecture](https://github.com/openai/math/blob/main/preprints/Lechs-multiplicity-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/194.md
- Comparator statement (Complete-domain Dutta multiplicity comparison): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DuttaDomain.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
