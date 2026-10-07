---
title: "Boone–Higman embeddings with higher finiteness"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 250; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Finite-algebraic-envelopes-and-the-Boone-Higman-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2105
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Finite algebraic envelopes and the Boone–Higman conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/Finite-algebraic-envelopes-and-the-Boone-Higman-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Simple F∞ overgroups of groups with decidable word problem"
    url: "https://github.com/openai/math/blob/main/preprints/Simple-F-infinity-overgroups-of-groups-with-decidable-word-problem-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A universal group of type F∞"
    url: "https://github.com/openai/math/blob/main/preprints/A-universal-group-of-type-F-infinity-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Boone–Higman embeddings with higher finiteness

## One-sentence takeaway

OpenAI's result family 250 (Group theory) claims: A finitely generated group has decidable word problem exactly when it embeds in a finitely presented simple group, proving the Boone–Higman conjecture.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The target can have type F∞: a classifying space with finitely many cells in each dimension. A single group of type F∞ can also contain every finitely presented group.
- *Finite algebraic envelopes and the Boone–Higman conjecture*: We prove the Boone–Higman conjecture. A finitely generated group has decidable word problem if and only if it embeds in a finitely presented simple group.
- *Simple F∞ overgroups of groups with decidable word problem*: Every finitely generated group with decidable word problem embeds in a simple group of type F∞. This resolves the higher-finiteness strengthening of the Boone–Higman conjecture.
- *A universal group of type F∞*: We construct a single group of type F∞ containing every finitely presented group. Its finitely generated subgroups, up to isomorphism, are exactly the finitely generated recursively presented groups. This answers the F∞ form of the higher-dimensional Higman embedding question.
- Lean scope (lean/docs/250.md): The Boone–Higman conjecture characterizes finitely generated groups with decidable word problem by embeddings into finitely presented simple groups. The formalization proves the equivalence in full: a finitely generated group has a computable word problem for a finite generating set exactly when it embeds by an injective homomorphism into a finitely presented simple group.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No additional finiteness property of the original group is assumed. No word-problem assumption is imposed, and the classifying space need not be finite-dimensional or have finitely many cells in total.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Finite algebraic envelopes and the Boone–Higman conjecture](https://github.com/openai/math/blob/main/preprints/Finite-algebraic-envelopes-and-the-Boone-Higman-conjecture-September-23-2026/paper.pdf)
- Manuscript: [Simple F∞ overgroups of groups with decidable word problem](https://github.com/openai/math/blob/main/preprints/Simple-F-infinity-overgroups-of-groups-with-decidable-word-problem-September-23-2026/paper.pdf)
- Manuscript: [A universal group of type F∞](https://github.com/openai/math/blob/main/preprints/A-universal-group-of-type-F-infinity-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/250.md
- Comparator statement (Boone–Higman equivalence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BooneHigman.lean
- Comparator statement (Simple type $F_\infty$ overgroups of groups with decidable word problem): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SimpleOvergroups.lean
- Comparator statement (Universal group of type $F_\infty$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/UniversalFInfinity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
