---
title: "Zariski cancellation and affine fibrations over the complex numbers"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 047; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-explicit-failure-of-complex-affine-space-cancellation-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebraic-and-complex-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1906
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An explicit failure of complex affine-space cancellation"
    url: "https://github.com/openai/math/blob/main/preprints/An-explicit-failure-of-complex-affine-space-cancellation-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Zariski cancellation and affine fibrations over the complex numbers

## One-sentence takeaway

OpenAI's result family 047 (Algebraic and complex geometry) claims: Constructs an integral complex affine fourfold $X\not\cong\mathbb A^4$ with $X\times\mathbb A^1\cong\mathbb A^5$, disproving affine-space cancellation over ℂ in dimension four.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): It also disproves the Dolgachev–Weisfeiler affine-fibration conjecture: smooth surjections $X\to\mathbb A^1$ and $\mathbb A^5\to\mathbb A^2$ have every residue-field fiber isomorphic to affine three-space but are not Zariski-locally trivial.
- *An explicit failure of complex affine-space cancellation*: We construct an explicit integral complex affine fourfold X with $X\times\mathbb A^1\cong\mathbb A^5$ but $X\not\cong\mathbb A^4$. This gives a negative answer to Zariski's affine-space cancellation problem over ℂ in dimension four. The same construction disproves the Stable Coordinate Conjecture in ambient dimension five and yields smooth 𝔸3-fibrations over 𝔸1 and 𝔸2 that are not Zariski-locally trivial.
- Lean scope (lean/docs/047.md): Affine-space cancellation asks whether $X\times\mathbb A^1\cong\mathbb A^{n+1}$ forces $X\cong\mathbb A^n$. The formalized result gives an explicit finite-type complex domain $A$ of Krull dimension four with $A[w]\cong\mathbb C[x_1,\ldots,x_5]$ but $A\not\cong\mathbb C[x_1,\ldots,x_4]$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An explicit failure of complex affine-space cancellation](https://github.com/openai/math/blob/main/preprints/An-explicit-failure-of-complex-affine-space-cancellation-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/047.md
- Comparator statement (Complex affine-space cancellation counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ComplexCancellation.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
