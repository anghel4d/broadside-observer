---
title: "Amenability, unitarizability, and strong Ulam stability"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 251; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Unitarizability-Implies-Amenability-for-Countable-Groups-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2106
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Unitarizability implies amenability for discrete groups"
    url: "https://github.com/openai/math/blob/main/preprints/Unitarizability-Implies-Amenability-for-Countable-Groups-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Strong Ulam Stability Characterizes Amenability"
    url: "https://github.com/openai/math/blob/main/preprints/Strong-Ulam-Stability-Characterizes-Amenability-October-5-2026/strong-ulam-stability.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Amenability, unitarizability, and strong Ulam stability

## One-sentence takeaway

OpenAI's result family 251 (Group theory) claims: Resolves Dixmier's problem for all discrete groups: amenability is equivalent to every uniformly bounded Hilbert-space representation being similar to a unitary representation.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For countable discrete groups, amenability is also equivalent to strong Ulam stability: sufficiently accurate unitary approximate representations are uniformly close in operator norm to genuine representations on the same, possibly infinite-dimensional, Hilbert space.
- *Unitarizability implies amenability for discrete groups*: We prove that a discrete group is amenable if and only if every uniformly bounded representation on a complex Hilbert space is similar to a unitary representation. This resolves Dixmier's unitarizability problem affirmatively for discrete groups.
- *Strong Ulam Stability Characterizes Amenability*: A countable discrete group is amenable if and only if it is strongly Ulam stable: every sufficiently accurate unitary almost representation, on any complex Hilbert space, is uniformly close in operator norm to a genuine representation on the same space. We prove the converse to Kazhdan's amenable stability theorem, answering the question of Burger, Ozawa, and Thom. The inclusion of infinite-dimensional Hilbert spaces is essential.
- Lean scope (lean/docs/251.md): Dixmier's unitarizability problem asks whether a discrete group is amenable exactly when every uniformly bounded Hilbert-space representation is similar to a unitary one. The formalization establishes this equivalence for every discrete group.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Unitarizability implies amenability for discrete groups](https://github.com/openai/math/blob/main/preprints/Unitarizability-Implies-Amenability-for-Countable-Groups-September-23-2026/paper.pdf)
- Manuscript: [Strong Ulam Stability Characterizes Amenability](https://github.com/openai/math/blob/main/preprints/Strong-Ulam-Stability-Characterizes-Amenability-October-5-2026/strong-ulam-stability.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/251.md
- Comparator statement (Unitarizability for all discrete groups): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DixmierAllDiscrete.lean
- Comparator statement (Separable nonunitarizable witnesses for countable nonamenable groups): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Dixmier.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
