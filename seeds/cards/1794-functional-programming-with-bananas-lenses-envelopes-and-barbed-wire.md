---
title: "Functional Programming with Bananas, Lenses, Envelopes and Barbed Wire"
authors:
  - "Erik Meijer"
  - "Maarten Fokkinga"
  - "Ross Paterson"
year: 1991
venue: "FPCA / LNCS"
arxiv: null
doi: "10.1007/3540543961_7"
source: "https://ir.cwi.nl/pub/1999/1999D.pdf"
topics:
  - catamorphisms
  - recursion-schemes
  - squiggol
  - functional-programming
seed_rank: 1794
seed_batch: "archive-2026-09-12"
reviewed: "2026-09-12"
pool: "languages"
relevance_score: 9
lineage: bananas-lenses-meijer
cites:
  - title: "Why Functional Programming Matters"
    url: "https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf"
    year: 1989
    arxiv: null
    doi: "10.1093/comjnl/32.2.98"
  - title: "Algebra of Programming"
    url: "https://www.cs.ox.ac.uk/publications/books/algebra/"
    year: 1997
    arxiv: null
    doi: null
see:
  - "1793-why-functional-programming-matters"
  - "644-comprehending-monads"
  - "1441-finger-trees-a-simple-general-purpose-data-structure"
---

# Functional Programming with Bananas, Lenses, Envelopes and Barbed Wire

## One-sentence takeaway

Meijer, Fokkinga, and Paterson isolate recursion schemes (cata/ana/hylo/…) as named combinators with algebraic laws — Squiggol for lazy FP and the ancestor of modern recursion-scheme libraries.

## Why it matters here

ano folds and scans need explicit recursion schemes rather than ad-hoc recursive functions. Pairs with Hughes 1793; the Algebra of Programming book stays a near-keeper this pass.

## Key ideas

- **Named shapes.** Bananas (catamorphisms), lenses (anamorphisms), envelopes (hylomorphisms), and barbed wire (paramorphisms) are the recursion patterns, not the payload algebra.
- **Squiggol laws.** Equational reasoning over those combinators is the point: fusion and identity laws, not a new syntax for `foldr`.
- **Bird–Wadler examples fit.** Classic list/tree programs become instances of the schemes rather than one-off recurrences.
- **Separate pattern from algebra.** The recursion scheme is reusable; the algebra (or coalgebra) is what you swap.

## Caveats

Dense notation; newcomers should keep Hughes 1793 in the other window. Algebra of Programming and Bird–Meertens remain near-keepers. CWI OA PDF verified this pass. Do not remint 1793, monads 644, or finger trees 1441.

## Links

- CWI PDF: https://ir.cwi.nl/pub/1999/1999D.pdf
- DOI: https://doi.org/10.1007/3540543961_7
