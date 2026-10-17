---
title: "Lazy Code Motion"
authors:
  - "Jens Knoop"
  - "Oliver Rüthing"
  - "Bernhard Steffen"
year: 1992
venue: "PLDI '92 (ACM SIGPLAN Conference on Programming Language Design and Implementation), 224–234"
arxiv: null
doi: "10.1145/143095.143136"
source: "https://rsim.cs.illinois.edu/arch/qual_papers/compilers/knoop92.pdf"
topics:
  - compiler-optimization
  - partial-redundancy-elimination
  - dataflow-analysis
  - code-generation
seed_rank: 2335
seed_batch: "archive-2026-10-18"
reviewed: "2026-10-18"
pool: "languages"
relevance_score: 8
lineage: redundancy-elimination
see:
  - 1440-combining-analyses-combining-optimizations
  - 1567-a-simple-graph-based-intermediate-representation
  - 2282-simple-and-efficient-construction-of-static-single-assignment-form
  - 1133-redundant-array-computation-elimination
cites:
  - title: "Lazy Code Motion"
    url: "https://doi.org/10.1145/143095.143136"
    year: 1992
    arxiv: null
    doi: "10.1145/143095.143136"
  - title: "Global Optimization by Suppression of Partial Redundancies"
    url: "https://doi.org/10.1145/359060.359069"
    year: 1979
    arxiv: null
    doi: "10.1145/359060.359069"
---

# Lazy Code Motion

## One-sentence takeaway

Knoop, Rüthing and Steffen turn partial redundancy elimination from Morel–Renvoise's bi-directional dataflow problem into four uni-directional bit-vector analyses — D-Safe (backward), Earliest (forward), Delay/Latest (forward) and Isolated (backward) — whose result is provably computationally optimal (no path can do fewer evaluations) and lifetime optimal (temporaries live no longer than necessary).

## Why it matters here

Any optimizing backend for ano (or the array-expression compiler behind it, see 1133) will want loop-invariant hoisting and common-subexpression elimination without blowing up register pressure, and LCM is the standard way to get both in one pass using cheap bit-vector solvers. It is also a clean example of the "as early as necessary, as late as possible" placement idea that recurs in scheduling GPU work and placing barriers.

## Key ideas

- **Split critical edges first.** Every edge into a node with several predecessors gets a synthetic node, which removes critical edges and lets all insertions go at node entries.
- **Safe-earliest placement.** D-Safe (down-safety, i.e. anticipability) is the greatest solution of a backward system; Earliest is a forward system; inserting h := t at nodes that are D-Safe and Earliest and replacing original computations by h is already computationally optimal (Theorem 3.9), essentially Morel–Renvoise's result.
- **Then be lazy.** Delay pushes those insertion points forward along paths without uses; Latest marks where delaying must stop; this "Latest transformation" is computationally optimal and more economical than any previous algorithm.
- **Drop isolated insertions.** Isolated (backward) finds insertions whose value is only used at the insertion node itself; the final placement OCP = Latest ∧ ¬Isolated, with replacements at RO = Used ∧ ¬(Latest ∧ Isolated), is both computationally and lifetime optimal (Theorem 4.9).
- **Same cost as ordinary dataflow.** Because every component is uni-directional, standard fast bit-vector solvers apply (versus the O(n²) estimate quoted for bi-directional analyses), and all terms are handled in parallel bit vectors.

## Caveats

The paper is purely theoretical: there are no measurements, only the motivating example and proofs. It assumes assignments with at most one operator and lexically identical terms, so it misses redundancies that need value numbering (later SSA-based PRE such as SSAPRE and GVN-PRE address that). Speculative motion of computations off some paths is excluded by the safety requirement.

## Links

- Paper (PDF mirror): https://rsim.cs.illinois.edu/arch/qual_papers/compilers/knoop92.pdf
- Paper (DOI): https://doi.org/10.1145/143095.143136
