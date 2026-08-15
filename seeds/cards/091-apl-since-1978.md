---
title: "APL since 1978"
authors:
  - "Roger K. W. Hui"
  - "Morten J. Kromberg"
year: 2020
venue: "PACMPL (HOPL IV)"
arxiv: null
doi: "10.1145/3386319"
source: "https://doi.org/10.1145/3386319"
topics:
  - array-programming-apl-bqn-q
seed_rank: 91
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "The Evolution of APL"
    url: "https://doi.org/10.1145/800025.1198346"
    year: 1978
    arxiv: null
    doi: "10.1145/800025.1198346"
  - title: "Can programming be liberated from the von Neumann style? A functional style and its algebra of programs"
    url: "https://doi.org/10.1145/359576.359579"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359579"
  - title: "The Design of APL"
    url: "https://doi.org/10.1147/rd.174.0324"
    year: 1973
    arxiv: null
    doi: "10.1147/rd.174.0324"
see:
  - "157-can-programming-be-liberated-from-the-von-neumann-style-a-fu"
  - "159-the-design-of-apl"
---

# APL since 1978

## One-sentence takeaway

Hui and Kromberg's HOPL IV paper picks up Falkoff and Iverson's 1978 history and traces forty years of APL implementations, nested arrays, and the J and k branches.

## Why it matters here

This is the living-family map for situating ano among APL, J, and k: which array model, which operators, and which platform deaths selected the dialect.

## Key ideas

- After HOPL I, second-generation systems added general arrays (any item may be an array) plus new functions and operators aligned with that model.
- Most implementations followed IBM APL2 "floating" arrays; SHARP APL kept "grounded" arrays and spawned J (Iverson and Hui) and k (Arthur Whitney).
- Hardware and OS habitats repeatedly killed interpreters until C implementations bought portability from mainframes to PCs, phones, and watches.
- Language threads include direct functions, trains, rank, power, key, stencil, under, objects, futures, sparse and infinite arrays, and APL-as-a-service.
- The paper is 108 pages (PACMPL 4, HOPL, Article 69) and still closes with Iverson's line that APL's evolution is far from finished.

## Caveats

## Links

- DOI: [10.1145/3386319](https://doi.org/10.1145/3386319)
- PDF: https://www.sigapl.org/Articles/APL%20Since%201978_3386319.pdf
- HOPL IV: https://hopl4.sigplan.org/details/hopl-4-papers/1/APL-Since-1978
