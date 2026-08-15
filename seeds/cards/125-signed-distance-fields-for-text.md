---
title: Signed Distance Fields for Text
authors:
- Chris Green
year: 2007
venue: SIGGRAPH
arxiv: null
doi: 10.1145/1281500.1281665
source: https://steamcdn-a.akamaihd.net/apps/valve/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf
topics:
- text
- graphics
seed_rank: 125
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 9
cites:
  - title: "Resolution independent curve rendering using programmable graphics hardware"
    url: "https://doi.org/10.1145/1073204.1073303"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073303"
  - title: "Adaptively sampled distance fields"
    url: "https://doi.org/10.1145/344779.344899"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344899"
  - title: "The Direct3D 10 system"
    url: "https://doi.org/10.1145/1141911.1141947"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141947"
  - title: "Shading in Valve's Source engine"
    url: "https://doi.org/10.1145/1185657.1185832"
    year: 2006
    arxiv: null
    doi: "10.1145/1185657.1185832"
  - title: "Silhouette maps for improved texture magnification"
    url: "https://doi.org/10.1145/1058129.1058139"
    year: 2004
    arxiv: null
    doi: "10.1145/1058129.1058139"
  - title: "Bixels: Picture Samples with Sharp Embedded Boundaries"
    url: "https://doi.org/10.2312/EGWR/EGSR04/255-264"
    year: 2004
    arxiv: null
    doi: "10.2312/EGWR/EGSR04/255-264"
  - title: "Real-time texture-mapped vector glyphs"
    url: "https://doi.org/10.1145/1111411.1111433"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111433"
see:
  - "128-loop-and-blinn-resolution-independent-curve-rendering-using-"
---

# Signed Distance Fields for Text

## One-sentence takeaway

Green stores a uniformly sampled signed distance in an 8-bit texture so GPU bilinear filtering reconstructs a sharp 0.5 isocontour — a 64×64 SDF replaces a 4096×4096 coverage bitmap for magnified text, signs, and alpha-tested impostors.

## Why it matters here

Broadside HUD, decals, and world text cannot ship a texture atlas per magnification. One low-res SDF plus a 0.5 alpha test (or a two-texel `smoothstep`) is the cheap path that still looks vector-sharp under camera zoom.

## Key ideas

- Generate from a high-res binary image, not from outlines: for each output texel, sign is in/out and magnitude is 2D distance to the nearest opposite pixel, mapped into [0,1] with 0.5 on the edge. Spread also sets how far outlines and glows can reach.
- Zero-shader path: bind the SDF as a regular alpha texture and alpha-test at 0.5. Bilinear reconstruction of *distance* is piecewise-linear in the edge, so you lose the “wiggle” that bilinear-of-coverage produces on diagonals.
- With a pixel shader: `smoothstep` between two distance thresholds for antialiasing (widen with screen-space derivatives under minification); color a distance band for outlines; offset a second lookup for drop shadows and outer glow — all live shader constants, used in Team Fortress 2 decals.
- Sharp corners need more than one channel. A single distance rounds corners at low resolution; AND-ing two distances (red/green) preserves a pointy corner inside one texel.
- Designed as a drop-in for Source: 8-bit formats, a few extra ALU, works on hardware with no programmable shading. Loop–Blinn implicit cubics and Frisken ADFs are cited as heavier alternatives they did not want.

## Caveats

## Links

- PDF (Valve / steamcdn): https://steamcdn-a.akamaihd.net/apps/valve/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf
- DOI: [10.1145/1281500.1281665](https://doi.org/10.1145/1281500.1281665)
