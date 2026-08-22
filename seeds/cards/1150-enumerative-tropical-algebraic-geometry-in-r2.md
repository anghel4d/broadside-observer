---
title: "Enumerative tropical algebraic geometry in R²"
authors: ["Grigory Mikhalkin"]
year: 2005
venue: "J. Amer. Math. Soc."
arxiv: "math/0312530"
doi: "10.1090/S0894-0347-05-00477-7"
source: "https://arxiv.org/abs/math/0312530"
topics: [curiosity]
seed_rank: 1150
seed_batch: "curiosity-2026-08-23"
reviewed: "2026-08-23"
pool: "maths-foundations"
relevance_score: 9
lineage: tropical-geometry
cites:
  - title: "Counting curves via lattice paths in polygons"
    url: "https://arxiv.org/abs/math/0209253"
    year: 2003
    arxiv: "math/0209253"
    doi: "10.1016/S1631-073X(03)00104-3"
  - title: "Cluster algebras I: Foundations"
    url: "https://arxiv.org/abs/math/0104151"
    year: 2002
    arxiv: "math/0104151"
    doi: "10.1090/S0894-0347-01-00385-X"
see:
  - "1086-cluster-algebras-i-foundations"
  - "1121-random-domino-tilings-and-the-arctic-circle-theorem"
  - "1123-total-positivity-grassmannians-and-networks"
---

# Enumerative tropical algebraic geometry in R²

## One-sentence takeaway

Gromov–Witten numbers of curves in toric surfaces equal weighted counts of lattice paths in the Newton polygon: holomorphic curves become piecewise-linear graphs in \(\mathbb{R}^2\).

## Why it's lovely

Why you might love this: the number of degree-\(d\) curves of genus \(g\) through the right number of points is a combinatorial walk inside a triangle. Complex algebraic geometry is replaced by a balancing condition on a metric graph; the correspondence theorem says the tropical count *is* the holomorphic count. Leftover of cluster algebras (1086) and plabic networks (1123) — those tropicalise positivity; this tropicalises *enumerative* geometry. Not a remint of cluster.

## Problem

Classical enumerative geometry (how many curves of given degree and genus pass through given points in a toric surface) is hard: obstruction theory, virtual classes, multiple covers. Is there a piecewise-linear shadow in which the same numbers become lattice-path counts?

## Design

A tropical curve in \(\mathbb{R}^2\) is a weighted metric graph satisfying the balancing condition at every vertex. Mikhalkin assigns a multiplicity to each tropical curve (a product of vertex determinants) and proves a correspondence theorem: the Gromov–Witten invariant equals the weighted number of tropical curves through generic points, equivalently the weighted number of lattice paths of given length in the Newton polygon of the polarised toric surface. Patchworking supplies the algebraic curves from the tropical ones in dimension two.

## Evidence

The formula was announced as *Counting curves via lattice paths in polygons*, C. R. Math. 336 (2003); the 83-page paper is the proof. Journal: *J. Amer. Math. Soc.* 18 (2005) 313–377, DOI `10.1090/S0894-0347-05-00477-7`. Recovers GW invariants of \(\mathbb{P}^2\) and \(\mathbb{P}^1\times\mathbb{P}^1\) as path counts in a triangle and a rectangle. Higher-dimensional tropical enumerative geometry is left open (families of positive-genus tropical curves).

## Limitations

Ambient dimension two (hypersurface curves); virtual-class / higher-dimensional correspondence needs later technology. Not a cluster-algebra paper and not a dimer/amoeba paper (Kenyon–Okounkov–Sheffield, cited from 1121).

## Implications for Broadside

Cluster algebras (1086) and plabic graphs (1123) already tropicalise positivity and networks. Mikhalkin tropicalises *curve counts*: the same piecewise-linear graphs now enumerate. The arctic circle (1121) is a limit *shape* of dimers; tropical curves are limit *skeleta* of amoebae. Discrete geometry that still sees Gromov–Witten.

## Bottom line

Mint lattice-path enumerative geometry. Holomorphic curves as balanced graphs.

## Links

- arXiv: [math/0312530](https://arxiv.org/abs/math/0312530)
- Journal: [J. Amer. Math. Soc. 18 (2005) 313–377](https://doi.org/10.1090/S0894-0347-05-00477-7)
