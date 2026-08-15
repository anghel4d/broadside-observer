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

Spinellis reports a C-to-Rust reengineering of Unix `sed`, examining memory safety, the abstractions the rewrite forced, and where generative-AI assistance helped or hindered — a single-tool sibling of the uutils coreutils swap.

## Why it matters here

Same Unix-foundations move as coreutils, one tool deep. GRID COMMAND text pipelines live in `sed`-shaped stream edits; this is the experience report for rewriting that substrate rather than wrapping it.

## Key ideas

- IEEE Software 42(5):21–25, 2025. DOI `10.1109/MS.2025.3579008`.
- Port plus design, not a drop-in GNU-sed compatibility study at Ubuntu scale; later Spinellis columns take I/O optimization as a follow-up.
- Safety and abstraction are the claimed wins; generative-AI assistance is treated as a real part of the workflow, with limits.
- uutils cites it as the next-package horizon (diffutils/findutils/sed), not as a competitor.

## Caveats

## Links

- DOI: https://doi.org/10.1109/MS.2025.3579008
