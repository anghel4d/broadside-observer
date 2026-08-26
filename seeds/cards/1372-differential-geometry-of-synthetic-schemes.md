---
title: "Differential Geometry of Synthetic Schemes"
authors: ["Felix Cherubini", "Matthias Hutzler", "Hugo Moeneclaey", "David W\u00e4rn"]
year: 2025
venue: "arXiv:math.AG"
arxiv: "2504.08495"
doi: null
source: "https://arxiv.org/abs/2504.08495"
topics: [curiosity]
seed_rank: 1372
seed_batch: "curiosity-2026-08-27"
reviewed: "2026-08-27"
pool: "maths-foundations"
relevance_score: 10
lineage: synthetic-algebraic-geometry
cites:
  - title: "Cubical Type Theory: a constructive interpretation of the univalence axiom"
    url: "https://arxiv.org/abs/1611.02108"
    year: 2018
    arxiv: "1611.02108"
    doi: "10.4230/LIPIcs.TYPES.2015.5"
  - title: "The Simplicial Model of Univalent Foundations (after Voevodsky)"
    url: "https://arxiv.org/abs/1211.2851"
    year: 2021
    arxiv: "1211.2851"
    doi: "10.4171/JEMS/1050"
  - title: "A type theory for synthetic \u221e-categories"
    url: "https://arxiv.org/abs/1705.07442"
    year: 2017
    arxiv: "1705.07442"
    doi: "10.21136/HS.2017.06"
  - title: "Enumerative tropical algebraic geometry in R\u00b2"
    url: "https://arxiv.org/abs/math/0312530"
    year: 2005
    arxiv: "math/0312530"
    doi: null
see:
  - "1054-cubical-type-theory"
  - "1237-the-simplicial-model-of-univalent-foundations"
  - "1125-a-type-theory-for-synthetic-infinity-categories"
  - "1150-enumerative-tropical-algebraic-geometry-in-r2"
---

# Differential Geometry of Synthetic Schemes

## One-sentence takeaway

Inside the Zariski topos (HoTT + three axioms), étale/smooth/unramified maps of schemes are exactly the maps that are bijective/surjective/injective on tangent spaces — and smooth schemes have finite free tangent modules.

## Why it's lovely

Why you might love this: Étale/smooth/unramified become tangent-space injectivity/iso/surjectivity inside synthetic algebraic geometry.

## Problem

Classical algebraic geometry defines étale/smooth/unramified via lifting properties and Kähler differentials. Synthetic algebraic geometry wants the same classes as *internal* properties of maps between schemes in a higher Zariski topos. What are the right synthetic definitions, and do the usual tangent-space characterisations survive?

## Design

- Work in HoTT with the three synthetic-AG axioms; higher structure unused essentially (1-topos suffices).
- New synthetic definitions of étale, smooth, unramified maps between schemes.
- Characterisations: unramified iff injective on tangent spaces; among smooth schemes, étale iff iso on tangents and smooth iff surjective on tangents.
- Tangent spaces of smooth schemes are finite free R-modules; local polynomial descriptions match classical expectations.

## Evidence

Internal theorems with the expected classical translations (remarks comparing to textbook definitions). arXiv 2504.08495.

## Limitations

Not a computational AG system and not an Alpoge Diophantine paper. Uses HoTT for convenience more than homotopy. Does not remint cubical TT or simplicial univalence.

## Implications for Broadside

Alpoge-adjacent taste (1197–1231) wants AG that feels like geometry, not only height functions. This is AG whose morphisms are judged by differentials *internally* — a synthetic twin of the DDG-in-HoTT card, on the Zariski side.

## Bottom line

Mint the synthetic étale dictionary. Differentials decide the map class inside the topos.

## Links

- arXiv: [2504.08495](https://arxiv.org/abs/2504.08495)
