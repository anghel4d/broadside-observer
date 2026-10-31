---
title: "Witnessed Boolean Contracts: Sound Local Distance Guarantees for Approximate Implicit CSG"
authors:
  - "Jeremy Pei"
year: 2026
venue: "arXiv preprint (cs.CG)"
arxiv: "2610.39650"
doi: null
source: "https://arxiv.org/abs/2610.39650"
topics:
  - "signed-distance-fields"
  - "implicit-csg"
  - "certified-geometry"
seed_rank: 2477
seed_batch: "craft-2026-10-31"
reviewed: "2026-10-31"
pool: "graphics"
lineage: procedural-content-codegen
relevance_score: 7
cites:
  - title: "Witnessed Boolean Contracts: Sound Local Distance Guarantees for Approximate Implicit CSG"
    url: "https://arxiv.org/abs/2610.39650"
    year: 2026
    arxiv: "2610.39650"
    doi: null
see: ["1092-exact-predicates-exact-constructions-combinatorics-mesh-csg", "1487-trueform-fast-and-robust-mesh-csg-via-topological-aggregation", "2373-real-time-collision-handling-for-sdfs-via-caching-and-importance-sampling", "257-signed-distance-fields-dynamic-diffuse-global-illumination"]
---

# Witnessed Boolean Contracts: Sound Local Distance Guarantees for Approximate Implicit CSG

## One-sentence takeaway

min/max unions of SDFs keep the sign but not the distance, and no value-only tolerance can fix that; a per-sample "witness" check on values, gradients, reach, branch separation and a visibility margin either certifies a true boundary point with a bounded distance error or honestly returns Unknown.

## Why it matters here

Anoptic leans on SDFs for text, GI probes, collision and sphere tracing, and all of those quietly assume a min/max-composed field is still a distance. This paper names exactly when that assumption breaks (tiny value perturbations can rotate the normal by nearly 90°) and gives a cheap runtime contract we could run in debug builds or in a bake step to flag regions where sphere-tracing step sizes or collision pushes are not safe.

## Key ideas

- **Negative result.** There is no value-only stability modulus for projecting to the boundary through a hard min/max.
- **Witness contract.** Check value and gradient errors, positive reach, active-branch separation and a Lipschitz visibility margin at the approximate foot point; pass means a true union boundary point and distance error bounded by the active operand's value error.
- **Three-valued output.** Failed or unavailable checks return Unknown instead of a wrong guarantee; extends to finite unions by testing every inactive operand.
- **Evidence.** 75,738 certified samples with no proof-chain violations; 87,469 of 96,000 narrow-band stress samples pass with zero oracle violations; dropping the visibility check admits 75 truly invalid witnesses.

## Caveats

Theorems cover unions only; intersection and difference results are empirical. Analytic primitives (spheres, capsules, tori) only, not neural or baked grids. Single author, no GPU cost numbers. Abstract-level read.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.39650
- PDF: https://arxiv.org/pdf/2610.39650
