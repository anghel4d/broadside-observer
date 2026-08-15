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
seed_rank: 969
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

Miller, Fredriksen, and So threw random junk at Unix command-line utilities and crashed 24–33% of them — the original fuzzing paper, and the ancestor of every later coreutils fuzz campaign.

## Why it matters here

Foundational systems paper already in the Unix bloodstream. The uutils OSS-Fuzz story is a 36-year reply: same utilities, now under continuous coverage-guided fuzzing instead of a one-off random stream.

## Key ideas

- CACM 33(12):32–44, 1990. DOI `10.1145/96267.96279`.
- Method: generate unstructured random input (and later random argv), pipe it at CLI tools including coreutils-class commands, record crashes and hangs.
- Crash rates of roughly a quarter to a third of the tested utilities on then-current vendor Unixes; many failures were unchecked `gets`/pointer bugs.
- The method, not the 1990 binary set, is what survived: libFuzzer, AddressSanitizer, and OSS-Fuzz industrialize the same experiment.

## Caveats

## Links

- DOI: https://doi.org/10.1145/96267.96279
