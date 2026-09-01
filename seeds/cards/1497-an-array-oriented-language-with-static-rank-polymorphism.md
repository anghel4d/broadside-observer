---
title: "An Array-Oriented Language with Static Rank Polymorphism"
authors: ["Justin Slepak", "Olin Shivers", "Panagiotis Manolios"]
year: 2014
venue: "ESOP"
arxiv: null
doi: "10.1007/978-3-642-54833-8_25"
source: "https://ccs.neu.edu/home/jrslepak/esop14.pdf"
topics: [array-programming-apl-bqn-q, typed-programming-systems]
seed_rank: 1497
seed_batch: "archive-2026-09-02"
reviewed: "2026-09-02"
pool: "languages"
relevance_score: 10
lineage: array-languages
cites:
  - title: "The Semantics of Rank Polymorphism"
    url: "https://arxiv.org/abs/1907.00509"
    year: 2019
    arxiv: "1907.00509"
    doi: null
  - title: "Refined Remora: Constraining Array Shapes"
    url: "https://doi.org/10.1145/3815001.3815004"
    year: 2026
    arxiv: null
    doi: "10.1145/3815001.3815004"
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
  - title: "Remora: A Higher-Order Rank-Polymorphic Programming Language"
    url: "https://doi.org/10.1145/2784731.2784754"
    year: 2015
    arxiv: null
    doi: "10.1145/2784731.2784754"
see:
  - "1062-refined-remora-constraining-array-shapes"
  - "926-the-semantics-of-rank-polymorphism"
---

# An Array-Oriented Language with Static Rank Polymorphism

## One-sentence takeaway

Remora types Iverson rank polymorphism: operators lift over argument *frames* while a static shape algebra keeps ranks and axes consistent — the ESOP 2014 root under Refined Remora 1062 and the 2019 semantics 926.

## Why it matters here

ano's rank story starts here, not at the 2019 semantics paper and not at the 2026 SMT refinements. Craft 2026-09-01 left original Remora unread as a near-keeper because 1062 is the refinement and 926 is the later calculus. This ESOP paper is the language: rank-polymorphic functions, frame prefix agreement, and a type system that rejects mis-ranked programs before they hit a GPU buffer. Futhark (1002) stays the codegen cousin; Remora is the source type story for columnar ECS ranks.

## Key ideas

- **Frames and cells.** An array is a frame of cells. A rank-polymorphic operator specifies the cell rank it consumes; leftover leading axes are the frame and are mapped automatically (Iverson lifting, now).
- **Static rank polymorphism.** Shape types and a prefix-agreement rule make lifting checkable. Rank is not a runtime tag you discover in the kernel.
- **ESOP 2014 vs later Remora.** This paper is the array-oriented core. ICFP 2015 adds a higher-order story; 926 (2019) is the dynamic/static semantics write-up; 1062 hangs SMT refinements on the same shape types.
- **Evidence.** ESOP 2014, LNCS 8410, doi `10.1007/978-3-642-54833-8_25`. Author PDF at Northeastern CCS. Same authors as 926.

## Caveats

No arXiv id on this ESOP version. Do not treat 926's `1907.00509` as this paper's identifier. Refined Remora (1062) is the this-week SMT increment, not a replacement of the rank rule. Not a remint of 926, 1062, Futhark 1002, NESL 141, or SAC 1044.

## Links

- PDF: https://ccs.neu.edu/home/jrslepak/esop14.pdf
- DOI: https://doi.org/10.1007/978-3-642-54833-8_25
