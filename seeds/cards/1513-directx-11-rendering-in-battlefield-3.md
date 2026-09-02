---
title: "DirectX 11 Rendering in Battlefield 3"
authors: ["Johan Andersson"]
year: 2011
venue: "GDC"
arxiv: null
doi: null
source: "https://www.dice.se/wp-content/uploads/2014/12/GDC11_DX11_Presentation.pdf"
topics: [tiled-deferred, production, Frostbite]
seed_rank: 1513
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: direct-illumination
cites:
  - title: "Tiled Shading"
    url: "https://jcgt.org/published/0001/02/01/"
    year: 2011
    arxiv: null
    doi: "10.1080/2151237X.2011.621761"
  - title: "Deferred Rendering in Killzone 2"
    url: "https://www.guerrilla-games.com/read/deferred-rendering-in-killzone-2"
    year: 2007
    arxiv: null
    doi: null
  - title: "Moving Frostbite to Physically Based Rendering"
    url: "https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf"
    year: 2014
    arxiv: null
    doi: null
  - title: "Forward+: Bringing Deferred Lighting to the Next Level"
    url: "https://takahiroharada.files.wordpress.com/2015/04/forward_plus.pdf"
    year: 2012
    arxiv: null
    doi: null
see:
  - "340-forward-bringing-deferred-lighting-to-the-next-level"
  - "267-moving-frostbite-to-physically-based-rendering"
  - "477-clustered-deferred-and-forward-shading"
---

# DirectX 11 Rendering in Battlefield 3

## One-sentence takeaway

Shipped tiled deferred at 60 Hz in a shooter — the production talk that made tiled lighting mandatory and the Frostbite path clustered later sat on.

## Why it matters here

Tiled Shading (this batch) is the JCGT algorithm; this GDC 2011 talk is the 60 Hz existence proof. Forward+ (340) is the AMD twin; Frostbite PBR (267) is the later material talk. GRID COMMAND should cite Andersson when they mean *shipped tiled deferred*, not only Olsson.

## Key ideas

- **Compute-shader light culling.** DX11 CS builds per-tile light lists; lighting is a CS or fullscreen pass over the G-buffer.
- **60 Hz shooter budget.** The talk is about what survived shipping: MSAA, shadows, and the tile size / light-count trade.
- **Frostbite lineage.** The same engine later clustered (477) and went PBR (267); this is the tiled-deferred chapter.
- **Evidence.** GDC 2011. PDF: https://www.dice.se/wp-content/uploads/2014/12/GDC11_DX11_Presentation.pdf

## Caveats

- Talk, not a paper. Not a remint of Forward+ 340, clustered 477, or Frostbite PBR 267. Tile-list overflow is why clustered happened.

## Links

- PDF: https://www.dice.se/wp-content/uploads/2014/12/GDC11_DX11_Presentation.pdf
