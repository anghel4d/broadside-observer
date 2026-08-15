---
title: "Dependent Types in Haskell: Theory and Practice"
authors:
- Richard A. Eisenberg
year: 2016
venue: "PhD Thesis, University of Pennsylvania"
arxiv: 1610.07978
doi: null
source: "https://arxiv.org/abs/1610.07978"
topics:
- dependent-haskell
- gadts
- type-safety
seed_rank: 912
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Guarded Recursive Datatype Constructors"
    url: "https://doi.org/10.1145/604131.604150"
    year: 2003
    doi: "10.1145/604131.604150"
  - title: "Simple Unification-Based Type Inference for GADTs"
    url: "https://doi.org/10.1145/1159803.1159811"
    year: 2006
    doi: "10.1145/1159803.1159811"
  - title: "OutsideIn(X): Modular Type Inference with Local Assumptions"
    url: "https://doi.org/10.1017/S0956796811000098"
    year: 2011
    doi: "10.1017/S0956796811000098"
see:
  - "915-guarded-recursive-datatype-constructors"
  - "914-simple-unification-based-type-inference-for-gadts"
  - "913-outsidein-x-modular-type-inference-with-local-assumptions"
---

# Dependent Types in Haskell: Theory and Practice

## One-sentence takeaway

Dependent Haskell is a backward-compatible extension of GHC: GADTs, type families, kind polymorphism, and promotion already reach the doorstep of dependency, and this thesis supplies Pico (a typed intermediate calculus) plus Bake (inference and elaboration into Pico).

## Why it matters here

This is the production-compiler path from “we have GADTs” to “we have Π”. If ano grows indexed columns or typed standing-rule schemas, the lesson is to compile dependency through a small typed IL rather than bolting equality constraints onto the surface forever.

## Key ideas

- GHC 8.0 already shipped a portion of the design (TypeInType / kind equality); the rest is specified here as the remaining lift.
- Pico is a novel type-safe dependently typed λ-calculus used as the compilation target; Bake elaborates surface Dependent Haskell into type-correct Pico.
- Roles, promotion, and singletons are treated as the painful encodings that Dependent Haskell is meant to retire.
- Worked examples show dependently typed programs that are awkward in today’s Haskell and natural once values and types share a language.
- PhD dissertation, University of Pennsylvania; arXiv:1610.07978.

## Caveats

## Links

- arXiv: [1610.07978](https://arxiv.org/abs/1610.07978)
- PDF: https://arxiv.org/pdf/1610.07978
