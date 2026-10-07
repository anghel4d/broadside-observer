---
title: "Meaningful Content Diversity Through Non-Uniform Tile WFC"
authors: ["Rolf Piepenbrink", "Rafael Bidarra"]
year: 2026
venue: "IEEE Transactions on Games (extends IEEE CoG 2025 'Non-Uniform Tile Wave Function Collapse')"
arxiv: null
doi: "10.1109/TG.2026.3696210"
source: "https://publications.graphics.tudelft.nl/papers/847"
topics: [wave-function-collapse, procedural-generation, tile-maps, constraint-solving]
seed_rank: 1860
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "game-ai"
relevance_score: 9
lineage: procedural-generation
cites:
  - title: "Non-Uniform Tile Wave Function Collapse"
    url: "https://publications.graphics.tudelft.nl/papers/814"
    year: 2025
    arxiv: null
    doi: null
  - title: "Wave Function Collapse"
    url: "https://github.com/mxgmn/WaveFunctionCollapse"
    year: 2016
    arxiv: null
    doi: null
  - title: "Example-Based Model Synthesis"
    url: "https://doi.org/10.1145/1230100.1230119"
    year: 2007
    arxiv: null
    doi: "10.1145/1230100.1230119"
see:
  - "103-wave-function-collapse"
  - "459-example-based-model-synthesis"
---

# Meaningful Content Diversity Through Non-Uniform Tile WFC

## One-sentence takeaway

Piepenbrink–Bidarra extend Wave Function Collapse to Non-Uniform Tiles (NUTs) — multi-cell pieces of arbitrary connected shape, like LEGO bricks or Tetris pieces — by "atomizing" each tile into uniquely identified cells whose adjacencies are learned, so WFC's Overlapping Model can never place half a building or a wrongly sized lake — in 2D or 3D, as a strict superset of standard WFC.

## Why it matters here

GRID COMMAND maps are grid-based, and the library's WFC (103) and model synthesis (459) both assume one tile per cell. Real RTS map pieces are not: a base footprint, a bridge, a 2×3 farm or a river bend spans several cells and must appear whole. Today that means post-hoc stamping that fights the solver. nutWFC makes multi-cell structures first-class in the same entropy/propagate loop, so we can author map chunks as example inputs and still get diversity — and its edge-elimination and save-point rules are small, implementable changes to a WFC we already understand.

## Key ideas

- **Atomization.** A NUT is a connected set of single-cell atoms with relative atom coordinates inside its bounding extent; NUT id + atom coordinate is a unique label, so the solver can tell the atoms of one tile apart.
- **Atom adjacency.** Constraints between atoms (inside a NUT and across NUTs) are learned from the input; intra-NUT adjacency forces a tile's atoms to be laid out together.
- **Overlapping Model support.** Collapsing a cell to a pattern assigns the atom at pattern coordinate 0, then a collapse wave fixes the rest of that NUT; a precomputed pattern↔atom table restores pattern data, and patterns made only of one NUT's atoms are kept out of the adjacency matrix.
- **Edge elimination.** At initialization, patterns whose NUTs cannot fit entirely inside the grid are removed from edge cells (with an exception when every other atom is already collapsed), so no truncated tiles appear at borders.
- **Save points, not full backtracking.** On contradiction nutWFC reverts to a periodic save point (wave + collapsed-atom grid) — cheaper than exhaustive backtracking, at the cost of no completeness guarantee.
- **Superset of WFC.** Disable identifier uniqueness inside a NUT and standard WFC falls out — so one solver covers both single-cell and multi-cell tilesets.
- **Measured diversity (journal version).** An 80×25×24 city-skyline experiment: over 437 outputs, roads ≈ 51.6%, built plots ≈ 35.5%, about 36.7 buildings per city, building types spread 44.7/29.9/25.4% — evidence that NUT tilesets keep variety while blocking semantically corrupt combinations.

## Caveats

Slow as published: 583 runs of the 80×25×24 city skyline took a median of about 290 s (mean about 377 s, tail past 1200 s) in the authors' C# implementation; they blame the propagation wave and the save-point scheme, which their own data shows is a poor backtracking substitute (outliers under 15%). Treat it as an algorithm to re-implement with bitset propagation (and real backtracking), not a drop-in library, and expect GRID COMMAND's 2D maps to be far cheaper than their 3D grids. Read from the TU Delft PDFs of both the CoG 2025 paper and the IEEE ToG version. Do not remint WFC 103 / model synthesis 459 / PCG book 102.

## Links

- DOI (IEEE ToG 2026): https://doi.org/10.1109/TG.2026.3696210
- TU Delft page (journal): https://publications.graphics.tudelft.nl/papers/847
- TU Delft page (CoG 2025): https://publications.graphics.tudelft.nl/papers/814
- PDF (journal version): https://publications.graphics.tudelft.nl/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbEFWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8a211d8de750047bd55b1924db75ec889eff0cfe/NUTWFC_TOG.Final.pdf
- PDF (CoG 2025): https://publications.graphics.tudelft.nl/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaElVIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fa2d0b83cd53ffaf64a88d4b4ff959b79f92a81a/NUTWFC.pdf
