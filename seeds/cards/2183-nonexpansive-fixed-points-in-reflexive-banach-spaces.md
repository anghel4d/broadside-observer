---
title: "Nonexpansive fixed points in reflexive Banach spaces"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 328; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Fixed-Points-of-Nonexpansive-Maps-in-Reflexive-Banach-Spaces-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2183
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Fixed Points of Nonexpansive Maps in Reflexive Banach Spaces"
    url: "https://github.com/openai/math/blob/main/preprints/Fixed-Points-of-Nonexpansive-Maps-in-Reflexive-Banach-Spaces-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Nonexpansive fixed points in reflexive Banach spaces

## One-sentence takeaway

OpenAI's result family 328 (Functional analysis) claims: Resolves Kirk's reflexive-space fixed-point problem: every nonexpansive selfmap of a nonempty closed bounded convex subset of a real reflexive Banach space has a fixed point.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The result uses the original norm, without assuming uniform convexity.
- *Fixed Points of Nonexpansive Maps in Reflexive Banach Spaces*: Every nonexpansive selfmap of a nonempty closed bounded convex subset of a real reflexive Banach space has a fixed point. This resolves the reflexive-space fixed point problem for the given norm.
- Lean scope (lean/docs/328.md): The fixed-point question asks whether reflexivity suffices for nonexpansive maps on bounded convex sets. The formalized result gives an affirmative answer: every nonexpansive self-map of a nonempty closed bounded convex subset of a real reflexive Banach space has a fixed point in the original norm.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Zero and nonseparable spaces are included, with no uniform convexity, normal structure, or weak-continuity assumption.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Fixed Points of Nonexpansive Maps in Reflexive Banach Spaces](https://github.com/openai/math/blob/main/preprints/Fixed-Points-of-Nonexpansive-Maps-in-Reflexive-Banach-Spaces-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/328.md
- Comparator statement (Nonexpansive fixed points in reflexive spaces): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ReflexiveFixedPoints.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
