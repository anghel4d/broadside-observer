---
title: "Rewriting the Unix Stream Editor in Rust"
authors:
  - "Diomidis Spinellis"
year: 2025
venue: "IEEE Software"
arxiv: null
doi: "10.1109/MS.2025.3579008"
source: "https://doi.org/10.1109/MS.2025.3579008"
topics:
  - "sed"
  - "rust"
  - "rewrite"
  - "unix"
seed_rank: 972
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: unix-foundations
cites:
  - title: "Evolution of the Unix System Architecture: An Exploratory Case Study"
    url: "https://doi.org/10.1109/TSE.2019.2892146"
    year: 2021
    doi: "10.1109/TSE.2019.2892146"
see:
  - "973-evolution-of-the-unix-system-architecture"
---

# Rewriting the Unix Stream Editor in Rust

## One-sentence takeaway

A C-to-Rust reengineering of Unix `sed`, examining safety, abstractions, and generative-AI assistance — the sibling rewrite uutils is now targeting (diffutils/findutils/sed).

## Why it matters here

Same Unix-foundations move as coreutils, one tool deep. GRID COMMAND text pipelines live here.

## Key ideas

- IEEE Software 42(5):21–25, 2025. DOI `10.1109/MS.2025.3579008`.
- Port + design + later I/O-optimization columns (Spinellis 2025 follow-ups).
- uutils cites it as the next-package horizon, not as a competitor.

## Caveats

- Single-tool experience report, not a drop-in GNU sed compatibility study at Ubuntu scale.

## Links

- DOI: https://doi.org/10.1109/MS.2025.3579008
