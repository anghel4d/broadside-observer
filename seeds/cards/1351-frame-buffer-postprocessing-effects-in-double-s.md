---
title: "Frame Buffer Postprocessing Effects in DOUBLE-S.T.E.A.L (Wreckless)"
authors: ["Masaki Kawase"]
year: 2003
venue: "GDC"
arxiv: null
doi: null
source: "http://www.daionet.gr.jp/~masa/archives/GDC2003_DSTEAL.ppt"
topics:
  - "post-processing"
  - "bloom"
seed_rank: 1351
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: post-processing
cites:
  []
see:
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1355-metal-gear-solid-v-graphics-study"
---

# Frame Buffer Postprocessing Effects in DOUBLE-S.T.E.A.L (Wreckless)

## One-sentence takeaway

Kawase GDC 2003: framebuffer bloom/DoF/glare for Wreckless, including the bilinear-tap "Kawase blur" Fox uses for large-radius bloom.

## Problem

Gaussian bloom at game resolutions was too many taps on 2003 hardware. Need a large-radius glow that looks photographic.

## Design

Multi-pass blur: each pass samples farther from the pixel, relying on hardware bilinear filtering. Originally a bloom recipe; later generalized as Kawase blur. Courrèges: Fox downscales ×4, bright-pass from stored HDR luminance, then "4 consecutive iterations of Masaki Kawase's blur algorithm" before compositing lens flares.

## Evidence

GDC 2003. Author-hosted PPT (not PDF) at daionet.gr.jp/~masa/archives/GDC2003_DSTEAL.ppt, HTTP 200. GDC Vault 1022664 / 1022665. Courrèges 2017 names Kawase for Fox bloom.

## Limitations

PPT, not a paper. Vault video is members-only. Dual-Kawase etc. are later (not this talk).

## Implications for Broadside

Fox camera-sim bloom is this filter, not a Gaussian separable. Cheap enough to sit after an early tone-map (Courrèges).

## Bottom line

Mint Kawase 2003 from the author's PPT. No invented PDF. GDC Vault in Links.

## Links

- Author PPT: http://www.daionet.gr.jp/~masa/archives/GDC2003_DSTEAL.ppt
- GDC Vault: https://www.gdcvault.com/play/1022664/Frame-Buffer-Postprocessing-Effects-in
