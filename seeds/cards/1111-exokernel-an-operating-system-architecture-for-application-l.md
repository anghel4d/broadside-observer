---
title: "Exokernel: An Operating System Architecture for Application-Level Resource Management"
authors:
  - "Dawson R. Engler"
  - "M. Frans Kaashoek"
  - "James O'Toole Jr."
year: 1995
venue: "SOSP"
arxiv: null
doi: "10.1145/224056.224076"
source: "https://doi.org/10.1145/224056.224076"
topics:
  - operating-systems
  - exokernel
  - extensibility
seed_rank: 1111
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: systems-classics
cites:
  - title: "On Micro-Kernel Construction"
    url: "https://doi.org/10.1145/224056.224075"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224075"
    card: "1108-on-micro-kernel-construction"
  - title: "Mach: A New Kernel Foundation for UNIX Development"
    url: "http://www.cs.cmu.edu/afs/cs/project/mach/public/doc/published/new_kernel_found.pdf"
    year: 1986
    arxiv: null
    doi: null
    card: "1107-mach-a-new-kernel-foundation-for-unix-development"
  - title: "Scheduler Activations: Effective Kernel Support for the User-Level Management of Parallelism"
    url: "https://doi.org/10.1145/121132.121151"
    year: 1991
    arxiv: null
    doi: "10.1145/121132.121151"
    card: "1112-scheduler-activations-effective-kernel-support-for-the-user-"
---

# Exokernel: An Operating System Architecture for Application-Level Resource Management

## One-sentence takeaway

Exokernels expose hardware securely to library OSes—application-level resource management instead of a fixed high-level kernel API.

## Why it matters here

Radical extensibility foil to Mach/L4; useful when engines want custom paging/IO policies.

## Key ideas

- Secure multiplexing of physical resources.
- Library operating systems implement abstractions.
- Eliminate kernel-enforced high-level policies.
- Measurable wins for specialized apps.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/224056.224076](https://doi.org/10.1145/224056.224076)
- URL: https://doi.org/10.1145/224056.224076
