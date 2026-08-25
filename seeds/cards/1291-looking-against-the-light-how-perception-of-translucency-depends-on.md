---
title: "Looking against the light: How perception of translucency depends on lighting direction"
authors: ["B. Xiao", "B. Walter", "I. Gkioulekas", "T. Zickler", "E. Adelson", "K. Bala"]
year: 2014
venue: "Journal of Vision"
arxiv: null
doi: "10.1167/14.3.17"
source: "https://doi.org/10.1167/14.3.17"
topics: [translucent-materials]
seed_rank: 1291
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
---

# Looking against the light: How perception of translucency depends on lighting direction

## One-sentence takeaway

Xiao et al. 2014: translucency perception depends on lighting direction — looking against the light is a different material.

## Problem

Fleming-style gloss/translucency perception and Gkioulekas phase work needed a lighting-direction result for graphics lighting design.

## Design

Psychophysics: same object, different lighting direction, different perceived translucency. Lineage: Fleming; Gkioulekas phase.

## Evidence

Journal of Vision 2014, DOI 10.1167/14.3.17.

## Limitations

Perception paper, not a renderer. Tells you your GI lighting will change the material read.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint the JoV lighting-direction paper. Cite Gkioulekas phase.

## Links

- DOI: [10.1167/14.3.17](https://doi.org/10.1167/14.3.17)
