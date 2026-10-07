---
title: "Almost-linear-time exact matching and prescribed-degree factors in general graphs"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 120; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Almost-Linear-Time-Maximum-Cardinality-Matching-in-Sparse-General-Graphs-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "unformalized"
seed_rank: 1977
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Almost-Linear-Time Maximum-Cardinality Matching in General Graphs"
    url: "https://github.com/openai/math/blob/main/preprints/Almost-Linear-Time-Maximum-Cardinality-Matching-in-Sparse-General-Graphs-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Almost-linear-time exact matching and prescribed-degree factors in general graphs

## One-sentence takeaway

OpenAI's result family 120 (Theoretical computer science) claims: Gives a randomized algorithm finding an exact maximum-cardinality matching in any simple undirected graph in $(n+m)^{1+o(1)}$ word time, with success probability at least 2/3.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): The time bound holds on every computation path. The same guarantees apply to finding a spanning subgraph with prescribed admissible vertex degrees, or deciding that none exists.
- *Almost-Linear-Time Maximum-Cardinality Matching in General Graphs*: We prove that maximum-cardinality matching in a simple undirected graph with n vertices and m edges can be found by one uniform randomized algorithm in $(n+m)^{1+o(1)}$ time. The bound holds on every computation path in a logarithmic-word model, and the algorithm returns an explicit maximum matching with probability at least 2/3. An explicit reduction gives the same time and probability guarantees for deciding whether a simple host graph has a spanning subgraph with prescribed valid vertex degrees, and for finding one when it exists.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Almost-Linear-Time Maximum-Cardinality Matching in General Graphs](https://github.com/openai/math/blob/main/preprints/Almost-Linear-Time-Maximum-Cardinality-Matching-in-Sparse-General-Graphs-September-24-2026/main.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
