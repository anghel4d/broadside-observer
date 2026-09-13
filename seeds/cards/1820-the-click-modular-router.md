---
title: "The Click Modular Router"
authors:
  - "Eddie Kohler"
  - "Robert Morris"
  - "Benjie Chen"
  - "John Jannotti"
  - "M. Frans Kaashoek"
year: 2000
venue: "ACM TOCS"
arxiv: null
doi: "10.1145/354871.354874"
source: "https://pdos.csail.mit.edu/papers/click:tocs00/paper.pdf"
topics:
  - modular-router
  - packet-processing
  - dataflow
  - systems
seed_rank: 1820
seed_batch: "archive-2026-09-14"
reviewed: "2026-09-14"
pool: "engines"
relevance_score: 9
lineage: modular-packet-pipelines
cites:
  - title: "Exokernel: An Operating System Architecture for Application-Level Resource Management"
    url: "https://pdos.csail.mit.edu/6.828/2012/readings/engler95exokernel.pdf"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224076"
see:
  - "1796-exokernel-an-operating-system-architecture-for-application-level-resource-management"
---

# The Click Modular Router

## One-sentence takeaway

Click builds routers as directed graphs of fine-grained packet-processing elements — modular, reconfigurable, and still fast on commodity PCs.

## Why it matters here

Anoptic’s frame/job pipelines and GRID COMMAND’s netcode want the same graph-of-elements pattern: classify → queue → schedule → emit, with pull connections for device-driven flow. Broadside agent tool chains can reuse the “swap an element” extension style instead of forking a monolith.

## Key ideas

- **Elements as vertices.** Classification, queueing, scheduling, and device I/O are separate modules; packets flow along edges.
- **Push and pull connections.** Pull models transmitter-driven flow; flow-based router context helps elements find peers.
- **Composable IP router.** A standards-compliant Click IP router uses ~16 forwarding-path elements; DiffServ/fairness are add-on elements.
- **Performance existence proof.** ~333k 64-byte pkt/s loss-free on contemporary PC hardware — modularity without giving up throughput.

## Caveats

2000 software router on conventional NICs — predates DPDK/XDP/eBPF fast paths, which inherit the modular idea. Open MIT PDOS PDF verified. Do not remint Exokernel 1796 or Active Messages 1817 as if they were Click.

## Links

- MIT PDOS PDF: https://pdos.csail.mit.edu/papers/click:tocs00/paper.pdf
- DOI: https://doi.org/10.1145/354871.354874
