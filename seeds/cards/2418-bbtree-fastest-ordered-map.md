---
title: "bbtree: fastest ordered map"
authors:
  - "Xiangpeng Hao"
year: 2026
venue: "Rust crate, design notes and interactive post (bbtree.xiangpeng.systems), Oct 2026"
arxiv: null
doi: null
source: "https://bbtree.xiangpeng.systems/post/"
topics:
  - "b-trees"
  - "concurrent-data-structures"
  - "optimistic-concurrency"
  - "simd"
  - "cache-conscious"
  - "formal-verification"
seed_rank: 2418
seed_batch: "craft-2026-10-25"
reviewed: "2026-10-25"
pool: "systems"
relevance_score: 9
cites:
  - title: "bbtree: fastest ordered map (post)"
    url: "https://bbtree.xiangpeng.systems/post/"
    year: 2026
    arxiv: null
    doi: null
  - title: "XiangpengHao/bbtree (GitHub repository)"
    url: "https://github.com/XiangpengHao/bbtree"
    year: 2026
    arxiv: null
    doi: null
  - title: "bbtree design notes: blog post text (design/14-blogpost.md)"
    url: "https://github.com/XiangpengHao/bbtree/blob/main/design/14-blogpost.md"
    year: 2026
    arxiv: null
    doi: null
see: ["1596-skiplists-with-foresight-skipping-cache-misses", "293-epoch-based-reclamation-practical-lock-freedom", "1857-can-seqlocks-get-along-with-programming-language-memory-models", "235-releasing-memory-with-optimistic-access-a-hybrid-approach-to", "2396-spmc-broadcast-ring-in-shared-memory"]
---

# bbtree: fastest ordered map

## One-sentence takeaway

bbtree is a Rust B-tree, with a drop-in `BTreeMap`/`BTreeSet` replacement and a concurrent map, built on a three-rule cost model: first chained cache misses, then instructions, then coherence traffic. The author reports it as 5× faster than std's `BTreeMap` on one thread, 12× faster than `crossbeam-skiplist` at 96 threads, 30% smaller, and 1.37–6.83× faster when swapped into four LSM-tree memtables.

## Why it matters here

The post is a clear worked example of the cost model Anoptic's hot paths should use, applied to an ordered index. Inline fixed-width key prefixes plus SIMD popcount search turn a node lookup into one cache line and a few branchless instructions. Version-locked inner nodes give reads that write nothing. A type-stable free list (freed nodes are never returned to the allocator, and versions only grow) replaces epoch-based reclamation. That free list is the same trick a wait-free bus or an ECS slot pool can use. The batch API, which treats a cache miss as an `await` on a tiny allocation-free executor, is a reusable pattern for any chained-lookup structure, and the correctness setup is worth copying too: fuzzing against std, Verus proofs, and Shuttle deterministic simulation.

## Key ideas

- **Inline keys and implied prefixes.** Each node stores 2–8 byte fixed-width key slices, like German strings or Arrow `StringView`. The common prefix is implied by the two parent separators, so it is never stored. The full key is read only on a tie. A user `InlineKey` trait plus hand-written cases for common types keep it a drop-in replacement on stable Rust.
- **Count instead of search.** An AVX-512 compare of 32 two-byte keys produces a mask, and its popcount is the child index. NEON is hand-written too: on an M1 Pro the compiler's own count widened each compare to 64 bits and summed them one at a time, and hand NEON took a `u64` lookup in a 10M-entry map from 1,678 to 407 instructions and from 390 to 174 ns.
- **Batched lookups as async state machines.** `get_many`/`insert_many` run one lane per key. Each lane prefetches the next node and yields, which hides the chained misses of a tree descent.
- **Optimistic inner nodes, locked leaves.** Reads validate a version before and after. Leaves are not optimistic, so a `&V` can be handed out safely. `get_copied` reads leaves seqlock-style.
- **Reclamation without epochs.** Freed nodes go to a per-map free list. Reuse bumps the version, so a late reader retries instead of faulting.
- **mmap-able form (`bbtree-mmap`).** The first answer after a restart arrives 160–2,500× sooner than rebuilding a std `BTreeMap`.

## Caveats

- All numbers are the author's own: Ryzen 9 9900X for one thread, AWS c8a.metal-24xl for 96 threads, and the LSM-tree and Turso integrations run on each project's own benchmarks. They have not been independently reproduced. AVX-512 needs `-C target-cpu=native`.
- The author says all implementation code is LLM-written and that he steers the design and is accountable for it. The deterministic-simulation tools already caught one race (issue #9).
- Nodes freed into the map's free list are not returned to the allocator while the map lives, so memory stays at its peak size after deletes.
- The post page renders with JavaScript and WebAssembly. Its text is mirrored in the repository's `design/14-blogpost.md`.

## Links

- Post: https://bbtree.xiangpeng.systems/post/
- Repository: https://github.com/XiangpengHao/bbtree
- Post text (design notes): https://github.com/XiangpengHao/bbtree/blob/main/design/14-blogpost.md
- Crate: https://crates.io/crates/bbtree
