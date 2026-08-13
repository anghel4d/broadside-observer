---
title: "Compositing Digital Images"
authors:
  - "Thomas Porter"
  - "Tom Duff"
year: 1984
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800031.808606"
source: "https://doi.org/10.1145/800031.808606"
topics:
  - graphics
  - compositing
  - porter-duff
  - alpha
seed_rank: 1157
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "Image Compositing Fundamentals"
    url: "http://alvyray.com/Memos/CG/Microsoft/4_comp.pdf"
    year: 1995
    arxiv: null
    doi: null
    card: "1158-image-compositing-fundamentals"
  - title: "Distributed Ray Tracing"
    url: "https://doi.org/10.1145/800031.808590"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808590"
    card: "1155-distributed-ray-tracing"
  - title: "Photographic Tone Reproduction for Digital Images"
    url: "https://doi.org/10.1145/566654.566575"
    year: 2002
    arxiv: null
    doi: "10.1145/566654.566575"
    card: "492-photographic-tone-reproduction-for-digital-images"
---

# Compositing Digital Images

## One-sentence takeaway

Porter–Duff algebra of alpha compositing: clear, over, in, out, atop, xor—the math of layers.

## Why it matters here

Every UI, film composite, and engine transparent pass speaks Porter–Duff.

## Key ideas

- Alpha as coverage/opacity in a coherent algebra.
- Binary compositing operators.
- Premultiplied alpha discipline.
- Foundational for later OIT techniques in the corpus.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/800031.808606](https://doi.org/10.1145/800031.808606)
- URL: https://doi.org/10.1145/800031.808606
