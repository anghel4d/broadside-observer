---
title: "Kaplansky's quasitrace conjecture and failure of tensor-product stable finiteness"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 294; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Kaplanskys-quasitrace-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2149
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A counterexample to Kaplansky's quasitrace conjecture and failure of tensor-product stable finiteness"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Kaplanskys-quasitrace-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Kaplansky's quasitrace conjecture and failure of tensor-product stable finiteness

## One-sentence takeaway

OpenAI's result family 294 (Operator algebras) claims: Disproves Kaplansky's quasitrace conjecture by constructing a separable unital complex C∗-algebra admitting normalized 2-quasitraces, all of which are nonadditive.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): As a consequence, two unital simple stably finite C∗-algebras can have a properly infinite minimal tensor product, with one factor $C_r^*(\mathbb F_2)$.
- *A counterexample to Kaplansky's quasitrace conjecture and failure of tensor-product stable finiteness*: We refute Kaplansky's quasitrace conjecture by constructing a separable unital complex C∗-algebra that admits normalized 2-quasitraces but has no tracial state. As a consequence, we show that the minimal tensor product of two unital simple stably finite complex C∗-algebras can be properly infinite, even when one factor is the reduced free-group algebra $C_r^*(\mathbb F_2)$.
- Lean scope (lean/docs/294.md): Kaplansky's quasitrace conjecture predicts that every $2$-quasitrace on a $C^*$-algebra is a trace. The formalization constructs a separable $C^*$-algebra with normalized $2$-quasitraces and fixed positive contractions $a,b$ for which every such quasitrace satisfies $\mathrm{Re}(\tau(a+b)-\tau(a)-\tau(b))\ge1/144$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A counterexample to Kaplansky's quasitrace conjecture and failure of tensor-product stable finiteness](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Kaplanskys-quasitrace-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/294.md
- Comparator statement (Nonadditive normalized $2$-quasitraces): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KaplanskyQuasitrace.lean
- Comparator statement (Tensor-product failure of stable finiteness and quasitrace consequences): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KaplanskyStableFiniteness.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
