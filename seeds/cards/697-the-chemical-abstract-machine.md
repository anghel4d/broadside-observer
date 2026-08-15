---
title: "The Chemical Abstract Machine"
authors:
  - "Gérard Berry"
  - "Gérard Boudol"
year: 1992
venue: "Theoretical Computer Science"
arxiv: null
doi: "10.1016/0304-3975(92)90185-I"
source: "https://doi.org/10.1016/0304-3975(92)90185-I"
topics:
  - cham
  - berry
  - boudol
  - concurrency
  - process-calculus
seed_rank: 697
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Calculus of Mobile Processes, I"
    url: "https://doi.org/10.1016/0890-5401(92)90008-4"
    year: 1992
    arxiv: null
    doi: "10.1016/0890-5401(92)90008-4"
  - title: "A Calculus of Communicating Systems"
    url: "https://link.springer.com/book/10.1007/3-540-10235-3"
    year: 1980
    arxiv: null
    doi: null
see:
  - "695-a-calculus-of-mobile-processes-i"
  - "043-a-calculus-of-communicating-systems"
---

# The Chemical Abstract Machine

## One-sentence takeaway

Berry and Boudol's CHAM treats a concurrent system as a chemical solution: molecules float freely, heating/cooling rearrange structure, and reactions consume reagents to produce new ones.

## Why it matters here

CHAM is the metaphor join-calculus and a lot of teaching process calculi still use — a way to write an operational semantics for Anoptic message soups without immediately picking CCS or π syntax. Old DOI ended in `-H` (404).

## Key ideas

- A *solution* is a multiset of molecules; structural congruence is heating (break a molecule apart) and cooling (reassemble).
- A reaction rule is a rewrite on molecules that does not care about the rest of the soup — concurrency is true multiset rewriting.
- Membranes / airlocks let you encapsulate a sub-solution, which is how they encode restriction and local communication.
- *Theoretical Computer Science* 96(1):217–248, April 1992, DOI 10.1016/0304-3975(92)90185-I. Fournet–Gonthier is the programming-facing descendant.

## Caveats

## Links

- DOI: [10.1016/0304-3975(92)90185-I](https://doi.org/10.1016/0304-3975(92)90185-I)
