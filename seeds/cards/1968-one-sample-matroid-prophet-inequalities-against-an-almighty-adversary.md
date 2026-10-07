---
title: "One-sample matroid prophet inequalities against an almighty adversary"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 111; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/One-Sample-Suffices-for-Matroid-Prophet-Inequalities-against-an-Almighty-Adversary-September-23-2026/final.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1968
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "One Sample Suffices for Matroid Prophet Inequalities against an Almighty Adversary"
    url: "https://github.com/openai/math/blob/main/preprints/One-Sample-Suffices-for-Matroid-Prophet-Inequalities-against-an-Almighty-Adversary-September-23-2026/final.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# One-sample matroid prophet inequalities against an almighty adversary

## One-sentence takeaway

OpenAI's result family 111 (Theoretical computer science) claims: For every finite matroid known in advance, gives a distribution-independent online rule using one independent sample per element and earning a universal constant fraction of the expected offline optimum.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Values are independent and nonnegative, with finite expected optimum. The guarantee holds even when the arrival-order adversary sees all samples, values, and the rule's entire random seed; no polynomial-time implementation is asserted.
- *One Sample Suffices for Matroid Prophet Inequalities against an Almighty Adversary*: We prove that one independent sample per element suffices for a constant-competitive prophet inequality on every finite matroid. The guarantee holds even when the arrival-order adversary observes all samples, all online values, and the algorithm's entire random seed. The rule needs no description of the value distributions and achieves the absolute competitive ratio $2^{-310}$.
- Lean scope (lean/docs/111.md): The formalization proves a one-sample matroid prophet inequality with expected reward at least $2^{-310}$ times the expected offline optimum. Each element has one independent sample paired with an identically distributed nonnegative online value, and all coordinates are independent.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [One Sample Suffices for Matroid Prophet Inequalities against an Almighty Adversary](https://github.com/openai/math/blob/main/preprints/One-Sample-Suffices-for-Matroid-Prophet-Inequalities-against-an-Almighty-Adversary-September-23-2026/final.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/111.md
- Comparator statement (One-sample matroid prophet inequality against an almighty adversary): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatroidProphet.lean
- Comparator statement (Hidden-vector matroid selection with worst-order guarantee): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatroidSecretary.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
