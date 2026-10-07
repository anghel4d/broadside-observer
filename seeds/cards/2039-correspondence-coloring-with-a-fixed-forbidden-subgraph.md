---
title: "Correspondence coloring with a fixed forbidden subgraph"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 184; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Correspondence-Coloring-Graphs-with-a-Forbidden-Clique-October-5-2026/correspondence-coloring-forbidden-clique.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2039
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Correspondence coloring graphs with a forbidden clique"
    url: "https://github.com/openai/math/blob/main/preprints/Correspondence-Coloring-Graphs-with-a-Forbidden-Clique-October-5-2026/correspondence-coloring-forbidden-clique.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A logarithmic independence bound for clique-free graphs"
    url: "https://github.com/openai/math/blob/main/preprints/A-Logarithmic-Independence-Bound-for-Clique-Free-Graphs-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Correspondence coloring with a fixed forbidden subgraph

## One-sentence takeaway

OpenAI's result family 184 (Combinatorics) claims: Proves the Alon–Krivelevich–Sudakov coloring conjecture in correspondence-coloring form: graphs avoiding any fixed subgraph F need $O_F(\Delta/\log\Delta)$ colors when their maximum degree Δ is sufficiently large.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Also proves the Ajtai–Erdős–Komlós–Szemerédi independence conjecture: for fixed r ≥ 4, every n-vertex Kr-free graph of average degree d ≥ 2 has an independent set of size $\Omega_r(n\log d/d)$.
- *Correspondence coloring graphs with a forbidden clique*: For every fixed integer r ≥ 4, we prove that every Kr-free graph of sufficiently large maximum degree Δ has correspondence chromatic number $O_r(\Delta/\log\Delta)$. This resolves the Alon–Krivelevich–Sudakov coloring conjecture in the stronger correspondence-coloring form. The same bound, with a constant depending on F, holds when any fixed graph F is excluded as an ordinary subgraph.
- *A logarithmic independence bound for clique-free graphs*: For every fixed integer r ≥ 4, every Kr-free graph on n vertices with average degree d ≥ 2 has an independent set of size at least $c_r n\log d/d$, where $c_r\gt 0$ depends only on r. This proves the fixed-clique-size independence conjecture of Ajtai, Erdős, Komlós and Szemerédi.
- Lean scope (lean/docs/184.md): The formalized result gives a logarithmic improvement in the independence number of clique-free graphs. For every fixed integer $r\ge4$, there is $c_r>0$ such that every finite $K_r$-free simple graph on $n$ vertices with average degree $d\ge2$ has an independent set of size at least $c_r n\log d/d$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Correspondence coloring graphs with a forbidden clique](https://github.com/openai/math/blob/main/preprints/Correspondence-Coloring-Graphs-with-a-Forbidden-Clique-October-5-2026/correspondence-coloring-forbidden-clique.pdf)
- Manuscript: [A logarithmic independence bound for clique-free graphs](https://github.com/openai/math/blob/main/preprints/A-Logarithmic-Independence-Bound-for-Clique-Free-Graphs-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/184.md
- Comparator statement (Logarithmic independence bound for clique-free graphs): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CliqueFreeLog.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
