---
title: "String diagrams for Strictification and Coherence"
authors:
  - "Paul Wilson"
  - "Dan Ghica"
  - "Fabio Zanasi"
year: 2024
venue: "Logical Methods in Computer Science"
arxiv: "2201.11738"
doi: "10.46298/lmcs-20(4:8)2024"
source: "https://arxiv.org/abs/2201.11738"
topics:
  - "string-diagrams"
  - "coherence"
  - "strictification"
seed_rank: 957
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 8
lineage: categorical-deep-learning
cites:
  - title: "A Survey of Graphical Languages for Monoidal Categories"
    url: "https://arxiv.org/abs/0908.3347"
    year: 2010
    arxiv: "0908.3347"
    doi: "10.1007/978-3-642-12821-9_4"
  - title: "The Geometry of Tensor Calculus, I"
    url: "https://doi.org/10.1016/0001-8708(91)90003-P"
    year: 1991
    doi: "10.1016/0001-8708(91)90003-P"
see:
  - "117-a-survey-of-graphical-languages-for-monoidal-categories"
  - "948-the-geometry-of-tensor-calculus-i"
---

# String diagrams for Strictification and Coherence

## One-sentence takeaway

Wilson, Ghica, and Zanasi give a generators-and-relations string-diagram calculus for *non-strict* monoidal categories, and from it a graphical proof of Mac Lane's strictness and coherence theorems — why you may draw wires as if \(\otimes\) were strictly associative.

## Why it matters here

Every NCD/Weaves picture pretends the monoidal structure is strict. This paper is the lemma that says the picture is not lying, and it is written in the same Wilson/Zanasi circle as the string-diagram textbook.

## Key ideas

- LMCS 20(4):8, 2024 (lmcs:13982). arXiv:2201.11738. Strict monoidal string diagrams were already standard; non-strict ones (associators and unitors as actual wires) were not.
- A presentation by generators and relations handles applications in digital circuits and programming languages where the associator is not invisibly identity.
- Correctness of the calculus yields a new proof of Mac Lane's strictness theorem (every monoidal category is monoidally equivalent to a strict one).
- That in turn gives an elementary graphical proof of coherence, including an inductive construction of the canonical isomorphisms between parenthesizations.

## Caveats

## Links

- arXiv: [2201.11738](https://arxiv.org/abs/2201.11738)
- LMCS: https://lmcs.episciences.org/13982
- DOI: https://doi.org/10.46298/lmcs-20(4:8)2024
