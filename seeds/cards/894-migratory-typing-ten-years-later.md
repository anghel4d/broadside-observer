---
title: "Migratory Typing: Ten Years Later"
authors:
- Sam Tobin-Hochstadt
- Matthias Felleisen
- Robert Findler
- Matthew Flatt
- Ben Greenman
- Andrew M. Kent
- Vincent St-Amour
- T. Stephen Strickland
- Asumu Takikawa
year: 2017
venue: SNAPL
arxiv: null
doi: 10.4230/LIPIcs.SNAPL.2017.17
source: "https://doi.org/10.4230/LIPIcs.SNAPL.2017.17"
topics:
- migratory-typing
- survey
- type-safety
seed_rank: 894
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "The Design and Implementation of Typed Scheme"
    url: "https://doi.org/10.1145/1328438.1328486"
    year: 2008
    arxiv: null
    doi: "10.1145/1328438.1328486"
  - title: "Is Sound Gradual Typing Dead?"
    url: "https://doi.org/10.1145/2837614.2837630"
    year: 2016
    arxiv: null
    doi: "10.1145/2837614.2837630"
see:
  - "888-the-design-and-implementation-of-typed-scheme"
  - "895-is-sound-gradual-typing-dead"
---

# Migratory Typing: Ten Years Later

## One-sentence takeaway

A decade of Typed Racket shows migratory typing is an engineering program — module-by-module contracts, occurrence typing, and tooling — not just a cast calculus, and the open problems are performance and ecosystem scale.

## Why it matters here

Situates the gradual shelf as something you ship: if Anoptic grows optional types on existing scripts, this is the after-action report on what actually mattered (boundaries, IDE support, the cost of soundness).

## Key ideas

- Migratory ≠ optional: Typed Racket wraps untyped modules in contracts and assigns blame; TypeScript erases and does not.
- Adoption lessons: programmers migrate at module granularity; the hard parts are macros, occurrence-typing edge cases, and untyped library shims.
- Performance is the crisis the group itself quantified (card 895): sound higher-order contracts can be catastrophic on mixed programs.
- Open problems listed as of 2017: faster contracts, better inference, typed macros, and interop with the rest of the Racket stack.
- SNAPL 2017, LIPIcs volume 71, article 17. Nine-author Typed Racket retrospective.

## Caveats

## Links

- DOI: [10.4230/LIPIcs.SNAPL.2017.17](https://doi.org/10.4230/LIPIcs.SNAPL.2017.17)
- PDF: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.SNAPL.2017.17
