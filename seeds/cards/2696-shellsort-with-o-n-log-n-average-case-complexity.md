---
title: "Shellsort with O(n log n) Average-Case Complexity"
authors:
  - "Cheng Du"
  - "Zongqi Wan"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2611.27671"
doi: null
source: "https://arxiv.org/abs/2611.27671"
version_reviewed: "v1"
topics:
  - "shellsort"
  - "sorting"
  - "average-case-analysis"
  - "gap-sequences"
  - "randomized-algorithms"
  - "in-place-algorithms"
seed_rank: 2696
seed_batch: "craft-2026-11-23"
reviewed: "2026-11-23"
pool: "maths-foundations"
relevance_score: 7
lineage: algorithms-and-complexity
cites:
  - title: "Shellsort with O(n log n) Average-Case Complexity"
    url: "https://arxiv.org/abs/2611.27671"
    year: 2026
    arxiv: "2611.27671"
    doi: null
  - title: "A lower bound on the average-case complexity of Shellsort"
    url: "https://doi.org/10.1145/355483.355488"
    year: 2000
    arxiv: null
    doi: "10.1145/355483.355488"
  - title: "Analysis of Shellsort and related algorithms"
    url: "https://doi.org/10.1007/3-540-61680-2_42"
    year: 1996
    arxiv: null
    doi: "10.1007/3-540-61680-2_42"
  - title: "Randomized Shellsort: A simple data-oblivious sorting algorithm"
    url: "https://doi.org/10.1145/2049697.2049701"
    year: 2011
    arxiv: null
    doi: "10.1145/2049697.2049701"
  - title: "A high-speed sorting procedure"
    url: "https://doi.org/10.1145/368370.368387"
    year: 1959
    arxiv: null
    doi: "10.1145/368370.368387"
---

# Shellsort with O(n log n) Average-Case Complexity

## One-sentence takeaway

Du and Wan answer Sedgewick's question by showing that a Shellsort gap sequence of O(log n) gaps exists that sorts a random permutation in O(n log n) expected comparisons, matching the Jiang–Li–Vitányi lower bound, and they give an explicit randomized schedule plus a polynomial-time procedure that finds such a fixed sequence with high probability.

## Why it matters here

Shellsort is the in-place, allocation-free, tiny-code sort that still gets used where arenas and code size matter (embedded paths, small fixed buffers, GPU or SIMD lanes sorting short runs). Until now no gap sequence was known to reach O(n log n) on average; the best proven were around O(n log² n) (Pratt's on every input). This paper shows the right shape for a schedule: about eleven passes per halving scale, three fixed gaps near 7s/4 then one random gap from each of eight intervals in [s, 3s/2). For Anoptic this is mostly a reference result, but the potential-function argument (sum of squared displacement, never increased by an h-pass) is a clean way to reason about any multi-pass partial sort.

## Key ideas

- **Theorem.** For each n there is an explicit distribution over strictly decreasing gap sequences of length O(log n), ending in 1, with expected comparisons O(n log n) for every input; averaging gives a fixed sequence with Θ(n log n) average cost (Corollary 1.2).
- **Schedule.** For scales s = largest power of two ≤ n/4 down to 64: gaps G+m, G+1, G with G = 7s/4 and m = ⌈√G⌉, then one uniform draw from each of eight intervals of width s/16 in [s, 3s/2), visited from high to low; a final gap-1 pass; for n < 256 just insertion sort.
- **Analysis.** Disorder is measured by Q(A) = Σ (Aᵢ − i)²; an h-pass never increases Q, its comparison cost is bounded in terms of n, h and Q, and the drop in Q equals 2h times the weight of inversions inside the same h-chain (Lemma 2.1). After the three fixed passes, every distance beyond a constant times s^(3/2) is a nonnegative combination of those gaps, so long-range inversions are gone for the rest of the scale; the random gaps then remove a constant fraction of the remaining short-range weight, so each scale costs O(n) expected comparisons and the next scale can start at s/2.
- **Construction.** Sampling several schedules and scoring them gives, in time polynomial in n and log(1/δ), one fixed sequence that achieves the bound with probability at least 1 − δ.

## Caveats

v1 preprint (20 Nov 2026), not yet peer reviewed. The constants are not given and there are no experiments, so it says nothing about beating Ciura-style tuned sequences or introsort in practice; the sequence depends on n. The guarantee is in expectation over the random schedule (or over random inputs for a fixed sequence), not a worst-case bound. Read from the arXiv abstract, introduction and overview.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.27671
- PDF: https://arxiv.org/pdf/2611.27671
- Jiang, Li, Vitányi lower bound (JACM 2000): https://doi.org/10.1145/355483.355488
