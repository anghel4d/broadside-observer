---
title: "From λ-calculus to Cartesian Closed Categories"
authors:
  - "Joachim Lambek"
year: 1980
venue: "To H. B. Curry: Essays on Combinatory Logic, Lambda Calculus and Formalism, Academic Press"
arxiv: null
doi: null
source: "https://math.ucr.edu/home/baez/qg-fall2006/ccc.html"
topics:
  - category-theory
  - lambda-calculus
  - cartesian-closed
seed_rank: 44
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 10
cites:
  - title: "Introduction to Higher Order Categorical Logic"
    url: "https://doi.org/10.1017/CBO9780511620263"
    year: 1986
    arxiv: null
    doi: "10.1017/CBO9780511620263"
  - title: "Cartesian Closed Categories and Typed λ-Calculi"
    url: "https://doi.org/10.1007/3-540-17184-3_44"
    year: 1986
    arxiv: null
    doi: "10.1007/3-540-17184-3_44"
see:
  - "041-introduction-to-higher-order-categorical-logic"
  - "151-cartesian-closed-categories-and-typed-calculi"
---

# From λ-calculus to Cartesian Closed Categories

## One-sentence takeaway

Lambek’s Curry-festschrift chapter constructs, from a typed λ-theory, a cartesian closed category whose morphisms are terms modulo βη, and conversely reads a CCC’s internal language back as typed λ-calculus.

## Why it matters here

This is the essay “compiler-to-categories” talks mean. ano’s typed core is already a CCC; this paper is why that is not a metaphor.

## Key ideas

- Types become objects; a term `x:A ⊢ t:B` becomes a morphism A → B; substitution is composition.
- Pairing and projections interpret products; λ-abstraction and application interpret the exponential and evaluation map.
- Two constructions are inverse up to equivalence: the classifying CCC of a λ-theory, and the internal language of a CCC.
- Pages 375–402 of Seldin & Hindley (eds.), *To H. B. Curry*, Academic Press, 1980. No standalone DOI; the chapter is not openly posted as a clean PDF.
- Baez’s UCR notes (https://math.ucr.edu/home/baez/qg-fall2006/ccc.html) are the reliable public exposition that cites the chapter correctly. The previous `cs.cmu.edu/~crary/819-f09/` course index is not the paper.

## Caveats

## Links

- Bibliographic landing: https://math.ucr.edu/home/baez/qg-fall2006/ccc.html
- Book: Seldin & Hindley (eds.), *To H. B. Curry: Essays on Combinatory Logic, Lambda Calculus and Formalism*, Academic Press, 1980, pp. 375–402
