---
title: "Compiling Pattern Matching to Good Decision Trees"
authors:
  - "Luc Maranget"
year: 2008
venue: "ML '08 (ACM SIGPLAN Workshop on ML), 35–46"
arxiv: null
doi: "10.1145/1411304.1411311"
source: "https://www.cs.tufts.edu/~nr/cs257/archive/luc-maranget/jun08.pdf"
topics:
  - pattern-matching
  - compiler-construction
  - decision-trees
  - functional-languages
seed_rank: 2309
seed_batch: "archive-2026-10-16"
reviewed: "2026-10-16"
pool: "languages"
relevance_score: 8
lineage: pattern-match-compilation
see:
  - 042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte
  - 1438-optimizing-an-ansi-c-interpreter-with-superoperators
cites:
  - title: "Compiling Pattern Matching to Good Decision Trees"
    url: "https://doi.org/10.1145/1411304.1411311"
    year: 2008
    arxiv: null
    doi: "10.1145/1411304.1411311"
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
---

# Compiling Pattern Matching to Good Decision Trees

## One-sentence takeaway

Maranget gives a compact matrix-based scheme for compiling ML-style pattern matching into decision trees (which never test a subterm twice), ties column-selection heuristics to the lazy-matching notion of *necessity*, and measures dozens of heuristic combinations to recommend simple ones that keep trees small and paths short.

## Why it matters here

Any language with algebraic data types and `match` — ano included, and rule or event-matching DSLs in the engine — has to choose between backtracking automata (linear code size, may re-test) and decision trees (no re-tests, possible blow-up). This paper is the practical reference for the decision-tree side: a recursive compilation function over a clause matrix that fits in a page, plus evidence on which cheap heuristics to use, and it complements the library's many-pattern/many-object matcher (Rete, 042).

## Key ideas

- **Clause matrices.** Compile a pattern matrix P with action vector A: if the first row is all wildcards, emit that action; otherwise pick a column, emit a switch on its head constructors, and recurse on the specialized matrix for each constructor plus a default matrix for the rest.
- **Column choice is everything.** Tree size and path length depend heavily on which column is tested first; small worked examples show one testing order giving a tree that is both smaller and faster than another.
- **Necessity.** A column is needed for a row if every decision tree must test it before choosing that row's action; computing it reduces to the "usefulness" check OCaml already uses for exhaustiveness and redundancy warnings. Heuristics that favour needed columns minimize tree breadth and path length.
- **Heuristic menu, measured.** Named heuristics — first row (f), small default (d), small branching factor (b), arity (a), leaf edge, needed columns (n), needed prefix (p), constructor prefix (q) — combine left to right to break ties. Testing combinations of up to three, the author's champion is pba; if you want to avoid usefulness computations, qba (constructor prefix, then branching factor, then arity) is the recommended simple choice. SML/NJ's fdb is close behind.
- **Maximal sharing.** Representing trees as DAGs with hash-consed subtrees gives large code-size savings for some matches, and changes the best place to expand or-patterns.

## Caveats

On real programs (compiling Coq with this scheme vs. OCaml's optimized backtracking compiler) binary size barely changed, and run-time differences were hard to observe except in a match-heavy bytecode interpreter, where speed tracked average path length. Code-size explosion is still possible in the worst case, and the measurements are proxies (switch counts and average path length) rather than wall-clock time. The linked PDF is the submitted ML'08 preprint; the published workshop version is at the DOI.

## Links

- Paper (preprint PDF): https://www.cs.tufts.edu/~nr/cs257/archive/luc-maranget/jun08.pdf
- Paper (DOI): https://doi.org/10.1145/1411304.1411311
