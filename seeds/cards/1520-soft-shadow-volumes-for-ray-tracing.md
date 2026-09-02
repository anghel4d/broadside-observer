---
title: "Soft shadow volumes for ray tracing"
authors: ["Samuli Laine", "Timo Aila", "Ulf Assarsson", "Jaakko Lehtinen", "Tomas Akenine-Möller"]
year: 2005
venue: "ACM SIGGRAPH 2005 Papers"
arxiv: null
doi: "10.1145/1186822.1073327"
source: "https://doi.org/10.1145/1186822.1073327"
topics: [ray-tracing, soft-shadow-volumes]
seed_rank: 1520
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: soft-shadows
cites:
  - title: "A Geometry-based Soft Shadow Volume Algorithm using Graphics Hardware"
    url: "https://doi.org/10.1145/882262.882300"
    year: 2003
    arxiv: null
    doi: "10.1145/882262.882300"
  - title: "A fast shadow algorithm for area light sources using backprojection"
    url: "https://doi.org/10.1145/192161.192207"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192207"
  - title: "Alias-Free Shadow Maps"
    url: "https://www.cs.jhu.edu/~cohen/Publs/AFSM.pdf"
    year: 2004
    arxiv: null
    doi: null
---

# Soft shadow volumes for ray tracing

## One-sentence takeaway

Exact-class soft shadow volumes for ray tracing: silhouette wedges become a spatial index so a ray can compute area-light visibility without shooting a thousand shadow rays.

## Why it matters here

Assarsson 2003 (this batch) is raster GPU; this SIGGRAPH 2005 paper is the *ray-tracing* exact-class method. Anoptic RT area-light vis currently means many shadow rays or ReSTIR; this is the geometric alternative (expensive, but the citation for 'analytic penumbra from silhouettes').

## Key ideas

- **Soft shadow volume as a beam.** The set of rays that see a silhouette edge as a partial occluder is a wedge; the paper builds a hierarchy over those wedges.
- **Per-ray vis.** A primary ray queries the hierarchy and reconstructs blocked solid angle of the area light — closer to Drettakis–Fiume than to PCSS.
- **Exact-class.** For polygonal occluders and polygonal lights, the answer is the true vis (modulo hierarchy), not a SM heuristic.
- **Evidence.** SIGGRAPH 2005, doi `10.1145/1186822.1073327`.

## Caveats

- Silhouette explosion on dense/alpha geo. Not a realtime 8 ms path. Distinct from Alias-Free SM (this batch) which is irregular-Z, not volumes.

## Links

- DOI: https://doi.org/10.1145/1186822.1073327
