---
title: "Characterization of Word-Representable Near-Triangulations"
authors:
  - "Suchanda Roy"
  - "Ramesh Hariharasubramanian"
year: 2026
venue: "arXiv:math.CO"
arxiv: "2605.25733"
doi: null
source: "https://arxiv.org/abs/2605.25733"
topics:
  - combinatorics-on-words
  - computational-geometry
seed_rank: 11
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
  - title: "Necklaces and Lyndon words in colexicographic order"
    url: "https://arxiv.org/abs/2607.05324"
    year: 2026
    arxiv: "2607.05324"
    doi: null
    card: "1182-necklaces-and-lyndon-words-in-colexicographic-order"
  - title: "On-Line Construction of Suffix Trees"
    url: "https://doi.org/10.1007/BF01206331"
    year: 1995
    arxiv: null
    doi: null
    card: "1007-on-line-construction-of-suffix-trees"
---

# Characterization of Word-Representable Near-Triangulations

## One-sentence takeaway

A complete forbidden-induced-subgraph characterisation of which near-triangulations are word-representable, unifying (and correcting) a scatter of subclass results about polyominoes, grids, and chordal near-triangulations.

## Why it matters here

Why you might love this: a graph is a word, an edge is *alternation*. Near-triangulations are the meshes you actually sit on (almost every face a triangle). Word-representable graphs are one of those odd algorithms that feel like they were invented for Anghel — combinatorics on words meeting planar geometry, with a forbidden-minor flavour but for induced subgraphs. If ano ever wants "this mesh is a string," this is the census of when that is even possible.

## Key ideas

- Word-representable: letters alternate in a word iff the corresponding vertices are adjacent.
- Near-triangulation = planar, all inner faces triangles.
- Completes the characterisation via forbidden induced subgraphs; unifies polyomino triangulations, domino-rectangles, K₄-free near-triangulations, triangular-grid subdivisions, grid-covered cylinders, chordal near-triangulations.
- Explicitly corrects inaccuracies in earlier subclass papers.
- Mixes orientations, words, and colouring in one planar family.

## Caveats

- Characterisation is structural, not an algorithm paper (no claimed linear-time recognition here).
- "Corrects earlier work" — verify against the cited subclass papers before treating those as settled.
- Topic tag is loose; this is combinatorics, not category theory, despite the pool.

## Links

- arXiv: [2605.25733](https://arxiv.org/abs/2605.25733)
- PDF: https://arxiv.org/pdf/2605.25733
