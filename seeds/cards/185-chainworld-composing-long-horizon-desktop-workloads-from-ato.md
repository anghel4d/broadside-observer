---
title: "ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks"
authors:
  - "Vincent Siu"
  - "Manasi Sharma"
  - "Dawn Song"
  - "Daniel Yue Zhang"
  - "Chenguang Wang"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2606.21654"
doi: null
source: "https://arxiv.org/abs/2606.21654"
topics:
  - rag
  - retrieval
  - agent-eval
  - harness
  - computer-use-agents
seed_rank: 185
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "OSWorld 2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks"
    url: "https://arxiv.org/abs/2606.29537"
    year: 2026
    arxiv: "2606.29537"
    doi: null
    card: "193-osworld-2-0-benchmarking-computer-use-agents-on-long-horizon"
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
    card: "054-auto-dreamer-learning-offline-memory-consolidation-for-langu"
  - title: "The BrowserGym Ecosystem for Web Agent Research"
    url: "https://arxiv.org/abs/2412.05467"
    year: 2024
    arxiv: "2412.05467"
    doi: null
    card: "095-the-browsergym-ecosystem-for-web-agent-research"
---

# ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks

## One-sentence takeaway

Computer use agents are evaluated almost exclusively on atomic desktop tasks, but realistic desktop work requires sustaining state across multiple objectives.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests; shapes harness/ACI design and model-vs-harness failure localization (ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks)

## Key ideas

- Computer use agents are evaluated almost exclusively on atomic desktop tasks, but realistic desktop work requires sustaining state across multiple objectives.
- We study this gap with ChainWorld, which composes atomic OSWorld tasks into long horizon desktop workloads through directional compatibility search while preserving the source evaluators.
- The resulting workload contains 347 chains of length two to four and compares two renderings of the same task sequence.
- In single turn evaluation, all tasks are presented together in one prompt.
- In multi turn evaluation, tasks are revealed one at a time.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.21654](https://arxiv.org/abs/2606.21654)
- URL: https://arxiv.org/abs/2606.21654
