# ECS / data-oriented design (`ecs-data-oriented`)

Charter: track the game-industry shift from deep game-object inheritance to **composition**, then to **data-oriented** layout (SoA, cache-aware transforms), and finally to concrete ECS storage machines — archetype chunks, sparse sets, and relationship-aware queries — including one shipped ECS-flavored architecture (Overwatch). This is the thread Anoptic’s simulation store and ano’s relational/query posture must stay honest to: throughput and schema first, objects second.

## Ordered spine

1. **Scott Bilas (2002)** — *A Data-Driven Game Object System* — data-assembled components over C++ hierarchies (`447-a-data-driven-game-object-system-scott-bilas-gdc`).
2. **Mick West (2007)** — *Evolve Your Hierarchy* — component aggregates as the escape from brittle inheritance (`285-evolve-your-hierarchy`).
3. **Adam Martin (2007–)** — T-Machine *Entity Systems…* — entities as IDs, components in tables, systems as transforms (`284-entity-systems-are-the-future-of-mmog-development-t-machine-`).
4. **Tony Albrecht (2009)** — *Pitfalls of Object Oriented Programming* — cache-hostile OOP → DOD cite/card in-thread (`280-pitfalls-of-object-oriented-programming`).
5. **Noel Llopis (2009)** / **Mike Acton (2014)** — DOD essays & CppCon sermon — organize around data transforms (`020-data-oriented-design-or-why-you-might-be-shooting-yourself-i`, `194-data-oriented-design-and-c`).
6. **Bitsquid → Our Machinery** — production data-oriented entity/component engines (`268-bitsquid-data-driven-entity-system-posts`, `324-our-machinery-component-system-data-oriented-engine-notes`).
7. **Unity DOTS / Entities** — industrial archetype chunks + jobs (`325-unity-ecs-dots-architecture-overview-entities-package-docs`, `383-unity-dots-entities-manual`, `315-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt`).
8. **EnTT** — sparse-set pools, views/groups (`319-entt-gaming-meets-modern-c`).
9. **Flecs (+ relationships)** — queries, hierarchies, first-class relationship edges (`260-flecs-a-fast-entity-component-system-for-c99`, `314-flecs-relationships-and-queries`).
10. **Overwatch gameplay architecture (2017)** — shipped ECS-flavored simulation + netcode discipline (`263-overwatch-gameplay-architecture-and-netcode-ecs-flavored`).

Parallel / carrier / pedagogy nodes kept on the same lineage slug: Fabian DOD book, Nystrom Data Locality, Artemis, Ash, Bevy, Legion, relational-ECS readings, and the 2026 “Essence of ECS” paper.

## Cards in this thread

| Order | Role | Card stem | Year |
|------:|------|-----------|-----:|
| 0 | precursor | `447-a-data-driven-game-object-system-scott-bilas-gdc` | 2002 |
| 1 | spine | `285-evolve-your-hierarchy` | 2007 |
| 2 | spine | `284-entity-systems-are-the-future-of-mmog-development-t-machine-` | 2007 |
| 3 | spine-cite | `280-pitfalls-of-object-oriented-programming` | 2009 |
| 4 | parallel | `020-data-oriented-design-or-why-you-might-be-shooting-yourself-i` | 2009 |
| 5 | spine | `194-data-oriented-design-and-c` | 2014 |
| 6 | parallel | `111-category-power-of-ecs-architectures` | 2013 |
| 7 | pedagogy | `448-game-programming-patterns-data-locality` | 2014 |
| 8 | carrier | `449-artemis-entity-system-framework` | 2011 |
| 9 | spine | `268-bitsquid-data-driven-entity-system-posts` | 2013 |
| 10 | spine | `324-our-machinery-component-system-data-oriented-engine-notes` | 2018 |
| 10 | spine | `325-unity-ecs-dots-architecture-overview-entities-package-docs` | 2018 |
| 11 | spine | `383-unity-dots-entities-manual` | 2020 |
| 12 | pattern | `315-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt` | 2020 |
| 13 | spine | `319-entt-gaming-meets-modern-c` | 2019 |
| 14 | spine | `260-flecs-a-fast-entity-component-system-for-c99` | 2019 |
| 15 | spine | `314-flecs-relationships-and-queries` | 2021 |
| 16 | spine | `263-overwatch-gameplay-architecture-and-netcode-ecs-flavored` | 2017 |
| 17 | successor | `316-bevy-ecs-getting-started-design` | 2020 |
| 18 | parallel | `339-a-journey-into-entity-component-systems` | 2012 |
| 19 | successor | `385-legion-ecs-amethyst` | 2019 |
| 20 | bridge | `391-using-relational-databases-for-entity-component-systems` | 2015 |
| 21 | frontier | `172-the-essence-of-entity-component-system` | 2026 |
| 22 | bakeoff | `1559-run-time-performance-comparison-of-sparse-set-and-archetype-ecs` | 2025 |

## Open frontiers / watch next

- **Storage machines vs query languages** — archetype chunk iteration (Unity/Bevy) vs sparse-set random access (EnTT) vs relationship-first graphs (Flecs); Anoptic/ano should keep the *column/query* reading primary and treat scheduler ECS as a foil (`391-using-relational-databases-for-entity-component-systems`, `314-flecs-relationships-and-queries`, `172-the-essence-of-entity-component-system`). CGVC 2025 bakeoff `1559-run-time-performance-comparison-of-sparse-set-and-archetype-ecs` is the apples-to-apples C++20 GoL number.
- **Structural change costs** — add/remove component → archetype moves; watch designs that make hot structural churn cheap (or illegal) at scale.
- **Determinism & netcode** — Overwatch-style component simulation under lockstep/rollback constraints; ECS layout must not fight replay.
- **Relationships as data** — Flecs-style edges vs ad-hoc ID fields; important if GRID COMMAND / colony sims encode orbits, ownership, and command graphs relationally.
- **DOD without ECS cosplay** — Acton/Albrecht cache truths still apply when the store is Arrow/kdb+-shaped rather than Unity Entities-shaped.

`seed_batch` for newly minted gap cards: `lineage-ecs-data-oriented-2026-08-13`. Number block reserved: **447–449**.
