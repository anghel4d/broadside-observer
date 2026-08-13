---
title: "On Micro-Kernel Construction"
authors:
  - "Jochen Liedtke"
year: 1995
venue: "SOSP"
arxiv: null
doi: "10.1145/224056.224075"
source: "https://doi.org/10.1145/224056.224075"
topics:
  - operating-systems
  - l4
  - microkernel
seed_rank: 1108
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "Mach: A New Kernel Foundation for UNIX Development"
    url: "http://www.cs.cmu.edu/afs/cs/project/mach/public/doc/published/new_kernel_found.pdf"
    year: 1986
    arxiv: null
    doi: null
    card: "1107-mach-a-new-kernel-foundation-for-unix-development"
  - title: "Xen and the Art of Virtualization"
    url: "https://doi.org/10.1145/945445.945462"
    year: 2003
    arxiv: null
    doi: "10.1145/945445.945462"
    card: "1109-xen-and-the-art-of-virtualization"
  - title: "Exokernel: An Operating System Architecture for Application-Level Resource Management"
    url: "https://doi.org/10.1145/224056.224076"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224076"
    card: "1111-exokernel-an-operating-system-architecture-for-application-l"
---

# On Micro-Kernel Construction

## One-sentence takeaway

Liedtke shows microkernels can be fast: L4's minimal abstractions and IPC path reverse the 'microkernels are slow' verdict.

## Why it matters here

Performance-conscious minimal kernels—relevant when factoring trusted computing bases for tools/sim.

## Key ideas

- Minimality: only abstractions that must be in kernel mode.
- IPC performance as the microkernel make-or-break.
- Critique of first-generation microkernel bloat (Mach-era).
- L4 family lineage begins here.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/224056.224075](https://doi.org/10.1145/224056.224075)
- URL: https://doi.org/10.1145/224056.224075
