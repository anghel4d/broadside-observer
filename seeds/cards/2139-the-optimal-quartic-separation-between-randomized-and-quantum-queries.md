---
title: "The optimal quartic separation between randomized and quantum queries"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 284; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Nearly-Quartic-Separation-Between-Randomized-and-Quantum-Query-Complexity-October-5-2026/quartic-query-separation.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "unformalized"
seed_rank: 2139
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "A Nearly Quartic Separation Between Randomized and Quantum Query Complexity"
    url: "https://github.com/openai/math/blob/main/preprints/A-Nearly-Quartic-Separation-Between-Randomized-and-Quantum-Query-Complexity-October-5-2026/quartic-query-separation.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The optimal quartic separation between randomized and quantum queries

## One-sentence takeaway

OpenAI's result family 284 (Mathematical physics) claims: Shows that the universal bound $R(f)=O((1+Q(f))^4)$ for total Boolean functions is sharp in its exponent, ruling out every smaller power and disproving the conjectured cubic relation.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Here R and Q are randomized and quantum worst-case bit-query complexities with error at most 1/3; computation between queries is unrestricted.
- *A Nearly Quartic Separation Between Randomized and Quantum Query Complexity*: We construct total Boolean functions with a nearly quartic separation between bounded-error randomized and quantum query complexity. Writing these complexities as $\mathrm R(f)$ and $\mathrm Q(f)$, the examples rule out every universal bound $\mathrm R(f)=O((1+\mathrm Q(f))^\alpha)$ with α < 4. Thus the known quartic upper bound has the optimal exponent, disproving the conjectured cubic bound.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [A Nearly Quartic Separation Between Randomized and Quantum Query Complexity](https://github.com/openai/math/blob/main/preprints/A-Nearly-Quartic-Separation-Between-Randomized-and-Quantum-Query-Complexity-October-5-2026/quartic-query-separation.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
