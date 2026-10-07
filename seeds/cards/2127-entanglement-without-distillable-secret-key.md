---
title: "Entanglement without distillable secret key"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 272; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2127
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Entanglement with zero distillable secret key in local dimension ten"
    url: "https://github.com/openai/math/blob/main/preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Entanglement without distillable secret key

## One-sentence takeaway

OpenAI's result family 272 (Mathematical physics) claims: Constructs an entangled state on $\mathbb C^{10}\otimes\mathbb C^{10}$ with zero distillable secret key for the specified local-instrument protocols that complete almost surely.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): These allow joint local processing and authenticated two-way public communication, with no other shared private resource and an eavesdropper holding the input purification and public record. A trace-preserving PPT channel on $M_{21}(\mathbb C)$ whose square is not entanglement breaking disproves Christandl's PPT-square conjecture.
- *Entanglement with zero distillable secret key in local dimension ten*: We construct an entangled state on $\mathbb C^{10}\otimes\mathbb C^{10}$ with zero distillable secret key for the local-instrument protocols specified here. They allow joint processing of all copies and unlimited two-way public communication, with the input as the only shared private resource and an eavesdropper holding a purification and the complete public record. The construction also disproves the unrestricted two-map PPT-composition conjecture.
- Lean scope (lean/docs/272.md): The paper's entanglement construction yields counterexamples to PPT-composition claims. The linked formalization covers these consequences: two explicitly specified PPT maps on $10\times10$ complex matrices have a composition that is not entanglement breaking, and the nonzero Choi matrix of that composition has no nonzero product vector in its range.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's zero-distillable-secret-key statement is outside these two selected Comparator statements.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Entanglement with zero distillable secret key in local dimension ten](https://github.com/openai/math/blob/main/preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/272.md
- Comparator statement (PPT channel on dimension 21 whose square is not entanglement breaking): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DimensionTenChannel.lean
- Comparator statement (Dimension-ten PPT pair with non-entanglement-breaking composition): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DimensionTenPair.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
