---
title: "Masked Erosion: How Acceptance Gates Lose Redundant Safeguards in Self-Improving Agents"
authors:
  - "Hau-Sing So"
  - "Daixian Liu"
  - "Weicai Long"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.38392"
doi: null
source: "https://arxiv.org/abs/2610.38392"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 2465
seed_batch: "frontier-2026-10-30"
reviewed: "2026-10-30"
pool: "agents"
relevance_score: 9
see:
  - 2452-evolving-to-match-capabilities-improving-harness-self-evolution-via-skill
  - 2363-harness-delta-attribution-dissecting-gains-from-harness-evolution
  - 2285-cortex-measurement-gated-evolution-and-pruning-of-coding-agent-skills
cites:
  - title: "Masked Erosion: How Acceptance Gates Lose Redundant Safeguards in Self-Improving Agents"
    url: "https://arxiv.org/abs/2610.38392"
    year: 2026
    arxiv: "2610.38392"
    doi: null
---

# Masked Erosion: How Acceptance Gates Lose Redundant Safeguards in Self-Improving Agents

## One-sentence takeaway

When a self-improving agent keeps harness edits that score higher on a task batch, deleting a safeguard that overlaps with another one shows almost no harm, so redundancy erodes unseen and turns into real harm once the harness runs on a weaker model.

## Why it matters here

Any loop here that prunes or rewrites skills and rules by measured gain has exactly this blind spot: the gate sees what the harness does under today's model, not what it would still stop if one guard failed. The paper's cheap fixes, freezing safety text and auditing one-layer ablations, are easy to adopt in skill-maintenance passes.

## Key ideas

- **Masking.** With overlapping safeguards, removing one leaves the others blocking the harm, so the gate decides on task success alone.
- **Exhaustive harm map.** Harm is measured for every subset of four written safeguards in two agent environments, across 411 improvement loops under ten gate rules plus three GEPA optimizer runs.
- **Bigger batches can hurt.** A paired significance test blocks chance deletions but lets genuinely helpful ones through; at the same cost, 20-task batches kept every harness protected while 40-task batches lost all six.
- **Audits prevent exposure, not loss of depth.** Large harm audits stop visible harm, but the lost redundancy shows up later; GEPA kept every safety rule verbatim, yet two of three final harnesses misused credentials under a weaker model.
- **Predictable.** A statistical model frozen before the runs predicts where each gate's protection breaks as safeguard cost and batch size change.

## Caveats

Mostly controlled deletion experiments with four hand-written safeguards in two environments; real harnesses have many more interacting rules. The weaker-model transfer result rests on a small number of optimizer runs.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.38392
- PDF: https://arxiv.org/pdf/2610.38392
