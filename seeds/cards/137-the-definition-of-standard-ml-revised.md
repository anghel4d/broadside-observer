---
title: "The Definition of Standard ML (Revised)"
authors:
  - "Robin Milner"
  - "Mads Tofte"
  - "Robert Harper"
  - "David MacQueen"
year: 1997
venue: "MIT Press"
arxiv: null
doi: null
source: "https://smlfamily.github.io/sml97-defn.pdf"
topics:
  - typed-programming
  - plt
seed_rank: 137
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hand_topup"
relevance_score: 9
cites:
  - title: "The Definition of Standard ML"
    url: null
    year: 1990
    arxiv: null
    doi: null
  - title: "Commentary on Standard ML"
    url: null
    year: 1991
    arxiv: null
    doi: null
  - title: "A theory of type polymorphism in programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "Type inference for polymorphic references"
    url: "https://doi.org/10.1016/0890-5401(90)90018-D"
    year: 1990
    arxiv: null
    doi: "10.1016/0890-5401(90)90018-D"
  - title: "Simple imperative polymorphism"
    url: "https://doi.org/10.1007/BF01018828"
    year: 1995
    arxiv: null
    doi: "10.1007/BF01018828"
see: []
---

# The Definition of Standard ML (Revised)

## One-sentence takeaway

SML is specified by natural-semantics rules `B ⊢ phrase ⇒ M` factored into Core / Modules / Programs and, independently, into parsing, static elaboration and dynamic evaluation.

## Why it matters here

This is the document to steal from when ano needs a language definition rather than a tutorial: separate the static basis (types, signatures) from the dynamic basis (values), write inference rules, and keep derived forms out of the bare language.

## Key ideas

- Three phases against a basis: parse, elaborate (types and signatures, compile-time), evaluate (values). The static and dynamic bases are specified separately even if an implementation stores them together.
- Bare Core plus derived forms (Appendix A); Modules add structures, signatures, functors, matching and enrichment; Programs are just a sequence of top-level declarations that update the basis.
- 1997 revisions that actually simplified the formalization: type abbreviations in signatures, opaque matching (`:>`), value polymorphism (the non-expansive restriction), datatype replication, and a cleaned-up sharing story.
- Identifier status (value / constructor / exception) is part of the static basis; overloading is resolved against the initial basis (Appendix E), not by a separate ad-hoc pass.
- The method is Natural Semantics: every rule is an assertion about semantic objects that already have enough theory (type schemes, realisations, enrichment) to be worth studying, not just a rewrite system on syntax.

## Caveats

## Links

- Definition PDF: [smlfamily.github.io/sml97-defn.pdf](https://smlfamily.github.io/sml97-defn.pdf)
- MIT Press: [9780262631815](https://mitpress.mit.edu/9780262631815/the-definition-of-standard-ml/)
