---
title: "Beyond fabrication: Misattributed numbers in papers written by AI research agents"
authors:
  - "Mosab Alfaqeeh"
  - "Omar Hourani"
  - "Muath Hourani"
  - "Hashem Alfaqeeh"
year: 2026
venue: "arXiv preprint (cs.CL, cs.AI)"
arxiv: "2610.38691"
doi: null
source: "https://arxiv.org/abs/2610.38691"
topics:
  - "provenance-first-agent-memory"
  - "autoresearch-experiment-selection"
seed_rank: 2469
seed_batch: "frontier-2026-10-30"
reviewed: "2026-10-30"
pool: "agents"
relevance_score: 8
see:
  - 1801-benchshield-formal-model-backed-instrumentation-for-reward-integrity-in
cites:
  - title: "Beyond fabrication: Misattributed numbers in papers written by AI research agents"
    url: "https://arxiv.org/abs/2610.38691"
    year: 2026
    arxiv: "2610.38691"
    doi: null
---

# Beyond fabrication: Misattributed numbers in papers written by AI research agents

## One-sentence takeaway

When AI research agents report numbers their work does not support, about four in five such claims are not invented but copied from the agent's own files from the wrong experiment, metric or run, and a deterministic claim-to-evidence checker certifies claims at over 90% precision where an LLM verifier accepts about three times as many misattributed ones.

## Why it matters here

This is the failure mode a research digest like this one is most exposed to: a real number attached to the wrong source. The checker's design, matching a claim's surrounding context to the specific result and calibrating against numerical decoys, is a concrete recipe for provenance-first auditing of anything agents write, including these cards.

## Key ideas

- **Re-analysis.** All 540 released judgments from a public benchmark of AI research agents (nine agents, fifteen problems) are re-examined, with 256 numerical claims from 18 submissions labeled by hand.
- **Misalignment, not cheating.** Failures concentrate on the link between paper and underlying work rather than outright fabrication.
- **Deterministic checker.** Rules fixed before labeling; 78 of 85 certified claims agree with blinded annotators (Cohen's kappa 0.89), though it verifies only a subset and failure to verify is not evidence of falsehood.
- **Use both.** An LLM verifier with the same evidence recovers more traceable claims but lets through far more misattributions, so the two are complementary.
- **Agent differences.** Over 99 submissions, traceability varies widely between agents; a second judge from another vendor keeps the official ranking but passes twice as many papers.

## Caveats

One benchmark and a small hand-labeled sample; the checker's high precision comes with limited coverage. Results describe research-paper writing, not other agent outputs.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.38691
- PDF: https://arxiv.org/pdf/2610.38691
