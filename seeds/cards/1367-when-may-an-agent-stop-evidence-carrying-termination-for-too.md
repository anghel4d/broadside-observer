---
title: "When May an Agent Stop? Evidence-Carrying Termination for Tool-Using LLMs"
authors:
  - "Jason Liu"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2608.23623"
doi: null
source: "https://arxiv.org/abs/2608.23623"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 1367
seed_batch: "frontier-2026-08-26"
reviewed: "2026-08-26"
pool: "agents"
relevance_score: 10
lineage: agent-tool-contracts
cites:
  - title: "Outcome Monitors: Recovery Affordances for Silent Tool Failures"
    url: "https://arxiv.org/abs/2608.19303"
    year: 2026
    arxiv: "2608.19303"
    doi: null
  - title: "Correct is not governed: provenance integrity in agentic workflows"
    url: "https://arxiv.org/abs/2608.12761"
    year: 2026
    arxiv: "2608.12761"
    doi: null
  - title: "Schema First Tool APIs for LLM Agents: A Controlled Study of Tool Misuse, Recovery, and Budgeted Performance"
    url: "https://arxiv.org/abs/2603.13404"
    year: 2026
    arxiv: "2603.13404"
    doi: null
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
  - title: "When Can Agents Safely Checkpoint, Fork, Restore, and Merge? Exact Checking for Execution Edits"
    url: "https://arxiv.org/abs/2608.22928"
    year: 2026
    arxiv: "2608.22928"
    doi: null
see:
  - "1144-outcome-monitors-recovery-affordances-for-silent-tool-failure"
  - "1018-correct-is-not-governed-provenance-integrity-in-agentic-workflows"
  - "065-schema-first-tool-apis-for-llm-agents-a-controlled-study-of-"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1366-when-can-agents-safely-checkpoint-fork-restore-and-merge-exa"
---

# When May an Agent Stop? Evidence-Carrying Termination for Tool-Using LLMs

## One-sentence takeaway

COMPLETE is not a vibe: the agent may stop only when a typed certificate binds every answer claim to in-scope trace evidence and a closed deterministic replay reconstructs the claimed value.

## Problem

Outcome Monitors (1144) make silent *tool* failures legible. Provenance integrity (1018) says generated intermediates are not evidence. Neither is a stop rule. GRID COMMAND order loops and Broadside radar agents currently treat "the model emitted a final answer" as termination. That is how you ship an unsupported COMPLETE: a critic reads the whole trace and shrugs, or a controller races to done. Existing systems gate success, certify traces, or enforce runtime policies; they do not test receipt-plus-scope-plus-closed-replay at the COMPLETE boundary across controlled termination faults.

## Design

- Evidence-Carrying Termination (ECT): COMPLETE is allowed only if a typed certificate binds every required answer claim to valid, in-scope trace evidence, and a deterministic replay reconstructs the claimed value.
- Out of scope by design: ECT certifies support *in a recorded trace under declared assumptions*, not external truth, safety, or alignment.
- Closed-loop recovery: when the certificate fails, the runtime can keep going; successful recovery is itself evidence for a later COMPLETE.

## Evidence

Locked static study: 48 synthetic tasks × six tool-use families × clean plus eight faults. ECT: 0/288 unsafe completions vs 252/288 for an inspected termination-critic core (−87.50 pp). Frozen 576-trajectory study vs critic, controller, and full-trace LLM critic. On 22 primary held-out clusters: 0/66 premature unsupported terminations vs 40/66 for the controller (−60.61 pp); supported completion 97/132 vs 92/132 (noninferior at a −10-point margin). Recovery succeeded in 18/66 trajectories, 17 of which then completed with support.

## Limitations

- Single-author evaluation on synthetic plus frozen trajectories, not a production GRID COMMAND trace.
- Certifies trace-support, not world-truth. A lying tool that satisfies the certificate still passes.
- Does not replace 1144's silent-failure receipts (those fire *during* the loop) or 1366's edit checker (those fire on fork/restore).

## Implications for Broadside

The stop button on Broadside Observer and GRID COMMAND should be ECT, not an LLM critic over the whole transcript. DeepSeek Harness (1050) already projects model-visible messages from an append-only session log — that log is the in-scope evidence store. Pair with 1144: receipts for bad tools mid-loop, certificates for COMPLETE at the end.

## Links

- arXiv: [2608.23623](https://arxiv.org/abs/2608.23623)
