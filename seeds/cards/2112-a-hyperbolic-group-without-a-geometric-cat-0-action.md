---
title: "A hyperbolic group without a geometric CAT(0) action"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 257; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-hyperbolic-group-with-no-geometric-CAT0-action-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2112
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A hyperbolic group with no geometric CAT(0) action"
    url: "https://github.com/openai/math/blob/main/preprints/A-hyperbolic-group-with-no-geometric-CAT0-action-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A hyperbolic group without a geometric CAT(0) action

## One-sentence takeaway

OpenAI's result family 257 (Group theory) claims: Answers negatively whether every word-hyperbolic group is a CAT(0) group.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Constructs one with a finite classifying space but no proper cocompact isometric action on any proper complete $\mathop{\mathrm{CAT}}\nolimits (0)$ space, in any dimension.
- *A hyperbolic group with no geometric CAT(0) action*: We construct a hyperbolic group with a finite classifying space that admits no geometric action on a proper complete CAT(0) space. Consequently, a finite aspherical simplicial complex with a linear combinatorial disk-filling inequality need not have a finite locally CAT(0) homotopy model, and hence need not have a finite locally CAT(−1) model. Here metric models carry geodesic length metrics inducing the given complex topology.
- Lean scope (lean/docs/257.md): The formalized result constructs a finite connected aspherical complex with a linear disk-filling bound whose fundamental group is word-hyperbolic but admits no geometric action on a nonempty proper complete $\mathrm{CAT}(0)$ space. It also excludes locally $\mathrm{CAT}(-1)$ geodesic metrics on every finite complex homotopy equivalent to the witness.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A hyperbolic group with no geometric CAT(0) action](https://github.com/openai/math/blob/main/preprints/A-hyperbolic-group-with-no-geometric-CAT0-action-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/257.md
- Comparator statement (Hyperbolic group with no geometric CAT(0) action): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HyperbolicObstruction.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
