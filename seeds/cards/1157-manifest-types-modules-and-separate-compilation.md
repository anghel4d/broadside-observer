---
title: "Manifest Types, Modules, and Separate Compilation"
authors:
  - "Xavier Leroy"
year: 1994
venue: "POPL"
arxiv: null
doi: "10.1145/174675.176926"
source: "https://doi.org/10.1145/174675.176926"
topics:
  - "module-systems"
  - "separate-compilation"
  - "manifest-types"
  - "typed-programming-systems"
seed_rank: 1157
seed_batch: "archive-2026-08-24"
reviewed: "2026-08-24"
pool: "languages"
relevance_score: 10
lineage: ml-modules
cites:
  - title: "A Type-Theoretic Approach to Higher-Order Modules with Sharing"
    url: "https://doi.org/10.1145/174675.176927"
    year: 1994
    arxiv: null
    doi: "10.1145/174675.176927"
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
  - title: "A Modular Module System"
    url: "https://doi.org/10.1017/S0956796800001428"
    year: 2000
    arxiv: null
    doi: "10.1017/S0956796800001428"
see:
  - "1156-a-type-theoretic-approach-to-higher-order-modules-with"
  - "137-the-definition-of-standard-ml-revised"
  - "670-abstract-types-have-existential-type"
---

# Manifest Types, Modules, and Separate Compilation

## One-sentence takeaway

Make signatures *opaque by default* and write `type t = τ` when the representation must leak: the interface becomes a complete typing spec, so a client compiles against a `.mli`, not against a `.ml`.

## Problem

SML signatures are not complete specifications. `S : sig type t val less: t -> t -> bool end` does not say whether `S.less 1 2` typechecks — that depends on the *implementation* of `t`. Transparent ascription is why SML is an "interactive language" (137) and why Shao/Appel's smartest recompilation delayed inter-unit checks to link time. Fully abstract signatures fix separate compilation and kill the language (an `intOrder` whose `t` is not `int` cannot order integers).

## Design

Two constructs, taken as primitive rather than as SML extensions: (1) every type spec is opaque unless written manifest `type t = τ`; (2) compilation units are a layer *above* modules — interfaces list signatures of structures/functors, implementations fill them, imports are Modula-style. Functor application is ordinary dependent-function elimination, with a *strengthening* rule: a path `p` of signature `sig type t; … end` also has `sig type t = p.t; … end`, so a structure always shares with itself. `with type t = τ` is sugar. Sharing constraints of the form `type = type` become manifest types in functor arguments (the diamond import is a subtype check). Structure sharing is dropped; identity of stateful structures can be faked with an abstract `stamp` type but is not primitive. The theory uses weak sums plus dot-notation, not strong sums — phase distinction is immediate.

## Evidence

POPL 1994, DOI `10.1145/174675.176926`, author PDF on Leroy's site. This is the OCaml module system. The 2000 JFP "A Modular Module System" is the implementation tutorial (Mini-ML modules) — cite, do not mint. Encoding a first-order strong-sum calculus into manifest existentials is in §4; higher-order functors are *differently* expressive than Tofte's SML (you can write `F(X).t = X.t list`, which SML sharing cannot).

## Limitations

No structure sharing. `with` on an abstract signature parameter is not first-class (would need extensible-record typing). Subtyping of the unrestricted combination with first-class modules is the Harper/Lillibridge undecidability; this paper stays second-class and decidable. Verbosity of manifest declarations is the practical complaint (Birkedal/ML Kit); `with type` is the mitigation.

## Implications for Broadside

ano should compile against *interfaces*, not against sources. A renderer `.ano-i` that says `type mesh = u32` (index into a packed buffer) vs `type mesh` (hidden packed-meshlet layout) is this paper. Strengthening is the rule you want when the same crate is viewed as both "the renderer" and "the thing the editor reflects on." Do not port SML stamps.

## Bottom line

Mint the separate-compilation twin of 1156. The 2000 JFP paper is a cite. 137 remains the SML spec, not the compilation story.

## Links

- DOI: [10.1145/174675.176926](https://doi.org/10.1145/174675.176926)
- Author PDF: https://xavierleroy.org/publi/manifest-types-popl.pdf
