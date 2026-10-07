---
title: "Thompson's group F is nonamenable"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 248; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Thompsons-group-F-is-nonamenable-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2103
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Thompson's group F is nonamenable"
    url: "https://github.com/openai/math/blob/main/preprints/Thompsons-group-F-is-nonamenable-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Thompson's group F is nonamenable

## One-sentence takeaway

OpenAI's result family 248 (Group theory) claims: Proves that Thompson's group F, the group of dyadic piecewise linear homeomorphisms of the interval, is nonamenable, resolving its longstanding amenability problem.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- *Thompson's group F is nonamenable*: We prove that Thompson's group F is nonamenable. This confirms Geoghegan's conjecture and resolves the amenability problem for F.
- Lean scope (lean/docs/248.md): The amenability problem for Thompson's group $F$ asks whether it admits a positive normalized left-invariant mean on bounded real functions. The formalized result rules out such a mean for the standard group of dyadic piecewise-linear homeomorphisms of the interval, proving nonamenability.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Thompson's group F is nonamenable](https://github.com/openai/math/blob/main/preprints/Thompsons-group-F-is-nonamenable-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/248.md
- Comparator statement (Nonamenability of Thompson's group $F$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ThompsonNonamenability.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
