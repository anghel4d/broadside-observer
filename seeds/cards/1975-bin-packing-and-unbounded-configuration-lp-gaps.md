---
title: "Bin packing and unbounded configuration-LP gaps"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 118; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1975
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Additive hardness and unbounded configuration gaps in bin packing"
    url: "https://github.com/openai/math/blob/main/preprints/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Bin packing and unbounded configuration-LP gaps

## One-sentence takeaway

OpenAI's result family 118 (Theoretical computer science) claims: Disproves the modified integer round-up conjecture of Scheithauer and Terno: the integral bin-packing optimum can exceed its configuration linear-programming value by an arbitrarily large additive constant.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Approximating the optimum within any fixed additive constant is also NP-hard, even when every item exceeds 1/6 and each bin holds at most five items.
- *Additive hardness and unbounded configuration gaps in bin packing*: We disprove the Modified Integer Round-Up Conjecture for bin packing by constructing instances with arbitrarily large additive gaps between the configuration-LP value and the integral optimum. We also prove that, for every fixed nonnegative integer c, distinguishing instances that fit in B bins from those requiring more than $B+c$ bins is NP-hard. Both results hold with rational item sizes greater than 1/6, so each bin contains at most five items.
- Lean scope (lean/docs/118.md): The formalized results rule out a universal additive bound for the configuration linear program in bin packing. For every integer $c\ge0$, there are an integer $B$ and a rational instance with $5B$ items whose individual-copy and size-type configuration-LP values both equal $B$, but whose integral optimum is greater than $B+c$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Additive hardness and unbounded configuration gaps in bin packing](https://github.com/openai/math/blob/main/preprints/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/118.md
- Comparator statement (Unbounded configuration gaps and additive hardness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BinPackingGap.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
