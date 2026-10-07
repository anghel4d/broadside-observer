---
title: "A ZFC counterexample to Naimark's problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 297; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Naimarks-problem-in-ZFC-September-24-2026/naimark-counterexample-zfc.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2152
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A counterexample to Naimark's problem in ZFC"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Naimarks-problem-in-ZFC-September-24-2026/naimark-counterexample-zfc.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A ZFC counterexample to Naimark's problem

## One-sentence takeaway

OpenAI's result family 297 (Operator algebras) claims: Gives an alternative to [Tanaka's ZFC construction](https://arxiv.org/abs/2609.26930v1) of a unital infinite-dimensional simple complex C∗-algebra with a faithful tracial state and exactly one nonzero irreducible representation up to unitary equivalence.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Thus the unrestricted compact-operator characterization fails without additional set-theoretic assumptions; the counterexample is nonseparable.
- *A counterexample to Naimark's problem in ZFC*: We construct in ZFC a unital infinite-dimensional simple complex C∗-algebra with a faithful tracial state whose nonzero irreducible representations are all unitarily equivalent. This gives a negative answer to Naimark's problem without additional set-theoretic assumptions.
- Lean scope (lean/docs/297.md): Naimark's problem asks whether a $C^*$-algebra whose nonzero irreducible representations are all unitarily equivalent must be an algebra of compact operators. The formalization gives a counterexample in ZFC: a unital infinite-dimensional simple complex $C^*$-algebra with a faithful tracial state has that uniqueness property for irreducible representations but is not isomorphic to the compact operators on any Hilbert space.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No additional set-theoretic assumption is used.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A counterexample to Naimark's problem in ZFC](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Naimarks-problem-in-ZFC-September-24-2026/naimark-counterexample-zfc.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/297.md
- Comparator statement (Counterexample to Naimark's problem in ZFC): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Naimark.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
