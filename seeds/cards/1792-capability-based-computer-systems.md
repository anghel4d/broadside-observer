---
title: "Capability-Based Computer Systems"
authors:
  - "Henry M. Levy"
year: 1984
venue: "Digital Press"
arxiv: null
doi: null
source: "https://homes.cs.washington.edu/~levy/capabook/"
topics:
  - capabilities
  - operating-systems
  - protection
  - object-based-systems
seed_rank: 1792
seed_batch: "archive-2026-09-12"
reviewed: "2026-09-12"
pool: "systems"
relevance_score: 10
lineage: levy-capability-book
cites:
  - title: "seL4: Formal Verification of an OS Kernel"
    url: "https://doi.org/10.1145/1629575.1629596"
    year: 2009
    arxiv: null
    doi: "10.1145/1629575.1629596"
  - title: "EROS: a fast capability system"
    url: "https://doi.org/10.1145/319151.319163"
    year: 1999
    arxiv: null
    doi: "10.1145/319151.319163"
see:
  - "1665-sel4-formal-verification-of-an-os-kernel"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "1047-proof-carrying-code"
---

# Capability-Based Computer Systems

## One-sentence takeaway

Levy’s 1984 Digital Press monograph is the classic survey of capability- and object-based hardware and OS designs — Hydra, CAP, System/38, iAPX 432, and the vocabulary seL4 later proved.

## Why it matters here

Broadside’s capability shelf already has seL4 1665 and the capabilities calculus; this book is the historical map those cards sit on. Author-hosted chapter PDFs are openly available.

## Key ideas

- **Capabilities as unforgeable protected names.** A capability is both a designation and an authorization; possession, not an access-control list lookup, is the right to invoke.
- **Descriptor and capability architectures surveyed.** Hydra, Cambridge CAP, IBM System/38, Intel iAPX 432, and related machines show how hardware tags, directories, and protected procedures implement the model.
- **Object-based dual.** Capabilities and object-based OSes are two readings of the same protection story: typed objects with tightly bound operations.
- **Revocation, amplification, confinement, indirection.** Each mechanism has a cost; the book is the map of those tradeoffs rather than a single algorithm.

## Caveats

Book survey, not a single algorithm — do not mint each chapter separately. EROS and KeyKOS remain near-keepers (PDF walls this pass). Chapter PDFs are open at `homes.cs.washington.edu/~levy/capabook/`; the aggregated `CapBook.pdf` 404’d. Do not remint seL4 1665, the capabilities calculus 028, or PCC 1047.

## Links

- Author book page: https://homes.cs.washington.edu/~levy/capabook/
- Chapter 1 PDF: https://homes.cs.washington.edu/~levy/capabook/Chapter1.pdf
- Chapter 6 PDF: https://homes.cs.washington.edu/~levy/capabook/Chapter6.pdf
