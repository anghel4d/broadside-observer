---
title: "Plan 9 from Bell Labs"
authors:
  - "Rob Pike"
  - "Dave Presotto"
  - "Sean Dorward"
  - "Bob Flandrena"
  - "Ken Thompson"
  - "Howard Trickey"
  - "Phil Winterbottom"
year: 1995
venue: "Computing Systems"
arxiv: null
doi: null
source: "https://9p.io/sys/doc/9.pdf"
topics:
  - plan9
  - distributed-os
  - 9p
  - namespaces
seed_rank: 1818
seed_batch: "archive-2026-09-14"
reviewed: "2026-09-14"
pool: "systems"
relevance_score: 10
lineage: unix-lineage
cites:
  - title: "The UNIX Time-Sharing System"
    url: "https://dsf.berkeley.edu/cs262/unix.pdf"
    year: 1974
    arxiv: null
    doi: "10.1145/361011.361019"
  - title: "Exokernel: An Operating System Architecture for Application-Level Resource Management"
    url: "https://pdos.csail.mit.edu/6.828/2012/readings/engler95exokernel.pdf"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224076"
see:
  - "1814-the-unix-time-sharing-system"
  - "1796-exokernel-an-operating-system-architecture-for-application-level-resource-management"
---

# Plan 9 from Bell Labs

## One-sentence takeaway

Plan 9 rebuilds the UNIX idea for a network of machines: everything is a file exported over 9P, and each process builds a private namespace over shared servers.

## Why it matters here

Anoptic’s tools, GRID COMMAND’s server/client split, and Broadside agent sandboxes want per-process views of resources — not one global mount table. 9P-style file protocols are a clean IPC/UI surface for engine editors and remote workers. Complements UNIX 1814 and Exokernel 1796.

## Key ideas

- **9P as the network file protocol.** Remote resources speak the same file operations as local ones.
- **Per-process namespaces.** Users and agents assemble private views of CPU, files, graphics, and the network instead of owning a whole workstation OS image.
- **Central services, cheap terminals.** Compute and file servers are shared; offices run thin terminals — “a UNIX out of little systems,” not “a system out of little UNIXes.”
- **Revisit beyond the kernel.** New compilers, libraries, window system, and apps when bringing UNIX workloads across.

## Caveats

1995 Computing Systems paper; Inferno/Limbo and modern 9P derivatives are successors, not this text. Open PDF at 9p.io. Deferred from prior Archive keep-rate. Do not remint UNIX 1814 or Exokernel 1796.

## Links

- Official PDF: https://9p.io/sys/doc/9.pdf
- Mirror: https://plan9.io/sys/doc/9.pdf
