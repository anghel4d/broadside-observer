---
title: "Dustin: A 16-Cores Parallel Ultra-Low-Power Cluster with 2b-to-32b Fully Flexible Bit-Precision and Vector Lockstep Execution Mode"
authors:
  - "Gianmarco Ottavi"
  - "Angelo Garofalo"
  - "Giuseppe Tagliavini"
  - "Francesco Conti"
  - "Alfio Di Mauro"
  - "Luca Benini"
  - "Davide Rossi"
year: 2022
venue: "arXiv:cs.AR"
arxiv: "2201.08656"
doi: "10.1109/TCSI.2023.3254810"
source: "https://arxiv.org/abs/2201.08656"
topics:
  - netcode
seed_rank: 307
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
---

# Dustin: A 16-Cores Parallel Ultra-Low-Power Cluster with 2b-to-32b Fully Flexible Bit-Precision and Vector Lockstep Execution Mode

## One-sentence takeaway

Computationally intensive algorithms such as Deep Neural Networks (DNNs) are becoming killer applications for edge devices.

## Why it matters here

Realtime/sim/netcode discipline for deterministic or low-latency games (Dustin: A 16-Cores Parallel Ultra-Low-Power Cluster with 2b-to-32b Fully Flexibl).

## Key ideas

- Computationally intensive algorithms such as Deep Neural Networks (DNNs) are becoming killer applications for edge devices.
- Porting heavily data-parallel algorithms on resource-constrained and battery-powered devices poses several challenges related to memory footprint, computational throughput, and energy efficiency.
- Low-bitwidth and mixed-precision arithmetic have been proven to be valid strategies for tackling these problems.
- We present Dustin, a fully programmable compute cluster integrating 16 RISC-V cores capable of 2- to 32-bit arithmetic and all possible mixed-precision permutations.
- In addition to a conventional Multiple-Instruction Multiple-Data (MIMD) processing paradigm, Dustin introduces a Vector Lockstep Execution Mode (VLEM) to minimize power consumption in highly data-parallel kernels.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2201.08656](https://arxiv.org/abs/2201.08656)
- DOI: [10.1109/TCSI.2023.3254810](https://doi.org/10.1109/TCSI.2023.3254810)
- URL: https://arxiv.org/abs/2201.08656
