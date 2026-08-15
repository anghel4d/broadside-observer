---
title: "A Method for the Construction of Minimum-Redundancy Codes"
authors:
  - "David A. Huffman"
year: 1952
venue: "Proceedings of the IRE"
arxiv: null
doi: "10.1109/JRPROC.1952.273898"
source: "https://doi.org/10.1109/JRPROC.1952.273898"
topics:
  - huffman-coding
  - compression
  - information-theory
seed_rank: 570
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
see:
  - "553-a-mathematical-theory-of-communication"
---

# A Method for the Construction of Minimum-Redundancy Codes

## One-sentence takeaway

Huffman gives a greedy tree algorithm that builds an optimal prefix code from known symbol frequencies.

## Why it matters here

Everyday compression in logs, assets, and net payloads is still this construction: shortest codes for the most frequent symbols, Kraft-feasible by design.

## Key ideas

- Repeatedly merge the two least probable symbols; the resulting binary tree is a minimum-redundancy prefix code.
- For a known discrete distribution the expected length is optimal among instantaneous codes and lies within one bit of entropy.
- The method is a constructive answer to Shannon's source-coding existence theorem.
- Ties can be broken arbitrarily; the code is unique only up to sibling swaps and such choices.
- Published IRE September 1952; originated as a term-paper answer in Fano's information-theory course.

## Caveats

## Links

- DOI: [10.1109/JRPROC.1952.273898](https://doi.org/10.1109/JRPROC.1952.273898)
- URL: https://doi.org/10.1109/JRPROC.1952.273898
