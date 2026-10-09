---
title: "Efficient Implementation of the Smalltalk-80 System"
authors:
  - "L. Peter Deutsch"
  - "Allan M. Schiffman"
year: 1984
venue: "POPL '84, 297–302"
arxiv: null
doi: "10.1145/800017.800542"
source: "https://doi.org/10.1145/800017.800542"
topics:
  - inline-caches
  - jit-compilation
  - dynamic-languages
  - virtual-machines
seed_rank: 2255
seed_batch: "archive-2026-10-10"
reviewed: "2026-10-10"
pool: "languages"
relevance_score: 9
lineage: inline-caches
see:
  - 1362-optimizing-dynamically-typed-object-oriented-languages-with-po
cites:
  - title: "Efficient Implementation of the Smalltalk-80 System"
    url: "https://doi.org/10.1145/800017.800542"
    year: 1984
    arxiv: null
    doi: "10.1145/800017.800542"
---

# Efficient Implementation of the Smalltalk-80 System

## One-sentence takeaway

Deutsch and Schiffman made Smalltalk fast by translating bytecode to native code on demand, caching the looked-up method right at each call site (the inline cache), and keeping activation records on a real stack until something actually needed them as objects.

## Why it matters here

The library already has polymorphic inline caches (1362, Hölzle et al. 1991) but not the paper they extend. This is the origin of three ideas that every fast dynamic runtime still uses: dynamic translation, monomorphic inline caches, and lazily reified contexts. That is directly relevant to an ano interpreter or JIT, where dispatch on array type and rank plays the role of message send.

## Key ideas

- **Dynamic translation.** Methods are compiled from bytecode to machine code when first run and kept in a cache that can be flushed, so the portable bytecode stays the canonical form.
- **Inline caching.** Each send site remembers the receiver class and target of its last lookup; a quick class check in the callee prologue confirms the guess, and a miss falls back to full lookup and rewrites the site.
- **Contexts on a stack.** Activation records live as ordinary stack frames and are turned into heap objects only when a program inspects or captures them.
- The paper reports that most send sites see only one receiver class, which is why the single-entry cache works.

## Caveats

It is a six-page 1984 paper tied to 1980s hardware, so its speed numbers are historical. A single-entry cache thrashes at polymorphic sites, which is exactly what 1362 fixes. Code-cache flushing and invalidation on method redefinition are only sketched. Full text is in the ACM Digital Library.

## Links

- Paper (DOI): https://doi.org/10.1145/800017.800542
