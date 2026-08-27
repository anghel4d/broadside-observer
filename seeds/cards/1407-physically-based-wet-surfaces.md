---
title: "Physically Based Wet Surfaces"
authors:
  - "Sebastien Lagarde"
year: 2013
venue: "production notes"
arxiv: null
doi: null
source: "https://seblagarde.wordpress.com/2013/04/14/water-drop-3b-physically-based-wet-surfaces/"
topics:
  - "pbr-wet"
  - "puddles"
seed_rank: 1407
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: water
cites:
  - title: "Moving Frostbite to Physically Based Rendering"
    url: "https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf"
    year: 2014
    arxiv: null
    doi: null
  - title: "Microfacet Models for Refraction through Rough Surfaces"
    url: "https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf"
    year: 2007
    arxiv: null
    doi: null
see:
  - "267-moving-frostbite-to-physically-based-rendering"
  - "1312-microfacet-models-for-refraction-through-rough-surfaces"
---

# Physically Based Wet Surfaces

## One-sentence takeaway

THE game-PBR wetness recipe: darken diffuse, boost spec, flatten puddles. The 3b post, not 3a theory and not the rain post.

## Why it's lovely

Why you might love this: A blog post that became every engine's wetness checkbox. Lagarde 3b — the recipe, not the lecture.

## Problem

PBR materials look fake when wet if you only darken albedo. Real wetness is a thin water layer: darker diffuse, higher spec, smoother normals, puddles that actually reflect. Need a production parameterization.

## Design

- Water-drop 3b: the practical wet-surface model (darken, spec, roughness, puddle flatten).
- Sits on Frostbite PBR (267). Explicitly not 3a (theory) and not water-drop 2b (dynamic rain).
- URL: seblagarde.wordpress.com/2013/04/14/water-drop-3b-physically-based-wet-surfaces/

## Evidence

Copied into UE/Unity/Frostbite wetness nodes. The post is the paper.

## Limitations

A layer approximation, not a simulated film. Does not do rain streaks (Garg–Nayar leftover). Needs SSR (1386) to look like contact puddles.

## Implications for Broadside

Anoptic wetness: this card + stochastic SSR + Frostbite PBR (267). Do not mint 3a or the rain post.

## Bottom line

Mint Lagarde 3b. The wetness recipe.

## Links

- URL: https://seblagarde.wordpress.com/2013/04/14/water-drop-3b-physically-based-wet-surfaces/
