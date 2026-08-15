---
title: "Abstract Interpretation: A Unified Lattice Model for Static Analysis of Programs by Construction or Approximation of Fixpoints"
authors:
  - "Patrick Cousot"
  - "Radhia Cousot"
year: 1977
venue: "POPL"
arxiv: null
doi: "10.1145/512950.512973"
source: "https://doi.org/10.1145/512950.512973"
topics:
  - abstract-interpretation
  - cousot
  - static-analysis
  - fixpoints
seed_rank: 701
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Toward a Mathematical Semantics for Computer Languages"
    url: "https://www.cs.ox.ac.uk/files/3228/PRG06.pdf"
    year: 1971
    arxiv: null
    doi: null
  - title: "A Unified Approach to Global Program Optimization"
    url: "https://doi.org/10.1145/512927.512945"
    year: 1973
    arxiv: null
    doi: "10.1145/512927.512945"
  - title: "Property Extraction in Well-Founded Property Sets"
    url: "https://doi.org/10.1109/TSE.1975.6312840"
    year: 1975
    arxiv: null
    doi: "10.1109/TSE.1975.6312840"
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
see:
  - "612-toward-a-mathematical-semantics-for-computer-languages"
  - "592-an-axiomatic-basis-for-computer-programming"
---

# Abstract Interpretation: A Unified Lattice Model for Static Analysis of Programs by Construction or Approximation of Fixpoints

## One-sentence takeaway

Sound static analysis is the construction of a coarser lattice of program properties whose extreme fixpoints over-approximate the concrete Scott–Strachey semantics.

## Why it matters here

Anoptic’s engine, GRID COMMAND planners, and agent scripts all need analyses that never lie about aliasing, effects, or bounds. Cousot–Cousot 1977 is the justification that a cheap abstract interpreter over ECS state or shader IR is still a theorem about the real run, not a heuristic.

## Key ideas

- A program denotes computations in a concrete universe; an abstract interpretation re-executes that denotation in a simpler lattice so the result is a guaranteed summary of the real run.
- Local transfer functions are monotone maps on a complete semilattice; global properties are extreme fixpoints of the resulting equation system (Tarski).
- Abstraction is a consistency relation between interpretations: a coarser analysis must not contradict a finer one, and in particular must be consistent with the formal semantics.
- Classical data-flow algorithms (Kildall, Wegbreit) are recovered as finite Kleene iteration; widening/narrowing approximate infinite chains.
- The running example is the rule of signs: cheap, incomplete, still strong enough for the questions a compiler is allowed to ask.

## Caveats

## Links

- DOI: [10.1145/512950.512973](https://doi.org/10.1145/512950.512973)
- Author PDF: https://www.di.ens.fr/~cousot/publications.www/CousotCousot-POPL-77-ACM-p238--252-1977.pdf
- Author page: https://www.di.ens.fr/~cousot/COUSOTpapers/POPL77.shtml
