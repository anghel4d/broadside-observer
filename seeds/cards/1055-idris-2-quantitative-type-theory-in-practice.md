---
title: "Idris 2: Quantitative Type Theory in Practice"
authors: ["Edwin Brady"]
year: 2021
venue: "ECOOP 2021 (LIPIcs)"
arxiv: "2104.00480"
doi: "10.4230/LIPIcs.ECOOP.2021.9"
source: "https://arxiv.org/abs/2104.00480"
topics: [curiosity]
seed_rank: 1055
seed_batch: "curiosity-2026-08-17"
reviewed: "2026-08-17"
pool: "languages"
relevance_score: 9
lineage: quantitative-types
cites:
  - title: "The Syntax and Semantics of Quantitative Type Theory"
    url: "https://doi.org/10.1145/3209108.3209189"
    year: 2018
    arxiv: null
    doi: "10.1145/3209108.3209189"
  - title: "I Got Plenty o' Nuttin'"
    url: "https://doi.org/10.1007/978-3-319-30936-1_12"
    year: 2016
    arxiv: null
    doi: "10.1007/978-3-319-30936-1_12"
  - title: "Idris, a general-purpose dependently typed programming language: Design and implementation"
    url: "https://doi.org/10.1017/S095679681300018X"
    year: 2013
    arxiv: null
    doi: "10.1017/S095679681300018X"
  - title: "Types for dyadic interaction"
    url: "https://doi.org/10.1007/3-540-57208-2_35"
    year: 1993
    arxiv: null
    doi: "10.1007/3-540-57208-2_35"
see:
  - "148-linear-types-can-change-the-world"
  - "145-types-for-dyadic-interaction"
  - "40-linear-logic"
  - "30-region-based-memory-management"
  - "1034-destination-calculus-linear-lambda-for-functional-memory-writes"
  - "1048-ownership-types-for-flexible-alias-protection"
---

# Idris 2: Quantitative Type Theory in Practice

## One-sentence takeaway

QTT multiplicities \(0/1/\omega\) on binders — not on types — give a full-scale language where erasure is in the type and linear protocols (IO world token, ATM statemachine, dyadic session types) are ordinary functions.

## Why it matters here

Why you might love this: Atkey’s QTT has no arxiv; this is the compiler that made \(0/1/\omega\) a thing you can ship. Bridge: ano wants rank polymorphism with a phase distinction (what is a type-level length vs a runtime array); Idris 2 puts that distinction in the binder, defaulting implicits to \(0\). Anoptic’s lock-free/region story is the same shape as multiplicity \(1\) plus a linear \(\%\mathsf{World}\) token that you cannot duplicate. Session types fall out as linear channels whose remaining \(\mathsf{Actions}\) are computed by the value just sent — Honda 1993 (card 145) as a library, not a new calculus.

## Key ideas

- Semiring of quantities on *binders*: \(0\) unused at runtime (but relevant in types), \(1\) used exactly once, \(\omega\) unrestricted. Implicit arguments default to \(0\); explicit ones default to \(\omega\). A variable is “used” only in a \(1\) or \(\omega\) argument position of a definition body.
- Erasure as a type-level guarantee: \(\mathsf{Vect}\,n\,a\)’s length is \(0\) in \(\mathsf{append}\), \(\omega\) in \(\mathsf{length}\). Run-length encoding: the uncompressed list is an index of multiplicity \(0\), so \(\mathsf{uncompress}\) must reconstruct it, and \(\mathsf{Singleton}\) makes the reconstruction theorem the type.
- Linearity for resources: \(\mathsf{PrimIO}\,a = (1\,x:\%\mathsf{World})\to\mathsf{IORes}\,a\); the world is a linear token. Continuation-passing \(\mathsf{newArray}\) becomes do-notation via \(\mathsf{L}\) with a *computed* bind type \(\mathsf{ContType}\) that picks \(0/1/\omega\) for the continuation from the usage of the action.
- Dependent linear protocols: ATM indexed by \(\mathsf{Ready}\mid\mathsf{CardInserted}\mid\mathsf{Session}\); \(\mathsf{checkPIN}\) returns \(\mathsf{Res}\) so the next state is a function of a runtime value. \(\mathsf{fork}\) takes a global session \(\mathsf{Protocol}\) and issues \(\mathsf{Client}\,p\) / \(\mathsf{Server}\,p\) channels that are linear, hence must run to \(\mathsf{Close}\).

## Caveats

- Quantity polymorphism is missing (separate \(\mathsf{pure}/\mathsf{pure0}/\mathsf{pure1}\)); Brady flags this as the next theoretical hole, pointing at Granule.
- Multiplicity \(1\) is explicitly experimental; the Prelude does not require it. Exceptions vs linearity: \(\mathsf{io\_bind}\) demands the continuation run exactly once, so errors must be in the result type.
- This is ECOOP 2021, not the metatheory paper — cite Atkey LICS 2018 and McBride 2016 for the rules.

## Links

- arXiv: [2104.00480](https://arxiv.org/abs/2104.00480)
- Journal: [LIPIcs ECOOP 2021, vol. 194](https://doi.org/10.4230/LIPIcs.ECOOP.2021.9)
- Multiplicities tutorial: https://idris2.readthedocs.io/en/stable/tutorial/multiplicities.html
