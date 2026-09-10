---
title: "SE-GoS: Self-Evolving Graph-of-Skills for Skill Library at Scale"
authors:
  - "Dawei Fu"
  - "Cheng Jiang"
  - "Sitian Qian"
  - "Huainan Wang"
  - "Zhongkai Hao"
year: 2026
venue: "arXiv"
arxiv: "2609.08228"
doi: null
source: "https://arxiv.org/abs/2609.08228"
topics:
  - "continual-agent-skills"
  - "provenance-first-agent-memory"
seed_rank: 1771
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 9
lineage: skill-graph-evolution
cites:
  - title: "SE-GoS: Self-Evolving Graph-of-Skills for Skill Library at Scale"
    url: "https://arxiv.org/abs/2609.08228"
    year: 2026
    arxiv: "2609.08228"
    doi: null
see:
  - "1542-towards-a-systems-foundation-for-agentic-skills-architecture-lifecycle"
  - "1576-maskills-continual-skills-optimization-for-multi-agent-llm-systems"
  - "1577-skillglow-procedural-family-skill-consolidation-for-self-improving"
  - "1638-from-interaction-traces-to-persistent-skills-online-evolution-for-comp"
  - "1639-trove-adaptive-agent-skill-orchestration-via-trace-grounded-route-vali"
---

# SE-GoS: Self-Evolving Graph-of-Skills for Skill Library at Scale

## One-sentence takeaway

SE-GoS evolves a Graph-of-Skills from execution traces (topology, edge weights, retrieval-facing descriptions) without retraining — better SkillsBench reward at lower input tokens than dumping the full library into context.

## Why it matters here

Broadside’s skill shelf (1542 / 1576 / 1577 / 1638 / 1639) needs retrieval that scales past thousands of skills for ano macros and GRID COMMAND order libraries. SE-GoS is training-free graph evolution from traces — the cheap continual path when you will not re-SFT every skill add.

## Key ideas

- Builds on Graph-of-Skills (dependency-aware retrieval) and SkillDAG (online execution-backed structure).
- Three updates: topology evolution (discover/prune relations), edge-weight evolution (reinforce effective retrieval links), description evolution (optimize retrieval-facing text from feedback).
- Preserves the original retrieval pipeline — evolution is of the graph, not a new agent architecture.
- Across three LLMs on SkillsBench: higher task reward and fewer input tokens vs full-skill-library baselines.
- Answers whether historical execution traces can systematically distill a better retrieval graph for unseen tasks.

## Caveats

SkillsBench scope; graph quality still depends on trace coverage and description-evolution LLM judgment. Do not remint 1542 / 1576 / 1638.

## Links

- arXiv: [2609.08228](https://arxiv.org/abs/2609.08228)
- PDF: https://arxiv.org/pdf/2609.08228
