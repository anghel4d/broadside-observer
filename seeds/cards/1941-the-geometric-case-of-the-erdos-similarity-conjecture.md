---
title: "The geometric case of the Erdős similarity conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 084; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-geometric-case-of-the-Erdos-similarity-conjecture-October-5-2026/geometric-erdos-similarity.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "lean4"
  - "formalized"
seed_rank: 1941
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The geometric case of the Erdős similarity conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-geometric-case-of-the-Erdos-similarity-conjecture-October-5-2026/geometric-erdos-similarity.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The dyadic case of the Erdős similarity conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-dyadic-case-of-the-Erdos-similarity-conjecture-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The geometric case of the Erdős similarity conjecture

## One-sentence takeaway

OpenAI's result family 084 (Real and complex analysis) claims: For every fixed $q\in(0,1)$, constructs compact subsets of $[0,1]$ with measure arbitrarily close to one containing no translated and nontrivially dilated copy of $\{q^n:n\ge1\}$, with dilations of either sign.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This resolves the geometric-progression case of the Erdős similarity conjecture for every ratio.
- *The geometric case of the Erdős similarity conjecture*: We prove the geometric-progression case of the Erdős similarity conjecture. For every fixed $q\in(0,1)$ and every $\eta\in(0,1)$, we construct a compact set $E_{q,\eta}\subseteq[0,1]$ of measure greater than $1-\eta$ containing no nontrivial affine copy of $\{q^n:n\ge1\}$, for any translation and either sign of nonzero dilation. The set may depend on q; the result makes no simultaneous assertion for different ratios.
- *The dyadic case of the Erdős similarity conjecture*: We construct a compact subset of the unit interval, of measure arbitrarily close to one, that contains no affine copy of the dyadic sequence $\{2^{-n}:n\ge1\}$. The conclusion holds for every translation and every nonzero real dilation, of either sign, proving the dyadic case of the Erdős similarity conjecture.
- Lean scope (lean/docs/084.md): The formalization proves the dyadic case of the Erdős similarity conjecture. For every $0<\eta<1$, it constructs a compact set $E\subset[0,1]$ of measure greater than $1-\eta$ that contains no affine copy of $\{2^{-n}:n\ge1\}$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Explicitly, for every translation $x$ and every nonzero real dilation $s$, some point $x+s2^{-n}$ lies outside $E$.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The geometric case of the Erdős similarity conjecture](https://github.com/openai/math/blob/main/preprints/The-geometric-case-of-the-Erdos-similarity-conjecture-October-5-2026/geometric-erdos-similarity.pdf)
- Manuscript: [The dyadic case of the Erdős similarity conjecture](https://github.com/openai/math/blob/main/preprints/The-dyadic-case-of-the-Erdos-similarity-conjecture-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/084.md
- Comparator statement (Positive-measure avoidance of every affine dyadic sequence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DyadicAvoidance.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
