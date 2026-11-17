---
title: "Decoupling Data Layouts from Algebraic Data Types"
authors:
  - "Christophe Gyurgyik"
  - "Alexander J Root"
  - "Benjamin Driscoll"
  - "Gabriel Radanne"
  - "Fredrik Kjolstad"
  - "Clément Pit-Claudel"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.19113"
doi: null
source: "https://arxiv.org/abs/2611.19113"
version_reviewed: "v1"
topics:
  - "data-layout"
  - "algebraic-data-types"
  - "data-oriented-design"
  - "compilers"
  - "rewrite-rules"
seed_rank: 2618
seed_batch: "craft-2026-11-17"
reviewed: "2026-11-17"
pool: "languages"
relevance_score: 9
see:
  - "345-structure-of-arrays-and-data-layout-for-simd"
  - "2557-arknife-retargetable-compilation-for-tensor-kernels-via-a-unified-layout-abstraction"
cites:
  - title: "Decoupling Data Layouts from Algebraic Data Types"
    url: "https://arxiv.org/abs/2611.19113"
    year: 2026
    arxiv: "2611.19113"
    doi: null
---

# Decoupling Data Layouts from Algebraic Data Types

## One-sentence takeaway

Isomer treats an ADT's physical layout as the output of composable, locally proven rewrite rules over a canonical layout (field packing, co-locating fields for vectorization and more), so the layout can be tuned per workload while the source program stays the same.

## Why it matters here

This is the AoS/SoA and bit-packing question that ano's columnar ECS and Anoptic's SoA code answer by hand, stated as a semantics-preserving rewrite system. A local refinement criterion (every value still represented, distinct values kept apart) means each new layout rule is proved on its own. That is a model for letting ano choose component layouts per query without the user rewriting code.

## Key ideas

- **Canonical layout first.** Derive a default layout from the ADT, then transform it with rewrite rules.
- **Local refinement criterion.** A rule is correct if the layout still represents every value and keeps distinct values distinct, so adding a rule needs only a local proof.
- **Compiler specialization.** Isomer, a pure functional language, specializes construction, pattern matching and memory management to the chosen layout.
- **Results.** With default layouts it is competitive with established functional compilers that choose layouts automatically; workload-tailored rewrites go further, reaching representations prior work cannot express without source changes.

## Caveats

Abstract-level read of the v1 preprint (14 Nov 2026); no benchmark numbers in the abstract. Isomer is a pure functional research language; carrying the rules over to an imperative ECS with mutation and aliasing is our extrapolation, not the paper's claim.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.19113
- PDF: https://arxiv.org/pdf/2611.19113
