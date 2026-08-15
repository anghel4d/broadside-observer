---
title: "The Consistency of the Axiom of Choice and of the Generalized Continuum Hypothesis with the Axioms of Set Theory"
authors:
  - "Kurt Gödel"
year: 1940
venue: "Annals of Mathematics Studies 3, Princeton University Press"
arxiv: null
doi: null
source: "https://archive.org/details/consistencyofaxi0054gode"
topics:
  - set-theory
  - constructible-universe
  - godel
seed_rank: 501
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Investigations in the foundations of set theory I"
    url: "https://doi.org/10.1007/BF01449999"
    year: 1908
    arxiv: null
    doi: "10.1007/BF01449999"
  - title: "What is Cantor's Continuum Problem?"
    url: "https://doi.org/10.2307/2305611"
    year: 1947
    arxiv: null
    doi: "10.2307/2305611"
  - title: "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I"
    url: "https://doi.org/10.1007/BF01700692"
    year: 1931
    arxiv: null
    doi: "10.1007/BF01700692"
see:
  - "495-investigations-in-the-foundations-of-set-theory-i"
  - "502-what-is-cantor-s-continuum-problem"
  - "500-uber-formal-unentscheidbare-satze-der-principia-mathematica-"
---

# The Consistency of the Axiom of Choice and of the Generalized Continuum Hypothesis with the Axioms of Set Theory

## One-sentence takeaway

If ZF is consistent, so is ZF plus the axiom of choice and the generalized continuum hypothesis, because both hold in the constructible inner model \(L\).

## Why it matters here

Anoptic and ano treat axioms as engineering knobs: you build a model that makes the desired laws true, then run the rest of the stack inside it. \(L\) is the original inner-model construction of that habit—the same move denotational semantics later uses when it interprets a language in a carefully chosen universe rather than arguing from the ambient set theory.

## Key ideas

- The constructible hierarchy \(L\) is built by iterating definable power-set along the ordinals; every set in \(L\) has a first-order definition over an earlier stage.
- Gödel proves \(V = L\) implies both AC (via a global well-ordering of \(L\)) and GCH (cardinals in \(L\) behave as if \(2^{\aleph_\alpha} = \aleph_{\alpha+1}\)).
- Relative consistency is obtained by showing that if ZF has a model, then the class \(L\) of that model is itself a model of ZF + AC + GCH.
- The inner-model method—restrict attention to a definable transitive class that satisfies the axioms—becomes the template for later large-cardinal and forcing-relative results.

## Caveats

## Links

- Internet Archive: https://archive.org/details/consistencyofaxi0054gode
- Princeton reprint: https://press.princeton.edu/books/paperback/9780691079271/the-consistency-of-the-continuum-hypothesis
