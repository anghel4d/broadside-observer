---
title: "Polymorphic Effect Systems"
authors:
  - "John M. Lucassen"
  - "David K. Gifford"
year: 1988
venue: "POPL"
arxiv: null
doi: "10.1145/73560.73564"
source: "https://doi.org/10.1145/73560.73564"
topics:
  - typed-programming-systems
  - region-memory-capabilities
seed_rank: 150
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "Syntactic control of interference"
    url: "https://doi.org/10.1145/512760.512766"
    year: 1978
    arxiv: null
    doi: "10.1145/512760.512766"
  - title: "Towards a theory of type structure"
    url: "https://doi.org/10.1007/3-540-06859-7_148"
    year: 1974
    arxiv: null
    doi: "10.1007/3-540-06859-7_148"
  - title: "Integrating functional and imperative programming"
    url: "https://doi.org/10.1145/319838.319848"
    year: 1986
    arxiv: null
    doi: "10.1145/319838.319848"
  - title: "Report on the programming language Euclid"
    url: "https://doi.org/10.1145/954666.971189"
    year: 1977
    arxiv: null
    doi: "10.1145/954666.971189"
  - title: "An efficient way to find the side effects of procedure calls and the aliases of variables"
    url: "https://doi.org/10.1145/567752.567756"
    year: 1979
    arxiv: null
    doi: "10.1145/567752.567756"
  - title: "Types and Effects Towards the Integration of Functional and Imperative Programming."
    url: "https://apps.dtic.mil/sti/pdfs/ADA186930.pdf"
    year: 1987
    arxiv: null
    doi: null
see:
  - "158-syntactic-control-of-interference"
---

# Polymorphic Effect Systems

## One-sentence takeaway

A kinded type system with three description kinds — types (returned values), effects (observable side-effects), and regions (store areas those effects hit) — plus polymorphism over all three, used to discover scheduling constraints for parallel compilation.

## Why it matters here

This is the origin of type-and-effect systems and of effect masking: ano purity and region-style capability disciplines start here, not with later reconstruction papers.

## Key ideas

- Descriptions come in three kinds. An expression has a type, an effect, and its effects are located in regions of the store. You can abstract a term over a type variable, an effect variable, or a region variable — FX-87-style polymorphism at every kind.
- Unobservable side-effects can be masked. Effect soundness says the statically computed effect is a conservative approximation of the actual trace, so a function whose effects are confined to regions that do not escape can be treated as pure by its caller.
- The point of the analysis is scheduling: independent effects (different regions, or read/read) may run in parallel without changing sequential semantics. FX experimental data is offered as evidence that this is usable for compiling to parallel machines.
- Lineage is Reynolds's syntactic control of interference, Gifford–Lucassen 1986 (integrating functional and imperative), and Lucassen's 1987 MIT thesis. Talpin–Jouvelot later reconstruct the same three kinds implicitly.

## Caveats

## Links

- DOI: [10.1145/73560.73564](https://doi.org/10.1145/73560.73564)
- IBM Research record: https://research.ibm.com/publications/polymorphic-effect-systems
