---
title: "What Coding Agents Leave Unsaid: Measuring Task-State Gaps Between Execution and Reports"
authors:
  - "Guoyang Xu"
  - "Rui Zhang"
  - "Xiuyu Wu"
  - "Hao Chen"
year: 2026
venue: "arXiv"
arxiv: "2610.20003"
doi: null
source: "https://arxiv.org/abs/2610.20003"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 2313
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "agents"
relevance_score: 8
lineage: runtime-harness-evolution
cites:
  - title: "What Coding Agents Leave Unsaid: Measuring Task-State Gaps Between Execution and Reports"
    url: "https://arxiv.org/abs/2610.20003"
    year: 2026
    arxiv: "2610.20003"
    doi: null
see: []
---

# What Coding Agents Leave Unsaid: Measuring Task-State Gaps Between Execution and Reports

## One-sentence takeaway

Coding agents' user-facing reports hide much of what happened: across 37 tasks and 4,799 probes, report-only readers recover 52.0% of task-state answers versus 92.7% for full-context readers, a 40.7-point gap that stays at 34.8 points even at the final checkpoints of verified fixes.

## Why it matters here

Broadside sells supervised agent work and runs fleets whose humans read reports, not transcripts; CTXGAP quantifies how much a supervisor is blind to (failed attempts, workarounds, unresolved risks) and shows terminal scrollback and context-informed rewrites only partly close it.

## Key ideas

- **Recoverability probes.** Checkpoint-aligned task-state questions answered from (a) the agent itself, (b) the full execution context, (c) accumulated reports only.
- **Headline gap.** Agents answer 93.6% on demand; full-context 92.7%; report-only 52.0%.
- **What goes missing.** Human annotation finds states mentioned without enough supporting detail are the largest category of unrecovered information.
- **Partial fixes.** Full terminal scrollback lifts recovery to 73.6%; at matched report length, context-informed rewrites add about eight points, with no detectable advantage for targeted over natural rewrites.
- **Robustness.** Positive gaps persist across harnesses and an independent DeepSeek execution-and-measurement chain.

## Caveats

The primary pipeline uses one model family for atom extraction, probe/reference generation, observation and much of grading, which may favor execution-grounded detail such as exact identifiers; decision relevance is model-assessed; reporting interventions are measured offline. 37 tasks. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.20003
- PDF: https://arxiv.org/pdf/2610.20003
- HTML: https://arxiv.org/html/2610.20003v1
