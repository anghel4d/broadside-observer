---
title: "A C1 counterexample to the entropy conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 151; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-C1-Counterexample-to-the-Entropy-Conjecture-September-25-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "lean4"
  - "formalized"
seed_rank: 2007
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A C^1 Counterexample to the Entropy Conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-C1-Counterexample-to-the-Entropy-Conjecture-September-25-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A C1 counterexample to the entropy conjecture

## One-sentence takeaway

OpenAI's result family 151 (Dynamical systems and ergodic theory) claims: Constructs a noninvertible C1 self-map of a compact smooth manifold with zero topological entropy but eigenvalue 2 on second homology.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This disproves the homological entropy lower bound for general C1 self-maps: homological growth need not force positive orbit complexity.
- *A C^1 Counterexample to the Entropy Conjecture*: We disprove the general C1 self-map formulation of Shub's entropy conjecture. We construct a noninvertible C1 self-map of a compact smooth manifold without boundary whose topological entropy is zero, while its action on second real homology has eigenvalue 2. Thus the topological entropy is strictly smaller than the logarithm of the homological spectral radius.
- Lean scope (lean/docs/151.md): Shub's entropy conjecture predicts that a smooth self-map's topological entropy is at least the logarithm of the spectral radius of its action on real homology. The formalization gives a counterexample to the general $C^1$ self-map version: a noninvertible $C^1$ map on a compact smooth manifold without boundary has topological entropy zero, while its action on second real homology has a nonzero eigenvector with eigenvalue $2$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A C^1 Counterexample to the Entropy Conjecture](https://github.com/openai/math/blob/main/preprints/A-C1-Counterexample-to-the-Entropy-Conjecture-September-25-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/151.md
- Comparator statement (A $C^1$ counterexample to the entropy conjecture): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/C1EntropyCounterexample.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
