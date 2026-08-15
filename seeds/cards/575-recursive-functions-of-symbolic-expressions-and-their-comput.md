---
title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"
authors:
  - "John McCarthy"
year: 1960
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/367177.367199"
source: "https://doi.org/10.1145/367177.367199"
topics:
  - lisp
  - lambda-calculus
  - symbolic-computation
  - mccarthy
seed_rank: 575
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "The Calculi of Lambda-Conversion"
    url: "https://press.princeton.edu/books/paperback/9780691083940/the-calculi-of-lambda-conversion"
    year: 1941
    arxiv: null
    doi: null
  - title: "Programs with Common Sense"
    url: "https://www-formal.stanford.edu/jmc/mcc59.pdf"
    year: 1959
    arxiv: null
    doi: null
see:
  - "511-the-calculi-of-lambda-conversion"
  - "576-programs-with-common-sense"
---

# Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I

## One-sentence takeaway

McCarthy defines LISP as recursive functions on S-expressions, with `eval`/`apply` as a universal interpreter and a sketched garbage collector.

## Why it matters here

This is the living root of functional practice in ano: lists as data and code, conditional expressions, and machines that reclaim their own cons cells.

## Key ideas

- Symbolic expressions are atoms and dotted pairs; M-expressions are the meta-language that compiles into S-expressions.
- Elementary functions `car`, `cdr`, `cons`, `eq`, `atom` plus conditional expressions and recursion suffice for a universal function `eval`.
- The metacircular interpreter makes the language its own definition; quoting distinguishes data from forms to evaluate.
- Automatic storage reclamation (mark-and-sweep style) is proposed so the programmer need not `erase`.
- Published CACM April 1960; Part II was never written. Church's λ-calculus is the acknowledged ancestor.

## Caveats

## Links

- DOI: [10.1145/367177.367199](https://doi.org/10.1145/367177.367199)
- URL: https://doi.org/10.1145/367177.367199
