---
title: "Deterministic nonbipartite Ramanujan graphs in every fixed degree"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 178; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Deterministic-nonbipartite-Ramanujan-graphs-in-every-fixed-degree-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "unformalized"
seed_rank: 2033
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Deterministic nonbipartite Ramanujan graphs in every fixed degree"
    url: "https://github.com/openai/math/blob/main/preprints/Deterministic-nonbipartite-Ramanujan-graphs-in-every-fixed-degree-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Deterministic nonbipartite Ramanujan graphs in every fixed degree

## One-sentence takeaway

OpenAI's result family 178 (Combinatorics) claims: For every fixed d ≥ 3, constructs a simple d-regular nonbipartite Ramanujan graph on every sufficiently large even number n of vertices, with every nonconstant adjacency eigenvalue strictly between $-2\sqrt{d-1}$ and $2\sqrt{d-1}$.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): A deterministic algorithm outputs the full adjacency list in polynomial bit time, with exponent depending on d.
- *Deterministic nonbipartite Ramanujan graphs in every fixed degree*: For every fixed integer d ≥ 3, we give a deterministic algorithm that constructs a simple nonbipartite d-regular Ramanujan graph on every sufficiently large even number n of vertices. It outputs the full adjacency list in polynomially many bit operations, with an exponent that may depend on d. Every nonconstant adjacency eigenvalue lies strictly between $-2\sqrt{d-1}$ and $2\sqrt{d-1}$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Deterministic nonbipartite Ramanujan graphs in every fixed degree](https://github.com/openai/math/blob/main/preprints/Deterministic-nonbipartite-Ramanujan-graphs-in-every-fixed-degree-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
