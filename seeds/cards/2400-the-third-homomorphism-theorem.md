---
title: "The Third Homomorphism Theorem"
authors:
  - "Jeremy Gibbons"
year: 1996
venue: "Journal of Functional Programming 6(4):657-665 (Functional Pearl)"
arxiv: null
doi: "10.1017/S0956796800001908"
source: "https://www.cs.ox.ac.uk/people/jeremy.gibbons/publications/thirdht.ps.gz"
topics:
  - list-homomorphisms
  - parallel-reduction
  - bird-meertens-formalism
  - program-derivation
seed_rank: 2400
seed_batch: "archive-2026-10-24"
reviewed: "2026-10-24"
pool: "languages"
relevance_score: 7
lineage: programming-language-foundations
see:
  - 307-scans-as-primitive-parallel-operations
  - 1666-vector-models-for-data-parallel-computing
  - 1154-single-pass-parallel-prefix-scan-with-decoupled-look-back
cites:
  - title: "The Third Homomorphism Theorem"
    url: "https://doi.org/10.1017/S0956796800001908"
    year: 1996
    arxiv: null
    doi: "10.1017/S0956796800001908"
---

# The Third Homomorphism Theorem

## One-sentence takeaway

Gibbons formalises and proves Bird and Meertens' folk theorem — any list function that can be computed both as a right-to-left fold (`foldr`) and as a left-to-right fold (`foldl`) is a list homomorphism, i.e. it can be computed under any parenthesisation and therefore split, reduced in parallel and combined — and shows the price: the combining operator the proof gives you is generally inefficient, as the derivation of mergesort from insertsort demonstrates.

## Why it matters here

ano inherits APL/q's `/` (reduce) and `\` (scan) and wants to run them chunked across SoA columns and worker threads. The theorem gives the language a clean criterion: if a user's fold can be written both ways, a chunked, parallel, associative evaluation exists. That supports a design where ano's reduce over a user lambda is parallelised only when the user (or a library) supplies an associative combiner, and otherwise stays sequential, rather than guessing at associativity — and the paper's own example explains why the derived combiner should not be synthesised automatically.

## Key ideas

- **Homomorphism.** h is ⊙-homomorphic if h (x ++ y) = h x ⊙ h y; ⊙ is then associative on h's range and h [] is its unit if it exists (e.g. sum, length; head has no unit).
- **First theorem.** Every homomorphism is a reduction composed with a map; conversely.
- **Second (specialisation) theorem.** Every homomorphism is both leftwards (foldr) and rightwards (foldl).
- **Third theorem.** The converse: leftwards and rightwards together imply homomorphic, with t ⊙ u = h (g t ++ g u) for any g satisfying h ∘ g ∘ h = h (such a g exists for computable total h with enumerable domain, though it may be partial).
- **Key lemma.** h is a homomorphism iff h v = h x and h w = h y imply h (v ++ w) = h (x ++ y); a corollary is that any injective function is homomorphic.
- **Sorting example.** sort is foldr ins and also foldl of backwards insertion, so it is homomorphic; choosing unsort = id gives u ⊙ v = sort (u ++ v), which is inefficient, and further equational reasoning using the fact that both arguments are already sorted derives linear merge and hence O(n log n) mergesort.

## Caveats

An existence result, not an algorithm: the operator built in the proof relies on a right inverse g that may be partial and expensive, and turning it into an efficient combiner takes extra derivation work (as the paper says explicitly). Lists only; it says nothing about floating-point non-associativity, which ano must handle separately. Read from the author's 1995 preprint PostScript; the JFP version may differ in typography and page layout.

## Links

- Paper (author preprint, PostScript): https://www.cs.ox.ac.uk/people/jeremy.gibbons/publications/thirdht.ps.gz
- Paper (DOI, JFP Functional Pearl): https://doi.org/10.1017/S0956796800001908
