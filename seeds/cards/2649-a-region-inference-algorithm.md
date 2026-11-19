---
title: "A Region Inference Algorithm"
authors:
  - "Mads Tofte"
  - "Lars Birkedal"
year: 1998
venue: "ACM TOPLAS 20(4), pp. 724-767"
arxiv: null
doi: "10.1145/291891.291894"
source: "https://elsman.com/mlkit/pdf/toplas98.pdf"
version_reviewed: "TOPLAS 1998 author PDF (MLKit site)"
topics:
  - "region-inference"
  - "region-based-memory"
  - "effect-systems"
  - "type-inference"
  - "ml-kit"
seed_rank: 2649
seed_batch: "archive-2026-11-20"
reviewed: "2026-11-20"
pool: "languages"
relevance_score: 8
see:
  - "030-region-based-memory-management"
  - "1138-language-support-for-regions"
  - "133-region-based-memory-management-in-cyclone"
  - "1008-linear-regions-are-all-you-need"
cites:
  - title: "A Region Inference Algorithm"
    url: "https://doi.org/10.1145/291891.291894"
    year: 1998
    doi: "10.1145/291891.291894"
---

# A Region Inference Algorithm

## One-sentence takeaway

The algorithm that actually implements Tofte–Talpin region inference in the ML Kit: split it into S ("spreading", which mints every fresh region and effect variable in one pass) and R ("fixed-point resolution", which mints none and only unifies), so polymorphic recursion in regions provably terminates because R can only contract a fixed basis.

## Why it matters here

Card 030 gives the rules for a stack of regions; this paper is the engineering that makes the rules a compiler pass. For Anoptic's arenas and ano's lifetimes it is the reference for inferring which arena a value lives in instead of annotating it, and for the trick that keeps such an inference from looping: generate all names first, then only merge. The effect-graph representation (union-find nodes, levelled "cones", letregion as popping a level) is a direct template for a lifetime analysis over arena scopes.

## Key ideas

- **Target.** Region-annotated terms: `letregion ρ in e end` allocates and frees a region in stack discipline, and `e at ρ` says where each value goes. Effects record get/put on regions, and letregion discharges the effects that do not escape.
- **Unification in consistent bases.** Effects are a graph of region and effect variables with UNION nodes for constant-time union. Unification is union-find; a "cone" is a stack of node sets indexed by level, so Observe at letregion pops the top level instead of walking the basis.
- **S then R.** S traverses once and creates a variable for every `at` annotation. R does Mycroft-style iteration over recursive functions, never creating variables; termination holds because each non-identity step contracts the basis built by S, and contraction is well-founded.
- **Structural quantification.** Type schemes may generalise only primary region and effect variables, which is the syntactic constraint that lets R avoid fresh names (the naive iteration provably diverges on a small example).
- **Cost.** Worst case S is O(n³) and R O(n⁴). In practice (Table I, HP 9000/700) the 1,148-line `simple` benchmark took 11.7 s in S and 14.2 s in R; Knuth–Bendix needed most iteration because of nested recursion. ML Kit programs ran between 4× slower and 10× faster than SML/NJ and several SML/NJ benchmarks fit in under 1 MB resident.

## Caveats

Correctness proofs are in an online-only appendix not reviewed here. Covers a core ML (no references, exceptions or modules in the formal part), and compile time was slower than ML users expected. Pure region inference can leak into long-lived regions; the Kit later added a GC alongside regions, and the 2004 retrospective is the place to read about that.

## Links

- PDF (author copy): https://elsman.com/mlkit/pdf/toplas98.pdf
- ACM DOI: https://doi.org/10.1145/291891.291894
- Birkedal's region-inference papers: http://www.cs.cmu.edu/~birkedal/papers.html
