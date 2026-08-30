---
title: "Magnitude Homology Is the Associated Graded of the Length Filtration"
authors: ["Luciano Melodia"]
year: 2026
venue: "arXiv:math.AT"
arxiv: "2608.21479"
doi: null
source: "https://arxiv.org/abs/2608.21479"
topics: [curiosity]
seed_rank: 1473
seed_batch: "curiosity-2026-08-31"
reviewed: "2026-08-31"
pool: "maths-foundations"
relevance_score: 9
lineage: magnitude
cites:
  - title: "The magnitude of metric spaces"
    url: "https://arxiv.org/abs/1012.5857"
    year: 2013
    arxiv: "1012.5857"
    doi: "10.4171/dm/415"
see:
  - "1084-the-magnitude-of-metric-spaces"
---

# Magnitude Homology Is the Associated Graded of the Length Filtration

## One-sentence takeaway

Magnitude homology (graded by length, blind to persistence) is the associated graded of the length filtration of the length nerve; a long exact sequence swaps it with persistent magnitude homology, so the graded groups name barcode endpoints and the barcode gains a sharp (n+1)δ stability in degree n.

## Why it's lovely

Why you might love this: Leinster's magnitude (1084) counts a metric space like an Euler characteristic. Magnitude homology refined that into a graded abelian group. Persistence refined it into a barcode that forgot where bars start. They were the same filtered complex all along. Then the paper uses the barcode as a ruler for *equational theories* whose free algebras are metric spaces of syntax.

## Problem

Magnitude homology and its persistent refinement have been developed in parallel. One knows lengths and not birth/death; the other knows bars and not which lengths are critical. There was no theorem identifying them, and no stability that matched a computed perturbation.

## Design

- Filter the length nerve by sublevel sets of length; the persistence module is that filtration, the magnitude complex is its associated graded.
- Long exact sequence exchanges the two; magnitude homology lists lengths at which an endpoint can occur.
- Stability: a δ-perturbation moves the degree-n barcode by at most (n+1)δ; a computed example moves it by more than δ, so the factor is sharp.
- Application: an inclusion of quantitative equational theories induces a monad morphism and a barcode comparison with an explicit bound — axiomatic strength as a persistence invariant. Four computed examples, one per degree. Code shipped.

## Evidence

21 Aug 2026 arXiv (math.AT / cs.CG / cs.LO); four worked examples plus code. The sharpness example is the reason the (n+1) is honest.

## Limitations

Single-author; the equational-theory application is a demonstration, not a classification of logics. Magnitude homology remains expensive in high degree. Not a drop-in TDA library for Anoptic meshes.

## Implications for Broadside

A bridge from 1084 into persistent homology *and* into logic: if ano's type/rule changes are a theory inclusion, this barcode is a proposed numeric of "how much the language moved". Curiosity first, measurement second.

## Bottom line

Mint the missing identification. Magnitude and persistence were looking at the same filtration from two floors.

## Links

- arXiv abs: https://arxiv.org/abs/2608.21479
- PDF: https://arxiv.org/pdf/2608.21479.pdf
