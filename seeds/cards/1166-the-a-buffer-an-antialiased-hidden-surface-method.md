---
title: "The A-buffer, an Antialiased Hidden Surface Method"
authors:
  - "Loren Carpenter"
year: 1984
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800031.808585"
source: "https://doi.org/10.1145/800031.808585"
topics:
  - graphics
  - a-buffer
  - antialiasing
  - transparency
seed_rank: 1166
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "A Subdivision Algorithm for Computer Display of Curved Surfaces"
    url: "https://collections.lib.utah.edu/details?id=709785"
    year: 1974
    arxiv: null
    doi: null
    card: "1145-a-subdivision-algorithm-for-computer-display-of-curved-surfa"
  - title: "Compositing Digital Images"
    url: "https://doi.org/10.1145/800031.808606"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808606"
    card: "1157-compositing-digital-images"
  - title: "The Reyes Image Rendering Architecture"
    url: "https://doi.org/10.1145/37402.37414"
    year: 1987
    arxiv: null
    doi: "10.1145/37402.37414"
    card: "1156-the-reyes-image-rendering-architecture"
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
    card: "347-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
---

# The A-buffer, an Antialiased Hidden Surface Method

## One-sentence takeaway

Carpenter's A-buffer: per-pixel fragment lists with coverage masks for antialiased hidden-surface and transparency.

## Why it matters here

Ancestor of order-independent transparency / visibility buffer thinking already in the corpus.

## Key ideas

- Subpixel coverage bitmasks (fragments).
- Sorted fragment lists per pixel.
- Antialiasing + transparency in one framework.
- Pixar/Reyes-era companion technique.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/800031.808585](https://doi.org/10.1145/800031.808585)
- URL: https://doi.org/10.1145/800031.808585
