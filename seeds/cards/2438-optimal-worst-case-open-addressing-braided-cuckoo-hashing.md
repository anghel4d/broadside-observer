---
title: "Optimal Worst-Case Open Addressing: Braided Cuckoo Hashing"
authors:
  - "Andrew Krapivin"
  - "William Kuszmaul"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2610.33229"
doi: null
source: "https://arxiv.org/abs/2610.33229"
topics:
  - "hashing"
  - "open-addressing"
  - "data-structures"
seed_rank: 2438
seed_batch: "craft-2026-10-27"
reviewed: "2026-10-27"
pool: "systems"
lineage: open-addressing
relevance_score: 9
cites:
  - title: "Optimal Worst-Case Open Addressing: Braided Cuckoo Hashing"
    url: "https://arxiv.org/abs/2610.33229"
    year: 2026
    arxiv: "2610.33229"
    doi: null
  - title: "Cuckoo Hashing"
    url: "https://doi.org/10.1016/j.jalgor.2003.12.002"
    year: 2001
    arxiv: null
    doi: "10.1016/j.jalgor.2003.12.002"
see: ["1494-cuckoo-hashing", "207-space-efficient-lock-free-linear-probing-hash-table", "400-hopscotch-hashing", "387-abseil-swiss-tables"]
---

# Optimal Worst-Case Open Addressing: Braided Cuckoo Hashing

## One-sentence takeaway

An open-addressed hash table can run at load factor 1 − ε with queries, inserts and deletes all in worst-case O(log 1/ε) time with high probability, an exponential improvement on insert/delete over earlier cuckoo variants that disproves the Bender–Kuszmaul–Zhou conjecture that query time × insert time must be Ω(1/ε).

## Why it matters here

Our hash tables (ano relations, ECS indices, Anoptic asset maps) want two things at once: very high fill to keep memory and cache footprint small, and no latency spikes on insert during a frame. Classic d-ary or bucketed cuckoo hashing gives the fast lookups but pays poly(1/ε) on inserts as the table fills. This paper says the trade-off was never fundamental: lookup and update can both be logarithmic in 1/ε. It extends the open-addressing lineage (Pagh–Rodler cuckoo, hopscotch, Swiss tables) with a new worst-case bound from the same group behind the 2025 "tiny pointers"/no-reordering results.

## Key ideas

- **Layers and bins, two braided hash functions.** Keys hash to a bin in a layered layout; the second hash function "braids" bins across layers so eviction chains spread out and stay short.
- **Static placement theorem.** A sub-Gaussian overflow analysis (Poissonize, then de-Poissonize) shows a valid placement exists with every key in one of O(log 1/ε) candidate slots.
- **Dynamic placement.** Inserts and deletes run as short eviction chains; a strongly history-independent warm-up version comes first, then a faster weakly history-independent one.
- **Arbitrary load factors.** A frontyard/backyard split handles every ε, with a bound on "bad" mini-structures spilling to the backyard.
- **Deamortized rebuilds** done in place, plus a matching lower bound on insert/delete time.

## Caveats

This is theory: no implementation or benchmarks, whp bounds rather than constants, and a layout that assumes divisibility before the authors remove that assumption. It is not a concurrent table. I read the abstract, the contents and the introduction. The practical question for us is whether the braided layout beats tuned SIMD-probing tables at 90–97% load, which the paper doesn't test.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.33229
- HTML: https://arxiv.org/html/2610.33229
- PDF: https://arxiv.org/pdf/2610.33229
