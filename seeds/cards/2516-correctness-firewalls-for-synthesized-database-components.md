---
title: "Correctness Firewalls for Synthesized Database Components"
authors:
  - "Mohammad Javad Amiri"
  - "Carsten Binnig"
  - "Andreas Kipf"
  - "Tim Kraska"
  - "Ryan Marcus"
  - "Johannes Wehrstein"
  - "Chenyuan Wu"
  - "Geoffrey X. Yu"
  - "Zijie Zhao"
year: 2026
venue: "arXiv preprint (cs.DB)"
arxiv: "2611.05173"
doi: null
source: "https://arxiv.org/abs/2611.05173"
topics:
  - "typed-programming-systems"
  - "autoresearch-experiment-selection"
seed_rank: 2516
seed_batch: "frontier-2026-11-04"
reviewed: "2026-11-04"
pool: "systems"
relevance_score: 8
cites:
  - title: "Correctness Firewalls for Synthesized Database Components"
    url: "https://arxiv.org/abs/2611.05173"
    year: 2026
    arxiv: "2611.05173"
    doi: null
---

# Correctness Firewalls for Synthesized Database Components

## One-sentence takeaway

Correctness firewalls are design patterns that let agent-synthesized database components change performance but never results, shown in three forms: advisory (cardinality estimation), guarded (search over sorted data, up to 3x faster than learned indexes) and certified (text compression 1.5x smaller than Zstd).

## Why it matters here

As coding agents make bespoke high-performance code cheap, the question becomes where to let it in without inheriting its bugs. The three-way split of advisory, guarded and certified is a reusable pattern for our engine and ano work too: let synthesized kernels choose plans or layouts, check them cheaply, or require a certificate, but keep semantics owned by trusted code.

## Key ideas

- **Advisory.** The synthesized component only gives hints (cardinality estimates); a wrong hint costs speed, not correctness.
- **Guarded.** A cheap check validates each answer (search over sorted data) and falls back on failure.
- **Certified.** The output carries something verifiable (compression must round-trip).
- **Agenda.** Protecting synthesized code, measuring the cost of correctness, and deciding which components fit which firewall.

## Caveats

A vision paper with early experiments; speedups come from three case studies, not a full system. Companion work GenDB-V (2611.02779, near-keeper) goes further with formal proofs.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.05173
- PDF: https://arxiv.org/pdf/2611.05173
