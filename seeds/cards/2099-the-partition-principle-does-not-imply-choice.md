---
title: "The Partition Principle does not imply Choice"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 244; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Partition-Principle-does-not-imply-Choice-September-24-2026/partition-principle-without-choice.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-logic"
  - "lean4"
  - "formalized"
seed_rank: 2099
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Partition Principle does not imply Choice"
    url: "https://github.com/openai/math/blob/main/preprints/The-Partition-Principle-does-not-imply-Choice-September-24-2026/partition-principle-without-choice.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Partition Principle does not imply Choice

## One-sentence takeaway

OpenAI's result family 244 (Mathematical logic) claims: Assuming ZF is consistent, constructs a model in which every surjective image of a set injects into that set, yet the axiom of choice fails.

## Why it matters here

Logic and set-theory results touch the type-theory and formal-methods corner of the library (Lean, ano's type system). More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Choice for ordinal-indexed families still holds. From any countable transitive model of ZFC, a separate construction gives a transitive symmetric extension with these properties and no new countable sequences of ground-model elements.
- *The Partition Principle does not imply Choice*: We prove that the Partition Principle does not imply the Axiom of Choice: if ZF is consistent, then so is ZF with the Partition Principle, Choice for ordinal-indexed families, and the negation of the Axiom of Choice. Separately, over every countable transitive model of ZFC, we construct a transitive symmetric model of this theory with the same ordinals and no new countable sequences of ground elements.
- Lean scope (lean/docs/244.md): The Partition Principle says that every surjection admits an injection in the reverse direction. The formalization proves the relative-consistency implication: if ZF is consistent, then so is ZF with the Partition Principle, Choice for ordinal-indexed families, and failure of the Axiom of Choice.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's stronger transitive-model preservation assertions are outside that selected construction.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Partition Principle does not imply Choice](https://github.com/openai/math/blob/main/preprints/The-Partition-Principle-does-not-imply-Choice-September-24-2026/partition-principle-without-choice.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/244.md
- Comparator statement (Partition Principle without Choice from a ground model): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PartitionPrinciple.lean
- Comparator statement (Relative consistency of the Partition Principle with ordinal Choice and failure of Choice): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PartitionConsistency.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
