---
title: "On Left Adjoints Preserving Colimits in Homotopy Type Theory"
authors: ["Perry Hart"]
year: 2026
venue: "arXiv:cs.LO"
arxiv: "2608.28473"
doi: null
source: "https://arxiv.org/abs/2608.28473"
topics: ["curiosity", "maths-foundations"]
seed_rank: 1586
seed_batch: "curiosity-2026-09-05"
reviewed: "2026-09-05"
pool: "maths-foundations"
relevance_score: 10
lineage: hott
cites:
  - title: "On Left Adjoints Preserving Colimits in Homotopy Type Theory"
    url: "https://arxiv.org/abs/2608.28473"
    year: 2026
    arxiv: "2608.28473"
    doi: null
  - title: "Cubical Type Theory: a constructive interpretation of the univalence axiom"
    url: "https://arxiv.org/abs/1611.02108"
    year: 2018
    arxiv: "1611.02108"
    doi: "10.4230/LIPIcs.TYPES.2015.5"
see:
  - "1054-cubical-type-theory"
---

# On Left Adjoints Preserving Colimits in Homotopy Type Theory

## One-sentence takeaway

In HoTT wild categories, left adjoints need not preserve colimits unless 2-coherent — a synthetic counterexample plus a repair.

## Why it's lovely

Why you might love this: the most boring CT slogan (“left adjoints preserve colimits”) fails in the wild, and HoTT tells you exactly which coherence fixes it. Wild categories are the native setting for synthetic homotopy inside homotopy type theory; the standard proof can fail, and Hart even produces a wild left adjoint that does not preserve colimits. The repair is a 2-coherence condition on the left adjoint — naturality of the hom-isomorphism commuting with composition — with Agda formalization and two useful examples (suspension, modalities).

## Key ideas

- Wild categories: synthetic homotopy in HoTT, where the usual 2-categorical coherences may be missing.
- The textbook proof that left adjoints preserve colimits can fail; there is a wild left adjoint that does not.
- Sufficient repair: 2-coherence — the naturality structure of the hom-isomorphism commutes with composition of morphisms.
- Example: suspension (and a generalization) preserves graph-indexed colimits, via 2-coherence plus a homogeneous-types trick.
- Example: every modality, as a left adjoint on coslices of a universe, is 2-coherent, so the subcategory of modal types is cocomplete.
- Main results formalized in Agda.

## Caveats

Wild, not fully coherent (∞,1)-categories — the failure is a feature of the synthetic setting, not a counterexample to classical category theory. 2-coherence is sufficient, not claimed necessary for every colimit shape. Formalization covers the main theorems, not every side remark.

## Implications for Broadside

HoTT / cubical shelf next to 1054. A precision tool: when ano or Broadside wants adjoint slogans inside a type-theoretic semantics, the missing 2-cell is the thing to ask for, not “categories, therefore colimits.”

## Links

- arXiv abs: https://arxiv.org/abs/2608.28473
- PDF: https://arxiv.org/pdf/2608.28473.pdf
