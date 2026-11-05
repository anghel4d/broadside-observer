---
title: "A Nonrecursive List Compacting Algorithm"
authors:
  - "C. J. Cheney"
year: 1970
venue: "Communications of the ACM 13(11):677–678, November 1970"
arxiv: null
doi: "10.1145/362790.362798"
source: "https://dl.acm.org/doi/10.1145/362790.362798"
topics:
  - "garbage-collection"
  - "copying-collector"
  - "cheney-scan"
  - "memory-management"
  - "lisp"
seed_rank: 2525
seed_batch: "archive-2026-11-06"
reviewed: "2026-11-06"
pool: "systems"
lineage: memory-reclamation
relevance_score: 9
cites:
  - title: "A Nonrecursive List Compacting Algorithm"
    url: "https://people.cs.umass.edu/~emery/classes/cmpsci691s-fall2004/papers/p677-cheney.pdf"
    year: 1970
    arxiv: null
    doi: "10.1145/362790.362798"
see: ["1363-cons-should-not-cons-its-arguments-part-ii-cheney-on-the-m-t-a", "2490-a-unified-theory-of-garbage-collection", "1364-immix-a-mark-region-garbage-collector-with-space-efficiency-fa"]
---

# A Nonrecursive List Compacting Algorithm

## One-sentence takeaway

Cheney shows how to compact a list heap by copying reachable cells into a contiguous to-space without a recursion stack: COPYLIST walks CDR-chains into to-space, then a linear SCAN of to-space applies COPYLIST to any list pointers found, so the partially built copy itself is the BFS queue.

## Why it matters here

Anoptic arenas already prefer bump allocation into contiguous regions; Cheney's scan/next pair is the classic reason a copying collector can allocate with a pointer bump and reclaim without a free-list. Appel's generational recipe and every later "Cheney scan" cite this two-page note. When ano eventually needs a small nursery or a compacting evacuation of a region, this is the algorithm the literature assumes you know.

## Key ideas

- Old area vs new area. Live structure is copied from the old list area into a fresh contiguous area; garbage is left behind and the areas are swapped after a collection.
- COPYLIST copies one list in the CDR direction, leaving CAR (and other) list pointers untransformed at first. Forwarding: once a cell is copied, the old cell is overwritten so subsequent hits reuse the to-space copy (illustrated in the paper's figures).
- After roots are forwarded, SCAN walks the new area from the start toward NEXT. Whenever SCAN finds a list pointer into the old area, it runs COPYLIST, which appends at NEXT. When SCAN catches NEXT, every reachable cell has been copied.
- No auxiliary stack or recursion: the to-space between SCAN and NEXT is the breadth-first work queue. Looped lists are handled by the forwarding write into the old cell.
- Contrasts Hansen and Fenichel–Yochelson, which recurse on sublists, and notes Deutsch–Schorr–Waite as a heavier non-recursive alternative.

## Caveats

- Two pages of CACM; the forwarding / looped-list case is sketched more than fully specified. Read Appel 1989 or a modern GC survey for the production formulation (scan/next, fromspace/tospace, broken hearts).
- Assumes you can update every pointer into a moved object. Conservative / ambiguous-root heaps (Boehm–Weiser) cannot use plain Cheney without mostly-copying variants.
- Homogeneous Lisp cells; variable-sized objects need the usual size-aware NEXT bump.

## Links

- [PDF (UMass mirror)](https://people.cs.umass.edu/~emery/classes/cmpsci691s-fall2004/papers/p677-cheney.pdf)
- [PDF (bernsteinbear mirror)](https://bernsteinbear.com/assets/img/cheney.pdf)
- [ACM DOI](https://doi.org/10.1145/362790.362798)
