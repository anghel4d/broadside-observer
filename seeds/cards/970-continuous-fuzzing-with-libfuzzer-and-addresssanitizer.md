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
seed_rank: 970
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
see:
  - "969-an-empirical-study-of-the-reliability-of-unix-utilities"
---

# Continuous Fuzzing with libFuzzer and AddressSanitizer

## One-sentence takeaway

Serebryany argues that in-process, coverage-guided fuzzing (libFuzzer) plus AddressSanitizer should be a continuous development practice, not a once-a-year fuzz week: the fuzzer lives in CI, shrinks crashing inputs, and catches memory errors as they land.

## Why it matters here

How you actually run Miller 1990 in 2026 CI. Anoptic/GRID test harnesses want this loop, and it is the engine under uutils' grammar-guided differential tests.

## Key ideas

- IEEE SecDev 2016, p. 157. DOI `10.1109/SecDev.2016.043`. Short industrial note, not a long paper.
- libFuzzer: coverage-directed, in-process (no fork-per-input), automatic shrinking of crashing cases.
- ASan turns silent memory corruption into a deterministic crash the fuzzer can latch onto.
- uutils: libFuzzer + grammars of command synopses + GNU as a cross-oracle; OSS-Fuzz (2017) is the hosted service built on this library.

## Caveats

## Links

- DOI: https://doi.org/10.1109/SecDev.2016.043
