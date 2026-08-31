---
title: "A categorical model structure for generalized algebraic theories"
authors: ["Daniel Almeida"]
year: 2026
venue: "arXiv:math.CT"
arxiv: "2608.27667"
doi: null
source: "https://arxiv.org/abs/2608.27667"
topics: ["curiosity", "category-theory", "language", "type-theory"]
seed_rank: 1485
seed_batch: "curiosity-2026-09-01"
reviewed: "2026-09-01"
pool: "languages"
relevance_score: 9
lineage: type-theory-foundations
cites:
  - title: "A categorical model structure for generalized algebraic theories"
    url: "https://arxiv.org/abs/2608.27667"
    year: 2026
    arxiv: "2608.27667"
    doi: null
see:
  - "154-locally-cartesian-closed-categories-and-type-theory"
  - "135-categorical-logic-and-type-theory"
---

# A categorical model structure for generalized algebraic theories

## One-sentence takeaway

Cartmell's generalized algebraic theories carry a Quillen model structure whose homotopy bicategory is (essentially) Taylor's rooted display-map categories — strict vs weak morphisms, with strictification out of cofibrant theories.

## Why it's lovely

Why you might love this: dependent type theory's syntax (gats) finally sits in a model category, so "preserve substitution on the nose" vs "up to iso" becomes a cofibration/fibration story. Cofibrant theories are retracts of theories without sort-equality axioms; their tensor product matches the expected tensor of locally finitely presentable categories with a cofibrantly generated WFS. Strictifiability of set-valued models is a loop-freeness condition on context-projection functors.

## Key ideas

- Combinatorial, monoidal, Cat-enriched Quillen structure on \(\mathbf{GAT}\).
- Homotopy bicategory ≈ rooted display-map categories (Taylor).
- Strictification for morphisms out of cofibrant objects.
- Two notions of model: families-of-sets with reindexing vs finite-limit sketches of the contextual category \(C(A)\).

## Caveats

59-page foundations paper; not an implementation. Homotopy bicategory "essentially" Taylor's — check the precise equivalence. Loop-freeness is a characterization, not an automatic repair.

## Implications for Broadside

Direct ano / dependent-syntax bridge: when embedding a little type theory, know which morphisms are allowed to be weak and when strictification is free. Pairs with LCCC/type-theory classics (154, 135) as the model-category upgrade of Cartmell.

## Links

- arXiv abs: https://arxiv.org/abs/2608.27667
- PDF: https://arxiv.org/pdf/2608.27667.pdf
