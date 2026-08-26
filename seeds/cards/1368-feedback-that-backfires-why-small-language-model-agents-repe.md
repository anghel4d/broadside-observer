---
title: "Feedback That Backfires: Why Small Language Model Agents Repeat the Call They Just Watched Fail"
authors:
  - "Esmail Gumaan"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2608.23651"
doi: null
source: "https://arxiv.org/abs/2608.23651"
topics:
  - "agent-failure-localization"
  - "agentic-llm-serving"
seed_rank: 1368
seed_batch: "frontier-2026-08-26"
reviewed: "2026-08-26"
pool: "agents"
relevance_score: 9
lineage: model-vs-harness
cites:
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
  - title: "When May an Agent Stop? Evidence-Carrying Termination for Tool-Using LLMs"
    url: "https://arxiv.org/abs/2608.23623"
    year: 2026
    arxiv: "2608.23623"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
see:
  - "1144-outcome-monitors-recovery-affordances-for-silent-tool-failure"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
  - "1367-when-may-an-agent-stop-evidence-carrying-termination-for-too"
---

# Feedback That Backfires: Why Small Language Model Agents Repeat the Call They Just Watched Fail

## One-sentence takeaway

Pasting the failed tool call back into the transcript is not feedback: the surface form of the call, not the error message, is what the model copies, and "do not repeat" does not undo it.

## Problem

Almost every harness — DeepSeek dsh included — records `tool_call + error` and asks the model to continue, on the assumption that the error is corrective. Outcome Monitors (1144) cover *silent* successes that are semantically wrong. This paper covers the opposite and more common path: the call *visibly failed* and the small model re-emits it anyway. GRID COMMAND order tools and Broadside plugins will hit this the first time a path query 404s. The standard prescriptions (add "do not repeat this call", or delete the failed turn and retry from a clean context) are exactly what this measurement says not to do.

## Design

- Corrective gain = change in log-probability of re-emitting the action that just failed after the failure record is appended. Negative gain means the "feedback" made repetition *more* likely.
- Counterfactuals pair the same call with a failure message, a success message, or a neutral acknowledgement, separating surface-form copy from the semantics of "this failed".
- Remedies that act on the surface term: replace the verbatim call with a runtime-generated description of the failure; or make previously-failed strings unreachable at the decoder. Remedies that do not: an explicit "do not repeat" instruction; deleting the failed attempt.

## Evidence

Six instruction-tuned checkpoints, 135M–1.7B, four families, two environments (simulated tool calling and MBPP program repair). Gain is negative for every model. Normalised by action length: about −1.03 nats per action token (factor 2.8 in per-token odds), on 90–100% of items. Over a fixed candidate set, P(repeat failed call) rises 0.06 → 0.54; greedy decoding reproduces the failed call token-for-token on 19% of items after the failure vs 0% before. Surface form accounts for 83% of the damage; marking it "failed" is small and inconsistent in sign. Replacing the verbatim call with a runtime-generated description removes 76% of the inversion at no token cost. Deleting the failed turn (the contamination prescription) is the *worst* harness measured for repetition, because it restores the context that produced the failure. CPU-only, artefacts released.

## Limitations

- Small models only (≤1.7B). Frontier-size Broadside backends may copy less; the surface-form mechanism still applies to any decoder that conditions on the last tool span.
- Simulated tool calling plus MBPP, not GRID COMMAND's live order tools.
- Does not diagnose *why* the first call failed (that's 1144 / ECT). It only says: do not echo the corpse.

## Implications for Broadside

This week, change the harness: never append the verbatim failed invocation. Emit a runtime-generated failure description (and, if cheap, mask the failed string at decode). Do not "clean the context" by deleting the failed turn. DeepSeek Harness (1050) session-log projection is the right seam; the plugin that renders tool errors should stop quoting the call.

## Links

- arXiv: [2608.23651](https://arxiv.org/abs/2608.23651)
