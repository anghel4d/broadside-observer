---
title: "String Diagrams for Monoidal Categories, in Rocq"
authors: ["Damien Pous"]
year: 2026
venue: "arXiv:cs.LO"
arxiv: "2602.19806"
doi: null
source: "https://arxiv.org/abs/2602.19806"
topics: [curiosity, category-theory-plt, typed-programming-systems]
seed_rank: 1469
seed_batch: "curiosity-2026-08-31"
reviewed: "2026-08-31"
pool: "languages"
relevance_score: 10
lineage: categorical-deep-learning
cites:
  - title: "An Introduction to String Diagrams for Computer Scientists"
    url: "https://arxiv.org/abs/2305.08768"
    year: 2023
    arxiv: "2305.08768"
    doi: null
  - title: "String diagrams for Strictification and Coherence"
    url: "https://arxiv.org/abs/2201.11738"
    year: 2024
    arxiv: "2201.11738"
    doi: "10.46298/lmcs-20(4:8)2024"
see:
  - "951-an-introduction-to-string-diagrams-for-computer-scientists"
  - "957-string-diagrams-for-strictification-and-coherence"
  - "1027-a-critical-pair-enumeration-algorithm-for-string-diagram-rewriting"
---

# String Diagrams for Monoidal Categories, in Rocq

## One-sentence takeaway

A Rocq library that decides morphism equality in monoidal categories, infers Mac Lane isomorphisms so you can pretend they are strict, and pairs with an external string-diagram editor that turns graphical rewrites into readable formal proofs.

## Why it's lovely

Why you might love this: 951/957/1027 taught the pictures and the critical pairs. This is the machine that type-checks them. Draw, rewrite, get a Rocq script instead of a screenshot.

## Problem

Paper proofs in monoidal categories drown in associators and unitors. Existing diagram tools rarely land in a proof assistant; existing Coq/Rocq category libraries rarely look like the diagrams.

## Design

- Decision procedure for morphism equality in (not-necessarily-strict) monoidal categories.
- Notations that treat the category as strict while Mac Lane isomorphisms are inferred in the background.
- External visualiser/editor for string diagrams; each graphical step translates into a short textual Rocq proof.

## Evidence

Working Rocq library (PLUME/LIP) plus the editor loop; the claim is that the generated proofs stay concise and readable rather than dumping the associator soup.

## Limitations

One-author tool paper, not a new theorem about monoidal categories. Coverage beyond plain monoidal (braided, compact closed, hypergraph categories) is not the contribution. The editor is external, so the gold path is two tools, not one kernel.

## Implications for Broadside

Direct upgrade from 951/957/1027. If Broadside or ano ever wants machine-checked rewrite/optics/agent-protocol diagrams, this is the checker card the way Rzk (1451) is the checker for RSTT.

## Bottom line

Mint the proof assistant for string diagrams. Pictures without a kernel were half a gift.

## Links

- arXiv abs: https://arxiv.org/abs/2602.19806
- PDF: https://arxiv.org/pdf/2602.19806.pdf
