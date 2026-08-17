---
title: "Hierarchical Reinforcement Learning in StarCraft Micromanagement with Influence Maps and Cluster-based Scripts"
authors: ["Chunhui Bai", "Changhe Li", "Dequan Li", "Xinye Cai", "Shengxiang Yang"]
year: 2026
venue: "arXiv"
arxiv: "2606.30092"
doi: null
source: "https://arxiv.org/abs/2606.30092"
topics: [strategy-rts-agents, production-rules-triggers]
seed_rank: 1064
seed_batch: "craft-2026-08-17"
reviewed: "2026-08-17"
pool: "game-ai"
relevance_score: 9
lineage: strategy-rts-agents
cites:
  - title: "Portfolio Greedy Search and Simulation for Large-Scale Combat in StarCraft"
    url: "https://doi.org/10.1109/CIG.2013.6633610"
    year: 2013
    arxiv: null
    doi: "10.1109/CIG.2013.6633610"
  - title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning"
    url: "https://doi.org/10.1038/s41586-019-1724-z"
    year: 2019
    arxiv: null
    doi: "10.1038/s41586-019-1724-z"
  - title: "A survey of real-time strategy game AI research and competition in StarCraft"
    url: "https://doi.org/10.1109/TCIAIG.2013.2286295"
    year: 2013
    arxiv: null
    doi: "10.1109/TCIAIG.2013.2286295"
see:
  - "299-influence-mapping"
  - "113-portfolio-greedy-search-and-simulation-for-large-scale-comba"
  - "009-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforc"
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
  - "283-behavior-trees-for-next-gen-game-ai"
---

# Hierarchical Reinforcement Learning in StarCraft Micromanagement with Influence Maps and Cluster-based Scripts

## One-sentence takeaway

Hash the battlefield to a 24-bit influence-map code, k-means the units, pick a clustering strength from an upper Q-table and a PGS-style script per cluster from lower Q-tables — tabular, interpretable StarCraft micro that is not an LLM agent bench.

## Why it matters here

GRID COMMAND needs squad AI this week: influence maps are already in the library (299), portfolio scripts too (113). This paper is the glue — IM hashing for a tiny global state, cluster-based scripts (ATK/DEF/MIX plus distractors) for the action alphabet, hierarchical Q-tables so we can inspect *why* a cluster kited. Sample-efficient vs MAPPO/QMIX on 4v4/8v8 Marines, and the Q-heatmaps are the kind of artifact a designer can argue with. Not AlphaStar, not RTSGameBench sludge.

## Key ideas

- Influence-map hashing: 7×7 square falloff per unit, RGB histogram equalized to 8 bins, 3×8-bit hex code; Levenshtein distance clusters translation/rotation-similar boards so the Q-table does not explode.
- Combat-space clustering: `C_k = ⌈N(1−C_s)+C_s⌉` from a scale-free strength `C_s ∈ [0,1]`; Calinski–Harabasz indexes which lower table to consult; radial/circumferential dispersion becomes a 2-hex local state.
- Scripts are the action alphabet (focus-fire, kiting, lure, gather, do_nothing) executed inside a cluster — PGS's NOK-AV/Kiter line, but assigned per local group rather than per unit type.
- Dense local rewards (hp delta, kills, comeback/setback) plus a global hp-difference reward, so sparse win/lose is not the only signal.
- Ablation: drop IM hashing or clustering and 8v8 mirror maps fall apart; full HRL-IM/CBS holds.

## Caveats

- Marines-only, no mixed tech; 8v8 already shows win-rate volatility. Do not ship as a 200-unit 4X brain.
- Scripts are hand-authored; the paper itself flags automatic script extraction as future work.
- arXiv 2606.30092, venue not yet on the abs page — treat as 2026 preprint aimed at CoG/AIIDE-class venues.

## Links

- arXiv: [2606.30092](https://arxiv.org/abs/2606.30092)
