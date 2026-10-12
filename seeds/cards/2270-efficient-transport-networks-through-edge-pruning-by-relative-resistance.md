---
title: "Efficient Transport Networks through Edge Pruning by Relative Resistance"
authors:
  - "Mathieu Le Verge-Serandour"
  - "Viktor Vasilev"
  - "Lara Szeimies"
  - "Karen Alim"
year: 2026
venue: "arXiv"
arxiv: "2610.13582"
doi: null
source: "https://arxiv.org/abs/2610.13582"
topics:
  - "transport-networks"
  - "physarum"
  - "self-organization"
  - "network-design"
seed_rank: 2270
seed_batch: "curiosity-2026-10-13"
reviewed: "2026-10-13"
pool: "physics"
relevance_score: 7
cites:
  - title: "Efficient Transport Networks through Edge Pruning by Relative Resistance"
    url: "https://arxiv.org/abs/2610.13582"
    year: 2026
    arxiv: "2610.13582"
    doi: null
see: ["1851-migrating-cell-clusters-as-active-droplets"]
---

# Efficient Transport Networks through Edge Pruning by Relative Resistance

## One-sentence takeaway

Repeatedly pruning the edge whose own resistance exceeds the resistance of routing its flow through the rest of the network, a purely local and topological rule, yields sparse, loop-rich, low-dissipation transport networks without any global objective or boundary conditions.

## Why it's lovely

Slime moulds and leaf veins build good networks without knowing where the sources and sinks will be, and this gives a tiny rule that captures some of that: compare an edge to its parallel detour and cut it if the detour is cheaper. The result keeps loops, which is what makes biological networks robust to damage, unlike plain minimum spanning trees. It is an easy rule to try for emergent road or supply networks in an RTS, or for thinning a navigation graph while keeping alternate routes.

## Key ideas

- **Relative resistance.** An edge's redundancy is its resistance compared with the effective resistance between its endpoints through the rest of the network.
- **Sequential pruning.** Edges whose resistance exceeds that detour resistance are removed one after another.
- **No objective, no boundary conditions.** The measure depends on topology alone, not on a chosen source/sink pattern or a global cost.
- **Outcome.** The resulting networks are sparse, rich in loops and dissipate little energy.

## Caveats

Preprint (Oct 2026); the abstract gives qualitative outcomes, and comparisons with classical adaptation models (e.g. Physarum-style conductance updates) need the full paper. The cost of recomputing effective resistances on large graphs is not addressed in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.13582
- PDF: https://arxiv.org/pdf/2610.13582
