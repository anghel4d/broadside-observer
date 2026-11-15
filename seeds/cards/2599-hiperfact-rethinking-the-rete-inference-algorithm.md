---
title: "Hiperfact: In-Memory High Performance Fact Processing — Rethinking the Rete Inference Algorithm"
authors:
  - "Conrad Indiono"
  - "Stefanie Rinderle-Ma"
year: 2020
venue: "arXiv preprint (cs.DB)"
arxiv: "2012.02710"
doi: null
source: "https://arxiv.org/abs/2012.02710"
topics:
  - "rete"
  - "rule-engines"
  - "forward-chaining"
  - "join-ordering"
  - "cache-efficiency"
seed_rank: 2599
seed_batch: "craft-2026-11-15"
reviewed: "2026-11-15"
pool: "languages"
relevance_score: 7
lineage: production-systems
cites: []
see:
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "155-ops5-user-s-manual"
  - "2582-deriving-production-rules-for-incremental-view-maintenance"
---

# Hiperfact: In-Memory High Performance Fact Processing — Rethinking the Rete Inference Algorithm

## One-sentence takeaway

Rete caches every intermediate join, evaluates every rule whether needed or not, leaves join order undefined and chases pointers through its network; Hiperfact replaces those with cache-efficient fact and join-result storage, "island" fact processing that picks join order to keep intermediate results small, and derivation trees that allow parallel read/write access and lazy rule evaluation.

## Why it matters here

Forgy's Rete (card 042) and OPS5 (card 155) are the ancestors of the trigger and rule layer planned for ano and GRID COMMAND's unit AI. This paper is a data-oriented critique of Rete in exactly the terms Anoptic uses: memory traffic, pointer chasing, join order and lazy evaluation. Its four complaints are a ready checklist for any columnar rule engine, and its answers (flat fact indexes, explicit join ordering, evaluate only what a query needs) line up with ano's SoA tables and relational hops.

## Key ideas

- **Four problems with Rete.** Caching all intermediate join results; processing all rules regardless of need (forward inference); no defined join order for rules and conditions; pointer chasing through the network, which wastes CPU caches.
- **Cache-efficient storage.** Data structures chosen for cache efficiency at the primary fact index and intermediate join result levels.
- **Island fact processing.** Determines join order so that minimal intermediate join results get built.
- **Derivation trees.** Allow parallel read/write access and lazy rule evaluation.
- **Evaluation.** The prototype engine improves both inference and query performance and is compared with existing engines on a comprehensive benchmark.

## Caveats

Written from the abstract; I did not read the benchmark tables, so I cannot say which engines it beat or by how much. Lazy, query-driven evaluation trades away some of Rete's strengths for always-on triggers that must fire immediately, which is what a game tick usually wants; the right split for ano is still open. Single-group academic prototype; check for later versions before building on it.

## Links

- arXiv abstract: https://arxiv.org/abs/2012.02710
- PDF: https://arxiv.org/pdf/2012.02710
