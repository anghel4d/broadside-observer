---
title: "Weighted Blended Order-Independent Transparency"
authors:
  - "Morgan McGuire"
  - "Louis Bavoil"
year: 2013
venue: "JCGT"
arxiv: null
doi: null
source: "https://jcgt.org/published/0002/02/09/"
topics:
  - oit
seed_rank: 338
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Compositing digital images"
    url: "https://doi.org/10.1145/800031.808606"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808606"
  - title: "Stochastic transparency"
    url: "https://doi.org/10.1145/1730804.1730830"
    year: 2010
    arxiv: null
    doi: "10.1145/1730804.1730830"
  - title: "Adaptive transparency"
    url: "https://doi.org/10.1145/2018323.2018342"
    year: 2011
    arxiv: null
    doi: "10.1145/2018323.2018342"
see: []
---

# Weighted Blended Order-Independent Transparency

## One-sentence takeaway

WBOIT composites transparent surfaces in any order by accumulating a weighted color sum and a revealage term in two render targets, then resolving `C / (1 − revealage)` in a full-screen pass.

## Why it matters here

Anoptic cannot afford per-pixel linked lists or a sort of every particle; this JCGT 2013 approximation is the cheap OIT that still looks right for smoke, glass, and foliage.

## Key ideas

- Exact OIT needs fragments in depth order. Weighted blended OIT drops that and instead weights each fragment by a function of its alpha and depth so nearer, more opaque samples dominate.
- Two MRT targets: `sum(w_i · C_i · α_i)` and `product(1 − α_i)` (revealage). The resolve is a single blend against the opaque buffer.
- No fragment sort, no A-buffer, no extra memory beyond the two targets. Quality is controlled by the weight function (McGuire–Bavoil propose several).
- Failure mode is wrong visibility on strongly overlapping, high-alpha surfaces — acceptable for most game transparencies.
- JCGT 2(2), 2013: https://jcgt.org/published/0002/02/09/

## Caveats

## Links

- JCGT: https://jcgt.org/published/0002/02/09/
