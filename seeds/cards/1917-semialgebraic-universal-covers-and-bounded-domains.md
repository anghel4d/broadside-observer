---
title: "Semialgebraic universal covers and bounded domains"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 058; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Semialgebraic-universal-covers-of-normal-projective-varieties-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebraic-and-complex-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1917
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Semialgebraic universal covers of normal projective varieties"
    url: "https://github.com/openai/math/blob/main/preprints/Semialgebraic-universal-covers-of-normal-projective-varieties-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Symmetry of semialgebraic bounded domains with compact quotient"
    url: "https://github.com/openai/math/blob/main/preprints/Symmetry-of-semialgebraic-bounded-domains-with-compact-quotient-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Semialgebraic universal covers and bounded domains

## One-sentence takeaway

OpenAI's result family 058 (Algebraic and complex geometry) claims: Proves the Kollár–Pardon conjecture: the semialgebraic universal covers of connected normal projective complex varieties are exactly products $D\times\mathbb C^m\times F$, with D bounded symmetric and F simply connected, normal, and projective.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A universal cover is quasi-projective exactly when the bounded symmetric factor is absent. In particular, a smooth projective variety covered by ℂn has a finite étale cover by an abelian variety.
- *Semialgebraic universal covers of normal projective varieties*: We prove the Kollár–Pardon conjecture: the universal cover of a connected normal projective complex variety is biholomorphic to a semialgebraic open subset of a projective variety if and only if it is a product of a bounded symmetric domain, a complex affine space, and a simply connected normal projective variety.
- *Symmetry of semialgebraic bounded domains with compact quotient*: Every nonempty connected semialgebraic bounded open subset of a complex affine variety admitting a properly discontinuous cocompact group of biholomorphisms is smooth and biholomorphic to a bounded symmetric domain. This answers the bounded-domain question of Kollár and Pardon affirmatively.
- Lean scope (lean/docs/058.md): The formalized result answers the paper's symmetry question affirmatively. A nonempty connected bounded semialgebraic subset, relatively open in a complex affine algebraic set, is smooth and biholomorphic to a bounded symmetric domain whenever a discrete group acts properly and holomorphically with compact quotient.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Semialgebraic universal covers of normal projective varieties](https://github.com/openai/math/blob/main/preprints/Semialgebraic-universal-covers-of-normal-projective-varieties-September-24-2026/paper.pdf)
- Manuscript: [Symmetry of semialgebraic bounded domains with compact quotient](https://github.com/openai/math/blob/main/preprints/Symmetry-of-semialgebraic-bounded-domains-with-compact-quotient-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/058.md
- Comparator statement (Symmetry of semialgebraic bounded domains): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SymmetricDomains.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
