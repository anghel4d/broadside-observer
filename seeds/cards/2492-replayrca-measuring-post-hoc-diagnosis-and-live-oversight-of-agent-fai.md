---
title: "ReplayRCA: Measuring Post-hoc Diagnosis and Live Oversight of Agent Failures by Counterfactual Replay"
authors:
  - "Jeremy Canale"
  - "Fabien Soulis"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.41025"
doi: null
source: "https://arxiv.org/abs/2610.41025"
topics:
  - "agent-failure-localization"
seed_rank: 2492
seed_batch: "frontier-2026-11-02"
reviewed: "2026-11-02"
pool: "agents"
relevance_score: 9
cites:
  - title: "ReplayRCA: Measuring Post-hoc Diagnosis and Live Oversight of Agent Failures by Counterfactual Replay"
    url: "https://arxiv.org/abs/2610.41025"
    year: 2026
    arxiv: "2610.41025"
    doi: null
---

# ReplayRCA: Measuring Post-hoc Diagnosis and Live Oversight of Agent Failures by Counterfactual Replay

## One-sentence takeaway

ReplayRCA scores agent-failure diagnosis by intervention, restoring the environment before the blamed step, swapping in the diagnoser's fix and letting the same agent continue against a placebo replay, and finds that the best post-hoc diagnosers are not the best live supervisors.

## Why it matters here

Model-versus-harness failure localization usually grades blame against human annotations. Counterfactual replay with a placebo control turns 'which step was decisive' into a measurable causal quantity, which is the right bar for any automated triage of our own agent runs.

## Key ideas

- **Causal repair score.** Continuation success after the proposed action minus a paired placebo that replays the original action through the same restore mechanism.
- **Two tracks.** Post-hoc autopsy of a known failure, and live oversight where a supervisor may intervene once before an irreversible action without knowing the outcome.
- **OpsWorld.** A deterministic, procedurally generated back-office environment with six difficulty levels, the top one multimodal.
- **Results.** On 62 calibrated failures the best of 13 models reaches +51.3 points; the top eight are statistically tied, and forcing last-step intervention costs 17.1 points, so last-step attribution shortcuts don't transfer.
- **Post-hoc is not live.** A top post-hoc diagnoser is the weakest live supervisor (-14.5 points, p = 0.002), and a small open-weight model ties for best live supervisor.

## Caveats

Requires a deterministic, restorable environment, which most real agent deployments lack. Small item counts (62 failures, 87 live runs) and one synthetic domain.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.41025
- PDF: https://arxiv.org/pdf/2610.41025
