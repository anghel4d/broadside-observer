---
title: "Coherent differentiation with a monoid of degrees: derivatives, Taylor expansion, finite differences"
authors:
  - "Thomas Ehrhard"
  - "Aymeric Walch"
year: 2026
venue: "arXiv preprint (cs.LO)"
arxiv: "2610.29874"
doi: null
source: "https://arxiv.org/abs/2610.29874"
topics:
  - "differential-linear-logic"
  - "automatic-differentiation"
  - "category-theory"
  - "programming-language-semantics"
seed_rank: 2392
seed_batch: "curiosity-2026-10-23"
reviewed: "2026-10-23"
pool: "languages"
relevance_score: 8
cites:
  - title: "Coherent differentiation with a monoid of degrees: derivatives, Taylor expansion, finite differences"
    url: "https://arxiv.org/abs/2610.29874"
    year: 2026
    arxiv: "2610.29874"
    doi: null
see: ["1056-reverse-derivative-categories", "1582-the-lie-group-lie-algebra-correspondence-in-tangent-categories"]
---

# Coherent differentiation with a monoid of degrees: derivatives, Taylor expansion, finite differences

## One-sentence takeaway

Ehrhard and Walch make the degree index of coherent differentiation an arbitrary commutative partial monoid, so one categorical machine for deterministic programs now yields ordinary derivatives, Taylor expansion to any fixed degree, Taylor with remainder and several kinds of finite differences just by choosing which monoid indexes the summable tuples.

## Why it's lovely

Differentiating programs usually smuggles in nondeterminism: the differential lambda-calculus needs to add morphisms freely, which means a boolean can be 'true plus false'. Coherent differentiation repairs this by only adding things that are allowed to sum, such as probabilities whose total stays at most 1, and packages the derivative as a tangent-like functor onto summable tuples. The lovely move here is to notice that the shape of those tuples is just a monoid of degrees: {0, 1} with 1 + 1 undefined gives first derivatives, the natural numbers give full Taylor expansion, and other monoids give finite differences or truncated expansions, all without touching the rest of the theory. For ano, which treats programs as array transformations with masked effects, it is a clean semantics for 'derivative' and 'difference' operators that stays honest about when sums exist.

## Key ideas

- **Motivating failure.** In probabilistic coherence spaces the program let rec F x = if bernoulli(0.5) then x else (F x); (F x) denotes f(x) = 1 − √(1 − x), whose derivative is unbounded, so the naive derivative is not a morphism.
- **Summability as structure.** Hom-sets carry a partially defined addition characterized by a functor S, usually representable as S = D ⊸ (−) with D = &_{i∈D} 1. A family is summable when it factors through D.
- **Degrees as a monoid.** D is any commutative partial monoid with at least two elements satisfying nonnegativity (i + j = 0 implies i = 0). A !-coalgebra on D whose comultiplication is τπᵢ = Σ_{l+r=i} πₗ ⊗ πᵣ induces a distributive law and lifts S to a functor T on the Kleisli category.
- **Monads for free.** The comonoid on D gives S, and then T, a commutative strong monad structure, and a bimonad structure when the monoid is total, generalizing an observation from the authors' earlier Taylor-expansion paper.
- **Instances.** D = {0, 1} recovers coherent differentiation, D = (ℕ, +) recovers coherent Taylor expansion and the Faà di Bruno formula, and new choices give truncated Taylor expansion, finite Taylor expansion with a remainder, and various finite differences.

## Caveats

Dense categorical semantics aimed at linear-logic specialists; there is no implementation, language design or performance story. Representability of S and the needed coalgebra structures hold in many but not all models. The practical link to automatic differentiation engines is indirect.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.29874
- PDF: https://arxiv.org/pdf/2610.29874
