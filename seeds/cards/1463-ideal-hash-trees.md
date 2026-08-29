---
title: "Ideal Hash Trees"
authors: ["Phil Bagwell"]
year: 2001
venue: "EPFL Technical Report"
arxiv: null
doi: null
source: "https://lampwww.epfl.ch/papers/idealhashtrees.pdf"
topics: [array-programming-apl-bqn-q, embedded-scripting-dsls, ecs-data-oriented-simulation]
seed_rank: 1463
seed_batch: "archive-2026-08-30"
reviewed: "2026-08-30"
pool: "languages"
relevance_score: 10
lineage: persistent-data-structures
cites:
  - title: "Fast And Space Efficient Trie Searches"
    url: "https://lampwww.epfl.ch/papers/triesearches.pdf"
    year: 2000
    arxiv: null
    doi: null
  - title: "Making Data Structures Persistent"
    url: "https://doi.org/10.1016/0022-0000(89)90034-2"
    year: 1989
    arxiv: null
    doi: "10.1016/0022-0000(89)90034-2"
  - title: "RRB vector: a practical general purpose immutable sequence"
    url: "https://doi.org/10.1145/2784731.2784739"
    year: 2015
    arxiv: null
    doi: "10.1145/2784731.2784739"
  - title: "Towards Efficient Hash Maps in Functional Array Languages"
    url: "https://arxiv.org/abs/2508.11443"
    year: 2025
    arxiv: "2508.11443"
    doi: null
see:
  - "1441-finger-trees-a-simple-general-purpose-data-structure"
  - "1033-towards-efficient-hash-maps-in-functional-array-languages"
  - "1461-making-data-structures-persistent"
  - "836-the-adaptive-radix-tree-artful-indexing-for-main-memory-data"
---

# Ideal Hash Trees

## One-sentence takeaway

Hash the key, walk a 32-way Array Mapped Trie on the hash bits, and you get a dictionary with no root-table sizing, no expensive resize, and expected O(1) insert/search/delete — the HAMT that Clojure, Scala, and Python's `contextvars` later made persistent by path copying.

## Why it matters here

Finger Trees (1441) are the persistent *sequence* cell; unordered maps are the other half of ano's value story. Bagwell's HAMT is the map you actually ship: bitmap-indexed 32-wide nodes, `popcount` to pack children, hash bits as the trie path. Futhark hash maps (1033) are the array-language cousin; ART (836) is the ordered mutable cousin. For ano, path-copy a HAMT and you get persistent dicts without a resize pause in the sim loop.

## Key ideas

- **Array Mapped Trie.** A sparse 32-way node is a bitmap plus a packed child array; popcount(bitmap & (slot-1)) is the index. No empty slots, no initial root table.
- **Hash Array Mapped Trie.** Use successive hash-bit chunks as the path. Distinguish keys by extending depth until hashes differ; collisions fall to a bag.
- **No resize cliff.** Insert/search/delete times stay small and essentially constant in key-set size; misses cost *less* than hits.
- **Evidence.** EPFL technical report, 2001 (AMT introduced in Bagwell 2000). Became Clojure `PersistentHashMap`, Scala `HashMap`, and the CPython HAMT. RRB-vectors (Stucki–Rompf–Ureche–Bagwell 2015) are the concat leftover, cited not minted.

## Caveats

The 2001 report is the *mutable* HAMT plus a disk Partition-Hashing variant; persistence is the obvious path-copy (Driscoll 1461) applied by later implementers — do not pretend Bagwell measured Clojure. Worst-case depth is hash-quality-dependent; you still need a good mix. Mutable open addressing (hopscotch 400, Swiss tables) still wins for ephemeral hot maps. Not a remint of ART (836) or Futhark maps (1033).

## Links

- PDF: https://lampwww.epfl.ch/papers/idealhashtrees.pdf
- Infoscience: https://infoscience.epfl.ch/handle/20.500.14299/221731
- AMT predecessor: https://lampwww.epfl.ch/papers/triesearches.pdf
