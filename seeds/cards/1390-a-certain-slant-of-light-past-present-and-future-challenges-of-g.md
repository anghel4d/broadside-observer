---
title: "A Certain Slant of Light: Past, Present and Future Challenges of Global Illumination in Games"
authors:
  - "Sam Martin"
year: 2012
venue: "SIGGRAPH Courses / Geomerics"
arxiv: null
doi: null
source: "https://blog.selfshadow.com/publications/s2012-shading-course/"
topics:
  - "Enlighten"
  - "precomputed-radiosity"
seed_rank: 1390
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 8
lineage: realtime-gi
cites:
  - title: "Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
  - title: "Light Propagation Volumes in CryEngine 3"
    url: "https://www.crytek.com/download/Light_Propagation_Volumes.pdf"
    year: 2009
    arxiv: null
    doi: null
see:
  - "366-precomputed-radiance-transfer"
  - "277-light-propagation-volumes-in-cryengine-3"
---

# A Certain Slant of Light: Past, Present and Future Challenges of Global Illumination in Games

## One-sentence takeaway

Geomerics Enlighten as the paper: precomputed radiosity middleware that ran a decade of consoles.

## Why it's lovely

Why you might love this: The GI that actually shipped on PS3/360/PS4 before Lumen. Radiosity as a product, not a 1990s thesis.

## Problem

Console games needed bounced light with moving sun and destroyable sets, without a path tracer and without baking every time of day as a unique lightmap. Academic PRT (366) was the language; someone had to productize it.

## Design

- Precomputed radiosity / Enlighten: chart-based transport, runtime relight from a low-order lighting basis.
- The 2012 SIGGRAPH shading-course talk is the artifact (selfshadow course page).
- Covers the real constraints: memory, charting, artist workflow, and why games were still lightmapping in 2012.
- Positions Enlighten against SSAO, LPV, and future RT — a field snapshot that is also the middleware's paper of record.

## Evidence

Enlighten ran Battlefield, a decade of Unity titles, and many consoles. The course notes are what engines cite when they say 'Enlighten-style'.

## Limitations

Precompute assumes mostly-static geometry. Not Lumen. Not a remint of PRT (366) — this is the game-middleware view of that math.

## Implications for Broadside

Anoptic still needs a bake-relight path for mid-spec. Enlighten is that card; PRT (366) is the math; Lumen/RC are the dynamic successors.

## Bottom line

Mint Enlighten. Precomputed radiosity as a shipped product.

## Links

- URL: https://blog.selfshadow.com/publications/s2012-shading-course/
