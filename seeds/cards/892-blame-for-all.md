---
title: Blame for All
authors:
- Amal Ahmed
- Robert Bruce Findler
- Jeremy G. Siek
- Philip Wadler
year: 2011
venue: POPL
arxiv: null
doi: 10.1145/1926385.1926409
source: "https://doi.org/10.1145/1926385.1926409"
topics:
- gradual-typing
- blame
- parametricity
- type-safety
seed_rank: 892
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Threesomes, With and Without Blame"
    url: "https://doi.org/10.1145/1706299.1706325"
    year: 2010
    arxiv: null
    doi: "10.1145/1706299.1706325"
see:
  - "893-threesomes-with-and-without-blame"
---

# Blame for All

## One-sentence takeaway

Polymorphic gradual typing can still assign blame correctly: casts on ∀-types use sealing so parametricity and the blame theorem hold together.

## Why it matters here

Shows ML-style polymorphism is not an excuse to drop blame at typed/untyped boundaries — relevant if Anoptic ever mixes a polymorphic typed core with untyped agent scripts.

## Key ideas

- Extends the blame calculus from simple types to System F; the hard case is a polymorphic value crossing into untyped code and back.
- Seals / dynamic type representations implement parametricity at runtime so an untyped context cannot discover a type parameter.
- Blame theorem still holds: a failed cast blames the untyped (or wrongly-annotated) side, never well-typed polymorphic code.
- Complements threesomes (space-efficient coercions) and the later gradual-guarantee criteria.
- POPL 2011, DOI 10.1145/1926385.1926409.

## Caveats

## Links

- DOI: [10.1145/1926385.1926409](https://doi.org/10.1145/1926385.1926409)
