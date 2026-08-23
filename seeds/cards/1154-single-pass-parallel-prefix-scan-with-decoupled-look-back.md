---
title: "Single-pass Parallel Prefix Scan with Decoupled Look-back"
authors: ["Duane Merrill", "Michael Garland"]
year: 2016
venue: "NVIDIA Technical Report NVR-2016-002"
arxiv: null
doi: null
source: "https://research.nvidia.com/publication/2016-03_single-pass-parallel-prefix-scan-decoupled-look-back"
topics: [ecs-data-oriented-simulation, vulkan-realtime-rendering]
seed_rank: 1154
seed_batch: "craft-2026-08-23"
reviewed: "2026-08-23"
pool: "engines"
relevance_score: 10
lineage: ecs-data-oriented-simulation
cites:
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/TC.1986.1676616"
    year: 1986
    arxiv: null
    doi: "10.1109/TC.1986.1676616"
  - title: "Onesweep: A Faster Least Significant Digit Radix Sort for GPUs"
    url: "https://arxiv.org/abs/2206.01784"
    year: 2022
    arxiv: "2206.01784"
    doi: "10.48550/arXiv.2206.01784"
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "FliX: Flipped-Indexing for Scalable GPU Queries and Updates"
    url: "https://arxiv.org/abs/2604.16725"
    year: 2026
    arxiv: "2604.16725"
    doi: null
see:
  - "307-scans-as-primitive-parallel-operations"
  - "015-gpu-driven-rendering-pipelines"
  - "1093-flix-flipped-indexing-for-scalable-gpu-queries-and-updates"
  - "1129-performance-comparison-of-meshlet-generation-strategies"
---

# Single-pass Parallel Prefix Scan with Decoupled Look-back

## One-sentence takeaway

One pass, ~2n traffic: each tile publishes its aggregate, then looks back along predecessor tiles (redundant work) until it hits an inclusive prefix — GPU scan/compact at memcpy speed, no global barrier between upsweep and downsweep.

## Problem

GPU-driven Anoptic (meshlet culling, instance compact, RC probe compaction, ECS stream-compact) is a scan away from "just write the survivors." Classic Blelloch (307) is two passes (~3n) plus a grid sync. CUB shipped this algorithm in 2013; the 2016 tech report is the recipe you actually port to Vulkan/WebGPU compute. Last Craft packed meshlets (1129) and laced-wire-decoded them (1130); this is the leftover *compaction* primitive those passes sit on.

## Design

Partition the input into tiles. Each tile: (1) local upsweep → tile aggregate, (2) **decoupled look-back** — spin on a descriptor array of predecessor tiles, accumulating aggregates until an inclusive prefix is observed (early-out), (3) local downsweep with that exclusive prefix. Status words are `invalid / aggregate-ready / prefix-ready`. Redundant look-back hides the latency of the global spine. Same single-pass skeleton adapts to in-place compact and to in-situ allocation when the output size is data-dependent (oversubscribe the grid, claim output ranges from a global counter fed by the prefixes). Onesweep radix sort (Adinets & Merrill 2022, arXiv `2206.01784`) is this scan inside each digit pass (~2n vs ~3n) — cite, do not mint.

## Evidence

NVIDIA TR NVR-2016-002, March 2016. CUB DeviceScan throughput approaches device memcpy. Production: CUB, CCCL, and Onesweep's 29.4 GKey/s on A100 (256M u32) vs CUB LSD ~1.5×. No DOI; canonical URL is the NVIDIA research page + PDF.

## Limitations

CUDA-centric write-up; port the status-word protocol to Vulkan subgroups, do not copy CUB kernels into the RHI. Pseudo-associative ops (float +) are run-to-run nondeterministic — fine for compaction counts, not for a reduction you need bitwise stable. Descriptor array is extra global memory (one word per tile).

## Implications for Broadside

Every GPU-driven list this week — surviving meshlets, visible instances, RC probe hits, ECS "destroyed this frame" — should be a decoupled-look-back compact, not `atomicAdd` into a global counter. FliX (1093) deleted the GPU index layer; this is how you pack the surviving keys afterward. WebGPU path for GRID COMMAND: same algorithm, subgroup ballots for the local scan.

## Bottom line

Mint the CUB scan report. Cite Blelloch 307 and Onesweep; do not remint meshlets or FliX.

## Links

- NVIDIA: https://research.nvidia.com/publication/2016-03_single-pass-parallel-prefix-scan-decoupled-look-back
- PDF: https://research.nvidia.com/sites/default/files/pubs/2016-03_Single-pass-Parallel-Prefix/nvr-2016-002.pdf
- Onesweep (cite): https://arxiv.org/abs/2206.01784
