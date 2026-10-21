---
title: "Concurrent Cycle Collection in Reference Counted Systems"
authors:
  - "David F. Bacon"
  - "V. T. Rajan"
year: 2001
venue: "ECOOP 2001, LNCS 2072, 207–235"
arxiv: null
doi: "10.1007/3-540-45337-7_12"
source: "https://pages.cs.wisc.edu/~cymen/misc/interests/Bacon01Concurrent.pdf"
topics:
  - reference-counting
  - cycle-collection
  - concurrent-gc
  - trial-deletion
seed_rank: 2378
seed_batch: "archive-2026-10-22"
reviewed: "2026-10-22"
pool: "systems"
relevance_score: 8
lineage: memory-management
see:
  - 1859-perceus-garbage-free-reference-counting-with-reuse
  - 252-concurrent-reference-counting-and-resource-management-in-wai
  - 2353-on-the-fly-garbage-collection-an-exercise-in-cooperation
  - 1364-immix-a-mark-region-garbage-collector-with-space-efficiency-fa
  - 1095-revisiting-partial-tracing-cdpt
cites:
  - title: "Concurrent Cycle Collection in Reference Counted Systems"
    url: "https://doi.org/10.1007/3-540-45337-7_12"
    year: 2001
    arxiv: null
    doi: "10.1007/3-540-45337-7_12"
---

# Concurrent Cycle Collection in Reference Counted Systems

## One-sentence takeaway

Bacon and Rajan make "trial deletion" cycle collection practical: buffer every object whose count is decremented to a non-zero value (purple, at most once via a buffered flag), then subtract internal references over the whole transitive closure of those candidates at once (linear time, unlike Lins' per-root quadratic scan), skip statically acyclic "green" classes, and — for a concurrent collector — run the analysis on a shadow cyclic reference count and only free a candidate set after it passes a Σ-test and a Δ-test across an epoch boundary; in IBM's Recycler for Jalapeño this gave the first practical cycle collection in an RC collector for a mainstream language, with 6 ms maximum pauses.

## Why it matters here

ano's values are mostly immutable arrays where reference counting (with in-place reuse, as in Perceus, card 1859) is the natural memory model, but closures, scene graphs and editor object models will create cycles. This paper is the standard answer for "RC plus a backup that never traces the whole heap": the synchronous algorithm is a page of pseudocode, the green-object trick maps directly onto types a compiler knows are acyclic, and the concurrent variant shows how to keep mutator threads free of synchronisation beyond a once-per-epoch buffer handoff.

## Key ideas

- **Where cycles come from.** Garbage cycles can only appear when a count is decremented to a non-zero value, so those objects are the only candidate roots.
- **Colours.** Black (in use), gray (possible cycle member), white (garbage cycle member), purple (possible root), green (acyclic); the concurrent version adds red (candidate under Σ-computation) and orange (candidate awaiting an epoch boundary). Count, colour and buffered flag share one header word.
- **Synchronous algorithm.** MarkRoots runs MarkGray from each purple root, subtracting counts along internal edges; ScanRoots runs Scan, which re-blackens (and restores counts of) anything still externally referenced and whitens the rest; CollectRoots frees white nodes. Processing the whole closure as one graph is what makes it linear; the authors report that unmodified Lins' algorithm produced delays of minutes on large programs.
- **Green objects.** Classes containing only scalars, references to final acyclic classes, or arrays of those are acyclic and never considered, which usually cuts candidate roots by an order of magnitude.
- **Concurrent algorithm.** Mutators log increments/decrements into per-thread buffers handed to the collector once per epoch; decrements are applied one epoch late. The liveness phase runs on a cyclic reference count (CRC) copied from the true count, so mutator races never corrupt real counts; white sets become orange candidates.
- **Safety phase.** A candidate set is freed only if it passes the Σ-test (no references from outside the set, computed from counts) and the Δ-test (no count in the set changed while it waited); the paper proves both tests are necessary and sufficient, and processes candidate sets in reverse discovery order so freeing one cannot break another.

## Caveats

Measurements are on eight Java benchmarks in a 2001 research JVM on a multiprocessor; end-to-end time was usually comparable to a parallel mark-and-sweep but varied in both directions, and the paper does not separate cycle-collection cost from the rest of the Recycler. Deferred decrements delay reclamation by an epoch, and the root buffer can still grow with mutation-heavy programs. Later reference-counting collectors (Levanoni–Petrank sliding views and its successors, RC Immix) mostly handle cycles with occasional backup tracing instead of trial deletion, so this is a design option, not the settled answer.

## Links

- Paper (PDF): https://pages.cs.wisc.edu/~cymen/misc/interests/Bacon01Concurrent.pdf
- Paper (DOI, ECOOP 2001, LNCS 2072): https://doi.org/10.1007/3-540-45337-7_12
