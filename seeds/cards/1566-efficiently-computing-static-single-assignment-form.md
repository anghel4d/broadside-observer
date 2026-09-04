---
title: "Efficiently Computing Static Single Assignment Form and the Control Dependence Graph"
authors:
  - "Ron Cytron"
  - "Jeanne Ferrante"
  - "Barry K. Rosen"
  - "Mark N. Wegman"
  - "F. Kenneth Zadeck"
year: 1991
venue: "ACM TOPLAS 13(4)"
arxiv: null
doi: "10.1145/115372.115320"
source: "https://compilers.cs.uni-saarland.de/teaching/cc/2015/papers/p451-cytron.pdf"
topics:
  - typed-programming-systems
  - static-single-assignment
  - intermediate-representation
seed_rank: 1566
seed_batch: "archive-2026-09-04"
reviewed: "2026-09-04"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Constant Propagation with Conditional Branches"
    url: "https://doi.org/10.1145/103135.103136"
    year: 1991
    arxiv: null
    doi: "10.1145/103135.103136"
  - title: "Combining Analyses, Combining Optimizations"
    url: "https://doi.org/10.1145/201059.201061"
    year: 1995
    arxiv: null
    doi: "10.1145/201059.201061"
  - title: "SSA is Functional Programming"
    url: "https://doi.org/10.1145/278283.278285"
    year: 1998
    arxiv: null
    doi: "10.1145/278283.278285"
  - title: "LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation"
    url: "https://doi.org/10.1109/CGO.2004.1281665"
    year: 2004
    arxiv: null
    doi: "10.1109/CGO.2004.1281665"
see:
  - "1440-combining-analyses-combining-optimizations"
  - "1567-a-simple-graph-based-intermediate-representation"
  - "1568-ssa-is-functional-programming"
  - "1361-llvm-a-compilation-framework-for-lifelong-program-analysis-tra"
---

# Efficiently Computing Static Single Assignment Form and the Control Dependence Graph

## One-sentence takeaway

Dominance frontiers place the minimum φ-functions for SSA and, on the reverse CFG, build the control-dependence graph — construction that is linear on real programs even though nested-loop worst cases are quadratic.

## Why it matters here

ano’s IR and optimizer sit on SSA: each name has one definition, def-use is a list not a D×U bipartite mess, and Wegman–Zadeck SCCP (the constant-propagation walkthrough in §1.1) becomes a worklist over those lists. Click’s sea-of-nodes (1567), Appel’s φ ↔ lexical join (1568), Click–Cooper combination (1440), and LLVM (1361) all assume this construction. Mint the algorithm, not another SSA tutorial.

## Key ideas

- **SSA restatement.** Rename every assignment (`V₁`, `V₂`, …). At a CFG join, a φ-function `V₃ ← φ(V₁, V₂)` merges reaching definitions so each use of `Vᵢ` is reached by exactly one assignment. Def-use then costs O(E) rather than D×U.
- **Dominance frontier.** DF(X) is the set of nodes Y such that X dominates a predecessor of Y but does not strictly dominate Y. Place a φ for variable V at every node in the iterated DF of V’s assignment sites. Computing the DF map is O(E + Σ |DF(X)|).
- **CDG from the reverse CFG.** Control dependence of Y on X is the dominance-frontier relation in the reverse flow graph (plus a dummy Entry/Exit pair). Same DF engine; no separate control-dependence pass.
- **Linearity in practice, not in theory.** Nested repeat-until loops make Σ |DF| = Θ(n²) while only O(n) φs are needed. On 61 EISPACK + 160 Perfect FORTRAN procedures in PTRAN, DF size / statements ranged 0.6–2.1, φ count / statements 0.5–5.2 (95% under 2.3), CDG size / statements 0.6–2.4.
- **Translation is a pipeline.** Dominator tree (assumed linear, e.g. Lengauer–Tarjan) → DF → iterated DF φ placement → rename. Translating *out* of SSA (not this paper’s focus) still has to lower φs to moves.

## Caveats

- The paper computes SSA/CDG; it is not an optimizer. SCCP, GVN, and GCM are cited applications. Do not remint Wegman–Zadeck TOPLAS 1991 (SCCP), Click–Cooper 1440, or LLVM 1361.
- Worst-case quadratic DF maps exist; “usually linear” is an experimental claim on FORTRAN, not a theorem for irreducible or highly nested CFGs.
- φ is a notational join, not a machine instruction. Array/memory SSA is out of scope (Appel 1568 flags that explicitly).

## Links

- Open PDF: https://compilers.cs.uni-saarland.de/teaching/cc/2015/papers/p451-cytron.pdf
- DOI: https://doi.org/10.1145/115372.115320
- ACM DL: https://dl.acm.org/doi/10.1145/115372.115320
