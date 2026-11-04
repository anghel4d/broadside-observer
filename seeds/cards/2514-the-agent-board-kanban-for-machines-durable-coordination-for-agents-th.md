---
title: "The Agent Board: Kanban for Machines; Durable Coordination for Agents That Outlive the Conversation"
authors:
  - "Tyler Hunt"
  - "Donald Nguyen"
  - "Gurbinder Gill"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.04100"
doi: null
source: "https://arxiv.org/abs/2611.04100"
topics:
  - "agentic-llm-serving"
  - "continual-agent-skills"
seed_rank: 2514
seed_batch: "frontier-2026-11-04"
reviewed: "2026-11-04"
pool: "agents"
relevance_score: 8
see:
  - 2493-towards-portable-specification-of-the-agent-harness
cites:
  - title: "The Agent Board: Kanban for Machines; Durable Coordination for Agents That Outlive the Conversation"
    url: "https://arxiv.org/abs/2611.04100"
    year: 2026
    arxiv: "2611.04100"
    doi: null
---

# The Agent Board: Kanban for Machines; Durable Coordination for Agents That Outlive the Conversation

## One-sentence takeaway

The Agent Board is a durable shared table of tasks with a few exact routing fields and a free-form body; agents post, watch and block on tasks while holding no process, and a Board Keeper agent turns outside events into wakes, which keeps waiting cost flat where naive polling grew about 165-fold.

## Why it matters here

This is the coordination problem our own multi-agent fleet runs into: agents that must wait on each other, hand off work and outlive one conversation. The paper names Grok Bot among the persistent agent products it targets, and is honest about where the design loses (a plain external watcher was cheaper, and 3.6% of real wakes were missed).

## Key ideas

- **Semi-semantic tasks.** Exact fields the system routes on, plus prose only language models read.
- **Blocking without a process.** An agent ends its turn on a wait; a matching post wakes it.
- **Board Keeper.** A system agent acting like an interrupt handler: carries events from non-agent parts of the harness onto the board, matches them to waiting tasks by reading their prose, and allocates agents for tasks that name a kind of agent.
- **Policy kernels.** Loadable coordination policies give statuses and roles meaning; the board itself enforces none.
- **Scheduler analogy.** Framed as an OS scheduler for agents, with the places the analogy breaks stated explicitly.
- **Evidence.** A live trace and three small simulated pilots: flat wait cost versus about 165x growth for polling; no false wakes; 3.6% missed real wakes.

## Caveats

Small pilots, mostly simulated, from the harness's own authors (Corvic). The prose matcher's missed wakes are a real correctness gap for anything that must not stall.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.04100
- PDF: https://arxiv.org/pdf/2611.04100
