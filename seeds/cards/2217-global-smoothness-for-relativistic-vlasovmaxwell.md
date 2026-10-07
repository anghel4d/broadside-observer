---
title: "Global smoothness for relativistic Vlasov–Maxwell"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 362; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Global-classical-solutions-of-the-three-dimensional-relativistic-Vlasov-Maxwell-system-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2217
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Global classical solutions of the three-dimensional relativistic Vlasov–Maxwell system"
    url: "https://github.com/openai/math/blob/main/preprints/Global-classical-solutions-of-the-three-dimensional-relativistic-Vlasov-Maxwell-system-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Global smoothness for relativistic Vlasov–Maxwell

## One-sentence takeaway

OpenAI's result family 362 (Partial differential equations) claims: Proves large-data global existence and uniqueness for the three-dimensional, one-species relativistic Vlasov–Maxwell system.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Smooth admissible initial data may be arbitrary provided the particle density is compactly supported and the electromagnetic fields have finite energy and bounded derivatives of every order; the solution remains smooth on every finite time interval.
- *Global classical solutions of the three-dimensional relativistic Vlasov–Maxwell system*: We prove global existence and uniqueness for arbitrary smooth admissible initial data in the three-dimensional, one-species relativistic Vlasov–Maxwell system. The particle density is initially compactly supported, and the electromagnetic fields have finite energy and bounded derivatives of all orders. The solution remains smooth on every finite time interval.
- Lean scope (lean/docs/362.md): The formalized result gives global existence and uniqueness for the three-dimensional one-species relativistic Vlasov–Maxwell system. The initial particle density is nonnegative, smooth, and compactly supported; the initial fields have bounded derivatives of all orders, finite energy, and satisfy both Gauss constraints.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No smallness, symmetry, or neutrality assumption is imposed.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Global classical solutions of the three-dimensional relativistic Vlasov–Maxwell system](https://github.com/openai/math/blob/main/preprints/Global-classical-solutions-of-the-three-dimensional-relativistic-Vlasov-Maxwell-system-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/362.md
- Comparator statement (Global classical Vlasov–Maxwell solutions): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/VlasovMaxwell.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/relativistic-vlasov-maxwell.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
