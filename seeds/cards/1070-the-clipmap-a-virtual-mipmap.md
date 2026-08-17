---
title: "The Clipmap: A Virtual Mipmap"
authors:
  - "Christopher C. Tanner"
  - "Christopher J. Migdal"
  - "Michael T. Jones"
year: 1998
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/280814.280855"
source: "https://doi.org/10.1145/280814.280855"
topics:
  - "clipmap"
  - "virtual-texturing"
  - "mipmap"
  - "terrain"
seed_rank: 1070
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "engines"
relevance_score: 10
lineage: clipmap
cites:
  - title: "Pyramidal Parametrics"
    url: "https://doi.org/10.1145/800059.801126"
    year: 1983
    arxiv: null
    doi: "10.1145/800059.801126"
  - title: "Geometry Clipmaps: Terrain Rendering Using Nested Regular Grids"
    url: "https://doi.org/10.1145/1185657.1188229"
    year: 2004
    arxiv: null
    doi: "10.1145/1185657.1188229"
  - title: "Sparse Virtual Textures / MegaTexture"
    url: "https://web.archive.org/web/20110716015618/http://s09.idav.ucdavis.edu/talks/05-Obidowski-Id_Tech_5_Challenges.pdf"
    year: 2009
    arxiv: null
    doi: null
see:
  - "362-geometry-clipmaps-terrain-rendering-using-nested-regular-gri"
  - "404-sparse-virtual-textures-megatexture"
  - "1065-gpu-friendly-laplacian-texture-blending"
---

# The Clipmap: A Virtual Mipmap

## One-sentence takeaway

A mipmap whose fine levels are *clipped* to a window around the viewer, so a finite cache can hold an arbitrarily large texture at real-time rates.

## Why it matters here

Geometry clipmaps (362) is Losasso–Hoppe 2004 *terrain geometry*. Sparse virtual textures (404) is id MegaTexture. Both cite this 1998 SGI paper and then the library skipped it. GRID COMMAND's procedural world and Anoptic's biome/hex splat (1065) want a virtual mipmap of the planet, not a second geometry-clipmap card. Tanner–Migdal–Jones is the cache + clip-region machine: they virtualized a 170 GB texture at 60 Hz on InfiniteReality-class hardware.

## Key ideas

- Williams mipmap (pyramidal parametrics, 1983 — last-cycle reject as textbook) is the full pyramid; a clipmap keeps the whole coarse tail and only a toroidal window of each fine level.
- Update is incremental as the viewpoint moves; addressing is a clip + wrap, not a page table (that's 404's later GPU reading).
- Hardware/software split: SGI provided clipmap lookups; a system layer fed the rings.
- The same "fine near / coarse far" idea later shows up in voxel cone tracing LODs and in geometry clipmaps.

## Caveats

- Original is SGI-specific hardware; today's reading is sparse-resident textures / virtual texturing, not a clipmap unit.
- Not a geometry LOD paper — 362 is that adaptation.
- Toroidal updates assume a mostly-planar / planetary walker; indoor meshlets need 404-style pages.

## Links

- DOI: [10.1145/280814.280855](https://doi.org/10.1145/280814.280855)
- ACM: https://dl.acm.org/doi/10.1145/280814.280855
