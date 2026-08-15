---
title: "Ribbon filter: practically smaller than Bloom and Xor"
authors:
- Peter C. Dillinger
- Stefan Walzer
year: 2021
venue: arXiv cs.DS
arxiv: "2103.02515"
doi: 10.48550/arXiv.2103.02515
source: "https://arxiv.org/abs/2103.02515"
topics:
- databases
- contemporary-db
seed_rank: 861
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Space/Time Trade-offs in Hash Coding with Allowable Errors"
    url: "https://doi.org/10.1145/362686.362692"
    year: 1970
    arxiv: null
    doi: "10.1145/362686.362692"
see:
  - "769-space-time-trade-offs-in-hash-coding-with-allowable-errors"
---

# Ribbon filter: practically smaller than Bloom and Xor

## One-sentence takeaway

Ribbon is a static approximate-membership filter built by solving a banded Boolean linear system ("Rapid Incremental Boolean Banding ON the fly"), hitting <10% space overhead vs the information-theoretic floor and often beating Bloom and Xor on speed.

## Why it matters here

Bloom filters sit under every LSM, cache, and GRID COMMAND existence check. Ribbon is the current practical point on the "smaller than Bloom, faster than Xor" curve for static or slowly rebuilt sets (block indexes, chunk skip-lists, agent-id dictionaries).

## Key ideas

- Any filter with false-positive rate f needs ≥ log₂(1/f) bits/key; practical Bloom/Xor filters sit ≥20% above that for larger f. Ribbon's configurable overhead goes below 10%, and a load-balanced experimental variant below 1%.
- Construction is Gaussian elimination on a band-like system over GF(2), but RIBBON resembles hash-table insertion and is faster and more adaptable than Dietzfelbinger–Walzer's earlier solver.
- Homogeneous-system variant plus locality-maximizing layout keep probes in cache; the structure looks like an Xor filter that was told to stay banded.
- Best in the f ≥ 2⁻⁷ regime; RocksDB subsequently shipped a production Ribbon filter.
- Static set: rebuilds, not incremental deletes, are the intended update path.

## Caveats

## Links

- arXiv: [2103.02515](https://arxiv.org/abs/2103.02515)
- PDF: https://arxiv.org/pdf/2103.02515
