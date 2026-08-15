---
title: "On Certain Formal Properties of Grammars"
authors:
  - "Noam Chomsky"
year: 1959
venue: "Information and Control"
arxiv: null
doi: "10.1016/S0019-9958(59)90362-6"
source: "https://doi.org/10.1016/S0019-9958(59)90362-6"
topics:
  - chomsky-hierarchy
  - formal-grammars
  - automata
seed_rank: 601
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Three Models for the Description of Language"
    url: "https://doi.org/10.1109/TIT.1956.1056813"
    year: 1956
    arxiv: null
    doi: "10.1109/TIT.1956.1056813"
  - title: "Syntactic Structures"
    url: "https://doi.org/10.1515/9783112316009"
    year: 1957
    arxiv: null
    doi: "10.1515/9783112316009"
  - title: "Representation of Events in Nerve Nets and Finite Automata"
    url: "https://www.cs.cmu.edu/~cdm/resources/Kleene1951.pdf"
    year: 1956
    arxiv: null
    doi: null
  - title: "Finite Automata and Their Decision Problems"
    url: "https://doi.org/10.1147/rd.32.0114"
    year: 1959
    arxiv: null
    doi: "10.1147/rd.32.0114"
see:
  - "599-three-models-for-the-description-of-language"
  - "619-finite-automata-and-their-decision-problems"
  - "530-representation-of-events-in-nerve-nets-and-finite-automata"
---

# On Certain Formal Properties of Grammars

## One-sentence takeaway

Chomsky partitions phrase-structure grammars into types 0–3 by successively tighter restrictions on productions and proves the induced language classes are properly nested.

## Why it matters here

This is the classification ano's grammar/parser work still inherits: regular tokenizers, context-free surface syntax, and the reminder that unrestricted rewrite is Turing-complete. GRID COMMAND NL orders live on the type-2/3 side of the same cut.

## Key ideas

- Type 0 (unrestricted), type 1 (context-sensitive / non-contracting), type 2 (context-free), type 3 (finite-state / regular) are defined by the shape of productions.
- The language families are strictly contained: finite-state ⊂ context-free ⊂ context-sensitive ⊂ recursively enumerable.
- Self-embedding is isolated as the feature that pushes a grammar out of the finite-state class.
- Decision problems (emptiness, finiteness, equivalence) change status as one climbs the hierarchy.
- Automata counterparts (finite automata for type 3; later pushdown / linear-bounded / TM) are already in view via Kleene and Rabin–Scott.

## Caveats

## Links

- DOI: [10.1016/S0019-9958(59)90362-6](https://doi.org/10.1016/S0019-9958(59)90362-6)
- Open PDF: https://somr.info/lib/Chomsky_1959.pdf
