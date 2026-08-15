---
title: "Error Detecting and Error Correcting Codes"
authors:
  - "Richard W. Hamming"
year: 1950
venue: "Bell System Technical Journal"
arxiv: null
doi: "10.1002/j.1538-7305.1950.tb00463.x"
source: "https://doi.org/10.1002/j.1538-7305.1950.tb00463.x"
topics:
  - error-correcting-codes
  - hamming
  - coding-theory
seed_rank: 568
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
  - title: "Notes on Digital Coding"
    url: "https://doi.org/10.1109/JRPROC.1949.233620"
    year: 1949
    arxiv: null
    doi: "10.1109/JRPROC.1949.233620"
see:
  - "553-a-mathematical-theory-of-communication"
  - "569-notes-on-digital-coding"
---

# Error Detecting and Error Correcting Codes

## One-sentence takeaway

Hamming shows how parity-check geometry detects and corrects single errors, inventing Hamming distance and the codes that make digital memory usable.

## Why it matters here

Shannon said noise is inevitable; Hamming made codes that let the engine, the net, and the log store bits anyway.

## Key ideas

- Distance between codewords is the number of differing positions; minimum distance \(d\) corrects \(\lfloor(d-1)/2\rfloor\) errors.
- The \((7,4)\) Hamming code uses three parity bits placed at powers of two so the syndrome is the error location.
- Single-error-correcting, double-error-detecting (SECDED) follows by adding an overall parity bit.
- The work came out of weekend Bell Labs machine checks that stopped on every parity fail.
- Published BSTJ April 1950; Golay's 1949 note is the independent perfect-code counterpart.

## Caveats

## Links

- DOI: [10.1002/j.1538-7305.1950.tb00463.x](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)
- URL: https://doi.org/10.1002/j.1538-7305.1950.tb00463.x
