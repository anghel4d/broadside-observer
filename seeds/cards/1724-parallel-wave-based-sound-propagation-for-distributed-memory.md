---
title: "Parallel Wave-Based Sound Propagation for Distributed Memory Architectures"
authors: ["Nicolas Morales", "Vivek Chavda", "Ravish Mehra", "Dinesh Manocha"]
year: 2015
venue: "ACM TOG / SIGGRAPH"
arxiv: null
doi: "10.1145/2766930"
source: "https://doi.org/10.1145/2766930"
topics: [wave-based, parallel, ard]
seed_rank: 1724
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 8
lineage: wave-based-acoustics
cites:
  - title: "Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition"
    url: "https://doi.org/10.1109/tvcg.2009.28"
    year: 2009
    arxiv: null
    doi: "10.1109/tvcg.2009.28"
  - title: "An Efficient GPU-Based Time Domain Solver for the Acoustic Wave Equation"
    url: "https://doi.org/10.1109/TVCG.2012.91"
    year: 2012
    arxiv: null
    doi: "10.1109/TVCG.2012.91"
see:
  - "1675-efficient-and-accurate-sound-propagation-using-adaptive-rectangular"
  - "1700-an-efficient-gpu-based-time-domain-solver-for-the-acoustic-wave-equation"
  - "1661-precomputed-wave-simulation-for-real-time-sound-propagation-of-dynamic"
---

# Parallel Wave-Based Sound Propagation for Distributed Memory Architectures

## One-sentence takeaway

Parallel ARD on distributed-memory clusters: scale the Project Acoustics-style wave bake across MPI nodes (Morales/Chavda/Mehra/Manocha SIGGRAPH 2015).

## Why it matters here

Bake farm card. Anoptic CI/map-cook: ARD is embarrassingly partitionable if you pay for interface exchange. This TOG/SIGGRAPH 2015 paper is the HPC sibling of 2009 ARD, not a new encoder.

## Key ideas

- **Distributed ARD.** Partition bricks across nodes.
- **SIGGRAPH 2015 / TOG.** Harvest parallel / ARD.
- **Precompute, not runtime.** Cluster hours → runtime parameters.
- **UNC + wave stack.**

## Caveats

Quality 8. Cluster, not console. Static geo. Don't confuse with GPU single-node 2012 solver.

## Links

- DOI: https://doi.org/10.1145/2766930
