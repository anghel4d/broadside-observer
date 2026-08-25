---
title: "A Report on the SISAL Language Project"
authors:
  - "John T. Feo"
  - "David C. Cann"
  - "Rodney R. Oldehoeft"
year: 1990
venue: "Journal of Parallel and Distributed Computing 10(4)"
arxiv: null
doi: "10.1016/0743-7315(90)90035-N"
source: "https://doi.org/10.1016/0743-7315(90)90035-N"
topics:
  - "array-programming"
  - "single-assignment"
  - "implicit-parallelism"
  - "dataflow"
seed_rank: 1365
seed_batch: "archive-2026-08-26"
reviewed: "2026-08-26"
pool: "languages"
relevance_score: 9
lineage: programming-language-foundations
cites:
  - title: "Can Programming Be Liberated from the von Neumann Style?"
    url: "https://doi.org/10.1145/359576.359579"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359579"
  - title: "NESL: A Nested Data-Parallel Language (Version 3.1)"
    url: "https://www.cs.cmu.edu/~scandal/nesl.html"
    year: 1995
    arxiv: null
    doi: null
  - title: "Single Assignment C: Efficient Support for High-Level Array Operations in a Functional Setting"
    url: "https://doi.org/10.1145/967900.967974"
    year: 2003
    arxiv: null
    doi: "10.1145/967900.967974"
see:
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
  - "1044-single-assignment-c-efficient-support-for-high-level-array-operations"
  - "1002-futhark-purely-functional-gpu-programming"
---

# A Report on the SISAL Language Project

## One-sentence takeaway

Single assignment plus aggregate-aware compilation can expose parallelism without surrendering array performance: make dependencies semantic, then recover storage reuse statically.

## Problem

Dataflow languages made parallelism explicit to machines but often paid in fine-grained scheduling and poor memory behavior; scientific users would not leave Fortran unless an applicative language could match its arrays and loops on conventional multiprocessors.

## Design

SISAL combines strict single-assignment semantics with arrays, streams, recursion, and parallel/sequential loop forms. Programs lower to the IF1 dataflow graph; compiler analyses aggregate construction, reference counts, and last uses so arrays can be preallocated or updated in place without exposing mutation in the source. A microtasking runtime schedules coarse work on shared memory.

## Evidence

Journal of Parallel and Distributed Computing 10(4), 1990, pp. 349–366. The project reports compilation techniques for high-performance applicative computation, execution comparable to Fortran, and cost-effective speedup on shared-memory multiprocessors. It is an important bridge from dataflow research to practical functional-array compilation.

## Limitations

The results come from a specialized scientific workload and 1980s/1990 hardware. Implicit parallelism does not eliminate cost modeling, irregular algorithms strain arrays/streams, and single assignment can create allocation unless compiler reuse analysis succeeds.

## Implications for Broadside

ano should keep value semantics in the language while making destructive reuse a verified backend decision based on uniqueness/last-use facts. Treat array constructors and loops as first-class IR nodes, not scalar syntax expanded early. GRID COMMAND simulation columns can remain deterministic while the compiler schedules independent rule/dataflow regions.

## Bottom line

Mint the practical array/dataflow bridge. NESL (141) gives nested data parallelism; SAC (1044) and Futhark (1002) are later descendants; SISAL proves the memory-reuse bargain early.

## Links

- DOI: [10.1016/0743-7315(90)90035-N](https://doi.org/10.1016/0743-7315(90)90035-N)
