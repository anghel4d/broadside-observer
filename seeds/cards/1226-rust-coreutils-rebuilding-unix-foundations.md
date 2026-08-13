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
seed_rank: 1226
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
    url: "https://www.hpl.hp.com/hpjournal/dtj/vol10num1/vol10num1art9.pdf"
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
  - "1227-rust-code-analysis"
  - "1228-sok-taxonomy-of-attacks-on-oss-supply-chains"
  - "1229-exposing-bugs-in-javascript-engines"
  - "1230-technical-leverage-in-a-software-ecosystem"
  - "1231-a-complexity-measure"
  - "1232-differential-testing-for-software"
  - "1233-an-empirical-study-of-the-reliability-of-unix-utilities"
  - "1234-continuous-fuzzing-with-libfuzzer-and-addresssanitizer"
  - "1235-oss-fuzz-continuous-fuzzing-for-open-source-software"
  - "1236-rewriting-the-unix-stream-editor-in-rust"
  - "1237-evolution-of-the-unix-system-architecture"
---

# Rust Coreutils: Rebuilding Unix Foundations in a Modern Language

## One-sentence takeaway

uutils is a drop-in GNU coreutils replacement in Rust (P1: identical stdout/exit; stderr may improve). Not motivated by CVEs (GNU has 11, only 2 memory-safety). Star architecture + multicall binary (172→14 MiB). 4200 integration tests + GNU test suite + OSS-Fuzz + grammar-guided differential fuzzing vs GNU. Cyclomatic 9.40 C vs 3.30 Rust; crate leverage ×33 vs Gnulib ×3.3. Ubuntu 25.10 default. Lesson: you can swap unseen-usage foundations; Rust reignited a “finished” package.

## Why it matters here

Anoptic/GRID COMMAND sit on Unix foundations that nobody can inventory. This paper is the existence proof that you *can* swap that substrate under tens of millions of users if you treat compatibility as a type: same stdout, same exit, tests as the spec. The Rust rewrite is also the type-safety argument in the large — not because GNU was a CVE factory (it wasn't), but because a modern language reopened a package everyone had declared finished. Same move as rewriting a 'done' runtime in a safer language and discovering it wasn't done.

## Key ideas

- **P1 drop-in.** Every successful GNU invocation must succeed with the same exit code and identical stdout/filesystem effects. Failures may become successes (new gated flags like `cp --progress`). stderr may get better diagnostics (`--colour` → tip `--color`).
- **Not a RIIR-for-CVEs story.** GNU coreutils: 11 CVEs in decades, 2 memory-safety. Motivation is cross-platform modern implementation + MIT license + contributor energy. Started 2013 (Boggiano); production in the 2020s.
- **Star architecture.** Per-utility crates around `uucore`; Cargo feature flags for portability. Rust static linking made 100+ binaries 172 MiB → BusyBox-style **multicall** binary 14 MiB (GNU is 6.7 MiB). Gnulib-scale portability lives in std + crates instead.
- **Testing as spec.** POSIX specifies too little and GNU diverges anyway. Three tiers: unit tests, 4200 integration tests (<40s), and GNU/Toybox/BusyBox end-to-end suites in CI. GNU suite ~630 cases / 25 kSLOC; remaining failures are unpopular utils and weird edges.
- **Fuzzing.** OSS-Fuzz + libFuzzer; grammar-guided **differential** fuzzing vs GNU (inspired by JS-engine work). Found gaps in *both* implementations (e.g. `date` timezone strings, `realpath`). Collaboration with GNU maintainers is two-way (tests upstreamed; `cksum` adjusted).
- **Complexity vs supply chain.** Lizard cyclomatic 9.40 (C) vs 3.30 (Rust); rust-code-analysis agrees. `?` + destructors + clap vs manual getopt/error/cleanup. Technical leverage: Gnulib ×3.3 (60 kLOC → 200 kLOC) vs crates ×33.3 (90 kLOC → 3 MLOC, 110 runtime crates). They vet/fork crates; still a SoK-sized supply-chain surface.
- **Activity.** GNU: post-2005 steady state, top-10 authors ≈98% of commits. uutils: 2020 spike, 2500 commits/yr, 125+ authors, top-10 <65%. GNU tests as gamified newcomer queue.
- **Ubuntu 25.10 default** (tens of millions). Apertis (GPL-3 avoidance) and Snap Spectacles earlier. Production found `date`/unattended-upgrade and `dd`/makeself bugs microbenchmarks missed; CodSpeed + per-machine GNU fallback as safety valves. Migration held.

## Caveats

- P1 is GNU-behaviour, not POSIX-behaviour. Toybox/BusyBox are extra oracles, not the spec.
- stderr-divergence and 'GNU-fail may uutils-succeed' are load-bearing loopholes; they are also where surprise lives.
- Crate leverage ×33 is a real supply-chain cost; the paper is honest about it (Ladisa SoK, Massacci leverage).
- Ubuntu bugs were 'small fraction, fixed fast' — still the actual compatibility test, and it is not over.
- Replication package: https://doi.org/10.5281/zenodo.18735186 (lizard / rust-code-analysis / git histories; GNU 9.9 vs uutils 0.4.0).

## Links

- arXiv: [2608.07135](https://arxiv.org/abs/2608.07135)
- PDF: https://arxiv.org/pdf/2608.07135
- HTML: https://arxiv.org/html/2608.07135
- uutils: https://uutils.github.io/ / https://github.com/uutils/coreutils
- GNU test coverage dashboard: https://uutils.github.io/coreutils/docs/test_coverage.html
- Replication: https://doi.org/10.5281/zenodo.18735186
