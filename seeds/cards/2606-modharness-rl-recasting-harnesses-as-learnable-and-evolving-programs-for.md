---
title: "ModHarness-RL: Recasting Harnesses as Learnable and Evolving Programs for Agentic RL"
authors:
  - "Zelin He"
  - "Siyu Zhu"
  - "Jacob Helwig"
  - "Yujian Liu"
  - "Li An"
  - "Rohit Jain"
  - "Shiyu Chang"
  - "Alborz Geramifard"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.18533"
doi: null
source: "https://arxiv.org/abs/2611.18533"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 2606
seed_batch: "frontier-2026-11-16"
reviewed: "2026-11-16"
pool: "agents"
relevance_score: 8
see:
  - 1768-co-evolving-harnesses-and-models-on-policy-correction-helps-weaker
  - 1636-what-does-multi-harness-rl-learn-credit-assignment-and-portability-in
cites:
  - title: "ModHarness-RL: Recasting Harnesses as Learnable and Evolving Programs for Agentic RL"
    url: "https://arxiv.org/abs/2611.18533"
    year: 2026
    arxiv: "2611.18533"
    doi: null
---

# ModHarness-RL: Recasting Harnesses as Learnable and Evolving Programs for Agentic RL

## One-sentence takeaway

ModHarness-RL stores an agent's interaction as typed State blocks and treats two harness parts, a Compression program that builds the context and a Steering program that injects guidance on deviation, as programs that are proposed from recent trajectories, verified by execution and replayed over past ones while the model trains with RL, beating a fixed harness in most settings on CodeSearch, ALFWorld and BIRD SQL with 1.5B-8B models.

## Why it matters here

Model versus harness is a standing Broadside topic, and this is a clean framing of the harness as an evolving program rather than a frozen prompt: context assembly and steering become code over typed blocks, which is the same shape as a provenance-first session log with views over it. Proposing harness edits from trajectories and replaying them over history before adoption is also a rehearsal loop for harness changes, the pattern we want for safe self-modification.

## Key ideas

- **Typed State.** The interaction is recorded as a set of typed blocks rather than a flat transcript.
- **Two programs.** Compression assembles accumulated history into the model's context; Steering supplies guidance when behaviour deviates.
- **Co-evolution.** During RL, candidate programs are proposed from recent trajectories, verified by execution, and replayed over past trajectories, so the harness tracks the model's shifting behaviour.
- **Evidence.** Deep study on CodeSearch plus ALFWorld and BIRD SQL, models 1.5B to 8B; learned Compression and Steering improve held-out performance over the fixed-harness baseline in most settings.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Small models only (up to 8B), and 'most settings' means some do not improve; the abstract gives no cost of the program search per training step.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.18533
- PDF: https://arxiv.org/pdf/2611.18533
