---
title: "OPS5 User's Manual"
authors:
  - "Charles L. Forgy"
year: 1981
venue: "CMU-CS-81-135"
arxiv: null
doi: null
source: "https://apps.dtic.mil/sti/tr/pdf/ADA106558.pdf"
topics:
  - production-rules-triggers
  - embedded-scripting-dsls
seed_rank: 155
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "On the Efficient Implementation of Production Systems"
    url: "https://www.proquest.com/docview/303022419"
    year: 1979
    arxiv: null
    doi: null
  - title: "OPS, A Domain-Independent Production System Language"
    url: "https://dl.acm.org/doi/10.5555/1622943.1623048"
    year: 1977
    arxiv: null
    doi: null
  - title: "OPS4 User's Manual"
    url: "https://apps.dtic.mil/sti/citations/ADA078201"
    year: 1979
    arxiv: null
    doi: null
---

# OPS5 User's Manual

## One-sentence takeaway

Forgy's manual defines OPS5 as a pure production-system language: working-memory elements, LHS patterns, RHS actions, and a recognize–act cycle with explicit conflict resolution.

## Why it matters here

Ano standing rules are this dialect over a columnar world: match patterns against ECS components, build a conflict set, then fire actions — the same working-memory / production split, without pretending the matcher is the language.

## Key ideas

- A production is a named rule whose left-hand side matches working-memory elements and whose right-hand side asserts, modifies, or retracts them.
- The interpreter loops recognize (match all productions, form the conflict set) then act (pick one instantiation and fire it).
- Conflict resolution strategies (LEX, MEA) order instantiations by recency and specificity so rule authors can control which fire.
- Working memory is a set of typed elements with attributes; patterns bind variables and can test predicates on those attributes.
- OPS5 is the language; the Rete matcher is the implementation technique that makes many-pattern / many-object matching cheap enough to use.

## Caveats

## Links

- PDF (DTIC ADA106558): https://apps.dtic.mil/sti/tr/pdf/ADA106558.pdf
- Report: CMU-CS-81-135
