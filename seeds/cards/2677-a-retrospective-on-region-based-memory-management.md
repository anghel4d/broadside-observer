---
title: "A Retrospective on Region-Based Memory Management"
authors:
  - "Mads Tofte"
  - "Lars Birkedal"
  - "Martin Elsman"
  - "Niels Hallenberg"
year: 2004
venue: "Higher-Order and Symbolic Computation 17(3), pp. 245-265"
arxiv: null
doi: "10.1023/B:LISP.0000029446.78563.a4"
source: "https://elsman.com/pdf/retro.pdf"
version_reviewed: "HOSC 2004 author PDF"
topics:
  - "region-based-memory"
  - "region-inference"
  - "ml-kit"
  - "arenas"
  - "garbage-collection"
  - "experience-report"
seed_rank: 2677
seed_batch: "archive-2026-11-22"
reviewed: "2026-11-22"
pool: "languages"
relevance_score: 7
lineage: region-memory
see:
  - "030-region-based-memory-management"
  - "2649-a-region-inference-algorithm"
  - "1138-language-support-for-regions"
  - "133-region-based-memory-management-in-cyclone"
  - "1011-cyclone-a-safe-dialect-of-c"
cites:
  - title: "A Retrospective on Region-Based Memory Management"
    url: "https://doi.org/10.1023/B:LISP.0000029446.78563.a4"
    year: 2004
    arxiv: null
    doi: "10.1023/B:LISP.0000029446.78563.a4"
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1006/inco.1996.2613"
    year: 1997
    arxiv: null
    doi: "10.1006/inco.1996.2613"
  - title: "A Region Inference Algorithm"
    url: "https://doi.org/10.1145/291891.291894"
    year: 1998
    arxiv: null
    doi: "10.1145/291891.291894"
---

# A Retrospective on Region-Based Memory Management

## One-sentence takeaway

Ten years of the ML Kit, told by its builders: what made Tofte–Talpin regions practical (region polymorphism, polymorphic recursion, multiplicity inference that sends most allocations to stack-resident "finite" regions, a region profiler, and a fallback GC), and what disappointed (whole-program automatic inference is fragile, the storage-mode analysis for tail recursion, and fragmentation in "infinite" page-list regions).

## Why it matters here

Anoptic is built on arenas, and ano will need to say how long things live. This paper is the best record of which region ideas held up in a real compiler and which did not. The lessons that carry over: most regions hold one value, so give them a cheap stack/frame path; make lifetimes visible with a profiler instead of hoping inference is right; keep a fallback for allocations that are not region-friendly; and prefer explicit, programmer-visible regions (the Cyclone direction they point to) over a compiler that silently rewrites everything. Their doubt about variable-size page-list regions ("no natural size of region page") is a direct warning for arena chunk sizing.

## Key ideas

- **Origins.** Generalising Talpin–Jouvelot's effect system from references to all values gave `e at ρ` and `letregion ρ in e end`: a stack of regions with lexical lifetimes. The early prototype was "terrible" until functions took region parameters (region polymorphism) and recursion became polymorphic in regions. Their `fac` example piles up 100 values in one region without it, and uses one local region per call with it.
- **Multiplicity inference.** Bounds on how many values a region receives turned out to be almost always 1 or ∞. Finite regions became words in the activation record; infinite regions became a descriptor (allocation pointer, end pointer, first page) over a linked list of fixed-size pages from a free list. In many programs 90%+ of runtime allocations went to finite regions (over 99% in the largest test), and running time improved roughly 3×.
- **Versus SML/NJ 0.93.** Programs ran anywhere from 10× faster to 4× slower, and used from 8% to over 3000% of SML/NJ's space. Region-friendly rewrites usually won on space, but making a program region-friendly took real effort and knowledge of the analyses.
- **Region profiler.** This was the breakthrough for finding space leaks. The 58,000-line AnnoDomini program needed about 10 lines changed, after which it used less space than under SML/NJ.
- **Regions + GC.** Hallenberg's collector (Cheney-style over region pages) cut the number of collections. Region-only was always fastest because no tags were needed. Region-optimised programs used up to 4× more space with GC added. For unoptimised programs, GC alone could beat regions+GC on space because region waste reached 23%. The best strategy depends on the program. The Kit bootstraps itself, and the combination matches a generational GC.
- **Disappointments.** Fully automatic inference makes annotated terms large and brittle to program changes. Storage-mode analysis is complicated. Infinite regions bring fragmentation and complexity all the way down to code generation.

## Caveats

This is an experience report, not new technique. Its numbers come from the cited ML Kit papers, run on 1990s machines against SML/NJ 0.93. It is about Standard ML (garbage-collected, immutable-by-default) rather than C or ECS data. "Works well" here means typical SML programs. For the inference algorithm itself see card 2649.

## Links

- Author PDF: https://elsman.com/pdf/retro.pdf
- Springer (open access): https://link.springer.com/article/10.1023/B:LISP.0000029446.78563.a4
- DOI: https://doi.org/10.1023/B:LISP.0000029446.78563.a4
