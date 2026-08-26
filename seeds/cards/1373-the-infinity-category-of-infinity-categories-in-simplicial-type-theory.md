---
title: "The \u221e-category of \u221e-categories in simplicial type theory"
authors: ["Daniel Gratzer", "Jonathan Weinberger", "Ulrik Buchholtz"]
year: 2026
venue: "arXiv:math.CT"
arxiv: "2602.02218"
doi: null
source: "https://arxiv.org/abs/2602.02218"
topics: [curiosity]
seed_rank: 1373
seed_batch: "curiosity-2026-08-27"
reviewed: "2026-08-27"
pool: "maths-foundations"
relevance_score: 10
lineage: synthetic-infinity-categories
cites:
  - title: "A type theory for synthetic \u221e-categories"
    url: "https://arxiv.org/abs/1705.07442"
    year: 2017
    arxiv: "1705.07442"
    doi: "10.21136/HS.2017.06"
  - title: "The Simplicial Model of Univalent Foundations (after Voevodsky)"
    url: "https://arxiv.org/abs/1211.2851"
    year: 2021
    arxiv: "1211.2851"
    doi: "10.4171/JEMS/1050"
  - title: "Quasi-categories vs Segal spaces"
    url: "https://arxiv.org/abs/math/0607820"
    year: 2006
    arxiv: "math/0607820"
    doi: null
  - title: "Cubical Type Theory: a constructive interpretation of the univalence axiom"
    url: "https://arxiv.org/abs/1611.02108"
    year: 2018
    arxiv: "1611.02108"
    doi: "10.4230/LIPIcs.TYPES.2015.5"
  - title: "Rzk: a Proof Assistant for Synthetic \u221e-Categories"
    url: "https://arxiv.org/abs/2607.12207"
    year: 2026
    arxiv: "2607.12207"
    doi: null
see:
  - "1125-a-type-theory-for-synthetic-infinity-categories"
  - "1237-the-simplicial-model-of-univalent-foundations"
  - "1239-quasi-categories-vs-segal-spaces"
  - "1054-cubical-type-theory"
---

# The ∞-category of ∞-categories in simplicial type theory

## One-sentence takeaway

Simplicial type theory finally constructs the ∞-category of ∞-categories, recovering straightening–unstraightening and a directed structure-identity principle purely type-theoretically.

## Why it's lovely

Why you might love this: The missing Cat_∞ lives in simplicial type theory — straightening/unstraightening, synthetically.

## Problem

Riehl–Shulman simplicial type theory (1125) could state formal higher-category arguments, but non-trivial examples — especially Cat_∞ itself — were missing. Spaces arrived via cubical techniques; categories of categories did not. Without Cat_∞, synthetic ∞-category theory lacks its main universe.

## Design

- Build on STT plus cubical-style techniques that already produced the ∞-category of spaces.
- Construct a directed univalent category of categories inside STT.
- Verify essential properties; recover straightening–unstraightening type-theoretically.
- Obtain directed structure-homomorphism principle instances (structure identity for directed data).

## Evidence

Foundational construction with verified universal properties; arXiv 2602.02218. Positions itself as the last major STT primitive.

## Limitations

Still STT, not a full directed type theory implementation (Rzk 2607.12207 is the tool leftover — cited/rejected this cycle). Not a remint of 1125, 1237, or 1239.

## Implications for Broadside

Leftover of synthetic-∞ (1125) and of simplicial univalence (1237)/quasi-category dictionary (1239): the universe those papers talked about now exists inside the type theory. Ano/Broadside directed rewrites want exactly this universe.

## Bottom line

Mint Cat_∞ in STT. The synthetic skyhook is finally attached.

## Links

- arXiv: [2602.02218](https://arxiv.org/abs/2602.02218)
