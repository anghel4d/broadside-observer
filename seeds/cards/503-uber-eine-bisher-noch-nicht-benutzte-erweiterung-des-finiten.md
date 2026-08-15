---
title: "Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes"
authors:
  - "Kurt Gödel"
year: 1958
venue: "Dialectica"
arxiv: null
doi: "10.1111/j.1746-8361.1958.tb01464.x"
source: "https://doi.org/10.1111/j.1746-8361.1958.tb01464.x"
topics:
  - dialectica
  - functional-interpretation
  - proof-theory
seed_rank: 503
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I"
    url: "https://doi.org/10.1007/BF01700692"
    year: 1931
    arxiv: null
    doi: "10.1007/BF01700692"
  - title: "Zur intuitionistischen Arithmetik und Zahlentheorie"
    url: "https://academic.oup.com/book/55022/chapter/422805871"
    year: 1933
    arxiv: null
    doi: "10.1093/oso/9780195147209.003.0064"
  - title: "Introduction to Metamathematics"
    url: "https://openlibrary.org/works/OL5959470W/Introduction_to_metamathematics"
    year: 1952
    arxiv: null
    doi: null
  - title: "Outline of a Mathematical Theory of Computation"
    url: "https://www.cs.ox.ac.uk/files/3229/PRG02.pdf"
    year: 1970
    arxiv: null
    doi: null
see:
  - "500-uber-formal-unentscheidbare-satze-der-principia-mathematica-"
  - "505-zur-intuitionistischen-arithmetik-und-zahlentheorie"
  - "529-introduction-to-metamathematics"
  - "613-outline-of-a-mathematical-theory-of-computation"
---

# Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes

## One-sentence takeaway

Gödel's Dialectica interpretation rewrites every theorem of intuitionistic arithmetic as a quantifier-free statement about computable functionals of finite type.

## Why it matters here

This is the ancestor of program extraction: a constructive proof is already a higher-type functional, which is exactly the grain ano wants when it compiles standing rules and typed combinators rather than interpreting a proof tape. System T is the first serious calculus of primitive-recursive functionals that later typed-array and effects work still lives under.

## Key ideas

- Each formula \(A\) is assigned a quantifier-free Dialectica translate \(A_D\) of the shape \(\exists y\,\forall z\, A_D(y,z)\), with \(y,z\) finite-type functionals.
- The host theory is Gödel's System T: typed combinators plus primitive recursion at all finite types.
- If Heyting arithmetic proves \(A\), T computes a realizing term \(t\) such that \(T \vdash \forall z\, A_D(t,z)\).
- The interpretation gives a relative consistency proof for arithmetic by reducing it to the quantifier-free calculus of these functionals.

## Caveats

## Links

- DOI: [10.1111/j.1746-8361.1958.tb01464.x](https://doi.org/10.1111/j.1746-8361.1958.tb01464.x)
- URL: https://doi.org/10.1111/j.1746-8361.1958.tb01464.x
