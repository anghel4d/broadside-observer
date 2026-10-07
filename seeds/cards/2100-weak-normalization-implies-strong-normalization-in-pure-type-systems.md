---
title: "Weak normalization implies strong normalization in pure type systems"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 245; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Weak-and-strong-normalization-in-pure-type-systems-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-logic"
  - "lean4"
  - "formalized"
seed_rank: 2100
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Weak and strong normalization in pure type systems"
    url: "https://github.com/openai/math/blob/main/preprints/Weak-and-strong-normalization-in-pure-type-systems-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Weak normalization implies strong normalization in pure type systems

## One-sentence takeaway

OpenAI's result family 245 (Mathematical logic) claims: Proves that weak normalization implies strong normalization for every pure type system: if every legal expression in every valid context has a β-normal form, every β-reduction sequence terminates.

## Why it matters here

Logic and set-theory results touch the type-theory and formal-methods corner of the library (Lean, ano's type system). More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This resolves the β-Barendregt–Geuvers–Klop conjecture, including nonfunctional rules and open contexts.
- *Weak and strong normalization in pure type systems*: We prove that every weakly β-normalizing pure type system is strongly β-normalizing. Both properties quantify over all legal expressions in all valid contexts, and reduction acts inside type annotations. No functionality hypothesis is required.
- Lean scope (lean/docs/245.md): The formalization proves the $\beta$-Barendregt–Geuvers–Klop conjecture for pure type systems: if every legal expression in every valid context has some terminating $\beta$-reduction sequence, then every $\beta$-reduction sequence from every such expression terminates. Reduction is allowed inside type annotations, and the specification may have arbitrary sorts and nonfunctional axioms or rules.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Weak and strong normalization in pure type systems](https://github.com/openai/math/blob/main/preprints/Weak-and-strong-normalization-in-pure-type-systems-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/245.md
- Comparator statement (Weak normalization implies strong normalization in every pure type system): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TypeSystemNormalization.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
