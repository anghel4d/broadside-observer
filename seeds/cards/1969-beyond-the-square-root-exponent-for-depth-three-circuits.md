---
title: "Beyond the square-root exponent for depth-three circuits"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 112; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Beyond-the-Square-Root-Exponent-for-Depth-Three-Boolean-Circuits-September-23-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1969
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Beyond the Square-Root Exponent for Depth-Three Boolean Circuits"
    url: "https://github.com/openai/math/blob/main/preprints/Beyond-the-Square-Root-Exponent-for-Depth-Three-Boolean-Circuits-September-23-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Beyond the square-root exponent for depth-three circuits

## One-sentence takeaway

OpenAI's result family 112 (Theoretical computer science) claims: Constructs a single language in deterministic polynomial time whose n-bit membership function requires $2^{\omega(\sqrt n)}$ total gates in unbounded-fan-in OR–AND–OR circuits, at every sufficiently large input length.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This crosses the square-root-exponent threshold for explicit depth-three Boolean circuit lower bounds.
- *Beyond the Square-Root Exponent for Depth-Three Boolean Circuits*: We construct a language in deterministic polynomial time whose n-bit membership function requires $2^{\omega(\sqrt n)}$ gates in an unbounded-fan-in OR–AND–OR circuit. The bound holds at every sufficiently large input length and counts all gates, including the bottom layer.
- Lean scope (lean/docs/112.md): The formalized result gives one polynomial-time Boolean language whose exact depth-three OR–AND–OR circuit size eventually exceeds $2^{A\sqrt n}$ for every fixed $A>0$. The language and its polynomial-time algorithm are fixed before $A$ is chosen, while circuits may vary with the input length.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Beyond the Square-Root Exponent for Depth-Three Boolean Circuits](https://github.com/openai/math/blob/main/preprints/Beyond-the-Square-Root-Exponent-for-Depth-Three-Boolean-Circuits-September-23-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/112.md
- Comparator statement (Depth-three circuit lower bound beyond every square-root constant): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DepthThree.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
