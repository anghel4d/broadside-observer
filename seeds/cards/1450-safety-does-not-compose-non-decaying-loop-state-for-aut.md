---
title: "Safety Does Not Compose: Non-Decaying Loop State for Autonomous LLM Agents"
authors:
  - "Chenhao Wu"
  - "Haoxuan Jia"
  - "Yang Liu"
  - "Yingguang Yang"
  - "Yuhan Lin"
  - "Chongyang Zhang"
  - "Hao Zheng"
  - "Yulin Huang"
  - "Jianshen Zhang"
  - "Yongzhi Qi"
  - "Shang Luo"
  - "Kefu Xu"
  - "Jifeng Zhu"
  - "Bin Chong"
year: 2026
venue: "arXiv:cs.CR"
arxiv: "2608.27141"
doi: null
source: "https://arxiv.org/abs/2608.27141"
topics:
  - "agent-failure-localization"
  - "agentic-llm-serving"
seed_rank: 1450
seed_batch: "frontier-2026-08-28"
reviewed: "2026-08-28"
pool: "agents"
relevance_score: 9
lineage: agent-tool-contracts
cites:
  - title: "Outcome Monitors: Recovery Affordances for Silent Tool Failures"
    url: "https://arxiv.org/abs/2608.19303"
    year: 2026
    arxiv: "2608.19303"
    doi: null
  - title: "When Can Agents Safely Checkpoint, Fork, Restore, and Merge? Exact Checking for Execution Edits"
    url: "https://arxiv.org/abs/2608.22928"
    year: 2026
    arxiv: "2608.22928"
    doi: null
see:
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1144-outcome-monitors-recovery-affordances-for-silent-tool-failure"
  - "1366-when-can-agents-safely-checkpoint-fork-restore-and-merge-exa"
  - "1367-when-may-an-agent-stop-evidence-carrying-termination-for-too"
  - "1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency"
---

# Safety Does Not Compose: Non-Decaying Loop State for Autonomous LLM Agents

## One-sentence takeaway

Trajectory-scoped safeguards do not compose across autonomous loops: against fragmented multi-iteration attacks they are no better than chance, while cross-iteration state separates cleanly.

## Problem

Broadside-style agents run as unattended loops — discover, plan, tool-call, verify, persist — across many iterations. Today's monitors (and Outcome Monitors 1144, stop checks 1367) are scoped to one trajectory and reset when the next begins. Checkpoint/fork safety (1366) asks which *edits* are legal; it does not ask whether safety *state* survives the loop boundary. An attack that dribbles evidence across iterations defeats every trajectory-scoped monitor.

## Design

- Separation theorem: against an attack whose evidence is fragmented across iterations, every trajectory-scoped monitor has true-positive rate equal to false-positive rate — the window never contains the evidence.
- A monitor that retains **non-decaying cross-iteration state** separates the two perfectly in the same model.
- Shows that the obvious repair of "just widen the trajectory window" fails to restore composition once the adversary can choose fragment boundaries.
- Reframes loop safety as a state-retention problem, not a better single-trace classifier.

## Evidence

Formal separation plus the constructive cross-iteration monitor. Stronger as a negative result about trajectory scope than as a drop-in Broadside component.

## Limitations

- Non-decaying state collides with privacy, rollback (1078), and restore-capacity (1118) — retention is not free.
- Does not specify the schema of the retained state; Broadside still has to design the loop ledger.
- CR/security venue framing; map claims onto harness monitors before treating as a serving paper.

## Implications for Broadside

GRID COMMAND and Broadside radar loops must carry a durable safety ledger across iterations, not reset monitors per trajectory. Compose with 1366 (edit safety), 1367 (stop evidence), and 1144 (tool-failure monitors): those are trajectory tools; this paper says the loop needs state that outlives them. Do not "fix" loop attacks by only lengthening the context window.

## Links

- arXiv: [2608.27141](https://arxiv.org/abs/2608.27141)
- PDF: https://arxiv.org/pdf/2608.27141
