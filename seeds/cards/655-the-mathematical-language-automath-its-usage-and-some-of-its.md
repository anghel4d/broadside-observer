---
title: "The Mathematical Language AUTOMATH, Its Usage, and Some of Its Extensions"
authors:
  - "N. G. de Bruijn"
year: 1970
venue: "Symposium on Automatic Demonstration / LNM 125"
arxiv: null
doi: "10.1007/BFb0060623"
source: "https://doi.org/10.1007/BFb0060623"
topics:
  - automath
  - de-bruijn
  - proof-checking
  - dependent-types
seed_rank: 655
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Calculi of Lambda-Conversion"
    url: "https://press.princeton.edu/books/paperback/9780691083940/the-calculi-of-lambda-conversion"
    year: 1941
    arxiv: null
    doi: null
  - title: "A Formulation of the Simple Theory of Types"
    url: "https://doi.org/10.2307/2266170"
    year: 1940
    arxiv: null
    doi: "10.2307/2266170"
see:
  - "511-the-calculi-of-lambda-conversion"
  - "708-the-lambda-calculus-its-syntax-and-semantics"
---

# The Mathematical Language AUTOMATH, Its Usage, and Some of Its Extensions

## One-sentence takeaway

AUTOMATH is a machine-checked mathematical vernacular whose typed λ-calculus, block structure, and nameless binding (de Bruijn indices) let a computer verify a book of mathematics.

## Why it matters here

Every later LF/Coq/Agda binding story, and any ano IR that wants nameless terms, starts here — 1970, before Martin-Löf's published type theory and long before CoC.

## Key ideas

- Two function mechanisms: context/block structure for mathematical dependence, plus "essentially Church's lambda conversion calculus" for explicit functions.
- Definitional equality is unfolding plus λ-conversion; a line of AUTOMATH is a checked definition, not a tactic script.
- de Bruijn indices eliminate name clash so the checker never α-renames.
- LNM 125, pp. 29–61; the often-quoted DOI `10.1007/3-540-07163-7_8` is a different Springer chapter. Reprinted in *Selected Papers on Automath* (1994).

## Caveats

## Links

- DOI: [10.1007/BFb0060623](https://doi.org/10.1007/BFb0060623)
