---
title: "Thomason model structures in all strict higher dimensions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 317; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Thomason-Model-Structures-in-Every-Strict-Higher-Dimension-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "topology"
  - "lean4"
  - "formalized"
seed_rank: 2172
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Thomason Model Structures in Every Strict Higher Dimension"
    url: "https://github.com/openai/math/blob/main/preprints/Thomason-Model-Structures-in-Every-Strict-Higher-Dimension-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Thomason model structures in all strict higher dimensions

## One-sentence takeaway

OpenAI's result family 317 (Topology) claims: Resolves the Ara–Maltsiniotis conjecture: for every n ≥ 1 and n = ω, small strict globular n-categories admit proper combinatorial Thomason model structures Quillen equivalent to simplicial sets.

## Why it matters here

Topology results are background for knot, surface and configuration-space reasoning in geometry code. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Thus strict higher categories model the homotopy theory of spaces in every stated dimension.
- *Thomason Model Structures in Every Strict Higher Dimension*: We prove the higher-dimensional Thomason model-structure conjecture of Ara and Maltsiniotis. For every $1\le n\le\infty$, the category of small strict globular n-categories admits a proper combinatorial model structure that is Quillen equivalent to simplicial sets. Its weak equivalences and fibrations are detected by the twice-extended Street nerve $\mathrm{Ex}^2N_n$, and the Quillen equivalence is given by $c_n\mathrm{Sd}^2\dashv\mathrm{Ex}^2N_n$.
- Lean scope (lean/docs/317.md): The formalization proves the higher-dimensional Thomason model-structure theorem for small strict globular $n$-categories in every positive finite dimension and in dimension $\omega$. Each category has the stated proper combinatorial model structure, Quillen equivalent to simplicial sets through the twice-subdivided categorification and twice-extended Street nerve adjunction.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The selected statements also identify weak equivalences by the Street nerve in all these dimensions.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Thomason Model Structures in Every Strict Higher Dimension](https://github.com/openai/math/blob/main/preprints/Thomason-Model-Structures-in-Every-Strict-Higher-Dimension-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/317.md
- Comparator statement (Thomason model structures and nerve detection in all positive strict dimensions): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThomasonModelStructures.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
