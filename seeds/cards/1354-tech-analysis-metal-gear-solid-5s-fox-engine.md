---
title: "Tech Analysis: Metal Gear Solid 5's FOX Engine"
authors: ["Digital Foundry"]
year: 2013
venue: "Eurogamer"
arxiv: null
doi: null
source: "https://www.eurogamer.net/digitalfoundry-tech-analysis-mgs5-fox-engine"
topics:
  - "fox-engine"
seed_rank: 1354
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: fox-engine
cites:
  - title: "Photorealism Through the Eyes of a FOX: The Core of Metal Gear Solid Ground Zeroes"
    url: "https://www.youtube.com/watch?v=WsmxBE9Gw6A"
    year: 2013
    arxiv: null
    doi: null
see:
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1355-metal-gear-solid-v-graphics-study"
  - "1356-fox-engine-gdc-2013-4gamer-reportage"
---

# Tech Analysis: Metal Gear Solid 5's FOX Engine

## One-sentence takeaway

Digital Foundry 2013: English breakdown of the GDC Fox talk — deferred as the foundation, linear-space lighting, PBR from captured assets, translucency in the shaders, view-dependent roughness.

## Problem

The GDC session was dense and streamed once. Western readers needed a tech analysis that named the techniques without a slides PDF.

## Design

Walks the same three-layer story the talk told: deferred (many lights, shared lighting) → linear-space lighting (gamma-correct accumulation) → physically based materials (PhotoScan / Marvelous Designer / high-exposure textures). Flags view-dependent roughness and "all shaders support translucency" as the distinctive Fox claims. Notes the demo was PC and current-gen consoles were still a question.

## Evidence

Published on eurogamer.net immediately after GDC 2013. URL as given. No byline in the article HTML; authored as Digital Foundry. Secondary analysis card, not a primary paper.

## Limitations

Based on the talk and trailer, not a frame-dissection (that is Courrèges 2017). Does not name SAO, Kawase, FXAA, or MHBO.

## Implications for Broadside

Use DF for the 2013 public English reading of the talk; use Courrèges for what the 2015 PC build actually did.

## Bottom line

Mint as the secondary English analysis. Cite the GDC talk. Do not treat it as a slides PDF.

## Links

- Article: https://www.eurogamer.net/digitalfoundry-tech-analysis-mgs5-fox-engine
