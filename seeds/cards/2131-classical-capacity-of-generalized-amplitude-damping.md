---
title: "Classical capacity of generalized amplitude damping"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 276; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Classical-capacity-and-entropy-inequalities-for-generalized-amplitude-damping-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2131
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Classical capacity and entropy inequalities for generalized amplitude damping"
    url: "https://github.com/openai/math/blob/main/preprints/Classical-capacity-and-entropy-inequalities-for-generalized-amplitude-damping-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Classical capacity of generalized amplitude damping

## One-sentence takeaway

OpenAI's result family 276 (Mathematical physics) claims: Determines the unassisted classical capacity of every qubit generalized amplitude-damping channel, including all damping and thermal parameters.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): An explicit one-variable optimization gives the capacity, attained by independent two-state signal ensembles with collective decoding. Holevo capacity, minimum output entropy and regularized classical capacity are additive when tensoring with any finite-dimensional quantum channel.
- *Classical capacity and entropy inequalities for generalized amplitude damping*: We determine the unassisted classical capacity of every qubit generalized amplitude-damping channel, for all damping strengths and thermal occupations. It equals the one-shot Holevo capacity and is given by a one-variable maximum. A binary pure-state ensemble attains the one-use optimum, and its independent products attain the optimum at every block length.
- Lean scope (lean/docs/276.md): The formalized result determines the unassisted classical capacity of every generalized amplitude-damping channel with parameters in $[0,1]^2$. Its unrestricted Holevo information is additive across every number of repeated uses, equals an attained scalar maximum, and agrees with the operational capacity per use.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Classical capacity and entropy inequalities for generalized amplitude damping](https://github.com/openai/math/blob/main/preprints/Classical-capacity-and-entropy-inequalities-for-generalized-amplitude-damping-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/276.md
- Comparator statement (Additivity and capacity for generalized amplitude damping): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/AmplitudeDamping.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
