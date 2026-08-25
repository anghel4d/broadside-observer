---
title: "Photorealism Through the Eyes of a FOX: The Core of Metal Gear Solid Ground Zeroes"
authors: ["Hideo Kojima", "Hideki Sasaki", "Masayuki Suzuki", "Junji Tago"]
year: 2013
venue: "GDC"
arxiv: null
doi: null
source: "https://www.youtube.com/watch?v=WsmxBE9Gw6A"
topics:
  - "fox-engine"
  - "physically-based-shading"
  - "deferred-rendering"
seed_rank: 1344
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: fox-engine
cites:
  - title: "Real-time Physically Based Rendering — Basic Theory / Implementation"
    url: "http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx"
    year: 2011
    arxiv: null
    doi: null
see:
  - "344-physically-based-shading-at-disney"
  - "1312-microfacet-models-for-refraction-through-rough-surfaces"
  - "152-the-rendering-equation"
  - "367-an-efficient-representation-for-irradiance-environment-maps"
  - "1345-real-time-physically-based-rendering"
  - "1346-deferred-shading"
  - "1348-the-importance-of-being-linear"
  - "1354-tech-analysis-metal-gear-solid-5s-fox-engine"
  - "1355-metal-gear-solid-v-graphics-study"
  - "1356-fox-engine-gdc-2013-4gamer-reportage"
---

# Photorealism Through the Eyes of a FOX: The Core of Metal Gear Solid Ground Zeroes

## One-sentence takeaway

Kojima Productions' GDC 2013 Fox Engine session: deferred PBR, linear-space lighting, RAW/18% gray references, photogrammetry, and camera simulation — there is no SIGGRAPH Fox/MGSV talk.

## Problem

MGS V needed the same lighting on characters and backgrounds, many dynamic lights, and materials that survive weather/time-of-day changes without per-shot retuning.

## Design

The talk (Sasaki / Suzuki / Tago, framed by Kojima) claims a deferred renderer; linear-space lighting (compute at gamma 1.0, tone-map to display); physically based materials with a roughness map and physical light units (luminous flux / illuminance / luminance / color temperature) on a Blinn-Phong-family lighting model; all light shaders support translucency (half-Lambert-inspired wrap, not Jimenez SSSS); SH irradiance probes from offline cubemaps; camera simulation (DoF, bloom, motion blur, auto-exposure, lens flare). Asset side: Agisoft PhotoScan photogrammetry, Marvelous Designer 2 cloth, RAW capture against an 18% gray card in the office conference-room reference lighting. The slide deck was presented live and is not a separate download — no Konami/slideshare PDF was published. 4gamer's two-part writeup is the slide transcript.

## Evidence

Free video: YouTube WsmxBE9Gw6A. GDC Vault 1019121 (alt id 1031807). Speakers: Hideo Kojima, Hideki Sasaki (CG art director), Masayuki Suzuki (lighting), Junji Tago (technical director). Konami / Kojima Productions. Techniques listed above are what the talk + 4gamer slide report actually claim.

## Limitations

No standalone slides PDF. Software (PhotoScan, Marvelous Designer, Softimage, Mudbox) is not a paper. Translucency is a wrap-lighting approximation, not a dipole/SSSS paper. Shipped MGSV extras (SAO + line-integral SSAO, Kawase bloom, FXAA, MHBO-style motion blur) are documented by Courrèges 2017 from the PC build, not named on the 2013 slides.

## Implications for Broadside

Anoptic's mesh path is still a forward+/FMM+RC bet; Fox is the deferred PBR + linear workflow + camera-sim stack that a shipped open-world game actually used. Cite 344 (Disney 2012) and 1312 (GGX) as the PBR family Fox sits near — do not remint them. Do not treat SIGGRAPH 2017 Decima as this talk.

## Bottom line

Mint the talk as 1344. Source is the YouTube/Vault URL. Fold no invented slides paper. Cite Gotanda CEDEC 2011 as the PBR primer 4gamer pointed at.

## Links

- YouTube (free): https://www.youtube.com/watch?v=WsmxBE9Gw6A
- GDC Vault: https://gdcvault.com/play/1019121/Photorealism-Through-the-Eyes-of
- GDC Vault alt id: https://www.gdcvault.com/play/1031807/Photorealism-Through-the-Eyes-of
- 4gamer 前編: https://www.4gamer.net/games/209/G020941/20130329004/
- 4gamer 後編: https://www.4gamer.net/games/209/G020941/20130329108/
- Digital Foundry 2013: https://www.eurogamer.net/digitalfoundry-tech-analysis-mgs5-fox-engine
- Courrèges 2017: https://www.adriancourreges.com/blog/2017/12/15/mgs-v-graphics-study/
