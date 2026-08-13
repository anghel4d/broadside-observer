---
title: "Continuous Fuzzing with libFuzzer and AddressSanitizer"
authors:
  - "Kostya Serebryany"
year: 2016
venue: "IEEE SecDev"
arxiv: null
doi: "10.1109/SecDev.2016.043"
source: "https://doi.org/10.1109/SecDev.2016.043"
topics:
  - "libfuzzer"
  - "asan"
  - "fuzzing"
seed_rank: 1234
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: unix-foundations
cites:
  - title: "An Empirical Study of the Reliability of UNIX Utilities"
    url: "https://doi.org/10.1145/96267.96279"
    year: 1990
    doi: "10.1145/96267.96279"
    card: "1233-an-empirical-study-of-the-reliability-of-unix-utilities"
---

# Continuous Fuzzing with libFuzzer and AddressSanitizer

## One-sentence takeaway

In-process coverage-guided fuzzing (libFuzzer) plus ASan as a continuous development practice — the engine under uutils' grammar-guided differential tests.

## Why it matters here

How you actually run Miller 1990 in 2026 CI. Anoptic/GRID test harnesses want this, not once-a-year fuzz weeks.

## Key ideas

- IEEE SecDev 2016, p. 157. DOI `10.1109/SecDev.2016.043`.
- libFuzzer: coverage-directed, in-process, shrinking crashing inputs.
- uutils: libFuzzer + grammars of command synopses + GNU as cross-oracle.

## Caveats

- Short SecDev note. OSS-Fuzz (2017) is the hosted service; this is the library.

## Links

- DOI: https://doi.org/10.1109/SecDev.2016.043
