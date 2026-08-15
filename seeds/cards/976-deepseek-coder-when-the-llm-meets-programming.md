---
title: "DeepSeek-Coder: When the Large Language Model Meets Programming — The Rise of Code Intelligence"
authors:
  - "Daya Guo"
  - "Qihao Zhu"
  - "Dejian Yang"
  - "Zhenda Xie"
  - "Kai Dong"
  - "Wentao Zhang"
  - "Guanting Chen"
  - "Xiao Bi"
  - "Y. Wu"
  - "Y. K. Li"
  - "Fuli Luo"
  - "Yingfei Xiong"
  - "Wenfeng Liang"
year: 2024
venue: "arXiv:cs.SE"
arxiv: "2401.14196"
doi: null
source: "https://arxiv.org/abs/2401.14196"
topics:
  - "code-llm"
  - "infilling"
  - "deepseek"
seed_rank: 976
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
  - title: "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism"
    url: "https://arxiv.org/abs/2401.02954"
    year: 2024
    arxiv: "2401.02954"
see:
  - "013-attention-is-all-you-need"
  - "974-deepseek-llm-scaling-open-source-language-models"
---

# DeepSeek-Coder: When the Large Language Model Meets Programming — The Rise of Code Intelligence

## One-sentence takeaway

Open code models 1.3B–33B trained from scratch on 2T project-level tokens with fill-in-the-blank at a 16K window; permissive license, claimed above then-open code models and above Codex / GPT-3.5 on several coding benches.

## Why it matters here

The code-pretrain that DeepSeekMath continues from, and that later Coder-V2 / V3 coding evals sit on. Relevant to ano/GRID COMMAND as a coding-agent ancestor: infilling plus project-level context, not just left-to-right file completion.

## Key ideas

- arXiv:2401.14196. Dense models, not MoE; 2T tokens of project-level code rather than shuffled file snippets.
- Fill-in-the-middle (FIM / fill-in-the-blank) at 16K context trains both generation and infilling, which is what an editor agent actually does.
- Claimed SOTA among open code models of the time; permissive license for research and commercial use.
- Coder-V2 later continues from a V2 MoE checkpoint instead of this dense line.

## Caveats

## Links

- arXiv: [2401.14196](https://arxiv.org/abs/2401.14196)
- GitHub: https://github.com/deepseek-ai/DeepSeek-Coder
