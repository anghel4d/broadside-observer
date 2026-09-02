---
title: "All-frequency shadows using non-linear wavelet lighting approximation"
authors: ["Ren Ng", "Ravi Ramamoorthi", "Pat Hanrahan"]
year: 2003
venue: "ACM Trans. Graph."
arxiv: null
doi: "10.1145/882262.882280"
source: "https://doi.org/10.1145/882262.882280"
topics: [PRT, all-frequency, wavelets]
seed_rank: 1528
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: soft-shadows
cites:
  - title: "Precomputed Radiance Transfer"
    url: "https://cseweb.ucsd.edu/~ravir/papers/prt/prt.pdf"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
  - title: "Precomputed Shadow Fields for Dynamic Scenes"
    url: "https://doi.org/10.1145/1073204.1073229"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073229"
  - title: "Real-time Soft Shadows in Dynamic Scenes using Spherical Harmonic Exponentiation"
    url: "https://doi.org/10.1145/1141911.1141982"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141982"
see:
  - "366-precomputed-radiance-transfer"
  - "1416-precomputed-shadow-fields-for-dynamic-scenes"
  - "1415-real-time-soft-shadows-in-dynamic-scenes-using-spherical-harmoni"
---

# All-frequency shadows using non-linear wavelet lighting approximation

## One-sentence takeaway

Ng–Ramamoorthi–Hanrahan 2003: all-frequency vis/shadows as a PRT problem — non-linear wavelet lighting so sharp and soft shadows live in one precomputed product.

## Why it matters here

Sloan PRT (366) is low-frequency SH. Shadow fields (1416) and SHEXP (1415) are later dynamic-scene precomp. This SIGGRAPH 2003 paper is *the* all-frequency shadows paper: keep the high Haar coefficients that make a hard shadow hard. Distinct from 1413 (Wang all-frequency *SVBRDF*).

## Key ideas

- **Wavelet lighting.** Project distant lighting into Haar/non-standard wavelets; triple-product with a precomputed transport/visibility wavelet.
- **Non-linear approximation.** Keep the largest coefficients so a hard sun and a soft sky coexist without an SH bandlimit blur.
- **PRT as shadows.** The transport here *is* vis; relighting an all-frequency shadow field is a sparse dot product.
- **Evidence.** SIGGRAPH / TOG 2003, doi `10.1145/882262.882280`.

## Caveats

- Precomputed static receiver vis; dynamic occluders are 1415/1416. Not a remint of PRT 366, SHEXP 1415, or shadow fields 1416. Not Wang 1413.

## Links

- DOI: https://doi.org/10.1145/882262.882280
