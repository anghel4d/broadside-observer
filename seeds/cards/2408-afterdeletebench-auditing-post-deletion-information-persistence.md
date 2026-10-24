---
title: "AfterDeleteBench: Auditing Post-Deletion Information Persistence in LLM Agents"
authors:
  - "Ehsan Saleh"
  - "Roozbeh Nahavandi"
  - "Sama Salarian"
  - "Raef Bassily"
  - "Andrew Perrault"
year: 2026
venue: "arXiv preprint (cs.CR)"
arxiv: "2610.31366"
doi: null
source: "https://arxiv.org/abs/2610.31366"
topics:
  - "provenance-first-agent-memory"
seed_rank: 2408
seed_batch: "frontier-2026-10-24"
reviewed: "2026-10-24"
pool: "agents"
relevance_score: 8
cites:
  - title: "AfterDeleteBench: Auditing Post-Deletion Information Persistence in LLM Agents"
    url: "https://arxiv.org/abs/2610.31366"
    year: 2026
    arxiv: "2610.31366"
    doi: null
see:
  - 1643-forgetting-without-restarting-execution-state-unlearning-for-stateful
---

# AfterDeleteBench: Auditing Post-Deletion Information Persistence in LLM Agents

## One-sentence takeaway

Deleting the source record from an agent's memory does not delete what it taught: in a paired exposed-then-deleted versus never-exposed benchmark, a black-box auditor reconstructs the deleted secret from surviving summaries in about two thirds of cases, components scattered across records still reconstruct 62–99% of the time, and only provenance-aware deletion (retire and rebuild every summary whose recorded sources include the deleted record) brings recovery to zero.

## Why it matters here

Provenance-first memory is a Broadside topic precisely because of this case. The paper shows that "delete the row" is not deletion once any consolidation step has run, and that recorded lineage from sources to derived summaries is what makes real deletion possible. It also separates disclosure, write-back and later recall, so a write-time filter alone is shown to be insufficient: it cannot undo an earlier disclosure.

## Key ideas

- **Paired worlds.** Each profile runs once with a target-bearing interaction that is consolidated and then deleted, and once with a neutral interaction; the difference in exact reconstruction attributes recovery to the exposure.
- **Lifecycle endpoints.** Reconstruction (R), commitment of a written-back value (C), and activation in a fresh session (A) are measured separately; end-to-end E = R and C and A is descriptive, not causal.
- **Memory under test.** Flat raw records versus hierarchical memory with an extractive summary built before deletion; exact source deletion leaves the summary in place.
- **Interventions.** Recorded-lineage closure retires and rebuilds dependent summaries (zero recoveries, by construction an upper bound); an exact-literal write gate blocks reinsertion but not prior leakage.
- **Non-verbatim recovery.** With components surviving under a public composition rule, reconstruction stays substantial across all three models; dropping one component drops complete reconstruction to zero while the rest stays exposed.
- **Interface matters.** Parser mismatches can hide target-bearing replies, and changing only the activation contract can flip an apparent write effect.

## Caveats

Synthetic exact-string targets, deterministic extractive summaries and a finite auditor vocabulary; closure works because provenance is complete here, which real learned or lossy memory does not offer. No exposed-and-retained reference to calibrate normal recoverability, and no runtime or storage costs.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.31366
- PDF: https://arxiv.org/pdf/2610.31366
