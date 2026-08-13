---
title: "Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities"
authors:
  - "Gene M. Amdahl"
year: 1967
venue: "AFIPS Spring Joint Computer Conference"
arxiv: null
doi: "10.1145/1465482.1465560"
source: "https://doi.org/10.1145/1465482.1465560"
topics:
  - computer-architecture
  - amdahl
  - parallelism
seed_rank: 1134
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "Computer Architecture: A Quantitative Approach"
    url: "https://www.worldcat.org/title/computer-architecture-a-quantitative-approach/oclc/20826987"
    year: 1990
    arxiv: null
    doi: null
    card: "1132-computer-architecture-a-quantitative-approach"
  - title: "The Mythical Man-Month: Essays on Software Engineering"
    url: "https://www.worldcat.org/title/mythical-man-month/oclc/1527538"
    year: 1975
    arxiv: null
    doi: null
    card: "1135-the-mythical-man-month-essays-on-software-engineering"
---

# Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities

## One-sentence takeaway

Amdahl's law: speedup is bounded by the serial fraction—still the first sanity check on parallel hopes.

## Why it matters here

Mandatory foil when selling multithreaded job systems or GPU offload.

## Key ideas

- Serial fraction limits parallel speedup.
- Argument about single-processor vs parallel approaches of 1967.
- Simple formula used far beyond its original context.
- Pairs with Gustafson later for scaled-speedup nuance.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/1465482.1465560](https://doi.org/10.1145/1465482.1465560)
- URL: https://doi.org/10.1145/1465482.1465560
