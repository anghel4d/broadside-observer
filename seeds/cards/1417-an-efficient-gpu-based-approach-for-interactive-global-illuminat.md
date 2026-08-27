---
title: "An Efficient GPU-based Approach for Interactive Global Illumination"
authors:
  - "Rui Wang"
  - "Rui Wang"
  - "Kun Zhou"
  - "Minghao Pan"
  - "Hujun Bao"
year: 2009
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1576246.1531397"
source: "http://kunzhou.net/2009/GPUGI.pdf"
topics:
  - "gpu-gi"
  - "photon-mapping"
  - "illumination-cut"
  - "final-gather"
seed_rank: 1417
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: china-graphics
cites:
  - title: "Global Illumination using Photon Maps"
    url: "https://graphics.stanford.edu/papers/photon-maps/"
    year: 1996
    arxiv: null
    doi: null
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073218"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073218"
see:
  - "374-global-illumination-using-photon-maps"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
---

# An Efficient GPU-based Approach for Interactive Global Illumination

## One-sentence takeaway

Full GPU GI: k-means irradiance samples + photon-map illumination cut. Interactive multi-bounce, caustics, glossy. The 2009 GPU-GI paper, ZJU.

## Why it's lovely

Why you might love this: Zhejiang CAD&CG putting the whole GI stack on the GPU in 2009. Photons, cuts, gather — interactive.

## Problem

2009 CPU GI was not interactive. GPU photon mapping existed in pieces (ISM, image-space PM). Need a full GPU pipeline for multi-bounce, caustics, glossy.

## Design

- GPU photon map + illumination cut (many-lights-style clustering of photons/VPLs).
- k-means irradiance samples for final gather.
- Interactive multi-bounce, caustics, glossy on then-current GPUs.
- SIGGRAPH 2009 / TOG, DOI 10.1145/1576246.1531397; kunzhou.net/2009/GPUGI.pdf.

## Evidence

The 2009 GPU-GI paper from ZJU. Not a remint of Jensen 1996 (374) or Lightcuts (1042) or McGuire image-space PM (backup, not minted).

## Limitations

2009 GPU assumptions. Not ReSTIR. Illumination-cut is a cousin of Lightcuts — keep Lightcuts (1042) as the 2005 ancestor.

## Implications for Broadside

Anoptic GPU GI history on the China shelf. Photons (374) + Lightcuts (1042) + this. Modern path is ReSTIR/Lumen.

## Bottom line

Mint ZJU GPU GI 2009. Interactive, full stack.

## Links

- DOI: [10.1145/1576246.1531397](https://doi.org/10.1145/1576246.1531397)
- URL: http://kunzhou.net/2009/GPUGI.pdf
