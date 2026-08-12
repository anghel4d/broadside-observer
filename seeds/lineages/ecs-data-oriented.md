# ECS / data-oriented design (`ecs-data-oriented`)

Charter: track the game-industry shift from deep game-object inheritance to **composition**, then to **data-oriented** layout (SoA, cache-aware transforms), and finally to concrete ECS storage machines — archetype chunks, sparse sets, and relationship-aware queries — including one shipped ECS-flavored architecture (Overwatch). This is the thread Anoptic’s simulation store and ano’s relational/query posture must stay honest to: throughput and schema first, objects second.

## Ordered spine

1. **Scott Bilas (2002)** — *A Data-Driven Game Object System* — data-assembled components over C++ hierarchies (`621-a-data-driven-game-object-system-scott-bilas-gdc`).
2. **Mick West (2007)** — *Evolve Your Hierarchy* — component aggregates as the escape from brittle inheritance (`361-evolve-your-hierarchy`).
3. **Adam Martin (2007–)** — T-Machine *Entity Systems…* — entities as IDs, components in tables, systems as transforms (`360-entity-systems-are-the-future-of-mmog-development-t-machine-`).
4. **Tony Albrecht (2009)** — *Pitfalls of Object Oriented Programming* — cache-hostile OOP → DOD cite/card in-thread (`356-pitfalls-of-object-oriented-programming`).
5. **Noel Llopis (2009)** / **Mike Acton (2014)** — DOD essays & CppCon sermon — organize around data transforms (`021-data-oriented-design-or-why-you-might-be-shooting-yourself-i`, `251-data-oriented-design-and-c`).
6. **Bitsquid → Our Machinery** — production data-oriented entity/component engines (`344-bitsquid-data-driven-entity-system-posts`, `403-our-machinery-component-system-data-oriented-engine-notes`).
7. **Unity DOTS / Entities** — industrial archetype chunks + jobs (`404-unity-ecs-dots-architecture-overview-entities-package-docs`, `464-unity-dots-entities-manual`, `393-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt`).
8. **EnTT** — sparse-set pools, views/groups (`398-entt-gaming-meets-modern-c`).
9. **Flecs (+ relationships)** — queries, hierarchies, first-class relationship edges (`334-flecs-a-fast-entity-component-system-for-c99`, `392-flecs-relationships-and-queries`).
10. **Overwatch gameplay architecture (2017)** — shipped ECS-flavored simulation + netcode discipline (`338-overwatch-gameplay-architecture-and-netcode-ecs-flavored`).

Parallel / carrier / pedagogy nodes kept on the same lineage slug: Fabian DOD book, Nystrom Data Locality, Artemis, Ash, Bevy, Legion, relational-ECS readings, and the 2026 “Essence of ECS” paper.

## Cards in this thread

| Order | Role | Card stem | Year |
|------:|------|-----------|-----:|
| 0 | precursor | `621-a-data-driven-game-object-system-scott-bilas-gdc` | 2002 |
| 1 | spine | `361-evolve-your-hierarchy` | 2007 |
| 2 | spine | `360-entity-systems-are-the-future-of-mmog-development-t-machine-` | 2007 |
| 3 | spine-cite | `356-pitfalls-of-object-oriented-programming` | 2009 |
| 4 | parallel | `021-data-oriented-design-or-why-you-might-be-shooting-yourself-i` | 2009 |
| 5 | spine | `251-data-oriented-design-and-c` | 2014 |
| 6 | parallel | `127-category-power-of-ecs-architectures` | 2013 |
| 7 | pedagogy | `622-game-programming-patterns-data-locality` | 2014 |
| 8 | carrier | `623-artemis-entity-system-framework` | 2011 |
| 9 | spine | `344-bitsquid-data-driven-entity-system-posts` | 2013 |
| 10 | spine | `403-our-machinery-component-system-data-oriented-engine-notes` | 2018 |
| 11 | spine | `404-unity-ecs-dots-architecture-overview-entities-package-docs` | 2018 |
| 12 | spine | `464-unity-dots-entities-manual` | 2020 |
| 13 | pattern | `393-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt` | 2020 |
| 14 | spine | `398-entt-gaming-meets-modern-c` | 2019 |
| 15 | spine | `334-flecs-a-fast-entity-component-system-for-c99` | 2019 |
| 16 | spine | `392-flecs-relationships-and-queries` | 2021 |
| 17 | spine | `338-overwatch-gameplay-architecture-and-netcode-ecs-flavored` | 2017 |
| 18 | successor | `394-bevy-ecs-getting-started-design` | 2020 |
| 19 | parallel | `418-a-journey-into-entity-component-systems` | 2012 |
| 20 | successor | `467-legion-ecs-amethyst` | 2019 |
| 21 | bridge | `474-using-relational-databases-for-entity-component-systems` | 2015 |
| 22 | frontier | `200-the-essence-of-entity-component-system` | 2026 |

## Open frontiers / watch next

- **Storage machines vs query languages** — archetype chunk iteration (Unity/Bevy) vs sparse-set random access (EnTT) vs relationship-first graphs (Flecs); Anoptic/ano should keep the *column/query* reading primary and treat scheduler ECS as a foil (`474-using-relational-databases-for-entity-component-systems`, `392-flecs-relationships-and-queries`, `200-the-essence-of-entity-component-system`).
- **Structural change costs** — add/remove component → archetype moves; watch designs that make hot structural churn cheap (or illegal) at scale.
- **Determinism & netcode** — Overwatch-style component simulation under lockstep/rollback constraints; ECS layout must not fight replay.
- **Relationships as data** — Flecs-style edges vs ad-hoc ID fields; important if GRID COMMAND / colony sims encode orbits, ownership, and command graphs relationally.
- **DOD without ECS cosplay** — Acton/Albrecht cache truths still apply when the store is Arrow/kdb+-shaped rather than Unity Entities-shaped.

`seed_batch` for newly minted gap cards: `lineage-ecs-data-oriented-2026-08-13`. Number block reserved in `_pools/lineage_ranges.json`: **621–660**.
