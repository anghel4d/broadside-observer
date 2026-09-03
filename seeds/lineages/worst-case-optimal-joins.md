# worst-case-optimal-joins

**Charter.** Size bounds and algorithms for multiway relational joins whose runtime matches (or is governed by) the AGM fractional-edge-cover bound and its degree-aware / information-theoretic strengthenings. Engines that ship those algorithms (tries, hash-tries, COLT, SIMD intersections) live here when the contribution is the join, not the buffer manager. Prefer this lineage over `contemporary-databases` for the WCOJ thread; cite Umbra-the-system (821) in `contemporary-databases` and this lineage for Umbra's WCOJ operator.

## Ordered spine

1. **Size bound** — Atserias–Grohe–Marx (FOCS 2008 / SICOMP 2013): |Q| ≤ |D|^{ρ*}.
2. **First algorithms** — NPRR Generic Join; Leapfrog Triejoin (LogicBlox). Bibliography, not cards in this mint.
3. **FAQ / aggregates** — InsideOut variable elimination with WCOJ bags (PODS 2016).
4. **Engines** — EmptyHeaded (GHDs + SIMD tries); Umbra hash-trie WCOJ; Free Join (COLT, unify binary and WCOJ).
5. **Beyond AGM** — PANDA / submodular width / degree constraints; factorized representation.

## Cards in this mint (`user-agm-wcoj-2026-09-03`)

| Rank | Year | Title | Stem |
|-----:|-----:|-------|------|
| 1550 | 2013 | Size Bounds and Query Plans for Relational Joins | `1550-size-bounds-and-query-plans-for-relational-joins` |
| 1551 | 2016 | FAQ: Questions Asked Frequently | `1551-faq-questions-asked-frequently` |
| 1552 | 2017 | EmptyHeaded: A Relational Engine for Graph Processing | `1552-emptyheaded-a-relational-engine-for-graph-processing` |
| 1553 | 2020 | Adopting Worst-Case Optimal Joins in Relational Database Systems | `1553-adopting-worst-case-optimal-joins-in-relational-database-systems` |
| 1554 | 2023 | Free Join: Unifying Worst-Case Optimal and Traditional Joins | `1554-free-join-unifying-worst-case-optimal-and-traditional-joins` |
| 1555 | 2017 | What Do Shannon-type Inequalities, Submodular Width, and Disjunctive Datalog Have to Do with One Another? | `1555-what-do-shannon-type-inequalities-submodular-width-and-disjunctive-datal` |

## Open frontiers

- Degree-aware Free Join / COLT on disk
- WCOJ over archetype-chunked ECS storage (the Anoptic case)
- Shipping PANDA-style proof-to-plan inside a compiled engine rather than as a theory algorithm
