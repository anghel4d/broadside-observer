---
title: "The Simplicial Model of Univalent Foundations (after Voevodsky)"
authors: ["Chris Kapulkin", "Peter LeFanu Lumsdaine"]
year: 2021
venue: "J. Eur. Math. Soc."
arxiv: "1211.2851"
doi: "10.4171/JEMS/1050"
source: "https://arxiv.org/abs/1211.2851"
topics: [curiosity]
seed_rank: 1237
seed_batch: "curiosity-2026-08-25"
reviewed: "2026-08-25"
pool: "maths-foundations"
relevance_score: 10
lineage: univalent-foundations
cites:
  - title: "Homotopy Type Theory: Univalent Foundations of Mathematics"
    url: "https://arxiv.org/abs/1308.0729"
    year: 2013
    arxiv: "1308.0729"
    doi: null
  - title: "Univalence in Simplicial Sets"
    url: "https://arxiv.org/abs/1203.2553"
    year: 2012
    arxiv: "1203.2553"
    doi: null
  - title: "Cubical Type Theory: a constructive interpretation of the univalence axiom"
    url: "https://arxiv.org/abs/1611.02108"
    year: 2018
    arxiv: "1611.02108"
    doi: null
see:
  - "1054-cubical-type-theory"
  - "1087-two-level-type-theory-and-applications"
  - "1125-a-type-theory-for-synthetic-infinity-categories"
---

# The Simplicial Model of Univalent Foundations (after Voevodsky)

## One-sentence takeaway

Univalence holds in simplicial sets: a universal Kan fibration models a univalent universe, so Martin-Löf type theory with one univalent universe is consistent relative to ZFC plus two inaccessibles.

## Why it's lovely

Why you might love this: Voevodsky announced that identity of types is homotopy equivalence, and that this is *true* in simplicial sets. This paper is the model, not the book and not the cubical computational interpretation already kept as 1054. A weakly universal Kan fibration, a universe of Kan complexes, and several equivalent packagings of Univalence, all made to satisfy the strict coherence demanded by type theory. Cubical TT makes univalence compute; this paper makes univalence *true*. Leftover of cubical / 2LTT / synthetic-∞.

## Problem

Homotopy type theory asks for a model of dependent type theory in which the universe is univalent: identifications in the universe correspond to equivalences of types. Simplicial sets are the classical home of homotopy theory, but naive interpretations of Π and universes fail coherence. Does there exist a genuinely univalent universe in sSet, strictly enough for type theory?

## Design

A general machine for categorical models of dependent type theory using universes to restore coherence (contextual categories). Construction of a weakly universal Kan fibration. The Univalence Axiom in several equivalent forms, verified in the simplicial model. Corollary: MLTT + one univalent universe is consistent relative to ZFC + two inaccessible cardinals.

## Evidence

Journal version: *J. Eur. Math. Soc.* 23 (2021) 2071–2126, DOI `10.4171/JEMS/1050`. Homotopy-theoretic core also in the companion note 1203.2553. The HoTT book is a survey, cited not minted. Cubical TT (1054) is the computational sequel, already in the library.

## Limitations

Classical simplicial sets, not constructive (cubical is the constructive model). One universe. Inaccessibles are used; the exact large-cardinal overhead is not the point of the paper. Not 2LTT and not Riehl–Shulman synthetic ∞-categories.

## Implications for Broadside

Cubical type theory (1054) is how univalence computes in a proof assistant. Two-level type theory (1087) and synthetic ∞-categories (1125) are how directed/homotopy structure is internalized. This card is the existence theorem those systems sit on: simplicial sets model univalence, so the slogan is not a metaphor.

## Bottom line

Mint the model. Univalence is a theorem about Kan complexes.

## Links

- arXiv: [1211.2851](https://arxiv.org/abs/1211.2851)
- Journal: [JEMS 23 (2021) 2071–2126](https://doi.org/10.4171/JEMS/1050)
