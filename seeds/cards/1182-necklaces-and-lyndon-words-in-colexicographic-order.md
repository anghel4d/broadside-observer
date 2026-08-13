---
title: "Necklaces and Lyndon words in colexicographic order"
authors:
  - "Daniel Gabric"
  - "Joe Sawada"
year: 2026
venue: "arXiv:math.CO"
arxiv: "2607.05324"
doi: null
source: "https://arxiv.org/abs/2607.05324"
topics:
  - combinatorics-on-words
  - array-programming-apl-bqn-q
seed_rank: 12
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 8
lineage: algorithms-and-complexity
cites:
  - title: "Suffix Arrays: A New Method for On-Line String Searches"
    url: "https://doi.org/10.1137/0222058"
    year: 1993
    arxiv: null
    doi: null
    card: "1006-suffix-arrays-a-new-method-for-on-line-string-searches"
  - title: "On-Line Construction of Suffix Trees"
    url: "https://doi.org/10.1007/BF01206331"
    year: 1995
    arxiv: null
    doi: null
    card: "1007-on-line-construction-of-suffix-trees"
  - title: "Characterization of Word-Representable Near-Triangulations"
    url: "https://arxiv.org/abs/2605.25733"
    year: 2026
    arxiv: "2605.25733"
    doi: null
    card: "1181-characterization-of-word-representable-near-triangulations"
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/TC.1986.1676477"
    year: 1986
    arxiv: null
    doi: null
    card: "383-scans-as-primitive-parallel-operations"
---

# Necklaces and Lyndon words in colexicographic order

## One-sentence takeaway

First constant-amortized-time generation of length-n necklaces and Lyndon words over a k-letter alphabet *in colex order*, via a new superset called quasinecklaces, plus de Bruijn and weight-constrained spin-offs.

## Why it matters here

Why you might love this: Lyndon words are the canonical necklaces — the combinatorics behind FM-index / suffix arrays / de Bruijn sequences — and nobody had CAT generation in colex for arbitrary k. Colex is the order that plays nicely with combinatorial number systems and with array-language loops that vary the *last* index fastest. Quasinecklaces as an easy superset you then filter is a very ano move: generate a regular array, mask it. Joe Sawada is the combinatorial-generation person; this is sparkling odd algorithms, not an LLM paper.

## Key ideas

- First CAT (constant amortized time) algorithms for necklaces and Lyndon words in colexicographic order, any k ≥ 2.
- Quasinecklaces: an easily generated superset; necklaces are identified inside it.
- Count Q_k(n) of quasinecklaces is proportional to the necklace count — that ratio is why CAT works.
- Applications: generate a known de Bruijn sequence, and generate weight-constrained necklaces/Lyndon words, still efficiently.
- Colex (rather than lex) is the novel order constraint.

## Caveats

- CAT is amortized, not worst-case O(1) per object.
- "First" is a priority claim on colex+CAT+arbitrary k; lex-order CAT generators already existed.
- Array-language topic tag is a bridge (colex loops, masking a superset), not because the paper is written in APL.

## Links

- arXiv: [2607.05324](https://arxiv.org/abs/2607.05324)
- PDF: https://arxiv.org/pdf/2607.05324
