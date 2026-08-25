---
title: "FOX ENGINE GDC 2013 detailed report (4gamer, parts 1–2)"
authors: ["4Gamer / Aetas"]
year: 2013
venue: "4gamer.net"
arxiv: null
doi: null
source: "https://www.4gamer.net/games/209/G020941/20130329004/"
topics:
  - "fox-engine"
seed_rank: 1356
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
  - title: "Real-time Physically Based Rendering — Basic Theory / Implementation"
    url: "http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx"
    year: 2011
    arxiv: null
    doi: null
see:
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1345-real-time-physically-based-rendering"
  - "1354-tech-analysis-metal-gear-solid-5s-fox-engine"
---

# FOX ENGINE GDC 2013 detailed report (4gamer, parts 1–2)

## One-sentence takeaway

4gamer's two-part GDC 2013 report is the best Japanese transcript of the Fox slides — no standalone PDF exists, so this is the slide text.

## Problem

Konami did not publish the deck. English DF covers the thesis; someone needed the slide-level Japanese writeup (linear workflow, 18% gray, PhotoScan, Marvelous Designer, deferred buffer list, half-Lambert translucency, SH probes, camera).

## Design

前編 (2013-03-29): tools, conference-room photo vs render, linear-space lighting, PBR via RAW + 18% gray, pointer to Gotanda CEDEC 2011, PhotoScan, clay/scan faces, Marvelous Designer 2. 後編 (2013-03-30): Tago on translucency in every light shader (not SSSS), roughness + view-dependent gloss, deferred G-buffer list (diffuse/specular/normal/velocity/translucency/material ID/depth/roughness), physical light units, SH light probes at quarter res, sky/time/weather, auto-exposure and camera effects. Editor byline on 後編: aueki.

## Evidence

Part 1 https://www.4gamer.net/games/209/G020941/20130329004/ and part 2 https://www.4gamer.net/games/209/G020941/20130329108/ both live. Part 1 updates with a link to part 2. Best available slide transcript (JP). Minted as one reportage card, not two.

## Limitations

Reportage, not a paper. Speaker name spellings drift (多胡順司/順二, 鈴木雅幸/雅之). Does not name SAO/FXAA/Kawase/MHBO — those are Courrèges.

## Implications for Broadside

When the talk card says "the slides claimed X", this is the source. Fold into 1344 Links if you only want one Fox card; kept here because there is no PDF.

## Bottom line

Mint one reportage card covering both URLs. Do not invent a slides PDF sibling.

## Links

- 前編: https://www.4gamer.net/games/209/G020941/20130329004/
- 後編: https://www.4gamer.net/games/209/G020941/20130329108/
