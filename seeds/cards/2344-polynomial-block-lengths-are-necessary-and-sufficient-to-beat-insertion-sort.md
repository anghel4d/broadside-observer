---
title: "Polynomial Block Lengths Are Necessary and Sufficient to Beat Insertion Sort"
authors:
  - "Nikolai Chukhin"
  - "Alexander S. Kulikov"
  - "Maksim Levitskii"
  - "Ivan Mihajlin"
year: 2026
venue: "ECCC TR26-256"
arxiv: null
doi: null
source: "https://eccc.weizmann.ac.il/report/2026/256"
topics:
  - "sorting"
  - "permutations"
  - "transposition-distance"
  - "genome-rearrangement"
seed_rank: 2344
seed_batch: "curiosity-2026-10-19"
reviewed: "2026-10-19"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Polynomial Block Lengths Are Necessary and Sufficient to Beat Insertion Sort"
    url: "https://eccc.weizmann.ac.il/report/2026/256"
    year: 2026
    arxiv: null
    doi: null
  - title: "Sorting by Transpositions (Bafna and Pevzner)"
    url: "https://doi.org/10.1137/S089548019528280X"
    year: 1998
    arxiv: null
    doi: "10.1137/S089548019528280X"
see: ["1846-proof-of-lehmers-permutation-conjecture-neighbor-swap", "2276-sorting-networks-and-their-applications", "2322-undirected-network-coding-and-faster-external-memory-integer-sorting"]
---

# Polynomial Block Lengths Are Necessary and Sufficient to Beat Insertion Sort

## One-sentence takeaway

If each move may cut out a block of at most k elements and reinsert it anywhere, then blocks of length n^{o(1)} still need n − o(n) moves in the worst case (no better than insertion sort, which moves one element at a time), while blocks of length n^α for any fixed α > 0 already sort every permutation in (1 − ε_α)n moves.

## Why it's lovely

It is a sorting question a child can state and that had no answer: how long do the pieces you pick up have to be before you beat moving one card at a time? The answer is a sharp threshold at polynomial length, and both halves have a satisfying shape. The lower bound is a counting argument made tight by putting move sequences into a normal form so that you stop counting the many sequences that do the same thing. The upper bound bootstraps downwards from the old 2n/3 bound for unrestricted block moves, shrinking the allowed block length one exponent step at a time. The same "cut and paste a block" move is how text editors, rope data structures and genome rearrangements work, so the result says something about edit distance with moves too.

## Key ideas

- **Setting.** A transposition cuts out a contiguous block and reinserts it elsewhere. With unrestricted blocks the worst case D(n) lies between ⌊n/2⌋ and about 2n/3 (Bafna–Pevzner 1998; Eriksson et al. 2001), and even D(16) = 9 needed a computer-assisted proof in 2026. With k = 1 the answer is exactly n − LIS(π), so insertion sort is optimal (Heath–Vergara).
- **The gap.** For 1 < k < n nothing was known beyond ⌊n/2⌋ ≤ D_{≤k}(n) ≤ n − 1; the classical arguments cannot even tell moves of two elements apart from unrestricted ones.
- **Lower bound (Theorem 2).** The number of permutations within T bounded moves of the identity is at most 2^{O(n)} (nk²)^T, saving a factor n/k per move over the naive (n²k)^T count. The saving comes from reordering every move sequence into a normal form and counting only those. For k = n^{o(1)} this forces D_{≤k}(n) = n − o(n).
- **Upper bound (Theorem 3).** If blocks of length n^α give (1 − ε)n moves, then blocks of length n^{α'} with α/(1+α) < α' < α give (1 − ε')n, by repeatedly gathering a small set of elements and sorting them with the larger-block bound. Starting from α = 1 the recursion reaches every constant α > 0.

## Caveats

The ε_α in the upper bound shrinks quickly as α falls and is not made practical; this is about the leading constant of a worst case, not a faster sorting routine. Fresh ECCC report, not yet refereed. Exact values of D_{≤k}(n) for any fixed k ≥ 2 remain open.

## Links

- ECCC report page: https://eccc.weizmann.ac.il/report/2026/256
- PDF: https://eccc.weizmann.ac.il/report/2026/256/download/
- Bafna and Pevzner, Sorting by Transpositions: https://doi.org/10.1137/S089548019528280X
