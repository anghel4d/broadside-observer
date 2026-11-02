---
title: "Towards Portable Specification of the Agent Harness"
authors:
  - "Nicolas Gertler"
  - "Claudio Novelli"
  - "Luciano Floridi"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.40917"
doi: null
source: "https://arxiv.org/abs/2610.40917"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 2493
seed_batch: "frontier-2026-11-02"
reviewed: "2026-11-02"
pool: "agents"
relevance_score: 8
see:
  - 1610-the-natural-language-interaction-protocol-and-standard-for-ai-agents
cites:
  - title: "Towards Portable Specification of the Agent Harness"
    url: "https://arxiv.org/abs/2610.40917"
    year: 2026
    arxiv: "2610.40917"
    doi: null
---

# Towards Portable Specification of the Agent Harness

## One-sentence takeaway

The agent harness should be specified as a versioned part of the system: the paper splits it into eight comparable functional components and proposes a portable record of which model ran in which harness configuration, including changes made within a run.

## Why it matters here

Model-versus-harness is a standing topic, and the paper names the bookkeeping gap behind it: the same model can score several-fold differently across harnesses, and model or agent cards don't record the sequence of effective configurations. A harness record is the provenance object our own run logs should carry.

## Key ideas

- **Eight components.** A functional decomposition of the harness that can be specified and compared across systems.
- **Run-level record.** Captures the sequence of effective configurations during a run, not just at release.
- **Self-editing agents.** Where agents change their own tools and configuration, the harness changes within a run, so the record must too.
- **Security angle.** Much of an agent's attack surface sits in the harness rather than the model.
- **Regulatory context.** Existing AI laws impose documentation duties but don't prescribe a common harness record.

## Caveats

A position and framework paper; no reference implementation or empirical validation is described in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.40917
- PDF: https://arxiv.org/pdf/2610.40917
