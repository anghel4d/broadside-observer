---
title: "Directed univalence for simplicial objects in an ∞-topos"
authors: ["Evan Cavallo", "Emily Riehl", "Christian Sattler"]
year: 2026
venue: "arXiv:math.CT"
arxiv: "2607.02420"
doi: null
source: "https://arxiv.org/abs/2607.02420"
topics: [curiosity, category-theory-plt, typed-programming-systems]
seed_rank: 1452
seed_batch: "curiosity-2026-08-29"
reviewed: "2026-08-29"
pool: "maths-foundations"
relevance_score: 10
lineage: simplicial-type-theory
cites:
  - title: "A type theory for synthetic ∞-categories"
    url: "https://arxiv.org/abs/1705.07442"
    year: 2017
    arxiv: "1705.07442"
    doi: null
  - title: "The ∞-category of ∞-categories in simplicial type theory"
    url: "https://arxiv.org/abs/2602.02218"
    year: 2026
    arxiv: "2602.02218"
    doi: null
  - title: "Rzk: a Proof Assistant for Synthetic ∞-Categories"
    url: "https://arxiv.org/abs/2607.12207"
    year: 2026
    arxiv: "2607.12207"
    doi: null
see:
  - "1373-the-infinity-category-of-infinity-categories-in-simplicial-type-theory"
  - "1451-rzk-a-proof-assistant-for-synthetic-infinity-categories"
---

# Directed univalence for simplicial objects in an ∞-topos

## One-sentence takeaway

Directed univalence — identity of types as directed maps — holds for simplicial objects in any ∞-topos, including a higher composable-sequence form.

## Why it's lovely

Why you might love this: Voevodsky's univalence for spaces gets its directed sibling; Riehl–Sattler–Cavallo close the semantic gap that made sTT feel unfinished.

## Problem

RSTT historically lacked universes and directed univalence. Semantics live in simplicial objects in an ∞-topos; the axiom that hom-types in the universal left fibration match function types needed a proof.

## Design

- Construct equivalence between hom types in the universal left fibration and function types.
- Higher form: homotopy-coherent composites ↔ composable sequences of functions.
- Weighted limits reduce arbitrary ∞-topos case to calculations on simplicial sets.

## Evidence

64-page development; reduction-to-sSet technique makes the general case checkable.

## Limitations

Semantic verification, not yet a complete internalized universe story in every sTT implementation. Complements Rzk (1451) rather than replacing it.

## Implications for Broadside

Foundation card beside 1373 and 1451. Directed equality is what lets synthetic ∞-category libraries treat functors as first-class identities.

## Bottom line

Mint directed univalence. Synthetic ∞-categories without it were missing their univalence.

## Links

- arXiv abs: https://arxiv.org/abs/2607.02420
- PDF: https://arxiv.org/pdf/2607.02420.pdf
