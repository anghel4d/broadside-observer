---
title: "A Formulation of the Simple Theory of Types"
authors:
  - "Alonzo Church"
year: 1940
venue: "Journal of Symbolic Logic"
arxiv: null
doi: "10.2307/2266170"
source: "https://doi.org/10.2307/2266170"
topics:
  - simple-type-theory
  - lambda-calculus
  - church
  - types
seed_rank: 510
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "The Calculi of Lambda-Conversion"
    url: "https://press.princeton.edu/books/paperback/9780691083940/the-calculi-of-lambda-conversion"
    year: 1941
    arxiv: null
    doi: null
  - title: "A Set of Postulates for the Foundation of Logic"
    url: "https://doi.org/10.2307/1968337"
    year: 1932
    arxiv: null
    doi: "10.2307/1968337"
  - title: "Functionality in Combinatory Logic"
    url: "https://doi.org/10.1073/pnas.20.11.584"
    year: 1934
    arxiv: null
    doi: "10.1073/pnas.20.11.584"
  - title: "Types and Programming Languages"
    url: "https://www.cis.upenn.edu/~bcpierce/tapl/"
    year: 2002
    arxiv: null
    doi: null
  - title: "Cartesian Closed Categories and Typed λ-Calculi"
    url: "https://doi.org/10.1007/3-540-17162-2_38"
    year: 1986
    arxiv: null
    doi: "10.1007/3-540-17162-2_38"
see:
  - "511-the-calculi-of-lambda-conversion"
  - "512-a-set-of-postulates-for-the-foundation-of-logic"
  - "498-functionality-in-combinatory-logic"
  - "026-types-and-programming-languages"
  - "151-cartesian-closed-categories-and-typed-calculi"
---

# A Formulation of the Simple Theory of Types

## One-sentence takeaway

Church's simple type theory is typed λ-calculus over a hierarchy of individuals and truth-values—the root of HOL and of every simply-typed functional language.

## Why it matters here

Direct ancestor of ano's typed core and of the HOL/Isabelle/Lean simple-type kernels Broadside cites. After the Kleene–Rosser paradox sank untyped logical λ, this is the retreat that made λ a programming language instead of a contradictory foundation.

## Key ideas

- Types are generated from \(o\) (propositions) and \(\iota\) (individuals) by the function-type constructor \(\alpha\beta\).
- Abstraction and application are typed; well-typed terms cannot encode the Kleene–Rosser paradox.
- Equality, descriptions, and quantification live at each type, giving a working higher-order logic.
- This is *simple* types, not dependent types: do not conflate with Martin-Löf.

## Caveats

## Links

- DOI: [10.2307/2266170](https://doi.org/10.2307/2266170)
- JSTOR: https://www.jstor.org/stable/2266170
