---
title: "Investigations into Logical Deduction"
authors:
  - "Gerhard Gentzen"
year: 1935
venue: "Mathematische Zeitschrift (Untersuchungen über das logische Schließen)"
arxiv: null
doi: "10.1007/BF01201353"
source: "https://doi.org/10.1007/BF01201353"
topics:
  - sequent-calculus
  - natural-deduction
  - gentzen
  - proof-theory
seed_rank: 632
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I"
    url: "https://doi.org/10.1007/BF01700692"
    year: 1931
    arxiv: null
    doi: "10.1007/BF01700692"
  - title: "Die Grundlagen der Mathematik"
    url: "https://doi.org/10.1007/BF01661237"
    year: 1928
    arxiv: null
    doi: "10.1007/BF01661237"
see:
  - "500-uber-formal-unentscheidbare-satze-der-principia-mathematica-"
  - "494-die-grundlagen-der-mathematik"
---

# Investigations into Logical Deduction

## One-sentence takeaway

Gentzen invents natural deduction (NJ/NK) and sequent calculus (LJ/LK) and proves the Hauptsatz — every proof can be rewritten without cuts.

## Why it matters here

Proof theory’s operating system and the ancestor of type theory / proof assistants. Cut-elimination is why a typed IR can normalize, and why Coq/Agda/Nuprl sit next to ano on the Broadside shelf.

## Key ideas

- Natural deduction: introduction and elimination rules for each connective, close to informal mathematical reasoning.
- Sequent calculus: left and right rules acting on Γ ⊢ Δ, designed so cut-elimination is provable.
- Hauptsatz (cut elimination): a cut-free proof has the subformula property and yields consistency of pure logic.
- Two-part *Math. Z.* paper, 1934–35; the 1936 consistency-of-arithmetic follow-on uses transfinite induction up to ε₀.

## Caveats

## Links

- Part I DOI: [10.1007/BF01201353](https://doi.org/10.1007/BF01201353)
- Part II DOI: [10.1007/BF01201363](https://doi.org/10.1007/BF01201363)
