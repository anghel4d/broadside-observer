---
title: "Cyclone: A Safe Dialect of C"
authors: ["Trevor Jim", "Greg Morrisett", "Dan Grossman", "Michael Hicks", "James Cheney", "Yanling Wang"]
year: 2002
venue: "USENIX ATC"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/2002-usenix-annual-technical-conference/cyclone-safe-dialect-of-c"
topics: [safe-c, region-memory-capabilities, fat-pointers]
seed_rank: 1011
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "languages"
relevance_score: 9
lineage: region-memory
cites:
  - title: "Region-Based Memory Management in Cyclone"
    url: "https://doi.org/10.1145/512529.512563"
    year: 2002
    arxiv: null
    doi: "10.1145/512529.512563"
  - title: "CCured: Type-Safe Retrofitting of Legacy Code"
    url: "https://doi.org/10.1145/503272.503286"
    year: 2002
    arxiv: null
    doi: "10.1145/503272.503286"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
see:
  - "133-region-based-memory-management-in-cyclone"
  - "030-region-based-memory-management"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
---

# Cyclone: A Safe Dialect of C

## One-sentence takeaway

A dialect of C that keeps data representation and manual memory control but rules out buffer overflows, format-string attacks, and dangling-pointer dereferences via types plus a few inserted checks.

## Why it matters here

anoptic-engine is C. The library already has Cyclone's region paper (133) and Tofte–Talpin (030); it never minted the USENIX language paper that is the actual "how we made C safe without becoming Java" design note — tagged pointers, never-null vs possibly-null, fat pointers, and the mistakes they reversed. That is the closest 2002 cousin to "write the engine in C, let ano be the safe inner language."

## Key ideas

- Safety goal is Java-like (no valid program dumps core from memory errors) while retaining C syntax, struct layout, and programmer-controlled allocation.
- Pointer kinds: ordinary / never-null / fat (bound-carrying) / region-scoped; casts are restricted so the kinds stay honest.
- Regions (detailed in the PLDI companion) plus optional GC; dangling dereferences are a type error, not a valgrind finding.
- Runtime checks are inserted only where static analysis cannot prove safety; the paper reports experience porting C, including which design bets they had to undo.
- Distinct from CCured (POPL 2002): Cyclone is a new dialect you write in, CCured is a retrofitting inference engine over mostly-unmodified C. Cite CCured, do not remint.

## Caveats

- Cyclone the language is dormant; the ideas live in Rust, Checked C, and capability/region calculi, not in a maintained C toolchain you can flip on.
- This USENIX paper is the overview; soundness of the region system is the Grossman et al. PLDI/TR companion already in the library as 133.
- Performance numbers are 2002-era and do not include SIMD/SoA engine idioms.

## Links

- USENIX: https://www.usenix.org/conference/2002-usenix-annual-technical-conference/cyclone-safe-dialect-of-c
- HTML: https://www.usenix.org/legacy/publications/library/proceedings/usenix02/full_papers/jim/jim_html/index.html
- PDF: https://homes.cs.washington.edu/~djg/papers/cyclone.pdf
