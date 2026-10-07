---
title: "A torsion-free hyperbolic group that is neither residually finite nor linear over any field"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 252; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/a-torsion-free-hyperbolic-group-that-is-not-residually-finite-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2107
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A torsion-free hyperbolic group that is not residually finite"
    url: "https://github.com/openai/math/blob/main/preprints/a-torsion-free-hyperbolic-group-that-is-not-residually-finite-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A torsion-free hyperbolic group that is neither residually finite nor linear over any field

## One-sentence takeaway

OpenAI's result family 252 (Group theory) claims: Constructs a torsion-free word-hyperbolic group that is not residually finite, answering the residual-finiteness question negatively.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): One fixed nonidentity element is killed by every finite-dimensional linear representation over every commutative field, so the group is not linear over any such field.
- *A torsion-free hyperbolic group that is not residually finite*: We construct a torsion-free word-hyperbolic group that is not residually finite, answering the residual-finiteness question for hyperbolic groups negatively.
- Lean scope (lean/docs/252.md): The residual-finiteness question for hyperbolic groups asks whether every nonidentity element survives in some finite quotient. The formalized result gives a negative answer by constructing a torsion-free word-hyperbolic group that is not residually finite.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A torsion-free hyperbolic group that is not residually finite](https://github.com/openai/math/blob/main/preprints/a-torsion-free-hyperbolic-group-that-is-not-residually-finite-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/252.md
- Comparator statement (Torsion-free hyperbolic group that is not residually finite): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TorsionFreeHyperbolic.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
