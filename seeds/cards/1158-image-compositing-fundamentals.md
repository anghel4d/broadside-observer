---
title: "Image Compositing Fundamentals"
authors:
  - "Alvy Ray Smith"
year: 1995
venue: "Microsoft Technical Memo 4"
arxiv: null
doi: null
source: "http://alvyray.com/Memos/CG/Microsoft/4_comp.pdf"
topics:
  - graphics
  - alpha
  - compositing
  - gamma
seed_rank: 1158
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "Compositing Digital Images"
    url: "https://doi.org/10.1145/800031.808606"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808606"
    card: "1157-compositing-digital-images"
  - title: "Photographic Tone Reproduction for Digital Images"
    url: "https://doi.org/10.1145/566654.566575"
    year: 2002
    arxiv: null
    doi: "10.1145/566654.566575"
    card: "492-photographic-tone-reproduction-for-digital-images"
---

# Image Compositing Fundamentals

## One-sentence takeaway

Smith clarifies alpha, premultiplication, and the history of digital compositing—including gamma pitfalls beside Porter–Duff.

## Why it matters here

Gamma/alpha literacy card requested beside Porter—prevents the classic blend-in-sRGB bug.

## Key ideas

- Alpha as coverage; premultiplied vs straight.
- Historical path from soft-edged mattes to RGBA.
- Gamma-aware compositing warnings.
- Companion essay energy to Porter–Duff operators.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- URL: http://alvyray.com/Memos/CG/Microsoft/4_comp.pdf
