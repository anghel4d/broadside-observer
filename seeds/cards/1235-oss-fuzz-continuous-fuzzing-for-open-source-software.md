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
seed_rank: 1235
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
    card: "1234-continuous-fuzzing-with-libfuzzer-and-addresssanitizer"
  - title: "An Empirical Study of the Reliability of UNIX Utilities"
    url: "https://doi.org/10.1145/96267.96279"
    year: 1990
    doi: "10.1145/96267.96279"
    card: "1233-an-empirical-study-of-the-reliability-of-unix-utilities"
---

# OSS-Fuzz: Google's Continuous Fuzzing Service for Open Source Software

## One-sentence takeaway

Google's free continuous-fuzzing service for selected OSS — uutils is on it, so coreutils fuzzing is not a hobby job.

## Why it matters here

The production fuzzing story for a foundation package. If you ship Unix userland, this is the expected bar.

## Key ideas

- USENIX Security '17 presentation (not a full paper).
- Hosted libFuzzer/ASan (and later engines) at Google scale for open source.
- uutils: first-class in the dev workflow; anyone can also run the harnesses locally.

## Caveats

- Talk/slides, not a refereed paper. Still the canonical citation for OSS-Fuzz.

## Links

- USENIX: https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/serebryany
