---
title: "A superquadratic separation of sensitivity and block sensitivity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 132; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-superquadratic-separation-between-sensitivity-and-block-sensitivity-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1988
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "A superquadratic separation between sensitivity and block sensitivity"
    url: "https://github.com/openai/math/blob/main/preprints/A-superquadratic-separation-between-sensitivity-and-block-sensitivity-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A superquadratic separation of sensitivity and block sensitivity

## One-sentence takeaway

OpenAI's result family 132 (Theoretical computer science) claims: Constructs total Boolean functions with block sensitivity $\mathop{\mathrm{bs}}\nolimits (f)\ge s(f)^\alpha$ for a fixed α > 2, disproving the quadratic strengthening of the Sensitivity Conjecture.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Here $s(f)$ counts influential individual-bit flips, while block sensitivity allows disjoint groups of bits to change together.
- *A superquadratic separation between sensitivity and block sensitivity*: We disprove the quadratic strengthening of the Sensitivity Conjecture by constructing nonconstant total Boolean functions whose block sensitivity grows faster than any constant multiple of sensitivity squared. In fact, for some fixed α > 2, our examples have unbounded block sensitivity and satisfy $\mathop{\mathrm{bs}}\nolimits (f)\ge s(f)^\alpha$.
- Lean scope (lean/docs/132.md): The formalized result disproves a universal quadratic bound of block sensitivity by sensitivity for total Boolean functions. For every integer $d\ge1$, it constructs a nonconstant function with $\mathrm{bs}(f)/s(f)^2\ge2^d/(4(d+2)^2)$, making the ratio unbounded.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A superquadratic separation between sensitivity and block sensitivity](https://github.com/openai/math/blob/main/preprints/A-superquadratic-separation-between-sensitivity-and-block-sensitivity-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/132.md
- Comparator statement (Superquadratic sensitivity separation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SensitivitySeparation.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
