---
title: "I Wrote a Faster Hash Table"
authors:
  - "Malte Skarupke"
year: 2017
venue: "probablydance.com"
arxiv: null
doi: null
source: "https://probablydance.com/2017/02/26/i-wrote-the-fastest-hashtable/"
topics:
  - hashtable
  - robin-hood
seed_rank: 486
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: open-addressing
cites:
  - title: "Robin Hood Hashing"
    url: "https://cs.uwaterloo.ca/research/tr/1986/CS-86-14.pdf"
    year: 1986
see:
  - "416-robin-hood-hashing"
---

# I Wrote a Faster Hash Table

## One-sentence takeaway

Skarupke's `flat_hash_map` is a robin-hood open-addressing table tuned so probe lengths stay short and the flat array beats node-based `std::unordered_map` on the small-key game/engine workloads he measured.

## Why it matters here

Practical craft notes connecting Celis robin hood to the Swiss-table/F14 era: the blog many engine programmers actually copied before Abseil became the default citation.

## Key ideas

- Robin-hood displacement steals from richer (shorter-probe) occupants so expected probe length stays tight and lookup can early-out.
- Stores entries in a single flat array; no per-node allocation, good for the tiny keys common in games.
- Empirically faster than several then-popular maps on his benchmarks; later conversation partner to Swiss Tables and F14 rather than their parent.
- Engineering blog, February 2017; follow-up posts refine hash quality and tombstone policy.

## Caveats

## Links

- Post: https://probablydance.com/2017/02/26/i-wrote-the-fastest-hashtable/
