---
title: "Concurrent Hash Tables: Fast and General?(!)"
authors:
  - "Tobias Maier"
  - "Peter Sanders"
  - "Roman Dementiev"
year: 2016
venue: "arXiv preprint (cs.DS)"
arxiv: "1601.04017"
doi: null
source: "https://arxiv.org/abs/1601.04017"
topics:
  - "concurrent-hash-tables"
  - "lock-free"
  - "linear-probing"
  - "dynamic-growing"
  - "contention"
seed_rank: 2596
seed_batch: "craft-2026-11-15"
reviewed: "2026-11-15"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites: []
see:
  - "207-space-efficient-lock-free-linear-probing-hash-table"
  - "2486-split-ordered-lists-lock-free-extensible-hash-tables"
  - "238-an-efficient-wait-free-resizable-hash-table"
  - "416-robin-hood-hashing"
---

# Concurrent Hash Tables: Fast and General?(!)

## One-sentence takeaway

Start from the simplest possible lock-free table (linear probing, word-sized keys and values, fixed capacity), then add growing and general key types without giving up its speed: the authors show that concurrent growing costs about as much as growing a sequential table, and their tables beat six widely used concurrent hash tables, by an order of magnitude against the general-purpose ones and by up to four orders of magnitude under heavy contention.

## Why it matters here

Anoptic's engine side keeps asking for a shared map that many job threads hit at once: entity IDs to archetype rows, asset handles, interned strings, ano's relational indexes. The usual choices are a sharded mutex map or a library table, and this paper measures how far those sit from a linear-probing baseline, especially when a few keys are hot (exactly what happens when many units in an RTS fight query the same target). It also gives a design order worth copying: get the restricted fast path right first, then pay for each generalisation (growth, big keys, deletion) separately and measure what it costs.

## Key ideas

- **Baseline.** A lock-free open-addressing table with linear probing, limited to word-sized key/value pairs and fixed size. Most of the speed comes from this simple, cache-friendly core.
- **Lifting the limits.** The paper explains how to add dynamic growth and more general key/value types in a provably scalable way, rather than switching to a different, slower structure.
- **Growth is cheap.** Measured overhead of concurrent growing is comparable to the same feature in sequential hash tables.
- **Contention matters most.** Existing libraries fall furthest behind when many threads touch the same elements; that is where the largest gaps (approaching 10,000x) appear.
- **Evaluation.** Head-to-head experiments against six popular concurrent hash tables.

## Caveats

Written from the arXiv abstract and listing; I did not read the full paper or its code this run. The headline gaps are the authors' own benchmarks on their hardware from 2016, and some of the comparison libraries have improved since. Hardware-specific tricks (atomic widths, transactional memory) may not carry over to every target Anoptic cares about. Card 207 is a newer space-efficient variant of the same idea and should be read alongside this one.

## Links

- arXiv abstract: https://arxiv.org/abs/1601.04017
- PDF: https://arxiv.org/pdf/1601.04017
