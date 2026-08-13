---
title: "Exploring the Theory and Practice of Concurrency in the Entity-Component-System Pattern"
authors:
  - "Patrick Redmond"
  - "Jonathan Castello"
  - "Jos\u00e9 Manuel Calder\u00f3n Trilla"
  - "Lindsey Kuper"
year: 2025
venue: "PACMPL OOPSLA2"
arxiv: "2508.15264"
doi: "10.1145/3763050"
source: "https://arxiv.org/abs/2508.15264"
topics:
  - ecs-data-oriented-simulation
  - lockfree-game-parallelism
seed_rank: 2
seed_batch: "craft-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
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
  - title: "Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP)"
    url: "https://gamesfromwithin.com/data-oriented-design"
    year: 2009
    arxiv: null
    doi: null
  - title: "Overwatch Gameplay Architecture and Netcode"
    url: "https://www.gdcvault.com/play/1024001/-Overwatch-Gameplay-Architecture-and"
    year: 2017
    arxiv: null
    doi: null
see:
  - "200-the-essence-of-entity-component-system"
  - "334-flecs-a-fast-entity-component-system-for-c99"
  - "021-data-oriented-design-or-why-you-might-be-shooting-yourself-i"
  - "338-overwatch-gameplay-architecture-and-netcode-ecs-flavored"
---

# Exploring the Theory and Practice of Concurrency in the Entity-Component-System Pattern

## One-sentence takeaway

Core ECS: a formal model that shows a class of ECS programs is deterministic-by-construction under any schedule — and that shipped frameworks leave that concurrency on the table.

## Why it matters here

This is the concurrency paper the Anoptic store and ano standing-rules loop have been waiting for. Essence-of-ECS (card 200) formalizes archetype *layout*; Redmond/Kuper formalize *scheduling*. GRID COMMAND wants deterministic barriers plus overlapping systems on disjoint component sets — Core ECS names the exact class of programs where that is safe without a global lock, and audits Flecs/Bevy/Unity-class frameworks for the determinism they currently forfeit.

## Key ideas

- Core ECS abstracts identity / components / systems away from any one engine so the pattern can be reasoned about.
- A characterized subclass is deterministic regardless of scheduler: the ECS pattern *is* a concurrent programming model, not just a packed SoA.
- Survey of real frameworks: all of them leave deterministic concurrency unexploited (over-serializing systems that commute).
- Points at new implementation techniques — permission/disjointness at the query level — rather than “just add a job graph.”
- Extended version with appendices on arXiv; PACMPL OOPSLA 2025 is the archival cite.

## Caveats

- Formal model, not a drop-in scheduler. Do not cite as “Flecs is nondeterministic so throw it out.”
- Determinism claims are for the Core ECS fragment; structural mutation, commands, and network I/O still need explicit barriers (ano already has those).
- Complements, does not replace, card 200 (archetype semantics).

## Links

- arXiv: [2508.15264](https://arxiv.org/abs/2508.15264)
- PDF: https://arxiv.org/pdf/2508.15264
- DOI: [10.1145/3763050](https://doi.org/10.1145/3763050)
