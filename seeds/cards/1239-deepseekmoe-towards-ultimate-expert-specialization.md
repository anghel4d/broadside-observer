---
title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models"
authors:
  - "Damai Dai"
  - "Chengqi Deng"
  - "Chenggang Zhao"
  - "R. X. Xu"
  - "Huazuo Gao"
  - "Deli Chen"
  - "Jiashi Li"
  - "Wangding Zeng"
  - "Xingkai Yu"
  - "Y. Wu"
  - "Zhenda Xie"
  - "Y. K. Li"
  - "Panpan Huang"
  - "Fuli Luo"
  - "Chong Ruan"
  - "et al."
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2401.06066"
doi: null
source: "https://arxiv.org/abs/2401.06066"
topics:
  - "moe"
  - "expert-specialization"
  - "deepseek"
seed_rank: 1239
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
lineage: deepseek
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
    card: "014-attention-is-all-you-need"
  - title: "GLU Variants Improve Transformer"
    url: "https://arxiv.org/abs/2002.05202"
    year: 2020
    arxiv: "2002.05202"
    card: "1218-glu-variants-improve-transformer"
  - title: "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism"
    url: "https://arxiv.org/abs/2401.02954"
    year: 2024
    arxiv: "2401.02954"
    card: "1238-deepseek-llm-scaling-open-source-language-models"
---

# DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models

## One-sentence takeaway

Fine-grained routed experts plus isolated shared experts: the MoE recipe V2/V3 keep — more specialization, less redundant common knowledge in routed experts.

## Why it matters here

The MoE primitive Weaves encodes when it walks DeepSeek-V3. Agent-stack relevant as a sparse compute pattern, not just a brand.

## Key ideas

- arXiv:2401.06066. Two moves vs GShard: segment N experts into mN finer ones and activate mK; isolate Ks shared experts for common knowledge.
- DeepSeekMoE 2B ≈ GShard 2.9B with 1.5× fewer expert params/compute; 16B ≈ Llama-2 7B at ~40% compute; 145B ≈ DeepSeek 67B at 28.5% (maybe 18.2%) compute.
- Shared-expert isolation is the trick that later V2/V3 MoE layers still use.
- Starting point for auxiliary-loss-free balancing (1248) and V3's 671B/37B MoE.

## Caveats

- Still uses auxiliary-loss balancing here; V3 switches to loss-free bias (1248).
- 2B/16B/145B are the reported scales — not the later 671B V3.

## Links

- arXiv: [2401.06066](https://arxiv.org/abs/2401.06066)
