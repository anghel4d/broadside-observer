---
title: "Sparse Virtual Textures / MegaTexture"
authors:
  - "John Carmack"
  - "id Software"
year: 2007
venue: "QuakeCon / id Tech 5"
arxiv: null
doi: null
source: "https://silverspaceship.com/src/svt/"
topics:
  - texturing
  - streaming
seed_rank: 404
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 7
lineage: gpu-driven-rendering
cites:
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/s2021/Karis_Nanite_SIGGRAPH_Advances_2021_final.pdf"
    year: 2021
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "090-nanite-a-deep-dive"
---

# Sparse Virtual Textures / MegaTexture

## One-sentence takeaway

Treat a unique, planet-sized texture as a virtual address space: a page table plus a physical texture cache, with the pixel shader translating virtual UVs into resident tiles.

## Why it matters here

Anoptic’s unique-world / GRID COMMAND terrain cannot uniquely unwrap every cliff into a 2D atlas that fits in VRAM. Virtual texturing is the streaming contract — the same “only the visible mip tiles are resident” idea Nanite later applies to geometry.

## Key ideas

- Carmack’s QuakeCon 2007 / id Tech 5 MegaTexture pitch: one unique texture for the world, streamed from disk, instead of repeating tiling sets.
- Barrett’s SVT write-up makes the hardware analogy explicit: virtual UV → page-table lookup → physical atlas sample, with feedback from a visibility pass deciding which pages to page in.
- van Waveren’s SIGGRAPH 2009 id Tech 5 deck adds the production pieces: sparse mip pyramids, transcoders, and a job system feeding the cache.
- Failures look like blurry fallback mips, not missing materials — the page table always has a coarser resident ancestor.

## Caveats

## Links

- Barrett SVT (technique + GDC 2008 talk notes): https://silverspaceship.com/src/svt/
- van Waveren, “id Tech 5 Challenges” (SIGGRAPH 2009): https://mrelusive.com/publications/presentations/2009_siggraph/05-JP_id_Tech_5_Challenges.pdf
