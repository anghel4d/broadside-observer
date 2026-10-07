---
title: "Counterexamples to infinite matroid intersection and packing/covering"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 185; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-the-Infinite-Matroid-Packing-Covering-Conjecture-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2040
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A Counterexample to the Infinite Matroid Packing/Covering Conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-the-Infinite-Matroid-Packing-Covering-Conjecture-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Counterexamples to infinite matroid intersection and packing/covering

## One-sentence takeaway

OpenAI's result family 185 (Combinatorics) claims: Disproves the unrestricted infinite matroid intersection and packing/covering conjectures in ZFC, using two self-dual partitional matroids on a countably infinite ground set.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The same examples answer Joó’s partitional-matroid question negatively. They are neither finitary nor cofinitary, so Nash-Williams’ original finitary conjecture remains outside the result.
- *A Counterexample to the Infinite Matroid Packing/Covering Conjecture*: We construct in ZFC two self-dual partitional matroids on a countably infinite common ground set that admit neither a packing/covering partition nor an intersection witness. This disproves the unrestricted infinite matroid packing/covering and intersection conjectures and answers Joó's question for two partitional matroids negatively. The examples are neither finitary nor cofinitary.
- Lean scope (lean/docs/185.md): The infinite matroid packing/covering conjecture predicts a partition of a common ground set into parts admitting the corresponding packing and covering. The formalization constructs two self-dual partitional matroids on one countably infinite ground set that admit neither an independent covering nor a packing/covering partition.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The construction is in ordinary set theory with Choice and assumes no finitary restriction on the matroids.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Counterexample to the Infinite Matroid Packing/Covering Conjecture](https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-the-Infinite-Matroid-Packing-Covering-Conjecture-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/185.md
- Comparator statement (Infinite matroid packing/covering counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/InfiniteMatroid.lean
- Comparator statement (Partitional intersection, covering, and packing counterexamples): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/InfiniteMatroidCorollaries.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
