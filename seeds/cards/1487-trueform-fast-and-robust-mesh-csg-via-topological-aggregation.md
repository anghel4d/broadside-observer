---
title: "trueform: Fast And Robust Mesh CSG Via Topological Aggregation"
authors: ["Žiga Sajovic", "Dejan Knez"]
year: 2026
venue: "arXiv:cs.CG"
arxiv: "2607.15905"
doi: null
source: "https://arxiv.org/abs/2607.15905"
topics: [mesh-shaders-gpu-driven]
seed_rank: 1487
seed_batch: "craft-2026-09-01"
reviewed: "2026-09-01"
pool: "graphics"
relevance_score: 10
lineage: procedural-content-codegen
cites:
  - title: "Exact Predicates, Exact Constructions and Combinatorics for Mesh CSG"
    url: "https://arxiv.org/abs/2405.12949"
    year: 2025
    arxiv: "2405.12949"
    doi: "10.1145/3744642"
  - title: "EMBER: Exact Mesh Booleans via Efficient & Robust Local Arrangements"
    url: "https://doi.org/10.1145/3528223.3530181"
    year: 2022
    arxiv: null
    doi: "10.1145/3528223.3530181"
  - title: "Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates"
    url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    year: 1997
    arxiv: null
    doi: null
see:
  - "1092-exact-predicates-exact-constructions-combinatorics-mesh-csg"
---

# trueform: Fast And Robust Mesh CSG Via Topological Aggregation

## One-sentence takeaway

Header-only C++ mesh CSG that keeps topology exact with integer-exact predicates and majority-vote aggregation, never exact constructions: one local arrangement, then any N-ary boolean is a per-domain bit test.

## Why it matters here

Curiosity left trueform unread as a card because it is Craft-shaped. GRID COMMAND's procedural world is CSG-shaped (boolean terrain, bases, destructible volumes). Lévy 1092 is the CPU-exact companion with expansions/MPFR plus a Weiler 3-map; this is the leftover that refuses chained constructions. Contacts are classified on a bounded integer ladder, radial order is decided on original input planes, and materialisation disagreements are votes inside a topological unit — then N-ary booleans, open sheets, and interactive browser queries read the same build. Steal the split (pay the arrangement once) and the vote, not a second exact kernel.

## Key ideas

- **Exact without exact constructions.** Input floats snap to an integer grid. Predicates promote a fixed ladder (32→64→128 or 64→128→256 bits) that closes after T2; every predicate is degree ≤ 3. Pairwise contacts are one of five simplex types (VV, VE, VF, EE, EF) decided before any point is built. Simulation of Simplicity is excluded: intended coplanarity must survive.
- **Local arrangement, implicit graph.** Each cut face is arranged in its own plane. A two-level identity (topological name by the primitives that meet, plus geometric merge when distinct names land on one grid cell) keeps faces consistent with no global structure and no half-edge Weiler map. Radial order around a constructed edge uses exact signs on the original planes — the constructed edge lies in every incident plane, so materialised coordinates never enter the comparison.
- **Topological aggregation.** Where a 3D decision spans faces, disagreeing `orient3d` observations are a weighted-majority vote inside the unit (component, nesting relation, or domain). Ambiguous votes are skipped; seedless domains fall back to SoS-perturbed segment-casting on the same integer kernel.
- **One build, many booleans.** Classification writes per-domain operand-inclusion bitvectors. Union/intersection/difference of any arity — including declared *sheets* (oriented open surfaces) — is a bit test, then selected sub-faces are Delaunay-triangulated. Figure 1's 201-operand sphere∪200-bunnies (22 M input triangles) is one arrangement in 0.5 s. On 1000 Thingi10K pairs (100k–1M triangles/operand, Apple M4 Max) trueform is fastest on every pair: median 15.7 ms, 10.4× EMBER, 7.6× Manifold, 100× Geogram, all 1000/1000 watertight.

## Caveats

Header-only C++17 with Python (nanobind) and TypeScript/WASM bindings; academic/research licence on the project page, not a drop-in GPU mesh-shader path. Convex polygons are the input scope (fan-triangulated online). Not a remint of Lévy 1092 — cite it as the exact-construction competitor. Do not remint EMBER.

## Links

- arXiv: [2607.15905](https://arxiv.org/abs/2607.15905)
- PDF: https://arxiv.org/pdf/2607.15905
- Project: https://trueform.polydera.com/cpp/modules/csg
