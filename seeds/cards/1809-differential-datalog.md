---
title: "Differential Datalog"
authors: ["Leonid Ryzhyk", "Mihai Budiu"]
year: 2019
venue: "Datalog 2.0 Workshop (CEUR 2368)"
arxiv: null
doi: null
source: "https://ceur-ws.org/Vol-2368/paper6.pdf"
topics: [datalog, incremental, differential-dataflow]
seed_rank: 1809
seed_batch: "craft-2026-09-13"
reviewed: "2026-09-13"
pool: "languages"
relevance_score: 10
lineage: production-rules
cites:
  - title: "Differential Dataflow"
    url: "https://www.cidrdb.org/cidr2013/Papers/CIDR13_Paper111.pdf"
    year: 2013
    arxiv: null
    doi: null
  - title: "Naiad: A Timely Dataflow System"
    url: "https://doi.org/10.1145/2517349.2522738"
    year: 2013
    arxiv: null
    doi: "10.1145/2517349.2522738"
  - title: "FlowLog: Re-thinking Datalog for Fast and Extensible"
    url: "https://arxiv.org/abs/2607.23971"
    year: 2026
    arxiv: "2607.23971"
    doi: null
  - title: "Nemo: First Glimpse of a New Rule Engine"
    url: "https://arxiv.org/abs/2308.15897"
    year: 2023
    arxiv: "2308.15897"
    doi: "10.4204/EPTCS.385.35"
  - title: "Soufflé: On Synthesis of Program Analyzers"
    url: "https://www.souffle-lang.com/pdf/cav16.pdf"
    year: 2016
    arxiv: null
    doi: "10.1007/978-3-319-41540-6_23"
see:
  - "823-differential-dataflow"
  - "1480-naiad-a-timely-dataflow-system"
  - "1593-flowlog-re-thinking-datalog-for-fast-and-extensible"
  - "1790-nemo-first-glimpse-of-a-new-rule-engine"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "1004-treat-a-better-match-algorithm-for-ai-production-systems"
---

# Differential Datalog

## One-sentence takeaway

Ryzhyk–Budiu’s DDlog lets you write ordinary Datalog and get a fully incremental Rust engine: input fact deltas in, derived-fact deltas out, compiled onto Differential Dataflow with types, expressions, and C/Rust/Java embedding.

## Why it matters here

ano / GRID COMMAND standing triggers this week sit on Rete 042, TREAT 1004, FlowLog 1593 (Soufflé→DD), Nemo 1790 (Rust Datalog), and Differential Dataflow 823 / Naiad 1480. The leftover is the *system-builder dialect* that automates incrementality without asking you to hand-write DRed: write the non-incremental rules, get transactional insert/delete with minimum derived churn. That is the craft for mission/trigger tables that must react to unit/world fact edits every tick without recomputing the whole program.

## Key ideas

- **Always-incremental execution.** Transactions of inserts/deletes on input relations; upcalls with output deltas — non-incremental is the empty-start special case.
- **Compile to Differential Dataflow.** Map/filter/join/antijoin/groupby/fixed-point operators with temporal indexes; multi-worker Rust runtime.
- **Usable Datalog.** Typed relations, arithmetic, strings, FlatMap, Aggregate, modules — enough to avoid bouncing to host code for every expression.
- **Embeddable.** Primary path is a Rust library (C/Java bindings); CLI for debug. MIT, aimed at controllers (OVN rewrite cited).

## Caveats

Datalog 2.0 2019 workshop (CEUR 2368); PDFs at CEUR and author page; no DOI/arXiv. In-memory single-node by default — not a disk DB. Analyzer-shaped Soufflé CAV 2016 stays cite-not-mint (already bibliography on FlowLog/Nemo cards). FlowLog 1593 is the Soufflé-surface→DD sibling; prefer DDlog when you want the language+embed story, FlowLog when you already have Soufflé programs. Do not remint 823 / 1480 / 1593 / 1790 / 042 / 1004.

## Links

- CEUR PDF: https://ceur-ws.org/Vol-2368/paper6.pdf
- Author PDF: https://mihaibudiu.github.io/work/ddlog.pdf
- GitHub (archive): https://github.com/vmware/differential-datalog
