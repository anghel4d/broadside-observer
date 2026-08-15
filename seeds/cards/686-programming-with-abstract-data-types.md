---
title: "Programming with Abstract Data Types"
authors:
  - "Barbara Liskov"
  - "Stephen Zilles"
year: 1974
venue: "ACM SIGPLAN Symposium on Very High Level Languages"
arxiv: null
doi: "10.1145/800233.807045"
source: "https://doi.org/10.1145/800233.807045"
topics:
  - abstract-data-types
  - liskov
  - clu
  - encapsulation
seed_rank: 686
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
see:
  - "592-an-axiomatic-basis-for-computer-programming"
---

# Programming with Abstract Data Types

## One-sentence takeaway

Liskov and Zilles argue that the unit of modularity should be an abstract data type — operations plus a hidden representation — and that languages must support that unit, not merely permit a coding style.

## Why it matters here

The 1974 ADT paper is the conceptual root before CLU clusters and before Mitchell–Plotkin existentials; it is why an Anoptic component API is an interface, not a struct layout.

## Key ideas

- An ADT is characterized by its operations; clients must not depend on the representation, so the language has to enforce the boundary.
- Informal methodology (structured programming, Hoare-style data representation proofs) is not enough — you need linguistic support.
- The paper is the program that CLU then implements: clusters, type-safe abstraction, sealed representations.
- SIGPLAN Symposium on Very High Level Languages, 1974, pp. 50–59, DOI 10.1145/800233.807045 (also *SIGPLAN Notices* 9(4)). The previously listed `10.1145/942572.807045` is a parallel catalog number.

## Caveats

## Links

- DOI: [10.1145/800233.807045](https://doi.org/10.1145/800233.807045)
