---
title: "A finitely generated Eilenberg–Ganea counterexample"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 249; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-finitely-generated-counterexample-to-the-Eilenberg-Ganea-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2104
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A finitely generated counterexample to the Eilenberg–Ganea conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-finitely-generated-counterexample-to-the-Eilenberg-Ganea-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A finitely generated Eilenberg–Ganea counterexample

## One-sentence takeaway

OpenAI's result family 249 (Group theory) claims: Constructs a finitely generated residually finite group with integral cohomological dimension two and geometric dimension three, disproving the Eilenberg–Ganea conjecture.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): It has no two-dimensional classifying space, even with infinitely many cells.
- *A finitely generated counterexample to the Eilenberg–Ganea conjecture*: We construct a finitely generated residually finite group of integral cohomological dimension two and geometric dimension three, disproving the Eilenberg–Ganea conjecture.
- Lean scope (lean/docs/249.md): The Eilenberg–Ganea conjecture predicts that a group of integral cohomological dimension two has a two-dimensional classifying space. The formalization constructs a finitely generated residually finite group of cohomological dimension two that has a three-dimensional classifying space but no two-dimensional one.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A finitely generated counterexample to the Eilenberg–Ganea conjecture](https://github.com/openai/math/blob/main/preprints/A-finitely-generated-counterexample-to-the-Eilenberg-Ganea-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/249.md
- Comparator statement (Counterexample to the Eilenberg–Ganea conjecture): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EilenbergGanea.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
