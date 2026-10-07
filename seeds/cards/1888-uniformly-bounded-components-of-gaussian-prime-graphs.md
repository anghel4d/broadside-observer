---
title: "Uniformly bounded components of Gaussian-prime graphs"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 028; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Bounded-Step-Walks-on-Gaussian-Primes-September-26-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1888
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Bounded-Step Walks on Gaussian Primes"
    url: "https://github.com/openai/math/blob/main/preprints/Bounded-Step-Walks-on-Gaussian-Primes-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Uniformly bounded components of Gaussian-prime graphs

## One-sentence takeaway

OpenAI's result family 028 (Number theory) claims: Proves the Gaussian moat conjecture: no infinite walk through distinct Gaussian primes can have uniformly bounded steps.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): More strongly, for every distance bound D, the graph joining Gaussian primes at distance at most D has uniformly bounded finite component sizes, depending only on D, including primes on the coordinate axes.
- *Bounded-Step Walks on Gaussian Primes*: We prove the Gaussian moat conjecture: no infinite walk through distinct Gaussian primes can have bounded steps. More strongly, for each fixed finite step bound, the connected components of the Gaussian-prime graph have uniformly bounded size. This bound applies to every starting prime, including primes on the coordinate axes, and is nonexplicit.
- Lean scope (lean/docs/028.md): The Gaussian moat problem asks whether an infinite walk through distinct Gaussian primes can have bounded step lengths. The formalized result gives a negative answer for every real step bound $D$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Bounded-Step Walks on Gaussian Primes](https://github.com/openai/math/blob/main/preprints/Bounded-Step-Walks-on-Gaussian-Primes-September-26-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/028.md
- Comparator statement (Uniform bounds for bounded-step Gaussian-prime walks): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GaussianMoat.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
