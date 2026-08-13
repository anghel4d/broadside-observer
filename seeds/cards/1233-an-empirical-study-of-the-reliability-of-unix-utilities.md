---
title: "An Empirical Study of the Reliability of UNIX Utilities"
authors:
  - "Barton P. Miller"
  - "Lars Fredriksen"
  - "Bryan So"
year: 1990
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/96267.96279"
source: "https://doi.org/10.1145/96267.96279"
topics:
  - "fuzzing"
  - "unix"
  - "reliability"
seed_rank: 1233
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: unix-foundations
cites:
  []
---

# An Empirical Study of the Reliability of UNIX Utilities

## One-sentence takeaway

The original fuzzing paper: random inputs crashed 24–33% of Unix utilities. uutils' OSS-Fuzz story starts here.

## Why it matters here

Foundational systems paper already in the Unix bloodstream. The coreutils rewrite is, among other things, a 36-year reply.

## Key ideas

- CACM 33(12):32–44, 1990. DOI `10.1145/96267.96279`.
- Fuzz: throw random junk at CLI tools, including coreutils-class commands.
- Crash rate ~24% then; the method is now continuous (libFuzzer / OSS-Fuzz).

## Caveats

- 1990 utilities, not GNU 9.9 / uutils 0.4. Historical method paper.

## Links

- DOI: https://doi.org/10.1145/96267.96279
