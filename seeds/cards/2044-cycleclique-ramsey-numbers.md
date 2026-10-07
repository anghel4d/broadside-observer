---
title: "Cycle–clique Ramsey numbers"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 189; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Cycle-clique-Ramsey-numbers-September-25-2026/Cycle-clique-Ramsey-numbers-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2044
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Cycle--clique Ramsey numbers"
    url: "https://github.com/openai/math/blob/main/preprints/Cycle-clique-Ramsey-numbers-September-25-2026/Cycle-clique-Ramsey-numbers-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Cycle–clique Ramsey numbers

## One-sentence takeaway

OpenAI's result family 189 (Combinatorics) claims: Proves the Erdős–Faudree–Rousseau–Schelp conjecture: $R(C_m,K_n)=(m-1)(n-1)+1$ for every $m\ge n\ge3$, except $R(C_3,K_3)=6$.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This is the exact threshold forcing a red m-cycle or a blue n-clique in every red–blue coloring of a complete graph.
- *Cycle--clique Ramsey numbers*: We prove that $R(C_m,K_n)=(m-1)(n-1)+1$ for every pair of integers $m\ge n\ge3$ other than $(m,n)=(3,3)$, for which $R(C_3,K_3)=6$. This establishes the cycle–clique conjecture of Erdős, Faudree, Rousseau and Schelp. The proof combines expansion in a minimal counterexample with a large-clique lemma and an optimization of paths joining clique vertices.
- Lean scope (lean/docs/189.md): The cycle–clique Ramsey conjecture predicts the exact number of vertices forcing either a cycle $C_m$ or a clique $K_n$ in complementary colors. The formalization proves $R(C_m,K_n)=(m-1)(n-1)+1$ for all integers $m\ge n\ge3$ except $(m,n)=(3,3)$, where it proves $R(C_3,K_3)=6$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Cycle--clique Ramsey numbers](https://github.com/openai/math/blob/main/preprints/Cycle-clique-Ramsey-numbers-September-25-2026/Cycle-clique-Ramsey-numbers-September-25-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/189.md
- Comparator statement (Exact cycle–clique Ramsey numbers): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CycleCliqueRamsey.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
