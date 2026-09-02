---
title: "Runtime-Independent Persistent Agents: Preserving Identity, Memory, and Code Across Models, Harnesses, and Servers"
authors:
  - "Zhenyu Zhao"
  - "Roy Zhao"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2609.00546"
doi: null
source: "https://arxiv.org/abs/2609.00546"
topics:
  - "provenance-first-agent-memory"
  - "agentic-llm-serving"
seed_rank: 1543
seed_batch: "frontier-2026-09-02"
reviewed: "2026-09-02"
pool: "agents"
relevance_score: 9
lineage: agent-harness-runtime
cites:
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "A Contract-Centered Architecture for Scalable and Manageable Agentic Runtimes"
    url: "https://arxiv.org/abs/2608.27086"
    year: 2026
    arxiv: "2608.27086"
    doi: null
see:
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "004-memgpt-towards-llms-as-operating-systems"
  - "1446-a-contract-centered-architecture-for-scalable-and-manag"
  - "1366-when-can-agents-safely-checkpoint-fork-restore-and-merge-exa"
---
# Runtime-Independent Persistent Agents: Preserving Identity, Memory, and Code Across Models, Harnesses, and Servers

## One-sentence takeaway

A persistent agent is not its current model+harness: Runtime-Independent Persistent Agents keep identity, memory, and code lineage across models, harnesses, sessions, and servers.

## Why it matters here

Broadside and GRID COMMAND agents must survive model swaps, Cordis profile changes, and host moves without losing identity. This paper names the continuity substrate that 1050's plugin runtime and 1446's contracts both underspecify for long-lived agents.

## Key ideas

- Common description (model + harness) underspecifies a long-lived agent that changes models, orchestration harnesses, sessions, and host servers.
- Continuity-bearing substrate retains one identity, memory, and executable code lineage across those changes.
- Runtime-independent architecture: persistence is not tied to a single process or vendor CLI.
- Separates identity/memory/code from the ephemeral execution carrier.

## Caveats

- Continuity without invalidation invites stale skills after server-side drift (pair with Invalidation Contracts leftover 2609.00243).
- Cryptographic / MutMem-V2 cousins in-window are leftovers — do not assume this paper ships portable verification.
- Map carefully onto Cordis session logs; do not fork a second identity store.

## Links

- arXiv: [2609.00546](https://arxiv.org/abs/2609.00546)
- PDF: https://arxiv.org/pdf/2609.00546
