---
title: "All-Frequency Rendering of Dynamic, Spatially-Varying Reflectance"
authors:
  - "Jiaping Wang"
  - "Peiran Ren"
  - "Minmin Gong"
  - "John Snyder"
  - "Baining Guo"
year: 2009
venue: "SIGGRAPH Asia / TOG"
arxiv: null
doi: "10.1145/1661412.1618479"
source: "https://www.microsoft.com/en-us/research/wp-content/uploads/2009/12/sg.pdf"
topics:
  - "spherical-gaussians"
  - "svbrdf"
  - "prt"
  - "ssdf"
seed_rank: 1413
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: china-graphics
cites:
  - title: "Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
see:
  - "366-precomputed-radiance-transfer"
---

# All-Frequency Rendering of Dynamic, Spatially-Varying Reflectance

## One-sentence takeaway

THE spherical-Gaussian SVBRDF+visibility paper. SG lobes became a global real-time BRDF/GI currency.

## Why it's lovely

Why you might love this: MSRA/Tsinghua Gaussians on the sphere. The lobe every later real-time SG stack still adds up.

## Problem

PRT (366) is low-frequency. All-frequency BRDF × all-frequency visibility in dynamic scenes was a product of huge functions. Need a closed-form primitive.

## Design

- Spherical Gaussians as the lobe primitive for SVBRDF and for visibility (SSDFs).
- Closed-form products/integrals of Gaussians make dynamic, spatially-varying reflectance tractable.
- SIGGRAPH Asia 2009 / TOG, DOI 10.1145/1661412.1618479; MSRA PDF.
- ASG (2013) is the anisotropic sequel — mint both.

## Evidence

SG lobes became a global real-time BRDF/GI currency (UE, research, later neural SG). The SG primitive survives a top-50 cut.

## Limitations

Isotropic Gaussians until ASG. Not a path tracer. PRT (366) remains the linear-basis ancestor — do not remint it.

## Implications for Broadside

Anoptic SG lighting should cite this as the primitive, ASG as the anisotropic fork, PRT (366) as the SH cousin. China-graphics lineage on purpose.

## Bottom line

Mint Wang et al. SG. The lobe.

## Links

- DOI: [10.1145/1661412.1618479](https://doi.org/10.1145/1661412.1618479)
- URL: https://www.microsoft.com/en-us/research/wp-content/uploads/2009/12/sg.pdf
