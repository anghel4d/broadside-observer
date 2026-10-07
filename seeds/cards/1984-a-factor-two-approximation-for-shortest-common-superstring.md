---
title: "A factor-two approximation for shortest common superstring"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 128; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Polynomial-Time-2-Approximation-for-Shortest-Common-Superstring-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1984
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "A Polynomial-Time 2-Approximation for Shortest Common Superstring"
    url: "https://github.com/openai/math/blob/main/preprints/A-Polynomial-Time-2-Approximation-for-Shortest-Common-Superstring-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A factor-two approximation for shortest common superstring

## One-sentence takeaway

OpenAI's result family 128 (Theoretical computer science) claims: Gives a deterministic polynomial-time algorithm constructing a common superstring of length at most twice the optimum for every finite family of explicitly represented strings.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The running time is polynomial in the full encoded input length, including symbol labels.
- *A Polynomial-Time 2-Approximation for Shortest Common Superstring*: We give a deterministic algorithm that, for every finite family of explicitly represented ordinary strings, outputs a common superstring of length at most twice the optimum in time polynomial in the total encoded input size, including symbol labels. The guarantee applies to the algorithm constructed here, not the classical maximum-overlap Greedy procedure.
- Lean scope (lean/docs/128.md): The shortest common superstring problem asks for the shortest string containing each input string as a contiguous substring. The formalized result gives one deterministic polynomial-time algorithm whose output is a common superstring of length at most twice the unrestricted optimum.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Polynomial-Time 2-Approximation for Shortest Common Superstring](https://github.com/openai/math/blob/main/preprints/A-Polynomial-Time-2-Approximation-for-Shortest-Common-Superstring-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/128.md
- Comparator statement (Polynomial-time 2-approximation for shortest common superstring): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Superstring.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
