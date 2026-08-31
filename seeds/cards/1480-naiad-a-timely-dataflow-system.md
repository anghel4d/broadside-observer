---
title: "Naiad: A Timely Dataflow System"
authors: ["Derek G. Murray", "Frank McSherry", "Rebecca Isaacs", "Michael Isard", "Paul Barham", "Martín Abadi"]
year: 2013
venue: "SOSP"
arxiv: null
doi: "10.1145/2517349.2522738"
source: "https://doi.org/10.1145/2517349.2522738"
topics: [production-rules-triggers, relational-ecs-queries]
seed_rank: 1480
seed_batch: "craft-2026-08-31"
reviewed: "2026-08-31"
pool: "languages"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Differential Dataflow"
    url: "https://www.cidrdb.org/cidr2013/Papers/CIDR13_Paper111.pdf"
    year: 2013
    arxiv: null
    doi: null
  - title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
    url: "https://doi.org/10.1109/69.43410"
    year: 1989
    arxiv: null
    doi: "10.1109/69.43410"
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
see:
  - "823-differential-dataflow"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
---

# Naiad: A Timely Dataflow System

## One-sentence takeaway

Timely dataflow timestamps (epoch + nested loop counters) plus `ONRECV` / `ONNOTIFY` let one runtime do streaming, iteration, and incremental updates with consistent intermediate views — the standing-trigger engine under Differential Dataflow.

## Why it matters here

Rete 42 / TREAT 1004 / Datalog 39 are the production-rule *matchers*. Differential Dataflow 823 is the incremental *algebra*. GRID COMMAND still needs the *runtime* leftover: when does a standing rule know this tick’s facts are complete? Naiad’s answer is structured timestamps and a lightweight progress tracker, not a barrier across the whole world. Ingress/egress/feedback vertices nest loops inside a streaming epoch so “recompute influence as the map ticks” and “iterate combat resolution until quiescence” compose. Their interactive app answers queries in 4–100 ms on a live view. Steal the timestamp + notify model for ano standing rules; do not stand up a cluster.

## Key ideas

- **Timestamps are `(epoch, ⟨c₁,…,cₖ⟩)`.** One counter per enclosing loop context. Ingress pushes a 0, feedback increments the innermost counter, egress pops. `t₁ ≤ t₂` is epoch and lexicographic counters — the happens-before of “this message could cause that one.”
- **Two callbacks.** `ONRECV(edge, msg, time)` may `SENDBY` immediately (Distinct can emit the first sighting with no wait). `ONNOTIFY(time)` fires only after no further `ONRECV` with `t′ ≤ time` will arrive — the consistent-cut for counts, joins, and rule fire.
- **Loop contexts are structural.** Cycles must sit inside a loop context and pass a feedback vertex. That restriction is what makes progress tracking cheap instead of a general cyclic dataflow solver.
- **Libraries, not a sealed DSL.** LINQ-style operators, a Bloom/Datalog fragment (Where/Concat/Distinct/Join, no `NOTIFYAT` ⇒ async), and Pregel supersteps are all graphs on the same primitives. Differential Dataflow is the incremental library on top.

## Caveats

The prototype targets working sets in aggregate RAM and spends real engineering on avoiding GC/lock/packet stalls — a game frame loop is a different SLO than a 4 ms cluster query, but the *model* is the takeaway. Distributed progress tracking is heavier than Anoptic needs; run one process. Soufflé compiles Datalog to C++ analyzers (cite, do not mint — CAV tool paper, points-to shaped). Do not remint 823 / 39 / 42 / 1004.

## Links

- DOI: [10.1145/2517349.2522738](https://doi.org/10.1145/2517349.2522738)
- SOSP PDF: https://sigops.org/s/conferences/sosp/2013/papers/p439-murray.pdf
- Author PDF: https://www.cs.utexas.edu/~rossbach/cs380p/papers/murray13naiad.pdf
