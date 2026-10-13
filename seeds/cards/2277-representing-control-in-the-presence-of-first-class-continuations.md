---
title: "Representing Control in the Presence of First-Class Continuations"
authors:
  - "Robert Hieb"
  - "R. Kent Dybvig"
  - "Carl Bruggeman"
year: 1990
venue: "PLDI '90, 66–77"
arxiv: null
doi: "10.1145/93542.93554"
source: "https://www.cs.tufts.edu/~nr/cs257/archive/kent-dybvig/first-class-continuations.pdf"
topics:
  - continuations
  - segmented-stacks
  - runtime-design
  - scheme
seed_rank: 2277
seed_batch: "archive-2026-10-14"
reviewed: "2026-10-14"
pool: "languages"
relevance_score: 8
lineage: continuations
see:
  - 673-scheme-an-interpreter-for-extended-lambda-calculus
cites:
  - title: "Representing Control in the Presence of First-Class Continuations"
    url: "https://doi.org/10.1145/93542.93554"
    year: 1990
    arxiv: null
    doi: "10.1145/93542.93554"
  - title: "Scheme: An Interpreter for Extended Lambda Calculus"
    url: "https://dspace.mit.edu/handle/1721.1/5794"
    year: 1975
    arxiv: null
    doi: null
---

# Representing Control in the Presence of First-Class Continuations

## One-sentence takeaway

Implementing the control stack as a linked list of stack segments lets a runtime keep ordinary fast stack frames while making continuation capture constant-time (split the segment, copy nothing) and reinstatement bounded (copy back at most a fixed-size chunk), and the same mechanism handles stack overflow, underflow and many threads.

## Why it matters here

The library already covers why tail calls are jumps (2234), CPS compilation (666, 667) and stackless coroutines with continuation stealing (1556), but not the runtime data structure the authors built into Chez Scheme for call/cc. Any ano runtime, scripting layer or job system that wants coroutines, generators, fibers, resumable AI behaviours or deep recursion without a fixed stack size meets the same trade-off between heap frames (slow calls) and copied stacks (unbounded copying). Segmented stacks with an underflow handler are the standard answer.

## Key ideas

- **Segmented control stack.** The stack is a chain of segments, each a true stack of frames, plus a small stack record holding its base, link and size.
- **Capture without copying.** Capturing a continuation splits the current segment at the top frame: the part below becomes a saved, immutable segment and execution continues in the remainder. Nothing is copied.
- **Bounded reinstatement.** Reinstating copies a saved segment into the live stack only up to a tunable copy bound; larger segments are first split by walking back over frames, so a continuation reinstated many times never copies the whole stack.
- **Underflow handler.** The return address at the bottom of each segment points at a handler that pulls in the next saved segment, so returns across segment boundaries work transparently.
- **Overflow as capture.** Stack overflow is treated like an implicit capture: the full segment is pushed into the chain and a fresh one started, so deep recursion and many threads with small stacks both work. The paper also gives a way to detect overflow without hardware or OS support.

## Caveats

The paper says the method is at worst a constant factor slower than heap-allocated frames on continuation-heavy programs; it wins on typical programs where calls dominate. Segment splitting adds complexity to the GC, debuggers and FFI frames, and later systems hit the "hot split" problem (a call loop straddling a segment boundary repeatedly allocating and freeing segments), one reason Go and Rust moved away from segmented stacks; this paper predates that experience. The copy bound has to be tuned per machine, as the authors note. The mirror PDF is a scan.

## Links

- Paper (PDF, Tufts course archive): https://www.cs.tufts.edu/~nr/cs257/archive/kent-dybvig/first-class-continuations.pdf
- Paper (DOI): https://doi.org/10.1145/93542.93554
