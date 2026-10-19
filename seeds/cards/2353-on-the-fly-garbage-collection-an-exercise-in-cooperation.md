---
title: "On-the-Fly Garbage Collection: An Exercise in Cooperation"
authors:
  - "Edsger W. Dijkstra"
  - "Leslie Lamport"
  - "A. J. Martin"
  - "C. S. Scholten"
  - "E. F. M. Steffens"
year: 1978
venue: "Communications of the ACM 21(11), 966–975 (circulated as EWD 520, 20 October 1975)"
arxiv: null
doi: "10.1145/359642.359655"
source: "https://www.cs.utexas.edu/~EWD/transcriptions/EWD05xx/EWD520.html"
topics:
  - concurrent-garbage-collection
  - tricolor-marking
  - write-barriers
  - invariant-based-design
seed_rank: 2353
seed_batch: "archive-2026-10-20"
reviewed: "2026-10-20"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
see:
  - 1597-garbage-collection-in-an-uncooperative-environment
  - 1364-immix-a-mark-region-garbage-collector-with-space-efficiency-fa
  - 2333-virtual-memory-primitives-for-user-programs
  - 591-guarded-commands-nondeterminacy-and-formal-derivation-of-pro
cites:
  - title: "On-the-Fly Garbage Collection: An Exercise in Cooperation"
    url: "https://doi.org/10.1145/359642.359655"
    year: 1978
    arxiv: null
    doi: "10.1145/359642.359655"
  - title: "On-the-fly garbage collection: an exercise in cooperation (EWD 520)"
    url: "https://www.cs.utexas.edu/~EWD/transcriptions/EWD05xx/EWD520.html"
    year: 1975
    arxiv: null
    doi: null
---

# On-the-Fly Garbage Collection: An Exercise in Cooperation

## One-sentence takeaway

Dijkstra, Lamport, Martin, Scholten and Steffens let a second processor (the collector) mark and sweep a LISP-style heap while the mutator keeps running, by colouring nodes white, grey and black, maintaining two invariants about "propagation paths" from grey nodes, and asking the mutator for exactly one extra step per pointer store: shade the target of the edge it places — the paper that gave the field the tricolour abstraction and a mutator write barrier justified by invariants rather than by testing.

## Why it matters here

Every incremental or concurrent collector Anoptic or ano might adopt (a frame-sliced GC for script objects, a background marker for asset graphs, a concurrent cycle detector beside reference counting) is a variant of this paper's colour discipline and its mutator-shading obligation. More generally it is a model of how to design a lock-light protocol between a game thread and a worker: state the invariant first, find the minimum the fast path must do to preserve it, then break the slow side into the finest atomic steps the proof still allows.

## Key ideas

- **Uniform graph.** Every node has exactly two outgoing edges; missing edges point to a special NIL node, the free list is made reachable from its own root, so every mutation becomes "redirect an outgoing edge of a reachable node to a reachable node".
- **Zero mutator overhead is impossible.** A four-step counterexample shuttles node C between two reachable parents so that a collector visiting nodes one at a time never sees C reachable; the mutator must therefore mark targets of the edges it changes.
- **Colours and shading.** White = not yet known reachable, grey = marking obligation outstanding, black = done. Shading turns white into grey and leaves grey and black alone. Colours only darken during marking, which gives the termination argument.
- **Invariants.** The first attempt, P1 ("no black→white edge"), was too strong to keep at fine grain. The published proof uses P2 (every white reachable node has a propagation path of white-target edges from some grey node) and P3 (only the edge most recently placed by the mutator may go from black to white).
- **Mutator action A2.** "Shade the target of the previously placed edge, then redirect an edge" preserves P2 and P3; the paper then splits it into "redirect" followed by "shade the new target", justified by a thought experiment with a friendly daemon that shades reachable nodes at random.
- **Collector.** Shade all roots; sweep node numbers repeatedly, turning grey nodes black after shading their successors, until a full pass finds no grey; then an appending phase frees white nodes and whitens black ones. Black garbage survives one cycle and is collected in the next, so no garbage escapes for good.
- **Fine-grained collector proof.** Shading a node's two successors and blackening it can be five separate atomic steps; the argument uses a ghost set of "dodo-edges" that inherit status when the mutator redirects them.

## Caveats

This card was read from the EWD 520 transcription dated 20 October 1975, not the CACM text; the authors' own history notes that an earlier merged version had a bug found by Stenning and Woodger, so implementers should work from the published version. The model is a pure-LISP heap of fixed-size two-pointer cells with a sequentially consistent shared memory; real collectors must add weak-memory fences, variable-sized objects, stacks and registers as roots, and a work list instead of the paper's linear rescans (which the authors explicitly chose for simplicity, not speed). The proof is informal by the authors' own description.

## Links

- Paper (DOI, CACM 1978): https://doi.org/10.1145/359642.359655
- EWD 520 transcription (E. W. Dijkstra Archive): https://www.cs.utexas.edu/~EWD/transcriptions/EWD05xx/EWD520.html
- EWD 520 scan (PDF): https://www.cs.utexas.edu/~EWD/ewd05xx/EWD520.PDF
