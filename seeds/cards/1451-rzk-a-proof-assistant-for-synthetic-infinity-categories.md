---
title: "Rzk: a Proof Assistant for Synthetic ∞-Categories"
authors: ["Nikolai Kudasov", "Violetta Sim", "Benedikt Ahrens"]
year: 2026
venue: "arXiv:cs.LO"
arxiv: "2607.12207"
doi: null
source: "https://arxiv.org/abs/2607.12207"
topics: [curiosity, typed-programming-systems, category-theory-plt]
seed_rank: 1451
seed_batch: "curiosity-2026-08-29"
reviewed: "2026-08-29"
pool: "languages"
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
see:
  - "1373-the-infinity-category-of-infinity-categories-in-simplicial-type-theory"
  - "1054-cubical-type-theory"
---

# Rzk: a Proof Assistant for Synthetic ∞-Categories

## One-sentence takeaway

Rzk is a working proof assistant for Riehl–Shulman simplicial type theory: synthetic ∞-categories you can type-check, with a proven translation from RSTT.

## Why it's lovely

Why you might love this: Cat_∞ (1373) finally has a machine that speaks its language — directed intervals, triangles, and shape logic, not just groupoids.

## Problem

HoTT proof assistants excel at ∞-groupoids. Directed/simplicial type theory (RSTT) is the synthetic language for ∞-categories, but until Rzk there was no practical checker tuned to RSTT's shapes.

## Design

- Implements a computational refinement of RSTT so type checking stays practical.
- Translation RSTT→Rzk proved faithful (every RSTT proof lands) and conservative (no new theorems about RSTT types).
- Automated prover for the logic of shapes; tutorial + evaluation traces shipped as ancillaries (v0.7.8).

## Evidence

54-page description with appendices; every paper example runnable; conservativity/faithfulness theorems stated.

## Limitations

Not a full replacement for Agda/Rocq HoTT libraries; directed univalence / universes still an evolving story (see 1452). Robotics/engine use is via the language of diagrams, not a runtime.

## Implications for Broadside

Direct upgrade path from Curiosity 1373 (Cat_∞ in sTT). If Broadside ever wants machine-checked directed reasoning for rewrite/optics/agent protocols, Rzk is the tool card.

## Bottom line

Mint the proof assistant for synthetic ∞-categories. Theory without a checker was half a gift.

## Links

- arXiv abs: https://arxiv.org/abs/2607.12207
- PDF: https://arxiv.org/pdf/2607.12207.pdf
