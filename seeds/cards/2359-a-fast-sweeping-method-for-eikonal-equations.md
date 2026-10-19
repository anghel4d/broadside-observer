---
title: "A Fast Sweeping Method for Eikonal Equations"
authors:
  - "Hongkai Zhao"
year: 2005
venue: "Mathematics of Computation 74(250), 603–627 (published online May 2004)"
arxiv: null
doi: "10.1090/S0025-5718-04-01678-3"
source: "https://www.math.uci.edu/~zhao/homepage/research_files/FSM.pdf"
topics:
  - eikonal-equation
  - distance-fields
  - pathfinding-fields
  - numerical-pde
seed_rank: 2359
seed_batch: "archive-2026-10-20"
reviewed: "2026-10-20"
pool: "graphics"
relevance_score: 8
lineage: distance-fields
see:
  - 2338-geodesics-in-heat
  - 2281-distance-transforms-of-sampled-functions
  - 357-continuum-crowds
  - 1433-crowd-pathfinding-and-steering-using-flow-field-tiles
cites:
  - title: "A Fast Sweeping Method for Eikonal Equations"
    url: "https://doi.org/10.1090/S0025-5718-04-01678-3"
    year: 2005
    arxiv: null
    doi: "10.1090/S0025-5718-04-01678-3"
---

# A Fast Sweeping Method for Eikonal Equations

## One-sentence takeaway

Zhao solves |∇u| = f on a rectangular grid with a Godunov upwind discretization and plain Gauss–Seidel updates u ← min(u, local solve), sweeping the grid in the 2ⁿ alternating axis orderings (four in 2-D) so that each sweep carries information along one family of characteristic directions; no heap is needed, the cost is O(N), and for a distance function 2ⁿ sweeps already give a solution as accurate as the fully converged discrete one.

## Why it matters here

GRID COMMAND needs arrival-time and distance fields on grids every time goals, obstacles or terrain costs change: flow fields for groups of units (1433, 357), influence and threat maps, fog-of-war distances. Fast marching needs a priority queue and serial front propagation; fast sweeping is four branch-light raster passes over an array, which is exactly what vectorizes, tiles and runs on a GPU or in an array language like ano. With a terrain-cost f it gives travel time, not just Euclidean distance, at a cost independent of how many sources there are.

## Key ideas

- **Discretization.** At each interior point solve [(u − u_xmin)⁺]² + [(u − u_ymin)⁺]² = f²h² with u_xmin, u_ymin the smaller neighbours along each axis; one-sided differences at the boundary.
- **Closed-form local solve.** In 2-D, u = min(a, b) + fh if |a − b| ≥ fh, else (a + b + √(2f²h² − (a − b)²))/2; in n-D, sort the neighbour values and add them one at a time until the quadratic's root falls below the next value.
- **Initialization.** Fix exact or interpolated values at grid points on or near the source set Γ; set every other point to a large value; updates only ever decrease values.
- **Alternating orderings.** Sweep i = 1→I / I→1 crossed with j = 1→J / J→1. Each ordering is causal for one quadrant of characteristic directions, so every point reaches its correct value in at least one of the four sweeps for a point source.
- **Theory.** Monotonicity, stability and a maximum-change principle are proved; for the distance function to an arbitrary data set, 2ⁿ sweeps give a solution as accurate as the converged iteration. For general Eikonal equations characteristics curve, more sweeps may be needed, but the count is finite and independent of grid size for a fixed domain and speed field.
- **Lineage.** Zhao contrasts the method with fast marching (O(N log N) because of the heap) and with Danielsson's alternating-sweep distance mapping, which follows axis directions rather than true characteristics and so is less accurate and needs about twice as many sweeps.

## Caveats

The scheme is first-order accurate; error near sources and kinks is dominated by discretization, not iteration. Speed fields with strong contrast or winding corridors (mazes, chokepoints) make characteristics turn many times and push the sweep count up, which is where fast marching or hybrid and parallel variants developed later can be better. The method is for rectangular grids; triangulated surfaces need other schemes (2338 is one).

## Links

- Paper (author PDF): https://www.math.uci.edu/~zhao/homepage/research_files/FSM.pdf
- Paper (DOI, Mathematics of Computation): https://doi.org/10.1090/S0025-5718-04-01678-3
