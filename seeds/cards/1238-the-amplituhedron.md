---
title: "The Amplituhedron"
authors: ["Nima Arkani-Hamed", "Jaroslav Trnka"]
year: 2014
venue: "JHEP"
arxiv: "1312.2007"
doi: "10.1007/JHEP10(2014)030"
source: "https://arxiv.org/abs/1312.2007"
topics: [curiosity]
seed_rank: 1238
seed_batch: "curiosity-2026-08-25"
reviewed: "2026-08-25"
pool: "maths-foundations"
relevance_score: 10
lineage: positive-geometry
cites:
  - title: "Scattering Amplitudes and the Positive Grassmannian"
    url: "https://arxiv.org/abs/1212.5605"
    year: 2012
    arxiv: "1212.5605"
    doi: null
  - title: "Into the Amplituhedron"
    url: "https://arxiv.org/abs/1312.7878"
    year: 2013
    arxiv: "1312.7878"
    doi: null
see:
  - "1086-cluster-algebras-i-foundations"
  - "1123-total-positivity-grassmannians-and-networks"
  - "1234-deformation-quantization-of-poisson-manifolds"
---

# The Amplituhedron

## One-sentence takeaway

Planar N=4 super-Yang–Mills amplitudes are the volume of a positive geometry generalizing the positive Grassmannian; locality and unitarity are boundary facts, not inputs.

## Why it's lovely

Why you might love this: Feynman diagrams hide a secret. The amplitude is the canonical form of a geometric object — the amplituhedron — cut out by positivity in a Grassmannian. Locality (poles) and unitarity (cuts) emerge from the boundary stratification. Leftover of cluster algebras (1086) and plabic graphs (1123): those papers gave the positive Grassmannian as a combinatorial object; this paper is the physics payoff, a volume that *is* the S-matrix.

## Problem

Perturbative scattering amplitudes in gauge theory are simpler than the Feynman expansion suggests, with hidden infinite-dimensional symmetries. Is there a formulation in which locality and unitarity are derived, rather than the starting point? In particular, for planar N=4 SYM, what geometric object has the amplitude as its volume?

## Design

The amplituhedron generalizes the positive Grassmannian: a subset of G(k,n+k;4) (or its bosonized analogue) cut out by positivity with respect to a positive external data matrix. Cells correspond to BCFW terms; the canonical differential form with logarithmic singularities on the boundary is the amplitude. Locality and unitarity are read off from how faces factorize.

## Evidence

Worked at tree level and for loop integrands in planar N=4; matching with known BCFW and positivity constructions. Journal: *JHEP* 10 (2014) 030, DOI `10.1007/JHEP10(2014)030`. The Grassmannian scattering paper (1212.5605) and the "Into the Amplituhedron" sequel are cited, not minted.

## Limitations

Planar N=4 SYM, not QCD. Geometry of the loop amplituhedron is still being written. Not a cluster-algebra paper and not a plabic-graph paper.

## Implications for Broadside

Plabic graphs (1123) and cluster algebras (1086) already live in the library as the combinatorics of total positivity. The amplituhedron is why a graphics/geometry person should care: a positive cell complex whose volume is a scattering amplitude. Kontsevich (1234) computes a product by summing graphs; the amplituhedron computes an amplitude by taking a volume. Diagrams versus positive geometry, both refusing Feynman as the primitive.

## Bottom line

Mint the volume. The S-matrix is a positive geometry.

## Links

- arXiv: [1312.2007](https://arxiv.org/abs/1312.2007)
- Journal: [JHEP 10 (2014) 030](https://doi.org/10.1007/JHEP10(2014)030)
