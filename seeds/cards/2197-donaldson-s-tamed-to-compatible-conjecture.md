---
title: "Donaldson's tamed-to-compatible conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 342; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Taming-implies-compatibility-on-four-manifolds-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2197
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Taming implies compatibility on four-manifolds"
    url: "https://github.com/openai/math/blob/main/preprints/Taming-implies-compatibility-on-four-manifolds-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Donaldson's tamed-to-compatible conjecture

## One-sentence takeaway

OpenAI's result family 342 (Differential geometry) claims: Proves Donaldson's tamed-to-compatible conjecture: every smooth almost complex structure on a closed four-manifold that is tamed by a symplectic form admits a compatible symplectic form.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The almost complex structure stays fixed; the form's cohomology class may change.
- *Taming implies compatibility on four-manifolds*: We prove that every smooth almost complex structure on a closed four-manifold which is tamed by a symplectic form is compatible with a symplectic form. This gives a positive solution to Donaldson's tamed-to-compatible conjecture.
- Lean scope (lean/docs/342.md): Donaldson's tamed-to-compatible conjecture asks whether an almost-complex structure tamed by a symplectic form also admits a compatible symplectic form. The formalized result establishes this for every closed connected smooth four-manifold, keeping the almost-complex structure fixed.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No integrability assumption or prescribed cohomology class for the compatible form is required.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Taming implies compatibility on four-manifolds](https://github.com/openai/math/blob/main/preprints/Taming-implies-compatibility-on-four-manifolds-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/342.md
- Comparator statement (Taming implies compatibility): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TamingCompatibility.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
