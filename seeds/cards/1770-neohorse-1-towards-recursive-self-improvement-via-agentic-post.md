---
title: "NeoHorse-1: Towards Recursive Self-Improvement via Agentic Post-Training with Routing Harness"
authors:
  - "NeoHorse Team"
  - "Guoliang Cao"
  - "Guohao Dai"
  - "Tianyu Guo"
  - "Kai Han"
  - "Hailin Hu"
  - "Zihan Jiang"
  - "Xiang Kuang"
  - "Boxun Li"
  - "Yulong Li"
  - "Zehua Pei"
  - "Yuchuan Tian"
  - "Jiamin Wang"
  - "Yu Wang"
  - "Yunhe Wang"
  - "Yihong Wu"
  - "Haiyang Xu"
  - "Shuo Zhang"
  - "Hang Zhou"
  - "Siyang Cheng"
  - "Jiayu Fan"
  - "Wei He"
  - "Qingrui Jiao"
  - "Hongguang Li"
  - "Zhiyuan Li"
  - "Runke Liu"
  - "Xi Liu"
  - "Xinchen Liu"
  - "Sinno Jialin Pan"
  - "Yi Ren"
  - "Liuyang Song"
  - "Chenyu Wang"
  - "Bei Yu"
  - "Quanlu Zhang"
  - "Xiangyu Zhang"
  - "Mengyu Zheng"
  - "Yingjie Zong"
year: 2026
venue: "arXiv"
arxiv: "2609.08183"
doi: null
source: "https://arxiv.org/abs/2609.08183"
topics:
  - "continual-agent-skills"
  - "harness-engineering"
  - "autoresearch-experiment-selection"
seed_rank: 1770
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 9
lineage: rsi-routing-harness
cites:
  - title: "NeoHorse-1: Towards Recursive Self-Improvement via Agentic Post-Training with Routing Harness"
    url: "https://arxiv.org/abs/2609.08183"
    year: 2026
    arxiv: "2609.08183"
    doi: null
see:
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1639-trove-adaptive-agent-skill-orchestration-via-trace-grounded-route-vali"
  - "1015-practice-makes-unsafe-skill-misevolution-in-self-improving-llm-agents"
  - "1538-whale-a-simple-recipe-for-joint-harness-weight-optimization"
---

# NeoHorse-1: Towards Recursive Self-Improvement via Agentic Post-Training with Routing Harness

## One-sentence takeaway

NeoHorse-1 closes an evaluation→selection→update RSI loop by routing each turn through a heterogeneous model pool, logging demand/tier/outcome, and feeding validated traces into a three-stage curriculum plus routing-guided on-policy distillation.

## Why it matters here

HELIX (1079) framed model–harness co-evolution for RSI; NeoHorse-1 is a concrete routing-harness substrate — capability-guided allocation that turns eval feedback into the next training mixture. Directly relevant to Broadside’s multi-model agent serving and to GRID COMMAND’s “cheap planner / expensive repair” tiering.

## Key ideas

- Heterogeneous model pool + intelligent routing; each turn records predicted capability demand, selected service tier, and interaction outcome.
- Traces preserve interleaved reasoning, tool calls, and harness context; admission via structural validation, six-dimensional semantic eval, subscene labeling.
- Routing signals organize SFT into a three-stage curriculum and extend to routing-guided on-policy distillation (teacher supervises student under same progression).
- Capability-guided allocation converts evaluation feedback into the next training mixture — closes the RSI loop.
- Eleven benchmarks covering harness-based agents, tool use, and related agentic workloads (per abstract scope).

## Caveats

Team/tech-report style; independent reproduction of the full routing curriculum not yet community-standard. Watch skill misevolution (1015). Do not remint 1079 / 1639.

## Links

- arXiv: [2609.08183](https://arxiv.org/abs/2609.08183)
- PDF: https://arxiv.org/pdf/2609.08183
