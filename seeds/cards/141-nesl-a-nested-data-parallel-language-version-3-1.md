---
title: "NESL: A Nested Data-Parallel Language (Version 3.1)"
authors:
  - "Guy E. Blelloch"
year: 1995
venue: "CMU-CS-95-170"
arxiv: null
doi: null
source: "https://www.cs.cmu.edu/~blelloch/papers/Nesl3.1.pdf"
topics:
  - array-programming-apl-bqn-q
  - batched-interpreters-ffi
seed_rank: 141
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
  - title: "A Programming Language"
    url: "https://www.jsoftware.com/papers/APL.htm"
    year: 1962
    arxiv: null
    doi: null
see:
  - "045-notation-as-a-tool-of-thought"
  - "049-a-programming-language"
---

# NESL: A Nested Data-Parallel Language (Version 3.1)

## One-sentence takeaway

NESL is a first-order applicative language whose only parallelism is operations on nested sequences, compiled by flattening to flat VCODE, with a work/depth cost model that maps onto PRAM time.

## Why it matters here

Ano's bulk entity selections and parallel effects have the same shape as nested apply-to-each over irregular collections; NESL's flatten/partition compilation is the classic path from that source language to a flat vector machine.

## Key ideas

- Parallelism is only apply-to-each (`{f(a) : a in s}`, with filters and zips) plus a small set of sequence primitives (`sum`, `permute`, `flatten`, `partition`, scans). There are no serial loops except recursion.
- Nested sequences plus applying a parallel function over a sequence of sequences is nested parallelism: irregular inner-loop lengths and divide-and-conquer (quickorder, qsort, convex hull) become legal source.
- The compiler flattens nested parallelism into VCODE, a ~100-op stack language on sequences of atoms; scalars are length-1 sequences. Ports in 1995: CRAY C90/J90, IBM SP2, Intel Paragon, CM-5, and sequential workstations.
- Every construct has a work complexity (serial RAM time) and a depth complexity (unbounded-processor time); Brent's scheduling principle turns the pair into a PRAM bound that is meant to be readable off the source.
- Apply-to-each instances cannot communicate (the language is applicative), so they may run in any order. Shared free variables are copied across instances — a real work/memory tax the report tells you how to rewrite away.

## Caveats

## Links

- PDF: https://www.cs.cmu.edu/~blelloch/papers/Nesl3.1.pdf
- Report page: https://www.cs.cmu.edu/~scandal/papers/CMU-CS-95-170.html
