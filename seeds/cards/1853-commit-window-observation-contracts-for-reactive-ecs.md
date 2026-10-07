---
title: "Commit-Window Observation Contracts for Reactive Entity-Component Systems"
authors: ["Tomoyuki Aotani", "Tetsuo Kamina"]
year: 2026
venue: "PACMPL 10(OOPSLA2), Article 335 (SPLASH/OOPSLA 2026)"
arxiv: null
doi: "10.1145/3839467"
source: "https://doi.org/10.1145/3839467"
topics: [ecs, reactive-queries, observers, change-detection, operational-semantics]
seed_rank: 1853
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "engines"
relevance_score: 10
lineage: ecs-data-oriented
cites:
  - title: "Flecs: A Fast Entity Component System for C99"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
  - title: "The Essence of Entity Component System"
    url: "https://arxiv.org/abs/2606.14919"
    year: 2026
    arxiv: "2606.14919"
    doi: "10.1145/3748522.3779910"
  - title: "Exploring the Theory and Practice of Concurrency in the Entity-Component-System Pattern"
    url: "https://arxiv.org/abs/2508.15264"
    year: 2025
    arxiv: "2508.15264"
    doi: "10.1145/3763050"
see:
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "314-flecs-relationships-and-queries"
  - "172-the-essence-of-entity-component-system"
  - "920-exploring-concurrency-in-the-entity-component-system-pattern"
---

# Commit-Window Observation Contracts for Reactive Entity-Component Systems

## One-sentence takeaway

Aotani–Kamina give reactive ECS runtimes (OnAdd/OnSet/OnRemove events, Changed filters, continuous queries) a Rocq-mechanized contract: within one commit window observers are order-insensitive and see at most one net-effect delta per cell, which is exactly what licenses coalescing, reordering write-disjoint updates, caching query membership, and iterating to quiescence.

## Why it matters here

Anoptic's ECS and ano's standing triggers both want "rerun only where data changed". The library already has the storage side (Flecs 260/314, Essence 172, sparse-set vs archetype 1559) and the concurrency side (920), but nothing that says when it is *legal* to coalesce Add;Set or Rem;Add, reorder systems inside a frame, or cache a query's member set. This paper is that spec, stated over exactly the OnAdd/OnSet/OnRemove + continuous-query surface Flecs-style runtimes expose. It tells us what a frame's commit window must promise before we wire observers into GRID COMMAND gameplay rules.

## Key ideas

- **Two-tier notification.** An *eventful* commit emits a sequential per-operation trace; a *net-effect* commit emits a per-cell delta (at most one event per cell per window). A coalescing refinement plus a forward simulation connects the two.
- **Windowed contract.** Observers are order-insensitive within a commit window; `Changed` is a dirty-by-write post-membership filter, not a semantic-equality test, so a write of the same value still counts.
- **Schedule independence.** Under write-disjointness (patches share no cells), any interleaving inside the window yields the same post-store and the same delta up to permutation.
- **Continuous-query cache.** Correctness lemmas for Added/Removed/Changed deltas, plus a version/filter alignment theorem exposing a once-per-window version bump for touched entities and cells.
- **Bounded quiescence.** A fuel-bounded loop for reactions that trigger further writes, and a reusable all-dirty scan-closure schema with explicit round-refinement and stability obligations.

## Caveats

Formal semantics, not a runtime or benchmark: it does not tell you how fast Flecs observers are. The windowed contract deliberately gives up per-operation ordering inside a frame, so gameplay logic that depends on Add-then-Set ordering must use the eventful tier. Read via the ACM abstract, SPLASH page and supplementary appendix; ACM PDF was not fetchable from the box. Do not remint Flecs 260/314, Essence 172, 920, 1559, relational ECS 391.

## Links

- DOI: https://doi.org/10.1145/3839467
- ACM PDF: https://dl.acm.org/doi/pdf/10.1145/3839467
- SPLASH/OOPSLA 2026 page: https://2026.splashcon.org/details/oopsla-2026/93/Commit-Window-Observation-Contracts-for-Reactive-Entity-Component-Systems
