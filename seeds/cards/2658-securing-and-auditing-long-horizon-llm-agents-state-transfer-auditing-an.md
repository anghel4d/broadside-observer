---
title: "Securing and Auditing Long-Horizon LLM Agents: State-Transfer Auditing and Controls in the Agent Harness"
authors:
  - "Deep Shah"
  - "Nehal Kathrotia"
year: 2026
venue: "arXiv preprint (cs.CR)"
arxiv: "2611.23346"
doi: null
source: "https://arxiv.org/abs/2611.23346"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
  - "agent-failure-localization"
seed_rank: 2658
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 8
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
  - 1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency
  - 171-tepa-revoking-stale-memories-for-conflict-robust-language-ag
  - 1767-authority-is-not-a-string-a-capability-scoped-harness-for-prompt
cites:
  - title: "Securing and Auditing Long-Horizon LLM Agents: State-Transfer Auditing and Controls in the Agent Harness"
    url: "https://arxiv.org/abs/2611.23346"
    year: 2026
    arxiv: "2611.23346"
    doi: null
---

# Securing and Auditing Long-Horizon LLM Agents: State-Transfer Auditing and Controls in the Agent Harness

## One-sentence takeaway

This paper argues that long-horizon agent failures happen at state transfers (context ↔ history ↔ memory ↔ environment ↔ inference-server cache) and proposes hash-chained audit records at each transfer boundary; in 240 fault-injection trajectories those records localized root causes that lifecycle and tool-only logs missed, at microsecond deterministic overhead.

## Why it matters here

This is the provenance argument stated for the harness itself: log what crosses each boundary, not just prompts and tool calls. Its examples are ours: compaction dropping user constraints, memory consolidation stripping source authority, and rollbacks leaving aborted KV state live (cited: 1078). The same records then back capabilities, authorization outside the prompt and transactional recovery (cited: 1767).

## Key ideas

- **Failure locus.** Transfers can admit unchecked content (indirect prompt injection, unverified memory writes), rewrite state lossily (compaction, consolidation) or restore state incompletely (workspace rollbacks with stale KV).
- **Audit points.** Each boundary gets a minimal hash-chained record, with cheap deterministic checks separated from model-based semantic checks, binding context, memory and inference-server cache state to external actions.
- **One record, two uses.** The records needed for causal failure attribution also supply durable state for least-privilege capabilities, replay-resistant authorization, information-flow control, obligation monitors and transactional recovery.
- **Evaluation.** A reference harness middleware on 240 multi-step fault-injection trajectories localizes root causes and catches cross-transfer violations that lifecycle and tool-only logs miss, at microsecond deterministic overhead.

## Caveats

Abstract-level read of the v1 preprint (Thursday 19 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Mostly an architecture paper; the evaluation is fault injection on the authors' own middleware, not deployed agents. Semantic (model-based) checks have their own cost and error rates, which the abstract does not quantify.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23346
- PDF: https://arxiv.org/pdf/2611.23346
- HTML: https://arxiv.org/html/2611.23346v1
