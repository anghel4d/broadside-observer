---
title: "A Relational Model of Data for Large Shared Data Banks"
authors:
  - "E. F. Codd"
year: 1970
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/362384.362685"
source: "https://doi.org/10.1145/362384.362685"
topics:
  - relational-ecs-queries
seed_rank: 47
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "An ALGOL-based associative language"
    url: "https://doi.org/10.1145/363196.363204"
    year: 1969
    arxiv: null
    doi: "10.1145/363196.363204"
  - title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
    url: "https://doi.org/10.1109/69.43410"
    year: 1989
    arxiv: null
    doi: "10.1109/69.43410"
see:
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
---

# A Relational Model of Data for Large Shared Data Banks

## One-sentence takeaway

Codd replaces the then-dominant network/hierarchical stores with relations — sets of tuples — plus a universal data sublanguage based on predicate calculus and a normalization discipline that removes repeating groups.

## Why it matters here

ano selections (`where hp > 0`) and ECS component tables *are* relations. Predicate hops, joins across archetypes, and “no nested pointers in the row” are Codd’s model applied to a frame.

## Key ideas

- A relation is a set; order of rows and of columns (once named) does not matter. That is the break with CODASYL / IMS pointer-chasing.
- The proposed sublanguage is the relational calculus / algebra (the paper sketches both): selection, projection, join, and division as the primitive operations.
- Normalization (first normal form here) bans repeating groups so every value is atomic and every query stays in the same algebra.
- Independence from access paths is the industrial claim: programs should survive a new index or a rearranged store.
- CACM 13(6), June 1970, DOI 10.1145/362384.362685. Later papers add 2NF/3NF and System R; this one is the model.

## Caveats

## Links

- DOI: [10.1145/362384.362685](https://doi.org/10.1145/362384.362685)
