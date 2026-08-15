---
title: "Roofline: An Insightful Visual Performance Model for Multicore Architectures"
authors:
  - "Samuel Williams"
  - "Andrew Waterman"
  - "David Patterson"
year: 2009
venue: "Computing in Science & Engineering"
arxiv: null
doi: "10.1109/MCSE.2009.88"
source: "https://doi.org/10.1109/MCSE.2009.88"
topics:
  - performance
  - roofline
seed_rank: 353
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
cites:
  - title: "Roofline: An Insightful Visual Performance Model for Floating-Point Programs and Multicore Architectures"
    url: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/2008/EECS-2008-134.pdf"
    year: 2008
    arxiv: null
    doi: null
---

# Roofline: An Insightful Visual Performance Model for Multicore Architectures

## One-sentence takeaway

Attainable Gflop/s is the minimum of peak flop/s and peak bandwidth times arithmetic intensity, drawn as a roof whose ridge tells you whether to optimize flops or bytes.

## Why it matters here

Anoptic meshlet, RC, and ECS gather kernels live on one side or the other of that ridge. Roofline is how you decide whether a GRID COMMAND sim tick is DRAM-bound (SoA layout, prefetch, cache blocking) or ALU-bound (SIMD width, instruction mix) before rewriting the wrong loop.

## Key ideas

- Arithmetic intensity = flop / byte from DRAM; plot it on a log-log chart against attainable performance.
- The ridge point is peak flop/s divided by peak bandwidth — kernels left of the ridge are memory-bound, right are compute-bound.
- Ceilings under the roof (no SIMD, no FMA, poor locality, unaligned loads) show which optimization actually moves the needle.
- The 2008 Berkeley TR (EECS-2008-134) is the long form; CiSE 2009 is the archival short paper.

## Caveats

## Links

- DOI: https://doi.org/10.1109/MCSE.2009.88
- Berkeley TR PDF: https://www2.eecs.berkeley.edu/Pubs/TechRpts/2008/EECS-2008-134.pdf
