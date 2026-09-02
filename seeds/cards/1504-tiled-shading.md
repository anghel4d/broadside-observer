---
title: "Tiled Shading"
authors: ["Ola Olsson", "Ulf Assarsson"]
year: 2011
venue: "JCGT"
arxiv: null
doi: "10.1080/2151237X.2011.621761"
source: "https://jcgt.org/published/0001/02/01/"
topics: [tiled-shading, GPU-culling, many-lights]
seed_rank: 1504
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: direct-illumination
cites:
  - title: "Clustered Deferred and Forward Shading"
    url: "http://www.cse.chalmers.se/~uffe/clustered_shading_preprint.pdf"
    year: 2012
    arxiv: null
    doi: "10.1145/2159616.2159619"
  - title: "Forward+: Bringing Deferred Lighting to the Next Level"
    url: "https://takahiroharada.files.wordpress.com/2015/04/forward_plus.pdf"
    year: 2012
    arxiv: null
    doi: null
  - title: "Deferred Rendering in Killzone 2"
    url: "https://www.guerrilla-games.com/read/deferred-rendering-in-killzone-2"
    year: 2007
    arxiv: null
    doi: null
see:
  - "477-clustered-deferred-and-forward-shading"
  - "340-forward-bringing-deferred-lighting-to-the-next-level"
  - "1346-deferred-shading"
---

# Tiled Shading

## One-sentence takeaway

Bin lights into screen-space tiles (and optionally a 2.5D depth split), then shade each pixel only against its tile's light list — the culling primitive clustered shading sits on.

## Why it matters here

Clustered (477) and Forward+ (340) are already live; Tiled Shading is the 2011 JCGT paper they both cite, and Archive 2026-09-02 explicitly left it unseen-as-a-card. GRID COMMAND many-light forward/deferred paths should speak this paper, not only the 2012 clustered follow-on.

## Key ideas

- **Screen tiles as light bins.** A compute (or raster) pass builds a per-tile list of overlapping light volumes; the shading pass reads only that list.
- **2.5D / depth splitting.** Split tiles along Z so a foreground lamp does not light the sky behind it — the germ of clustered 3D bins (477).
- **Orthogonal to deferred vs forward.** Same binning hosts tiled deferred *and* tiled forward; Harada Forward+ (340) is the AMD production twin.
- **Evidence.** JCGT 1(2), 2011, doi `10.1080/2151237X.2011.621761`. https://jcgt.org/published/0001/02/01/

## Caveats

- Not a remint of clustered 477 or Forward+ 340. Tile lists explode with huge lights / fog; clustered and stochastic culling exist because of that. Does not shade area lights — LTC (this batch) is the evaluation, this is the *which lights* structure.

## Links

- JCGT: https://jcgt.org/published/0001/02/01/
- DOI: https://doi.org/10.1080/2151237X.2011.621761
