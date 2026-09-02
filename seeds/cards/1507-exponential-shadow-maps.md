---
title: "Exponential Shadow Maps"
authors: ["Thomas Annen", "Tom Mertens", "Hans-Peter Seidel", "Eddy Flerackers", "Jan Kautz"]
year: 2008
venue: "Graphics Interface"
arxiv: null
doi: "10.20380/GI2008.07"
source: "https://lsi.ugr.es/jdar/informatica/doctorado/gi2008.pdf"
topics: [ESM, filterable-SM, mobile]
seed_rank: 1507
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: filterable-shadow-maps
cites:
  - title: "Convolution Shadow Maps"
    url: "https://www.mpi-inf.mpg.de/departments/computer-graphics/publications/convolution-shadow-maps"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/051-060"
  - title: "Variance Shadow Maps"
    url: "https://www.punkuser.net/vsm/vsm_paper.pdf"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
  - title: "Rendering Antialiased Shadows with Depth Maps"
    url: "https://graphics.pixar.com/library/ShadowMaps/paper.pdf"
    year: 1987
    arxiv: null
    doi: null
see:
  - "359-variance-shadow-maps"
  - "1066-rendering-antialiased-shadows-with-depth-maps"
---

# Exponential Shadow Maps

## One-sentence takeaway

Store exp(c·z) instead of depth and the shadow test becomes a filterable divide — the cheap SM mobile and Unity still ship after VSM bleeding.

## Why it matters here

Seen-no-card on INDEX (JCGT+VMV leftover). VSM 359 is live; ESM is the exponential warp that succeeded it on GLES. Convolution SM (this batch) is the Fourier theory parent. GRID COMMAND GLES/mid-mobile path should cite this, not pretend PCF (1066) is the filterable story.

## Key ideas

- **Exponential warp.** Encode d' = exp(c·z). Receiver vis ≈ exp(c·z_r) / filtered(d'), a 1-tap Chebyshev-like test that *is* linear in the encoded domain so mips work.
- **One channel.** Cheaper than VSM's two moments; c trades light-bleed vs overflow.
- **Ancestor of EVSM.** Engines later stored both positive and negative exponentials (EVSM) to tighten the bound; this paper is the single-exponential step.
- **Evidence.** Graphics Interface 2008, doi `10.20380/GI2008.07`. PDF: https://lsi.ugr.es/jdar/informatica/doctorado/gi2008.pdf

## Caveats

- Overflow/underflow of the exponential is the whole game; large depth ranges need splits (CSM 356) or EVSM. Not a remint of VSM 359 or Reeves 1066. Title was in seen.json without a card — now minted.

## Links

- PDF: https://lsi.ugr.es/jdar/informatica/doctorado/gi2008.pdf
- DOI: https://doi.org/10.20380/GI2008.07
