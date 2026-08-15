---
title: "Smalltalk-80: The Language and Its Implementation"
authors:
  - "Adele Goldberg"
  - "David Robson"
year: 1983
venue: "Addison-Wesley (Blue Book)"
arxiv: null
doi: null
source: "https://dl.acm.org/doi/10.5555/273"
topics:
  - smalltalk
  - blue-book
  - object-oriented
  - virtual-machine
seed_rank: 682
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
  - title: "Design Principles Behind Smalltalk"
    url: "https://www.cs.virginia.edu/~evans/cs655/readings/smalltalk.html"
    year: 1981
    arxiv: null
    doi: null
see:
  - "680-the-early-history-of-smalltalk"
  - "681-design-principles-behind-smalltalk"
---

# Smalltalk-80: The Language and Its Implementation

## One-sentence takeaway

The Blue Book is the Smalltalk-80 definition: the language and class library in the front, the bytecode virtual machine and image model in the back.

## Why it matters here

Canonical Smalltalk reference — language + image + VM as one artifact, the ancestor of every later "the system *is* the running image" design Anoptic might steal for a live ano workspace.

## Key ideas

- Part I is the language as programmers used it: objects, messages, classes, metaclasses, and the standard library (collections, streams, graphics, MVC).
- Part II specifies the virtual machine: bytecode set, object memory, interpreter loop, and the snapshot/image that makes the world persistent.
- ISBN 0-201-11371-6, Addison-Wesley 1983, 714 pages. ACM DL 10.5555/273 is the catalog record; there is no official publisher PDF.
- Kay 1993 and Ingalls 1981 are the history and principles; this is the spec you implement against.

## Caveats

## Links

- ACM DL: https://dl.acm.org/doi/10.5555/273
