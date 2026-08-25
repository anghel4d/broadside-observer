---
title: "A Practical Model for Subsurface Light Transport"
authors: ["Henrik Wann Jensen", "Stephen R. Marschner", "Marc Levoy", "Pat Hanrahan"]
year: 2001
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/383259.383319"
source: "https://doi.org/10.1145/383259.383319"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1245
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: subsurface-scattering
cites:
  - title: "Geometrical Considerations and Nomenclature for Reflectance"
    url: "https://doi.org/10.6028/nbs.mono.160"
    year: 1977
    arxiv: null
    doi: "10.6028/nbs.mono.160"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "A Diffusion Theory Model of Spatially Resolved, Steady-State Diffuse Reflectance for the Noninvasive Determination of Tissue Optical Properties in Vivo"
    url: "https://doi.org/10.1118/1.596777"
    year: 1992
    arxiv: null
    doi: "10.1118/1.596777"
  - title: "Reflection from Layered Surfaces due to Subsurface Scattering"
    url: "https://doi.org/10.1145/166117.166139"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166139"
see:
  - "152-the-rendering-equation"
  - "1251-geometrical-considerations-and-nomenclature-for-reflectance"
  - "1249-a-diffusion-theory-model-of-spatially-resolved-steady-state-diffuse"
  - "1247-reflection-from-layered-surfaces-due-to-subsurface-scattering"
---

# A Practical Model for Subsurface Light Transport

## One-sentence takeaway

The dipole BSSRDF that made subsurface scattering renderable: two point sources, Rd(r), measured marble and skin.

## Problem

Hanrahan–Krueger layered RTE and Farrell's medical diffusion profile existed; neither was a practical graphics BSSRDF you could put on a mesh.

## Design

Approximate multiple scattering by the diffusion dipole (real source + virtual source to match the extrapolated boundary), keep single scattering separate, evaluate an analytic Rd(r) as a BSSRDF. Nicodemus names the BSSRDF; Farrell 1992 supplies the tissue profile.

## Evidence

SIGGRAPH 2001, DOI 10.1145/383259.383319. The paper every later dipole, quantized-diffusion, and production SSS talk starts from.

## Limitations

Homogeneous semi-infinite assumption. Fails at edges, thin parts, and textured σs. Hierarchical and quantized-diffusion papers exist because this profile is expensive and wrong in those regimes.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint JMLH01 as the SSS origin on this shelf. Do not remint Kajiya RE 152. Cite Nicodemus, Farrell, Hanrahan–Krueger.

## Links

- DOI: [10.1145/383259.383319](https://doi.org/10.1145/383259.383319)
