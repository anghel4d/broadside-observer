---
title: "IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier"
authors:
  - "Blake Stenstrom"
  - "Charangan Vasantharajan"
  - "Brian Sathianathan"
year: 2026
venue: "arXiv"
arxiv: "2609.10494"
doi: null
source: "https://arxiv.org/abs/2609.10494"
topics:
  - "agentic-llm-serving"
  - "agent-failure-localization"
  - "harness-engineering"
seed_rank: 1775
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 9
lineage: serving-route-measurement
cites:
  - title: "IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier"
    url: "https://arxiv.org/abs/2609.10494"
    year: 2026
    arxiv: "2609.10494"
    doi: null
see:
  - "1232-benchmarking-llm-serving-systems-for-agentic-ai-workloads-with"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1575-where-reliability-lives-experimental-localisation-of-behavioural"
  - "1636-what-does-multi-harness-rl-learn-credit-assignment-and-portability-in"
  - "002-efficient-memory-management-for-large-language-model-serving"
---

# IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier

## One-sentence takeaway

IBIB (IB2) scores enterprise AI by serving route — weights × precision × output contract × harness — not by advertised model id; gold-blind capability-binding preflight + reliability-inclusive first-pass scoring across 11 systems exposes limits the identifier hides.

## Why it matters here

Broadside’s standing claim: usable capability lives in the route, not the checkpoint badge (1050 / 1575 / 1636). IBIB makes that measurement-error claim into a sealed protocol — mandatory reading before trusting any “model X scored Y” on agentic workloads for Anoptic tool routes.

## Key ideas

- Audits 18 benchmarks: all score advertised model identifiers; usable capability jointly depends on weights, serving route, precision, output contract, and harness.
- Three protocol parts: gold-blind capability-binding preflight; reliability-inclusive first-pass scoring (keeps failure in score, unsupported capability out); structurally score-blind adjudication.
- Reference instantiation: 128 locked tasks / 987 assertions (doc/spreadsheet/chart/tool/DB); corpus stays sealed — procedure is the artifact.
- Eleven systems: identical weights can fail distinct binding-gate predicates on complete single-route runs; advertised id exposed neither limit.
- Releases algorithms, classification tables, request contract, and manifest schemas.

## Caveats

Enterprise office/tool suite, not SWE-bench or realtime ECS. Sealed corpus means you adopt the protocol, not the leaderboard dump. Do not remint 1232 / 1050.

## Links

- arXiv: [2609.10494](https://arxiv.org/abs/2609.10494)
- PDF: https://arxiv.org/pdf/2609.10494
