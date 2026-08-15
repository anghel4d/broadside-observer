---
title: "Compiling with Continuations"
authors:
  - "Andrew W. Appel"
year: 1992
venue: "Cambridge University Press"
arxiv: null
doi: "10.1017/CBO9780511609619"
source: "https://doi.org/10.1017/CBO9780511609619"
topics:
  - cps
  - compilers
  - sml-nj
  - appel
seed_rank: 667
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "RABBIT: A Compiler for Scheme"
    url: "https://dspace.mit.edu/handle/1721.1/6913"
    year: 1978
    arxiv: null
    doi: null
  - title: "The Definition of Standard ML (Revised)"
    url: "https://mitpress.mit.edu/9780262631815/the-definition-of-standard-ml/"
    year: 1997
    arxiv: null
    doi: null
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
see:
  - "674-rabbit-a-compiler-for-scheme"
  - "137-the-definition-of-standard-ml-revised"
  - "630-definitional-interpreters-for-higher-order-programming-langu"
---

# Compiling with Continuations

## One-sentence takeaway

Appel's book is the SML/NJ recipe: CPS as the compiler IR on which you do closure conversion, spilling, and representation decisions, not merely a denotational trick.

## Why it matters here

If ano or an Anoptic host compiler ever lowers through continuations, this is the industrial-strength account — Steele showed Scheme *can* compile; Appel shows how a production ML compiler actually does.

## Key ideas

- CPS conversion makes control and data flow the same graph: every call is a tail call, every intermediate is a variable, every continuation is a function.
- The back half of the book is the SML/NJ pipeline: closure conversion (including callee-save / display choices), spilling to a stack or heap, and datatype representation.
- Prior ML knowledge is not assumed; the method is claimed for most languages, illustrated on Standard ML.
- CUP 1992 (copyright 1991), DOI 10.1017/CBO9780511609619. Flanagan–Sabry–Duba–Felleisen 1993 is the later "you can have this without CPS" reply.

## Caveats

## Links

- DOI: [10.1017/CBO9780511609619](https://doi.org/10.1017/CBO9780511609619)
