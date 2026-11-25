---
title: "From Skiplists to B+ Trees: Making Valkey Sorted Sets More Memory Efficient"
authors:
  - "Rain Valentine"
  - "Dragos Andriciuc"
year: 2026
venue: "Valkey blog (Technical Deep Dive), 16 Nov 2026"
arxiv: null
doi: null
source: "https://valkey.io/blog/from-skiplist-to-b%2Btree/"
version_reviewed: "web 2026-11-16"
topics:
  - "b-plus-trees"
  - "skiplists"
  - "sorted-sets"
  - "cache-friendly-data-structures"
  - "simd-search"
  - "memory-overhead"
  - "in-memory-databases"
seed_rank: 2717
seed_batch: "craft-2026-11-25"
reviewed: "2026-11-25"
pool: "systems"
relevance_score: 7
lineage: contemporary-databases
cites:
  - title: "From Skiplists to B+ Trees: Making Valkey Sorted Sets More Memory Efficient"
    url: "https://valkey.io/blog/from-skiplist-to-b%2Btree/"
    year: 2026
    arxiv: null
    doi: null
  - title: "ZSET B+ Tree PR 3: Replace skiplist with FB+ Tree implementation (valkey-io/valkey#4206)"
    url: "https://github.com/valkey-io/valkey/pull/4206"
    year: 2026
    arxiv: null
    doi: null
  - title: "What Every Programmer Should Know About Memory"
    url: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf"
    year: 2007
    arxiv: null
    doi: null
---

# From Skiplists to B+ Trees: Making Valkey Sorted Sets More Memory Efficient

## One-sentence takeaway

Valkey 9.2 replaces the skiplist behind large sorted sets with fbtree, a 61-way B+ tree whose 512-byte leaves and inner nodes are sized to jemalloc classes, whose inner nodes carry 4-byte prefix-stripped "features" compared with SIMD, and whose leaves are linked and end-cached; per-member index overhead drops from 50.3 B to 28.5–32.0 B (36–43%) and `ZADD`/`ZREM` throughput rises 105%/76% with no change to commands.

## Why it matters here

A production case for the data-oriented default that Anoptic and ano already assume: replace one-node-per-element pointer structures with wide, allocator-sized nodes, keep comparison data inline, and let SIMD pick the child before the child is fetched. It is a ready pattern for any ordered index in ano's column store (rank and range queries over a sorted key alongside a hash for point lookups, which is exactly Valkey's skiplist + hashtable pairing), and the benchmark table is an honest map of where the win shows up (repositioning updates and rank lookups) and where it does not (range scans once traversal is cheap, hashtable-served lookups).

## Key ideas

- **Why skiplists lose.** One allocation per element, a backward pointer plus on average 1.33 levels of 8-byte pointer and 8-byte span (about 29 B), plus an 8-byte score, roughly 37 B per node before the member; and each step is a dependent fetch from wherever the heap put the node.
- **Allocator-shaped nodes.** 61-way fanout; a 512-byte leaf holds 61 value pointers, and inner and leaf sizes match jemalloc size classes on 64-bit builds. Score and member are packed into one value (normalized 8-byte score, then member bytes) so comparisons need one fetch.
- **Feature-based SIMD descent.** Inner nodes store each child's anchor with a shared common prefix factored out and a 4-byte distinguishing feature; features are compared in parallel with SIMD and often pick the child before its node is loaded, otherwise they narrow the binary search.
- **Workload fast paths.** Doubly linked leaves for range walks (the next leaf can be prefetched while 61 items are processed), cached leftmost/rightmost leaves for O(1) pop and append, range deletes without rebuilding, and a follow-up PR (#4526, merged 10 Nov 2026) that compacts sparse leaves inline on the delete path.
- **Measured.** 5 M 20-byte members: 50.3 B → 28.5 B per member sequential (−43%, ~109 MB), → 32.0 B random (−36%, ~92 MB). On a 64-core Graviton3, 3 M members: `ZADD` +105%, `ZREM` +76%, `ZCOUNT` +27%, `ZRANK` +19%, scans +1–6%, `ZPOPMIN` ~0%.

## Caveats

A project blog post; the throughput numbers come from the PR branch and were explicitly not rerun on the merged commit, on one ARM machine. The memory comparison covers only the ordered index (hashtable and member storage unchanged), so whole-set savings shrink as members get larger. Valkey 9.2 was in release-candidate testing at the time of writing. The design is single-threaded per keyspace and makes no concurrency claims; read alongside the library's concurrent B-tree and skiplist cards rather than as a replacement for them. The PR code was not read (PR #4206 merged 6 Aug 2026; #4526 merged 10 Nov 2026, per GitHub).

## Links

- Post: https://valkey.io/blog/from-skiplist-to-b%2Btree/
- Implementation PR: https://github.com/valkey-io/valkey/pull/4206
- Leaf compaction PR: https://github.com/valkey-io/valkey/pull/4526
