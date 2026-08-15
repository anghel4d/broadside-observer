---
title: "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment"
authors:
  - "C. L. Liu"
  - "James W. Layland"
year: 1973
venue: "Journal of the ACM"
arxiv: null
doi: "10.1145/321738.321743"
source: "https://doi.org/10.1145/321738.321743"
topics:
  - scheduling
  - rm
  - edf
seed_rank: 380
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
cites:
  - title: "Preemptive Scheduling of Real-Time Tasks on Multiprocessor Systems"
    url: "https://doi.org/10.1145/321574.321586"
    year: 1970
    arxiv: null
    doi: "10.1145/321574.321586"
  - title: "Bounds for Certain Multiprocessing Anomalies"
    url: "https://doi.org/10.1002/j.1538-7305.1966.tb01709.x"
    year: 1966
    arxiv: null
    doi: "10.1002/j.1538-7305.1966.tb01709.x"
---

# Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment

## One-sentence takeaway

Rate-monotonic (static, shorter period = higher priority) is optimal among fixed-priority schedulers with utilization bound n(2^{1/n}−1) → 69%; earliest-deadline-first is optimal dynamic and can fill 100% of the CPU.

## Why it matters here

Anoptic’s frame: render, sim, audio, net — are periodic tasks with deadlines. Liu/Layland is why you either assign RM priorities and keep total utilization under ~70%, or run EDF and admit work until the processor is full. Same math for GRID COMMAND subsystem ticks.

## Key ideas

- Independent periodic tasks, preemptive, uniprocessor, deadline = period: the model the whole field still starts from.
- RM: fix priorities by rate; the least-upper-bound utilization is ln 2 in the limit. Above that, some task sets miss.
- EDF: always run the job whose deadline is soonest; schedulable iff Σ C_i/T_i ≤ 1.
- Critical instant of a task is when it is released with every higher-priority task — the worst-case response-time scenario.

## Caveats

## Links

- DOI: https://doi.org/10.1145/321738.321743
