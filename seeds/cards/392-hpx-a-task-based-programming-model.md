---
title: "HPX: A Task Based Programming Model in a Global Address Space"
authors:
  - "Hartmut Kaiser"
  - "Thomas Heller"
  - "Bryce Adelstein-Lelbach"
  - "Adrian Serio"
  - "Dietmar Fey"
year: 2014
venue: "PGAS"
arxiv: null
doi: "10.1145/2676870.2676883"
source: "https://doi.org/10.1145/2676870.2676883"
topics:
  - task-graph
  - hpx
seed_rank: 392
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
cites:
  - title: "StarPU: a unified platform for task scheduling on heterogeneous multicore architectures"
    url: "https://doi.org/10.1002/cpe.1631"
    year: 2011
    arxiv: null
    doi: "10.1002/cpe.1631"
  - title: "Qthreads: An API for programming with millions of lightweight threads"
    url: "https://doi.org/10.1109/IPDPS.2008.4536359"
    year: 2008
    arxiv: null
    doi: "10.1109/IPDPS.2008.4536359"
see:
  - "397-starpu-a-unified-platform-for-task-scheduling-on-heterogeneo"
---

# HPX: A Task Based Programming Model in a Global Address Space

## One-sentence takeaway

HPX extends C++11 futures/`async` across an active global address space so a remote call is the same API as a local one, scheduled as a lightweight HPX-thread.

## Why it matters here

Anoptic’s job graph is local; HPX is what that graph looks like when the machine is a cluster. The useful import is the constraint-based style — futures and dataflow LCOs instead of global MPI barriers — which already applies to a single-node GRID COMMAND tick.

## Key ideas

- Active Global Address Space (AGAS): objects have GIDs that survive migration; a parcel is an active message that becomes an HPX-thread at the destination.
- Same C++ standard API locally and remotely (`async(action, id, args...)` returns `future<R>`); syntax is not a new language.
- Design against SLOW: hide latency with fine-grained threads, replace global barriers with LCOs (futures, dataflow, mutexes).
- The previously listed arXiv 1407.1559 is a different paper (Rosen, isomorphism theorems); this work is PGAS 2014, doi:10.1145/2676870.2676883.

## Caveats

## Links

- DOI: https://doi.org/10.1145/2676870.2676883
- Author PDF: https://stellar-group.org/pubs/pgas14.pdf
