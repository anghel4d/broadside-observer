---
title: "An exponential bound for sunflowers"
authors:
  - "OpenAI"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 379, 24 Nov 2026 edition; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-exponential-bound-for-sunflowers-November-24-2026/paper.pdf"
version_reviewed: "web 2026-11-24 edition (36 pp.)"
topics:
  - "sunflower-conjecture"
  - "extremal-combinatorics"
  - "asymptotic-spectrum"
  - "tensor-methods"
  - "lean4"
  - "ai-assisted-math"
seed_rank: 2731
seed_batch: "curiosity-2026-11-27"
reviewed: "2026-11-27"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "An exponential bound for sunflowers (paper)"
    url: "https://github.com/openai/math/blob/main/preprints/An-exponential-bound-for-sunflowers-November-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Improved bounds for the sunflower lemma (Alweiss, Lovett, Wu, Zhang)"
    url: "https://arxiv.org/abs/1908.08483"
    year: 2019
    arxiv: "1908.08483"
    doi: null
  - title: "Proof of the Erdős–Szemerédi sunflower conjecture (Bucić, He, Lee)"
    url: "https://arxiv.org/abs/2610.26686"
    year: 2026
    arxiv: "2610.26686"
    doi: null
  - title: "Euclidean geometry in the asymptotic spectrum of tensors (OpenAI, 24 Nov 2026)"
    url: "https://github.com/openai/math/blob/main/preprints/Euclidean-geometry-in-the-asymptotic-spectrum-of-tensors-November-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
see:
  - "2366-proof-of-the-erdos-szemeredi-sunflower-conjecture"
---

# An exponential bound for sunflowers

## One-sentence takeaway

An OpenAI manuscript claims the Erdős–Rado fixed-petal sunflower conjecture: for each r ≥ 3, any family of more than B_r^k distinct sets of size at most k contains an r-sunflower, with log B_r = O((log r)^4 (log log 2r)^{5/2}) and no dependence on k or on the size of the ground set.

## Why it's lovely

A sunflower is r sets whose pairwise intersections are all the same core, with the leftover petals disjoint. Erdős and Rado's 1960 bound k!(r−1)^k comes from a three-line greedy argument, and replacing the factorial with c^k has been one of combinatorics' most famous open problems. Alweiss–Lovett–Wu–Zhang (2019) made the breakthrough to a base polylogarithmic in k, and this claim removes the k-dependence entirely. The route is the delight. Write each set as a word, one symbol per class. A sunflower fails exactly when some column has a *partial repetition*: a symbol repeated, but not in all r words. A tensor operation per column kills every partial repetition, and a multiplicative, monotone "price" from the asymptotic spectrum of tensors charges for merging r independent labels into one shared label. That is the same spectral geometry behind the family's matrix-multiplication claim (card 2728), now pointed at a classical set-system problem. Sunflower lemmas also power Razborov's monotone circuit lower bounds, so the result reaches into complexity theory.

## Key ideas

- **Theorem 1.1.** For each r ≥ 3, families of distinct sets of size ≤ k with no r-sunflower have at most B_r^k members, with an explicit B_r = 2^{C H^4 L^{5/2}}, where H = log₂(2r) and L = log₂(2H).
- **Lower bound.** Block transversals give (r−1)^k sunflower-free sets, so the optimal base is at least r−1. Whether it is O(r), which was Erdős–Rado's original c^k hope with absolute c, stays open.
- **Reduction.** A random colouring reduces the general problem to word families at a cost of at most e^k.
- **Price argument.** By the Euclidean geometry of the asymptotic spectrum, rates are normalized mean widths. Placing the groups so the union's rate exceeds the sum of the parts by ρ gives ρ·log₂N ≤ k·f, where f is the per-column test cost. The hard part is keeping f bounded for alphabets of any size.
- **Lean.** Per the README, Lean proves the existence of a constant C_r with bound C_r^k. The quantitative dependence on r is only in the manuscript.

## Caveats

This is an AI-generated manuscript (OpenAI family 379), not refereed, and it depends on a sibling preprint on asymptotic-spectrum geometry that I did not read. I read the abstract, Sections 1–1.3 and the README (36 pp.). The paper itself cites a 2026 revision of Fukuyama's arXiv claim and a 2026 VC-dimension result, so the literature is in flux. Card 2728 only names this result in passing as a sibling, and it gets its own card here as a Curiosity hand-off.

## Links

- Paper (PDF): https://github.com/openai/math/blob/main/preprints/An-exponential-bound-for-sunflowers-November-24-2026/paper.pdf
- Release README: https://github.com/openai/math/tree/main/preprints/An-exponential-bound-for-sunflowers-November-24-2026
- Alweiss–Lovett–Wu–Zhang (2019): https://arxiv.org/abs/1908.08483
