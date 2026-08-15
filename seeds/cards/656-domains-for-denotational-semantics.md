---
title: "Domains for Denotational Semantics"
authors:
  - "Dana S. Scott"
year: 1982
venue: "ICALP / LNCS 140"
arxiv: null
doi: "10.1007/BFb0012801"
source: "https://doi.org/10.1007/BFb0012801"
topics:
  - domain-theory
  - scott
  - denotational-semantics
seed_rank: 656
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Data Types as Lattices"
    url: "https://doi.org/10.1137/0205046"
    year: 1976
    arxiv: null
    doi: "10.1137/0205046"
  - title: "Toward a Mathematical Semantics for Computer Languages"
    url: "https://www.cs.ox.ac.uk/files/3228/PRG06.pdf"
    year: 1971
    arxiv: null
    doi: null
  - title: "Outline of a Mathematical Theory of Computation"
    url: "https://www.cs.ox.ac.uk/files/3222/PRG02.pdf"
    year: 1970
    arxiv: null
    doi: null
see:
  - "614-data-types-as-lattices"
  - "612-toward-a-mathematical-semantics-for-computer-languages"
  - "613-outline-of-a-mathematical-theory-of-computation"
---

# Domains for Denotational Semantics

## One-sentence takeaway

Scott's ICALP 1982 survey recasts domains — approximation, continuity, and computability — as the working universe in which a programming language gets a denotation.

## Why it matters here

When ano needs a meaning for recursion, streams, or a non-terminating GPU producer, this is the Scott citation that is about *using* domains, not the 1976 lattices construction paper.

## Key ideas

- A domain is a partial order of approximations with directed suprema; computable maps are continuous (preserve those suprema).
- Function space, products, and lifted domains interpret abstraction, pairing, and partiality; least fixed points interpret recursion.
- Connects the earlier complete-lattice models (Scott 1976; Scott–Strachey PRG notes) to the information-system / neighborhood presentation used in later PL work.
- LNCS 140 chapter, DOI 10.1007/BFb0012801 — the card to pair with Plotkin PCF, not a substitute for it.

## Caveats

## Links

- DOI: [10.1007/BFb0012801](https://doi.org/10.1007/BFb0012801)
