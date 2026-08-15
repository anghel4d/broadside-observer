---
title: "A Programming Language"
authors:
  - "Kenneth E. Iverson"
year: 1962
venue: "Wiley"
arxiv: null
doi: null
source: "https://www.jsoftware.com/papers/APL.htm"
topics:
  - array-programming-apl-bqn-q
seed_rank: 49
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "Notation as a Tool of Thought"
    url: "https://www.jsoftware.com/papers/tot.htm"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
  - title: "A Method for the Construction of Minimum-Redundancy Codes"
    url: "https://doi.org/10.1109/JRPROC.1952.273898"
    year: 1952
    arxiv: null
    doi: "10.1109/JRPROC.1952.273898"
see:
  - "045-notation-as-a-tool-of-thought"
---

# A Programming Language

## One-sentence takeaway

Iverson’s 1962 Wiley book presents a consistent array notation for algorithms — selection by logical vectors, reduction, matrix product — that IBM later implemented as APL.

## Why it matters here

Root of ano’s DNA: rank-polymorphic verbs, compress/replicate, and “the program is the math.” The 1980 Turing lecture is the manifesto; this book is the notation.

## Key ideas

- Written as a *notation for thought* before a running interpreter existed; chapters treat evaluation, programs, sorting, and linear algebra in the same glyph vocabulary.
- Arrays are first-class; scalar operations extend pointwise, and operators (reduction, scan, inner/outer product) are already the intellectual core.
- Selection by a Boolean vector (compress) is the ancestor of masked SIMD and of ano’s `where` selections over ECS columns.
- Distinguish the 286-page Wiley book from the shorter 1962 AFIPS Spring Joint Computer Conference paper of the same title.
- Canonical public texts: Jsoftware HTML transcription and the Computer History Museum scan. No book DOI.

## Caveats

## Links

- Jsoftware: https://www.jsoftware.com/papers/APL.htm
- HTML book: https://www.jsoftware.com/papers/APL1.htm
- CHM scan: https://softwarepreservation.computerhistory.org/apl/book/APROGRAMMINGLANGUAGE.pdf
