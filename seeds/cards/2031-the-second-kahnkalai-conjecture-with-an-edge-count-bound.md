---
title: "The second Kahn–Kalai conjecture with an edge-count bound"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 176; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-second-Kahn-Kalai-conjecture-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2031
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The second Kahn–Kalai conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-second-Kahn-Kalai-conjecture-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The second Kahn–Kalai conjecture with an edge-count bound

## One-sentence takeaway

OpenAI's result family 176 (Combinatorics) claims: Proves the second Kahn–Kalai conjecture: for every finite simple graph H with h ≥ 1 edges and at most n vertices, its appearance threshold in $G(n,p)$ is at most $C p_{\mathrm E}(n,H)(1+\log_2 h)$, with universal C.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Here $p_{\mathrm E}$ is the least density at which every subgraph of H has expected copy count at least 1/2.
- *The second Kahn–Kalai conjecture*: We prove the second Kahn–Kalai conjecture. For every finite simple graph H with h ≥ 1 edges and at most n vertices, the threshold for $G(n,p)$ to contain an ordinary copy of H is at most $C p_{\mathrm E}(n,H)(1+\log_2 h)$, where C is universal. Here $p_{\mathrm E}(n,H)$ is the least density at which every subgraph of H has expected copy count at least one half.
- Lean scope (lean/docs/176.md): The second Kahn–Kalai conjecture compares the threshold for a random graph to contain a fixed graph with its expectation threshold. The formalized result proves the comparison up to a universal factor times $1+\log_2|E(H)|$, and hence up to a universal factor times $\log_2 n$, for every graph $H$ with at least one edge and at most $n$ vertices, $n\ge2$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The second Kahn–Kalai conjecture](https://github.com/openai/math/blob/main/preprints/The-second-Kahn-Kalai-conjecture-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/176.md
- Comparator statement (Second Kahn–Kalai threshold bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SecondKahnKalai.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
