---
title: "Run-time Performance Comparison of Sparse-set and Archetype Entity-Component Systems"
authors: ["Louis Cox", "Benjamin Williams", "James Vickers", "Davin Ward", "Christopher Headleand"]
year: 2025
venue: "EG UK Computer Graphics & Visual Computing (CGVC) 2025"
arxiv: null
doi: "10.2312/cgvc.20251224"
source: "https://diglib.eg.org/items/6e291ae6-e32c-4c21-a89b-021fd9986ede"
topics: [ecs-data-oriented-simulation, relational-ecs-queries]
seed_rank: 1559
seed_batch: "craft-2026-09-03"
reviewed: "2026-09-03"
pool: "engines"
relevance_score: 10
lineage: ecs-data-oriented
cites:
  - title: "The Essence of Entity Component System"
    url: "https://arxiv.org/abs/2606.14919"
    year: 2026
    arxiv: "2606.14919"
    doi: "10.1145/3748522.3779910"
  - title: "Flecs: A Fast Entity Component System for C99"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
  - title: "EnTT: Gaming meets modern C++"
    url: "https://skypjack.github.io/2019-02-14-ecs-baf-part-1/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "172-the-essence-of-entity-component-system"
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "314-flecs-relationships-and-queries"
---

# Run-time Performance Comparison of Sparse-set and Archetype Entity-Component Systems

## One-sentence takeaway

Controlled C++20 Game-of-Life benchmarks show archetypes win large-N iteration (e.g. 50k entities: median 7.41 ms vs sparse-set 13.82 ms) while sparse-sets instantiate entities ~6.6× faster — pick the layout for the workload, don’t cargo-cult one ECS.

## Why it matters here

Anoptic is a C/Vulkan ECS 4X/RTS engine (Flecs-shaped archetype queries already in library 260/314; Essence 172 formalizes archetypes). This paper is the missing apples-to-apples sparse-set (EnTT-style) vs archetype bakeoff last Craft listed as an unread reject — PDF now open (Staffs eprints + EG diglib). Decide this week whether composition-churn systems stay sparse-set and sim ticks stay archetype, or commit to Flecs archetypes with deferred structural changes.

## Key ideas

- **Purpose-built minimal C++20 prototypes**, not a Flecs-vs-EnTT library bakeoff. Conway Game of Life at **100 / 1k / 10k / 50k** entities.
- **Iteration.** Frame-latency medians nearly tied at ≤**1k**. Archetype clearly faster at **10k** (**1.721** vs **2.945** ms) and **50k** (**7.410** vs **13.819** ms).
- **Instantiation.** Sparse-set entity instantiation averages **6.6×** faster — the structural-change side of the same tradeoff.
- **Open code + venue.** https://github.com/StaffsUniGames/cgvc25-ecs-comparison ; CGVC 2025 DOI `10.2312/cgvc.20251224`; PDF https://eprints.staffs.ac.uk/9315/1/cgvc20251224.pdf

## Caveats

Single-threaded GoL microbench ≠ a full Anoptic frame (rendering, jobs, networking). Custom prototypes ≠ Flecs/EnTT production. Last Craft deferred this as a reject — minting now that the PDF is readable. Do not remint Essence 172 / Flecs 260.

## Links

- EG Diglib: https://diglib.eg.org/items/6e291ae6-e32c-4c21-a89b-021fd9986ede
- Staffs PDF: https://eprints.staffs.ac.uk/9315/1/cgvc20251224.pdf
- DOI: https://doi.org/10.2312/cgvc.20251224
- Code: https://github.com/StaffsUniGames/cgvc25-ecs-comparison
