---
title: "Rust Coreutils: Rebuilding Unix Foundations in a Modern Language"
authors:
  - "Sylvestre Ledru"
  - "Samuel Tardieu"
  - "Stefano Zacchiroli"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2608.07135"
doi: null
source: "https://arxiv.org/abs/2608.07135"
topics:
  - "uutils"
  - "coreutils"
  - "rust"
  - "rewrite"
  - "fuzzing"
  - "unix"
seed_rank: 962
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: unix-foundations
cites:
  - title: "rust-code-analysis: A Rust library to analyze and extract maintainability information from source codes"
    url: "https://doi.org/10.1016/j.softx.2020.100635"
    year: 2020
    doi: "10.1016/j.softx.2020.100635"
  - title: "Creating a multi-call Linux binary"
    url: "https://www.redbooks.ibm.com/abstracts/tips0092.html"
    year: 2022
  - title: "Brian Kernighan on Unix, Bell Labs, and Go"
    url: "https://corecursive.com/brian-kernighan-unix-bell-labs1/"
    year: 2021
  - title: "SoK: Taxonomy of Attacks on Open-Source Software Supply Chains"
    url: "https://arxiv.org/abs/2204.04008"
    year: 2023
    arxiv: "2204.04008"
    doi: "10.1109/SP46215.2023.00010"
  - title: "Exposing bugs in JavaScript engines through test transplantation and differential testing"
    url: "https://doi.org/10.1007/s11219-020-09537-8"
    year: 2021
    doi: "10.1007/s11219-020-09537-8"
  - title: "GNU coreutils — core GNU utilities"
    url: "https://www.gnu.org/software/coreutils/manual/"
    year: 1994
  - title: "Technical leverage in a software ecosystem: Development opportunities and security risks"
    url: "https://doi.org/10.1109/ICSE43902.2021.00124"
    year: 2021
    doi: "10.1109/ICSE43902.2021.00124"
  - title: "A Complexity Measure"
    url: "https://doi.org/10.1109/TSE.1976.233837"
    year: 1976
    doi: "10.1109/TSE.1976.233837"
  - title: "Differential testing for software"
    url: "https://www.cs.swarthmore.edu/~bylvisa1/cs97/f13/Papers/DifferentialTestingForSoftware.pdf"
    year: 1998
  - title: "An empirical study of the reliability of UNIX utilities"
    url: "https://doi.org/10.1145/96267.96279"
    year: 1990
    doi: "10.1145/96267.96279"
  - title: "IEEE Std 1003.1-2024 (POSIX) — Base Specifications, Issue 8"
    url: "https://pubs.opengroup.org/onlinepubs/9799919799/"
    year: 2024
  - title: "Continuous fuzzing with libFuzzer and AddressSanitizer"
    url: "https://doi.org/10.1109/SecDev.2016.043"
    year: 2016
    doi: "10.1109/SecDev.2016.043"
  - title: "OSS-Fuzz — Google's continuous fuzzing service for open source software"
    url: "https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/serebryany"
    year: 2017
  - title: "Rewriting the Unix Stream Editor in Rust"
    url: "https://doi.org/10.1109/MS.2025.3579008"
    year: 2025
    doi: "10.1109/MS.2025.3579008"
  - title: "Evolution of the Unix System Architecture: An Exploratory Case Study"
    url: "https://doi.org/10.1109/TSE.2019.2892146"
    year: 2021
    doi: "10.1109/TSE.2019.2892146"
see:
  - "963-rust-code-analysis"
  - "964-sok-taxonomy-of-attacks-on-oss-supply-chains"
  - "965-exposing-bugs-in-javascript-engines"
  - "966-technical-leverage-in-a-software-ecosystem"
  - "967-a-complexity-measure"
  - "968-differential-testing-for-software"
  - "969-an-empirical-study-of-the-reliability-of-unix-utilities"
  - "970-continuous-fuzzing-with-libfuzzer-and-addresssanitizer"
  - "971-oss-fuzz-continuous-fuzzing-for-open-source-software"
  - "972-rewriting-the-unix-stream-editor-in-rust"
  - "973-evolution-of-the-unix-system-architecture"
---

# Rust Coreutils: Rebuilding Unix Foundations in a Modern Language

## One-sentence takeaway

Ledru, Tardieu, and Zacchiroli report uutils as a drop-in GNU coreutils replacement in Rust: P1 compatibility (identical stdout and exit), a multicall binary that shrinks 172 MiB of static links to 14 MiB, and a test-as-spec stack of 4200 integration tests plus GNU suite, OSS-Fuzz, and grammar-guided differential fuzzing.

## Why it matters here

Anoptic/GRID COMMAND sit on Unix foundations nobody can inventory. This paper is the existence proof that you can swap that substrate under tens of millions of users if you treat compatibility as a type: same stdout, same exit, tests as the spec. The rewrite is a type-safety argument in the large — not because GNU was a CVE factory (11 CVEs in decades, two memory-safety), but because a modern language reopened a package everyone had declared finished.

## Key ideas

- **P1 drop-in.** Every successful GNU invocation must succeed with the same exit code and identical stdout/filesystem effects. Failures may become successes (new gated flags like `cp --progress`). stderr may get better diagnostics (`--colour` → tip `--color`).
- **Not a RIIR-for-CVEs story.** Motivation is cross-platform modern implementation, MIT license, and contributor energy (Boggiano 2013; production in the 2020s). Ubuntu 25.10 made it the default for tens of millions.
- **Star architecture.** Per-utility crates around `uucore`; Cargo feature flags for portability. Rust static linking made 100+ binaries 172 MiB; a BusyBox-style multicall binary is 14 MiB (GNU is 6.7 MiB). Gnulib-scale portability lives in std + crates.
- **Testing as spec.** POSIX specifies too little and GNU diverges anyway. Three tiers: unit tests, 4200 integration tests (<40s), and GNU/Toybox/BusyBox end-to-end suites in CI. GNU suite ~630 cases / 25 kSLOC.
- **Fuzzing.** OSS-Fuzz + libFuzzer; grammar-guided differential fuzzing vs GNU (inspired by JS-engine work). Found gaps in both implementations (`date` timezone strings, `realpath`). Tests and `cksum` adjustments went upstream to GNU.
- **Complexity vs supply chain.** Lizard cyclomatic 9.40 (C) vs 3.30 (Rust); rust-code-analysis agrees. Technical leverage: Gnulib ×3.3 (60 kLOC → 200 kLOC) vs crates ×33.3 (90 kLOC → 3 MLOC, 110 runtime crates).
- **Activity.** GNU: post-2005 steady state, top-10 authors ≈98% of commits. uutils: 2020 spike, 2500 commits/yr, 125+ authors, top-10 <65%. Production found `date`/unattended-upgrade and `dd`/makeself bugs microbenchmarks missed.

## Caveats

## Links

- arXiv: [2608.07135](https://arxiv.org/abs/2608.07135)
- PDF: https://arxiv.org/pdf/2608.07135
- uutils: https://uutils.github.io/ / https://github.com/uutils/coreutils
- GNU test coverage: https://uutils.github.io/coreutils/docs/test_coverage.html
- Replication: https://doi.org/10.5281/zenodo.18735186
