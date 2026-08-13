---
title: "Memory Networks"
authors:
  - "Jason Weston"
  - "Sumit Chopra"
  - "Antoine Bordes"
year: 2014
venue: "arXiv:cs.AI"
arxiv: "1410.3916"
doi: null
source: "https://arxiv.org/abs/1410.3916"
topics:
  - agent-memory
  - memory-foundations
seed_rank: 108
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "End-To-End Memory Networks"
    url: "https://arxiv.org/abs/1503.08895"
    year: 2015
    arxiv: "1503.08895"
    doi: null
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle"
    url: "https://arxiv.org/abs/2604.16548"
    year: 2026
    arxiv: "2604.16548"
    doi: null
see:
  - "104-end-to-end-memory-networks"
  - "004-memgpt-towards-llms-as-operating-systems"
---

# Memory Networks

## One-sentence takeaway

We describe a new class of learning models called memory networks.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state (Memory Networks)

## Key ideas

- We describe a new class of learning models called memory networks.
- Memory networks reason with inference components combined with a long-term memory component; they learn how to use these jointly.
- The long-term memory can be read and written to, with the goal of using it for prediction.
- We investigate these models in the context of question answering (QA) where the long-term memory effectively acts as a (dynamic) knowledge base, and the output is a textual response.
- We evaluate them on a large-scale QA task, and a smaller, but more complex, toy task generated from a simulated world.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [1410.3916](https://arxiv.org/abs/1410.3916)
- URL: https://arxiv.org/abs/1410.3916
