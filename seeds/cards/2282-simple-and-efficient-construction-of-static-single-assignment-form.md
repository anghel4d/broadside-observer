---
title: "Simple and Efficient Construction of Static Single Assignment Form"
authors:
  - "Matthias Braun"
  - "Sebastian Buchwald"
  - "Sebastian Hack"
  - "Roland Leißa"
  - "Christoph Mallon"
  - "Andreas Zwinkau"
year: 2013
venue: "Compiler Construction (CC 2013), LNCS, 102–122"
arxiv: null
doi: "10.1007/978-3-642-37051-9_6"
source: "https://c9x.me/compile/bib/braun13cc.pdf"
topics:
  - ssa
  - compiler-ir
  - value-numbering
  - compiler-construction
seed_rank: 2282
seed_batch: "archive-2026-10-14"
reviewed: "2026-10-14"
pool: "languages"
relevance_score: 9
lineage: ssa-construction
see:
  - 1566-efficiently-computing-static-single-assignment-form
  - 1567-a-simple-graph-based-intermediate-representation
  - 1568-ssa-is-functional-programming
  - 748-depth-first-search-and-linear-graph-algorithms
cites:
  - title: "Simple and Efficient Construction of Static Single Assignment Form"
    url: "https://doi.org/10.1007/978-3-642-37051-9_6"
    year: 2013
    arxiv: null
    doi: "10.1007/978-3-642-37051-9_6"
  - title: "Efficiently Computing Static Single Assignment Form and the Control Dependence Graph"
    url: "https://doi.org/10.1145/115372.115320"
    year: 1991
    arxiv: null
    doi: "10.1145/115372.115320"
  - title: "A Simple Graph-Based Intermediate Representation"
    url: "https://doi.org/10.1145/202530.202534"
    year: 1995
    arxiv: null
    doi: "10.1145/202530.202534"
  - title: "SSA is Functional Programming"
    url: "https://doi.org/10.1145/278283.278285"
    year: 1998
    arxiv: null
    doi: "10.1145/278283.278285"
  - title: "Global Value Numbers and Redundant Computations"
    url: "https://doi.org/10.1145/73560.73562"
    year: 1988
    arxiv: null
    doi: "10.1145/73560.73562"
---

# Simple and Efficient Construction of Static Single Assignment Form

## One-sentence takeaway

Braun et al. build SSA directly while translating an AST or bytecode, with no dominance tree or dominance frontiers: each variable read asks its block for the reaching definition, recursing backwards through predecessors and inserting φ only at joins, while "sealed" blocks and immediate removal of trivial φs give pruned SSA, and minimal SSA on reducible control flow.

## Why it matters here

The library has the classic Cytron et al. construction (1566), Click's graph IR (1567) and SSA-as-functional-programming (1568), but not the algorithm most small compilers now use to get SSA without the dominance machinery. For ano's compiler, a shader or VM JIT, or any quick IR for engine scripting, this is the shortest path from parser to an optimizable SSA graph: about a page of pseudocode, and it lets constant folding, copy propagation and common-subexpression elimination run during construction.

## Key ideas

- **Local value numbering per block.** Keep a map currentDef[variable][block]; assignments write it, reads look it up.
- **Lazy backwards search.** On a miss, a block with one predecessor asks that predecessor; a join block first records an operandless φ (which breaks cycles through loops) and then fills its operands by reading each predecessor.
- **Sealed blocks.** A block is sealed once all its predecessors are known. Reads in unsealed blocks (loop headers under construction) create placeholder φs whose operands are added at sealing time, so construction works on an incomplete CFG in a single pass over the source.
- **Trivial φ removal.** A φ that references only itself and one other value is replaced by that value, recursively for φ users; this yields pruned SSA always and minimal SSA for reducible CFGs, plus a post-pass using strongly connected components for minimality on irreducible graphs.
- **Measured against LLVM.** Implemented in LLVM 3.1/Clang and compared with LLVM's tuned Cytron implementation on SPEC CINT2000: construction is about as fast, while avoiding the temporary load/store IR, which made up 25% of instructions before SSA construction in their measurements. In libFirm, enabling on-the-fly optimizations added 0.84 s of construction time but left 88.2% of the nodes, making overall compilation 1.49 s faster.

## Caveats

Minimality without the post-pass holds only for reducible control flow. It builds SSA from structured input you are translating; for SSA reconstruction after arbitrary transformations the paper gives a variant, but the dominance-based algorithms remain the reference there. Speed numbers are for 2013 LLVM and libFirm. The link below is a mirror; the publisher version is behind Springer's paywall.

## Links

- Paper (PDF mirror): https://c9x.me/compile/bib/braun13cc.pdf
- Paper (DOI): https://doi.org/10.1007/978-3-642-37051-9_6
