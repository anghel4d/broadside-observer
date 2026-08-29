---
title: "Incremental Computation via Function Caching"
authors: ["William Pugh", "Tim Teitelbaum"]
year: 1989
venue: "POPL"
arxiv: null
doi: "10.1145/75277.75305"
source: "https://doi.org/10.1145/75277.75305"
topics: [embedded-scripting-dsls, batched-interpreters-ffi, computational-linguistics-interfaces]
seed_rank: 1464
seed_batch: "archive-2026-08-30"
reviewed: "2026-08-30"
pool: "languages"
relevance_score: 9
lineage: incremental-computation
cites:
  - title: "Adaptive Functional Programming"
    url: "https://doi.org/10.1145/503272.503296"
    year: 2002
    arxiv: null
    doi: "10.1145/503272.503296"
  - title: "Making Data Structures Persistent"
    url: "https://doi.org/10.1016/0022-0000(89)90034-2"
    year: 1989
    arxiv: null
    doi: "10.1016/0022-0000(89)90034-2"
see:
  - "1461-making-data-structures-persistent"
---

# Incremental Computation via Function Caching

## One-sentence takeaway

Memoize a batch program's function calls, then on a small input change reuse the cache instead of writing a second, explicitly incremental algorithm — the 1989 alternative to attribute-grammar incrementality.

## Why it matters here

ano scripts and GRID COMMAND standing rules re-run when the world ticks. Writing a matching *delta* program by hand is how incremental bugs are born. Pugh–Teitelbaum show that function caching (memoization plus a cache that survives across runs) makes an ordinary recursive program incremental for free on "the next input differs only slightly." Acar's adaptive functional programming (1465) and Adapton (1466) are the dependence-graph descendants; this is the cache-first ancestor.

## Key ideas

- **Same program, next input.** Treat incrementality as online evaluation of f(x0), f(x1), … where consecutive xi are close, not as a separately written updater.
- **Function caching.** Remember call results; a changed input re-evaluates only calls whose arguments actually differ. Broader than attribute grammars, which need a static dependence shape.
- **When it works.** Semantic checking, WYSIWYG reformatting, and other "re-run the analyzer" loops — the same shape as ano rule re-fire and GRID COMMAND order reparse.
- **Evidence.** POPL 1989, Cornell. Became the standard citation for cache-and-prune incrementalization before dynamic dependence graphs.

## Caveats

A cache is only as incremental as argument equality: large tuple arguments that change in irrelevant slots thrash. No demand-driven cutoff (that is Adapton). Not a recipe for GPU GI or mesh LOD. Attribute-grammar incrementality remains better when the graph really is a static syntax tree. Cite, do not remint, Reps's attribute-grammar line.

## Links

- DOI: https://doi.org/10.1145/75277.75305
- PDF: http://matthewhammer.org/courses/csci7000-s17/readings/Pugh89.pdf
