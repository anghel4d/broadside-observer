---
title: "Theorems for Free!"
authors:
  - "Philip Wadler"
year: 1989
venue: "FPCA"
arxiv: null
doi: "10.1145/99370.99404"
source: "https://doi.org/10.1145/99370.99404"
topics:
  - parametricity
  - types
  - polymorphism
  - reynolds
seed_rank: 38
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 10
cites:
  - title: "Types, Abstraction and Parametric Polymorphism"
    url: "http://dblp.uni-trier.de/db/conf/ifip/ifip83.html#Reynolds83"
    year: 1983
    arxiv: null
    doi: null
  - title: "A theory of type polymorphism in programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "How to make ad-hoc polymorphism less ad hoc"
    url: "https://doi.org/10.1145/75277.75283"
    year: 1989
    arxiv: null
    doi: "10.1145/75277.75283"
see:
  - "641-types-abstraction-and-parametric-polymorphism"
  - "645-how-to-make-ad-hoc-polymorphism-less-ad-hoc"
---

# Theorems for Free!

## One-sentence takeaway

Reynolds parametricity means a polymorphic type is a theorem: `map`, `head`, and `fold` satisfy equational laws that follow from their types alone, with no look at the code.

## Why it matters here

ano’s rank-polymorphic array API should come with free theorems — `map f ∘ map g = map (f ∘ g)` is not a test, it is the type. This paper is how you extract those equations.

## Key ideas

- A term of type `∀α. α → α` is (intensionally) the identity; `∀α. [α] → [α]` can only permute, drop, or duplicate, never inspect elements.
- Wadler turns Reynolds’s relational interpretation into a programmer’s cookbook: read the type, write the relation, get the equation.
- Works for algebraic datatypes via initial-algebra / fold fusion; this is the formal root of “shortcut deforestation” slogans.
- Parametricity fails in the presence of seq, unboxed types, or ad-hoc overloading — which is why the paper also cites Wadler–Blott type classes from the same year.
- FPCA 1989; DOI 10.1145/99370.99404. Author reprints are widely mirrored.

## Caveats

## Links

- DOI: [10.1145/99370.99404](https://doi.org/10.1145/99370.99404)
