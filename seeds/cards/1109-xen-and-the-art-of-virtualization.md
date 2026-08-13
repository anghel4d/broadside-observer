---
title: "Xen and the Art of Virtualization"
authors:
  - "Paul Barham"
  - "Boris Dragovic"
  - "Keir Fraser"
  - "Steven Hand"
  - "Tim Harris"
  - "Alex Ho"
  - "Rolf Neugebauer"
  - "Ian Pratt"
  - "Andrew Warfield"
year: 2003
venue: "SOSP"
arxiv: null
doi: "10.1145/945445.945462"
source: "https://doi.org/10.1145/945445.945462"
topics:
  - virtualization
  - xen
  - hypervisors
seed_rank: 1109
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
  - title: "On Micro-Kernel Construction"
    url: "https://doi.org/10.1145/224056.224075"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224075"
    card: "1108-on-micro-kernel-construction"
  - title: "Disco: Running Commodity Operating Systems on Scalable Multiprocessors"
    url: "https://doi.org/10.1145/265924.265930"
    year: 1997
    arxiv: null
    doi: "10.1145/265924.265930"
    card: "1113-disco-running-commodity-operating-systems-on-scalable-multip"
---

# Xen and the Art of Virtualization

## One-sentence takeaway

Xen brings paravirtualization to commodity hardware: strong isolation with near-native performance for multiple OSes.

## Why it matters here

VM isolation model for running untrusted sims/tools beside trusted Broadside services.

## Key ideas

- Paravirtualized x86 interface.
- Hypervisor as thin multiplexing layer.
- Performance competitive with native Linux of its era.
- Path to cloud multi-tenant isolation.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/945445.945462](https://doi.org/10.1145/945445.945462)
- URL: https://doi.org/10.1145/945445.945462
