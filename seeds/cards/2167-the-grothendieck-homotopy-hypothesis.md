---
title: "The Grothendieck homotopy hypothesis"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 312; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Grothendieck-homotopy-hypothesis-via-elementary-expansions-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "topology"
  - "lean4"
  - "formalized"
seed_rank: 2167
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Grothendieck homotopy hypothesis via elementary expansions"
    url: "https://github.com/openai/math/blob/main/preprints/The-Grothendieck-homotopy-hypothesis-via-elementary-expansions-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Grothendieck homotopy hypothesis

## One-sentence takeaway

OpenAI's result family 312 (Topology) claims: Proves the Grothendieck homotopy hypothesis for ∞-groupoids associated with every Grothendieck coherator in the Ara–Henry convention: these algebraic objects recover the homotopy theory of spaces.

## Why it matters here

Topology results are background for knot, surface and configuration-space reasoning in geometry code. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- *The Grothendieck homotopy hypothesis via elementary expansions*: We prove the Grothendieck homotopy hypothesis for every Grothendieck coherator in the Ara–Henry convention: its weak globular infinity-groupoids recover the homotopy theory of spaces. We also resolve Henry's pushout conjecture, showing that elementary expansions preserve components and all homotopy groups of cellular infinity-groupoids.
- Lean scope (lean/docs/312.md): The Grothendieck homotopy hypothesis asks whether algebraic $\infty$-groupoids recover the homotopy theory of spaces. The formalized result is the elementary-expansion theorem used in this approach: for every Grothendieck coherator in the Ara–Henry convention and every boundary-cellular model, attaching an $(n+1)$-disk along its source $n$-face induces a weak equivalence.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Grothendieck homotopy hypothesis via elementary expansions](https://github.com/openai/math/blob/main/preprints/The-Grothendieck-homotopy-hypothesis-via-elementary-expansions-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/312.md
- Comparator statement (Elementary-expansion weak equivalence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GrothendieckElementaryExpansion.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
