---
title: "A counterexample to metric-entropy duality"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 329; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Counterexamples-to-the-duality-conjecture-for-metric-entropy-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2184
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Counterexamples to the duality conjecture for metric entropy"
    url: "https://github.com/openai/math/blob/main/preprints/Counterexamples-to-the-duality-conjecture-for-metric-entropy-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A counterexample to metric-entropy duality

## One-sentence takeaway

OpenAI's result family 329 (Functional analysis) claims: Disproves Pietsch's dimension-free duality conjecture for metric entropy.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Origin-symmetric convex bodies violate every proposed choice of universal constants in the conjectured comparison between covering numbers and those of the polar bodies, even when the covering body is a cube.
- *Counterexamples to the duality conjecture for metric entropy*: We disprove Pietsch's dimension-free duality conjecture for metric entropy. For every proposed pair of universal constants, we construct origin-symmetric convex bodies that violate the corresponding covering-entropy inequality, already when the covering body is a cube.
- Lean scope (lean/docs/329.md): Metric-entropy duality predicts a universal comparison between covering numbers of convex bodies and their polars. The formalized result disproves such a comparison: for every $a,b\ge1$, there is an origin-symmetric convex body $K$ in a positive finite dimension with $\log N(K,B_\infty)>b\log N(B_\infty^\circ,a^{-1}K^\circ)$, where $N$ is the least number of translates in a finite cover.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Counterexamples to the duality conjecture for metric entropy](https://github.com/openai/math/blob/main/preprints/Counterexamples-to-the-duality-conjecture-for-metric-entropy-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/329.md
- Comparator statement (Counterexample to metric-entropy duality): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MetricEntropyDuality.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
