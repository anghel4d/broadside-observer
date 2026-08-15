---
title: "Learn-by-interact: A Data-Centric Framework for Self-Adaptive Agents in Realistic Environments"
authors:
  - "Hongjin Su"
  - "Ruoxi Sun"
  - "Jinsung Yoon"
  - "Pengcheng Yin"
  - "Tao Yu"
  - "Sercan Ö. Arık"
year: 2025
venue: "arXiv:cs.LG"
arxiv: "2501.10893"
doi: null
source: "https://arxiv.org/abs/2501.10893"
topics:
  - rag
  - retrieval
  - coding-agents
  - harness
  - agent-eval
seed_rank: 177
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
  - title: "Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments"
    url: "https://arxiv.org/abs/2607.28591"
    year: 2026
    arxiv: "2607.28591"
    doi: null
  - title: "CodeGrep: An RL-Trained Retrieval Agent for LLM Coding Agents"
    url: "https://arxiv.org/abs/2608.05886"
    year: 2026
    arxiv: "2608.05886"
    doi: null
see:
  - "052-change2task-from-repository-changes-to-executable-coding-age"
  - "053-codegrep-an-rl-trained-retrieval-agent-for-llm-coding-agents"
---

# Learn-by-interact: A Data-Centric Framework for Self-Adaptive Agents in Realistic Environments

## One-sentence takeaway

Learn-by-interact synthesizes agent–environment trajectories from documentation and then backward-constructs instructions from those histories, producing training and ICL data with no human annotations.

## Why it matters here

Broadside cheap-filter discipline and GRID COMMAND harness work both starve for environment-specific trajectories. Backward construction — log first, invent the instruction from the log — is the data recipe, and the paper shows it beating ordinary RAG for agent ICL.

## Key ideas

- The bottleneck is not a better agent loop but a lack of high-quality interaction data for the target environment.
- Trajectories are synthesized from documentation; instructions are then built by summarizing or abstracting those histories (backward construction).
- The same synthetic data is used for training and for training-free ICL, with retrieval methods specialized to agents rather than generic RAG.
- On SWE-bench, WebArena, OSWorld, and Spider2-V, ICL with Claude-3.5 improves by up to 12.2% and training Codestral-22B by up to 19.5%; backward construction alone is worth up to 14.0% for training.
- Ablations credit the synthesized ICL set and the retrieval pipeline over conventional RAG.

## Caveats

## Links

- arXiv: [2501.10893](https://arxiv.org/abs/2501.10893)
