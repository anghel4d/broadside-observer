---
title: "Agentic Verified Optimization of Real-World Software"
authors:
  - "Zhe Ye"
  - "Udaya Ghai"
  - "Zhizhen Qin"
  - "Dawn Song"
  - "Soonho Kong"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2610.30188"
doi: null
source: "https://arxiv.org/abs/2610.30188"
topics:
  - "autoresearch-experiment-selection"
  - "typed-programming-systems"
seed_rank: 2410
seed_batch: "frontier-2026-10-24"
reviewed: "2026-10-24"
pool: "languages"
relevance_score: 8
cites:
  - title: "Agentic Verified Optimization of Real-World Software"
    url: "https://arxiv.org/abs/2610.30188"
    year: 2026
    arxiv: "2610.30188"
    doi: null
see:
  - 1020-vero-can-ai-agents-build-formally-verified-software-repositories
  - 1021-a-contract-grade-verifier-for-llm-generated-gpu-kernels
  - 1231-alphaevolve-a-coding-agent-for-scientific-and-algorithmic-disc
---

# Agentic Verified Optimization of Real-World Software

## One-sentence takeaway

Coding agents working in Lean 4 can make real software faster with a machine-checked proof that each rewrite is equivalent to the original, so speedups can't come from reward hacking: they prove faster rewrites for 156 of 189 Verina functions (geometric-mean speedup 1.851×, median 1.117×) and produce 92 proved-equivalent rewrites across 17 migrated repositories (geometric mean 1.864× on function microbenchmarks, and 47 of 51 application scenarios faster at 1.120×).

## Why it matters here

Optimization is the open-ended agent task where test-based rewards fail worst, because a faster program that only passes the tests is easy to find. Pairing a continuous reward (speed) with a fixed correctness gate (an equality proof the kernel checks) is the clean pattern for any Broadside autoresearch loop that optimizes code, and the paper shows it holds up on migrated real repositories, not only toy functions.

## Key ideas

- **Verified equivalence as the gate.** The agent writes a faster function plus a Lean proof that it equals the reference; Lean checks the proof, and execution on evaluation workloads measures speed.
- **Why tests aren't enough.** Cited cases include an apparent 6× improvement from a program that didn't preserve behavior, and Alive2 accepting only 38.2% of LLM-Vectorizer's tested programs.
- **Benchmarks.** Verina functions (156 of 189 improved) and 17 repositories ported to Lean (92 rewrites; 15 of the optimized functions beat the original source-language implementations; 47 of 51 application scenarios run faster, geometric mean 1.120×); one rewrite runs 4,467× faster on a 261-input workload.
- **Does not saturate.** Correctness is fixed and speedup is continuous, so the task stays open as agents improve.
- **Input preconditions.** A rewrite only needs to match on the input domain the caller guarantees, which lets agents exploit bounded sizes and similar facts with proof.

## Caveats

Only code that runs inside Lean: unsafe code and foreign calls, whose behavior Lean does not define, are excluded, so the repository results are on Lean ports rather than the original languages. The median Verina speedup is small, and microbenchmark gains shrink at application level.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.30188
- PDF: https://arxiv.org/pdf/2610.30188
