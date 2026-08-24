---
title: "Quasi-categories vs Segal spaces"
authors: ["André Joyal", "Myles Tierney"]
year: 2006
venue: "arXiv:math.AT"
arxiv: "math/0607820"
doi: null
source: "https://arxiv.org/abs/math/0607820"
topics: [curiosity]
seed_rank: 1239
seed_batch: "curiosity-2026-08-25"
reviewed: "2026-08-25"
pool: "maths-foundations"
relevance_score: 9
lineage: quasi-categories
cites:
  - title: "A model for the homotopy theory of homotopy theory"
    url: "https://arxiv.org/abs/math/9811037"
    year: 1998
    arxiv: "math/9811037"
    doi: null
  - title: "(Infinity,2)-Categories and the Goodwillie Calculus I"
    url: "https://arxiv.org/abs/0905.0462"
    year: 2009
    arxiv: "0905.0462"
    doi: null
see:
  - "1125-a-type-theory-for-synthetic-infinity-categories"
  - "1054-cubical-type-theory"
  - "1237-the-simplicial-model-of-univalent-foundations"
---

# Quasi-categories vs Segal spaces

## One-sentence takeaway

Complete Segal spaces, Segal categories, and quasi-categories present the same homotopy theory: the first row of a complete Segal space already knows everything.

## Why it's lovely

Why you might love this: three models of (∞,1)-categories — Joyal's quasi-categories, Rezk's complete Segal spaces, Hirschowitz–Simpson Segal categories — are Quillen equivalent. The comparison is a pair of adjunctions you can draw: take the 0th row, or take a total space. Leftover of synthetic ∞-categories (1125): Riehl–Shulman internalize one model; this paper is the dictionary that says it does not matter which model you picked. Not HTT, not a 182-page Lurie note.

## Problem

Boardman–Vogt quasi-categories (inner-horn fillers) and Rezk complete Segal spaces (bisimplicial spaces with Segal and completeness conditions) both claim to be homotopy theories of homotopy theories. Are they the same? Does the first row of a complete Segal space remember the whole space?

## Design

Two Reedy model structures on bisimplicial sets (vertical / classical, horizontal / quasi-categorical) interact. A total-space functor (box product with a groupoid-nerve in one direction) is left Quillen for both. The 0th-row functor is shown to be a Quillen equivalence between complete Segal spaces and quasi-categories; the total-space functor goes the other way. Combining with Bergner's comparison, Segal categories join the same circle.

## Evidence

Quillen equivalences p₁* ⊣ i₁* and t_! ⊣ t^!. The 0th row of a complete Segal space is a quasi-category equivalent to the original. Preprint: arXiv math/0607820 (2006), 49 pages. Circulated as such; no journal version in the Atom record. Rezk's original CSS model (math/9811037) and Lurie's Goodwillie (∞,2) notes are cited, not minted.

## Limitations

Unpublished as a journal article; the arguments entered the standard references via Bergner, Joyal, Lurie. Does not construct the model structure for quasi-categories (Joyal's [J2]). Not a definition of (∞,n)-categories.

## Implications for Broadside

Synthetic ∞-categories (1125) and cubical univalence (1054, 1237) pick a model and work internally. This paper is the reason that is safe: the models agree, and the agreement is a pair of Quillen equivalences rather than an equivalence of slogans. A dictionary, not a new (∞,1)-category.

## Bottom line

Mint the dictionary. Three models, one homotopy theory, first row suffices.

## Links

- arXiv: [math/0607820](https://arxiv.org/abs/math/0607820)
