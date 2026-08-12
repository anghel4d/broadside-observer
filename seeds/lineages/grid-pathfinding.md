# Lineage: grid-pathfinding

Charter: grid and navmesh pathfinding still used in RTS/squad games — Dijkstra/A* roots through HPA*, any-angle (Theta*/Lazy Theta*), Jump Point Search and its preprocess/industry variants (Improving JPS, JPS+), plus flow fields and Recast/Detour for 3D navmeshes. Depth 2–3 successors that remain relevant for GRID COMMAND.

## Ordered spine

1. **Dijkstra 1959 / A* 1968** — foundational shortest-path + heuristic search.
2. **HPA* 2004** — hierarchical abstraction for game maps.
3. **Navmesh craft** — Tozour-style navmeshes → Recast/Detour.
4. **Any-angle** — Theta* → Lazy Theta*.
5. **JPS line** — Harabor & Grastien 2011 → Improving JPS 2014 → JPS+ (Rabin/Silva) → modern 4-connected / redundancy reductions.
6. **Subgoal graphs / flow fields** — orthogonal accelerations still shipping in RTS-like contexts.

## Broadside cards in this thread

| Stem | Year | Title |
|------|------|-------|
| `386-a-note-on-two-problems-in-connexion-with-graphs-dijkstra` | 1959 | A Note on Two Problems in Connexion with Graphs (Dijkstra) |
| `262-a-formal-basis-for-the-heuristic-determination-of-minimum-co` | 1968 | A Formal Basis for the Heuristic Determination of Minimum Cost Paths |
| `378-simplified-3d-movement-and-pathfinding-using-navigation-mesh` | 2000 | Simplified 3D Movement and Pathfinding Using Navigation Meshes |
| `370-near-optimal-hierarchical-pathfinding-hpa` | 2004 | Near Optimal Hierarchical Pathfinding (HPA*) |
| `435-theta-any-angle-path-planning-on-grids` | 2007 | Theta*: Any-Angle Path Planning on Grids |
| `357-recast-navigation-detour` | 2009 | Recast Navigation / Detour |
| `355-understanding-goal-based-vector-field-flow-field-pathfinding` | 2010 | Understanding Goal-Based Vector Field / Flow Field Pathfinding |
| `429-lazy-theta-any-angle-path-planning-and-path-length-analysis` | 2010 | Lazy Theta*: Any-Angle Path Planning and Path Length Analysis |
| `253-online-graph-pruning-for-pathfinding-on-grid-maps` | 2011 | Online Graph Pruning for Pathfinding on Grid Maps |
| `342-improving-jump-point-search` | 2014 | Improving Jump Point Search |
| `411-subgoal-graphs-for-optimal-pathfinding` | 2015 | Subgoal Graphs for Optimal Pathfinding |
| `701-jps-plus-extreme-a-star-speed-optimization-static-grids` | 2015 | JPS+: An Extreme A* Speed Optimization for Static Uniform Cost Grids |
| `298-reducing-redundant-work-in-jump-point-search` | 2023 | Reducing Redundant Work in Jump Point Search |
| `271-jump-point-search-pathfinding-in-4-connected-grids` | 2025 | Jump Point Search Pathfinding in 4-connected Grids |

**14** cards. Batch `lineage-shallow-2026-08-13`.

## Open frontiers

- Dynamic/destructible grids with cheap JPS+ invalidation.
- Hybrid JPS + flow-field for many-agent RTS pathing.
- Navmesh + grid dual representations for mixed indoor/outdoor maps.

## Batch

`lineage-shallow-2026-08-13` (medium thread; mints in 701–850).
