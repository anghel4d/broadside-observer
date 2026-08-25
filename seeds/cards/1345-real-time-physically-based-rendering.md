---
title: "Real-time Physically Based Rendering"
authors: ["Yoshiharu Gotanda"]
year: 2011
venue: "CEDEC"
arxiv: null
doi: null
source: "http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx"
topics:
  - "physically-based-shading"
seed_rank: 1345
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: physically-based-shading
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Practical Implementation of physically based shading models at tri-Ace"
    url: "http://research.tri-ace.com/Data/course_note_practical_implementation_at_triace.pdf"
    year: 2010
    arxiv: null
    doi: null
see:
  - "152-the-rendering-equation"
  - "344-physically-based-shading-at-disney"
  - "1312-microfacet-models-for-refraction-through-rough-surfaces"
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
---

# Real-time Physically Based Rendering

## One-sentence takeaway

Gotanda / tri-Ace CEDEC 2011 pair (Basic Theory + Implementation): the PBR primer 4gamer's Fox GDC writeup points at — rendering equation, BRDF, and a real-time implementation.

## Problem

Games were still lighting with ad-hoc Phong knobs that broke when the light or the time of day changed. Fox needed a physically based material language; 4gamer explicitly sends the reader here.

## Design

Two 60-minute CEDEC 2011 sessions, 7 September 2011. Official titles: "Real-time Physically Based Rendering - Basic Theory" and "Real-time Physically Based Rendering - Implementation". Theory covers the rendering equation and BRDF (4gamer CEDEC report). Implementation is physically based image-based lighting on current-gen consoles. English translations of both decks exist as PPTX (not PDF), reviewed by Lagarde and Hoffman; hosted on research.tri-ace.com. This is not the SIGGRAPH 2010 course "Practical Implementation of physically based shading models at tri-Ace" — that is a different, earlier course (cited).

## Evidence

Official session pages C11_PK0013 / C11_P0115 on cedec.cesa.or.jp. English PPTX both return HTTP 200 from research.tri-ace.com. Real-Time Rendering blog announced the English translations. 4gamer GDC 2013 part 1: 「詳しくは，CEDEC 2011でトライエースが行ったセッションのレポート記事などを参照」.

## Limitations

Slides are PPTX, not a published PDF or DOI paper. Two sessions; minted as one card because 4gamer treats them as one primer. Gotanda's later SIGGRAPH 2012 "Beyond a Simple Physically Based Blinn-Phong" is a different talk.

## Implications for Broadside

Fox PBR specular is a Blinn-Phong-family model with roughness (4gamer 後編), sitting near Walter 2007 GGX (1312) and Disney 2012 (344) without being either. Mint the CEDEC 2011 deck Fox was told to read.

## Bottom line

Mint Gotanda CEDEC 2011 as the PBR primer. Source is the English Implementation PPTX; Theory PPTX in Links. No invented PDF.

## Links

- Implementation (English PPTX): http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx
- Basic Theory (English PPTX): http://research.tri-ace.com/Data/cedec2011_RealtimePBR_BasicTheory_e.pptx
- Japanese Implementation PPTX: http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation.pptx
- Japanese Theory PPTX: http://research.tri-ace.com/Data/cedec2011_RealtimePBR_BasicTheory.pptx
- tri-Ace research index: http://research.tri-ace.com/
- CEDEC Implementation session: https://cedec.cesa.or.jp/2011/en/sessions/PG/C11_P0115.html
- 4gamer CEDEC 2011 theory report: https://www.4gamer.net/games/000/G000000/20110908035/
- English-translation note: https://www.realtimerendering.com/blog/english-translations-of-tri-ace-cedec-2011-slides-available/
