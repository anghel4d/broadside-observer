---
title: "An aperiodic monotile"
authors: ["David Smith", "Joseph Samuel Myers", "Craig S. Kaplan", "Chaim Goodman-Strauss"]
year: 2023
venue: "Combin. Theory"
arxiv: "2303.10798"
doi: "10.5070/C64163843"
source: "https://arxiv.org/abs/2303.10798"
topics: [curiosity]
seed_rank: 1023
seed_batch: "curiosity-2026-08-15"
reviewed: "2026-08-15"
pool: "maths-foundations"
relevance_score: 9
lineage: aperiodic-tiling
cites:
  - title: "The undecidability of the domino problem"
    url: "https://doi.org/10.1090/memo/0066"
    year: 1966
    arxiv: null
    doi: "10.1090/memo/0066"
  - title: "A chiral aperiodic monotile"
    url: "https://arxiv.org/abs/2305.17743"
    year: 2023
    arxiv: "2305.17743"
    doi: null
  - title: "Mathematical Problems (Hilbert's Problems)"
    url: "https://doi.org/10.1090/S0002-9904-1902-00923-3"
    year: 1900
    arxiv: null
    doi: "10.1090/S0002-9904-1902-00923-3"
see:
  - "103-wave-function-collapse"
  - "481-markovjunior"
  - "415-the-algorithmic-beauty-of-plants-l-systems"
  - "487-mathematical-problems-hilbert-s-problems"
---

# An aperiodic monotile

## One-sentence takeaway

A 13-sided polykite — the hat — tiles the Euclidean plane, and every tiling it admits is non-periodic: the first einstein, a single prototile whose geometry alone forbids a lattice.

## Why it matters here

Why you might love this: Hilbert's 18th (card 487) asked which shapes tile, and Berger's 1966 aperiodic Wang tiles showed tiling can encode computation; the hat closes the one-tile case with a substitution hierarchy you can draw. Bridge: Wave Function Collapse and MarkovJunior already live in the library as constraint/rewrite PCG; an einstein is the extreme "local rules, global aperiodicity" object those engines approximate, and the H/T/P/F metatile substitution is a concrete production system — closer to L-systems than to a survey of quasicrystals.

## Key ideas

- Continuum Tile(a,b) of combinatorially equivalent polygons; the hat is the polykite Tile(1, √3). Reflections are used (the later Spectre is the chiral follow-up).
- Existence: hats cluster into four metatiles H, T, P, F with a substitution rule, so hierarchical tilings exist and therefore so do hat tilings of the plane.
- Aperiodicity, geometric: a periodic hat tiling would force a similarity of scale √(2/3) between two triangular lattices — impossible. A second, computer-assisted proof shows every hat tiling is hierarchical, hence non-periodic.
- Matching rules are unnecessary: unlike Penrose rhombs or Wang tiles, the shape itself is the constraint.

## Caveats


## Links

- arXiv: [2303.10798](https://arxiv.org/abs/2303.10798)
- Author page (hat drawings): https://cs.uwaterloo.ca/~csk/hat/
- Journal: [Combinatorial Theory 4(1), 2024](https://doi.org/10.5070/C64163843)
