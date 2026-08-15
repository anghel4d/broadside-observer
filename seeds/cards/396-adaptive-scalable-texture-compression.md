---
title: "Adaptive Scalable Texture Compression"
authors:
  - "Jørn Nystad"
  - "Anders Lassen"
  - "Andy Pomianowski"
  - "Sean Ellis"
  - "Thomas J. Olson"
year: 2012
venue: "HPG"
arxiv: null
doi: "10.2312/EGGH/HPG12/105-114"
source: "https://doi.org/10.2312/EGGH/HPG12/105-114"
topics:
  - compression
  - textures
seed_rank: 396
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 7
cites:
  - title: "Image Compression Using Block Truncation Coding"
    url: "https://doi.org/10.1109/TCOM.1979.1094560"
    year: 1979
    arxiv: null
    doi: "10.1109/TCOM.1979.1094560"
  - title: "iPACKMAN: High-Quality, Low-Complexity Texture Compression for Mobile Phones"
    url: "https://doi.org/10.1145/1071866.1071877"
    year: 2005
    arxiv: null
    doi: "10.1145/1071866.1071877"
  - title: "Texture Compression using Low-Frequency Signal Modulation"
    url: "https://doi.org/10.2312/EGGH/EGGH03/105-114"
    year: 2003
    arxiv: null
    doi: "10.2312/EGGH/EGGH03/105-114"
---

# Adaptive Scalable Texture Compression

## One-sentence takeaway

ASTC is one block-based format that covers 1–4 components, LDR and HDR, 2D and 3D, at bit rates from 8 bpp down to under 1 bpp by changing the block footprint.

## Why it matters here

Anoptic’s Vulkan path should treat ASTC as the default compressed texture, not DXT-or-bust. One format for color, normals, HDR, and 3D density means the streaming budget is a block size, not a pile of vendor codecs.

## Key ideas

- Fixed 128-bit blocks; the footprint (4×4 … 12×12, plus 3D sizes) sets the bit rate, so quality scales without a new codec.
- Bounded integer sequence encoding (BISE) packs weights more efficiently than power-of-two bitfields, which is how the fine bit-rate ladder works.
- Optional partitions give a block several endpoint pairs so mixed-content tiles (edges, decals) don’t smear.
- Orthogonal: any channel count at any rate, LDR or HDR — the design goal no prior mobile/desktop format hit.

## Caveats

## Links

- DOI: https://doi.org/10.2312/EGGH/HPG12/105-114
- HPG 2012 PDF: https://highperformancegraphics.org/previous/www_2012/media/Papers/HPG2012_Papers_Nystad.pdf
- Khronos ASTC: https://www.khronos.org/astc/
