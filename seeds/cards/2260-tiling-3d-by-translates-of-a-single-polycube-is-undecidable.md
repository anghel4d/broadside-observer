---
title: "Tiling 3D by Translates of a Single Polycube is Undecidable"
authors:
  - "Erik D. Demaine"
  - "Stefan Langerman"
year: 2026
venue: "arXiv"
arxiv: "2610.12392"
doi: null
source: "https://arxiv.org/abs/2610.12392"
topics:
  - "tiling"
  - "undecidability"
  - "aperiodic"
  - "geometry"
seed_rank: 2260
seed_batch: "curiosity-2026-10-11"
reviewed: "2026-10-11"
pool: "maths"
relevance_score: 8
cites:
  - title: "Tiling 3D by Translates of a Single Polycube is Undecidable"
    url: "https://arxiv.org/abs/2610.12392"
    year: 2026
    arxiv: "2610.12392"
    doi: null
see: ["1023-an-aperiodic-monotile", "1024-sturmian-lattices-and-aperiodic-tile-sets", "1843-gliders-on-aperiodic-monotilings-hat-and-spectre"]
---

# Tiling 3D by Translates of a Single Polycube is Undecidable

## One-sentence takeaway

Deciding whether one connected polycube tiles 3D space by translations alone is co-RE-complete, so undecidable, and three dimensions is the first place this happens.

## Why it's lovely

It's a one-shape question with no rotations allowed that still hides a Turing machine; the reduction stitches together Wang tiles, Greenfeld–Tao's decorated Sudoku and the OpenAI 3D aperiodic tile, a neat sequel to the hat and Sturmian tile cards already in the library. For Anoptic/voxel work it's a crisp reminder that "does this brick pattern fill space" can be genuinely unanswerable in general.

## Key ideas

- **Reduction from Wang tiling.** Encodes Wang tile constraints into the geometry of a single prototile.
- **Two-prime Sudoku.** Uses Greenfeld and Tao's decorated construction plus a cyclic encoding adapted from OpenAI's 3D aperiodic tile.
- **Connectivity.** A reduction of Kim makes the prototile face-connected.
- **Optimal dimension.** Translational monotiling is decidable in Z^2 and for a single polyomino in R^2, so 3D is tight.

## Caveats

Translations only; says nothing directly about tilings allowing rotations. Preprint, Oct 2026, not yet peer reviewed.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.12392
- PDF: https://arxiv.org/pdf/2610.12392
