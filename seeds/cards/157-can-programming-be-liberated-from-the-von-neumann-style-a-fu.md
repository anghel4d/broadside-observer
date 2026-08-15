---
title: "Can Programming Be Liberated from the von Neumann Style? A Functional Style and Its Algebra of Programs"
authors:
  - "John Backus"
year: 1978
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/359576.359579"
source: "https://dl.acm.org/doi/10.1145/359576.359579"
topics:
  - array-programming-apl-bqn-q
  - category-theory-plt
seed_rank: 157
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "A programming language"
    url: "https://doi.org/10.1145/1460833.1460872"
    year: 1962
    arxiv: null
    doi: "10.1145/1460833.1460872"
  - title: "An axiomatic basis for computer programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
  - title: "A Discipline of Programming"
    url: "https://openalex.org/W2103953153"
    year: 1976
    arxiv: null
    doi: null
  - title: "Recursive functions of symbolic expressions and their computation by machine, Part I"
    url: "https://doi.org/10.1145/367177.367199"
    year: 1960
    arxiv: null
    doi: "10.1145/367177.367199"
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
  - title: "First version of a data flow procedure language"
    url: "https://doi.org/10.1007/3-540-06859-7_145"
    year: 1974
    arxiv: null
    doi: "10.1007/3-540-06859-7_145"
  - title: "A lazy evaluator"
    url: "https://doi.org/10.1145/800168.811543"
    year: 1976
    arxiv: null
    doi: "10.1145/800168.811543"
  - title: "The calculi of lambda-conversion"
    url: "http://ci.nii.ac.jp/ncid/BA58493075"
    year: 1941
    arxiv: null
    doi: null
  - title: "A network of microprocessors to execute reduction languages, part I"
    url: "https://doi.org/10.1007/bf00995174"
    year: 1979
    arxiv: null
    doi: "10.1007/bf00995174"
  - title: "Outline of a Mathematical Theory of Computation"
    url: "https://openalex.org/W1512502927"
    year: 1970
    arxiv: null
    doi: null
  - title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine (1960)"
    url: "https://doi.org/10.7551/mitpress/12274.003.0023"
    year: 2021
    arxiv: null
    doi: "10.7551/mitpress/12274.003.0023"
  - title: "Inductive methods for proving properties of programs"
    url: "https://doi.org/10.1145/355609.362336"
    year: 1973
    arxiv: null
    doi: "10.1145/355609.362336"
see:
  - "049-a-programming-language"
---

# Can Programming Be Liberated from the von Neumann Style? A Functional Style and Its Algebra of Programs

## One-sentence takeaway

Backus's Turing lecture blames von Neumann languages for a word-at-a-time bottleneck and proposes FP: programs built from combining forms that obey an algebra of equivalences.

## Why it matters here

Ano's masked bulk updates versus scalar scripting is the same split: combining forms (map, reduce, construct, compose) should be the default over the world store, with an algebra that lets you rewrite them rather than debug loops.

## Key ideas

- The von Neumann bottleneck is the word-at-a-time traffic between CPU and mutable store that conventional languages force the programmer to choreograph.
- FP programs are expressions built from primitive functions and combining forms — composition, construction, condition, apply-to-all, insert — not assignment sequences.
- An algebra of programs gives algebraic identities so one FP expression can be transformed into another without a store model.
- Applicative state transition (AST) systems are sketched as a way to recover controlled state without returning to von Neumann style.
- The lecture is a design argument, not a compiler paper: change the language so bulk combining forms are primitive, then optimize the algebra.

## Caveats

## Links

- DOI: [10.1145/359576.359579](https://doi.org/10.1145/359576.359579)
- ACM: https://dl.acm.org/doi/10.1145/359576.359579
