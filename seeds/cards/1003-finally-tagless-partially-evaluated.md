---
title: "Finally Tagless, Partially Evaluated: Tagless Staged Interpreters for Simpler Typed Languages"
authors: ["Jacques Carette", "Oleg Kiselyov", "Chung-chieh Shan"]
year: 2009
venue: "J. Funct. Program."
arxiv: null
doi: "10.1017/S0956796809007205"
source: "https://doi.org/10.1017/S0956796809007205"
topics: [tagless-final, embedded-languages, staged-interpretation]
seed_rank: 1003
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "languages"
relevance_score: 9
lineage: embedded-interpreters
cites:
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
  - title: "Defunctionalization at Work"
    url: "https://doi.org/10.1145/773184.773202"
    year: 2001
    arxiv: null
    doi: "10.1145/773184.773202"
  - title: "The Essence of Functional Programming"
    url: "https://doi.org/10.1145/143165.143169"
    year: 1992
    arxiv: null
    doi: "10.1145/143165.143169"
  - title: "Finally tagless, partially evaluated (APLAS)"
    url: "https://doi.org/10.1007/978-3-540-76637-7_15"
    year: 2007
    arxiv: null
    doi: "10.1007/978-3-540-76637-7_15"
see:
  - "033-the-essence-of-functional-programming"
  - "630-definitional-interpreters-for-higher-order-programming-langu"
  - "643-defunctionalization-at-work"
---

# Finally Tagless, Partially Evaluated: Tagless Staged Interpreters for Simpler Typed Languages

## One-sentence takeaway

Encode an object language as combinators (the coalgebra of λ) so one typed term can be an evaluator, a compiler, a partial evaluator, or a CPS transform — with no type tags and no GADTs required.

## Why it matters here

ano is an embedded array/columnar language that will grow interpreters, CUDA/SPIR-V backends, and Japanese/CL surface syntax. Tagless-final is the JFP-classic way to share one AST-shaped interface across those interpretations without the initial-algebra tag soup that kills inner loops.

## Key ideas

- Object terms are combinator functions, not data constructors: a term abstracts over the family of interpreters, and each interpreter is a type-class/module instance.
- No dependent types, GADTs, or post-hoc tag elimination are required in Haskell or ML; ordinary higher-kinded polymorphism is enough.
- The same encoding yields an evaluator, a staged compiler, a tagless partial evaluator, and CBN/CBV CPS transformers, all statically type-preserving.
- The representation simulates inductive maps from types to types, which is what typed PE and typed CPS actually need.
- Stuck states are impossible by construction: if the metalanguage type-checks, the object interpreter never matches on a universal Value tag.

## Caveats


## Links

- DOI: [10.1017/S0956796809007205](https://doi.org/10.1017/S0956796809007205)
- Author PDF: https://okmij.org/ftp/tagless-final/JFP.pdf
- APLAS 2007: https://doi.org/10.1007/978-3-540-76637-7_15
