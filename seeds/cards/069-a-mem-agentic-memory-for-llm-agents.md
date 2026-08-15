---
title: "A-MEM: Agentic Memory for LLM Agents"
authors:
  - "Wujiang Xu"
  - "Zujie Liang"
  - "Kai Mei"
  - "Hang Gao"
  - "Juntao Tan"
  - "Yongfeng Zhang"
year: 2025
venue: "NeurIPS"
arxiv: "2502.12110"
doi: null
source: "https://arxiv.org/abs/2502.12110"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
seed_rank: 69
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "Generative Agents: Interactive Simulacra of Human Behavior"
    url: "https://arxiv.org/abs/2304.03442"
    year: 2023
    arxiv: "2304.03442"
    doi: null
see:
  - "004-memgpt-towards-llms-as-operating-systems"
  - "003-generative-agents-interactive-simulacra-of-human-behavior"
---

# A-MEM: Agentic Memory for LLM Agents

## One-sentence takeaway

A-MEM organizes agent memory as a Zettelkasten of notes with contextual descriptions, keywords, and tags, then lets new notes rewrite the attributes of linked historical memories.

## Why it matters here

Fixed memory schemas in ano/Broadside cannot adapt across task types; A-MEM is the agentic write path that grows a knowledge graph instead of appending a log.

## Key ideas

- Existing memory systems store and retrieve but keep fixed operations and structures, even when they sit on a graph database.
- Each new memory becomes a structured note; the system then searches historical notes for meaningful links.
- Memory evolution: integrating a new note can update contextual representations and attributes of already-stored notes.
- The design pairs Zettelkasten organization with agent-driven decisions about what to link and how to rewrite.
- Experiments on six foundation models beat then-SOTA memory baselines; eval code is at https://github.com/WujiangXu/A-mem and the system at https://github.com/WujiangXu/A-mem-sys.

## Caveats

## Links

- arXiv: [2502.12110](https://arxiv.org/abs/2502.12110)
- PDF: https://arxiv.org/pdf/2502.12110
- Code: https://github.com/WujiangXu/A-mem
