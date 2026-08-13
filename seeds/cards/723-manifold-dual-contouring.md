---
title: Manifold Dual Contouring
authors:
- Scott Schaefer
- Tao Ju
- Joe Warren
year: 2007
venue: IEEE TVCG
arxiv: null
doi: 10.1109/TVCG.2007.1064
source: https://doi.org/10.1109/TVCG.2007.1064
topics:
- isosurface
- voxels
seed_rank: 723
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: graphics
relevance_score: 7
lineage: procedural-generation
cites:
  - title: "Dual Contouring of Hermite Data"
    url: "https://doi.org/10.1145/566570.566586"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566586"
  - title: "Object modeling by registration of multiple range images"
    url: "https://doi.org/10.1109/robot.1991.132043"
    year: 2002
    arxiv: null
    doi: "10.1109/robot.1991.132043"
  - title: "Iterative Methods for Optimization"
    url: "https://doi.org/10.1137/1.9781611970920"
    year: 1999
    arxiv: null
    doi: "10.1137/1.9781611970920"
  - title: "Numerical Methods for Least Squares Problems"
    url: "https://doi.org/10.1137/1.9781611971484"
    year: 1996
    arxiv: null
    doi: "10.1137/1.9781611971484"
  - title: "Numerical methods for least squares problems"
    url: "https://doi.org/10.5860/choice.34-1602"
    year: 1996
    arxiv: null
    doi: "10.5860/choice.34-1602"
  - title: "Object modelling by registration of multiple range images"
    url: "https://doi.org/10.1016/0262-8856(92)90066-c"
    year: 1992
    arxiv: null
    doi: "10.1016/0262-8856(92)90066-c"
  - title: "Surface reconstruction from unorganized points"
    url: "https://doi.org/10.1145/133994.134011"
    year: 1992
    arxiv: null
    doi: "10.1145/133994.134011"
  - title: "Surface reconstruction from unorganized points"
    url: "https://doi.org/10.1145/142920.134011"
    year: 1992
    arxiv: null
    doi: "10.1145/142920.134011"
  - title: "Active Contours"
    url: "https://doi.org/10.1007/978-1-4471-1555-7"
    year: 1998
    arxiv: null
    doi: "10.1007/978-1-4471-1555-7"
  - title: "Marching cubes: A high resolution 3D surface construction algorithm"
    url: "https://doi.org/10.1145/37401.37422"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37422"
  - title: "Marching cubes: A high resolution 3D surface construction algorithm"
    url: "https://doi.org/10.1145/37402.37422"
    year: 1987
    arxiv: null
    doi: "10.1145/37402.37422"
  - title: "Methods for Non-Linear Least Squares Problems"
    url: "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.73.3864"
    year: 1999
    arxiv: null
    doi: null
see:
  - "491-dual-contouring-of-hermite-data"
---

# Manifold Dual Contouring

## One-sentence takeaway

Manifold Dual Contouring hardens dual contouring for watertight meshes — living geometry child of 2002 DC.

## Why it matters here

Voxel/RTS terraforming meshes still lean on DC-family extraction.

## Key ideas

- Enforces manifold output vs classical DC cracks.
- Hermite data still the input.
- Pairs with macro PCG (WFC/L-systems) at isosurface scale.
- Industrial voxel engines cite this family.

## Caveats

- Geometry extraction is not WFC; shared lineage is organizational for shallow pass.
- QEF numerics remain fiddly.

## Links

- DOI: [10.1109/TVCG.2007.1064](https://doi.org/10.1109/TVCG.2007.1064)
- URL: https://doi.org/10.1109/TVCG.2007.1064
