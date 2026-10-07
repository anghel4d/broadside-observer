---
title: "Separating choiceless counting from polynomial time and witnessed choice"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 243; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Choiceless-polynomial-time-with-counting-does-not-capture-polynomial-time-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-logic"
  - "lean4"
  - "formalized"
seed_rank: 2098
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Choiceless polynomial time with counting does not capture polynomial time"
    url: "https://github.com/openai/math/blob/main/preprints/Choiceless-polynomial-time-with-counting-does-not-capture-polynomial-time-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Witnessed symmetric choice is strictly stronger than choiceless polynomial time with counting"
    url: "https://github.com/openai/math/blob/main/preprints/Witnessed-symmetric-choice-is-strictly-stronger-than-choiceless-polynomial-time-with-counting-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Separating choiceless counting from polynomial time and witnessed choice

## One-sentence takeaway

OpenAI's result family 243 (Mathematical logic) claims: Confirms the Blass–Gurevich–Shelah noncapture conjecture: consistency of a linear system over 𝔽3 defines a polynomial-time query on unordered finite structures that choiceless polynomial time with counting cannot express.

## Why it matters here

Logic and set-theory results touch the type-theory and formal-methods corner of the library (Lean, ano's type system). More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A separate result shows that adding witnessed symmetric choice strictly increases expressive power. Both separations hold for the full counting formalism, allowing hereditarily finite sets of arbitrary finite rank.
- *Choiceless polynomial time with counting does not capture polynomial time*: We prove that choiceless polynomial time with counting does not capture polynomial time on unordered finite structures, confirming the noncapture conjecture of Blass, Gurevich and Shelah. A linear-consistency query over 𝔽3 in a fixed binary vocabulary is decidable in polynomial time but not in the full counting formalism.
- *Witnessed symmetric choice is strictly stronger than choiceless polynomial time with counting*: We prove that witnessed symmetric choice strictly increases the expressive power of choiceless polynomial time with counting. A fixed sentence with one witnessed-choice occurrence defines a Boolean query on every finite input that is not definable in the original counting formalism.
- Lean scope (lean/docs/243.md): The formalized result separates polynomial time from choiceless polynomial time with counting. It gives an explicit query on finite structures with eight relations that is invariant under isomorphism and decidable in polynomial time, but is not definable in the stated hereditarily finite-set language with cardinality and polynomial bounds on stages and intermediate objects.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Choiceless polynomial time with counting does not capture polynomial time](https://github.com/openai/math/blob/main/preprints/Choiceless-polynomial-time-with-counting-does-not-capture-polynomial-time-September-23-2026/paper.pdf)
- Manuscript: [Witnessed symmetric choice is strictly stronger than choiceless polynomial time with counting](https://github.com/openai/math/blob/main/preprints/Witnessed-symmetric-choice-is-strictly-stronger-than-choiceless-polynomial-time-with-counting-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/243.md
- Comparator statement (Polynomial-time query outside choiceless polynomial time): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ChoicelessPolynomialTime.lean
- Comparator statement (Strict expressive gain from one witnessed symmetric choice): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/WitnessedChoice.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
