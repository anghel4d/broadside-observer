---
title: "The Harary–Hill and Zarankiewicz crossing-number formulas"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 165; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-crossing-number-of-complete-graphs-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2020
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The crossing number of complete graphs"
    url: "https://github.com/openai/math/blob/main/preprints/The-crossing-number-of-complete-graphs-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The crossing number of complete bipartite graphs"
    url: "https://github.com/openai/math/blob/main/preprints/The-crossing-number-of-complete-bipartite-graphs-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Harary–Hill and Zarankiewicz crossing-number formulas

## One-sentence takeaway

OpenAI's result family 165 (Combinatorics) claims: Resolves the Harary–Hill conjecture and Turán's brickyard problem in the Zarankiewicz formulation, determining the crossing numbers of every complete and complete bipartite graph.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The result proves the optimality of the classical drawings among all plane drawings with continuous edge arcs.
- *The crossing number of complete graphs*: We prove the Harary–Hill conjecture: for every positive integer n, the ordinary crossing number of the complete graph Kn is

$\displaystyle \frac14\left\lfloor\frac n2\right\rfloor \left\lfloor\frac{n-1}{2}\right\rfloor \left\lfloor\frac{n-2}{2}\right\rfloor \left\lfloor\frac{n-3}{2}\right\rfloor.$
- *The crossing number of complete bipartite graphs*: We prove the Zarankiewicz crossing-number conjecture, resolving Turán's brickyard problem. For all positive integers m, n, the ordinary crossing number of the complete bipartite graph $K_{m,n}$ is

$\displaystyle \left\lfloor\frac m2\right\rfloor \left\lfloor\frac{m-1}{2}\right\rfloor \left\lfloor\frac n2\right\rfloor \left\lfloor\frac{n-1}{2}\right\rfloor.$
- Lean scope (lean/docs/165.md): The formalized result proves Hill's proposed formula for the crossing number of the complete graph: for every $n\ge3$, $\mathrm{cr}(K_n)=\frac14\lfloor n/2\rfloor\lfloor(n-1)/2\rfloor\lfloor(n-2)/2\rfloor\lfloor(n-3)/2\rfloor$. It proves the lower bound and constructs a matching two-page drawing.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The crossing number of complete graphs](https://github.com/openai/math/blob/main/preprints/The-crossing-number-of-complete-graphs-September-23-2026/paper.pdf)
- Manuscript: [The crossing number of complete bipartite graphs](https://github.com/openai/math/blob/main/preprints/The-crossing-number-of-complete-bipartite-graphs-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/165.md
- Comparator statement (Crossing number of complete graphs): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CompleteCrossing.lean
- Comparator statement (Crossing number of complete bipartite graphs): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BipartiteCrossing.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
