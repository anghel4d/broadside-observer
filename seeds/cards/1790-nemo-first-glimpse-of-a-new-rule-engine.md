---
title: "Nemo: First Glimpse of a New Rule Engine"
authors: ["Alex Ivliev", "Stefan Ellmauthaler", "Lukas Gerlach", "Maximilian Marx", "Matthias Meißner", "Simon Meusel", "Markus Krötzsch"]
year: 2023
venue: "EPTCS 385 (ICLP 2023 system demo)"
arxiv: "2308.15897"
doi: "10.4204/EPTCS.385.35"
source: "https://arxiv.org/abs/2308.15897"
topics: [production-rules-triggers]
seed_rank: 1790
seed_batch: "craft-2026-09-11"
reviewed: "2026-09-11"
pool: "languages"
relevance_score: 9
lineage: production-rules-triggers
cites:
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
  - title: "TREAT: A Better Match Algorithm for AI Production Systems"
    url: "https://aaai.org/papers/00042-aaai87-008-treat-a-better-match-algorithm-for-ai-production-systems/"
    year: 1987
    arxiv: null
    doi: null
  - title: "FlowLog: Re-thinking Datalog for Fast and Extensible Static Analysis"
    url: "https://arxiv.org/abs/2607.23971"
    year: 2026
    arxiv: "2607.23971"
    doi: null
  - title: "OPS5 user's manual"
    url: "https://doi.org/10.1184/r1/6608090.v1"
    year: 1981
    arxiv: null
    doi: "10.1184/r1/6608090.v1"
see:
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "1004-treat-a-better-match-algorithm-for-ai-production-systems"
  - "1593-flowlog-re-thinking-datalog-for-fast-and-extensible"
  - "155-ops5-user-s-manual"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
---

# Nemo: First Glimpse of a New Rule Engine

## One-sentence takeaway

Nemo is a Rust Datalog engine aimed at data-centric analytic rules: declarative Datalog at 10⁵–10⁸ input facts on a laptop, competitive with leading Datalog systems, shipped as free open-source Rust.

## Why it matters here

Rete 042 / TREAT 1004 / FlowLog 1593 / OPS5 155 are the production-rule shelf. The leftover for ano standing triggers and GRID COMMAND rules is a *modern, embeddable Datalog runtime* you can actually run on engine-scale fact tables — not another LLM agent bench. Nemo's reliability+performance framing and Rust implementation make it the actionable successor to try when "if these components line up, fire" outgrows a hand-rolled Rete.

## Key ideas

- **Data-centric analytic Datalog.** Fully declarative dialect aimed at knowledge graphs and ontologies, not a Prolog-with-cuts REPL — closer to TREAT/FlowLog's "rules over a store" than to interactive LP.
- **Laptop-scale 1e5–1e8 facts.** The demo target is reasoning workloads that fit a workstation, matching GRID COMMAND/ano fact volumes better than cluster Datalog.
- **Rust, FOSS.** Written in Rust and released as a free open-source tool — inspectable, embeddable, no JVM/Soufflé toolchain required to start.
- **System demo, not a new match theory.** ICLP 2023 / EPTCS 385 glimpse: use it as a living Rete/TREAT successor to measure, not as a replacement paper for Forgy or Miranker.

## Caveats

arXiv `2308.15897` / EPTCS 385, pp. 333–335 / DOI `10.4204/EPTCS.385.35` (ICLP 2023 system demo). Short demo paper — validate incremental/retract semantics before wiring to a 60 Hz trigger loop. Do not remint Rete 042, TREAT 1004, FlowLog 1593, or OPS5 155. Not an LLM agent framework.

## Links

- arXiv abs: https://arxiv.org/abs/2308.15897
- PDF: https://arxiv.org/pdf/2308.15897
- DOI: https://doi.org/10.4204/EPTCS.385.35
- Open-source Rust: https://github.com/knowsys/nemo
