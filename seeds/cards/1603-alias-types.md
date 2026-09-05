---
title: "Alias Types"
authors:
  - "Frederick Smith"
  - "David Walker"
  - "Greg Morrisett"
year: 2000
venue: "ESOP 2000"
arxiv: null
doi: "10.1007/3-540-46425-5_24"
source: "https://www.cs.cornell.edu/talc/papers/alias.pdf"
topics:
  - alias-types
  - linear-types
  - typed-assembly
  - memory-safety
seed_rank: 1603
seed_batch: "archive-2026-09-06"
reviewed: "2026-09-06"
pool: "languages"
relevance_score: 9
lineage: region-memory-capabilities
cites:
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1016/S0890-5401(97)00054-5"
    year: 1997
    arxiv: null
    doi: "10.1016/S0890-5401(97)00054-5"
see:
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "030-region-based-memory-management"
  - "1011-cyclone-a-safe-dialect-of-c"
  - "133-region-based-memory-management-in-cyclone"
---

# Alias Types

## One-sentence takeaway

Alias types let a low-level typed language (TAL) describe the *shape of the store* a function expects — tracking pointer aliases, field initialization (`junk` → τ), and safe reuse of memory at different types — where pure linear types would forbid the sharing compilers need.

## Why it matters here

ano and Anoptic’s C/Vulkan layer want memory safety without pretending the machine has unique pointers. Capabilities/Vault (028) and regions (030 / Cyclone 1011/133) are live; Alias Types is the ESOP 2000 store-shape story that makes initialization and aliasing explicit in the type system — the right ancestor for “typed allocators / arenas that change type as you fill them.”

## Key ideas

- **Store as type.** Functions specify the aliasing and types of the heap they assume; pointer values are tracked through the computation rather than stamped forever.
- **Initialization.** `malloc` yields `{junk,junk}`; stores refine field types step by step to `{int,int}` — the canonical low-level objection to “one type per location for life.”
- **Controlled aliasing.** Unlike strict linearity (use-once), alias types permit sharing patterns that compilers emit (multiple pointers into one structure) while still enabling free/reuse when the type system says it is safe.
- **TAL integration.** Built on an Fω-style constructor language already in Typed Assembly Language; Popcorn/TAL extended with these features.
- **vs high-level linear types.** Prior linear systems optimized for human programmers / inference; alias types optimize for machine-level IR where registers and stack slots are reused across types.

## Caveats

- Title was in `seen.json` from harvest but had no live card — minted now.
- Foundational type-system paper: not a drop-in C checker (see CCured lineage, still unread/ACM-walled this pass).
- Do not remint 028/030/1011/133; this is the alias/store-shape complement, not a region calculus remint.

## Links

- Open PDF (Cornell TALC): https://www.cs.cornell.edu/talc/papers/alias.pdf
- DOI: https://doi.org/10.1007/3-540-46425-5_24
