---
title: "Provenance Guided Rollback Suggestions"
authors: ["David Zhao", "Pavle Subotic", "Mukund Raghothaman", "Bernhard Scholz"]
year: 2025
venue: "TPLP"
arxiv: "2501.09225"
doi: "10.1017/S147106842500002X"
source: "https://arxiv.org/abs/2501.09225"
topics: [production-rules-triggers]
seed_rank: 1626
seed_batch: "craft-2026-09-07"
reviewed: "2026-09-07"
pool: "languages"
relevance_score: 9
lineage: production-rules
cites:
  - title: "FlowLog: Re-thinking Datalog for Fast and Extensible Static Analysis"
    url: "https://arxiv.org/abs/2607.23971"
    year: 2026
    arxiv: "2607.23971"
    doi: null
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
  - title: "Fast, Declarative, Character Simulation Using Bottom-Up Logic Programming"
    url: "https://doi.org/10.1609/aiide.v20i1.31866"
    year: 2024
    arxiv: null
    doi: "10.1609/aiide.v20i1.31866"
  - title: "Naiad: A Timely Dataflow System"
    url: "https://doi.org/10.1145/2517349.2522738"
    year: 2013
    arxiv: null
    doi: "10.1145/2517349.2522738"
see:
  - "1593-flowlog-re-thinking-datalog-for-fast-and-extensible"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "1490-fast-declarative-character-simulation-using-bottom-up-logic-programming"
  - "1480-naiad-a-timely-dataflow-system"
---

# Provenance Guided Rollback Suggestions

## One-sentence takeaway

Incremental Datalog debugging: walk an incremental provenance tree to localize the input delta that produced bad tuples, then propose a *partial* rollback of that delta — 26.9× faster than delta debugging on Doop/DaCapo, and a smaller repair on 27% of cases.

## Why it matters here

FlowLog 1593 / TED 1490 / Rete 042 give Anoptic standing rules a way to *maintain* derived facts; they do not tell you which last-tick insertion to undo when a rule fires wrong. This is the leftover: provenance-guided rollback for evolving EDB, so GRID COMMAND can retract the offending command instead of replaying the world.

## Key ideas

- **The job.** After an incremental epoch, some inserted/deleted result tuples are faults (unwanted). Users currently full-rollback, debug, re-apply. Automate: (1) localize the subset of the input Δ that reproduces the faults; (2) repair — a subset of Δ whose rollback makes the faults disappear.
- **Incremental provenance.** Proof trees built from incremental evaluation information, so they stay small. Implemented by extending incremental Soufflé to compute provenance, not by re-running the whole program.
- **Two algorithms on the same tree.** Localization traverses the incremental proof tree to the responsible EDB changes. Rollback suggestion is an input repair over that subset.
- **Doop / DaCapo.** Versus language-agnostic delta debugging (which re-runs): >26.9× overall speedup and strictly smaller repairs on 27% of benchmarks. Aimed at CI static analysis, but the Δ-EDB story is the standing-rule story.

## Caveats

Soufflé / Doop points-to, not a game tick. Faults are missing-or-unwanted *tuples*, not “the unit did the wrong animation.” TED 1490 remains the in-engine table recipe; Rete 042 the classical matcher; Naiad 1480 / FlowLog 1593 the IVM engines. Do not remint 042 / 1480 / 1490 / 1593.

## Links

- arXiv abs: https://arxiv.org/abs/2501.09225
- PDF: https://arxiv.org/pdf/2501.09225
- DOI: https://doi.org/10.1017/S147106842500002X
