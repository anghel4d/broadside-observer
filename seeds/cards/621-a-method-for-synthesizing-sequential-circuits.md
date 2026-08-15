---
title: "A Method for Synthesizing Sequential Circuits"
authors:
  - "George H. Mealy"
year: 1955
venue: "Bell System Technical Journal"
arxiv: null
doi: "10.1002/j.1538-7305.1955.tb03788.x"
source: "https://doi.org/10.1002/j.1538-7305.1955.tb03788.x"
topics:
  - mealy-machines
  - sequential-circuits
  - automata
seed_rank: 621
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "A Symbolic Analysis of Relay and Switching Circuits"
    url: "https://doi.org/10.1109/T-AIEE.1938.5057767"
    year: 1938
    arxiv: null
    doi: "10.1109/T-AIEE.1938.5057767"
see:
  - "552-a-symbolic-analysis-of-relay-and-switching-circuits"
---

# A Method for Synthesizing Sequential Circuits

## One-sentence takeaway

Mealy gives a synthesis procedure for sequential switching circuits whose output is a function of the current state *and* the current input — the Mealy machine.

## Why it matters here

Pair with Moore 1956: the two standard FSM output conventions. Engine input routers, protocol codecs, and GRID COMMAND command decoders are almost always Mealy (react on the arriving symbol, don't wait a clock).

## Key ideas

- Output is written on the *transition*, so a circuit can respond in the same step as the input.
- A systematic reduction / assignment of internal states from an informal specification of input/output sequences.
- Bell Labs switching lineage: Shannon's relay algebra plus a sequential state table.
- *Bell System Technical Journal* 34(5), 1955, pp. 1045–1079.

## Caveats

## Links

- DOI: [10.1002/j.1538-7305.1955.tb03788.x](https://doi.org/10.1002/j.1538-7305.1955.tb03788.x)
