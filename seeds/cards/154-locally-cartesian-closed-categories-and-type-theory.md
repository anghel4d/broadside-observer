---
title: "Locally Cartesian Closed Categories and Type Theory"
authors:
  - "R. A. G. Seely"
year: 1984
venue: "Mathematical Proceedings of the Cambridge Philosophical Society"
arxiv: null
doi: "10.1017/S0305004100061284"
source: "https://doi.org/10.1017/S0305004100061284"
topics:
  - category-theory
  - dependent-types
  - lccc
  - type-theory
seed_rank: 154
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Categories for the Working Mathematician"
    url: "https://doi.org/10.1007/978-1-4612-9839-7"
    year: 1971
    arxiv: null
    doi: "10.1007/978-1-4612-9839-7"
  - title: "An Intuitionistic Theory of Types: Predicative Part"
    url: "https://doi.org/10.1016/s0049-237x(08)71945-1"
    year: 1975
    arxiv: null
    doi: "10.1016/s0049-237x(08)71945-1"
  - title: "To H.B. Curry: Essays on Combinatory Logic, Lambda Calculus, and Formalism"
    url: "https://ci.nii.ac.jp/ncid/BA01035434"
    year: 1980
    arxiv: null
    doi: null
  - title: "Ideas and Results in Proof Theory"
    url: "https://doi.org/10.1016/s0049-237x(08)70849-8"
    year: 1971
    arxiv: null
    doi: "10.1016/s0049-237x(08)70849-8"
  - title: "Natural Deduction: A Proof-Theoretical Study"
    url: "https://openalex.org/W1488538795"
    year: 1965
    arxiv: null
    doi: null
  - title: "HYPERDOCTRINES, NATURAL DEDUCTION AND THE BECK CONDITION"
    url: "https://doi.org/10.1002/malq.19830291005"
    year: 1983
    arxiv: null
    doi: "10.1002/malq.19830291005"
  - title: "Aspects of topoi"
    url: "https://doi.org/10.1017/s0004972700044828"
    year: 1972
    arxiv: null
    doi: "10.1017/s0004972700044828"
  - title: "Abstract families and the adjoint functor theorems"
    url: "https://doi.org/10.1007/bfb0061361"
    year: 1978
    arxiv: null
    doi: "10.1007/bfb0061361"
  - title: "Indexed Categories and Their Applications"
    url: "https://doi.org/10.1007/bfb0061360"
    year: 1978
    arxiv: null
    doi: "10.1007/bfb0061360"
---

# Locally Cartesian Closed Categories and Type Theory

## One-sentence takeaway

Seely interprets Martin-Löf dependent type theory in a locally cartesian closed category by reading a type over a context as an object of a slice and dependent product as the right adjoint to pullback.

## Why it matters here

Any typed ECS or world language that wants Σ/Π over entities is walking into this model: contexts are slices, substitution is pullback, and the known coherence gap is why a real implementation needs explicit substitutions or a stricter category of families.

## Key ideas

- A category is locally cartesian closed when every slice \(\mathcal{C}/A\) is cartesian closed, so each context has products and exponentials.
- A dependent type in context \(A\) is an object of \(\mathcal{C}/A\); substitution along \(f:B\to A\) is pullback of that object.
- Dependent sum is composition (or the left adjoint to pullback); dependent product is the right adjoint to pullback, i.e. the slice exponential.
- Identity types and the usual type formers are interpreted by the corresponding universal constructions in the slices.
- Later work showed the naïve substitution functors are not strictly functorial; the paper is still the classic LCCC semantics every dependent-type implementer meets.

## Caveats

## Links

- DOI: [10.1017/S0305004100061284](https://doi.org/10.1017/S0305004100061284)
