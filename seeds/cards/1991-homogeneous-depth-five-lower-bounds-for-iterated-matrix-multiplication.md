---
title: "Homogeneous depth-five lower bounds for iterated matrix multiplication"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 135; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Homogeneous-depth-five-lower-bounds-for-iterated-matrix-multiplication-September-25-2026/Homogeneous-depth-five-lower-bounds-for-iterated-matrix-multiplication-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1991
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Homogeneous depth-five lower bounds for iterated matrix multiplication"
    url: "https://github.com/openai/math/blob/main/preprints/Homogeneous-depth-five-lower-bounds-for-iterated-matrix-multiplication-September-25-2026/Homogeneous-depth-five-lower-bounds-for-iterated-matrix-multiplication-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Homogeneous depth-five lower bounds for iterated matrix multiplication

## One-sentence takeaway

OpenAI's result family 135 (Theoretical computer science) claims: Over every characteristic-zero field, the $(1,1)$ entry of a product of n independent $n\times n$ variable matrices requires $n^{\Theta(\sqrt n)}$ gates in homogeneous depth-five sum–product circuits.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This sharp bound allows shared gates and bottom linear forms involving all variables.
- *Homogeneous depth-five lower bounds for iterated matrix multiplication*: Let $\mathop{\mathrm{IMM}}\nolimits _{n,n}$ be the $(1,1)$ entry of a product of n independent $n\times n$ matrices of variables. Over every field of characteristic zero, every syntactically homogeneous $\Sigma\Pi\Sigma\Pi\Sigma$ circuit computing $\mathop{\mathrm{IMM}}\nolimits _{n,n}$ has at least $n^{\sqrt n/400}$ gates for all sufficiently large n, with an absolute threshold independent of the field. Bottom linear forms may have arbitrary support, and arbitrary finite fan-in, fan-out, and gate sharing are allowed.
- Lean scope (lean/docs/135.md): Let $\mathrm{IMM}_{n,n}$ be the $(1,1)$ entry of the product of $n$ independent $n\times n$ variable matrices. The formalization proves that, over every characteristic-zero field, syntactically homogeneous depth-five $\Sigma\Pi\Sigma\Pi\Sigma$ circuits computing this polynomial require at least $n^{\sqrt n/400}$ gates for all sufficiently large $n$, with a threshold independent of the field.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Homogeneous depth-five lower bounds for iterated matrix multiplication](https://github.com/openai/math/blob/main/preprints/Homogeneous-depth-five-lower-bounds-for-iterated-matrix-multiplication-September-25-2026/Homogeneous-depth-five-lower-bounds-for-iterated-matrix-multiplication-September-25-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/135.md
- Comparator statement (Homogeneous depth-five bounds for iterated matrix multiplication): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DepthFive.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
