---
title: "MemGPT: Towards LLMs as Operating Systems"
authors:
  - "Charles Packer"
  - "Sarah Wooders"
  - "Kevin Lin"
  - "Vivian Fang"
  - "Shishir G. Patil"
  - "Ion Stoica"
  - "Joseph E. Gonzalez"
year: 2023
venue: "arXiv:cs.AI"
arxiv: "2310.08560"
doi: null
source: "https://arxiv.org/abs/2310.08560"
topics:
  - agent-memory
seed_rank: 4
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
cites:
  - title: "Generative Agents: Interactive Simulacra of Human Behavior"
    url: "https://arxiv.org/abs/2304.03442"
    year: 2023
    arxiv: "2304.03442"
    doi: "10.1145/3586183.3606763"
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
see:
  - "003-generative-agents-interactive-simulacra-of-human-behavior"
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
---

# MemGPT: Towards LLMs as Operating Systems

## One-sentence takeaway

MemGPT pages working context against archival and recall stores the way an OS pages RAM against disk, and uses interrupts so the model can yield to the user or pull more memory mid-turn.

## Why it matters here

This is the memory hierarchy Broadside agents actually need: a small in-context scratchpad, a searchable long-term store, and explicit control-flow interrupts — the same split ano wants between hot ECS state and cold provenance logs.

## Key ideas

- Virtual context management treats the LLM context window as main memory and external stores as disk; the agent issues function calls to move data between tiers.
- Main context holds the system persona, working memory, and a FIFO queue of recent messages; overflow is summarized or evicted rather than silently truncated.
- Recall storage holds the full conversation transcript; archival storage holds uploaded documents. Both are queried by the agent when a task exceeds the window.
- Interrupts let MemGPT pause generation to request user input or run a memory operation, so multi-session chat can resume with a reconstructed self.
- Evaluated on document analysis beyond the base window and on multi-session chat that must remember, reflect, and evolve across conversations.

## Caveats

## Links

- arXiv: [2310.08560](https://arxiv.org/abs/2310.08560)
- PDF: https://arxiv.org/pdf/2310.08560
- Project: https://memgpt.ai
