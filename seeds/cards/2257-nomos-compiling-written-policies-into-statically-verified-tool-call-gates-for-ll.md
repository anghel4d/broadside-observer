---
title: "NOMOS: Compiling Written Policies into Statically Verified Tool-Call Gates for LLM Agents"
authors:
  - "Min-Young Yu"
  - "Tony Kim"
  - "Jang Won Choi"
year: 2026
venue: "arXiv"
arxiv: "2610.11030"
doi: null
source: "https://arxiv.org/abs/2610.11030"
topics:
  - "agent-security"
  - "tool-use"
seed_rank: 2257
seed_batch: "frontier-2026-10-10"
reviewed: "2026-10-10"
pool: "agents"
relevance_score: 7
cites:
  - title: "NOMOS: Compiling Written Policies into Statically Verified Tool-Call Gates for LLM Agents"
    url: "https://arxiv.org/abs/2610.11030"
    year: 2026
    arxiv: "2610.11030"
    doi: null
see: []
---

# NOMOS: Compiling Written Policies into Statically Verified Tool-Call Gates for LLM Agents

## One-sentence takeaway

A four-pass compiler turns a natural-language policy into a deterministic tool-call gate, statically checked against tool schemas, that cuts policy violations on τ²-bench from 66.3% to 2.6% (airline) with microsecond decisions and no LLM in the loop.

## Why it matters here

Deterministic gates compiled once are the cheap, auditable alternative to asking a verifier model on every action — the same shape as Broadside's judgement-gate cards (2241) but produced from prose policy.

## Key ideas

- **Why naive compilation fails.** Extracted rules block the very tool that satisfies their precondition, or read arguments the tool does not have.
- **Static repair.** Schema-level checks alone (no prover, solver or LLM) repair or reject 37% (airline) and 13% (retail) of candidate rules.
- **Replay audit.** Running compiled rules over undefended transcripts flags bindings that would refuse legitimate work.
- **Security.** Zero attack success on AgentDojo banking (nine attack families collapse onto three structural rules), at most 3.6% elsewhere; compilation runs on open-weight gemma-4-26B on-premise.

## Caveats

Only covers clauses that map to a tool call; goals with no call to govern slip through. Benign-utility cost is domain-dependent. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.11030
- PDF: https://arxiv.org/pdf/2610.11030
