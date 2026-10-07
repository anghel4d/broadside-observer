---
title: "Radius of comparison equals half the mean dimension"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 302; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Filtered-products-and-boundary-preserving-compression-in-complex-cobordism-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "unformalized"
seed_rank: 2157
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Filtered products and boundary-preserving compression in complex cobordism"
    url: "https://github.com/openai/math/blob/main/preprints/Filtered-products-and-boundary-preserving-compression-in-complex-cobordism-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Radius of comparison equals half the mean dimension"
    url: "https://github.com/openai/math/blob/main/preprints/Radius-of-comparison-equals-half-the-mean-dimension-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Radius of comparison equals half the mean dimension

## One-sentence takeaway

OpenAI's result family 302 (Operator algebras) claims: For every minimal homeomorphism h of an infinite compact metrizable space X, the radius of comparison of $C(X)\rtimes_h\mathbb Z$ equals $\tfrac12\mathrm{mdim}(X,h)$, including infinite values.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Zero mean dimension is equivalent to the small boundary property, Jiang–Su stability and finite nuclear dimension; in this case nuclear dimension is at most one.
- *Filtered products and boundary-preserving compression in complex cobordism*: We prove that, in sufficiently large smash powers, an $MU$-null restriction to a finite pointed subcomplex becomes stably null on the entire union of products with a fixed positive proportion of restricted factors. This coherent vanishing theorem yields boundary-preserving compression of cube-valued maps on every compact metrizable input space. When the torus slot bundle embeds continuously into a trivial bundle of rank less than twice the source rank, the compression places a positive proportion of slots on their boundaries in arbitrarily large powers and fixes every original boundary slot exactly.
- *Radius of comparison equals half the mean dimension*: We prove the integer-action case of the Phillips–Toms conjecture: for every minimal homeomorphism of an infinite compact metrizable space, the radius of comparison of its crossed product equals one half of its mean dimension, including equality at infinity. For these systems, zero mean dimension and the small boundary property are equivalent to Jiang–Su stability and to finite nuclear dimension of the crossed product; in this case its nuclear dimension is at most one.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Filtered products and boundary-preserving compression in complex cobordism](https://github.com/openai/math/blob/main/preprints/Filtered-products-and-boundary-preserving-compression-in-complex-cobordism-September-25-2026/paper.pdf)
- Manuscript: [Radius of comparison equals half the mean dimension](https://github.com/openai/math/blob/main/preprints/Radius-of-comparison-equals-half-the-mean-dimension-September-25-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
