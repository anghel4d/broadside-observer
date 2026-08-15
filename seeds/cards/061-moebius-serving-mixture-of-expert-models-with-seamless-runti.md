---
title: "Moebius: Serving Mixture-of-Expert Models with Seamless Runtime Parallelism Switch"
authors:
  - "Shaoyu Wang"
  - "Yizhuo Liang"
  - "Jaeyong Song"
  - "Chong Li"
  - "Seo Jin Park"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2606.26607"
doi: null
source: "https://arxiv.org/abs/2606.26607"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - moe
  - serving
  - skills
  - continual-agents
seed_rank: 61
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
---

# Moebius: Serving Mixture-of-Expert Models with Seamless Runtime Parallelism Switch

## One-sentence takeaway

Moebius switches a live MoE serving engine between tensor parallelism and expert parallelism between decode steps without restarting or dropping in-flight requests.

## Why it matters here

Ano serving and GRID COMMAND rollouts swing from bursty high concurrency to long straggler tails; pinning TP or EP forfeits the other side of that curve.

## Key ideas

- TP is faster at low concurrency, EP at high concurrency; production online serving and RL rollouts continually cross that boundary.
- EP and TP are two layouts of one model over byte-identical expert weights and KV cache; a switch only changes which rank owns each slice.
- The irreducible cost is moving owner-changed slices; fused GPU-to-GPU kernels reshard weights and KV at fixed addresses.
- On 8× H200 serving Qwen3-235B-A22B, Moebius matches the better static layout at every point and beats it 1.16–1.25× on RL rollouts.
- Each switch takes 215–434 ms; holding both layouts resident costs 2.4% extra memory.

## Caveats

## Links

- arXiv: [2606.26607](https://arxiv.org/abs/2606.26607)
- PDF: https://arxiv.org/pdf/2606.26607
