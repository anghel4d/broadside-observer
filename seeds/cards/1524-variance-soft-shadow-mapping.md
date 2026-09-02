---
title: "Variance Soft Shadow Mapping"
authors: ["Baoguang Yang", "Zhao Dong", "Jieqing Feng", "Hans-Peter Seidel", "Jan Kautz"]
year: 2010
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/j.1467-8659.2010.01800.x"
source: "https://doi.org/10.1111/j.1467-8659.2010.01800.x"
topics: [PCSS, VSSM, filterable-SM]
seed_rank: 1524
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: filterable-shadow-maps
cites:
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
  - title: "Variance Shadow Maps"
    url: "https://www.punkuser.net/vsm/vsm_paper.pdf"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
  - title: "Layered variance shadow maps"
    url: "https://doi.org/10.1145/1342250.1342271"
    year: 2008
    arxiv: null
    doi: "10.1145/1342250.1342271"
see:
  - "359-variance-shadow-maps"
---

# Variance Soft Shadow Mapping

## One-sentence takeaway

Yang VSSM: PCSS blocker search evaluated with filterable VSM moments — the academic PCSS+VSM fusion engines still copy as 'cheap contact-hardening.'

## Why it matters here

PCSS (this batch) wants a variable PCF that is expensive; VSM 359 is filterable but hard-edged. VSSM puts Chebyshev on a *variable* kernel. LVSM (this batch) is the bleed fix for VSM itself, not this PCSS fusion.

## Key ideas

- **VSM as the PCF.** Blocker search uses summed-area / mip moments; the penumbra kernel is a Chebyshev query, not a 25-tap PCF.
- **Contact-hardening at VSM cost.** One SAT/mip chain, variable width, no per-texel depth compares in the large kernel.
- **Production cousin.** Many 'PCSS' engine implementations are closer to VSSM/EVSM-PCSS than to Fernando's original PCF loop.
- **Evidence.** CGF 2010, doi `10.1111/j.1467-8659.2010.01800.x`.

## Caveats

- Inherits VSM light-bleed; LVSM/MSM are the usual next patch. Not a remint of VSM 359 or PCSS.

## Links

- DOI: https://doi.org/10.1111/j.1467-8659.2010.01800.x
