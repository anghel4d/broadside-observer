---
title: "Scheme: An Interpreter for Extended Lambda Calculus"
authors:
  - "Gerald Jay Sussman"
  - "Guy Lewis Steele Jr."
year: 1975
venue: "MIT AI Memo 349"
arxiv: null
doi: null
source: "https://dspace.mit.edu/handle/1721.1/5794"
topics:
  - scheme
  - sussman
  - steele
  - lambda-calculus
  - actors
seed_rank: 673
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"
    url: "https://doi.org/10.1145/367177.367199"
    year: 1960
    arxiv: null
    doi: "10.1145/367177.367199"
  - title: "Viewing Control Structures as Patterns of Passing Messages"
    url: "https://doi.org/10.1016/0004-3702(77)90033-9"
    year: 1977
    arxiv: null
    doi: "10.1016/0004-3702(77)90033-9"
see:
  - "575-recursive-functions-of-symbolic-expressions-and-their-comput"
  - "683-viewing-control-structures-as-patterns-of-passing-messages"
---

# Scheme: An Interpreter for Extended Lambda Calculus

## One-sentence takeaway

Sussman and Steele's AI Memo 349 introduces Scheme as a lexically scoped Lisp in which actors, functions, and continuations are the same λ-values.

## Why it matters here

Lexical scope, first-class procedures, and tail calls enter the Anoptic/ano Lisp story here — not in R5RS, and not in McCarthy 1960. RABBIT is the compiler that made the memo credible.

## Key ideas

- Lexical (static) scoping restored to Lisp; dynamic `FUNARG` bugs are not a feature.
- Hewitt's actors are explored by identifying an actor with a closure: sending a message is applying a procedure.
- The interpreter is an experiment in control — continuations become first-class almost immediately, and tail calls are the default.
- MIT AI Memo 349, December 1975; DSpace handle 1721.1/5794. Steele's RABBIT (TR-474, 1978) compiles the same language.

## Caveats

## Links

- DSpace: https://dspace.mit.edu/handle/1721.1/5794
