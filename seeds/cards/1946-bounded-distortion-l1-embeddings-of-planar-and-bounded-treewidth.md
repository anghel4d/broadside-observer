---
title: "Bounded-distortion L1 embeddings of planar and bounded-treewidth graphs"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 089; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Planar-Graph-Metrics-Embed-into-L1-with-Constant-Distortion-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1946
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Planar Graph Metrics Embed into L1 with Constant Distortion"
    url: "https://github.com/openai/math/blob/main/preprints/Planar-Graph-Metrics-Embed-into-L1-with-Constant-Distortion-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "L1 Embeddings of Graphs of Bounded Treewidth"
    url: "https://github.com/openai/math/blob/main/preprints/L1-Embeddings-of-Graphs-of-Bounded-Treewidth-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Bounded-distortion L1 embeddings of planar and bounded-treewidth graphs

## One-sentence takeaway

OpenAI's result family 089 (Convex and metric geometry) claims: Resolves the planar and bounded-treewidth cases of the Gupta–Newman–Rabinovich–Sinclair conjecture.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Shortest-path metrics of finite connected graphs with arbitrary positive edge lengths embed into real L1 with universal distortion for planar graphs, and distortion depending only on treewidth for bounded-treewidth graphs. The corresponding multicommodity flow–cut gaps are uniformly bounded.
- *Planar Graph Metrics Embed into L1 with Constant Distortion*: We prove that every finite connected planar graph with arbitrary positive real edge lengths embeds into real L1 with a universal distortion bound. This resolves the planar embedding conjecture positively.
- *L1 Embeddings of Graphs of Bounded Treewidth*: For every fixed treewidth bound, the shortest-path metrics of finite connected graphs with arbitrary positive real edge lengths embed into real L1 with uniformly bounded distortion. This resolves the bounded-treewidth case of the Gupta–Newman–Rabinovich–Sinclair conjecture positively.
- Lean scope (lean/docs/089.md): The planar case of the Gupta–Newman–Rabinovich–Sinclair embedding problem asks for a universal distortion bound in $L_1$. The formalized result gives one constant $C$ for every finite connected planar graph with arbitrary positive real edge lengths: its weighted shortest-path metric embeds into real $L_1$ with distortion at most $C$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Planar Graph Metrics Embed into L1 with Constant Distortion](https://github.com/openai/math/blob/main/preprints/Planar-Graph-Metrics-Embed-into-L1-with-Constant-Distortion-September-23-2026/paper.pdf)
- Manuscript: [L1 Embeddings of Graphs of Bounded Treewidth](https://github.com/openai/math/blob/main/preprints/L1-Embeddings-of-Graphs-of-Bounded-Treewidth-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/089.md
- Comparator statement (Planar graph metrics in $L_1$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PlanarL1.lean
- Comparator statement (Bounded-treewidth graph metrics in $L_1$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BoundedTreewidthL1.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
