---
title: "Perfect completeness for 2-to-1 games"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 105; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Perfect-completeness-for-2-to-1-games-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1962
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Perfect completeness for 2-to-1 games"
    url: "https://github.com/openai/math/blob/main/preprints/Perfect-completeness-for-2-to-1-games-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Perfect completeness for 2-to-1 games

## One-sentence takeaway

OpenAI's result family 105 (Theoretical computer science) claims: Proves Khot's 2-to-1 Games Conjecture with perfect completeness: for every fixed rational $\delta\in(0,1)$, it is NP-hard to distinguish satisfiable games from games whose optimum is at most δ, on explicit unweighted instances.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The alphabet depends only on δ, and every right-hand label has exactly two preimages under each constraint map.
- *Perfect completeness for 2-to-1 games*: We prove the 2-to-1 Games Conjecture with perfect completeness. For every fixed rational $\delta\in(0,1)$, it is NP-hard to distinguish satisfiable 2-to-1 games from games of value at most δ, with a fixed alphabet and an explicitly listed unweighted multiset of constraints.
- Lean scope (lean/docs/105.md): The formalized result establishes perfect-completeness hardness for 2-to-1 games. For every fixed rational $0<\delta<1$, a deterministic polynomial-time reduction from binary 3SAT produces a nonempty unweighted game of value exactly $1$ on satisfiable inputs and at most $\delta$ on unsatisfiable inputs.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Perfect completeness for 2-to-1 games](https://github.com/openai/math/blob/main/preprints/Perfect-completeness-for-2-to-1-games-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/105.md
- Comparator statement (Perfect-completeness reduction for 2-to-1 games): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PerfectCompleteness.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
