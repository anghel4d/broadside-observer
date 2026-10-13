---
title: "Deny Capabilities for Safe, Fast Actors"
authors:
  - "Sylvan Clebsch"
  - "Sophia Drossopoulou"
  - "Sebastian Blessing"
  - "Andy McNeil"
year: 2015
venue: "AGERE! 2015 (5th Int. Workshop on Programming Based on Actors, Agents, and Decentralized Control), 1–12"
arxiv: null
doi: "10.1145/2824815.2824816"
source: "https://www.ponylang.io/media/papers/fast-cheap.pdf"
topics:
  - region-memory-capabilities
  - reference-capabilities
  - actors
  - data-race-freedom
seed_rank: 2283
seed_batch: "archive-2026-10-14"
reviewed: "2026-10-14"
pool: "languages"
relevance_score: 9
lineage: reference-capabilities
see:
  - 133-region-based-memory-management-in-cyclone
  - 1048-ownership-types-for-flexible-alias-protection
cites:
  - title: "Deny Capabilities for Safe, Fast Actors"
    url: "https://doi.org/10.1145/2824815.2824816"
    year: 2015
    arxiv: null
    doi: "10.1145/2824815.2824816"
  - title: "Region-Based Memory Management in Cyclone"
    url: "https://doi.org/10.1145/512529.512563"
    year: 2002
    arxiv: null
    doi: "10.1145/512529.512563"
  - title: "Ownership Types for Flexible Alias Protection"
    url: "https://doi.org/10.1145/286936.286947"
    year: 1998
    arxiv: null
    doi: "10.1145/286936.286947"
---

# Deny Capabilities for Safe, Fast Actors

## One-sentence takeaway

Pony's type system gives actors shared memory with no data races by tagging each reference with what it denies to other aliases, locally and in other actors, which yields six capabilities (iso, trn, ref, val, box, tag) that decide statically what may be read, written or sent in a message, so messages pass pointers instead of copies.

## Why it matters here

ano and the Anoptic engine both want message-passing concurrency (a lock-free bus, jobs, ECS systems) without copying big payloads and without locks. The library has ownership types (1048), Cyclone regions (133), snmalloc's message-passing allocator (322) and Verona's later reference capabilities (1657), but not the Pony paper that made "deny properties" the organizing idea. Its matrix is a compact design vocabulary for deciding which component arrays a system may mutate, which it may only read, and which it may hand to another thread whole.

## Key ideas

- **Deny, don't allow.** A capability says which aliases are denied: what other references in the same actor (local) and in other actors (global) may do. What the reference itself may do is derived from that.
- **Six capabilities.** iso (isolated: no other readable or writable aliases anywhere), trn (write-unique: one writer, local readers), ref (ordinary mutable, local only), val (deeply immutable, shareable), box (read-only view that may have local writers), tag (identity only: compare or send asynchronous messages, never read or write; actors are typed tag).
- **Sendable = iso, val, tag.** Only references that deny the same things locally as globally can cross actors, so sending an iso transfers it and sending a val shares it, both without copying or locking.
- **Unique without destructive reads.** Viewpoint adaptation (the capability of a field seen through a reference), "safe to write" rules, unaliased types for `consume` and a `recover` expression let programs traverse and modify isolated structures, and turn a trn into a val once writing is done.
- **Static regions.** iso and trn references form static regions (a new write region for trn) with no extra annotation. In about 10k lines of the standard library, 89.3% of types needed no capability annotation thanks to defaults.
- **Fast runtime.** The LLVM-compiled implementation was benchmarked with the CAF actor benchmark suite and HPCC RandomAccess against other actor systems and MPI; the authors report it as comparable or faster, normalized against single-core Erlang.

## Caveats

A 2015 workshop paper: it presents the formal type system and operational semantics but leaves the soundness proof to future work, as the authors say. The benchmarks are the authors' own runs of others' suites, which they themselves call "to some degree snake oil". The capability matrix has a learning curve, and Pony's per-actor garbage collection, which the runtime depends on, is described elsewhere.

## Links

- Paper (Pony project PDF): https://www.ponylang.io/media/papers/fast-cheap.pdf
- Paper (DOI): https://doi.org/10.1145/2824815.2824816
