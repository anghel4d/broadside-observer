---
title: "The UNIX Time-Sharing System"
authors:
  - "Dennis M. Ritchie"
  - "Ken Thompson"
year: 1974
venue: "CACM"
arxiv: null
doi: "10.1145/361011.361019"
source: "https://dsf.berkeley.edu/cs262/unix.pdf"
topics:
  - unix
  - operating-systems
  - file-system
  - process-model
seed_rank: 1814
seed_batch: "archive-2026-09-14"
reviewed: "2026-09-14"
pool: "systems"
relevance_score: 10
lineage: unix-lineage
cites:
  - title: "Plan 9 from Bell Labs"
    url: "https://9p.io/sys/doc/9.pdf"
    year: 1995
    arxiv: null
    doi: null
see: []
---

# The UNIX Time-Sharing System

## One-sentence takeaway

UNIX showed that a small hierarchical file system, uniform I/O, and fork/exec processes can deliver a powerful interactive OS without mainframe bulk.

## Why it matters here

Anoptic’s engine runtime and ano tooling inherit the UNIX contract: everything-is-a-file naming, pipes as composition, and cheap process/job boundaries. GRID COMMAND’s tooling and Broadside’s local agent harness still live on that interface; Plan 9 later generalizes the same idea over the network.

## Key ideas

- **Hierarchical file system with demountable volumes.** Directories as files; devices appear in the same namespace.
- **Uniform I/O.** File, device, and inter-process streams share one read/write model — pipes compose tools.
- **Process model.** Fork/exec, asynchronous processes, and a per-user shell as a replaceable command language.
- **Economy of implementation.** A useful multi-user system on modest PDP-11 hardware with a tiny core team — simplicity as a performance and maintenance feature.

## Caveats

1974 CACM description of PDP-11 UNIX, not a modern Linux/BSD kernel dig. Networking and graphics arrived later and remain awkward until Plan 9. Do not remint Plan 9 (this batch), FFS, LFS, or Trusting Trust as if they were this paper.

## Links

- Brewer recreation PDF: https://dsf.berkeley.edu/cs262/unix.pdf
- DOI (CACM): https://doi.org/10.1145/361011.361019
