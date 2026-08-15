---
title: "Design Principles Behind Smalltalk"
authors:
  - "Daniel H. H. Ingalls"
year: 1981
venue: "BYTE Magazine"
arxiv: null
doi: null
source: "https://www.cs.virginia.edu/~evans/cs655/readings/smalltalk.html"
topics:
  - smalltalk
  - ingalls
  - object-oriented
  - design-principles
seed_rank: 681
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Early History of Smalltalk"
    url: "https://doi.org/10.1145/155360.155364"
    year: 1993
    arxiv: null
    doi: "10.1145/155360.155364"
  - title: "Smalltalk-80: The Language and Its Implementation"
    url: "https://dl.acm.org/doi/10.5555/273"
    year: 1983
    arxiv: null
    doi: null
see:
  - "680-the-early-history-of-smalltalk"
  - "682-smalltalk-80-the-language-and-its-implementation"
---

# Design Principles Behind Smalltalk

## One-sentence takeaway

Ingalls's BYTE 1981 essay states Smalltalk's design as principles — personal mastery, objects and messages all the way down, automatic storage, polymorphism, factoring via inheritance — not as a language tour.

## Why it matters here

Short enough to audit ano's object/message boundaries against: if a part of Anoptic cannot be changed, or works unlike the rest, Ingalls already named the failure mode.

## Key ideas

- Personal mastery: a creative individual must be able to comprehend the whole system; any sealed subsystem becomes a barrier.
- Good design = few unchangeable parts, those parts as general as possible, everything in one uniform framework (communicating objects).
- Messages decouple intent from method; the receiver, even an integer, decides how `+ 5` happens. Classification, polymorphism, and inheritance are the complexity-management rules on top.
- BYTE, August 1981. The Virginia HTML is a scan of the Dwight Hughes copy; pair with Kay HOPL and the Blue Book.

## Caveats

## Links

- HTML: https://www.cs.virginia.edu/~evans/cs655/readings/smalltalk.html
