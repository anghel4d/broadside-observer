---
title: "Percentage-Closer Soft Shadows"
authors: ["Randima Fernando"]
year: 2005
venue: "SIGGRAPH Sketches / NVIDIA"
arxiv: null
doi: null
source: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
topics: [PCSS, soft-shadows, contact-hardening]
seed_rank: 1502
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: soft-shadows
cites:
  - title: "Rendering Antialiased Shadows with Depth Maps"
    url: "https://graphics.pixar.com/library/ShadowMaps/paper.pdf"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37435"
  - title: "Casting Curved Shadows on Curved Surfaces"
    url: "https://dl.acm.org/doi/10.1145/800248.807402"
    year: 1978
    arxiv: null
    doi: "10.1145/800248.807402"
  - title: "Variance Shadow Maps"
    url: "https://www.punkuser.net/vsm/vsm_paper.pdf"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
  - title: "Cascaded Shadow Maps"
    url: "https://developer.download.nvidia.com/SDK/10.5/opengl/src/cascaded_shadow_maps/doc/cascaded_shadow_maps.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "1066-rendering-antialiased-shadows-with-depth-maps"
  - "1005-casting-curved-shadows-on-curved-surfaces"
  - "359-variance-shadow-maps"
  - "356-cascaded-shadow-maps"
  - "1443-fast-accurate-soft-shadows-with-adaptive-light-source-sampling"
---

# Percentage-Closer Soft Shadows

## One-sentence takeaway

Search the shadow map for blockers, size a PCF kernel from blocker-to-receiver distance over light size, and you get contact-hardening penumbrae from a single directional SM — the sketch every engine cloned for a decade of sun shadows.

## Why it matters here

INDEX already noted PCSS as *seen, no card*. Reeves PCF (1066) and Williams SM (1005) are live; this is the variable-width penumbra on top. GRID COMMAND outdoor sun still wants contact-hardening, not a uniform 3×3 PCF or a VSM bleed (359). Schwärzler 1443 is adaptive *area-light sampling*, not this blocker-search recipe.

## Key ideas

- **Blocker search.** Average SM depth of texels closer than the receiver inside a search window sized by light angular width.
- **Variable PCF.** Filter width ∝ (receiver − blocker) / blocker × light size. Near contact the kernel collapses (hard); far it grows (soft).
- **One SM, no extra geometry.** Works on the same cascade atlas as CSM (356). Cheap enough for 2005 SM3 hardware; still the fallback when RT shadows are off.
- **Evidence.** SIGGRAPH 2005 Sketches; NVIDIA whitepaper `shadow_PCSS.pdf`. GPU Gems 3 popularized the same recipe.

## Caveats

- Blocker average is a heuristic — overlapping blockers, large penumbrae, and undersampled cascades halo. Not a remint of Reeves 1066, Williams 1005, VSM 359, or CSM 356. Academic quality jump is Guennebaud backprojection / VSSM (this batch).

## Links

- PDF: https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf
