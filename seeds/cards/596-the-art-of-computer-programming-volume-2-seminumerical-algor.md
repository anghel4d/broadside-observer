---
title: "The Art of Computer Programming, Volume 2: Seminumerical Algorithms"
authors:
  - "Donald E. Knuth"
year: 1969
venue: "Addison-Wesley"
arxiv: null
doi: null
source: "https://www-cs-faculty.stanford.edu/~knuth/taocp.html"
topics:
  - random-numbers
  - arithmetic
  - knuth
  - taocp
seed_rank: 596
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "The Art of Computer Programming, Volume 1: Fundamental Algorithms"
    url: "https://www-cs-faculty.stanford.edu/~knuth/taocp.html"
    year: 1968
    arxiv: null
    doi: null
  - title: "Various techniques used in connection with random digits"
    url: "https://mcnp.lanl.gov/pdf_files/nbs_vonneumann.pdf"
    year: 1951
    arxiv: null
    doi: null
  - title: "Rounding-Off Errors in Matrix Processes"
    url: "https://doi.org/10.1093/qjmam/1.1.287"
    year: 1948
    arxiv: null
    doi: "10.1093/qjmam/1.1.287"
see:
  - "595-the-art-of-computer-programming-volume-1-fundamental-algorit"
  - "549-various-techniques-used-in-connection-with-random-digits"
  - "524-rounding-off-errors-in-matrix-processes"
---

# The Art of Computer Programming, Volume 2: Seminumerical Algorithms

## One-sentence takeaway

TAOCP Volume 2 treats random-number generation and computer arithmetic as algorithms with proofs, not as numerical folklore.

## Why it matters here

Simulation RNGs and multi-precision paths in the engine are seminumerical in Knuth's sense: discrete algorithms whose correctness is statistical or algebraic.

## Key ideas

- Linear congruential and related generators are analyzed; spectral and other statistical tests are part of the design, not an afterthought.
- The volume is the standard depth cite for "what is a good RNG" before modern cryptographic PRNGs.
- Seminumerical arithmetic: multi-precision integers, floating conversion, gcd, modular methods.
- First edition 1969; later editions absorb new generators and arithmetic algorithms without changing the charter.
- Pairs with von Neumann's 1951 random-digits notes and Turing's rounding-error paper.

## Caveats

## Links

- URL: https://www-cs-faculty.stanford.edu/~knuth/taocp.html
