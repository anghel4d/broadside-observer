---
title: "Attributing Agent Failures to Their History Needs an Executed Counterfactual: Toward a Reporting Standard"
authors:
  - "Egor Pakhomov"
  - "Erik Nijkamp"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.05650"
doi: null
source: "https://arxiv.org/abs/2611.05650"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "autoresearch-experiment-selection"
seed_rank: 2547
seed_batch: "frontier-2026-11-10"
reviewed: "2026-11-10"
pool: "agents"
relevance_score: 8
cites:
  - title: "Attributing Agent Failures to Their History Needs an Executed Counterfactual: Toward a Reporting Standard"
    url: "https://arxiv.org/abs/2611.05650"
    year: 2026
    arxiv: "2611.05650"
    doi: null
---

# Attributing Agent Failures to Their History Needs an Executed Counterfactual: Toward a Reporting Standard

## One-sentence takeaway

A claim that an agent failed because of its history should be backed by an executed counterfactual from a restored mid-run state with a measured replay certificate, not by a judge reading the transcript.

## Why it matters here

Model-vs-harness failure localization is a standing topic, and most published taxonomies are judged after the fact. This sets a reporting bar we can adopt for our own postmortems, and its second measurement is a sharp warning: hash-identical snapshots restored into identically seeded processes still diverged from the live run until the random stream position was restored.

## Key ideas

- **Standard.** Freeze an executable mid-trajectory state, change only the history the agent sees, continue, and report a replay certificate matched to the estimand.
- **Four manipulation classes,** each with precedent (DoVer, REFLECT, Who&When Pro, Causal Agent Replay), none of which reports a measured replay certificate.
- **Taxonomy caution.** A carrier taxonomy's 'concentration' could not be separated from benchmark construction (adjusted OR 1.15, interval crossing 1).
- **Restore caution.** Restored snapshots agreed with each other in 24/24 states but differed from the live continuation in 9 and 20 of 24; restoring RNG stream position fixed all 24.

## Caveats

A position and reporting proposal; the two measurements are cautionary and do not apply the full standard.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.05650
- PDF: https://arxiv.org/pdf/2611.05650
