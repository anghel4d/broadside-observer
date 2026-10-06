---
title: "A proof of Lehmer's permutation conjecture for neighbor-swap graphs"
authors:
  - "Tom Verhoeff"
year: 2026
venue: "arXiv:math.CO"
arxiv: "2610.01240"
doi: null
source: "https://arxiv.org/abs/2610.01240"
topics:
  - "curiosity"
  - "combinatorics"
  - "gray-codes"
  - "hamiltonian-cycles"
  - "lean"
seed_rank: 1846
seed_batch: "curiosity-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 10
lineage: combinatorial-generation
cites:
  - title: "A proof of Lehmer's permutation conjecture for neighbor-swap graphs"
    url: "https://arxiv.org/abs/2610.01240"
    year: 2026
    arxiv: "2610.01240"
    doi: null
see:
  - "1847-breaking-the-2n-barrier-for-directed-hamiltonicity"
---

# A proof of Lehmer's permutation conjecture for neighbor-swap graphs

## One-sentence takeaway

D. H. Lehmer's 1965 conjecture (an unsolved research problem in Knuth's TAOCP) is proved: the permutations of any multiset can be walked by adjacent swaps, visiting every word, with only the "stutter" words visited twice; the proof is checked in Python against brute force and formalized in Lean 4.

## Why it's lovely

Why you might love this: it is a 60-year-old Gray-code problem with a gorgeous structural trick. Pair letters into dominoes; swaps inside dominoes turn each class of words with the same domino contents into a hypercube, and the stutters (all-double dominoes) are exactly the 0-dimensional cubes. Glue Hamiltonian cycles of the hypercubes along a spanning tree and the all-even case needs no finite check at all. The only finite ingredients are two explicit cycles of 28 and 84 words. Knuth problem, hypercubes, Lean proof: puzzle-solver catnip, and a generator design pattern for enumerating multiset permutations with one swap per step.

## Key ideas

- Lehmer: every multiset's permutations admit an imperfect Hamiltonian traversal by adjacent swaps (some words visited twice to reach a neighbour and return).
- Verhoeff's 2017 reformulation: Hamiltonicity of N(S) on non-stutter words, with two exceptional families (binary signatures with an odd multiplicity; permutations of (2k,1,1)) that have a Hamiltonian path but no cycle.
- Domino classes form hypercubes; stutters are the 0-dimensional classes.
- All-even multiplicities: glue hypercube Hamiltonian cycles along a spanning tree.
- One odd multiplicity reduces to the all-even case plus Stachowiak (1992), which also settles two or more odd multiplicities; constructions implemented in Python and formalized in Lean 4 over Mathlib.

## Caveats

Very recent single-author preprint (October 2026); community verification is just starting, though the Lean formalization raises confidence. The result is existence/structure; the paper is not about a loopless or constant-amortized-time generator.

## Links

- arXiv abs: https://arxiv.org/abs/2610.01240
- PDF: https://arxiv.org/pdf/2610.01240
