---
title: "Loud Failures, Quiet Failures: Fault Detection and Recovery in Tool-Using Language Model Agents"
authors:
  - "Obada Kraishan"
year: 2026
venue: "arXiv"
arxiv: "2610.10062"
doi: null
source: "https://arxiv.org/abs/2610.10062"
topics:
  - "agent-failure-localization"
seed_rank: 2244
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "agents"
relevance_score: 8
lineage: silent-tool-failure
cites:
  - title: "Loud Failures, Quiet Failures: Fault Detection and Recovery in Tool-Using Language Model Agents"
    url: "https://arxiv.org/abs/2610.10062"
    year: 2026
    arxiv: "2610.10062"
    doi: null
see:
  - "1144-outcome-monitors-recovery-affordances-for-silent-tool-failure"
  - "1822-harness-or-model-isolating-the-harness-effect-in-agentic-coding-with"
---

# Loud Failures, Quiet Failures: Fault Detection and Recovery in Tool-Using Language Model Agents

## One-sentence takeaway

Tool-using agents notice a failure 91.3% of the time when the tool returns an explicit error but only 58.8% when it returns a plausible wrong value (against a 26.8% false-alarm rate), because they react to the error channel rather than to what the tool actually returned.

## Why it matters here

Broadside's agent engagements and the fleet itself depend on tools that fail quietly: stale caches, renamed fields, well-formed but wrong API answers. The practical lesson is that prompting the agent to check its results does nothing measurable; detection has to live in the harness, by turning silent faults into loud ones (schema checks, invariants, outcome monitors as in card 1144). The 63.3% run-to-run agreement baseline is also a useful reminder of how noisy single agent runs are.

## Key ideas

- **Fault-injection layer.** One of four typed faults (timeout, missing tool, schema drift, corrupted value) is injected at a controlled point in multi-step function-calling tasks; the harness records whether the agent notices, replans, recovers or repeats itself.
- **Scale.** Six models from three families, half of them reasoning variants, 1,920 trials over 24 tasks.
- **Reasoning models are not better here.** Against instruct siblings they notice less (−9.3 points) and change plan more (+10.4), with recovery unchanged.
- **Noise floor.** Two fault-free runs end in the same state only 63.3% of the time; against that, only a missing tool clearly lowers recovery (to 39.9%).
- **Loops.** After a fault, agents hit the same tool three or more times in a row in up to 22.2% of trials. A prompt line asking for a check after each call did not move detection.

## Caveats

Single-author study on one established function-calling benchmark with 24 tasks; the fault types are synthetic and the models are a fixed snapshot. Absolute rates will differ in real deployments with richer tools.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.10062
- PDF: https://arxiv.org/pdf/2610.10062
- Harness and data: https://github.com/obadaKraishan/brittle-agents
