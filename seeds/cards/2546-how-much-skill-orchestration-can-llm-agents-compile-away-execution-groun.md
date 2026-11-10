---
title: "How Much Skill Orchestration Can LLM Agents Compile Away? Execution-Grounded Specialization for Token-Efficient Skill Use"
authors:
  - "Jiayi Ni"
  - "Zac Wang"
  - "Alex Zhang"
  - "Zheng Liu"
  - "Roopa Prabhu"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2611.10022"
doi: null
source: "https://arxiv.org/abs/2611.10022"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "agent-tokenization-and-caching"
seed_rank: 2546
seed_batch: "frontier-2026-11-10"
reviewed: "2026-11-10"
pool: "agents"
relevance_score: 8
cites:
  - title: "How Much Skill Orchestration Can LLM Agents Compile Away? Execution-Grounded Specialization for Token-Efficient Skill Use"
    url: "https://arxiv.org/abs/2611.10022"
    year: 2026
    arxiv: "2611.10022"
    doi: null
---

# How Much Skill Orchestration Can LLM Agents Compile Away? Execution-Grounded Specialization for Token-Efficient Skill Use

## One-sentence takeaway

SkillCache compiles one successful skill run into a replayable capsule of programs and natural-language steps driven by a plan executor, cutting tokens by 74-81% at the same reward and transferring to open-weight models.

## Why it matters here

Our skills are re-interpreted from prose on every invocation. This is a concrete recipe for turning a used skill into a fast path while keeping the source skill for recovery, and it measures why zero-shot compilation fails (bad assumptions about runtime bindings). It pairs well with 2544: compile what repeats, enforce what must not drift.

## Key ideas

- **Zero-shot compile is brittle.** Without execution evidence, plans mis-assume runtime bindings and recovery is costly.
- **One-trace capsule.** A completed invocation becomes a parameterized capsule, replayed before reuse; the model is called back only when needed.
- **Savings.** With the Claude Code harness, warm runs on 87 SkillsBench tasks used 81% fewer tokens (Sonnet 4.6) and 74% fewer (Opus 4.8) at comparable reward.
- **Transfer.** Capsules raised three open-weight models' mean reward by 12-25 points while cutting tokens 72-81%.

## Caveats

Warm-path numbers repeat the same request; robustness is tested only under controlled request changes. Capsule staleness when tools change is not studied.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.10022
- PDF: https://arxiv.org/pdf/2611.10022
