---
title: "Do Apple M-Series Processors Enforce the Compound Memory Model? Sequential and Parallel Composition of Arm and TSO"
authors:
  - "Vijay Nagarajan"
year: 2026
venue: "arXiv preprint (cs.AR, cs.PL)"
arxiv: "2611.21406"
doi: null
source: "https://arxiv.org/abs/2611.21406"
version_reviewed: "v1"
topics:
  - "memory-models"
  - "lock-free"
  - "litmus-testing"
  - "apple-silicon"
  - "tso"
seed_rank: 2617
seed_batch: "craft-2026-11-17"
reviewed: "2026-11-17"
pool: "systems"
relevance_score: 9
see:
  - "229-formal-verification-of-chase-lev-deque-in-concurrent-separat"
cites:
  - title: "Do Apple M-Series Processors Enforce the Compound Memory Model? Sequential and Parallel Composition of Arm and TSO"
    url: "https://arxiv.org/abs/2611.21406"
    year: 2026
    arxiv: "2611.21406"
    doi: null
---

# Do Apple M-Series Processors Enforce the Compound Memory Model? Sequential and Parallel Composition of Arm and TSO

## One-sentence takeaway

Apple M1/M2 threads in Arm mode follow the official Arm model, threads in TSO mode follow x86-TSO, and programs mixing both follow a compound model built from each thread's preserved program order; 936 litmus tests run 6×10^8 times each found no forbidden outcome.

## Why it matters here

Anoptic's wait-free buses and any lock-free recipe we port from x86 rely on a memory model. On Apple Silicon the same process can hold Arm-mode and TSO-mode (Rosetta-style) threads, and Apple has not documented how they compose. This paper gives a testable answer and a public litmus artifact, which is the kind of check to run before trusting a relaxed-atomics design on Macs.

## Key ideas

- **Parallel composition across threads.** Each thread keeps the preserved program order of its own model; the machine is the union.
- **Sequential composition inside a TSO thread.** Every Arm instruction keeps TSO's order plus Arm's own; every atomic memory operation is locked like an x86 read-modify-write.
- **Evidence.** 936 litmus tests chosen from both models' preserved program order, each run 6×10^8 times on an M1 and an M2 under Linux; no forbidden outcome observed.
- **Stronger than required.** Both chips preserve three orders the models do not require, and a failed compare-and-swap behaves as if it writes back the value it read (Arm does not require that). These held in runs 40× longer.
- **Artifact.** Litmus suite at github.com/vijay-nagarajan/apple-tso-litmus.

## Caveats

Abstract-level read of the v1 preprint (16 Nov 2026); not refereed. Testing can only fail to find forbidden outcomes, it cannot prove the model; the extra orders the chips preserve are observed behaviour, not a guarantee, so code must not rely on them. Only M1 and M2 were tested.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.21406
- PDF: https://arxiv.org/pdf/2611.21406
- Artifact: https://github.com/vijay-nagarajan/apple-tso-litmus
