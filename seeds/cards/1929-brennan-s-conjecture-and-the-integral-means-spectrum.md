---
title: "Brennan's conjecture and the integral-means spectrum"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 072; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Brennans-conjecture-and-sharp-inverse-square-integral-means-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "lean4"
  - "formalized"
seed_rank: 1929
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Brennan's conjecture and sharp inverse-square integral means"
    url: "https://github.com/openai/math/blob/main/preprints/Brennans-conjecture-and-sharp-inverse-square-integral-means-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A strict inverse-first-power bound for univalent functions"
    url: "https://github.com/openai/math/blob/main/preprints/A-strict-inverse-first-power-bound-for-univalent-functions-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Brennan's conjecture and the integral-means spectrum

## One-sentence takeaway

OpenAI's result family 072 (Real and complex analysis) claims: Proves Brennan's conjecture: for every conformal bijection ϕ from a simply connected plane domain onto the disk, $|\phi'|^s$ is area-integrable for $4/3\lt s\lt 4$.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The sharp universal integral-means identity is $B_{\mathcal S}(t)=|t|-1$ for t ≤ −2. A strict bound $B_b(-1)\lt 1/4$ for bounded univalent functions disproves Kraetzer's prediction at that parameter.
- *Brennan's conjecture and sharp inverse-square integral means*: We prove Brennan's conjecture: if a simply connected plane domain admits a conformal bijection φ onto the unit disk, then $|\varphi'|^s$ is area-integrable for every $4/3\lt s\lt 4$. We also prove the sharp inverse-square integral-means exponent $B_{\mathcal S}(-2)=1$ for the normalized schlicht class $\mathcal S$.
- *A strict inverse-first-power bound for univalent functions*: We prove a uniform upper bound for inverse-first-power integral means of normalized univalent disk maps with exponent strictly below 1/4. Consequently, the bounded universal integral-means spectrum satisfies $B_b(-1)\lt 1/4$, disproving Kraetzer's conjectured spectrum at p = −1.
- Lean scope (lean/docs/072.md): Brennan's conjecture asserts that $|\phi'|^s$ is area-integrable for $4/3<s<4$ when $\phi$ conformally maps a simply connected plane domain with nontrivial spherical boundary onto the disk. The formalization establishes this interval, along with area integrability of $|f'|^t$ for univalent disk maps when $-2<t<2/3$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Brennan's conjecture and sharp inverse-square integral means](https://github.com/openai/math/blob/main/preprints/Brennans-conjecture-and-sharp-inverse-square-integral-means-September-24-2026/paper.pdf)
- Manuscript: [A strict inverse-first-power bound for univalent functions](https://github.com/openai/math/blob/main/preprints/A-strict-inverse-first-power-bound-for-univalent-functions-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/072.md
- Comparator statement (Brennan and inverse-square integral-means bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Brennan.lean
- Comparator statement (Sharp endpoint divergence): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BrennanSharp.lean
- Comparator statement (Strict inverse-first-power bound and consequences): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/StrictMeans.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
