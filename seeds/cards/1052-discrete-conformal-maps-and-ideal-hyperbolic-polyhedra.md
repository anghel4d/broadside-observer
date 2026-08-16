---
title: "Discrete conformal maps and ideal hyperbolic polyhedra"
authors: ["Alexander I. Bobenko", "Ulrich Pinkall", "Boris A. Springborn"]
year: 2015
venue: "Geom. Topol."
arxiv: "1005.2698"
doi: "10.2140/gt.2015.19.2155"
source: "https://arxiv.org/abs/1005.2698"
topics: [curiosity]
seed_rank: 1052
seed_batch: "curiosity-2026-08-17"
reviewed: "2026-08-17"
pool: "graphics"
relevance_score: 9
lineage: discrete-conformal
cites:
  - title: "Combinatorial Yamabe flow"
    url: "https://arxiv.org/abs/math/0407061"
    year: 2004
    arxiv: "math/0407061"
    doi: null
  - title: "Conformal equivalence of triangle meshes"
    url: "https://doi.org/10.1145/1360612.1360676"
    year: 2008
    arxiv: null
    doi: "10.1145/1360612.1360676"
  - title: "A characterization of ideal polyhedra in hyperbolic 3-space"
    url: "https://doi.org/10.2307/2946634"
    year: 1996
    arxiv: null
    doi: "10.2307/2946634"
  - title: "The decorated Teichmüller space of punctured surfaces"
    url: "https://doi.org/10.1007/BF01388971"
    year: 1987
    arxiv: null
    doi: "10.1007/BF01388971"
see:
  - "1028-discrete-exterior-calculus"
  - "375-progressive-meshes"
  - "1032-real-time-meshlet-extraction-from-scalar-volumes"
  - "5-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Discrete conformal maps and ideal hyperbolic polyhedra

## One-sentence takeaway

Scale factors on vertices — \(\tilde{\ell}_{ij}=e^{(u_i+u_j)/2}\ell_{ij}\) — are a discrete conformal structure; the maps they induce are circumcircle-preserving piecewise projective, and flattening one is literally realizing an ideal hyperbolic polyhedron with prescribed intrinsic metric.

## Why it matters here

Why you might love this: the cotan-Laplace energy of a triangle mesh is not a discretization slogan here, it is the Hessian of a convex variational principle whose critical points are discrete conformal maps, and the same numbers are Penner coordinates / shear coordinates of a hyperbolic cusp metric. Bridge: Anoptic already lives on triangulated surfaces (meshlets, progressive meshes, radiance as transport on a mesh); vertex scale factors plus length-cross-ratios are a conformal engine you can run with the same cotan weights, and Möbius invariance gives you discrete Riemann maps to circular polygons without a circle packing.

## Key ideas

- Discrete conformal class: two Euclidean triangulations are equivalent iff edge lengths differ by per-vertex scales. Equivalent characterization: they share length-cross-ratios \(\mathrm{lcr}_{ij}=\ell_{il}\ell_{jk}/(\ell_{lj}\ell_{ki})\) on interior edges (absolute values of complex cross-ratios).
- Discrete conformal map: on each triangle, the unique projective map sending circumcircle to circumcircle; these glue across an edge iff the metrics are discretely conformally equivalent. Linear interpolation looks worse; the projective interpolant is the isometry of the induced hyperbolic metrics (Klein model).
- Two convex variational principles, Legendre duals: \(E_{\mathsf{T},\Theta,\lambda}(u)\) in logarithmic scale factors (gradient = prescribed angle sum minus actual; Hessian = cotan-Laplace), and Rivin-style \(S_{\mathsf{T},\lambda}(\alpha)\) in angles. Solutions unique up to scale when they exist.
- Hyperbolic dictionary: circumcircles turn Euclidean triangles into ideal hyperbolic triangles; \(\lambda=2\log\ell\) are Penner coordinates, \(\log\mathrm{lcr}\) are shears. Flattening a triangulation = constructing a (possibly nonconvex) ideal polyhedron with given intrinsic metric. A hyperbolic-triangle variant (\(\sinh(\tilde{\ell}/2)=e^{(u_i+u_j)/2}\sinh(\ell/2)\)) uniformizes higher-genus surfaces.

## Caveats

- Existence is not guaranteed for a *fixed* combinatorics (triangle inequalities can break); Rivin's theorem saves you if you allow combinatorial changes and restrict to convex ideal polyhedra.
- Convergence to smooth conformal maps is believed (Rodin–Sullivan analogue) but not proved here.
- The 2008 SIGGRAPH conformal-equivalence paper is the graphics-facing special case; mint the Geom. Topol. synthesis, cite SIGGRAPH.

## Links

- arXiv: [1005.2698](https://arxiv.org/abs/1005.2698)
- Journal: [Geom. Topol. 19 (2015) 2155–2215](https://doi.org/10.2140/gt.2015.19.2155)
