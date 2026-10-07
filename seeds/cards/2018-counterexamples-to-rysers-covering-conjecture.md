---
title: "Counterexamples to Ryser’s covering conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 162; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Balanced-Counterexamples-to-Rysers-Conjecture-at-Prime-Orders-September-27-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2018
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Balanced counterexamples to Ryser's conjecture at prime orders"
    url: "https://github.com/openai/math/blob/main/preprints/Balanced-Counterexamples-to-Rysers-Conjecture-at-Prime-Orders-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A counterexample to Ryser's covering conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-Rysers-Covering-Conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Counterexamples to Ryser’s covering conjecture

## One-sentence takeaway

OpenAI's result family 162 (Combinatorics) claims: Disproves Ryser's covering conjecture by constructing intersecting $(q+1)$-partite, $(q+1)$-uniform hypergraphs with covering number $q+1$, rather than the predicted bound q, for every sufficiently large prime q.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A separate construction over extension fields also disproves Gyárfás's monochromatic tree-cover conjecture.
- *Balanced counterexamples to Ryser's conjecture at prime orders*: For every sufficiently large prime q, we construct a finite intersecting $(q+1)$-partite $(q+1)$-uniform hypergraph with covering number $q+1$ and exactly $q+1$ nonisolated vertices in each part. This disproves Ryser's covering conjecture, even for intersecting hypergraphs with equally sized parts.
- *A counterexample to Ryser's covering conjecture*: For every sufficiently large prime $s\equiv2\pmod3$ and every sufficiently large odd integer n, with the threshold depending on s, we construct an intersecting $(s^n+1)$-partite $(s^n+1)$-uniform hypergraph with covering number $s^n+1$. This disproves Ryser's covering conjecture in its intersecting case.
- Lean scope (lean/docs/162.md): Ryser's covering conjecture predicts that an intersecting $r$-partite hypergraph has a vertex cover of size at most $r-1$. The formalization proves that every sufficiently large prime $q$ has a finite intersecting $(q+1)$-partite, $(q+1)$-uniform hypergraph with covering number $q+1$ and exactly $q+1$ nonisolated vertices in each part.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Balanced counterexamples to Ryser's conjecture at prime orders](https://github.com/openai/math/blob/main/preprints/Balanced-Counterexamples-to-Rysers-Conjecture-at-Prime-Orders-September-27-2026/paper.pdf)
- Manuscript: [A counterexample to Ryser's covering conjecture](https://github.com/openai/math/blob/main/preprints/A-Counterexample-to-Rysers-Covering-Conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/162.md
- Comparator statement (Balanced Ryser counterexamples at prime orders): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BalancedRyser.lean
- Comparator statement (Fixed-prime Ryser counterexamples): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RyserCovering.lean
- Comparator statement (Counterexamples in odd extension degrees): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RyserOddExtensions.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
