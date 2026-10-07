---
title: "Generalized star height at most three"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 134; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Finite-Monoid-Computations-and-a-Uniform-Generalized-Star-Height-Bound-September-25-2026/Finite-Monoid-Computations-and-a-Uniform-Generalized-Star-Height-Bound-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1990
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Finite Monoid Computations and a Uniform Generalized Star-Height Bound"
    url: "https://github.com/openai/math/blob/main/preprints/Finite-Monoid-Computations-and-a-Uniform-Generalized-Star-Height-Bound-September-25-2026/Finite-Monoid-Computations-and-a-Uniform-Generalized-Star-Height-Bound-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Generalized Star Height at Most Four"
    url: "https://github.com/openai/math/blob/main/preprints/Generalized-Star-Height-at-Most-Four-September-25-2026/Generalized-Star-Height-at-Most-Four-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Generalized Star Height at Most Three"
    url: "https://github.com/openai/math/blob/main/preprints/Generalized-Star-Height-at-Most-Three-September-25-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Generalized star height at most three

## One-sentence takeaway

OpenAI's result family 134 (Theoretical computer science) claims: Every regular language over a finite alphabet has a generalized regular expression with at most three nested Kleene stars, allowing union, concatenation and complement over the same alphabet.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This establishes an absolute bound independent of automaton size, resolving the uniform-boundedness version of the generalized star-height problem.
- *Finite Monoid Computations and a Uniform Generalized Star-Height Bound*: Every regular language over a finite alphabet has a generalized regular expression of star height at most thirteen over that same alphabet. We prove this uniform bound by representing finite monoid computations as affine updates and recovering them through twelve successive split constructions.
- *Generalized Star Height at Most Four*: Every regular language over a finite alphabet has generalized star height at most four over that same alphabet. We give a complete construction using an affine correction that hides one interval product, a finite clock, and several scales for moving boundaries through periodic words.
- *Generalized Star Height at Most Three*: Every regular language over a finite alphabet has generalized star height at most three, with complement taken in the same free monoid. We express finite-monoid computations using a prefix code of word pieces.
- Lean scope (lean/docs/134.md): Generalized star height measures the nesting of Kleene stars in regular expressions that also allow Boolean operations. The formalization proves that every regular language over a finite alphabet has a generalized expression over the same alphabet of star height at most three.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The selected statement asserts the uniform expression bound, without separately encoding every construction step of that paper. The bound of three implies the accompanying paper's bound of four; the selected statement concerns the expression bound itself.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Finite Monoid Computations and a Uniform Generalized Star-Height Bound](https://github.com/openai/math/blob/main/preprints/Finite-Monoid-Computations-and-a-Uniform-Generalized-Star-Height-Bound-September-25-2026/Finite-Monoid-Computations-and-a-Uniform-Generalized-Star-Height-Bound-September-25-2026.pdf)
- Manuscript: [Generalized Star Height at Most Four](https://github.com/openai/math/blob/main/preprints/Generalized-Star-Height-at-Most-Four-September-25-2026/Generalized-Star-Height-at-Most-Four-September-25-2026.pdf)
- Manuscript: [Generalized Star Height at Most Three](https://github.com/openai/math/blob/main/preprints/Generalized-Star-Height-at-Most-Three-September-25-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/134.md
- Comparator statement (Uniform generalized star-height bound of three): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GeneralizedStarHeight.lean
- Comparator statement (Generalized star height at most three): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GeneralizedStarHeight.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
