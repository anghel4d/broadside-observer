---
title: "A System of Constructor Classes: Overloading and Implicit Higher-Order Polymorphism"
authors:
  - "Mark P. Jones"
year: 1993
venue: "FPCA / JFP"
arxiv: null
doi: "10.1017/S0956796800001210"
source: "https://doi.org/10.1017/S0956796800001210"
topics:
  - "type-classes"
  - "constructor-classes"
  - "kinds"
  - "monads"
seed_rank: 1158
seed_batch: "archive-2026-08-24"
reviewed: "2026-08-24"
pool: "languages"
relevance_score: 10
lineage: type-classes
cites:
  - title: "How to Make Ad-Hoc Polymorphism Less Ad Hoc"
    url: "https://doi.org/10.1145/75277.75283"
    year: 1989
    arxiv: null
    doi: "10.1145/75277.75283"
  - title: "The Essence of Functional Programming"
    url: "https://doi.org/10.1145/143165.143169"
    year: 1992
    arxiv: null
    doi: "10.1145/143165.143169"
  - title: "Notions of Computation and Monads"
    url: "https://doi.org/10.1016/0890-5401(91)90052-4"
    year: 1991
    arxiv: null
    doi: "10.1016/0890-5401(91)90052-4"
  - title: "A Theory of Qualified Types"
    url: "https://doi.org/10.1007/3-540-55253-7_23"
    year: 1992
    arxiv: null
    doi: "10.1007/3-540-55253-7_23"
see:
  - "645-how-to-make-ad-hoc-polymorphism-less-ad-hoc"
  - "033-the-essence-of-functional-programming"
  - "035-notions-of-computation-and-monads"
---

# A System of Constructor Classes: Overloading and Implicit Higher-Order Polymorphism

## One-sentence takeaway

Wadler/Blott type classes (645) overload at kind `*`; constructor classes overload at kind `* → *`, which is how `map` and `Monad` become one function each.

## Problem

`map` on lists, trees, and `Maybe` is the same idea with three names. Encoding it as a Haskell 1.2 type class over the *whole* function type `(a→b) → f a → f b` makes the class parameter the entire arrow, loses the functor laws as structure, and produces ambiguous types for `map j . map i`. Qualified types (Jones 1992) and Wadler/Blott (645) do not quantify over type *constructors*. Wadler's monad papers (33, 35) show the programming, not the overloading mechanism that makes `>>=` one identifier.

## Design

A constructor class `Functor f` where `f` has kind `* → *` and `map :: (a→b) → f a → f b`. Kinds are `*` and `κ₁ → κ₂`; kind inference is Hindley–Milner on the constructor language (no programmer kind annotations). `Monad` is a subclass of `Functor`; `State s` has kind `* → * → *`, so `State s` (partially applied) is a legal `Monad`. Entailment is instance-driven. Principal types exist; dictionary translation is the same as type classes, with the coherence restriction that a constrained variable appear in the body. Gofer shipped this; monad comprehensions are the first concrete implementation the paper knows of. The JFP 1995 version (DOI above) expands the FPCA 1993 examples.

## Evidence

FPCA 1993, extended in JFP 5(1):1–35, 1995, DOI `10.1017/S0956796800001210`. This is Haskell 1.3 / GHC constructor classes. Associated types (Chakravarty 2005) and modular type classes (Dreyer 2007) are follow-ons — cite, do not mint. The 2016 arXiv "emulating constructor classes in SML" is an encoding, not the origin.

## Limitations

No constructor-level λ (would need higher-order unification). Parameter order of a datatype decides which argument you can `Functor` over (`State s a` works, `State a s` would not without a newtype). Default methods for `bind`/`join` in the paper are circular if both are omitted — a documentation trap, not a type-system one.

## Implications for Broadside

ano's `map` over `Array`, `Meshlet`, `Query`, and `Cmd` is a constructor class, not three typed wrappers and not a C macro. The GPU/CPU effect stack (pass, encode, submit) is a `Monad` instance in this sense, sitting under handlers (21) rather than replacing them. Do not mint "qualified types" or associated types this cycle; this is the steal for `Functor`/`Monad` as one name.

## Bottom line

Mint constructor classes. 645 is ad-hoc at kind `*`; 33/35 are the monad essays; this is the overloading that makes them a library.

## Links

- DOI: [10.1017/S0956796800001210](https://doi.org/10.1017/S0956796800001210)
- FPCA 1993 PDF: https://web.cecs.pdx.edu/~mpj/pubs/fpca93.pdf
