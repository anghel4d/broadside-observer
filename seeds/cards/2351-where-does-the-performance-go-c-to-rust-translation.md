---
title: "Where Does the Performance Go? Understanding and Recovering Performance Regressions in C-to-Rust Translation"
authors:
  - "Zhiqiang Yuan"
  - "Chong Wang"
  - "Zhenhao Zhou"
  - "Junwei Liu"
  - "Xin Peng"
year: 2026
venue: "arXiv"
arxiv: "2610.23044"
doi: null
source: "https://arxiv.org/abs/2610.23044"
topics:
  - "rust"
  - "c-to-rust-translation"
  - "performance-engineering"
  - "llvm"
  - "bounds-checks"
seed_rank: 2351
seed_batch: "craft-2026-10-19"
reviewed: "2026-10-19"
pool: "systems"
relevance_score: 8
lineage: rust-performance
cites:
  - title: "Where Does the Performance Go? Understanding and Recovering Performance Regressions in C-to-Rust Translation"
    url: "https://arxiv.org/abs/2610.23044"
    year: 2026
    arxiv: "2610.23044"
    doi: null
  - title: "C2Rust: Migrate C code to Rust"
    url: "https://github.com/immunant/c2rust"
    year: 2026
    arxiv: null
    doi: null
see:
  - "1624-what-irregularity-costs-cuda-c-rust-and-triton"
---

# Where Does the Performance Go? Understanding and Recovering Performance Regressions in C-to-Rust Translation

## One-sentence takeaway

Across real C projects machine-translated to Rust with C2Rust, 12 of 19 operations ran more than 3% slower (up to 62.2%), and diffing optimized LLVM IR and compiler remarks between each C and Rust pair traces the loss to nine recurring, fixable causes, which a rule-guided LLM rewriter then recovers on held-out code.

## Why it matters here

It's a field guide to where Rust quietly loses speed against C: leftover bounds checks, saturating float-to-int casts, lost vectorization, missing inlining and C-style buffer habits. Each one comes with the IR symptom to look for and the idiom that fixes it. One of the study projects, HEMAN, is a terrain, noise and lighting library (island noise, distance fields, terrain generation), which is close to Anoptic's own hot loops. The method of diffing IR and optimization remarks between paired builds is reusable on its own.

## Key ideas

- **The gap.** On the eight analysis projects, 12 of 19 operations were more than 3% slower than C, by up to 62.2%. Most slowdowns come from extra instructions, not a worse cycles-per-instruction figure.
- **Residual runtime work.** First, bounds checks survive even when loop invariants prove the index is in range: in bzip2, `i < 16`, `j < 16` still leaves a compare against 256 and a `panic_bounds_check` branch, and iterating over a bounded slice removes it. Second, Rust's `as` casts lower to `fptosi.sat`/`fptoui.sat`, which stay in HEMAN's `fastFloor` even though the operands are finite grid coordinates, and `to_int_unchecked` drops the saturation.
- **Missed compiler transformations.** Loops that LLVM vectorizes in C stay scalar in Rust because each indexed access adds a loop exit (five hot bzip2 decode loops, including move-to-front). Hot callees that C forces inline, such as xxHash's `XXH3_accumulate_512_scalar`, lose the annotation.
- **Source-level patterns.** Five more: invariant callback or mode dispatch inside loops, buffers reallocated or grown by fixed steps, byte-oriented memcpy, memset and strlen where types and lengths are known, scalar element-wise loops, and raw-pointer access that hides index and length relationships from the optimizer.
- **PerfR.** It profiles to find hot functions, matches them against rule patterns, has an LLM check each rule's preconditions in context, and keeps a rewrite only if it passes both functional and performance validation. On 41 operations from 12 held-out projects it preserved C outputs on all tested workloads, sped up 40 of them (18 end up faster than the original C), beat Codex on 31 of the 37 operations where both stayed correct, and beat its own rule-free variant on 34 of 41.

## Caveats

The study covers C2Rust's mostly-unsafe, C-shaped output, not idiomatic hand-written Rust, so some causes (raw pointers, C buffer habits) belong to the translation rather than to Rust. The taxonomy comes from only eight projects. Speedups depend on workloads and machines, and the "faster than C" cases partly reflect rewrites that a C programmer could also make. `to_int_unchecked` and dropped checks move safety obligations onto the rewrite's preconditions, which an LLM is checking.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.23044
- PDF: https://arxiv.org/pdf/2610.23044
- C2Rust: https://github.com/immunant/c2rust
