---
title: "Rendering Synthetic Objects into Real Scenes: Bridging Traditional and Image-based Graphics with Global Illumination and High Dynamic Range Photography"
authors:
  - "Paul Debevec"
year: 1998
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/280814.280864"
source: "https://doi.org/10.1145/280814.280864"
topics:
  - "image-based-lighting"
  - "hdr"
  - "light-probe"
  - "vulkan-realtime-rendering"
seed_rank: 1106
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 9
lineage: image-based-lighting
cites:
  - title: "Recovering High Dynamic Range Radiance Maps from Photographs"
    url: "https://doi.org/10.1145/258734.258884"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258884"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "An Efficient Representation for Irradiance Environment Maps"
    url: "https://doi.org/10.1145/383507.383547"
    year: 2001
    arxiv: null
    doi: "10.1145/383507.383547"
  - title: "A Reflectance Model for Computer Graphics"
    url: "https://doi.org/10.1145/800224.806819"
    year: 1981
    arxiv: null
    doi: "10.1145/800224.806819"
see:
  - "152-the-rendering-equation"
  - "367-an-efficient-representation-for-irradiance-environment-maps"
  - "1006-a-reflectance-model-for-computer-graphics"
  - "409-photographic-tone-reproduction-for-digital-images"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Rendering Synthetic Objects into Real Scenes: Bridging Traditional and Image-based Graphics with Global Illumination and High Dynamic Range Photography

## One-sentence takeaway

Light probe + distant/local/synthetic split + differential rendering: illuminate new objects with *measured* HDR radiance, not placed virtual lights, and composite them so they cast and receive light in a photograph.

## Why it matters here

Ramamoorthi SH irradiance (367) is how a real-time engine *stores* a light probe; Reinhard (409) is how it tones it. The missing origin is Debevec SIGGRAPH 1998 — the paper that *defined* image-based lighting. Anoptic outdoor/overcast/interior lighting is a probe, not a list of analytic lights; radiance cascades (005) then distribute that irradiance. Distant scene needs no BRDF (it is a radiance map); local scene has an estimated BRDF so it can catch shadows and bounce; synthetic objects have known materials. Differential rendering lets the local BRDF be wrong and still look right in a plate.

## Key ideas

- Three components: distant (light-based, no reflectance), local (estimated BRDF, catches shadows / bounce), synthetic (known BRDF).
- Light probe (mirrored sphere / panoramic HDR) measures incident radiance at the insert location. 1997 HDR recovery is the capture companion, not this paper's contribution.
- Global illumination among the three; light reflected *back* at the distant scene is ignored, so you never need the building's BRDF.
- Differential rendering: compute the local scene with and without the synthetic objects, add the difference to the photograph. Errors in the estimated local BRDF largely cancel.

## Caveats

- The 1998 method is offline GI into a plate. Real-time IBL is SH / specular prefilter / RC; don't run this GI loop in the frame.
- Light-probe location is a single point; objects that span lighting variation need multiple probes or a volume (which is 451 / RC).
- Capture and calibration (exposure series, sphere, camera response) are the production tax; the algorithm assumes a recovered HDR map.

## Links

- DOI: [10.1145/280814.280864](https://doi.org/10.1145/280814.280864)
- Author PDF: [https://pauldebevec.com/Research/IBL/debevec-siggraph98.pdf](https://pauldebevec.com/Research/IBL/debevec-siggraph98.pdf)
- Project: [https://pauldebevec.com/Research/IBL/](https://pauldebevec.com/Research/IBL/)
