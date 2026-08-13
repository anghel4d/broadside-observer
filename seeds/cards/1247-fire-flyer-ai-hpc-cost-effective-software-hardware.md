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
seed_rank: 1247
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "AI and Memory Wall"
    url: "https://doi.org/10.1109/MM.2024.3373763"
    year: 2024
    card: "1210-ai-and-memory-wall"
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
    card: "1206-deepseek-v3-technical-report"
---

# Fire-Flyer AI-HPC: A Cost-Effective Software-Hardware Co-Design for Deep Learning

## One-sentence takeaway

DeepSeek's SC'24 cluster paper: 10k PCIe A100s approximating DGX-A100 at half cost and −40% energy via HFReduce, HaiScale, 3FS, and a congestion-free compute-storage network.

## Why it matters here

The cluster that trained the lab's early LLMs. Co-design counterpart to the later ISCA V3 hardware note (1256).

## Key ideas

- arXiv:2408.14158 / SC '24. Fire-Flyer 2: 10,000 PCIe A100 GPUs; claimed DGX-class throughput at ~½ cost, −40% energy.
- HFReduce for faster allreduce; Computation-Storage Integrated Network kept congestion-free.
- Software stack: HaiScale (training), 3FS (parallel FS / KV-cache-on-disk), HAI-Platform. Overlap compute and communication for scale.
- Affiliation DeepSeek-AI / High-Flyer Quant; the production substrate under DeepSeek LLM→V2.

## Caveats

- A100/PCIe-era cluster; V3 trains on H800s (1256) with DualPipe/FP8 — different generation.
- Industry HPC paper; not an architecture paper.

## Links

- arXiv: [2408.14158](https://arxiv.org/abs/2408.14158)
- ACM: https://dl.acm.org/doi/10.1109/SC41406.2024.00089
- Infra index: https://github.com/deepseek-ai/open-infra-index
