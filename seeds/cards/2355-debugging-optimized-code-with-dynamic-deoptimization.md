---
title: "Debugging Optimized Code with Dynamic Deoptimization"
authors:
  - "Urs Hölzle"
  - "Craig Chambers"
  - "David Ungar"
year: 1992
venue: "PLDI '92 (ACM SIGPLAN Conference on Programming Language Design and Implementation), 32–43"
arxiv: null
doi: "10.1145/143095.143114"
source: "https://bibliography.selflanguage.org/_static/dynamic-deoptimization.pdf"
topics:
  - jit-compilation
  - deoptimization
  - debugging
  - live-code-update
seed_rank: 2355
seed_batch: "archive-2026-10-20"
reviewed: "2026-10-20"
pool: "languages"
relevance_score: 9
lineage: interpreter-dispatch
see:
  - 687-self-the-power-of-simplicity
  - 1362-optimizing-dynamically-typed-object-oriented-languages-with-po
  - 2339-simple-and-effective-type-check-removal-through-lazy-basic-block
  - 1439-dynamo-a-transparent-dynamic-optimization-system
cites:
  - title: "Debugging Optimized Code with Dynamic Deoptimization"
    url: "https://doi.org/10.1145/143095.143114"
    year: 1992
    arxiv: null
    doi: "10.1145/143095.143114"
---

# Debugging Optimized Code with Dynamic Deoptimization

## One-sentence takeaway

Hölzle, Chambers and Ungar give SELF full source-level debugging and live method redefinition on top of an aggressively inlining, customizing compiler by recording scope descriptors at a sparse set of interrupt points and, on demand, rewriting a single optimized physical frame into one unoptimized frame per inlined source activation — lazily, when that frame next reaches the top of the stack — the technique that later speculative JITs (HotSpot, which grew out of the SELF and Strongtalk work, among them) use to back out of optimized code.

## Why it matters here

If ano gets an optimizing tier, the hard part is not the optimization but getting back out of it: a hot-reloaded rule or script function that was inlined into running code, a breakpoint in a specialized loop, or a speculation (type, shape, array rank) that stops holding. This paper's recipe — debug info only at interrupt points (calls and loop back-edges), per-scope descriptors that can say "this variable is the constant 7", dependency links from source methods to compiled code, and lazy frame rewriting — is the smallest design that makes aggressive specialization safe to combine with an interactive, live-editable engine.

## Key ideas

- **Two code states.** Optimized code can stop only at interrupt points (method prologues and loop ends in SELF), where the source-level state is reconstructible; unoptimized code can stop at every source operation and so supports single-step and variable edits.
- **Scope descriptors.** For every scope in a compiled method (the method plus everything inlined into it) the compiler records its place in the virtual call tree and, for each argument, local and pending subexpression, either a constant value or a run-time location; a physical-to-virtual PC map ties machine PCs to source positions.
- **Deoptimization.** One physical frame holding several virtual activations is expanded into a sequence of unoptimized frames, one per activation. Only frames actually being debugged are converted; everything else keeps running optimized.
- **Lazy transformation.** A frame in the middle of the stack is not rewritten in place; it is converted when control returns to it, which spreads cost over time and means a burst of source edits invalidates code many times but transforms it once.
- **Live updates.** Dependency links from source methods to compiled methods let a redefinition invalidate every compiled method that inlined the old version; active ones are deoptimized so later calls see the new definition. The paper reports this took under a hundred lines of C++ on top of the debugging support, and the frame transformation under 400.
- **Cost.** Unoptimized methods compile in about a millisecond on a SPARCstation 1; keeping dead variables visible at interrupt points cost under 2%; interrupt polling cost about 4% typically and up to 13% in tight numeric loops; debugging information was 122% of instruction size in the adaptive configuration and 233% when everything was optimized.

## Caveats

The approach assumes a pointer-safe language and a run-time compiler (the authors note pointer-unsafe languages would need far denser interrupt points, and pointers into the stack complicate frame rewriting). SELF at the time did not let the user change a local variable that the optimizer had eliminated, and it forgoes tail-call elimination because the eliminated frames cannot be reconstructed. Run-time overhead of debuggability could not be fully isolated because the system was designed around it.

## Links

- Paper (PDF, SELF bibliography): https://bibliography.selflanguage.org/_static/dynamic-deoptimization.pdf
- Paper (DOI, PLDI '92): https://doi.org/10.1145/143095.143114
