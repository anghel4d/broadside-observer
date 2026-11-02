---
title: "Real Computation or Merely Naming? A Pre-Registered Mechanism Audit of 25 Cognitive-Architecture Modules in an LLM-Based Agent System"
authors:
  - "Peter Chen"
  - "Ni Zhang"
  - "Ying Xu"
  - "Siyuan Zhang"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.41604"
doi: null
source: "https://arxiv.org/abs/2610.41604"
topics:
  - "agent-failure-localization"
seed_rank: 2496
seed_batch: "frontier-2026-11-02"
reviewed: "2026-11-02"
pool: "agents"
relevance_score: 8
cites:
  - title: "Real Computation or Merely Naming? A Pre-Registered Mechanism Audit of 25 Cognitive-Architecture Modules in an LLM-Based Agent System"
    url: "https://arxiv.org/abs/2610.41604"
    year: 2026
    arxiv: "2610.41604"
    doi: null
---

# Real Computation or Merely Naming? A Pre-Registered Mechanism Audit of 25 Cognitive-Architecture Modules in an LLM-Based Agent System

## One-sentence takeaway

In an agent system advertising 25 cognitive-architecture modules, 18 compute values that never reach any output; a four-question static audit with line-number evidence plus pre-registered interventions exposes this, and repairing the wiring lifts planner success from 0.028 to 1.000.

## Why it matters here

A clean method for checking that a named harness component actually does something, which is the claim-implementation gap any agent stack (ours included) accumulates as skills and modules pile up. The three idle-wiring shapes are a handy checklist for audits.

## Key ideas

- **Static audit protocol.** Four questions answered with line-number evidence and call-chain tracing.
- **Idle-wiring taxonomy.** Connected-but-never-called, called-but-inert, called-but-content-blind.
- **Pre-registration.** 61 frozen criteria across 12 interventions: 53 confirmed, five falsified.
- **Replication.** Applied to the IIT-phi core of a second independent system.
- **Positive controls.** Repairs raise planner task success from 0.028 to 1.000 and cut state-controller error by 52%.

## Caveats

Case-level depth on two hobbyist-scale systems; prevalence across production agent stacks is unknown.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.41604
- PDF: https://arxiv.org/pdf/2610.41604
