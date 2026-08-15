---
title: "Photographic Tone Reproduction for Digital Images"
authors:
  - "Erik Reinhard"
  - "Michael Stark"
  - "Peter Shirley"
  - "James A. Ferwerda"
year: 2002
venue: "SIGGRAPH / ACM TOG"
arxiv: null
doi: "10.1145/566654.566575"
source: "https://doi.org/10.1145/566654.566575"
topics:
  - tonemap
seed_rank: 409
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
cites:
  - title: "Recovering high dynamic range radiance maps from photographs"
    url: "https://doi.org/10.1145/258734.258884"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258884"
  - title: "A visibility matching tone reproduction operator for high dynamic range scenes"
    url: "https://doi.org/10.1109/2945.646233"
    year: 1997
    arxiv: null
    doi: "10.1109/2945.646233"
  - title: "Color transfer between images"
    url: "https://doi.org/10.1109/38.946629"
    year: 2001
    arxiv: null
    doi: "10.1109/38.946629"
  - title: "Contrast in complex images"
    url: "https://doi.org/10.1364/josaa.7.002032"
    year: 1990
    arxiv: null
    doi: "10.1364/josaa.7.002032"
  - title: "A multiresolution spline with application to image mosaics"
    url: "https://doi.org/10.1145/245.247"
    year: 1983
    arxiv: null
    doi: "10.1145/245.247"
  - title: "Theory of edge detection"
    url: "https://doi.org/10.1098/rspb.1980.0020"
    year: 1980
    arxiv: null
    doi: "10.1098/rspb.1980.0020"
  - title: "Lightness and Retinex Theory"
    url: "https://doi.org/10.1364/josa.61.000001"
    year: 1971
    arxiv: null
    doi: "10.1364/josa.61.000001"
  - title: "Vision: A Computational Investigation into the Human Representation and Processing of Visual Information"
    url: "https://doi.org/10.7551/mitpress/9780262514620.001.0001"
    year: 1982
    arxiv: null
    doi: "10.7551/mitpress/9780262514620.001.0001"
see: []
---

# Photographic Tone Reproduction for Digital Images

## One-sentence takeaway

Map HDR world luminance through a photographic Zone-System curve: scale the log-average to a chosen middle-grey key, then compress with L/(1+L), optionally locally via automatic dodge-and-burn.

## Why it matters here

Anoptic’s HDR lighting / radiance-cascade output still has to land on an SDR or scRGB display. Reinhard is the default global operator (and the parent of every “auto-exposure + shoulder” game tonemapper) before you reach ACES or AgX.

## Key ideas

- Scene key: L̄_w is the log-average luminance; L = (a / L̄_w) L_w with a ≈ 0.18 for middle grey (or 0.09 / 0.36 for low/high key).
- Global curve L_d = L/(1+L) is linear in the shadows and compresses highlights into [0,1); L_white burns out a chosen highlight.
- Local operator replaces the 1 in the denominator with a scale-selected Gaussian neighborhood V₁(x,y,s) so dark detail in bright surrounds survives without classic halo artifacts.
- Reported ~20 fps global / ~1.3 s local on 512² hardware of the era; still the reference implementation behind `pfstmo_reinhard02`.

## Caveats

## Links

- DOI: [10.1145/566654.566575](https://doi.org/10.1145/566654.566575)
- Utah TR UUCS-02-001: https://www-old.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
