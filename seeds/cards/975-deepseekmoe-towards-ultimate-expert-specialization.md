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
seed_rank: 975
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
  - title: "GLU Variants Improve Transformer"
    url: "https://arxiv.org/abs/2002.05202"
    year: 2020
    arxiv: "2002.05202"
  - title: "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism"
    url: "https://arxiv.org/abs/2401.02954"
    year: 2024
    arxiv: "2401.02954"
see:
  - "013-attention-is-all-you-need"
  - "954-glu-variants-improve-transformer"
  - "974-deepseek-llm-scaling-open-source-language-models"
---

# DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models

## One-sentence takeaway

DeepSeekMoE splits GShard's \(N\) experts into \(mN\) finer ones (activating \(mK\)) and isolates \(K_s\) shared experts for common knowledge, so routed experts specialize instead of redundantly storing the same priors.

## Why it matters here

The MoE primitive Weaves encodes when it walks DeepSeek-V3. Agent-stack relevant as a sparse compute pattern: more experts, thinner experts, shared experts for the boring residual — not just a brand name.

## Key ideas

- arXiv:2401.06066. Two moves vs GShard top-\(K\)-of-\(N\): finer segmentation for combinatorial expert combinations, plus shared-expert isolation so common knowledge is not copied into every routed expert.
- DeepSeekMoE 2B ≈ GShard 2.9B with 1.5× fewer expert params/compute, and nearly matches a dense 2B. 16B ≈ Llama-2 7B at ~40% compute. 145B ≈ DeepSeek 67B at 28.5% (maybe 18.2%) compute.
- Shared-expert isolation is the trick V2/V3 MoE layers still use; auxiliary-loss balancing is still in this paper (loss-free bias comes later).
- Starting point for auxiliary-loss-free balancing and for V3's 671B/37B MoE.

## Caveats

## Links

- arXiv: [2401.06066](https://arxiv.org/abs/2401.06066)
