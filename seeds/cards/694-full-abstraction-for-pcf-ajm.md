---
title: "Full Abstraction for PCF"
authors:
  - "Samson Abramsky"
  - "Radha Jagadeesan"
  - "Pasquale Malacaria"
year: 2000
venue: "Information and Computation"
arxiv: null
doi: "10.1006/inco.2000.2930"
source: "https://doi.org/10.1006/inco.2000.2930"
topics:
  - game-semantics
  - full-abstraction
  - pcf
  - abramsky
seed_rank: 694
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "LCF Considered as a Programming Language"
    url: "https://doi.org/10.1016/0304-3975(77)90044-5"
    year: 1977
    arxiv: null
    doi: "10.1016/0304-3975(77)90044-5"
  - title: "On Full Abstraction for PCF: I, II, and III"
    url: "https://doi.org/10.1006/inco.2000.2917"
    year: 2000
    arxiv: null
    doi: "10.1006/inco.2000.2917"
  - title: "The Lazy Lambda Calculus"
    url: "https://www.cs.ox.ac.uk/people/samson.abramsky/lazy.pdf"
    year: 1990
    arxiv: null
    doi: null
  - title: "Computational Interpretations of Linear Logic"
    url: "https://doi.org/10.1016/0304-3975(93)90181-Q"
    year: 1993
    arxiv: null
    doi: "10.1016/0304-3975(93)90181-Q"
see:
  - "657-lcf-considered-as-a-programming-language"
  - "693-on-full-abstraction-for-pcf-i-ii-and-iii"
  - "692-the-lazy-lambda-calculus"
  - "143-computational-interpretations-of-linear-logic"
---

# Full Abstraction for PCF

## One-sentence takeaway

Abramsky, Jagadeesan, and Malacaria independently solve Plotkin's PCF full-abstraction problem with a games-and-strategies model, without extending the language.

## Why it matters here

AJM is the other founding game-semantics paper beside Hyland–Ong — same problem, different dialogue discipline — and the one that sits closer to Abramsky's linear-logic / lazy-λ line already in the corpus.

## Key ideas

- Types are games, programs are (history-sensitive, well-bracketed) strategies; composition is interaction.
- Full abstraction: two PCF terms are observationally equivalent iff they denote the same strategy. Parallel-or is not forced into the model.
- Published the same year, same journal as Hyland–Ong; the two papers launched game semantics as a PL research program (later: state, control, names).
- *Information and Computation* 163, 2000, DOI 10.1006/inco.2000.2930. Card title keeps the "(AJM)" disambiguator in the filename only.

## Caveats

## Links

- DOI: [10.1006/inco.2000.2930](https://doi.org/10.1006/inco.2000.2930)
