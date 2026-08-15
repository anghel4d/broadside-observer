---
title: "Legion: Expressing Locality and Independence with Logical Regions"
authors:
  - "Michael Bauer"
  - "Sean Treichler"
  - "Elliott Slaughter"
  - "Alex Aiken"
year: 2012
venue: "SC"
arxiv: null
doi: "10.1109/SC.2012.71"
source: "https://doi.org/10.1109/SC.2012.71"
topics:
  - regions
  - task-graph
seed_rank: 342
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
cites:
  - title: "Cilk: An Efficient Multithreaded Runtime System"
    url: "https://doi.org/10.1006/jpdc.1996.0107"
    year: 1996
    arxiv: null
    doi: "10.1006/jpdc.1996.0107"
  - title: "Sequoia: Programming the Memory Hierarchy"
    url: "https://doi.org/10.1109/sc.2006.55"
    year: 2006
    arxiv: null
    doi: "10.1109/sc.2006.55"
see:
  - "430-cilk-an-efficient-multithreaded-runtime-system"
---

# Legion: Expressing Locality and Independence with Logical Regions

## One-sentence takeaway

Legion names data as logical regions with privileges and coherence, then a distributed software out-of-order processor extracts task parallelism and maps physical instances through the memory hierarchy.

## Why it matters here

This is the HPC cousin of an engine frame graph plus ECS queries: independence is declared on data regions, not on “run these systems in parallel and hope.” Useful foil for ano task graphs that touch overlapping component sets.

## Key ideas

- A logical region is a first-class set of objects. Regions partition into disjoint or aliased subregions; tasks declare privileges (read / write / reduce) and coherence (exclusive / atomic / simultaneous / relaxed).
- Sibling tasks are dependence-checked via the region tree: if the least common ancestor is a disjoint partition, they do not alias.
- The SOOP pipelines mapping-dependence analysis, distribution (push + steal), physical mapping, deferred execution, and cleanup — analogous to an OoO CPU with regions as registers.
- A user mapper chooses processors and physical instances; a bad mapper can only hurt performance, not correctness.
- Evaluated on fluid-flow, AMR heat, and a circuit sim on Keeneland-class GPU clusters. SC 2012, DOI 10.1109/SC.2012.71.

## Caveats

## Links

- DOI: [10.1109/SC.2012.71](https://doi.org/10.1109/SC.2012.71)
- PDF: https://legion.stanford.edu/pdfs/sc2012.pdf
