---
title: "OSS-Fuzz: Google's Continuous Fuzzing Service for Open Source Software"
authors:
  - "Kostya Serebryany"
year: 2017
venue: "USENIX Security (invited talk)"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/serebryany"
topics:
  - "oss-fuzz"
  - "fuzzing"
  - "continuous"
seed_rank: 971
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: unix-foundations
cites:
  - title: "Continuous Fuzzing with libFuzzer and AddressSanitizer"
    url: "https://doi.org/10.1109/SecDev.2016.043"
    year: 2016
    doi: "10.1109/SecDev.2016.043"
  - title: "An Empirical Study of the Reliability of UNIX Utilities"
    url: "https://doi.org/10.1145/96267.96279"
    year: 1990
    doi: "10.1145/96267.96279"
see:
  - "970-continuous-fuzzing-with-libfuzzer-and-addresssanitizer"
  - "969-an-empirical-study-of-the-reliability-of-unix-utilities"
---

# OSS-Fuzz: Google's Continuous Fuzzing Service for Open Source Software

## One-sentence takeaway

Serebryany's USENIX Security '17 invited talk presents OSS-Fuzz: Google hosts coverage-guided fuzzing (libFuzzer/ASan, later more engines) for selected open-source projects so memory bugs are found continuously, not in one-off campaigns.

## Why it matters here

uutils is on OSS-Fuzz, so coreutils fuzzing is not a hobby job. If Anoptic ships Unix-shaped userland or a parser that faces untrusted input, this is the expected bar — hosted, regression-gated, and replayable locally.

## Key ideas

- Talk/slides, not a refereed paper; still the canonical citation for the service.
- Project authors write in-process harnesses; Google scales the corpus, sanitizers, and crash triage, then files bugs back to maintainers.
- Built on the 2016 libFuzzer+ASan practice; later grew ClusterFuzz, more sanitizers, and more languages.
- uutils: first-class in the dev workflow; anyone can also run the same harnesses locally. Combined with GNU-as-oracle differential fuzzing, this is how a foundation package stays honest.

## Caveats

## Links

- USENIX: https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/serebryany
- Service: https://google.github.io/oss-fuzz/
