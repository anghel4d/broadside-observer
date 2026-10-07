---
title: "Finite lattice representation and undecidability"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 206; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Finite-Congruence-Lattices-Characterization-and-Undecidability-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebra"
  - "lean4"
  - "formalized"
seed_rank: 2061
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Finite congruence lattices: characterization and undecidability"
    url: "https://github.com/openai/math/blob/main/preprints/Finite-Congruence-Lattices-Characterization-and-Undecidability-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A negative solution to the finite lattice representation problem"
    url: "https://github.com/openai/math/blob/main/preprints/A-Negative-Solution-to-the-Finite-Lattice-Representation-Problem-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Finite lattice representation and undecidability

## One-sentence takeaway

OpenAI's result family 206 (Algebra) claims: Some finite lattices are not congruence lattices of any finite algebra, answering the finite lattice representation problem negatively.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Moreover, no algorithm decides whether a finite lattice has such a representation, or whether it is a full subgroup interval of a finite group.
- *Finite congruence lattices: characterization and undecidability*: We give an explicit colored-graph characterization of the finite nonempty lattices that occur as full congruence lattices of finite algebras, and prove that deciding this representation property is undecidable. In particular, the finite lattice representation problem has a negative answer. We also prove that recognition of full subgroup intervals in finite groups is undecidable.
- *A negative solution to the finite lattice representation problem*: We give a negative solution to the finite lattice representation problem. We prove that there is a finite nonempty lattice that is not the full congruence lattice of any finite nonempty algebra of any finite signature.
- Lean scope (lean/docs/206.md): The finite lattice representation problem asks which finite lattices occur as the full congruence lattice of a finite algebra. The formalization proves the paper's colored-graph characterization: a finite nonempty lattice is representable exactly when it admits the specified finite nonempty graph witness, whose edge colors encode the required congruence relations.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: This selected theorem is the equivalence with the graph criterion; the paper's undecidability and subgroup-interval conclusions are outside it.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Finite congruence lattices: characterization and undecidability](https://github.com/openai/math/blob/main/preprints/Finite-Congruence-Lattices-Characterization-and-Undecidability-September-24-2026/paper.pdf)
- Manuscript: [A negative solution to the finite lattice representation problem](https://github.com/openai/math/blob/main/preprints/A-Negative-Solution-to-the-Finite-Lattice-Representation-Problem-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/206.md
- Comparator statement (Colored-graph criterion for finite congruence lattices): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FiniteCongruenceGraph.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
