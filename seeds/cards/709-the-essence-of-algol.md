---
title: "The Essence of Algol"
authors:
  - "John C. Reynolds"
year: 1981
venue: "Algorithmic Languages (de Bakker/van Vliet, eds.)"
arxiv: null
doi: "10.1007/978-1-4612-4118-8_4"
source: "https://doi.org/10.1007/978-1-4612-4118-8_4"
topics:
  - algol
  - reynolds
  - idealized-algol
  - semantics
seed_rank: 709
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Syntactic Control of Interference"
    url: "https://doi.org/10.1145/512760.512766"
    year: 1978
    arxiv: null
    doi: "10.1145/512760.512766"
  - title: "Fundamental Concepts in Programming Languages"
    url: "https://doi.org/10.1023/A:1010000313106"
    year: 1967
    arxiv: null
    doi: "10.1023/A:1010000313106"
  - title: "Report on the Algorithmic Language ALGOL 60"
    url: "https://doi.org/10.1145/367236.367262"
    year: 1960
    arxiv: null
    doi: "10.1145/367236.367262"
see:
  - "158-syntactic-control-of-interference"
  - "615-fundamental-concepts-in-programming-languages"
  - "623-report-on-the-algorithmic-language-algol-60"
---

# The Essence of Algol

## One-sentence takeaway

Idealized Algol is a typed λ-calculus of phrases — expressions, commands, and acceptors — whose stack discipline and local store are the semantic core of Algol-class languages.

## Why it matters here

Anoptic’s engine is C with explicit arenas and command/query split, not a heap-λ. Reynolds’s phrase types are the clean model of “this thunk is a command, that one is a pure expression, and they must not interfere,” the same cut Syntactic Control of Interference later enforces.

## Key ideas

- The procedure mechanism plus a stack-allocated local store, not assignment syntax, is what makes Algol Algol.
- Phrase types distinguish commands, expressions, and acceptors so call-by-name procedures still have a typed meaning.
- Local variables have block-bounded lifetimes; the semantics is designed so interference can be discussed, then controlled.
- Strachey’s fundamental concepts and the ALGOL 60 report are the historical substrate; SCI (1978) is the companion discipline.
- Originally in *Algorithmic Languages* (1981); commonly cited via the 1997 *Algol-like Languages* reprint (pp. 67–88).

## Caveats

## Links

- Reprint DOI: [10.1007/978-1-4612-4118-8_4](https://doi.org/10.1007/978-1-4612-4118-8_4)
- Springer chapter: https://link.springer.com/chapter/10.1007/978-1-4612-4118-8_4
