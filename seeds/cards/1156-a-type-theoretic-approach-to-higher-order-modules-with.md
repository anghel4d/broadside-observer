---
title: "A Type-Theoretic Approach to Higher-Order Modules with Sharing"
authors:
  - "Robert Harper"
  - "Mark Lillibridge"
year: 1994
venue: "POPL"
arxiv: null
doi: "10.1145/174675.176927"
source: "https://doi.org/10.1145/174675.176927"
topics:
  - "module-systems"
  - "translucent-sums"
  - "sharing"
  - "typed-programming-systems"
seed_rank: 1156
seed_batch: "archive-2026-08-24"
reviewed: "2026-08-24"
pool: "languages"
relevance_score: 10
lineage: ml-modules
cites:
  - title: "The Definition of Standard ML (Revised)"
    url: "https://doi.org/10.7551/mitpress/2324.001.0001"
    year: 1997
    arxiv: null
    doi: null
  - title: "Abstract Types Have Existential Type"
    url: "https://doi.org/10.1145/44501.45065"
    year: 1988
    arxiv: null
    doi: "10.1145/44501.45065"
  - title: "On the Type Structure of Standard ML"
    url: "https://doi.org/10.1145/169701.169682"
    year: 1993
    arxiv: null
    doi: "10.1145/169701.169682"
  - title: "Manifest Types, Modules, and Separate Compilation"
    url: "https://doi.org/10.1145/174675.176926"
    year: 1994
    arxiv: null
    doi: "10.1145/174675.176926"
see:
  - "137-the-definition-of-standard-ml-revised"
  - "670-abstract-types-have-existential-type"
  - "711-on-the-type-structure-of-standard-ml"
  - "1157-manifest-types-modules-and-separate-compilation"
---

# A Type-Theoretic Approach to Higher-Order Modules with Sharing

## One-sentence takeaway

Fully opaque interfaces hide too much and fully transparent ones couple too much: *translucent sums* put selected type equations in the interface so sharing is a type, not a stamp.

## Problem

SML modules (137, 711) propagate type identity by looking *inside* structures (transparent ascription, unique names / generativity). That is fatal for separate compilation: to typecheck a client of `S` you need `S`'s implementation, not just its signature. Existentials (670) are the fully opaque extreme — too little identity leaks, so a lexer and a symbol table cannot be told they share `symbol`. MacQueen's `sharing` specs are a side condition on the static semantics, not a type.

## Design

A calculus over Fω whose "structures" are *translucent sums*: labeled weak sums whose fields may carry equations (`type t = int`) as well as kinds and value types. Subtyping has two axes — drop fields you do not depend on, and *forget* an equation (manifest → abstract). Paths that are values can be *strengthened* (`VALUE` rules): if you have a name `r` for a structure you may write `r.t` in types, recovering transparency locally without substituting the implementation. Functors are dependent functions; first-class modules are allowed, at the cost of information loss when a module is computed at run time (the `if` of two ADTs must forget their witnesses). Sharing `L.S.symbol = T.S.symbol` becomes "the second argument's signature *manifestly* uses the first's type."

## Evidence

POPL 1994, DOI `10.1145/174675.176927`. Independent dual of Leroy 1994 (1157) at the same meeting: Harper/Lillibridge take first-class modules and translucent sums; Leroy takes second-class modules and separate compilation. The Fox project (CMU) is the contemporary implementation pressure. Subtyping of the full calculus is undecidable (a Pierce-style encoding); the paper treats this as a practical rather than a fatal objection.

## Limitations

First-class modules make higher-order functor *identity* (Apply(F)(X) ≡ F(X) at the type level) fail in the ways Dreyer's thesis later catalogues. You do not ship this calculus; you ship OCaml-style strengthening (1157) or F-ing modules (cite, do not mint). Structure sharing (identity of values, not just types) is out of scope.

## Implications for Broadside

ano's compilation units — renderer, netcode, sim, scripting — need *some* types public (`Vec3`, `EntityId`) and some hidden (BVH layout, replication buffers). That is a translucent signature, not an existential and not a C header. Do not invent a stamp-based sharing checker; put `type entity_id = u32` in the interface when the representation is the contract, and leave `type bvh` abstract when it is not.

## Bottom line

Mint the sharing/translucency paper. 137 is the Definition, 711 is the 1993 type structure, 670 is the opaque extreme, 1157 is the separate-compilation twin.

## Links

- DOI: [10.1145/174675.176927](https://doi.org/10.1145/174675.176927)
- Author PDF (CMU): https://www.cs.cmu.edu/~rwh/papers/sharing/popl94.pdf
