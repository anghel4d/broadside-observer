---
title: "A Basis for a Mathematical Theory of Computation"
authors:
  - "John McCarthy"
year: 1963
venue: "In Computer Programming and Formal Systems (Braffort & Hirschberg)"
arxiv: null
doi: null
source: "https://www-formal.stanford.edu/jmc/basis.html"
topics:
  - semantics
  - recursion
  - mccarthy
  - computation-theory
seed_rank: 577
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"
    url: "https://doi.org/10.1145/367177.367199"
    year: 1960
    arxiv: null
    doi: "10.1145/367177.367199"
  - title: "Towards a Mathematical Science of Computation"
    url: "https://www-formal.stanford.edu/jmc/towards.html"
    year: 1962
    arxiv: null
    doi: null
see:
  - "575-recursive-functions-of-symbolic-expressions-and-their-comput"
  - "578-towards-a-mathematical-science-of-computation"
---

# A Basis for a Mathematical Theory of Computation

## One-sentence takeaway

McCarthy treats computation as recursive function equations over symbolic data, with conditional expressions and recursion induction as the proof tools.

## Why it matters here

Before Scott–Strachey denotational semantics, this is how ano-style functional programs were supposed to be defined and proved: equations, not flowcharts.

## Key ideas

- Conditional expressions `(p → a, b)` are given a systematic algebra, including their use inside recursive definitions.
- Recursion induction proves properties of functions defined by recursive equations without unfolding the implementation.
- Symbolic expressions (the LISP data domain) are the intended universe; computable functions are those definable this way.
- Presented 1961 at WJCC and 1962 at Blaricum; printed 1963 in Braffort & Hirschberg's *Computer Programming and Formal Systems*.
- The companion IFIP-62 address ("Towards…") extends the same program toward abstract syntax.

## Caveats

## Links

- URL: https://www-formal.stanford.edu/jmc/basis.html
- PDF: https://www-formal.stanford.edu/jmc/basis1.pdf
