---
title: "Uniform influence and sharp thresholds for graph and hypergraph properties"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 186; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-uniform-influence-bound-for-hypergraph-properties-October-5-2026/hypergraph-influences.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2041
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A uniform influence bound for hypergraph properties"
    url: "https://github.com/openai/math/blob/main/preprints/A-uniform-influence-bound-for-hypergraph-properties-October-5-2026/hypergraph-influences.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Sharp Threshold Bound for Monotone Graph Properties"
    url: "https://github.com/openai/math/blob/main/preprints/A-Sharp-Threshold-Bound-for-Monotone-Graph-Properties-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Uniform influence and sharp thresholds for graph and hypergraph properties

## One-sentence takeaway

OpenAI's result family 186 (Combinatorics) claims: Proves the Friedgut–Kalai threshold-width conjectures for graphs and fixed-uniformity hypergraphs.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For fixed $0\lt \varepsilon\lt 1/2$, every nontrivial increasing relabeling-invariant property crosses from probability ε to $1-\varepsilon$ within width $O((\log n)^{-2})$ for graphs and $O_r((\log n)^{-r/(r-1)})$ for r-uniform hypergraphs, r ≥ 3. The hypergraph influence bound also applies to nonmonotone properties.
- *A uniform influence bound for hypergraph properties*: For every fixed integer r ≥ 3, we prove that every relabeling-invariant Boolean property of simple r-uniform hypergraphs on n vertices satisfies $\mathop{\mathrm{Var}}\nolimits _p(f)\le C_r I_p(f)/(\log n)^{r/(r-1)}$. The constant depends only on r, and the bound holds uniformly for all $0\lt p\lt 1$ without a monotonicity assumption. For increasing properties, it gives the corresponding threshold-width bound with exponent $r/(r-1)$, proving the hypergraph threshold-width conjecture of Friedgut and Kalai.
- *A Sharp Threshold Bound for Monotone Graph Properties*: We prove the Friedgut–Kalai sharp-threshold conjecture. For every integer n ≥ 2, every nontrivial increasing family of graphs on n vertices invariant under all vertex permutations, and every $0\lt \varepsilon\lt 1/2$, the edge probabilities at which its probability equals ε and $1-\varepsilon$ differ by at most $C\log(1/(2\varepsilon))/(\log n)^2$, for a universal constant C.
- Lean scope (lean/docs/186.md): The Friedgut–Kalai sharp-threshold conjecture concerns how quickly a nontrivial increasing graph property appears in the independent-edge random graph. For every $n\ge2$, every such property invariant under vertex relabeling, and $0<\varepsilon<1/2$, the formalization proves that the edge-probability interval between probabilities $\varepsilon$ and $1-\varepsilon$ has width at most $2^{19}\log(1/(2\varepsilon))/(\log n)^2$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A uniform influence bound for hypergraph properties](https://github.com/openai/math/blob/main/preprints/A-uniform-influence-bound-for-hypergraph-properties-October-5-2026/hypergraph-influences.pdf)
- Manuscript: [A Sharp Threshold Bound for Monotone Graph Properties](https://github.com/openai/math/blob/main/preprints/A-Sharp-Threshold-Bound-for-Monotone-Graph-Properties-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/186.md
- Comparator statement (Sharp threshold width for monotone graph properties): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SharpThreshold.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
