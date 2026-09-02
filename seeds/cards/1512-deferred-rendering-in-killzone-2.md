---
title: "Deferred Rendering in Killzone 2"
authors: ["Michal Valient"]
year: 2007
venue: "GDC / Guerrilla"
arxiv: null
doi: null
source: "https://www.guerrilla-games.com/read/deferred-rendering-in-killzone-2"
topics: [deferred-lighting, production, light-prepass-adjacent]
seed_rank: 1512
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: direct-illumination
cites:
  - title: "Deferred Shading"
    url: "https://doi.org/10.1145/1198555.1198799"
    year: 2004
    arxiv: null
    doi: null
  - title: "DirectX 11 Rendering in Battlefield 3"
    url: "https://www.dice.se/wp-content/uploads/2014/12/GDC11_DX11_Presentation.pdf"
    year: 2011
    arxiv: null
    doi: null
  - title: "Tiled Shading"
    url: "https://jcgt.org/published/0001/02/01/"
    year: 2011
    arxiv: null
    doi: "10.1080/2151237X.2011.621761"
see:
  - "1346-deferred-shading"
  - "1428-reflections-and-volumetrics-of-killzone-shadow-fall"
  - "340-forward-bringing-deferred-lighting-to-the-next-level"
---

# Deferred Rendering in Killzone 2

## One-sentence takeaway

THE console deferred-lighting talk: split geometry from lighting, pack a fat G-buffer, and light many dynamic lamps on PS3 — the 7th-gen recipe every engine copied.

## Why it matters here

Generic deferred shading (1346) is live; Killzone Shadow Fall volumetrics (1428) is a later game. This 2007 GDC talk is the production deferred-*lighting* split that made many dynamic lights cheap on consoles. Tiled/Forward+ (340) and BF3 (this batch) sit on it.

## Key ideas

- **G-buffer then lights.** Geometry pass writes view-space normals, spec, depth; lighting pass accumulates many lights as screen-space volumes / full-screen passes.
- **Light pre-pass flavour.** Separate lighting from material apply so multiple lights do not multiply shader permutations.
- **Console constraints.** PS3 SPU/RSX split, MSAA, and the practical G-buffer layout that 360/PS3 engines cloned.
- **Evidence.** GDC 2007, Guerrilla. https://www.guerrilla-games.com/read/deferred-rendering-in-killzone-2

## Caveats

- Not a remint of 1346 or Shadow Fall 1428. Fat G-buffers hurt bandwidth; tiled/clustered exist because of that. No analytic area lights — those are LTC.

## Links

- URL: https://www.guerrilla-games.com/read/deferred-rendering-in-killzone-2
