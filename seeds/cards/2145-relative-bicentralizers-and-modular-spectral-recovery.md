---
title: "Relative bicentralizers and modular spectral recovery"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 290; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Expected-amenable-subalgebras-preserving-core-commutants-September-23-2026/Expected-amenable-subalgebras-preserving-core-commutants-September-23-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2145
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Expected amenable subalgebras preserving core commutants"
    url: "https://github.com/openai/math/blob/main/preprints/Expected-amenable-subalgebras-preserving-core-commutants-September-23-2026/Expected-amenable-subalgebras-preserving-core-commutants-September-23-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Bounded recovery for modular spectral averages"
    url: "https://github.com/openai/math/blob/main/preprints/Bounded-recovery-for-modular-spectral-averages-September-23-2026/Bounded-recovery-for-modular-spectral-averages-September-23-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Relative bicentralizers and modular spectral recovery

## One-sentence takeaway

OpenAI's result family 290 (Operator algebras) claims: Proves Connes' bicentralizer conjecture for every type III1 factor with separable predual and every faithful normal state.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): More generally, for every inclusion $N\subset M$ of von Neumann algebras with separable preduals admitting a faithful normal conditional expectation, constructs an amenable expected subalgebra $P\subset N$ with $P'\cap c(M)=N'\cap c(M)$, resolving the relative bicentralizer conjecture.
- *Expected amenable subalgebras preserving core commutants*: We prove that every inclusion $N\subset M$ of von Neumann algebras with separable preduals and a faithful normal conditional expectation contains an expected amenable subalgebra $P\subset N$ such that $P'\cap c(M)=N'\cap c(M)$, where $c(M)$ denotes the continuous core of M. This resolves the relative bicentralizer conjecture in this setting.
- *Bounded recovery for modular spectral averages*: We prove a bounded spectral recovery theorem for a von Neumann algebra with a faithful normal state whose centralizer consists only of scalars. A positive averaged squared norm for an arbitrary bounded Hilbert-space operator on shrinking modular spectral bands can be recovered on uniformly bounded algebra elements with shrinking spectral support. We apply this theorem to spectral intertwining rigidity and obtain an alternative proof of bicentralizer triviality for type III1 factors with separable predual.
- Lean scope (lean/docs/290.md): For a faithful normal state with scalar centralizer in the stated standard-space representation, the formalized result converts positive modular spectral averages into uniformly bounded algebra elements. Given unit vectors in shrinking spectral bands around a real number $s$ and a positive limiting symmetric average for a bounded operator $T$, it finds a subsequence of bounded algebra elements whose images under $T$ stay uniformly nonzero and whose spectral bands have four times the original widths.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Expected amenable subalgebras preserving core commutants](https://github.com/openai/math/blob/main/preprints/Expected-amenable-subalgebras-preserving-core-commutants-September-23-2026/Expected-amenable-subalgebras-preserving-core-commutants-September-23-2026.pdf)
- Manuscript: [Bounded recovery for modular spectral averages](https://github.com/openai/math/blob/main/preprints/Bounded-recovery-for-modular-spectral-averages-September-23-2026/Bounded-recovery-for-modular-spectral-averages-September-23-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/290.md
- Comparator statement (Bounded recovery from modular spectral averages): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BoundedRecovery.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
