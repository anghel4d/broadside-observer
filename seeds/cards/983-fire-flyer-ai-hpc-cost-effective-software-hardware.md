---
title: "Fire-Flyer AI-HPC: A Cost-Effective Software-Hardware Co-Design for Deep Learning"
authors:
  - "Wei An"
  - "Xiao Bi"
  - "Guanting Chen"
  - "Shanhuang Chen"
  - "Chengqi Deng"
  - "Honghui Ding"
  - "Kai Dong"
  - "Qiushi Du"
  - "Wenjun Gao"
  - "Kang Guan"
  - "et al."
year: 2024
venue: "SC '24"
arxiv: "2408.14158"
doi: "10.1109/SC41406.2024.00089"
source: "https://arxiv.org/abs/2408.14158"
topics:
  - "hpc"
  - "allreduce"
  - "3fs"
  - "deepseek"
seed_rank: 983
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "AI and Memory Wall"
    url: "https://doi.org/10.1109/MM.2024.3373763"
    year: 2024
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
see:
  - "946-ai-and-memory-wall"
  - "942-deepseek-v3-technical-report"
---

# Fire-Flyer AI-HPC: A Cost-Effective Software-Hardware Co-Design for Deep Learning

## One-sentence takeaway

DeepSeek's SC'24 cluster paper: Fire-Flyer 2 puts 10,000 PCIe A100s on a congestion-free compute-storage network and claims DGX-A100-class throughput at half the cost and −40% energy, via HFReduce allreduce plus HaiScale / 3FS / HAI-Platform overlapping compute and communication.

## Why it matters here

The cluster that trained the lab's early LLMs. Co-design counterpart to the later ISCA V3 hardware note: Anoptic/GRID should treat interconnect and storage as part of the model, not as a cloud invoice.

## Key ideas

- arXiv:2408.14158 / SC '24. Affiliation DeepSeek-AI / High-Flyer Quant; production substrate under DeepSeek LLM → V2.
- HFReduce accelerates allreduce on PCIe A100s that lack DGX-class NVLink islands.
- Computation-Storage Integrated Network kept congestion-free so training and the 3FS parallel filesystem share a fabric.
- Software stack: HaiScale (training), 3FS (parallel FS / KV-cache-on-disk), HAI-Platform. Overlap is the scalability story.
- A100/PCIe-era; V3 trains on H800s with DualPipe/FP8 — different generation.

## Caveats

## Links

- arXiv: [2408.14158](https://arxiv.org/abs/2408.14158)
- ACM: https://dl.acm.org/doi/10.1109/SC41406.2024.00089
- Infra index: https://github.com/deepseek-ai/open-infra-index
