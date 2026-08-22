---
title: "Outcome Monitors: Recovery Affordances for Silent Tool Failures"
authors:
  - "Sugam Panthi"
  - "Rabab Abdelfattah"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.19303"
doi: null
source: "https://arxiv.org/abs/2608.19303"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 1144
seed_batch: "frontier-2026-08-22"
reviewed: "2026-08-22"
pool: "agents"
relevance_score: 9
lineage: agent-tool-contracts
cites:
  - title: "SkillEffect: Checked Lowering for Memory-Bounded Agent Tools"
    url: "https://arxiv.org/abs/2608.17007"
    year: 2026
    arxiv: "2608.17007"
    doi: null
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://github.com/deepseek-ai/deepseek-harness"
    year: 2026
    arxiv: null
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "Aborted but Not Forgotten: KV-Cache Retention Breaks Rollback Consistency in Language Agents"
    url: "https://arxiv.org/abs/2608.15939"
    year: 2026
    arxiv: "2608.15939"
    doi: null
  - title: "Bounded-State Restoration: Decoupling Local Restore Capacity from External LLM State"
    url: "https://arxiv.org/abs/2608.17826"
    year: 2026
    arxiv: "2608.17826"
    doi: null
see:
  - "1116-skilleffect-checked-lowering-for-memory-bounded-agent-tools"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency"
  - "1118-bounded-state-restoration-decoupling-local-restore-capacity-from"
---

# Outcome Monitors: Recovery Affordances for Silent Tool Failures

## One-sentence takeaway

A tool timeout is visible; a cached error page in the expected JSON is not: mine outcome contracts, keep the raw result, and append a *nonbinding* receipt that names the violated property and the public recovery tools.

## Why it matters here

Standing topic: model-versus-harness failure localization. SkillEffect (1116) is a *pre-execution* memory lease on the tool body; 1078/1118 are KV rollback. Silent failures are the other half: the call "succeeded" and the agent treats a negative price or an HTTP error page as fact (70% of one production runtime's silent failures were first caught by a human). GRID COMMAND order tools (path, query, mesh extract) will fail this way. Outcome Monitors do not seize the loop (unlike ToolGate / Agent Behavioral Contracts). They make the already-advertised substitute tools *legible*. DeepSeek Harness (1050) can host the checker as a plugin; the agent still chooses.

## Key ideas

- Detector is Daikon-lineage mining over task-disjoint clean traces (or public schemas): positivity, categorical domains, echo fields, affine relations, date order. Conservative acceptance; five-fold cross-fit so the evaluated workflow is never in its own registry.
- On violation: preserve `y_t`, emit a receipt `{violations, admissible_recovery_tools}`. Action set unchanged. No gold labels, no evaluator, no forced repair.
- Frozen ToolMaze, four models in two families: completion 10.9% → 28.1% (+17.2 pp, clustered p < 10⁻⁵). MiniMax M3 replication +18.75 pp. τ-bench retail Flash +14.0 pp overall, +28.0 pp on categorical status faults, 0 on conservation. Controls: stripping the recovery-tool list kills the gain; restoring it recovers it. Witness wording and timing do not move the needle (power-bounded).
- Cost: +7% list price, zero extra model calls, versus a reviewer-loop port at +498%.

## Caveats

- Gains concentrate where the fault *blocks* baseline completion. Held-out AppWorld (78% baseline) is a wash. Clean-P0 is net zero with paired harms *and* rescues.
- Detection outside the mined vocabulary is 46% on an incident-derived suite (high on structured-value violations, 22% inside plausible strings). Completion can still pass while a corrupted value propagates.
- Every positive study is fault-enriched. At low real-world prevalence the case rests on the clean effect staying near zero. Not a shield against adversarial tools.

## Links

- arXiv: [2608.19303](https://arxiv.org/abs/2608.19303)
