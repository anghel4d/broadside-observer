---
title: "Rigidity of the Turing degrees"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 241; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Rigidity-of-the-Turing-degrees-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-logic"
  - "lean4"
  - "formalized"
seed_rank: 2096
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Rigidity of the Turing degrees"
    url: "https://github.com/openai/math/blob/main/preprints/Rigidity-of-the-Turing-degrees-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Rigidity of the Turing degrees

## One-sentence takeaway

OpenAI's result family 241 (Mathematical logic) claims: Every order automorphism of the Turing degrees is the identity, resolving their rigidity problem.

## Why it matters here

Logic and set-theory results touch the type-theory and formal-methods corner of the library (Lean, ano's type system). More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Thus no nontrivial relabeling of degrees preserves the ordering by relative computability.
- *Rigidity of the Turing degrees*: We prove that every order automorphism of the full partial order of Turing degrees is the identity, resolving the rigidity conjecture for the Turing degrees positively.
- Lean scope (lean/docs/241.md): The rigidity problem asks whether the ordering of Turing degrees by relative computability has any nontrivial automorphism. The formalized result gives a negative answer: every order automorphism of the full Turing degrees of subsets of $\mathbb N$ fixes every degree, with no definability or genericity assumption.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The formalized result gives a negative answer: every order automorphism of the full Turing degrees of subsets of $\mathbb N$ fixes every degree, with no definability or genericity assumption.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Rigidity of the Turing degrees](https://github.com/openai/math/blob/main/preprints/Rigidity-of-the-Turing-degrees-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/241.md
- Comparator statement (Rigidity of the Turing degrees): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DegreeRigidity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
