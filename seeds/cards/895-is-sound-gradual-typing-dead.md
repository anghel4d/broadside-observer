---
title: Is Sound Gradual Typing Dead?
authors:
- Asumu Takikawa
- Daniel Feltey
- Ben Greenman
- Max S. New
- Jan Vitek
- Matthias Felleisen
year: 2016
venue: POPL
arxiv: null
doi: 10.1145/2837614.2837630
source: "https://doi.org/10.1145/2837614.2837630"
topics:
- gradual-typing
- performance
- type-safety
seed_rank: 895
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
see:
  - "888-the-design-and-implementation-of-typed-scheme"
---

# Is Sound Gradual Typing Dead?

## One-sentence takeaway

On realistic Typed Racket programs, some typed/untyped mixes are more than 100× slower than either fully typed or fully untyped, because higher-order contracts fire on every boundary crossing.

## Why it matters here

Forces the performance–soundness tradeoff into any language-design conversation Anoptic might have: a sound gradual layer on agent scripts can be slower than no types at all. Motivates transient/open-world checks (card 897) and compiler work.

## Key ideas

- Method: take N modules, consider the lattice of 2ᴺ typed/untyped configurations, measure each. The lattice, not a single mixed program, is the object of study.
- Pathological cases sit in the *middle* of the lattice — exactly the configurations migration actually visits.
- The cost is wrapper allocation and predicate checks on functions, objects, and streams that bounce across the boundary.
- Does not claim the idea is dead; it claims then-current sound implementations were not yet engineering-viable. Later work (transient, collapsible contracts, Grift) is the reply.
- POPL 2016, DOI 10.1145/2837614.2837630.

## Caveats

## Links

- DOI: [10.1145/2837614.2837630](https://doi.org/10.1145/2837614.2837630)
