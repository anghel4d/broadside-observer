---
title: "Anisotropic Spherical Gaussians"
authors:
  - "Kun Xu"
  - "Wei-Lun Sun"
  - "Zhao Dong"
  - "Dan-Yong Zhao"
  - "Run-Dong Wu"
  - "Shi-Min Hu"
year: 2013
venue: "SIGGRAPH Asia / TOG"
arxiv: null
doi: "10.1145/2508363.2508386"
source: "https://cg.cs.tsinghua.edu.cn/people/~kun/"
topics:
  - "spherical-gaussians"
  - "anisotropy"
  - "brdf"
seed_rank: 1414
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: china-graphics
cites:
  - title: "All-Frequency Rendering of Dynamic, Spatially-Varying Reflectance"
    url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2009/12/sg.pdf"
    year: 2009
    arxiv: null
    doi: "10.1145/1661412.1618479"
  - title: "Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
see:
  - "366-precomputed-radiance-transfer"
---

# Anisotropic Spherical Gaussians

## One-sentence takeaway

ASG is in every real-time SG stack after 2013. The anisotropic-SG primitive, Tsinghua.

## Why it's lovely

Why you might love this: Gaussians that stretch. Brushed metal, hair-adjacent lobes, still a closed form. Kun Xu's ASG.

## Problem

Isotropic SGs cannot represent stretched NDFs / anisotropic BRDFs without a pile of lobes. Need an anisotropic spherical Gaussian with similar product/integral identities.

## Design

- Anisotropic spherical Gaussians with closed-form operations analogous to Wang 2009 SGs.
- Fits anisotropic BRDFs with far fewer lobes.
- SIGGRAPH Asia 2013 / TOG, DOI 10.1145/2508363.2508386; Tsinghua Kun Xu page.
- Not a remint of Wang 2009 — this is the anisotropic primitive.

## Evidence

Every later real-time SG/ASG stack (and several neural SG papers) cites this. Global top-50 as the anisotropic-SG primitive.

## Limitations

Still a lobe basis, not a path tracer. Fitting remains an art.

## Implications for Broadside

Anoptic anisotropic metals/fabrics in an SG pipeline: this card, not a pile of isotropic SGs. Pair with Wang 2009 and PRT (366).

## Bottom line

Mint ASG. Tsinghua's anisotropic lobe.

## Links

- DOI: [10.1145/2508363.2508386](https://doi.org/10.1145/2508363.2508386)
- URL: https://cg.cs.tsinghua.edu.cn/people/~kun/
