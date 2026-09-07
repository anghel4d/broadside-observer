---
title: "Continuous Profiling: Where Have All the Cycles Gone?"
authors:
  - "Jennifer M. Anderson"
  - "Lance M. Berc"
  - "Jeffrey Dean"
  - "Sanjay Ghemawat"
  - "Monika R. Henzinger"
  - "Shun-Tak A. Leung"
  - "Richard L. Sites"
  - "Mark T. Vandevoorde"
  - "Carl A. Waldspurger"
  - "William E. Weihl"
year: 1997
venue: "SOSP"
arxiv: null
doi: "10.1145/268998.266642"
source: "https://www.waldspurger.org/carl/papers/dcpi-sosp97.pdf"
topics:
  - continuous-profiling
  - hardware-performance-counters
  - production-systems
seed_rank: 1635
seed_batch: "archive-2026-09-08"
reviewed: "2026-09-08"
pool: "systems"
relevance_score: 9
lineage: performance-tools
cites:
  - title: "Atom: A System for Building Customized Program Analysis Tools"
    url: "https://doi.org/10.1145/178243.178260"
    year: 1994
    arxiv: null
    doi: "10.1145/178243.178260"
see:
  - "1439-dynamo-a-transparent-dynamic-optimization-system"
---

# Continuous Profiling: Where Have All the Cycles Gone?

## One-sentence takeaway

DIGITAL's Continuous Profiling Infrastructure samples hardware performance counters at >5200 samples/s/CPU with only 1–3% overhead on unmodified production binaries — including kernel and shared libraries — and attributes stalls to cache misses, branch mispredicts, and functional-unit contention down to individual instructions.

## Why it matters here

Engine work dies when profiling is an occasional lab ritual. DCPI is the ancestor of always-on profilers (perf, eBPF continuous profiling, cloud agents): run on the live Anoptic/GRID COMMAND binary, pay a couple percent, get pipeline-stall truth instead of gprof's biased interrupt holes. Pair with Dynamo 1439 (transparent dynamic optimization) as the other late-90s Digital systems gem — profiling feeds optimizers.

## Key ideas

- **Hardware-counter sampling, not instrumentation.** Alpha performance counters interrupt on overflow; the driver records PCs into an on-disk database. Works on unmodified executables; covers user + libraries + kernel; multiprocessor-safe.
- **High rate, low overhead.** >5200 samples/s on a 333 MHz CPU at 1–3% slowdown for most workloads — dense enough for instruction-level accounting, cheap enough to leave on.
- **Stall-aware analysis tools.** Beyond where is time spent, tools explain why an instruction stalled (cache miss, branch mispredict, unit contention) and annotate source/assembly. Output intended for humans and for feeding compilers / run-time optimizers.
- **Whole-system, continuous.** Designed for production Digital Unix fleets from 1996 onward — the point is not a lab microbenchmark harness but an always-running infrastructure.

## Caveats

- Deeply tied to Alpha counter semantics in the original; the idea ports (perf events, PEBS, eBPF), the exact stall taxonomy does not.
- Sampling bias still exists (skid, truncated stacks on early HW); not a substitute for causal tracing when you need exact event order.
- TOCS 1997 journal version exists; this card uses the SOSP PDF (Waldspurger mirror). Do not remint Dynamo 1439 as a profiler card.

## Links

- Waldspurger PDF (SOSP 1997): https://www.waldspurger.org/carl/papers/dcpi-sosp97.pdf
- TOCS teaching mirror: https://homes.cs.washington.edu/~mernst/teaching/6.893/readings/anderson-tocs97.pdf
- DOI: https://doi.org/10.1145/268998.266642
