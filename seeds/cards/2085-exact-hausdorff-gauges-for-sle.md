---
title: "Exact Hausdorff gauges for SLE"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 230; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-exact-Hausdorff-gauge-for-SLE-September-25-2026/An-exact-Hausdorff-gauge-for-SLE-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2085
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An exact Hausdorff gauge for SLE"
    url: "https://github.com/openai/math/blob/main/preprints/An-exact-Hausdorff-gauge-for-SLE-September-25-2026/An-exact-Hausdorff-gauge-for-SLE-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An explicit exact Hausdorff gauge for SLE"
    url: "https://github.com/openai/math/blob/main/preprints/An-explicit-exact-Hausdorff-gauge-for-SLE-September-26-2026/An-explicit-exact-Hausdorff-gauge-for-SLE-September-26-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Exact Hausdorff gauges for SLE

## One-sentence takeaway

OpenAI's result family 230 (Probability and statistical mechanics) claims: Resolves Schramm’s Hausdorff-measure question for chordal SLEκ, $0\lt \kappa\lt 8$.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The explicit gauge $r^d(\log\log(1/r))^{(2-d)/2}$, $d=1+\kappa/8$, gives almost surely positive finite measure to every trace segment $\gamma([s,t])$ with $0\lt s\lt t\lt \infty$, and finite expected measure to the trace in every bounded disk.
- *An exact Hausdorff gauge for SLE*: For each $0\lt \kappa\lt 8$, we construct a deterministic Hausdorff gauge that almost surely assigns positive finite measure to every nontrivial compact positive-time segment of chordal Schramm–Loewner evolution. This answers Schramm's Hausdorff-measure existence problem in this parameter range. The entire trace has finite expected gauge measure in each bounded box.
- *An explicit exact Hausdorff gauge for SLE*: For each fixed $0\lt \kappa\lt 8$, let $d=1+\kappa/8$. The gauge $h(r)=r^d(\log\log(1/r))^{(2-d)/2}$ at sufficiently small radii almost surely gives positive finite Hausdorff measure to every nontrivial positive-time compact segment of chordal SLEκ. This gives an explicit solution to Schramm's Hausdorff-measure problem in this parameter range.
- Lean scope (lean/docs/230.md): For $0<\kappa<8$, put $d=1+\kappa/8$. The formalization proves that every continuous nondecreasing Hausdorff gauge agreeing with $h(r)=r^d(\log\log(1/r))^{(2-d)/2}$ at sufficiently small positive radii almost surely assigns positive measure to every nontrivial compact positive-time segment of ordinary chordal $\mathrm{SLE}_\kappa$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An exact Hausdorff gauge for SLE](https://github.com/openai/math/blob/main/preprints/An-exact-Hausdorff-gauge-for-SLE-September-25-2026/An-exact-Hausdorff-gauge-for-SLE-September-25-2026.pdf)
- Manuscript: [An explicit exact Hausdorff gauge for SLE](https://github.com/openai/math/blob/main/preprints/An-explicit-exact-Hausdorff-gauge-for-SLE-September-26-2026/An-explicit-exact-Hausdorff-gauge-for-SLE-September-26-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/230.md
- Comparator statement (Positivity of the explicit gauge on every positive-time segment): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SLELowerPositivity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
