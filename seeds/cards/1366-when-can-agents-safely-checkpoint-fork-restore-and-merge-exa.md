---
title: "When Can Agents Safely Checkpoint, Fork, Restore, and Merge? Exact Checking for Execution Edits"
authors:
  - "Yusheng Zheng"
  - "Xiaoyu Song"
  - "Yanpeng Hu"
  - "Lebin Cheng"
  - "Yuxi Huang"
  - "Wei Zhang"
year: 2026
venue: "arXiv:cs.PL"
arxiv: "2608.22928"
doi: null
source: "https://arxiv.org/abs/2608.22928"
topics:
  - "agent-failure-localization"
  - "agentic-llm-serving"
seed_rank: 1366
seed_batch: "frontier-2026-08-26"
reviewed: "2026-08-26"
pool: "agents"
relevance_score: 10
lineage: agent-tool-contracts
cites:
  - title: "Bounded-State Restoration: Decoupling Local Restore Capacity from External LLM State"
    url: "https://arxiv.org/abs/2608.17826"
    year: 2026
    arxiv: "2608.17826"
    doi: null
  - title: "Aborted but Not Forgotten: KV-Cache Retention Breaks Rollback Consistency in Language Agents"
    url: "https://arxiv.org/abs/2608.15939"
    year: 2026
    arxiv: "2608.15939"
    doi: null
  - title: "Outcome Monitors: Recovery Affordances for Silent Tool Failures"
    url: "https://arxiv.org/abs/2608.19303"
    year: 2026
    arxiv: "2608.19303"
    doi: null
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
see:
  - "1118-bounded-state-restoration-decoupling-local-restore-capacity-from"
  - "1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency"
  - "1144-outcome-monitors-recovery-affordances-for-silent-tool-failure"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# When Can Agents Safely Checkpoint, Fork, Restore, and Merge? Exact Checking for Execution Edits

## One-sentence takeaway

Checkpoint, fork, restore, and merge are not free session verbs: an untrusted agent cannot undo a sent tool request, so the runtime must decide from the execution record whether the edit is still safe.

## Problem

Broadside and GRID COMMAND already want to fork a specialist, restore a parked order loop, or merge two branches of a long-horizon run without restarting the task. Bounded-State Restoration (1118) bounds the *restore working set* on the KV path; 1078 shows retained KV can violate rollback. Neither says which *edits of the execution itself* are legal. An edit cannot unsend an authorization or a tool call already in flight. An unsafe fork therefore double-fires a unit order; an unsafe restore discards a result the task still needs; an unsafe merge collides with a call that started before the cut. Existing agent runtimes (including DeepSeek dsh session-log fork/resume) expose the verbs without deriving the preserve-set from the running record.

## Design

- Four verbs: Checkpoint records the current execution; Fork, Restore, and Merge change what happens next. The agent is untrusted; the runtime owns the execution record.
- Exact checker enumerates every way the task can finish without violating policy, then drops any continuation that would make a still-required result impossible. Empty remainder is a checkable proof that no safe implementation exists; otherwise the remainder is exactly what the runtime may allow.
- Covers Checkpoint plus six forms of Fork, Restore, and Merge, with extensions, atomic enforcement, and the information every exact checker needs.
- Lean mechanizes the finite checker and the runtime invariant; tests validate all six edit forms. Code, proofs, and executable tests: https://github.com/eunomia-bpf/agent-check-restore-safety.

## Evidence

Formal results plus a Lean-checked finite checker. The paper does not claim a production merge into vLLM or dsh; it claims a decision procedure whose output is either a set of safe continuations or a proof of unsafety.

## Limitations

- Mechanization is of the finite checker and invariant, not a drop-in Broadside runtime. Wiring it to Cordis/dsh session events is still work.
- Policy is an input: the algorithm does not invent which tool effects are irreversible.
- Does not replace 1118's restore-capacity bound or 1078's KV-vs-rollback consistency; those are orthogonal resources.

## Implications for Broadside

GRID COMMAND NL-order loops that park, fork, or resume a specialist must ask this checker before mutating the session. DeepSeek Harness (1050) already treats the append-only session log as the only model-visible history — that log is the execution record this algorithm consumes. Do not ship fork/restore as UX until the preserve-set is derived, not assumed.

## Links

- arXiv: [2608.22928](https://arxiv.org/abs/2608.22928)
- GitHub: https://github.com/eunomia-bpf/agent-check-restore-safety
