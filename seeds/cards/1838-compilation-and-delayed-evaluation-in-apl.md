---
title: "Compilation and Delayed Evaluation in APL"
authors:
  - "Leo J. Guibas"
  - "Douglas K. Wyatt"
year: 1978
venue: "POPL"
arxiv: null
doi: "10.1145/512760.512761"
source: "https://dl.acm.org/doi/10.1145/512760.512761"
topics:
  - apl
  - array-compilation
  - delayed-evaluation
  - drag-along
  - loop-fusion
seed_rank: 1838
seed_batch: "archive-2026-10-06"
reviewed: "2026-10-06"
pool: "languages"
relevance_score: 9
lineage: apl-machine
cites:
  - title: "An APL Machine"
    url: "https://doi.org/10.2172/4169175"
    year: 1970
    arxiv: null
    doi: "10.2172/4169175"
  - title: "A Lazy Evaluator"
    url: "https://doi.org/10.1145/800168.811543"
    year: 1976
    arxiv: null
    doi: "10.1145/800168.811543"
  - title: "Semantics of Context-Free Languages"
    url: "https://doi.org/10.1007/BF01692511"
    year: 1968
    arxiv: null
    doi: "10.1007/BF01692511"
see:
  - "1072-an-apl-machine"
---

# Compilation and Delayed Evaluation in APL

## One-sentence takeaway

APL's dynamic types and shapes do not change what a statement *means*, so you can compile it: defer intermediate arrays and stream their elements on demand, push selection operators into the leaf accessors, and buffer ("slice") only the pieces a consumer will revisit.

## Why it matters here

Abrams' APL Machine (1072) named beating and drag-along; Guibas–Wyatt is the POPL paper that turns those ideas into a compilation strategy with an explicit buffering rule. That is the core question for ano's array backend and for any columnar ECS query pipeline: when to fuse and stream, when a consumer's access order forces a materialized buffer, and how small that buffer must be.

## Key ideas

- **Interpretation overhead is not essential.** The paper's opening argument: typeless, shape-varying variables change storage requirements, not the operational semantics of a statement, so code can be tailored to the statement.
- **Delayed evaluation.** Intermediate results are not built in storage; their elements are streamed in time to the consumer (the paper credits Barton with first proposing delayed evaluation for APL and Abrams with the first non-fully-interpretive scheme).
- **Selectors into accessors.** An algorithm folds selection operators into the accessors for the leaves of the expression tree — the Abrams-style "(A+B)[I] only computes A[I]+B[I]" effect, made systematic.
- **Slicing.** A general buffering mechanism saves portions of a repeatedly needed subexpression; when an operator breaks streaming, slicing determines the minimum buffer between the order a subexpression can deliver and the order the full expression needs.
- **Lineage.** Sits between Abrams 1970 and later APL compilers/array IRs; cited ~100+ times (OpenAlex) as the delayed-evaluation reference for APL.

## Caveats

Eight-page 1978 paper on classic flat APL — no nested arrays, no rank operator, no GPU or SIMD story, and evaluation is on demand per element rather than vectorized blocks. Card written from the ACM abstract/first-page text and OpenAlex/Unpaywall metadata; the full PDF is ACM free-access but blocked to automated fetch from this box, so check details against the PDF before leaning on them. Not a remint of Abrams 1072, Iverson 049/045, SAC 1044 or Rank and Uniformity 1045.

## Links

- DOI (POPL 1978, pp. 1–8): https://doi.org/10.1145/512760.512761
- ACM DL (free access; PDF listed by Unpaywall/OpenAlex as open): https://dl.acm.org/doi/pdf/10.1145/512760.512761
