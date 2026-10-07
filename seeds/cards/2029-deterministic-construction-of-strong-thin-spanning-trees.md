---
title: "Deterministic construction of strong thin spanning trees"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 174; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-strong-thin-tree-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2029
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The strong thin tree conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-strong-thin-tree-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A polynomial-time construction of strong thin trees"
    url: "https://github.com/openai/math/blob/main/preprints/A-polynomial-time-construction-of-strong-thin-trees-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Deterministic construction of strong thin spanning trees

## One-sentence takeaway

OpenAI's result family 174 (Combinatorics) claims: Resolves the strong thin-tree conjecture constructively.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Every finite loopless k-edge-connected multigraph on at least two vertices has a spanning tree containing at most a universal $C/k$ fraction of the edges of every cut. Such a tree can be found deterministically in polynomial time, even with binary-encoded parallel-edge multiplicities.
- *The strong thin tree conjecture*: We prove that every finite loopless k-edge-connected multigraph on at least two vertices, with k ≥ 1, has a spanning tree meeting each cut in at most $C/k$ times the size of the cut, where C is a universal constant. This resolves the strong thin tree conjecture.
- *A polynomial-time construction of strong thin trees*: We give a deterministic polynomial-time construction of strong thin trees. Given a finite k-edge-connected loopless multigraph on at least one vertex, the algorithm constructs a spanning tree meeting every cut in at most a $C/k$ fraction of its edges, for a universal constant C. The running time is polynomial in the binary input length, including when parallel-edge multiplicities are encoded in binary.
- Lean scope (lean/docs/174.md): The strong thin-tree conjecture asks for spanning trees that cross every cut sparsely relative to the original graph. The formalized result gives one absolute constant $C>0$ such that every finite loopless $k$-edge-connected multigraph with at least two vertices has a spanning tree crossing each nontrivial cut at most $(C/k)$ times the original cut size.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The strong thin tree conjecture](https://github.com/openai/math/blob/main/preprints/The-strong-thin-tree-conjecture-September-23-2026/paper.pdf)
- Manuscript: [A polynomial-time construction of strong thin trees](https://github.com/openai/math/blob/main/preprints/A-polynomial-time-construction-of-strong-thin-trees-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/174.md
- Comparator statement (Strong thin-tree bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/StrongThinTree.lean
- Comparator statement (Polynomial-time construction of strong thin trees): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/AlgorithmicThinTrees.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
