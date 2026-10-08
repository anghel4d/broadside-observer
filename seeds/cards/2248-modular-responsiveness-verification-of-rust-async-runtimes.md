---
title: "Modular Responsiveness Verification of Rust Async Runtimes"
authors:
  - "Yanze Li"
  - "Ivan Beschastnikh"
  - "Alexander J. Summers"
year: 2026
venue: "arXiv"
arxiv: "2610.09198"
doi: null
source: "https://arxiv.org/abs/2610.09198"
topics:
  - "typed-programming-systems"
  - "lockfree-game-parallelism"
seed_rank: 2248
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "languages"
relevance_score: 8
lineage: concurrency-verification
cites:
  - title: "Modular Responsiveness Verification of Rust Async Runtimes"
    url: "https://arxiv.org/abs/2610.09198"
    year: 2026
    arxiv: "2610.09198"
    doi: null
see:
  - "213-lock-free-asynchronously-distributed-linked-lists"
  - "1019-formally-verified-lock-free-software-transactional-memory-for-scientific-measurement"
---

# Modular Responsiveness Verification of Rust Async Runtimes

## One-sentence takeaway

Liveness of Rust async runtimes (submitted tasks eventually make progress) can be verified modularly with lightweight static analyses, and the technique checks key components of smol, futures-rs and tokio.

## Why it matters here

Anoptic's job systems and lock-free buses face the same question async runtimes do: does every submitted job eventually run? Safety gets most of the verification attention; this paper shows a practical way to get progress guarantees on highly optimised concurrent Rust code, which is the kind of guarantee a deterministic engine scheduler or an ano runtime would want. It is also a strong Rust/systems signal for the hiring side.

## Key ideas

- **Target property.** Eventual progression: tasks submitted to the runtime eventually make progress, a liveness property that is hard to verify in concurrent, optimised libraries.
- **Modular proof technique.** Developed for a simple core language modelled on Rust and its async (poll-based) model, then realised as a set of static analyses for real Rust.
- **Real runtimes.** Applied to components of smol, futures-rs and tokio, the most widely used production runtime.
- **Honest limits.** Some cases need post-join re-assertions or annotations; tokio's cooperative-yield fairness mechanism is outside the model and is pruned with an annotation.

## Caveats

Verification covers selected key components, not entire runtimes, and some code is excluded by annotation. The guarantee is relative to the paper's model of Rust async semantics.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.09198
- PDF: https://arxiv.org/pdf/2610.09198
