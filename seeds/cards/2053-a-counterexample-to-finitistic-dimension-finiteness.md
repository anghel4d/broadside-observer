---
title: "A counterexample to finitistic-dimension finiteness"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 198; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-algebra-of-infinite-little-finitistic-dimension-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "algebra"
  - "lean4"
  - "formalized"
seed_rank: 2053
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An algebra of infinite little finitistic dimension"
    url: "https://github.com/openai/math/blob/main/preprints/An-algebra-of-infinite-little-finitistic-dimension-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A counterexample to finitistic-dimension finiteness

## One-sentence takeaway

OpenAI's result family 198 (Algebra) claims: Constructs a finite-dimensional complex algebra whose finite-dimensional modules have unbounded finite projective dimensions.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This disproves the little finitistic-dimension conjecture.
- *An algebra of infinite little finitistic dimension*: We construct a finite-dimensional complex algebra whose finite-dimensional modules have unbounded finite projective dimensions. This disproves the little finitistic-dimension conjecture.
- Lean scope (lean/docs/198.md): The little finitistic-dimension conjecture predicts that finitely generated modules of finite projective dimension over a fixed finite-dimensional algebra have bounded projective dimensions. The formalized counterexample is a finite-dimensional complex algebra with a finitely generated module of projective dimension at least $2m-2$ and still finite for every $m\ge1$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An algebra of infinite little finitistic dimension](https://github.com/openai/math/blob/main/preprints/An-algebra-of-infinite-little-finitistic-dimension-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/198.md
- Comparator statement (Infinite little finitistic dimension): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LittleFinitistic.lean
- Comparator statement (Left/right finitistic-dimension asymmetry): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FinitisticAsymmetry.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
