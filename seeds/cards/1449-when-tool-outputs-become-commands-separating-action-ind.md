---
title: "When Tool Outputs Become Commands: Separating Action Induction from Runtime Authorization in Tool-Augmented LLM Agents"
authors:
  - "Xiaokun Guo"
  - "Zhen Xu"
  - "Dongdong Huo"
  - "Yanqiu Zhang"
  - "Wei Wang"
  - "Qinfu Yang"
  - "Dongjin Yu"
  - "Yu Wang"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.27146"
doi: null
source: "https://arxiv.org/abs/2608.27146"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 1449
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
  - title: "When May an Agent Stop? Evidence-Carrying Termination for Tool-Using LLMs"
    url: "https://arxiv.org/abs/2608.23623"
    year: 2026
    arxiv: "2608.23623"
    doi: null
see:
  - "1144-outcome-monitors-recovery-affordances-for-silent-tool-failure"
  - "1367-when-may-an-agent-stop-evidence-carrying-termination-for-too"
  - "1368-feedback-that-backfires-why-small-language-model-agents-repe"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# When Tool Outputs Become Commands: Separating Action Induction from Runtime Authorization in Tool-Augmented LLM Agents

## One-sentence takeaway

Tool outputs that specify actions are commands: SARA separates action induction (from Observations) from execution authorization (against the user objective).

## Problem

Outcome Monitors (1144) recover from silent tool *failures*. Feedback That Backfires (1368) shows agents re-issue calls they just watched fail. Neither covers the case where a successful Observation *induces* a new action the user never authorized — tool output as command. Broadside and GRID COMMAND already feed tool results back into the loop; without a provenance/authorization split, a poisoned or merely suggestive Observation can drive real side effects.

## Design

- **SARA** treats action induction and execution authorization as distinct runtime roles.
- Observation side: a context-isolated **Action Probe** exposes action-inducing semantics and records action-origin provenance across steps as a review signal.
- Execution side: tool calls are authorized only against the user objective plus audited evidence from prior authorized successes — not against free-form Observation text.
- Separates action provenance from execution authority so "the tool said to" is never sufficient.

## Evidence

Security/systems framing with a concrete runtime split (probe vs authorizer). Evaluate as a harness contract, not as an LLM jailbreak benchmark.

## Limitations

- Probe isolation and provenance store are new moving parts; a buggy probe is itself an induction surface.
- Does not replace 1144's failure monitors or 1367's evidence-carrying stop — compose with them.
- Authorization policy is an input; the paper does not invent which side effects are irreversible.

## Implications for Broadside

Cordis/dsh must not let raw Observation tokens authorize the next tool call. Add an Action Probe + authorizer cut beside Outcome Monitors (1144). Session logs that already power 1050's append-only history are the natural provenance substrate — do not invent a second log.

## Links

- arXiv: [2608.27146](https://arxiv.org/abs/2608.27146)
- PDF: https://arxiv.org/pdf/2608.27146
