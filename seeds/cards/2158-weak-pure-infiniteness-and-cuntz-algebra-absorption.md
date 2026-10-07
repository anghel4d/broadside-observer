---
title: "Weak pure infiniteness and Cuntz-algebra absorption"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 303; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Weak-pure-infiniteness-and-O-infinity-absorption-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2158
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Weak pure infiniteness and O-infinity absorption"
    url: "https://github.com/openai/math/blob/main/preprints/Weak-pure-infiniteness-and-O-infinity-absorption-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Weak pure infiniteness and Cuntz-algebra absorption

## One-sentence takeaway

OpenAI's result family 303 (Operator algebras) claims: Resolves the ordinary-to-strong pure-infiniteness question of Kirchberg and Rørdam for complex C∗-algebras.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For exact algebras, proper infiniteness of one fixed finite amplification of every positive element also suffices. Consequently, every separable nuclear algebra with this property absorbs $\mathcal O_\infty$, without unitality or simplicity assumptions.
- *Weak pure infiniteness and O-infinity absorption*: We prove that every complex C∗-algebra in which each positive element is properly infinite is strongly purely infinite. This answers the ordinary-to-strong part of Kirchberg–Rørdam's comparison question. For exact algebras, we also prove that proper infiniteness of one fixed finite amplification of every positive element implies proper infiniteness of each positive element.
- Lean scope (lean/docs/303.md): The formalization proves that a complex $C^*$-algebra in which every positive element is properly infinite is strongly purely infinite, with the full positive-element diagonalization property. No exactness, nuclearity, unitality, or simplicity assumption is needed for this implication.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No exactness, nuclearity, unitality, or simplicity assumption is needed for this implication.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Weak pure infiniteness and O-infinity absorption](https://github.com/openai/math/blob/main/preprints/Weak-pure-infiniteness-and-O-infinity-absorption-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/303.md
- Comparator statement (Fixed-amplification pure infiniteness for exact algebras): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ExactInfiniteness.lean
- Comparator statement (Individual proper infiniteness implies strong pure infiniteness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/IndividualStrongInfiniteness.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
