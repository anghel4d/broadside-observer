---
title: "Zur intuitionistischen Arithmetik und Zahlentheorie"
authors:
  - "Kurt Gödel"
year: 1933
venue: "Ergebnisse eines mathematischen Kolloquiums"
arxiv: null
doi: null
source: "https://academic.oup.com/book/55022/chapter/422805871"
topics:
  - intuitionistic-arithmetic
  - godel
  - constructive
seed_rank: 505
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "Eine Interpretation des intuitionistischen Aussagenkalküls"
    url: "https://academic.oup.com/book/55022"
    year: 1933
    arxiv: null
    doi: null
  - title: "Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes"
    url: "https://doi.org/10.1111/j.1746-8361.1958.tb01464.x"
    year: 1958
    arxiv: null
    doi: "10.1111/j.1746-8361.1958.tb01464.x"
  - title: "Introduction to Metamathematics"
    url: "https://openlibrary.org/works/OL5959470W/Introduction_to_metamathematics"
    year: 1952
    arxiv: null
    doi: null
see:
  - "504-eine-interpretation-des-intuitionistischen-aussagenkalkuls"
  - "503-uber-eine-bisher-noch-nicht-benutzte-erweiterung-des-finiten"
  - "529-introduction-to-metamathematics"
---

# Zur intuitionistischen Arithmetik und Zahlentheorie

## One-sentence takeaway

Gödel's negative translation interprets every theorem of classical Peano arithmetic as a theorem of intuitionistic arithmetic, so HA is not weaker than PA on \(\Pi^0_2\) sentences.

## Why it matters here

This is why "extract a program from a proof" is not wishful thinking: a classical \(\forall\exists\) number-theoretic claim already has an intuitionistic shadow from which a realizing function can be read. Ano and any later typed-effects compiler sit on that shadow.

## Key ideas

- Double-negation / negative translation sends classical connectives to intuitionistic ones so that PA \(\vdash A\) implies HA \(\vdash A^N\).
- For \(\Pi^0_2\) statements the translation is essentially the original formula, so a classical existence proof already yields an intuitionistic one.
- Consistency of PA therefore reduces to consistency of HA.
- Twenty-five years later the Dialectica interpretation (card 503) turns those intuitionistic proofs into explicit System-T functionals.

## Caveats

## Links

- Collected Works I chapter: https://academic.oup.com/book/55022/chapter/422805871
- Original: Ergebnisse eines mathematischen Kolloquiums 4 (1933), 34–38
