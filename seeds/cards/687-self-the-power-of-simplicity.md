---
title: "SELF: The Power of Simplicity"
authors:
  - "David Ungar"
  - "Randall B. Smith"
year: 1987
venue: "OOPSLA"
arxiv: null
doi: "10.1145/38765.38828"
source: "https://doi.org/10.1145/38765.38828"
topics:
  - self
  - prototypes
  - object-oriented
  - ungar
seed_rank: 687
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Smalltalk-80: The Language and Its Implementation"
    url: "https://dl.acm.org/doi/10.5555/273"
    year: 1983
    arxiv: null
    doi: null
  - title: "The Early History of Smalltalk"
    url: "https://doi.org/10.1145/155360.155364"
    year: 1993
    arxiv: null
    doi: "10.1145/155360.155364"
see:
  - "682-smalltalk-80-the-language-and-its-implementation"
  - "680-the-early-history-of-smalltalk"
---

# SELF: The Power of Simplicity

## One-sentence takeaway

Ungar and Smith replace classes with prototypes: every object is a cloneable collection of slots, and inheritance is parent-pointer delegation.

## Why it matters here

SELF is the prototype/OO-VM classic that fed Java HotSpot and JavaScript's prototypal story — the systems-OO card beside Smalltalk when Anoptic wonders whether entities need a class table.

## Key ideas

- No classes and no types in the language: an object has slots that hold values or methods; cloning plus slot addition is how you specialize.
- Messages look up through parent slots; `self` is the original receiver, so parents are shared behaviour, not templates.
- Extreme simplicity is the point; the later SELF VMs (maps, PICs, adaptive optimization) are why HotSpot looks the way it does, but those are follow-on papers.
- OOPSLA 1987, DOI 10.1145/38765.38828.

## Caveats

## Links

- DOI: [10.1145/38765.38828](https://doi.org/10.1145/38765.38828)
