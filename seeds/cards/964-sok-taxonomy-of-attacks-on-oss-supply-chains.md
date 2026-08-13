---
title: "SoK: Taxonomy of Attacks on Open-Source Software Supply Chains"
authors:
  - "Piergiorgio Ladisa"
  - "Henrik Plate"
  - "Matias Martinez"
  - "Olivier Barais"
year: 2023
venue: "IEEE S&P"
arxiv: "2204.04008"
doi: "10.1109/SP46215.2023.00010"
source: "https://arxiv.org/abs/2204.04008"
topics:
  - "supply-chain"
  - "oss"
  - "sok"
seed_rank: 964
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: unix-foundations
cites:
  []
---

# SoK: Taxonomy of Attacks on Open-Source Software Supply Chains

## One-sentence takeaway

107-vector attack tree on OSS supply chains (code → package distribution), linked to 94 incidents and 33 safeguards — the risk model behind uutils' ×33 crate leverage.

## Why it matters here

Why Anoptic should not swallow 110 crates blindly. The uutils paper cites this as the cost of P3 (no NIH).

## Key ideas

- IEEE S&P 2023; arXiv:2204.04008. DOI `10.1109/SP46215.2023.00010`.
- Language/ecosystem-agnostic; expert + developer surveys validate the taxonomy.
- uutils: 8 direct → 110 runtime crates (213 with dev). This SoK is the named risk.

## Caveats

- Taxonomy, not a uutils audit. Does not measure Cargo specifically.

## Links

- arXiv: [2204.04008](https://arxiv.org/abs/2204.04008)
- DOI: https://doi.org/10.1109/SP46215.2023.00010
