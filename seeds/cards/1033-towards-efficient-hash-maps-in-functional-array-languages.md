---
title: "Towards Efficient Hash Maps in Functional Array Languages"
authors: ["William Henrich Due", "Martin Elsman", "Troels Henriksen"]
year: 2025
venue: "arXiv"
arxiv: "2508.11443"
doi: null
source: "https://arxiv.org/abs/2508.11443"
topics: [array-languages, futhark, hash-maps, nested-data-parallelism]
seed_rank: 1033
seed_batch: "craft-2026-08-15"
reviewed: "2026-08-15"
pool: "languages"
relevance_score: 10
lineage: array-languages
cites:
  - title: "Storing a Sparse Table with O(1) Worst Case Access Time"
    url: "https://doi.org/10.1145/828.1884"
    year: 1984
    arxiv: null
    doi: "10.1145/828.1884"
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://doi.org/10.1145/3062341.3062354"
    year: 2017
    arxiv: null
    doi: "10.1145/3062341.3062354"
  - title: "NESL: A Nested Data-Parallel Language (Version 3.1)"
    url: "https://www.cs.cmu.edu/~scandal/nesl.html"
    year: 1995
    arxiv: null
    doi: null
  - title: "Getting to the Point: Index Sets and Parallelism-Preserving Autodiff for Pointful Array Programming"
    url: "https://arxiv.org/abs/2104.05372"
    year: 2021
    arxiv: "2104.05372"
    doi: "10.1145/3473593"
see:
  - "1002-futhark-purely-functional-gpu-programming"
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
  - "926-the-semantics-of-rank-polymorphism"
  - "918-dual-numbers-reverse-ad-for-functional-array-languages"
  - "927-latent-idiom-recognition-for-a-minimalist-functional-array"
  - "174-comparing-parallel-functional-array-languages-programming-an"
---

# Towards Efficient Hash Maps in Functional Array Languages

## One-sentence takeaway

FKS two-level hashing, flattened into data-parallel Futhark (histograms, segmented-or, no sort), plus an ML-module API whose `ctx` trick encodes irregular keys (strings) without jagged arrays.

## Why it matters here

ano is an embedded array/columnar language that will need maps — ECS lookups, GRID COMMAND unit tables, Japanese-surface dictionaries — *inside* the language, not as a C runtime cheat the way APL interpreters hide hashtables. This is the construction + the interface, and an honest autopsy of why cuCollections still wins.

## Key ideas

- Collision-free FKS: level-1 hashes into *n* buckets; each bucket retries random hash constants until level-2 (`mod m²`) is collision-free. Expected *O(n)* work, *O(log n)* span.
- Flattening: `groupby` becomes a histogram + per-key bucket index (sortless); unfinished buckets are filtered and their indices remapped via prefix-sum so remaining work stays dense.
- Irregular keys: a string is `(offset, length)` into a shared `ctx` character array. Hash/`<=` take *two* contexts so lookup needles need not live in the map's pool. Type system will not catch a swapped ctx.
- vs binary search / Eytzinger: hash maps win on GPU. vs cuCollections open-addressing: 2–10× slower; the gap is (a) Futhark codegen and (b) the data-parallel vocabulary cannot express warp-cooperative linear probing's *encapsulated* nondeterminism.

## Caveats

- Static maps (rebuild to insert). Not a concurrent mutable table for the Anoptic lock-free bus.
- Histogram construction uses atomics under the hood — the functional story is the *interface*, not the absence of atomics in the compiler.
- The paper's own conclusion: either add a local-nondeterminism effect, or bite the bullet and make maps a built-in like arrays.

## Links

- arXiv: [2508.11443](https://arxiv.org/abs/2508.11443)
- PDF: https://arxiv.org/pdf/2508.11443
