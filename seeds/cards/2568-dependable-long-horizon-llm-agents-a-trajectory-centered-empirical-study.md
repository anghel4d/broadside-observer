---
title: "Dependable Long-Horizon LLM Agents: A Trajectory-Centered Empirical Study of Where Errors Enter and Which Controls Reach Them"
authors:
  - "Shaohuang Wang"
  - "Jinghao Wen"
  - "Xulei Zhang"
  - "Xun Jiao"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.13254"
doi: null
source: "https://arxiv.org/abs/2611.13254"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
seed_rank: 2568
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "agents"
relevance_score: 8
see:
  - 2547-attributing-agent-failures-to-their-history-needs-an-executed-counterfac
cites:
  - title: "Dependable Long-Horizon LLM Agents: A Trajectory-Centered Empirical Study of Where Errors Enter and Which Controls Reach Them"
    url: "https://arxiv.org/abs/2611.13254"
    year: 2026
    arxiv: "2611.13254"
    doi: null
---

# Dependable Long-Horizon LLM Agents: A Trajectory-Centered Empirical Study of Where Errors Enter and Which Controls Reach Them

## One-sentence takeaway

Reading 95 failed multi-agent runs in full, faults enter early (median 18% into the run), the trajectory already contained contrary evidence in 72% of failures, and in 88% of those no agent acted on it.

## Why it matters here

Failure localization is a standing topic and this replaces symptom labels with an episode record (origin, propagation, detection, response, consequence) that names which control could have caught the fault. Two findings are directly actionable for our harness: independent judges reading unused evidence and re-checking beliefs against the environment reach most episodes, and a big share of a public corpus's failures were harness artifacts after a provider content-filter crash.

## Key ideas

- **Episode record.** Ties a fault to origin, propagation, detection, response and consequence, by phase and state domain, and names covering control families.
- **Early entry.** Median fault at 0.18 of the run, mostly wrong decisions or fabrications over task state; in 37 of 88 Who&When runs before the human-labeled decisive step.
- **Ignored evidence.** 72% of failed runs held contrary evidence before failure; 88% of those saw no agent act on it. Something flagged a deviation in 31% of runs, but no response removed the deviated state.
- **Controls.** Independent judges, task contracts fixed at admission, and belief re-checks reach most episodes; restoring the agent's own state would have sufficed in 35 of 95.
- **Harness artifact.** 45% of hand-crafted Who&When failures ended with a content-filter crash after which the harness emitted an answer no agent produced.

## Caveats

Hand annotation of 95 runs from two public corpora; the controls are argued from coverage, not tested by intervention (see 2547 for the executed-counterfactual bar).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13254
- PDF: https://arxiv.org/pdf/2611.13254
