---
title: "Optimizing Dynamically-Typed Object-Oriented Languages with Polymorphic Inline Caches"
authors:
  - "Urs Hölzle"
  - "Craig Chambers"
  - "David Ungar"
year: 1991
venue: "ECOOP 1991"
arxiv: null
doi: "10.1007/BFb0057013"
source: "https://doi.org/10.1007/BFb0057013"
topics:
  - "polymorphic-inline-caches"
  - "adaptive-compilation"
  - "dynamic-dispatch"
  - "runtime-profiling"
seed_rank: 1362
seed_batch: "archive-2026-08-26"
reviewed: "2026-08-26"
pool: "systems"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "SELF: The Power of Simplicity"
    url: "https://doi.org/10.1145/38765.38828"
    year: 1987
    arxiv: null
    doi: "10.1145/38765.38828"
  - title: "An Efficient Implementation of SELF, a Dynamically-Typed Object-Oriented Language Based on Prototypes"
    url: "https://doi.org/10.1007/BF01806108"
    year: 1991
    arxiv: null
    doi: "10.1007/BF01806108"
  - title: "Optimizing Dynamically-Dispatched Calls with Run-Time Type Feedback"
    url: "https://doi.org/10.1145/773473.178478"
    year: 1994
    arxiv: null
    doi: "10.1145/773473.178478"
see:
  - "687-self-the-power-of-simplicity"
  - "674-rabbit-a-compiler-for-scheme"
---

# Optimizing Dynamically-Typed Object-Oriented Languages with Polymorphic Inline Caches

## One-sentence takeaway

A call site can cache several receiver shapes; that both accelerates dispatch and becomes a free, local type profile for adaptive recompilation.

## Problem

Monomorphic inline caches fail at genuinely polymorphic sends, while static type inference often cannot recover enough receiver information in dynamic object systems to inline methods or specialize code.

## Design

Replace a generic method lookup with a short typecase chain mapping observed receiver maps to direct targets. Keep a bounded set of cases per call site and fall back to normal lookup for misses or megamorphic sites. The same cache records the empirical type distribution; a recompiling optimizer consumes it to inline hot targets and specialize paths.

## Evidence

ECOOP 1991, LNCS 512, pp. 21–38. On typical SELF programs, PICs produced a median 11% dispatch speedup; using their type feedback in an experimental compiler yielded a median 27% speedup and roughly halved non-inlined sends.

## Limitations

Profiles are workload-dependent and can go stale; cache chains become poor at megamorphic sites; code specialization increases code size and requires invalidation/deoptimization when classes or methods change. The measured suite and hardware are early-1990s SELF, not a universal bound.

## Implications for Broadside

ano’s dynamic verbs, schemas, and rule targets can use tiny per-site shape caches instead of global speculative typing. Record misses and observed schema IDs as useful telemetry, specialize only hot stable sites, and retain a cheap generic path plus deoptimization. The cache is simultaneously fast path and sensor.

## Bottom line

Mint the feedback loop. SELF (687) supplies the language model; PICs turn runtime uncertainty into evidence a compiler can exploit.

## Links

- DOI: [10.1007/BFb0057013](https://doi.org/10.1007/BFb0057013)
