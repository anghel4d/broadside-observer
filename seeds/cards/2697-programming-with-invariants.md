---
title: "Programming with Invariants"
authors:
  - "Robert Paige"
year: 1986
venue: "IEEE Software 3(1), 56–69"
arxiv: null
doi: "10.1109/MS.1986.233070"
source: "https://www.cs.tufts.edu/~nr/cs257/archive/robert-paige/invariants.pdf"
version_reviewed: "IEEE Software, January 1986 (journal scan)"
topics:
  - "finite-differencing"
  - "incremental-computation"
  - "invariant-maintenance"
  - "setl"
  - "strength-reduction"
  - "program-transformation"
  - "derived-state"
seed_rank: 2697
seed_batch: "archive-2026-11-24"
reviewed: "2026-11-23"
pool: "languages"
relevance_score: 8
lineage: incremental-computation
cites:
  - title: "Programming with Invariants"
    url: "https://doi.org/10.1109/MS.1986.233070"
    year: 1986
    arxiv: null
    doi: "10.1109/MS.1986.233070"
  - title: "Finite Differencing of Computable Expressions"
    url: "https://doi.org/10.1145/357172.357177"
    year: 1982
    arxiv: null
    doi: "10.1145/357172.357177"
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
see:
  - "592-an-axiomatic-basis-for-computer-programming"
  - "626-assigning-meanings-to-programs"
  - "593-proof-of-correctness-of-data-representations"
  - "590-a-discipline-of-programming"
---

# Programming with Invariants

## One-sentence takeaway

Paige makes "keep E equal to f(x₁,…,xₙ) inside this region" a first-class SETL construct: the programmer writes, once per invariant, how to establish it and the pre/post-difference code to run around each kind of modification to its inputs, and the RAPTS system composes a whole web of interdependent invariants (chain rule, ordering, stream-fused initialization) so that a clear but slow program becomes the fast one, e.g. selection sort becomes heap sort by maintaining `E = min/q` as a heap.

## Why it matters here

This is the cleanest early statement of what ano's standing rules (なる derived values, する reactions) have to do: a derived column is an invariant `E ← f(columns)`, and every command that mutates an input column must be preceded or followed by the matching difference code, never a full recompute. Paige's contribution beyond "incremental view maintenance" is the *engineering discipline*: per-invariant difference rules written separately from the dependency wiring, a chain rule that orders maintenance code by the dependency graph, and correctness conditions that say when replacing `f(...)` by `E` is legal. That maps directly onto ano compiling a selection-as-reference update into masked column writes plus the deltas for every rule that reads those columns, and onto ECS "cached query" structures in Anoptic.

## Key ideas

- **Invariant definitions.** A user-defined invariant `E ← f(x₁,…,xₙ)` has four parts: a header, a *differencing section* giving predifference code `∂⁻E⟨dx⟩` (run just before modification `dx`) and postdifference code `∂⁺E⟨dx⟩` (run just after), an initialization section that establishes E on entry to the region, and the replaceable/replacing terms. Example: the heap invariant uses siftup as predifference for `s with:= z` and siftdown as postdifference for `s less:= min/s`.
- **Maintain blocks.** `maintain E … B … end maintain` means establish E on entry, wrap every modification of an input of f inside B with its difference code, and replace each occurrence of `f(...)` in B by E. Conditions: difference code must preserve the invariant; predifference code must not modify E; difference code must not reintroduce replaceable terms, so the expensive expressions really vanish.
- **Chain rule for collections.** For interdependent invariants (example: a bibliography with `citelist`, `citeset`, `citecount(x) = count(citelist, x)` and `sorted`), the system orders the difference code by the dependency graph, so the code for an invariant runs before the code of invariants that depend on it, and uses cheaper invariants (counts) to make other difference code cheap. Establishment of several invariants is fused by a stream-processing transformation into a minimal number of loops.
- **Repeated arguments.** Invariants like `E ← f(x, x)` are handled with a single extra copy of x rather than the 2ⁿ special-case rules strength reduction would need; an improved method can sometimes avoid the copy entirely (worked on a "largest orbit" problem).
- **Lineage.** Finite differencing generalizes Cocke's strength reduction and Earley's iterator inversion; the sidebar relates it to Hoare/Floyd/Dijkstra invariant-based methodology, Fong–Ullman induction variables, Burstall–Darlington transformations, Schwartz's more general substitution rules for maintaining "relationships" within program regions, and Date's rule system for database integrity constraints under updates. The fully automatic version is Paige and Koenig, TOPLAS 1982.

## Caveats

1986 magazine-length exposition of a research prototype (RAPTS, SETL subset); no performance tables beyond asymptotic arguments in the examples. The difference code is supplied by the user per invariant; only the composition is automatic. The scan used here (a 2012 archive copy) has heavy OCR damage in the formulas, so the notation above is paraphrased from the prose. The TOPLAS 1982 companion paper (the formal calculus) is behind the ACM paywall from the box and was read only through its abstract and introduction.

## Links

- PDF (scan, Tufts CS257 archive): https://www.cs.tufts.edu/~nr/cs257/archive/robert-paige/invariants.pdf
- DOI (IEEE Software): https://doi.org/10.1109/MS.1986.233070
- Companion paper, Paige & Koenig, Finite Differencing of Computable Expressions (TOPLAS 1982): https://doi.org/10.1145/357172.357177
- Lecture-note summary of Paige & Koenig (UT Austin, Novak): https://www.cs.utexas.edu/~novak/paige-koenig82.html
