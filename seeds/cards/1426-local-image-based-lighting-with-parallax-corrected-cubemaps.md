---
title: "Local Image-based Lighting with Parallax-corrected Cubemaps"
authors:
  - "Sébastien Lagarde"
  - "Antoine Zanuttini"
year: 2012
venue: "SIGGRAPH Talks"
arxiv: null
doi: "10.1145/2343045.2343094"
source: "https://seblagarde.wordpress.com/2012/09/29/image-based-lighting-approaches-and-parallax-corrected-cubemap/"
topics:
  - "parallax-cubemaps"
  - "local-IBL"
  - "reflection-probes"
  - "mirrors"
seed_rank: 1426
seed_batch: "mirrors-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: mirrors
cites:
  - title: "Moving Frostbite to Physically Based Rendering"
    url: "https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf"
    year: 2014
    arxiv: null
    doi: null
  - title: "Real Shading in Unreal Engine 4"
    url: "https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf"
    year: 2013
    arxiv: null
    doi: null
  - title: "Image-based Lighting approaches and parallax-corrected cubemap"
    url: "https://seblagarde.wordpress.com/2012/09/29/image-based-lighting-approaches-and-parallax-corrected-cubemap/"
    year: 2012
    arxiv: null
    doi: null
see:
  - "267-moving-frostbite-to-physically-based-rendering"
  - "270-real-shading-in-unreal-engine-4"
  - "1386-stochastic-screen-space-reflections"
---

# Local Image-based Lighting with Parallax-corrected Cubemaps

## One-sentence takeaway

Intersect the reflection ray with an artist box, then sample the cubemap from that point — local mirrors without lighting seams.

## Why it's lovely

Why you might love this: THE probe paper. Half-Life 2 assigned a cube per object and got seams; Lagarde mixed local cubes at a point of interest and parallax-corrected them on PS3/360. Every engine's reflection capture is this talk.

## Problem

Infinite environment maps cannot place a nearby pillar in a marble floor. Per-object cubemaps seam at object boundaries and suffer parallax (the reflection of a window sits at the wrong depth). Split-sum IBL (Karis 270, Frostbite 267) is already in the library; it does not solve *where* the reflection lives.

## Design

- Artist influence volumes (box/sphere) around in-engine-generated local cubemaps.
- Gather K-nearest volumes at a point of interest (camera, player, cinematic dummy); blend once, apply to all objects — no per-object seams.
- Parallax: ray–AABB (or convex proxy) intersection along the reflection vector; sample the cube with (hit − cubemapOrigin).
- Prefiltered mips still match the BRDF cone; this is a lookup correction, not a new integrator.

## Evidence

SIGGRAPH 2012 Talks, DONTNOD (Remember Me). Shipped on PS3/Xbox 360. Killzone, UE reflection captures, Unity, Frostbite, and Filament all clone the box-parallax step. Blog + slides remain the implementation notes.

## Limitations

Proxy boxes are a lie when rooms are not boxes; corridors and irregular interiors warp. Distant objects from the POI get the wrong local lighting. Static bake unless you recapture. Does not replace planar stencil mirrors or SSR for dynamic actors.

## Implications for Broadside

Anoptic interiors should default to parallax-corrected probes, not infinite IBL, for anything mirror-like that is not a true plane. 267/270 are the split-sum shading; this is the spatial placement. Pair with Uludag Hi-Z for what the camera can already see.

## Bottom line

Mint Lagarde 2012. THE parallax-cubemap / local-probe paper, not a remint of Frostbite PBR.

## Links

- DOI: [10.1145/2343045.2343094](https://doi.org/10.1145/2343045.2343094)
- URL: https://seblagarde.wordpress.com/2012/09/29/image-based-lighting-approaches-and-parallax-corrected-cubemap/
